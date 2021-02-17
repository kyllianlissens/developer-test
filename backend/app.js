
var express = require('express');
var axios = require('axios');
var cors = require('cors')

var app = express();



app.use(cors())


app.get('/items', function (req, res) {

  axios.get('https://api.publicapis.org/entries')
      .then(function (response) {
        const items = response["data"]["entries"];
        if (req.query.q){
            console.log(req.query.q)
            console.log(items.filter(o => o.API.includes(req.query.q)))
          res.send(items.filter(o => o.API.includes(req.query.q)));
        }else{
          res.send(items);
        }
      })
      .catch(function (error) {
        res.send(error);
      });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});