import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <Card style={{ width: '18rem', marginTop:40 }}>
      <Card.Img variant="top" src={props.product.images} />
      <Card.Body>
      <Card.Title>{props.product.categoryId}</Card.Title>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Title>{props.product.price}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        
        <Link to={`${props.product.id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;