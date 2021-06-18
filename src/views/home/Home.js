import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

// imagenes
import img01 from "../../assets/picture/home/01.jpg"
import img02 from "../../assets/picture/home/02.jpg"
import img04 from "../../assets/picture/home/04.jpg"

const Home = () => {
    return (
        <div className='home-conten'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img01} />
                <Card.Body>
                    <Card.Title>Modulo festival</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='/teatro'><Button variant="primary">Acceder</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img02} />
                <Card.Body>
                    <Card.Title>Modulo Pelicula</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='/pelicula'><Button variant="primary">Acceder</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img04} />
                <Card.Body>
                    <Card.Title>Modulo Usuario</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='/usuario'><Button variant="primary">Acceder</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Home