import {Routes , Route , Navigate, } from "react-router-dom"
import { Payment } from "./pages/payment/Payment"
import { Home } from "./pages/Home"
import { Subscriptions } from "./pages/subscriptions/Subscriptions"
import { Layout } from "./components/Layout"
import { Success as PaymentSuccess } from "./pages/payment/Success"
import { Cancel as PaymentCancel } from "./pages/payment/Cancel"
import { Success as SubscriptionsSuccess } from "./pages/subscriptions/Success"
import { Cancel as SubscriptionsCancel } from "./pages/subscriptions/Cancel"
function App ()  {

  return (
    <>
       <Routes> 
          <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}  />
             <Route  path="payment" element={<Payment/>}/>
             <Route  path="subscriptions" element={<Subscriptions/>}/>
             <Route path="payment/success" element={<PaymentSuccess/>}/>
              <Route path="payment/cancel" element={<PaymentCancel/>}/>
              <Route path="subscriptions/success" element={<SubscriptionsSuccess/>}/>
              <Route path="subscriptions/cancel" element={<SubscriptionsCancel/>}/>
          </Route>
          <Route path="*"  element={<Navigate to="/" />}/>
       </Routes>
    </>
  )
}

export default App
