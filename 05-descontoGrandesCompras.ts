function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {
	
	// seu código aqui
	
	let valorCompra = 0;
    
    for (let i = 0; i < precosCarrinho.length; i++) {
        valorCompra += precosCarrinho[i];
		
    }
    
    if (valorCompra >= minimoParaDesconto) {
        console.log(valorCompra - (valorCompra * desconto));
        return valorCompra - (valorCompra * desconto);
        
    } else {
        console.log(valorCompra);
        return valorCompra;

    }
 
}
