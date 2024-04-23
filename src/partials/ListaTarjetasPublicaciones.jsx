import { TarjetaPublicacion } from '../components/TarjetaPublicacion';

export function ListaTarjetasPublicaciones({ publicaciones }) {
   return <div className='grid grid-cols-2 gap-5'>
        {
            publicaciones.map(function (elemento) {
                return (
                    <TarjetaPublicacion elemento={elemento} />
                )
            })
        }
    </div>
}