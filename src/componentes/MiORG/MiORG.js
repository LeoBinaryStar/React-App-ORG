import {useState} from "react";
import "./MiORG.css";

const MiORG = (props) => {
  //Estado -Hooks
  //useState
  //useState()

  /*
  const [mostrar, actualizarMostrar] = useState(true);

  const manejarClick = () => {
	console.log("Mostrar/Ocultar elemento", !mostrar)
	actualizarMostrar(!mostrar)
  };


  */

  return (
    <section className="orgSection">
      <h3 className="tittle">Mi Organización</h3>
      <img src="img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
  );
};

export default MiORG;
