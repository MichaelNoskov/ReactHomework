import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text'
import { Avatar } from '@consta/uikit/Avatar';

export const ServicesList = function({name, description, image, createdAt}){
    return (
        <Card verticalSpace="m" horizontalSpace="m">
            <Avatar url={image} name="service-image" size="l"/>
            <Text weight="semibold">{name}</Text>
            <hr/>
            <Text >{description}</Text>
            <Text size="xs" align="right" view="ghost">{createdAt}</Text>
        </Card>
    )
}