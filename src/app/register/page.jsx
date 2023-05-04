"use client"

import './page.css'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation';

export default function Register() {

    const router = useRouter();

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
              cpf_cnpj_select: document.getElementById('select-cnpjcpf-register').value,
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
            setCookie(null, 'account', document.getElementById('email-register').value, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            
            document.getElementById("minha-conta-header").href = "/perfil"
            router.push('/')
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
                    <div id="cpfcnpj-register">
                        <input type="text" name="" id="cpf_cnpj-register" />

                        <select name="" id="select-cnpjcpf-register">
                            <option value="cpf">CPF</option>
                            <option value="cnpj">CNPJ</option>
                        </select>
                    </div>

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