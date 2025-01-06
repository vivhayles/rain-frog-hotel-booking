import {Link} from 'react-router-dom'
function RoomListItem({id, name, min, max, type, image}) {
    return (
        <section key={id} className="RoomListItem border-4 border-[#00472d] p-2 m-2">
            <Link to='/room/:id' className='text-lg underline underline-offset-2 pb-1'>{name}</Link>
            <div className='relative'>
                <img className='pt-1 w-full' alt='placeholder image' src={image}/>
                <span className='pt-1 pl-1 text-lg w-full absolute inline-block top-0 left-0 bg-[#c5c58d]'>{type}</span>
            </div>
                <p className='text-lg pt-1'>Sleeps: {min}-{max} guests</p>

        </section>
)
}
export default RoomListItem