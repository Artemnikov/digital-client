import axios from "@utils/axios"

export const registerUser = async (body) => {
    try {
        const { response } = await axios.post("registration")
        return response
    } catch (error) {
        console.error("failed to register user, ERR:", error)
    }
}

export const loginUser = async () => {
    try {
        const { response } = await axios.post("login")
        localStorage.setItem("access_token", response.access_token)
        localStorage.setItem("refresh_token", response.refresh_token)
        return response
    } catch (error) {
        console.error("error at logging in, ERR:", error)
    }
}