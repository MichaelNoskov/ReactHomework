import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text'
import { Avatar } from '@consta/uikit/Avatar';
import { NavLink } from 'react-router-dom';

export const ServicesList = function({name, description, image, createdAt, id}){
    return (
        <Card verticalSpace="m" horizontalSpace="m">
            <Avatar style={{marginBottom: "0.5rem"}} url={image} name="service-image" size="l"/>
            <Text weight="semibold">
                <NavLink to={id}>{name}</NavLink>
            </Text>
            <hr/>
            <Text style={{ marginBottom: "1rem" }}>{description}</Text>
            <Text size="xs" align="right" view="ghost">{createdAt}</Text>
        </Card>
    )
}