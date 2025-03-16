import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
//importa as funcoes globais
import './utils/global.js'; 

import adicionarRotas from './rotas.js';
const servidor= express(); 
servidor.use(express.json());
servidor.use(cors());

//Adiciona as rotas
adicionarRotas(servidor);

const PORTA=process.env.PORTA;
servidor.listen(
    PORTA,
    ()=>console.log(`API subiu com sucesso na porta ${PORTA}`));