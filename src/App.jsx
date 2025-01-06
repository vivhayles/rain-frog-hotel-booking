import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";
import RoomsPage from './Pages/RoomsPage';
import SingleRoomPage from './Pages/SingleRoomPage'; // Add this import if not already present
import BookingsPage from './Pages/BookingsPage';
import ReportPage from './Pages/ReportPage';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<RoomsPage />} />
                <Route path="/room/:id" element={<SingleRoomPage />} />
                <Route path='/bookings' element={<BookingsPage />} />
                <Route path= '/report' element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
