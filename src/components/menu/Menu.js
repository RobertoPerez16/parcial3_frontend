import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to='/'>inicio</Link></li>
                <li><Link to='/teatro'>Teatro</Link></li>
                <li><Link to='/pelicula'>Pelicula</Link></li>
                <li><Link to='/usuario'>Usuario</Link></li>
            </ul>
        </div>
    )
}

export default Menu