import Banner from '../../components/Banner/index.jsx';
import Footer from "../../components/Footer/index.jsx";
import Index from "../../components/RoomList/index.jsx";
import Heading from "../../components/Heading/index.jsx";

function RoomsPage() {
    return (
        <div className="bg-[#faf4ef] font-serif">
            <Banner />
            <Heading text='View Rooms'/>
            <Index />
            <Footer />
        </div>
    )
}

export default RoomsPage