import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import um from '../img/comentarioum.png';
import dois from '../img/comentariodois.png';
import tres from '../img/comentariotres.png';
import quatro from '../img/comentarioquatro.png';
import cinco from '../img/comentariocinco.png';
import seis from '../img/comentarioseis.png';
import sete from '../img/comentariosete.png';
import oito from '../img/comentariooito.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
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
                    <p className="nome">Denis Lea</p>         
                    Gentee!!! Cabelo Zen existe. Depois de muito procurar encontrei um tratamento para queda que realmente deu certo,  em poucos meses o resultado foi visível,  passei por dois episódios de covid e com o tratamento não houve nenhuma queda. Continuo com a manutenção,  pois além de melhorar minha autoestima,  o cuidado da profissional com o lado emocional é sem igual. Super recomendo.                    </div>
                <div className="comentario ">
                    <Image src={dois} alt='CabeloZen'/>     
                    <p className="nome">Hildite</p>     
                    <p>Faço tratamento capilar com a Jaci e recomendo pela excelência do atendimento e o resultado. Além do conhecimento, há profissionalismo, seriedade em um ambiente limpo, bonito e acolhedor.
                Muito feliz com o resultado do meu tratamento. A Jaci é simplesmente excelente!</p>     
                </div>
                <div className="comentario ">
                    <Image src={tres} alt='CabeloZen'/>  
                    <p className="nome">Débora</p>     
                    <p>
                    Fazer o tratamento no Cabelo Zen foi a minha melhor escolha! O resultado foi visível e todo processo foi maravilhoso! Em pouco tempo já notei diferença. A Jaci é uma profissional incrível que vai muito além do cuidado somente dos fios. Mudou minha vida de verdade.                        </p>     
   
                </div>
                <div className="comentario ">
                    <Image src={quatro} alt='CabeloZen'/>  
                    <p className="nome">Terezinha</p>     
                    <p>
                    Conheci o espaço zen por indicação de uma amiga , fechei um pacote de 10 sessões, meu cabelo caia muito e eu já havia buscado diversos tratamentos sem resultados ,  já na terceira sessão com Jaci a queda foi interrompida e através  dos estímulos provocados pelos laseres o cabelo voltou a nascer e crescer muito rápido , além de incluir uma maravilhosa aula de yoga a cada sessão  , fiquei encantada com o resultado e super indico , excelente profissional                        </p>     
                </div>
                <div className="comentario ">
                    <Image src={cinco} alt='CabeloZen'/>  
                    <p className="nome">Joyce</p>     
                    <p>
                    Cheguei ao espaço sem saber exatamente o que esperar. Estava com falhas visíveis e bastante preocupada… Encontrei acolhimento, uma análise profunda dos motivos que levaram à queda e enfraquecimento do meu cabelo. O tratamento foi incrível, quase uma terapia. O aspecto do meu cabelo mudou muito, assim como a quantidade!</p>     
                </div>
                <div className="comentario ">
                    <Image src={seis} alt='CabeloZen'/>  
                    <p className="nome">Iasmin</p>     
                    <p>
                    Eu eu tive muita queda de cabelo pós COVID e como trabalho com o público em geral a minha aparência é praticamente o meu cartão de visita, por isso me consultei com a jaci que foi super atenciosa desde a avaliação. Comecei o tratamento capilar e amei, além das aulas de yoga maravilhosas! Quando terminei o tratamento notei que os buracos que tinham no meu cabelo não tinham mais, além de ver nascer muitos fiozinhos novos! Hoje meu cabelo voltou 100% ao que era antes! Super recomendo o tratamento!                    </p>     
                </div>
                <div className="comentario ">
                    <Image src={sete} alt='CabeloZen'/>  
                    <p className="nome">Mariana</p>     
                    <p>
                    A Jaci é única. Ela entende profundamente do que faz, literalmente desde a raiz, e sabe transmitir todo seu conhecimento. Nossas sessões de tratamento sempre foram muito agradáveis e divertidas e ser sua cliente é uma honra e um prazer.
                    </p>
                </div>
                <div className="comentario ">
                    <Image src={oito} alt='CabeloZen'/>  
                    <p className="nome">Natália</p>     
                    <p>
                    Jaciii, estou muito muito muito feliz! Comecei a ver muitos fiozinhos novos crescendo a partir da 3 sessão do tratamento. Incrível como meu couro cabeludo já está mais cheio e saudável          
</p>

<p>Tô muito muito feliz com o resultado!!!</p>
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
