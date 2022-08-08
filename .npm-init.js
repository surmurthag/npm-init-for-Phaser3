exports.name = prompt('name', package.name || basename)
exports.version = '1.0.0'
exports.description = 'different git grouping my achievements with Phaser3 in JS'
exports.main = package.main || 'index.js'
exports.author = 'PINCHON Fabrice Surmurthag (http://surmurthag.github.io)'
exports.dependencies = 'phaser-matter-collision-plugin phaser3-plugin-isometric'
exports.directories = {
  lib: 'lib',
  dist: 'dist'
}
exports.repository = 'https://github.com/surmurthag/'
exports.bugs = 'https://github.com/surmurthag/npm-init-phaser3/issues'
exports.keywords = 'phaser, html5, video-game'
exports.license = 'MIT'
exports.homepage = 'https://https://github.com/surmurthag/npm-init-phaser3/blob/master/README.md'
exports.scripts = {
  test: 'Error: no test specified\" && exit 1'
}

