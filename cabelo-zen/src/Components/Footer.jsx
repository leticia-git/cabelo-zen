import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from 'react'
import wpp from '../img/wpp.png'
import insta from '../img/insta.png'
import whats from '../img/whats.png'
function Footer() {
    return (
        <div className="footer">
            <div className="grid">
                <div className="coluna-um">
                    <p>Entre em contato pelas nossas redes:</p>
                    <div className="insta">
                        <Image src={insta} alt='CabeloZen' />
                        <a href="https://www.instagram.com/cabelo_zen/" target="_blank" >@cabelo_zen</a>
                    </div>
                    <div className="wpp">
                        <Image src={wpp} alt='CabeloZen' />
                        <a href="https://wa.me/5511983870091?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+terapia+capilar%21" target="_blank">11 98387-0091</a>
                    </div>
                </div>
                <div className="endereco">
                    <p>Endereço:</p>
                    <p>Av. Paes de Barros, 436 - Mooca, São Paulo - SP, 03114-000</p>
                </div>
            </div>
            <div className="rodape">
                <p>Copyright © 2023 TODOS OS DIREITOS RESERVADOS. © 2023 cabelozen</p>
            </div>
            <div className="whats-flut">
                <a href="https://wa.me/5511983870091?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+terapia+capilar%21" target="_blank"><Image src={whats} alt='CabeloZen'/></a>
            </div>
        </div>
    )
}
export default Footer