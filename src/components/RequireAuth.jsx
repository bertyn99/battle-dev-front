import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../store/slice/authSlice"
import DefaultLayout from "./layout/default"

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token
            ?  <DefaultLayout><Outlet /></DefaultLayout>
            : <Navigate to="/signin" state={{ from: location }} replace />
    )
}
export default RequireAuth