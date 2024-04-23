import axios from 'axios'
import { useEffect, useState } from 'react'

import { ListaTarjetasPublicaciones } from '../partials/ListaTarjetasPublicaciones';

export function ListaPublicaciones() {
    const ENDPOINT_API = "https://dummyjson.com/posts"
    const [publicaciones, asignarPublicaciones] = useState([]);

    useEffect(() => {
        // Cuando se renderiza el componente
        axios.get(ENDPOINT_API)
            .catch(function (error) {
                console.log(error)
            })
            .then(function (respuesta) {
                asignarPublicaciones(respuesta.data.posts);
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl mb-5'>Lista de Publicaciones</h1>
            <ListaTarjetasPublicaciones publicaciones={publicaciones} />
        </div>
    )
}