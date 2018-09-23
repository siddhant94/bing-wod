#!/usr/bin/env node
'use strict';

const program = require('commander');
const fs = require('fs');

program
  .version('0.0.1')
  .description('Changes your wallpaper with bing wallpaper of the day URL (Ubuntu)')
  .option('-s, --saveImage [destinationFilePath]', 'Directory path to save wallpaper')
  .option('-ss, --saveImageAndSchedule [timeForScheduler]', 'Time for scheduler to change wallpaper')
  .parse(process.argv)

console.log(program.txtFilePath);
const data = fs.readFileSync('./emailList.txt', 'utf8');
const regex = /[}\n{]/g;

let contactList = [];
contactList = data.replace(regex, ',');
contactList = contactList.split(',');

console.log(contactList[0]);

// program
//   .version('0.0.1')
//   .description('Emails the bing wallpaper of the day URL')
//   .command('getwallpaper <emailAdd>')
//   .option('-el, --emailList [emailList]', 'list of email addresses to send image url')
//   .action();
// program.parse(process.argv);
