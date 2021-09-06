import React from "react"
import { userContext } from '../../context/UserContext'
import coin from "../../assets/coin.svg"
import postCoins from "../../actions/postCoins"
import { MIN, MED, MAX} from "../../constants/constants"
import './CoinsModal.css'

function CoinsModal(props) {
    const [show, setShow] = React.useState(false);
    const { points, setPoints } = React.useContext(userContext);
    const [response, setResponse] = React.useState("")

    React.useEffect(() => {
        if(show) 
            setTimeout(() => { setShow(false) }, 3000)
    },[show])

    const handleClick = (number) =>{
        postCoins(number).then(response => { 
            if (response && response.message === 'Points Updated'){
                setPoints(points + number); 
                setShow(true);
                setResponse(response.message)
            }else{
                setShow(true);
                setResponse("Error, try again later.")
            }
        })
    }
    
    return (
        <section className="overlay">
                <div className="popup">
                <h2>Add more coins</h2>
                <div className="add-coins">
                    <button className="button-add-coins" onClick={() => handleClick(MIN)}><img src={coin} alt={MIN} /> {MIN}</button>
                    <button className="button-add-coins" onClick={() => handleClick(MED)}><img src={coin} alt={MED} /> {MED}</button>
                    <button className="button-add-coins" onClick={() => handleClick(MAX)}><img src={coin} alt={MAX} /> {MAX}</button>
                    <button className="close" onClick={() => props.setModal(false)}> X </button>
                </div>
            </div>
        </section>
    )
}

export default CoinsModal