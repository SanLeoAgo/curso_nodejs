import { Router } from "express";
import { calcularMedia } from "../service/exercicios/mediaService.js";
const endpoints=Router();

endpoints.post('/media',(req,resp)=>{
    try {
     let n1=req.body.nota1;
     let n2=req.body.nota2;
     let n3=req.body.nota3;
 
     if(isNaN(n1)||isNaN(n2)||isNaN(n3))throw new Error('Insira um valor numérico')
     if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10)throw new Error('Insira uma nota no intervalo de 0 à 10');
     
     let media=calcularMedia(n1,n2,n3);

     resp.send({media:media});
    } catch (error) {
    
     resp.status(400).send({
         error:error.message
     })
    }
    
 });
 


 endpoints.post('/dobros',(req,resp) => {
     let nums=req.body.numeros;
 
     let nums2=[];
     for(let i = 0;i < nums.length; i++){
         nums2[i] = nums[i] * 2;
     }
     resp.send({
         numeros:nums,
         dobros:nums2
     } );
         
 })

 export default endpoints;