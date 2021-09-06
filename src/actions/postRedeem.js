import { headers, URL_POSTREDEEM } from "../constants/constants"

async function postRedeem(productId) {

    try {
        const response = await fetch(URL_POSTREDEEM, { method: "POST", headers, body: JSON.stringify({"productId": productId}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default postRedeem