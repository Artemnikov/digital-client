import axios from "@utils/axios"
import { toast } from "react-toastify"

export const registerUser = async (body) => {
    try {
        const { response } = await axios.post("users/registration", { ...body })
        toast.success("registration was successfull")
        return response
    } catch (error) {
        toast.error("failed to register. Try again next year")
        console.error("failed to register user, ERR:", error)
    }
}

export const loginUser = async (nody) => {
    try {
        const { response } = await axios.post("users/login", { ...nody })
        localStorage.setItem("access_token", response.access_token)
        localStorage.setItem("refresh_token", response.refresh_token)
        return response
    } catch (error) {
        console.error("error at logging in, ERR:", error)
    }
}

export const loadUser = async () => {
    try {
        return { response } = await axios.get("users/me")
    } catch (error) {
        console.error("failed to load user, ERR: ", error)
    }
}