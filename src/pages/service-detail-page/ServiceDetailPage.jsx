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
        </>
    )
}

export default ServiceDetailPage