"use client"

import './header.css'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

export default function Header() {
    
    const [tamanhoJanela, setTamanhoJanela] = useState(0)
    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [redirectPage, setRedirectPage] = useState('/')
    
    useEffect(()=>{
        setTamanhoJanela(window.innerWidth)

        window.addEventListener('resize', () => setTamanhoJanela(window.innerWidth));

        let cookieStore = parseCookies();
        let account = cookieStore.account

        if (!account){
            setRedirectPage('/login')
        } else{
            setRedirectPage('/perfil')
        }
    },[])

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

            <Link id="minha-conta-header" href={redirectPage}>Minha Conta</Link>

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
                        <Link href={redirectPage} onClick={showMenu}>Minha Conta</Link>
                    </div>

                }

            </div>

          </nav>}
        </header>
    );
}