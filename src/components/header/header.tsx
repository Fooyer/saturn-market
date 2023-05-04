"use client"

import './header.css'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

export default function Header() {

    const router = useRouter()
    const [tamanhoJanela, setTamanhoJanela] = useState(0)
    const [mostrarMenu, setMostrarMenu] = useState(false)
    
    useEffect(()=>{
        setTamanhoJanela(window.innerWidth)

        window.addEventListener('resize', () => setTamanhoJanela(window.innerWidth));
    },[])
    
    function redirecionar(){
        let cookieStore = parseCookies();
        let account = cookieStore.account

        if (!account){
            router.push('/login')
        } else{
            router.push('/perfil')
        }
        if (mostrarMenu){
            showMenu()
        }
    }

    function showMenu(){
        setMostrarMenu(PrevVal => !PrevVal)
    }

    return (
        <header>
            
          {tamanhoJanela > 999 && <nav id='nav-pc'>
            
            <div id='title-header'>
                <Image src="/saturnlogo.png" width={30} height={30} alt='logo' />
                <Link href="/" >Saturn Market</Link>
            </div>

            <div id="options-pc-header">
                <Link href="/" >Home</Link>
                <Link href="/produtos" >Produtos</Link>
                <Link href="/carrinho" >Carrinho</Link>
            </div>

            <div id="minha-conta-header" onClick={redirecionar}>Minha Conta</div>

          </nav>}
          {tamanhoJanela <= 999 && tamanhoJanela!==0 && <nav id='nav-mobile'>
            
            <div id='title-header'>
                <Image src="/saturnlogo.png" width={30} height={30} alt='logo' />
                <Link href="/" >Saturn Market</Link>
            </div>

            <div id="hamburguer">

                <div id='menu-header-mobile' className={'menu-header-mobile ' + (mostrarMenu ? 'active' : "")} onClick={showMenu}>
                    <span className="hamburguer-line"></span>
                    <span className="hamburguer-line"></span>
                    <span className="hamburguer-line"></span>
                </div>

                {mostrarMenu && 
                
                    <div id="options-hamburguer-header">
                        <Link href="/" onClick={showMenu} >Home</Link>
                        <Link href="/produtos" onClick={showMenu}>Produtos</Link>
                        <Link href="/carrinho" onClick={showMenu}>Carrinho</Link>
                        <div onClick={redirecionar}>Minha Conta</div>
                    </div>

                }

            </div>

          </nav>}
        </header>
    );
}