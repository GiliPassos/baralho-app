import Image from "next/image";
import estilos from './Card.module.css';


import { FaFire, FaWater } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

export default function Card(props) {
  return (
    <div
      className={
        props.elemento === "agua"
          ? estilos.card_signo_agua
          : props.elemento === "fogo"
          ? estilos.card_signo_fogo
          : props.elemento === "terra"
          ? estilos.card_signo_terra
          : props.elemento === "ar" && estilos.card_signo_ar
      }
    >
      <div className={estilos.titulo_icone}>
        <h3>{props.signo}</h3>
        {props.elemento === "agua" ? (
          <FaWater className={estilos.icone} />
        ) : props.elemento === "fogo" ? (
          <FaFire className={estilos.icone} />
        ) : props.elemento === "terra" ? (
          <PiPlant className={estilos.icone} />
        ) : (
          props.elemento === "ar" && <MdAir className={estilos.icone} />
        )}
      </div>
      <div>
        <Image
          src={props.imagem}
          alt={props.signo}
          width={180} /* Ajusta o tamanho da imagem */
          height={120}
        />
      </div>
      <span>
        {props.dataInicio} - {props.dataFim}
      </span>
    </div>
  );
}
