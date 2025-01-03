import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer/index.jsx";
import RoomList from "./Components/RoomList/RoomList.jsx";

export default function App() {
    return (
        <div className="bg-[#faf4ef] font-serif">
            <Navbar />
            <Banner />
            <RoomList />
            <Footer />
        </div>
    )
}