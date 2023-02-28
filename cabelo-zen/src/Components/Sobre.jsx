import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Slider from "../Components/Sobrecarrossel";
import Image from "next/image";

function Sobre() {
    return (
        <div className="sobre">
      <div className="grid-metodo">
        <div className="sobre">
            <div className="conteudosobre">
              <h2>O Espaço</h2>
              <p>
                Em uma unica sessão são realizados os cuidados da terapia
                capilar com ferranentas específicas mais o yoga. Proporcionando
                uma uma sessão bem completa que oferece vários benefícios para a
                sáude física e emocional!
              </p>
              <p>
                E o espaço é super acolhedor e tem muito amor em cada detalhe
                proporcionando uma energia maravilhosa e um oportunidade única
                para relaxar e ainda melhorar a saúde do couro cabeludo, fios e
                o emocional.
              </p>
            </div>
            
          </div>
        </div>
        <Slider/>
 
        <div className="mapa">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.247168307256!2d-46.6004612!3d-23.5595648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5949264b53b5%3A0x496fc8ae993f108c!2sAv.%20Paes%20de%20Barros%2C%20436%20-%20Cambuci%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003114-000!5e0!3m2!1spt-BR!2sbr!4v1675250465906!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false"
            />
        </div>
        </div>
    )
}
export default Sobre