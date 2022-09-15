const express = require('express');
const app = express();
app.set("view engine", "ejs");

//criando rotas
app.get("/", function (req, res) { // chamando a home
	const items = [
		{
			title: 'D',
			message: 'Desenvolver aplicações/serviços de forma fácil'
		},
		{
			title: 'E',
			message: 'EJS usa JavaScript para renderizar HTML'
		},
		{
			title: 'M',
			message: 'Muito fácil de usar!'
		},
		{
			title: 'A',
			message: 'Aprendizado muito simples'
		},
		{
			title: 'I',
			message: 'Instalação simplificada'
		},
		{
			title: 'S',
			message: 'Sintaxe simples de usar!'
		}
	]

	const subtitle = "O EJS é uma linguagem de modelagem para criação de HTML utilizando JS!"

	res.render("pages/index", {
		qualidades: items,
		subtitle: subtitle,
	});
})

app.get("/sobre", function (req, res) { // chamando a página sobre
	res.render("pages/about");
})

//express configurado, agora fazer rodar

app.listen(8080) // função dentro do express que fica ouvindo a porta 8080
console.log('Servidor rodando')