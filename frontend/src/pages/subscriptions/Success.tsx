import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Success = () => {
  return (
   <>
   <div className=" row d-flex justify-content-center align-items-center  mx-auto mt-5">
       
   <div className="col-4 card mt-5">
     <div className="card-body text-center"> 
      <p>  <FaChevronCircleDown size={60} className="text-success" /></p>
       <h5 className="card-title">Abonnement Réussi</h5>
       <p className="card-text">Félicitations ! Vous profitez maintenant de votre plan.</p>
       <div className="d-flex flex-column">
         <Link to="/subscriptions"  className="btn  btn-success mb-2 ">Retour à l'accueil</Link>
         
       </div>
     </div>
   </div>
    
      </div>
   
   </>
  )
}
