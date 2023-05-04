"use client"

import './page.css'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';

export default function Login() {
    
    const router = useRouter()

    async function validarLogin(){
        
        const idMessage = toast.loading("Validando login...")

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: document.getElementById('email-login').value,
              senha: document.getElementById('senha-login').value
            })
        });

        var data = await response.json();

        if (data.erro) {
            toast.update(idMessage, { render: data.erro, type: "error", isLoading: false, autoClose: 3000});
        } else{
            toast.update(idMessage, { render: data.sucess, type: "success", isLoading: false, autoClose: 3000});
            setCookie(null, 'account', document.getElementById('email-login').value, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            router.push('/')
        }
        
    }

    return (
        <main className='login'>

            <div id="caixa-login">
                <h1>Logue com sua conta!</h1>

                <form>
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="email-login" />
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="senha-login" />
                </form>

                <div id="botoes-login">
                    <button id="entrar-login" onClick={validarLogin}>Entrar</button>
                    <Link href='/register' ><button id="criar-conta-login">Criar Conta</button></Link>
                </div>

            </div>

        </main>
    );
}