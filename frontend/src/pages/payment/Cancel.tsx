import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
export const Cancel  = () => {
  return (
    <>

<div className=" row d-flex justify-content-center align-items-center  mx-auto mt-5">
    
<div className="col-4 card mt-5">
  <div className="card-body text-center"> 
   <p>  <MdCancel size={60} className="text-danger" /></p>
    <h5 className="card-title">Paiement Annulé</h5>
    <p className="card-text">Pas d'inquiétude ! Vous pouvez réessayer quand vous serez prêt(e).</p>
    <div className="d-flex flex-column">
      <Link to="/payment" className="btn  btn-danger mb-2 ">Réessayer</Link>
      <Link to="/"   className="btn btn-outline-secondary">Contacter le support</Link>
    </div>
  </div>
</div>
 
   </div>
    </>
  )
}
