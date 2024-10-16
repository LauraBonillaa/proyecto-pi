import { Link } from "react-router-dom"
export default function Test() {
    return (
        <>
            <h1>Test</h1>
            <h1>Conoce tu nivel de estrés</h1>
            <p>Tómate unos minutos para descubrir cómo el estrés está afectando tu bienestar. Completa este sencillo test y recibe sugerencias personalizadas para mejorar tu bienestar.</p>
            <input>ingresa tu correo electrónico</input>
            <Link to="/form">
                <button>Continuar</button>
            </Link>
        </>
    )
}