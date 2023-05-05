import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Acordeon from "../Components/acordeon";
import AcordeonMobile from "../Components/acordeon-mobile";
import Comentarios from "../Components/Comentarios";

export default function servicos() {
  return (
    <>
    <Header />
      <div className="grid-metodo">
        <div className="servicos">
       <Acordeon/>
       <AcordeonMobile/>
        </div>
      </div>
      <Comentarios/>
      <Footer />
    </>
  );
}
