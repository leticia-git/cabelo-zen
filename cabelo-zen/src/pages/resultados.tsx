import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from 'next/image'

import Comentarios from "../Components/Comentarios";
import ResultadosSlides from "../Components/Resultados";
export default function Resultados() {
  return (
    <>
      <div className="resultados">
      <Header />
        <div className="grid-metodo">
        <ResultadosSlides/>
        </div>
        <Comentarios/>
        <Footer />
      </div>
    </>
  );
}
