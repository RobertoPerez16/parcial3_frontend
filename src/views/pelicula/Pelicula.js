import {Table, Button, Spinner} from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"

import Menu from "../../components/menu/Menu"
import CrearPeli from "../../components/crearPelicula/CrearPeli"
import ModalEditPeli from "../../components/modalEditPeli/ModalEditPeli"
import {apiHost} from "../../config/config"

const Pelicula = () => {
    const [modalCrear, setModalCrear] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        axios.get(`${ apiHost }/api/pelicula`)
            .then((res) => {
                setPeliculas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // funciones
    const VentCrear = () => {
        if(modalCrear){
            setModalCrear(false)
        }else{
            setModalCrear(true)
        }
    }
    const VentEdit = () => {
        if(modalEdit){
            setModalEdit(false)
        }else{
            setModalEdit(true)
        }
    }

    return (
        <div className='pelicula_content'>
            <Menu />
            {
                peliculas && peliculas.length > 0 ?
                    <>
                        <Button variant="primary" style={{ margin: '3%' }} onClick={VentCrear}>
                            Crear
                        </Button>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Duracion</th>
                                    <th>Creditos</th>
                                    <th>Director</th>
                                    <th>Pais</th>
                                    <th>Banda anuncio</th>
                                    <th>Modificar</th>
                                </tr>
                            </thead>
                            {
                                peliculas.map((p) =>(
                                    <tbody key={p.id}>
                                        <tr>
                                            <td>{ p.id }</td>
                                            <td>{ p.nombre } </td>
                                            <td>{ p.duracion }</td>
                                            <td>{ p.creditos }</td>
                                            <td>{ p.director }</td>
                                            <td>{ p.pais }</td>
                                            <td>{ p.banda_anuncio }</td>
                                            <td><Button variant="success" onClick={VentEdit}>
                                                Presionar</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }

                        </Table>

                    </>
                    :
                    <Spinner animation="border" role="status" className='spn'>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
            }

            {/* modales */}
            {modalEdit && <ModalEditPeli VentEdit={VentEdit}/>}
            {modalCrear && <CrearPeli VentCrear={VentCrear} setPeliculas={ setPeliculas} peliculas={ peliculas }/>}
        </div>
    )
}

export default Pelicula
