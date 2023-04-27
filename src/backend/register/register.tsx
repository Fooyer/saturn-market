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