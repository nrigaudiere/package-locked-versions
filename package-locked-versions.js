#!/usr/bin/env node
const path = require('path');
const packageJSON = require(`${process.env.PWD}/package.json`);
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

  process.exit(1);
} else {
  console.info('All packages are locked');
}
