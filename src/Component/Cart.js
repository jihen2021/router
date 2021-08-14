import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Cart=({movie}) =>{

let {title,image,rating}= movie;

    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} className="image" />
            <Card.Body>
            <Card.Title className="titre">{title} </Card.Title>
            <Rating rate={rating}/>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Cart

