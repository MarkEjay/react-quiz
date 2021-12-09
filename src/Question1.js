import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'



const Question1 = () => {
    const [rooms, setRooms] = useState([
        {
            room_type: "Queen",
            vacant_rooms: 5,
            price: 100
        },
        {
            room_type: "Double",
            vacant_rooms: 3,
            price: 75
        },
        {
            room_type: "Twin",
            vacant_rooms: 8,
            price: 60
        }
    ])

    return (

        <div>
            {rooms.map(item => (
                <ol><li>{item.room_type}</li><li>{item.vacant_rooms}</li><li>{item.price}</li></ol>
            ))}
        </div>


    )
}

export default Question1;