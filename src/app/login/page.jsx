"use client"

import './page.css'
import Link from 'next/link';

export default function Login() {
    
    function validarLogin(){
        alert("Não implementado")
    }

    return (
        <main className='login'>

            <div id="caixa-login">
                <h1>Logue com sua conta!</h1>

                <form>
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />
                </form>

                <div id="botoes-login">
                    <button id="entrar-login" onClick={validarLogin}>Entrar</button>
                    <Link href='/register' ><button id="criar-conta-login">Criar Conta</button></Link>
                </div>

            </div>

        </main>
    );
}