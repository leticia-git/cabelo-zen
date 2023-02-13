import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from 'react'
import wpp from '../img/wpp.png'
import insta from '../img/insta.png'

function Footer() {
    return (
        <div className="footer">
            <div className="grid">
                <div className="coluna-um">
                    <p>Entre em contato pelas nossas redes:</p>
                    <div className="insta">
                        <Image src={insta} alt='CabeloZen' />
                        <a href="">@cabelo_zen</a>
                    </div>
                    <div className="wpp">
                        <Image src={wpp} alt='CabeloZen' />
                        <a href="">11 98387-0091</a>
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
        </div>
    )
}
export default Footer