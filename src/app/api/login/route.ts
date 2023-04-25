import { supabase } from "@/supabase/supabase"

export async function GET(request: Request) {

  let { data: usuarios, error } = await supabase.from('usuarios').select('*')

  return new Response(JSON.stringify(usuarios))
}