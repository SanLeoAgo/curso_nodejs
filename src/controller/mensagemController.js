import { Router } from "express";
const endpoints=Router();

endpoints.get('/hellorworld',(req,resp)=>{
    //código do endpoint
    resp.send('Hellor World');
})

endpoints.get('/mensagem/boasvindas',(req,resp)=>{
    resp.send({ mensagem:'Seja Bem Vindo'});
})

endpoints.get('/v2/mensagem/boasvindas',(req,resp)=>{
    resp.send({ mensagem:'Boas Vindas'});
})

endpoints.get('/mensagem/ocupado',(req,resp)=>{
    resp.send({ mensagem:'Status: Ocupado'});
})

endpoints.get('/mensagem/ocupado/recado',(req,resp)=>{
    resp.send({ mensagem:'Status: Ocupado, Por favor deixe seu recado'});
})

endpoints.get('/mensagem/ola',(req,resp)=>{
    if(!req.query.name){
        resp.status(400).send({
            erro:'É nescessário passar um nome'
        });
        return;
    }
    let name=req.query.name ??'Usuário';
    resp.send({name});
})

export default endpoints;
