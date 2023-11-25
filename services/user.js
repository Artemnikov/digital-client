import axios from "@utils/axios"
import { toast } from "react-toastify"

export const registerUserPromise = async (body) => {
    return await axios.post("users/registration", { ...body })
}

export const loginUserPromise = async (body) => {
    return await axios.post("users/login", { ...body })
}

export const loadUserPromise = async () => {
    try {
        return { response } = await axios.get("users/me")
    } catch (error) {
        console.error("failed to load user, ERR: ", error)
    }
}