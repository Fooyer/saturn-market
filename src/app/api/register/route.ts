import { supabase } from "@/supabase/supabase"
import { validarEmail, validarIdade } from "@/backend/register/register"

export async function POST(request: Request) {

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

    var sc = validarEmail(requestData.email)
    if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}

    sc = validarIdade(requestData.nascimento)
    if (!sc.status){return new Response('{"erro":"'+ sc.message +'"}',{status: 422})}
    
    //const { data, error } = await supabase.from('usuarios').insert([{ nome: requestData.nome, email: requestData.email, nascimento: requestData.nascimento  },])

    return new Response('{"sucess":"Registrado com sucesso"}')
}