import { supabase } from "@/supabase/supabase"

export async function validarEmail(email: string){

    let message

    var re = /\S+@\S+\.\S+/;
    let isValid = re.test(email);

    if (!isValid){
        message = 'Formato de email inválido'

        return {"status": false,"message": message}
    }

    let { data: mail, error } = await supabase.from('usuarios').select('id').eq('email',email)

    if (mail?.length){
        message = "Conta com esse email já existe"
        return {"status": false,"message": message}
    } 

    return {"status": true,"message": message}

}

export function validarIdade(dataNascimento: string){

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

export async function validarNome(nome: string){

    let message
    let { data: usuarios, error } = await supabase.from('usuarios').select('id').eq('nome',nome)

    if (usuarios?.length){
        message = "Conta com esse nome já existe"
        return {"status": false,"message": message}
    } 

    return {"status": true,"message": message}

}

export function validarCPF(cpf: string){

    let message

    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf.length !== 11) return {"status": false,"message": "CPF deve ter 11 dígitos"};

    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ) return {"status": false,"message": "CPF inválido"};

    soma = 0;

    for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);

    resto = (soma * 10) % 11;
    
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ) return {"status": false,"message": "CPF inválido"};

    return {"status": true,"message": message}

}

export function validarCNPJ(cnpj: string){

    let message

    cnpj = cnpj.replace(/[^\d]+/g,'');
    if(cnpj.length !== 14) return {"status": false,"message": "CNPJ deve ter 14 dígitos"};

    // valida o primeiro dígito verificador
    var soma = 0;
    var peso = 5;

    for (var i = 0; i < 4; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso--;
    }
    peso = 9;
    for (var i = 4; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso--;
    }

    var resto = (soma % 11);
    var digito = (resto < 2) ? 0 : (11 - resto);

    if (digito != parseInt(cnpj.charAt(12))) return {"status": false,"message": "CNPJ inválido"};

    // valida o segundo dígito verificador
    soma = 0;
    peso = 6;

    for (var i = 0; i < 5; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso--;
    }

    peso = 9;

    for (var i = 5; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso--;
    }

    resto = (soma % 11);
    digito = (resto < 2) ? 0 : (11 - resto);
    
    if (digito != parseInt(cnpj.charAt(13))) return {"status": false,"message": "CNPJ inválido"};

    return {"status": true,"message": message}

}