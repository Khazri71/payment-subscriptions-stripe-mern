import { Link } from "react-router-dom"
import logo from "/logo.svg"
import photo from "../assets/photo.png"
export const Navbar = () => {
  return (
    <>
      <nav className="px-5 py-1 d-flex justify-content-between align-items-center">
        <div  className="px-5 d-flex justify-content-between align-items-center">
         <Link to="/"> <img src={logo} alt="logo" width="43"/></Link>
          <h6 className="text-primary mt-2">Technova</h6>
        </div>
        <div>
          <img src={photo} alt="photo" width="40"  className="rounded-circle"/>
        </div>
      </nav>
    </>
  )
}
