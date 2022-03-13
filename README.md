# Team Profile Generator

## Table of contents
* [Description](#description)
* [Screenshots](#screenshots)
* [Built with](#built-with)
* [How it works](#how-it-works)
* [How to run tests](#how-to-run-tests)
* [License](#license)

## Description
  The Team profile generator is an application used by team managers to generate a page with their team information. The page displays all the required details of the team members.
  
## Screenshots

![screencapture-file-C-Users-Priyanka-GTBC-Homework-team-profile-generator-dist-index-html-2022-03-12-22_10_44](https://user-images.githubusercontent.com/65467469/158043550-84fb640c-6917-49bb-ada5-30d2a5a35a54.png)

![CLI](https://user-images.githubusercontent.com/65467469/158043646-a7ca5def-530b-4edb-a238-233878113654.jpg)

![Run_tests](https://user-images.githubusercontent.com/65467469/158043654-4ee4e061-2b21-4c31-b9fe-939ff75a9a0d.jpg)


To watch the demo please follow URL : 
https://drive.google.com/file/d/1GbFjOuA1DZQsHpJJFWlAHSTHvcrW5XJ1/view?usp=sharing


## Built with
This application is built using :
* Node js
  * Inquirer package
  * Jest package
* Javascript
* HTML
* CSS
* Bootstrap

## How it works
1. Install using the command:

    * npm i

2. Run the command:

    * node index.js

3. Answer the questions prompted at the terminal 
    * User is prompted questions about Manager , Engineer and Intern.
    * The question to add more team members is prompted until the user chooses the option 'Done adding all members!' 
4. Once all questions are answered an index.html file is generated
5. Open the index.html file in a browser
    * All the details of the employees are displayed
6. Click on email id 
    * The default email application is opened with the To field populated with the selected email id.
7. Click on GitHub Id 
    * The github profile page is opened in a new tab.

## How to run tests

1. Execute the following command in the CLI:
    * npm test
	
## License
 This application is licensed under the [MIT](https://github.com/pdhende/team-profile-generator/blob/main/LICENSE) license.

