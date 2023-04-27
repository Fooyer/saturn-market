export function validarEmail(email: string){

    let message
    var re = /\S+@\S+\.\S+/;
    let isValid = re.test(email);

    if (!isValid){
        message = 'Formato de email inválido'

        return {"status": false,"message": message}
    }

    return {"status": true,"message": message}

}

export function validarIdade(dataNascimento: string){

    let isValid = true
    let message

    var dataNascimentoObj = new Date(dataNascimento);
    var idade = new Date().getFullYear() - dataNascimentoObj.getFullYear();
    var mesNascimento = dataNascimentoObj.getMonth();
    var diaNascimento = dataNascimentoObj.getDate();
    var hoje = new Date();
    var mesAtual = hoje.getMonth();
    var diaAtual = hoje.getDate();

    if (mesAtual < mesNascimento || (mesAtual == mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    if (!(idade >= 0 && idade < 120)){

        message = 'Idade inválida'

        return {"status": false,"message": message}
    }
    
    return {"status": true,"message": message}
}