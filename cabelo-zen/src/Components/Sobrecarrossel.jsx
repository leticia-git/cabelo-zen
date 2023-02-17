import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import Espacoum from '../img/espaco-um.jpg';
import Espacodois from '../img/espaco-dois.jpg';
import Espacotres from '../img/espaco-tres.jpg';
import Espacoquatro from '../img/espaco-quatro.jpg';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
            <div className="grid-slider">
            <Slider {...settings}>
                <div className="carrossel sobrec">
                    <Image src={Espacoum} alt='CabeloZen'/>                     
                    </div>
                <div className="carrossel sobrec">
                    <Image src={Espacodois} alt='CabeloZen'/>           
                </div>
                <div className="carrossel sobrec">
                    <Image src={Espacotres} alt='CabeloZen'/>           
                </div>
                <div className="carrossel sobrec">
                    <Image src={Espacoquatro} alt='CabeloZen'/>           
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
