//import { supabase } from "@/supabase/supabase"
import { validarEmail, validarIdade, validarNome, validarCPF, validarCNPJ  } from "@/backend/register/register"

export async function POST(request: Request) {

    let sc
    let requestData = await request.json()

    if (!requestData.nome){
        return new Response('{"erro": "Nome é obrigatório."}', {status: 400})
    }
    if (!requestData.email){
        return new Response('{"erro": "Email é obrigatório."}', {status: 400})
    }
    if (!requestData.cpf_cnpj){
        return new Response('{"erro": "CPF/CNPJ é obrigatório."}', {status: 400})
    }
    if (!requestData.nascimento){
        return new Response('{"erro": "Data de Nascimento é obrigatória."}', {status: 400})
    }
    if (!requestData.senha){
        return new Response('{"erro": "Senha é obrigatória."}', {status: 400})
    }

    sc = await validarNome(requestData.nome)
    if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}

    sc = await validarEmail(requestData.email)
    if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}

    sc = validarIdade(requestData.nascimento)
    if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}

    if (requestData.cpf_cnpj_select==='cpf'){
        sc = validarCPF(requestData.cpf_cnpj)
        if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}
    }
    else if (requestData.cpf_cnpj_select==='cnpj') {
        sc = validarCNPJ(requestData.cpf_cnpj)
        if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}
    }
    else{
        return new Response('{"erro":"Erro no servidor, tente mais tarde"}',{status: 400})
    }
    
    //const { data, error } = await supabase.from('usuarios').insert([{ nome: requestData.nome, email: requestData.email, nascimento: requestData.nascimento  },])

    return new Response('{"sucess":"Registrado com sucesso"}')
}