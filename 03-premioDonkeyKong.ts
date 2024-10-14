function solucao(simbolo1: string, simbolo2: string, simbolo3: string): string {
	
	// seu código aqui
 
	const rodadaGanha = simbolo1 === simbolo2;
    const rodadaPerdida = simbolo1 === simbolo3;
    
    if (rodadaGanha && rodadaPerdida){
        console.log('GANHOU');
        return 'GANHOU';
        
    } else {
        console.log('PERDEU')
        return 'PERDEU';
    } 
	
}
