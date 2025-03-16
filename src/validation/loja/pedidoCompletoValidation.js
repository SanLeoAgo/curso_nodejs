

export function validarPedido(req){
    if (!req.body) 
        throw new Error('O corpo da requisição está vazio ou inválido.');
    
 
    const { parcelas, itens } = req.body;

    // Verifica se `parcelas` é um número válido e um inteiro positivo.
    if (!parcelas || !Number.isInteger(Number(parcelas)) || parcelas <= 0) {
        throw new Error('O parâmetro parcelas está inválido. Deve ser um número inteiro positivo.');
    }

    // Verifica se `itens` é um array válido e não vazio.
    if (!Array.isArray(itens) || itens.length === 0) {
        throw new Error('O parâmetro itens deve ser um array não vazio.');
    }
    
};