export function TarjetaPublicacion({ elemento }) {
    const { id, title, body } = elemento;
    return (
        <div className=' bg-slate-100 p-5'>
            <h2 className='text-xl font-semibold mb-5'>{title}</h2>
            <p>{body}</p>
            <a href={"/padre/publicacion/" + id} className="mt-5 text-blue-600 underline">Ver Publicación</a>
        </div>
    )
}