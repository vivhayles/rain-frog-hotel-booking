import {useState} from 'react'
import {useEffect} from "react";
import RoomListItem from "../RoomListItem/index.jsx";
function RoomList() {
   let url ='http://localhost:8000/api/rooms'
    const [data, setData] = useState([])

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d.data))
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <section className="RoomList grid grid-cols-1 md:grid-cols-3 gap-2">
            {data.map((room) =>
                <RoomListItem key={room.id}
                              id={room.id}
                              name={room.name}
                              min={room.min_capacity}
                              max={room.max_capacity}
                              type={room.type.name}
                              image={room.image}
                />
            )}
        </section>
    )
}

export default RoomList;