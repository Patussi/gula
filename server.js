
var express = require('express')
var app = express()
var contador = 0
var receitas = require("./receitas")

app.get('/',function (req,res){
  res.send('Hello World,Patussi!')
})

app.get('/reinaldo',function(req,res){
contador=contador+1
res.send('Essa pagina foi chamada' + contador + 'vezes')
})

app.get('/usuario/:nome/:sobrenome', function(req,res){
  console.log("Parametros enviados" + req.params);
  res.send(' Ola ' + req.params.nome +' '+ req.params.sobrenome + ', seja bem vindo') 
})

app.get('/usuario/:nome/:sobrenome/:receitas', function(req,res){
  console.log("Parametros enviados" + req.params);
//  res.send(' Ola ' + req.params.nome +' '+ req.params.sobrenome + ', seja bem vindo')
var mostrareceita = receitas.bd[req.params.receitas]
  res.send(' Nome da Receita ' + mostrareceita.nome + '\nSabor ' + mostrareceita.sabor + '\nPreparo ' + mostrareceita.preparo + '\nNota ' + mostrareceita.nota) 
})


app.listen(3000,function(){
  console.log('Example app listening on port 3000!')
})


