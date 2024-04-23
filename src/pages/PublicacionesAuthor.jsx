import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ListaTarjetasPublicaciones } from "../partials/ListaTarjetasPublicaciones";


/* 
    https://dummyjson.com/posts/user/1

*/
export function PublicacionesAuthor() {
    const { id } = useParams();
    const [autor, setAutor] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users/" + id)
            .then((respuesta) => {
                setAutor(respuesta.data);
            })
            .catch((error) => console.log(error))
            
        axios.get("https://dummyjson.com/posts/user/" + id)
            .then((respuesta)=>{
                const data = respuesta.data.posts;
                setPublicaciones(data);
            })
    }, []);


    return <>
        {autor === null ? <></> : (
            <div>
                <div className="flex gap-5 mb-5">
                    <figure className="w-28 h-28 bg-slate-200 overflow-hidden rounded-full">
                        <img src={autor.image} alt={autor.firstName + " " + autor.lastName} className="w-full h-auto" />
                    </figure>
                    <div className="">
                        <h1 className="text-3xl text-sky-500 mb-1.5">{autor.firstName} {autor.lastName}</h1>
                        <a className="flex items-center text-sky-500" href={"mailto:" + autor.email}>
                            <span className="material-symbols-outlined mr-2">
                            mail
                        </span>{autor.email}</a>
                    </div>
                </div>
                <ListaTarjetasPublicaciones publicaciones={publicaciones} />
            </div>
        )}
    </>
}