import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jllsdjpotdrvvklcqeeg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsbHNkanBvdGRydnZrbGNxZWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MzA0ODksImV4cCI6MTk5ODAwNjQ4OX0.lx8ksussI62NhA-nIxN48PhcuX8naDZw9mubbJ0FzEE'
export const supabase = createClient(supabaseUrl, supabaseKey)