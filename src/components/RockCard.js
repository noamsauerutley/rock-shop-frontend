import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const RockCard = (props) => {

    const { rock } = props;

    return (
        <div className="ui column">
            <Card as={Link} to={"/rocks/" + rock.id}>
                <Image alt={rock.name} src={rock.image_url} />
                <Card.Content>
                    <Card.Header>{rock.name}</Card.Header>
                    <Card.Meta><span className='date'>{rock.category}</span></Card.Meta>
                    <Card.Description>{rock.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='dollar sign' />
                            {rock.price}
                        </a>
                    </Card.Content>
            </Card>
        </div>
    )
}

export default RockCard;
