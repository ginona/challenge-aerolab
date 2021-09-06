import React from 'react'
import getUser from '../actions/getUser'

export const userContext = React.createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = React.useState({});
    const [points, setPoints] = React.useState(0);
    const [history, setHistory] = React.useState(false);
    const [record, setRecord] = React.useState([]);

    React.useEffect(() => {
        getUser().then(e => {setUsers(e); setPoints(e.points); setRecord(e.redeemHistory)});
    },[])

    return (
        <userContext.Provider value={{ users, setUsers, points, setPoints, history, setHistory, record }}>
            {props.children}
        </userContext.Provider>
    );
}

