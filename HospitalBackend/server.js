const express=require('express');
	const server=express();
	const cors =require('cors');
	const bodyParser=require('body-parser')
	const cookieParser =require('cookie-parser')
	const port=3000;
	const CORS_OPTIONS={origin:'http://localhost:4200'};

	server.use(bodyParser.json())
	server.use(cookieParser())
	server.use(express.json());
	server.use(express.urlencoded({extended:true}));
	server.use(cors(CORS_OPTIONS));
	//################sync with database
	
	//################ default route
	server.get('/',(req,resp)=>{
		resp.setHeader("Content-Type","application/json");
		resp.send({message:"Welcome to web-api created using Express Sequelize Postgre"});
	})
require('./app/app-route')(server);
	
	server.listen(port,()=>{
		console.log(`http://localhost:${port} started`);
	})

   