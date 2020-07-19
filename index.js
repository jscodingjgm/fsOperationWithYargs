const fs = require('fs');
const yargs = require('yargs');

if(typeof yargs.argv._[0] != 'undefined' && yargs.argv._[0] != '' && yargs.argv._[0] != null){
    
    if(!fs.existsSync('fileNameMetaFile.txt')){
        fs.openSync('fileNameMetaFile.txt', 'w');
    }

    var existingFileNameBuffer = [];
    existingFileNameBuffer = fs.readFileSync('fileNameMetaFile.txt');

    var existingFileNameArr = existingFileNameBuffer.toString().split(' ');

    if(!existingFileNameArr.includes(yargs.argv._[0])){
        fs.appendFileSync('fileNameMetaFile.txt',yargs.argv._[0] + ' ');
        fs.writeFile(yargs.argv._[0], 'You are awesome!', (err) => {
            if(err)
                console.log(err);
            
            console.log('File Created Successfully!');
        });
    }else{
        console.log('File Name Already Exists. Please provide other file name.');
    }
}else{
    console.log('Please provide a file name.');
}
