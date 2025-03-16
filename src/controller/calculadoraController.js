import { Router } from "express";

const endpoints=Router();

endpoints.get('/calculadora/somar/:n1/:n2',(req,resp)=>{
    if(isNaN(req.params.n1)||isNaN(req.params.n2)){
        resp.status(400).send({
            erro:'Os parâmetros devem ser números'
        });
        return;
    }
    
    let n1=parseFloat(req.params.n1);
    let n2=parseFloat(req.params.n2);
    let soma=n1+n2;
    resp.send({soma:soma});
})
endpoints.get('/calculadora/somarQuery',(req,resp)=>{
    let n1=parseFloat(req.query.n1);
    let n2=parseFloat(req.query.n2);
    let soma=n1+n2;
    resp.status(200).send({
        entradas:{
            numero1:n1,
            numero2:n2
        },
        soma:soma 
    });
        
})

export default endpoints;
