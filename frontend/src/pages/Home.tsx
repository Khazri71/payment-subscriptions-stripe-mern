import prod1 from "../assets/casq.webp"
import prod2 from "../assets/ipad.jpg"
import prod3 from "../assets/aipod.webp"
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const Home  = () => {
  return (
      <>
       
       <h2 className="title text-center mb-2 text-primary">Technova</h2>
      <section className="text-center">
        <p className="my-3 w-50 mx-auto">Chez <span className="fw-bold">TimeStore</span>  Découvrez nos accessoires high tech : Casques , iPads , Écouteurs Bluetooth pour améliorer votre quotidien.</p>
        <div className="my-3 d-flex  flex-column flex-md-row justify-content-center align-items-center gap-5">
            <img src={prod1} alt="prod1" width="150" height="150"/>
            <img src={prod2} alt="prod2" width="150" height="150" />
            <img src={prod3} alt="prod3" width="150" height="150" />
        </div>
        <Link to="/payment"><button className="btn btn-primary my-3">Voir le panier</button></Link>
     </section>

  
     <section className="text-center ">
      <p className="my-2 w-50 mx-auto ">Boostez votre productivité avec notre outil <span className="fw-bold">TimeFlow</span> suivi automatique du temps passé sur chaque tâche avec rapports visuels</p>
       <Link to="/subscriptions"><button className="btn btn-primary my-3">Abonner <IoIosAdd  size={23}/> </button></Link>
     </section>
      </>
  )
}
