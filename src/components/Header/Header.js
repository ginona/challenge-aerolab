import React from "react"
import './Header.css'
import CoinsModal from "../CoinsModal/CoinsModal"
import { userContext } from '../../context/UserContext';
import coin from '../../assets/coin.svg'
import logo from "../../assets/aerolab-logo.svg"

function Header() {

    const [modal, setModal] = React.useState(false)
    const { users, points, setHistory } = React.useContext(userContext)

    return (
        <header>
            <div  className="header">
                <img className="logo" src={logo} onClick={() => setHistory(false)} alt="logo"/>
                <div className="userNameInfo">
                    <h6 className="userName" onClick={() => setHistory(true)}> {users.name} </h6>
                    <button className="button-header-coins" onClick = {() => setModal(true)} > 
                        {points}
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