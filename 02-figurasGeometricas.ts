function solucao(quantidadeLados: number): string {
	
	// seu código aqui

	if (quantidadeLados === 4){
        console.log('QUADRILATERO');
        return 'QUADRILATERO';

    } else if (quantidadeLados === 3){
		console.log('TRIANGULO');
        return 'TRIANGULO';

	} else if (quantidadeLados === 5){
		console.log('PENTAGONO');
        return 'PENTAGONO';

	} else if (quantidadeLados === 6){
		console.log('HEXAGONO');
        return 'HEXAGONO';

	} else if (quantidadeLados === 7){
		console.log('HEPTÁGONO');
        return 'HEPTÁGONO';

	};
}
