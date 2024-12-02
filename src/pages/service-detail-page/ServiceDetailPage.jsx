import { ServicesList } from "../../types/Services";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const ServiceDetailPage = function(){

    const navigate = useNavigate();

    const {id} = useParams();
    const [services, setServices] = useState();

    async function fetchServices(){
        setServices(await getServicesListAction(id));
    }
    fetchServices().catch(_=>{navigate("/not-found")})

    return (
        <>
        <div style={{
                maxWidth: "60rem",
                margin: "0 auto",
            }}>
            {services ? (
                <ServicesList
                key={services.name}
                name={services.name}
                description={services.description}
                image={services.image}
                createdAt={(new Date(services.createdAt)).toDateString()}/>
            ) : (
                <Loader/>
            )}
        </div>
        </>
    )
}

export default ServiceDetailPage