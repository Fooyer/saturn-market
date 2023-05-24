import { supabase } from "@/supabase/supabase"

export async function GET(request: Request) {

  let requestData = await request.json()

  if (!requestData.email){
    return new Response('{"erro": "Email é obrigatório."}', {status: 400})
  }

  if (!requestData.senha){
    return new Response('{"erro": "Senha é obrigatória."}', {status: 400})
  }

  let { data: usuarios, error } = await supabase.from('usuarios').select('*').eq('email',requestData.email).eq('senha',requestData.senha)

  if (!usuarios?.length){
    return new Response('{"erro":"Credenciais inválidas"}')
  }

  return new Response('{"sucess":"Logado com sucesso"}')
}
