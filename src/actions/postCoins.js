import { headers, URL_POSTCOINS } from "../constants/constants"

async function postCoins(coins) {

    try {
        const response = await fetch(URL_POSTCOINS, { method: "POST", headers, body: JSON.stringify({"amount": coins}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default postCoins