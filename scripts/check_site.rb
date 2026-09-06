# Run after a Jekyll build. No extra gems required.
require 'pathname'
require 'uri'
require 'cgi'
root = Pathname.new(ARGV.fetch(0, '_site')).expand_path
abort "Missing build directory: #{root}" unless root.directory?
errors = []
pages = root.glob('**/*.html')
pages.each do |page|
  html = page.read(encoding: 'UTF-8')
  errors << "#{page}: expected one h1" unless html.scan(/<h1\b/i).size == 1
  errors << "#{page}: unresolved Liquid" if html.match?(/\{%|\{\{/)
  errors << "#{page}: placeholder content" if html.match?(/Demo content|Sample sample|Your University|Example Award/)
  ids = html.scan(/\bid="([^"]+)"/).flatten
  errors << "#{page}: duplicate IDs" unless ids.uniq == ids
  html.scan(/(?:href|src)="([^"]+)"/).flatten.each do |raw|
    url = CGI.unescapeHTML(raw)
    next if url.empty? || url.start_with?('//') || url.match?(/\A[a-z][a-z0-9+.-]*:/i)
    path, fragment = url.split('#', 2)
    if path.empty?
      errors << "#{page}: missing anchor #{fragment}" if fragment && !ids.include?(fragment)
      next
    end
    path = URI::DEFAULT_PARSER.unescape(path.split('?', 2).first)
    target = path.start_with?('/') ? root.join(path.delete_prefix('/')) : page.dirname.join(path)
    target = target.join('index.html') if target.directory?
    errors << "#{page.relative_path_from(root)}: missing #{url}" unless target.file?
  end
end
abort errors.join("\n") unless errors.empty?
puts "Checked #{pages.size} pages: links, headings, IDs, Liquid, and placeholders passed."
