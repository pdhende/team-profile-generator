// Function to generate the HTML page

const fs = require('fs');

function createTeamPage(managerDet, engArr, internArr) {
    console.log(managerDet.name);

    let html1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Page</title>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&family=Merriweather:wght@700&display=swap"
        rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" href="./assets/css/jass.css" />
      <link rel="stylesheet" href="./dist/style.css" />
    </head>
    
    <body>
    
        <header class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container text-center">
              <h1>The Team</h1>
            </div>
        </header>
    
        <div class="container-fluid">
            <div class="row">`;

    // Code to loop through objects and create cards
    let html2 = '';
    html2 = `<div class="card" style="width: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">${managerDet.name}</h5>
                        <p class="card-text">Manager</p>
                    </div>
                    <div class="p-2">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: ${managerDet.id}</li>
                            <li class="list-group-item">Email: ${managerDet.email}</li>
                            <li class="list-group-item">Office Number: ${managerDet.officeNumber}</li>
                        </ul>
                    </div>
                </div>`;
    
    let html3 =         
        `</div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <!-- <script src="./assets/js/script.js"></script> -->
</body>
</html>`;

    const HTMLPage = html1 + html2 + html3;
    console.log(HTMLPage);  
}


module.exports = createTeamPage;