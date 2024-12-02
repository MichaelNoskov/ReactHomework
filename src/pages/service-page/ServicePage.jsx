import { ServicesList } from "../../types/Services";
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { useSelector, useDispatch } from "react-redux";
import { setServicesState } from "../../store/servicesSlice";

const ServicePage = function(){

    const dispatch = useDispatch()
    const [services, setServices] = useState(useSelector(state => state.services.value));

    useEffect(() => {
        getServicesListAction().then(resp=>{
            setServices(resp)
            dispatch(setServicesState(resp))
        })
    }, []);

    return (
        <>
        <div style={{
                maxWidth: "60rem",
                margin: "0 auto",
                marginBottom: "1rem",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
            }}>
            {services ? (
                services.map(services => <ServicesList
                key={services.name}
                name={services.name}
                description={services.description}
                image={services.image}
                createdAt={(new Date(services.createdAt)).toDateString()}
                id={services.id}/>)
            ) : (
                <Loader/>
            )}
        </div>
        </>
    )
}

export default ServicePage