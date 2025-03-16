import { Router } from "express";

import { calcularTotal,calcularValorParcela } from "../service/loja/pedidoCompletoService.js";
import { calcularPedidoParcial } from "../service/loja/calcularPedidoService.js";

import { validarPedido } from "../validation/loja/pedidoCompletoValidation.js";



const endpoints=Router();



endpoints.post('/loja/pedido/completo',(req,resp)=>{
    
try {
    validarPedido(req);

    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;

    let total=calcularTotal(parcelas,itens,cupom);
    let valorParcela=calcularValorParcela(total,parcelas);

    resp.send({
        total:total,
        qtParcelas:parcelas,
        valorParcela:valorParcela
    });

} catch (error) {
    logError(error);
    resp.status(400).send(
           criarError(error)
        ); 
}
 
}); 


endpoints.post('/loja/pedido',(req,resp)=>{
    
    try {
        let total=req.body.total;
        let parcelas=req.body.parcelas;
        let cupom=req.query.cupom;
        
        let pedido=calcularPedidoParcial(total,parcelas,cupom);
        
        resp.send(pedido); 

    } catch (error) {
        resp.status(400).send({
            erro:'Verifique os parâmetros.'
        });
    }

});

export default endpoints;