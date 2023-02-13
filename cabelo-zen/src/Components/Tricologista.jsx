import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from 'react'
import Jacy from '../img/Jacy.png'

function Tricologista() {
    return (
        <div className="grid">
            <div className="texto">
                <h2>A tricologista</h2>
                <p>Olá, eu sou a Jaci e estou passando aqui para apresentar um pouquinho sobre mim e falar também do método que eu densenvolvi que é o Cabelo Zen.</p>
                <p>Tenho algumas graduações e especialização na área da saúde que me possibilitaram desenvolver esse método que é totalmente inovador, onde alinha a terapia capilar com o yoga.</p>
                <p>Pois, mais do que nunca, sabemos o quanto o emocional impacta na saúde dos fios e couro cabeludo e por isso é importante tratar o emocional junto com o couro cabeludo e fios para que possamos ter um resultado satisfatório.</p>
                <p>Eu também tenho alopecia androgenética e sei o quanto isso abala o nosso emocional e que por ser um patologia herdada geneticamente terei que tratar para o resto da vida.</p>
                <p>E hoje o meu tratamento pessoal é com as técnicas e ferramentas oferecidas pelo método Cabelo Zen e que tenho tido excelentes resultados.</p>
            </div>
            <div className="jacy">
                <Image src={Jacy} alt='CabeloZen' priority sizes='100vw' />
            </div>
        </div>
    )
}
export default Tricologista