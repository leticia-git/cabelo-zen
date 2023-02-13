import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from 'next/image'
import metodo from '../img/metodo.png';
export default function Metodo() {
  return (
    <>
      <div className="metodo">
      <Header />
        <div className="grid-metodo">
          <div className="ometodo">
            <div className="conteudo-metodo">
              <h2>O metodo</h2>
              <div className="textoum">
                <p>
                  O metodo foi desenvolvido por mim, Jaci, que sou tricologista
                  e professora de yoga e o objetivo é oferecer um tratamento bem
                  completo que ajuda a tratar e prevenir problemas do couro
                  cabeludo e dos fios e também equilibrar o emocional com as
                  técnicas de Yoga.
                </p>
                <p>
                  A sessão é completa com várias técnicas e ferramentas de
                  terapia capilar e tricologia como:
                </p>
              </div>
              <div className="lista">
                <ul>
                  <li>
                    <strong>Tricoscopio</strong> – que é extremamente necessário
                    para fazer uma boa avaliação
                  </li>
                  <li>
                    <strong>Aromaterapia</strong> - Óleos essenciais e vegetais
                  </li>
                  <li><strong>Argiloterapia</strong></li>
                  <li>
                    <strong>Alto frequência </strong> - Corrente de Ozônio
                  </li>
                  <li>
                    <strong>Foto biomodulação</strong> - Laser azul / Laser
                    Vermelho
                  </li>
                  <li>
                    <strong>Microagulhamento</strong>que atua no drug delivery
                  </li>
                  <li>
                    <strong>Massagem Epicraniana</strong>
                  </li>
                </ul>
                <ul>
                  
                    <strong>
                      Produtos e ativos capilares profissionais E na parte
                      emocional eu utilizo o Yoga que possui várias técnicas a
                      que ajudam no emocional e físico, como:
                    </strong>
                 
                  <li>Respiração</li>
                  <li>Ásanas ( Posturas Físicas)</li>
                  <li>Relaxamento</li>
                  <li>Meditação</li>
                </ul>
              </div>
            </div>
            <div className="img-metodo"><Image src={metodo} alt='CabeloZen'/></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
