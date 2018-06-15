var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Kitten = mongoose.model('Kitten', {name : String});
  var silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  silence.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log("success")
  });
  res.send('respond with a resource');
  
});

module.exports = router;
