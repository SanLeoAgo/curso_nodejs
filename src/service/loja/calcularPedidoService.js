export function calcularPedidoParcial(total,parcelas,cupom){
    let temCupom=false; 
    if(parcelas>1){
        let juros=total*0.05;
        total+=juros;
    }

    if(cupom ==='QUERO100'){
        total-=100;
        temCupom=true;
    }
    let valorParcelas=(total/parcelas).toFixed(2);

    let pedido=({
        total:total,
        qntParcelas:parcelas,
        valorParcela:valorParcelas,
        cupom:temCupom
    });

    return (pedido);
}