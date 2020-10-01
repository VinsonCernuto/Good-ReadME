//external
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
//internal
const api = require("./api");
const generateMarkdown = require("./generateMarkdown");
const { userInfo } = require("os");


inquirer.prompt([
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"username"
    },
    {
        type:"input",
        message:"Enter Project Title",
        name:"title" 
    },
    {
        type:"input",
        message:"Write a description of your project",
        name:"description"

    },
    {
        type:"input",
        message:"If installation steps rquired, describe the steps required to install your project for the Installation section.",
        name:"installation"

    },
    {
        type:"input",
        message:"Provide instructions and examples of your project in use for the Usage section.",
        name:"usage"

    },
    {
        type:"list",
        message:"Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name:"license"

    },
    {
        type:"input",
        message:"If applicable, provide guidelines on how other developers can contribute to your project.",
        name:"contributing"

    },
    {
        type:"input",
        message:"If applicable, provide any tests written for your application and provide examples on how to run them.",
        name:"tests"

    },
    {
        type:"input",
        message:"Enter contact email",
        name: "Email"
    }
]);

function writeToFile(fileName, answers){
    fs.writeFile(fileName, answers, err =>{
        if (err){
            return console.log(err);
        }

        console.log("README File has been created")
    });
}

const writeAsync = untill.promisify(writeToFile);

//function to collect everything needed
async function init(){
    try{
        //user answers
        const responses = await inquirer.prompt;
        console.log("your responses: ", answers)

        //call Github to find input username
        const gitUserName = await api.getUser(userInfo);

        //adding answers and github to generate markdown
        const markdown = generateMarkdown(answers, userInfo);
        console.log(markdown);

        //write to file
        await writeAsync("README.md, markdown")
    
    } catch(error){
        console.log(error);
    }
};
