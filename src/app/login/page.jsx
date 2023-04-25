import './page.css'


export default function Footer() {
    
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
                    <button id="entrar-login">Entrar</button>
                    <button id="criar-conta-login">Criar Conta</button>
                </div>

            </div>

        </main>
    );
}