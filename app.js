// const fs = require('fs');
// // fs.writeFileSync('notes.txt','file made by node js');
// fs.appendFileSync('notes.txt','this message was added to node js by appending');

const chalks = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js'); 


yargs.command({
    command: 'add',
    describe: 'adding func',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler (argv) {

        notes.addnotes(argv.title,argv.body);
        
    }
}).parse();

yargs.command({
    command: 'remove',
    describe: 'remove func',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
        
    handler (argv) {
        console.log(argv.title);
        notes.removenote(argv.title);
    }
}).parse();

yargs.command({
    command: 'list',
    describe: 'list func',
    handler() {
        console.log('list function called');
        notes.listnotes();
    }
}).parse();

yargs.command({
    command: 'read',
    describe: 'read func',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('read function called');
        notes.readnotes(argv.title);
    }
}).parse();
