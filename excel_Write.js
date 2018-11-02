var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = 8080;
app.use(bodyParser.json());

var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let cors = require('cors');
app.use(cors())

//Post request data on excel sheet
app.post('/writeData', function(req, res) { 
	workbook.xlsx.readFile(req.body.filename)
		.then(function() {
			console.log("Write API Hit");
			var worksheet = workbook.getWorksheet(1);
			worksheet.getCell(req.body.cellId).value = req.body.value; 
			worksheet.getRow().commit();
			return workbook.xlsx.writeFile(req.body.filename);
    });
	res.jsonp({"Status" : 200});	
});

app.post('/readData', function(req, res) { 
	workbook.xlsx.readFile(req.body.filename)
		.then(function() {
			console.log("Read API Hit");
			var worksheet = workbook.getWorksheet(1);
			let v = worksheet.getCell(req.body.cellId).value;
			res.jsonp({"row" : v});	
			return;
	});
});

app.listen(port, () => console.log(`API Mock Server listening on port ${port}!`));
