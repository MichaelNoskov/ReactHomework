import { ServicesList } from "../../types/Services";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { useSelector } from "react-redux";

const ServiceDetailPage = function(){

    const navigate = useNavigate();

    const {id} = useParams();
    const [service, setService] = useState(useSelector(state => state.services.value)?.find(s => s.id == id));

    useEffect(() => {
        if(service == null)
            getServicesListAction(id).then(service=>{
                setService(service)
            }).catch(_=>{navigate("/not-found")})
    }, []);

    return (
        <>
        <div style={{
                maxWidth: "60rem",
                margin: "0 auto",
            }}>
            {service ? (
                <ServicesList
                key={service.name}
                name={service.name}
                description={service.description}
                image={service.image}
                createdAt={(new Date(service.createdAt)).toDateString()}/>
            ) : (
                <Loader/>
            )}
        </div>
        </>
    )
}

export default ServiceDetailPage