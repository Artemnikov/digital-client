import axios from "@utils/axios"
import { toast } from "react-toastify"

export const registerUserPromise = async (body) => {
    const { response } = await axios.post("users/registration", { ...body })
    toast.success("registration was successfull")
    return response
}

export const loadUserPromise = async () => {
    try {
        return { response } = await axios.get("users/me")
    } catch (error) {
        console.error("failed to load user, ERR: ", error)
    }
}