function solucao(aprovados: string[], numeroInscricao: string): string {
	
	// seu código aqui
	
	if (aprovados.includes(numeroInscricao)) {
        console.log('APROVADO')
        return 'APROVADO';
        
    } else {
        console.log('REPROVADO')
        return 'REPROVADO';
        
    }
 
}
