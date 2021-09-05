import React from "react"
import CoinsModal from "../CoinsModal/CoinsModal"
import coin from '../../assets/coin.svg'
import { userContext } from '../../context/UserContext';
import logo from "../../assets/aerolab-logo.svg"
import './Header.css'

function Header() {

    const [modal, setModal] = React.useState(false)
    const { setHistory } = React.useContext(userContext)

    return (
        <header>
            <div  className="header">
            <img className="logo" src={logo} onClick={() => setHistory(false)} alt="logo"/>
            <div className="userNameInfo">
            <h6 className="userName" onClick={() => setHistory(true)}> Testing Name </h6>
            <button className="button-header-coins" onClick = {() => setModal(true)} > 
                1300
                <img src={coin} alt="coin"/>
            </button>
            </div>
            </div>
            { modal ? <CoinsModal setModal={setModal} /> : null }
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </header>
    )
}

export default Header