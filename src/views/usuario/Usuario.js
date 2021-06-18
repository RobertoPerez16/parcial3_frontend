import {Table, Button, Spinner} from "react-bootstrap"
import { useState, useEffect } from "react"
// componentes
import Menu from "../../components/menu/Menu"
import axios from "axios";
import {apiHost} from "../../config/config"

const Usuario = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get(`${apiHost}/api/cliente`)
            .then((res) => {
                setClientes(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    }, [])

    return (
        <div className='pelicula_content'>
            <Menu />
            {
                clientes && clientes.length > 0 ?
                    <>
                        <Button variant="primary" style={{ margin: '1.5%' }} >
                            Crear usuario
                        </Button>
                        <Button variant="primary">
                            Comprar boleta
                        </Button>
                        <Table striped bordered hover >
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Cedula</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    clientes.map((c) => (
                                        <tr key={c.id}>
                                            <td>{ c.id }</td>
                                            <td>{ c.full_names }</td>
                                            <td>{ c.edad }</td>
                                            <td>{ c.cedula }</td>
                                            <td><Button variant="success" >Presionar</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </>
                    :
                    <Spinner animation="border" role="status" className='spn'>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
            }

            {/* modales */}
        </div>
    )
}

export default Usuario
