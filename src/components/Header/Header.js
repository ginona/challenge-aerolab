import React from "react"
// import AddCoins from "../CoinsModal/CoinsModal"
import { userContext } from '../../context/UserContext';
import logo from "../../assets/aerolab-logo.svg"
import './Header.css'

function Header() {

    // const [modal, setModal] = React.useState(false)
    const { users } = React.useContext(userContext)

    return (
        <header className="header">
            {}
            <img className="logo" src={logo} alt="logo"/>
            <ul class="menu">
                <li><a href="#episodios">Gino</a></li>
                <li><a href="#dondeVenimos">Nosotros</a></li>
            </ul>
        </header>
    )
}

export default Header