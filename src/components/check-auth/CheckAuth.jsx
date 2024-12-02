import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AppRoute } from "../const"

const CheckAuth = function({children}){
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user === null){
            navigate(AppRoute.login)
        }
    },[])

    return children
}
export default CheckAuth