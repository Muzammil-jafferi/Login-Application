module.exports = function(app,res) {
app.use(function (req, res, next) {
  res.setHeader('X-Powered-By', 'muzammil')
  next()
});
}