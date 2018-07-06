module.exports = function(err, req, res, next){
  res.send({
    status: err.status || 500,
    message: err.message || 'Oops, something went wrong'
  });
}