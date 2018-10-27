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
			console.log("API Hit");
			var worksheet = workbook.getWorksheet(1);
			var row = worksheet.getRow(req.body.row);
			row.getCell(req.body.cell).value = req.body.value; 
			row.commit();
			return workbook.xlsx.writeFile(req.body.filename);
    });
	res.jsonp({"Status" : 200});	
});

//Get request 
app.get('/readData', function(req, res) { 
	workbook.xlsx.readFile('taylor_swift.xlsx')
		.then(function() {
			console.log("API Hit");
			var worksheet = workbook.getWorksheet(1);
			worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
			console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
		
        });	
    });
	res.jsonp({"Status" : 200});
});

app.listen(port, () => console.log(`API Mock Server listening on port ${port}!`));
