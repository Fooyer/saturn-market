import { supabase } from "@/supabase/supabase"

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

    return new Response('{"sucess":"Registrado com sucesso"}')
}