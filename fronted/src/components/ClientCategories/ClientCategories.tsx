import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ClientCategories() {
    return <div>
        <h1 className='text-center'>DANH MỤC CÂY</h1>
        <div className="divider text-center">
            <span className="leaf-icon">&#127806;</span>
        </div>

        <div className='row'>
            <div className='col-3'>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
}