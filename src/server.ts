import express from 'express';
import 'express-async-errors';
//import cors from 'cors';
import path from 'path';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

//import express from 'express';
//import '.database/connection';


   // const app = express();
   // app.use(express.json());

//app.post('/orphanages',(request, response) => {
   //console.log(request.query);//   console.log(request.params);//   console.log(request.body);
 //return response.json({message:'Hello'});
//});

 //   app.listen(3333);

    

// Driver nativo, query build, orm




    //rota=conjunto
//recurso=usuario
//metodo  HTTP = GET, POST, PUT & DELETE
//Parametros = "Query Params: http://localhost:3333/users?search=diego&page=2"(procure diego)
//"Route Params: http://localhost:3333/users/1 "(identificar um recurso)
//"Body http://localhost:3333/users?search=diego&page=2"(identificar um recurso)
//ex: Console log(request.query)(request.params)


//GET= BUSCAR INFO
//POST criando uma informação nova
//PUT editando uma informação
// DELETE = Deletando uma informação
//console.log("teste");//