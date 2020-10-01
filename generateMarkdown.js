// function to generate markdown for README
function generateMarkdown(answers) {
  //Generate Table of contents based on user responses
  let tableOfContents = `## Table of Contents`;
  
  if (answers.installation !== '') {tableOfContents += `
  *[installation](#installation)`};

  if (answers.installation !== '') {tableOfContents += `
  *[Usage](#Usage)`};

  if (answers.installation !== '') {tableOfContents += `
  *[contributing](#contributing)`};

  if (answers.installation !== '') {tableOfContents += `
  *[Tests](#Tests)`};
  
  return `
  # ${answers.title}

  ### Description
  ${answers.description}

  #### Instalation

`;
}

module.exports = generateMarkdown;
