"use client"

import './page.css'
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function Register() {

    async function efetuarRegistro(){
        
        const idMessage = toast.loading("Validando registro...")

        if (document.getElementById('senha-register').value != document.getElementById('repetirsenha-register').value){
            toast.update(idMessage, { render: "Senhas não batem!", type: "error", isLoading: false, autoClose: 3000})
            return 0
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nome: document.getElementById('nome-register').value,
              email: document.getElementById('email-register').value,
              cpf_cnpj: document.getElementById('cpf_cnpj-register').value,
              nascimento: document.getElementById('nascimento-register').value,
              senha: document.getElementById('senha-register').value
            })
        });

        var data = await response.json();

        if (data.erro) {
            toast.update(idMessage, { render: data.erro, type: "error", isLoading: false, autoClose: 3000});
        } else{
            toast.update(idMessage, { render: data.sucess, type: "success", isLoading: false, autoClose: 3000});
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
                    <input type="text" name="" id="email-register" />
                    <label htmlFor="">CPF/CNPJ</label>
                    <input type="text" name="" id="cpf_cnpj-register" />
                    <label htmlFor="">Data de Nascimento</label>
                    <input type="date" name="" id="nascimento-register" />
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="senha-register" />
                    <label htmlFor="">Repetir Senha</label>
                    <input type="password" name="" id="repetirsenha-register" />
                </form>

                <div id="botoes-login">
                    <button id="entrar-login" onClick={efetuarRegistro}>Criar Conta</button>
                    <Link href='/login' ><button id="criar-conta-login">Já Tenho Uma Conta</button></Link>
                </div>

            </div>

        </main>
    );
}