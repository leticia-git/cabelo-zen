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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/metodo">Método</Link></li>
                    <li><Link href="/sobre">Sobre nós</Link></li>
                    <li><Link href="/servicos">Serviços</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu