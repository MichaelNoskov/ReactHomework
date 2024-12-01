import { ServicesList } from "../../types/Services";
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const ServicePage = function(){

    const [services, setServices] = useState();
    useEffect(() => {
        async function fetchServices(){
            setServices(await getServicesListAction());
        }
        fetchServices()
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