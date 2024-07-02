#!/usr/bin/env node

import boxen from 'boxen'
import { createSpinner } from 'nanospinner'
import colors from 'colors'
import util from 'util'
import link from 'terminal-link'

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkill(languages , header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);

 
    let output = `${header}`.green + ' - ';
    languages.forEach((language, index) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}
async function main(){
    console.log(`

    
    

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta)
    
    
    console.log()
    const spinner = createSpinner('Loading Ahmad\'s details').start()
    
    
    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    await spinnerStart();
    
    spinner.success();
   
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.white);

    console.log()
    
    const githubLink = link('btw its awesome -> ','https://github.com/ahmadsalahuddeen');
    const websiteLInk = link('cli is better, but here it is -> ','https://github.com/ahmadsalahuddeen');
    console.log(`NAME    `.green + ' - ' + 'Ahmad Salahuddeen'.cyan);
    console.log(`STATUS  `.green + ' - ' + 'Full-Stack at Find-energy (remote/ orlando, USA)'.cyan);
    console.log(`GITHUB  `.green + ' - ' + `${githubLink}`.cyan);
    console.log(`WEBSITE `.green + ' - ' + `${websiteLInk}`.cyan);

    console.log()

    console.log(`
    
█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀ █▀
█▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄ ▄█`.white)

console.log()
printSkill(['Java', 'C', 'TypeScript', 'JavaScript'] , 'LANGUAGES   ');
printSkill(['React', 'NextJs', 'Svelte', 'ElderJs'] , 'FRAMEWORKS  ');
printSkill(['Express', 'Nodejs', 'WebSocket' , 'Prisma' , 'Redis'] , 'TECHNOLOGIES');
printSkill(['MongoDb', 'PostgresSQL', 'SQL' ] , 'DATABASES   ');
printSkill(['Docker', 'Kubernetes', , 'AWS'   ] , 'DEVOPS      ');
printSkill(['GIT', 'Github', 'GitLab' ] , 'Tools       ');
printSkill(['Shadcn-ui', 'Tailwind', 'zod', 'Zustand','Redux',  ] , 'Other       ');

console.log(`

█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.white)

console.log()
console.log('Ahmad is up for hire/contribute, ready to help your company get to next heights and ofc Thanks for checking out my cli!'.magenta)
console.log()
}

main()