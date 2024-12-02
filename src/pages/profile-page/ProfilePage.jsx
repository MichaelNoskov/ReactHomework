import { useSelector } from "react-redux"
import { AppRoute } from '../../components/const';
import { useNavigate } from "react-router"
import { Avatar } from '@consta/uikit/Avatar';

const ProfilePage = function(){
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)

    if (user === null)
        return navigate(AppRoute.login)
    return(
    <>
        <div style={{
                display: "flex",
                justifyContent: "center",
                position: "sticky",
                margin: "0 auto",
            }}>
            <Avatar
                style={{
                    width: "200px",
                    height: "200px",
                    marginRight: "1rem"
                }}
                url={user.image}>
            </Avatar>
            <div>
                <h1>Логин: {user.username}</h1>
                <h3>Имя: {user.lastName} {user.firstName}</h3>
                <h3>Почта: {user.email}</h3>
            </div>
        </div>
    </>
    )
}

export default ProfilePage