import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <Card style={{ width: '20rem', marginTop:'20px' }}>
      <Card.Img variant="top" src={props.product.images} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Title style={{ color:'orange', fontWeight:'bold' }}>${props.product.price}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        
        <Link to={`product/${props.product.id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;