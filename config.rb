require "compass/import-once/activate"

http_path = "/"
css_dir = "build/css"
sass_dir = "dev/sass"
images_dir = "build/images"
javascripts_dir = "build/javascripts"

output_style = :compressed #:expanded or :nested or :compact or :compressed

#relative_assets = true

line_comments = false

environment = :production
sourcemap = (environment == :production) ? false : true

preferred_syntax = :sass

#sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
