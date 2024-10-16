import { Route, Routes } from "react-router-dom"
// importar paginas 
import Landing from "./screens/landing"
import About from "./screens/About"
import EcoCampus from "./screens/EcoCampus"
import Playlist from "./screens/Playlist"
import Test from "./screens/Test"
import Results from "./screens/Results"
import Form from "./screens/Form"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/ecocampus" element={<EcoCampus />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/form" element={<Form />} />
            

        </Routes>
    )

}
export default AppRoutes