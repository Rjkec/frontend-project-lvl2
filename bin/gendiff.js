#!/usr/bin/env node
// import { Command } from 'commander';
const { program } = require('commander');


program
  .name("gendiff") 
  .description(`Compares two configuration files and shows a difference.
  `)
  .version('0.0.0')
  .option('-f, --format <type>','output format')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  ;
program.parse();






// program = new Command();
// program
//   .name('gendiff')
//   .description('Compares two configuration files and shows a difference.')
//   .version('0.0.0')
//   .addHelpCommand();
  
