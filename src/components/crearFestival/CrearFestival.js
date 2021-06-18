import { Form, Button } from "react-bootstrap"
import axios from "axios"
import { apiHost } from "../../config/config";

const CrearFestival = ({ ventCrear, setFestivales, festivales }) => {

    const crearFest = (e) => {
        e.preventDefault()
        const nombre = document.getElementById('nombre').value
        const patr = document.getElementById('patr').value
        const duracion = document.getElementById('duracion').value
        if(nombre && patr && duracion){
          const datos = {
              nombre,
              patrocinador: patr,
              duracion: duracion + " Días"
          }
          axios.post(`${apiHost}/api/festival`, datos)
          .then(res => {
              console.log(res)
              const datos = [
                  ...festivales,
                  res.data.festival
              ]
              console.log(datos)
            setFestivales(datos)
            ventCrear()
              console.log(res)
          }).catch(err => {
              console.log(err)
          })
        }
    }

    return (
        <div className='crearFest-cont'>
            <div>
                <i className="fas fa-times-circle" onClick={ventCrear}></i>
            </div>
            <h4>Crear</h4>
            <Form className='crear-form'>
                <Form.Group >
                    <Form.Label>Nombre del festival</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" id='nombre'/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Patrocinador</Form.Label>
                    <Form.Control type="text" placeholder="Patrocinador" id='patr'/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="number" placeholder="Duración" id='duracion'/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={crearFest}>
                    Agregar
                </Button>
            </Form>
        </div>
    )
}

export default CrearFestival
