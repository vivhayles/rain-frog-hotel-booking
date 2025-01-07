import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading/index.jsx";
import Footer from "../../components/Footer/index.jsx";

function SingleRoomPage() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/rooms/' + id)
            .then((res) => {
                return res.json();
            })
            .then((d) => {
                setName(d.data.name);
                setMin(d.data.min_capacity);
                setMax(d.data.max_capacity);
                setType(d.data.type.name);
                setImage(d.data.image);
            })
    }, [id])

    return (
        <section className="bg-[#faf4ef] font-serif">
            <Heading text={name}/>
            <div className="grid md:grid-cols-2 md:grid-rows-1 gap-4">
                <p className="mx-4 my-1 md:text-lg md:col-span-1">
                    This beautiful room is a {type} room and sleeps {min} - {max} guests.
                </p>
                <img className="m-4 inline-grid md:col-span-1" src={image} alt=""/>
            </div>
            <Footer/>
        </section>
    );
}

export default SingleRoomPage;