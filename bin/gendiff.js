#!/usr/bin/env node
// import { Command } from 'commander';
const { program } = require('commander');


program
  .name("gendiff") 
  .description(`Compares two configuration files and shows a difference.
  `)
  .version('0.0.0');


program.parse();






// program = new Command();
// program
//   .name('gendiff')
//   .description('Compares two configuration files and shows a difference.')
//   .version('0.0.0')
//   .addHelpCommand();
  
