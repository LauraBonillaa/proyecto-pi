import "./landing.css"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <>
            <h1>Eco campus</h1>

            <h1>Desconéctate para reconectar</h1>
            <p>Tómate un descanso y encuentra tu centro. Con esta meditación guiada, calma tu mente y recárgate de energías.</p>
            <iframe className="player" src="https://open.spotify.com/embed/episode/1SD1ODpk2e90k2xlpICBvp?utm_source=generator&t=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="container1">
            <h1 className="title">¿Sientes el peso del estrés?</h1>
            <p>Muchas veces pasamos por desapercibido este. Haz una pausa, evalúa tu estado actual y da el primer paso hacia tu bienestar.</p>
            <Link to="/test">

                <button>Haz el test</button>
            </Link>
            </div>
            <h1>Explora y conoce tu espacio</h1>
            <p>Descubre actividades diseñadas para ayudarte a desconectar, relajarte y encontrar tu balance. Elige lo que más te inspire. </p>
            <h1>Actividades bienestar</h1>
            <p>Encuentra herramientas y actividades que te ayudarán a cuidar de tu salud física y mental.</p>
            

                <button>Conocer más</button>
            
            <h1>Playlist recomendada</h1>
            <p>Encuentra el acompañamiento perfecto para tu bienestar. Elige lo que mejor se adapte a tu estado de ánimo.</p>
          

                <button>Conocer más</button>
            
        </>
    )
}