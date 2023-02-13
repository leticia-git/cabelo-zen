import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from 'react'
import Form from '../img/form.png';
function Avaliacao() {
    return (
        <div className="avaliacao">
            <div className="grid">
                <div className="avalicaocontent">
                    <div className="texto-ava">
                        <h2>
                            Avaliação
                        </h2>
                        <p>Avaliação é o primeiro e um dos mais importantes passos do tratamento capilar. Realizando uma avaliação detalhada os tratamentos serão muito mais assertivos e os resultados muito mais eficientes.</p>
                        <p>E através do tricoscopio que é possível fazer um exame detalhado das estruturas morfológicas não visíveis a olho nu, tanto do couro cabeludo quanto dos fios, pois possui lente de aumento que permite um diagnóstico dos distúrbios capilares e fornecendo indícios do estágio e progressão da doença. E também é possível capturar imagens que podem ser armazenadas e utilizadas posteriormente para um comparativo evolutivo ao longo do tratamento.</p>
                        <p>Em nosso espaço Cabelo Zen só iniciamos um tratamento após a realização da anamnese, avaliação física e tricoscopia.</p>
                        <p>Quer saber mais? Preencha o formulario ao lado:</p>
                    </div>
                    <div className="formulario">
                      <a href=""><Image src={Form} alt='Matheus' /></a>  
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Avaliacao