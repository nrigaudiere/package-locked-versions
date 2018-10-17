const packageJSON = require('./package.json');

const unlockedPackages = [];

Object.entries(packageJSON.dependencies).forEach((dep) => {
  if (dep[1].match(/[\^~><=|*]/)) {
    unlockedPackages.push(dep[0]);
  }
});

if (unlockedPackages.length > 0) {
  console.error('Please lock the versions in the following packages: ');

  unlockedPackages.forEach((pack) => {
    console.error(` - ${pack}`);
  });
  process.exit();
} else {
  console.info('All packages are locked');
}
