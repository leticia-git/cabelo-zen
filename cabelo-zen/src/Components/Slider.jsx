import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import carrosselum from '../img/carrossel-um.png';
import carrosseldois from '../img/carrossel-dois.png';
import carrosseltres from '../img/carrossel-tres.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    };
    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <div className="grid-slider">
            <Slider {...settings}>
               
                <div className="carrossel">
                    <div className="conteudo">
                        <h3>Terapia Capilar</h3>
                        <p>Um novo método de terapia capilar desenvolvida pela tricologista e professora de Yoga Jaci! Healing Artist </p>
                        <div className="botao-carrossel">
                            <a href="servicos">QUERO SABER MAIS</a>
                        </div>
                    </div>
                    <Image src={carrosselum} alt='CabeloZen'/>                     
                    </div>
                <div className="carrossel">
                    <div className="conteudo">
                        <h3>Aromaterapia</h3>
                        <p>Um tratamento perfeito, natural e tem afinidade com o couro cabeludo e fios e também trata a parte emocional</p>
                        <div className="botao-carrossel">
                            <a href="servicos">QUERO SABER MAIS</a>
                        </div>
                    </div>
                    <Image src={carrosseldois} alt='CabeloZen'/>           
                </div>
                <div className="carrossel">
                    <div className="conteudo">
                        <h3>Massagem Epicrânia!</h3>
                        <p>Que tal experimentar essa técnica relaxante e ao mesmo tempo estimulante? Agende uma consulta com nossa Tricologista e conheça o nosso espaço CabeloZen!</p>
                        <div className="botao-carrossel">
                            <a href="https://wa.me/5511983870091?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+terapia+capilar%21">AGENDE SUA AVALIAÇÃO</a>
                        </div>
                    </div>
                    <Image src={carrosseltres} alt='CabeloZen'/>           
                </div>
               
            </Slider>
            </div>
        </div>
    );
};

export default () => (
    <div>
        <Responsive />
    </div>
);
