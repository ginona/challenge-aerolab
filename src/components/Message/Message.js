import React from 'react'
import './Message.css'
const MESSAGE = "You've redeem the product successfully"
const SUCCESS = "alert color-success"
const ERROR = "alert color-error"

const Message = (props) => {
    var RESULT = typeof props.successRedeem !== 'undefined' && props.successRedeem === MESSAGE ? SUCCESS : ERROR
    return (
        <section className={RESULT}>
            <div className="center-message">
                <h4>{RESULT === SUCCESS ? "You've redeem the product successfully" : "Error, try again."}</h4>
                <button className="close"  onClick={() => props.setModal(false)}> X </button>
            </div>
        </section>     
    )
}

export default Message