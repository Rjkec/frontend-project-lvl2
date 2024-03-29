#!/usr/bin/env node
// import { Command } from 'commander';
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name("gendiff") 
  .usage('[options] <filepath1> <filepath2>')
  .description(`Compares two configuration files and shows a difference.
  `)
  .version('0.0.0')
  .option('-f, --format <type>','output format','stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));

  });
program.parse();






// program = new Command();
// program
//   .name('gendiff')
//   .description('Compares two configuration files and shows a difference.')
//   .version('0.0.0')
//   .addHelpCommand();
  
