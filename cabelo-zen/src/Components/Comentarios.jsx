import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import um from '../img/comentarioum.png';
import dois from '../img/comentariodois.png';
import tres from '../img/comentariotres.png';
import quatro from '../img/comentarioquatro.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows:false,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    arrows:false,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
            <div className="grid-comentarios">
            <Slider {...settings}>
                <div className="comentario ">
                    <Image src={um} alt='CabeloZen'/>     
                    <p className="nome">What is Lorem Ipsum?</p>         
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>     
                    </div>
                <div className="comentario ">
                    <Image src={dois} alt='CabeloZen'/>     
                    <p className="nome">What is Lorem Ipsum?</p>     
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>     

                </div>
                <div className="comentario ">
                    <Image src={tres} alt='CabeloZen'/>  
                    <p className="nome">What is Lorem Ipsum?</p>     
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>     
   
                </div>
                <div className="comentario ">
                    <Image src={quatro} alt='CabeloZen'/>  
                    <p className="nome">What is Lorem Ipsum?</p>     
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>     
   
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
