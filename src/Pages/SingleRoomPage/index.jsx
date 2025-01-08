import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/index.jsx";
import Subheading from "../../components/Subheading/index.jsx";
import photocollage from "../../../src/images/photocollage.png";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 object-contain  ">
                <div className='md:col-span-1 md:place-items-start lg:place-items-stretch md:gap-4 lg:gap-10 md:mx-4'>
                    <h1 className="mx-4 my-1 p-2 text-2xl md:text-3xl font-serif text-[#00472d] underline underline-offset-2">{name}</h1>
                    <Subheading text='Description'/>
                    <p className='mx-4 md:text-lg'>
                        This beautiful room is a {type} room. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla elementum nunc vel risus euismod porta. Phasellus eu risus nibh. Aenean a leo quis dui
                        sodales auctor. Nam vitae lacus ex. Suspendisse hendrerit ex eu odio porta luctus. Fusce at mi
                        sed orci cursus egestas. Proin quis tortor a lectus pulvinar accumsan.
                    </p>
                    <Subheading text='Accomodates'/>
                    <p className="mx-4 md:text-lg ">
                        The {name} room sleeps {min} - {max} guests.
                    </p>
                </div>
                <img
                    className="m-4 inline-grid md:col-span-1 max-w-80 max-h-80 place-items-center lg:place-items-end lg:max-w-full lg:max-h-full " src={image} alt=""/>
                <img className='hidden lg:block' src={photocollage} alt='collage of photos of tropical islands' />
            </div>
            <Footer/>
        </section>
    );
}

export default SingleRoomPage;