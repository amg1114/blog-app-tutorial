import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

/* 
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": 2
        autor: {}
    }
*/

export function VistaPublicacion() {
    const { id } = useParams();
    const [publicacion, setPublicacion] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/posts/" + id)
            .then((respuesta) => {
                const publicacion = respuesta.data;

                axios.get("https://dummyjson.com/user/" + publicacion.userId)
                    .then((respuesta) => {
                        const autor = respuesta.data;

                        publicacion.autor = autor;
                        console.log("Antes de asignar", publicacion);
                        setPublicacion(publicacion);
                    })
            })
            .catch((error) => {
                console.log(error)
            });

    }, [])


    return <>

        {publicacion === null ? <></> : (
            <div>
                <h1 className="text-sky-500 text-3xl ">{publicacion.title}</h1>
                <a href={"/padre/autor/" + publicacion.userId} className="text-blue-500 underline">Publicacion por: {publicacion.autor.firstName + " " + publicacion.autor.lastName}</a>
                <span className="block text-red-400 mb-5">Likes: {publicacion.reactions}</span>
                <p>{publicacion.body}</p>
                <h3 className="text-xl text-sky-500 my-5">Tags:</h3>
                <ul className="list-disc pl-5">
                    {
                        publicacion.tags.map((elemento, index) => {
                            return <li key={'tag-' + index} className="uppercase">{elemento}</li>
                        })
                    }
                </ul>
            </div>
        )}
    </>
}