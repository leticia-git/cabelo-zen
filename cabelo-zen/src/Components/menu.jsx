import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React, { useState } from 'react';
import Logo from '../img/logo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Menu = () => {
    function showLinks() {
        let links = document.getElementsByClassName('links')[0];

        if (links.classList.contains('hidden')) {
            links.classList.remove('hidden');
        } else {
            links.classList.toggle('hidden');
        }
    }
    return (
        <div className="container">
            <div className="top-menu">
                <div className="icons">
                    <a className="home" href="#home">
                        <Image src={Logo} alt='Matheus' />
                    </a>
                    <i id="selector" className="icon material-icons" onClick={showLinks}><DehazeIcon /></i>
                </div>
                <ul className="links hidden">
                    <Link href="/">Home</Link>
                    <Link href="/metodo">Método</Link>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/servicos">Resultados</Link>
                    <Link href="/blog">Blog</Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu