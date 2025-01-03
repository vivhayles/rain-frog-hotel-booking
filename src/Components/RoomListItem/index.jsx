function RoomListItem({id, name, min, max, type, image}) {
    return (
        <section className="RoomListItem">
            <h3>Room name: {name}</h3>
            <p>Room type: {type}</p>
            <p>Sleeps between {min}-{max} guests</p>
            <img alt='placeholder image' src={image} />
        </section>
    )
}
export default RoomListItem