import { MdDelete } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import prod1 from "../../assets/casq.webp"
import prod2 from "../../assets/ipad.jpg"
import prod3 from "../../assets/aipod.webp"
import { PiCurrencyEurLight } from "react-icons/pi";
import axios from "axios";
import type { Product } from "../../types/Product";
export const Payment  =  () => {


  interface ApiResponse {
    success : boolean,
    url : string

  }


  const cart : Product[] = [
    {name : "Casque Pro" , price : 30, quantity : 2, subTotal: 60, img : prod1 },
    {name : "iPad Apple" , price : 524, quantity : 1,  subTotal:524 ,img : prod2},
    {name : " Airpods Pro " , price : 23, quantity : 2 , subTotal:46 , img : prod3}
  ]

  const handlePayment = async (cart : Product []) : Promise<void> => {
    try{
        const result = await axios.post<ApiResponse>(`${import.meta.env.VITE_API_URL}/checkout-payment` , {cart},  { withCredentials: true})
        window.location.href = result.data.url
    }catch(error){
         console.log(error)
    }
    

  }



  return (
    <>
      <section > 
        <p>Acceuil <GrFormNext /><span className="text-secondary">Panier</span> </p>
        <div className="row gap-5">
        <div className="col-8"  >
          <table className="table  table-borderless" >
            <thead>
              <tr className="my-2n">
                <th>Produit</th>
                 <th>Prix</th>
                  <th>Quantité</th>
                  <th>Sous Total</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>


            {cart?.map((product , index) => (
               <tr key={index}>
                <td className="d-flex">  
                   <img src={product.img} alt="prod1" width="40" height="40"/> 
                 <p className="ms-2 mt-2">{product.name}</p>
                </td>
                <td>{product.price} <PiCurrencyEurLight /></td>
                <td>
                   <div>
                       <span className="border py-1 px-2" >-</span>
                        <span className="border py-1 px-2">{product.quantity}</span>
                        <span className="border py-1 px-2">+</span>
                  </div>
                  
                  </td>
                <td>{product.subTotal} <PiCurrencyEurLight /></td>
                <td><MdDelete size={19} /></td>
            </tr>
            ))}
           
       

        
            </tbody>
          </table>

         <div className="text-center text-md-start">
              <Link to="/"><button className="btn btn-primary my-3 me-3">Continuer vos achats</button></Link>

         <Link to="/"><button className="btn btn-primary my-3">Vider le pannier</button></Link>

         </div>
        

        </div>

 <div className="card col-3" >
  <div className="card-body px-2">
    <h5 className="card-title py-3">Détails de la commande</h5>
    <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-between align-items-center"><span>Sous Total</span> <span>630 <PiCurrencyEurLight /></span></h6>
    <p className="card-text d-flex justify-content-between align-items-center"> <span>Taxe</span> <span>0</span> </p>
  </div>
   <p className="text-secondary text-center">Total à payer 630 <PiCurrencyEurLight /></p>
  <Link to="/payment"><button className="btn btn-primary my-3 w-100" onClick={() => handlePayment(cart)}>Payer <span>630 <PiCurrencyEurLight /></span> </button></Link>
</div>
    
    </div>

      </section>
    </>
  )
}
