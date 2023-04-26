"use client"

import './page.css'
import Link from 'next/link';

export default function Register() {

    async function efetuarRegistro(){

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nome: document.getElementById('nome-register').value
            })
          });

          var data = await response.json();

          if (data.erro) {
            alert(data.erro);
          }
        
    }

    return (
        <main className='login'>

            <div id="caixa-login">
                <h1>Crie uma nova conta!</h1>

                <form>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="nome-register" />
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">CPF/CNPJ</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Data de Nascimento</label>
                    <input type="date" name="" id="" />
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />
                    <label htmlFor="">Repetir Senha</label>
                    <input type="password" name="" id="" />
                </form>

                <div id="botoes-login">
                    <button id="entrar-login" onClick={efetuarRegistro}>Criar</button>
                    <Link href='/login' ><button id="criar-conta-login">Já Tenho Uma Conta</button></Link>
                </div>

            </div>

        </main>
    );
}