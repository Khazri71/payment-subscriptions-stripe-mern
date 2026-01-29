import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiCurrencyEurLight } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import axios from "axios";
export const Subscriptions = () => {

  interface ApiResponse {
    success : boolean,
    url : string
  }

 const plans = [
  {
    name : "Plan de base" ,
    price : 10,
    price_id : "price_1SuaTVHOo7W3mJvBpr2WLurc",
    features : [
      "Accès aux fonctionnalités de base",
      "5 projets par mois",
       "Support communautaire",
       "Mises à jours chaque semaine"

    ]
  },
   {
    name : "Plan premium" ,
    price : 40,
    price_id : "price_1SuaVNHOo7W3mJvBP75VTFHz", 
    features : [
      "Toutes les fonctionnalités de base",
      " Projets illimités",
      "Support prioritaire",
      "Mises à jours quotidiennes",
      "Analytiques avancée"


    ]
  }
 ]


 const handleSubscriptions = async (priceId : string)  : Promise<void>=> {
     try{
      const response = await axios.post<ApiResponse>(`${import.meta.env.VITE_API_URL}/checkout-subscriptions` , {priceId} , {withCredentials:true})
      window.location.href = response.data.url

     }catch(error) {
      console.log(error)
     }
 }




  return (
    <>
    <section >
      <div className="text-center my-1">
         <h3>Choisissez votre plan</h3>
      <p className="text-secondary">Tarification simple pour tous</p>
      </div>
     

     <div className="row gap-4 d-flex justify-content-center ">


      {plans?.map((plan) => (
         <div className="card shadow-sm col-4" key={plan.price_id} >
  <div className="card-body">
    <h5 className="card-title">{plan.name}</h5>
    <div className="d-flex align-items-center mb-3 "><h5 className="card-title">{plan.price} <PiCurrencyEurLight /> </h5> <p className="text-secondary mt-2">/mois</p></div>  
     {plan.features?.map((feature , index) => (
              <p key={index} className="card-text"><MdDone  size={20} color="#23bd47"/> {feature} </p>
     ))}
  
 
  </div>
    <button onClick={() => handleSubscriptions(plan.price_id)} className="btn btn-primary my-4 w-100">Abonnez Maintenant</button>
</div>
      ))}




     </div>
         <Link to="/" className="text-secondary text-decoration-none  "> <p className="text-center mt-2" ><IoArrowBackCircleOutline size={20}  /> Retour à l'accueil</p></Link>



    </section>
     
    </>
  )
}
