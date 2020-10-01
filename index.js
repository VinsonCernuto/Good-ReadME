const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");


inquirer.prompt([
    {
        type:"input",
        message:"Enter Project Title",
        name:"title" 
    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    },
    {
        type:"input",
        message:"",
        name:""

    }
])
.then(function(answers){
    console.log(answers);

const generateFile = generateMarkdown(answers)
})
