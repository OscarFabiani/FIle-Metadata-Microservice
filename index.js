'use strict';

var express = require('express');
var multer = require('multer');
var upload = multer();


var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });



app.route('/api/fileanalyse')
.post(upload.single('upfile'), function(req, res) {
  var file = req.file
  console.log(file);
  if (!file) { res.json({ error: 'file required' }) }
  else {
    res.json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size
    });
  };
});


app.listen(3000, function () {
  console.log('Node.js listening on port 3000');
});


//POSSIBLY REWORK HTML AND CSS
//POSSIBLY INCORPORATE ES6 IMPORT SYNTAX