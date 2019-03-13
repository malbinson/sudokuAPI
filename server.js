var express    = require('express')
var app = express()
var request = require('request')
var cors = require('cors');

app.use(cors({origin: 'http://localhost:63342'}));




app.listen(process.env.PORT || 8080, () => {
    console.log('meow')
})

app.get('/',function(req,res) {
  var size = req.query.size
  var level = req.query.level
  request('http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=' + size + '&level=' + level, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body) // Print the google web page.
          res.set('Content-Type','text/json')
          res.json(JSON.parse(body))
       }
  })


})
