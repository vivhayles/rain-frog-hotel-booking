import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";
import RoomsPage from './Pages/RoomsPage'
function App () {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path = "/" element={<RoomsPage />} />
                {/*<Route path = '/room/id' element={*/}
            </Routes>
        </BrowserRouter>
    )
}
export default App;