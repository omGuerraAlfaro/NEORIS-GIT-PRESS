const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/portlet-press/runtime.js',
    './dist/portlet-press/polyfills.js',
    './dist/portlet-press/main.js'
  ];
  await fs.ensureDir('angular-elements-build');
  await fs.removeSync('angular-elements-build/portlet-press.js');
  await concat(files, 'angular-elements-build/portlet-press.js');

  await fs.copy('./src/app/app.component.css', 'angular-elements-build/styles.css');
})();
