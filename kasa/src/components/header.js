import logo from '../assets/img/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container">
            <div className="header__container__img">
                <Link to={"/"}> 
                    <img src={logo} alt="Logo Kasa" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/about"}> A propos</Link>
                    </li>
                </ul>               
            </nav>
        </div>
    )
}