import GifGridItem from './GifGridItem';
import UseFetchGifs from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {

    const { data, loading } = UseFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounceIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
                { data.map(img => <GifGridItem key={img.id} {...img} /> ) }
            </div>
        </>
    )
}