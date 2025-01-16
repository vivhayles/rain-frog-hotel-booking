import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/index.jsx";
import Subheading from "../../components/Subheading/index.jsx";
import LinkButton from "../../components/LinkButton/index.jsx";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:items-start lg:px-10">
                <div className="md:col-span-1">
                    <h1 className="mx-2 my-1 p-2 text-2xl md:text-3xl font-serif text-[#00472d] underline underline-offset-2">
                        {name}
                    </h1>
                    <Subheading text="Description"/>
                    <p className="mx-4 md:text-lg">
                        This beautiful room is a {type} room. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla elementum nunc vel risus euismod porta. Phasellus eu risus nibh. Aenean a leo quis dui
                        sodales auctor. Nam vitae lacus ex. Suspendisse hendrerit ex eu odio porta luctus. Fusce at mi
                        sed orci cursus egestas. Proin quis tortor a lectus pulvinar accumsan.
                    </p>
                    <Subheading text="Accommodates"/>
                    <p className="mx-4 md:text-lg">
                        The {name} room sleeps {min} - {max} guests.
                    </p>
                </div>

                <div className="md:col-span-1 flex flex-col gap-4 items-center lg:items-end">
                    <img
                        className="m-4 max-w-full max-h-full object-contain"
                        src={image}
                        alt="Room image"
                    />
                    <LinkButton to={"/book/" + id} text="Book Room"/>
                </div>
            </div>
            <Footer/>
        </section>

    );
}

export default SingleRoomPage;