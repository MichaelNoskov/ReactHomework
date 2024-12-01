import { ServicesList } from "../../types/Services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const ServiceDetailPage = function(){
    const {id} = useParams();
    const [services, setServices] = useState();
    useEffect(() => {
        async function fetchServices(){
            setServices(await getServicesListAction(id));
        }
        fetchServices()
    }, [id]);

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