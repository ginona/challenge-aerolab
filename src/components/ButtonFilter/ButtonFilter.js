import React from 'react'
import './ButtonFilter.css'

const ButtonFilter = (props) => {
    return (
            <button className="btnFilter" onClick={() => props.setSortData(props.filter)}>{props.message}</button>
    )
}

export default ButtonFilter