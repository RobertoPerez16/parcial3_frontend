import { Table, Button, Spinner } from "react-bootstrap"
import { useState, useEffect, } from "react"
import axios from "axios"
import { apiHost } from "../../config/config";

// componentes
import ModalEditFestiv from "../../components/modalEditFestiv/ModalEditFestiv"
import CrearFestival from "../../components/crearFestival/CrearFestival"
import Menu from "../../components/menu/Menu"

const Festival = () => {
    const [modalEdit, setModalEdit] = useState(false)
    const [modalCrear, setModalCrear] = useState(false)
    const [festivales, setFestivales] = useState([])

    useEffect(() => {
        axios.get(`${apiHost}/api/festival`)
            .then(res => {
                setFestivales(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    // funciones

    const ventModalEd = () => {
        if (modalEdit) {
            setModalEdit(false)
        } else {
            setModalEdit(true)
        }
    }
    const ventCrear = () => {
        if (modalCrear) {
            setModalCrear(false)
        } else {
            setModalCrear(true)
        }
    }

    return (
        <div className='festival-conten'>
            <Menu />
            {festivales && festivales.length > 0 ?
                <>
                    <Button variant="primary" style={{ margin: '3%' }} onClick={ventCrear}>
                        Crear
                    </Button>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre del festival</th>
                                <th>Patrocinador</th>
                                <th>Duración</th>
                                <th>Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {festivales.map((dat, id) => (
                                <tr key={id}>
                                    <td>{dat.id}</td>
                                    <td>{dat.nombre}</td>
                                    <td>{dat.patrocinador}</td>
                                    <td>{dat.duracion}</td>
                                    <td><Button variant="success" onClick={ventModalEd}>
                                        Presionar</Button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </Table>
                </>
                :
                <Spinner animation="border" role="status" className='spn'>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }

            {/* modales */}
            {modalEdit && <ModalEditFestiv ventModalEd={ventModalEd} />}
            {modalCrear && <CrearFestival ventCrear={ventCrear} setFestivales={setFestivales} festivales={festivales}/>}
        </div>
    )
}

export default Festival
