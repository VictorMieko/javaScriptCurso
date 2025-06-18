//arquivos podem dar erro(exemplo do video usado)
try {
    //Executa quando não há erros
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try{//try dentro de try pode ;)
        console.log(b);
    }catch (e){
        console.log('Deu erro');
    }finally{
        console.log('Também sou finally');
    }

} catch (e) {
    //Executada quando há erros
    console.log('Tratando o erro');
} finally {
    //Sempre executada(dando erro ou não)
    console.log('Finally: Eu sempre sou executado');
}

function retornaHora(data){
    if(data && !(data instanceof Date)){//se a data for enviada e não for uma instância de Date
        throw new TypeError('\nEsperando instância de Date.');
    }

    if(!data){//se não existir data
        data = new Date();//cria uma data atual
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',//inclui o zero
        minute: '2-digit',
        second: '2-digit'
        //hour12: true// é possível converter para fuso de 12 horas e vice e versa
    });
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //Tratar erro da forma como preferir
    console.log();
}finally{
    console.log('Tenha um bom dia');
}
