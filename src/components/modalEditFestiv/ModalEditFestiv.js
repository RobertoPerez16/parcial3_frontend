import { Form, Button, Table } from "react-bootstrap"

const ModalEditFestiv = ({ventModalEd}) => {
    return (
        <div className='editFest-cont'>
            <div>
                <i className="fas fa-times-circle" onClick={ventModalEd}></i>
            </div>

            <h4>Editar o agregar</h4>
            <Form className='edit-form'>
                <Form.Group >
                    <Form.Label>Nombre del festival</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Patrocinador</Form.Label>
                    <Form.Control type="text" placeholder="Patrocinador" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="text" placeholder="Duración" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Modificar
                </Button>
            </Form>

            {/**************** tabla teatros **********************/}

            <h4>Teatros</h4>
            <div className='agreg-teatro'>
                <Form.Control as="select" className='select-Teatros'>
                    <option>El portal</option>
                </Form.Control>
                <Button variant="primary" className='btn'>
                    Agregar
            </Button>
            </div>
            <Table striped bordered hover className='tabla-Teatro'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre del teatro</th>
                        <th>Cantidad de salas</th>
                        <th>Cantidad de sillas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Royal films</td>
                        <td>20</td>
                        <td>850</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ModalEditFestiv