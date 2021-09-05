import React, {useState} from "react"
import coin from "../../assets/coin.svg"
import buy from '../../assets/buy-blue.svg'
import postRedeem from '../../actions/postRedeem'
import { userContext } from '../../context/userContext';
import Message from '../Message/Message'

function Cards(props) {
    
    const [hovered, isHovered] = useState(false);
    const [successRedeem, setSuccessRedeem] = useState("");
    const { points, setPoints } = React.useContext(userContext);
    const [modal, setModal] = React.useState(false)

    const handleRedeem = (id, cost) => {
        postRedeem(id).then(response => { setSuccessRedeem(response.message); setPoints(points <= 0 ? 0 : points - cost) });
    }
    
    return (
        <div 
            className="card" 
            onMouseOver={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}>
                { hovered ?
            <div className="card-hovered"> 
                <div className="buttons-card-hovered"> 
                    <img className="buy" src={buy} alt="buy"/>
                    <h5 className="card-cost"> { props.cost <= points ? props.cost : "You need " + (props.cost - points)} </h5> 
                    <img className="coin" src={coin} alt="coin"/>  
                </div>
            </div> : null}
            <div className="center">
                <div>
                    <img src={props.img.url} className={hovered ? "img-hovered card-img-top" : "card-img-top"} alt={props.name}/>
                </div>
                <button type="button" className="button-one" disabled={ props.cost > points }  onClick={() => {handleRedeem(props._id, props.cost); setModal(true)}}>Redeem now</button>
            </div>
            <div>
                <h4 className="">{props.category}</h4>
                <h5 className="">{props.name}</h5>
            </div>
            {modal && successRedeem && <Message successRedeem={successRedeem} setModal={setModal} />}
        </div> 
    )
   
}

export default Cards