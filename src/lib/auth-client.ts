import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://compareapi.systemnineone.com.br/"
})