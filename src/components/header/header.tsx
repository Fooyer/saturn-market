"use client"

import './header.css'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    
    const [tamanhoJanela, setTamanhoJanela] = useState(0)
    const [mostrarMenu, setMostrarMenu] = useState(false)
    
    useEffect(()=>{
        setTamanhoJanela(window.innerWidth)

        window.addEventListener('resize', () => setTamanhoJanela(window.innerWidth));
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

            <button id="minha-conta-header">Minha Conta</button>

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
                        <Link href="/" >Home</Link>
                        <Link href="/produtos">Produtos</Link>
                        <Link href="/carrinho">Carrinho</Link>
                        <Link href="/minha-conta">Minha Conta</Link>
                    </div>

                }

            </div>

          </nav>}
        </header>
    );
}