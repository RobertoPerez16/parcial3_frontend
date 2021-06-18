import { Form, Button } from "react-bootstrap"
import {apiHost} from "../../config/config";
import axios from "axios";

const CrearPeli = ({ VentCrear, peliculas, setPeliculas }) => {

    const crearPeliculas = (e) => {
        e.preventDefault()
        const nombre = document.getElementById('nombre').value
        const duracion = document.getElementById('duracion').value
        const creditos = document.getElementById('creditos').value
        const director = document.getElementById('director').value
        const pais = document.getElementById('pais').value
        const banda_anuncio = document.getElementById('banda_anuncio').value

        if (nombre && duracion && creditos && director && pais && banda_anuncio) {
            const datos = {
                nombre,
                duracion,
                creditos,
                director,
                pais,
                banda_anuncio
            }

            axios.post(`${ apiHost }/api/pelicula`, datos)
                .then((res) => {
                    const datos = [
                        ...peliculas,
                        res.data.pelicula
                    ]
                    setPeliculas(datos)
                    VentCrear()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='crearPeli-cont'>
            <div>
                <i className="fas fa-times-circle" onClick={VentCrear}></i>
            </div>
            <h4>Crear</h4>
            <Form className='crear-form'>
                <Form.Group >
                    <Form.Label>Nombre de la pelicula</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" id="nombre"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="text" placeholder="Duración" id="duracion"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Creditos</Form.Label>
                    <Form.Control type="text" placeholder="Creditos" id="creditos"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="text" placeholder="Director" id="director"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Pais</Form.Label>
                    <Form.Control type="text" placeholder="Pais" id="pais"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Banda anuncio</Form.Label>
                    <Form.Control type="text" placeholder="Banda anuncio" id="banda_anuncio"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={ crearPeliculas }>
                    Agregar
                </Button>
            </Form>
        </div>
    )
}

export default CrearPeli
