import { headers, URL_GETUSER } from "../constants/constants"

async function getUser() {

    try {
        const response = await fetch(URL_GETUSER, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getUser