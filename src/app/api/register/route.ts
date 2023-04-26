import { supabase } from "@/supabase/supabase"

export async function POST(request: Request) {

    let requestData = await request.json()

    if (!requestData.nome){
        return new Response('{"erro": "Nome é obrigatório."}', {status: 400})
    }

    return new Response('{"sucess":"Registrado com sucesso"}')
}