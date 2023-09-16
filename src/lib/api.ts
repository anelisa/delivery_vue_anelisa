import axios from "axios";

export default (url: string = "http://localhost:8081") => {
    return axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTQ5OTI1NDYsImV4cCI6MTY5NTA3ODk0Nn0.vJx8p-rJLpMALs5DbQ35s9dZK6n6z3JqOJni0qqLOpnSIm9ChfG8yAfC_k_ySZQk"
        }
    })
}