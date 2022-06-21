import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
const socket = io.connect("http://localhost:3001");

function MessageScreen() {

    const room = "4";


    // const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };


    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);

        });
        joinRoom();

    }, [socket]);






    return (
        <div className="App">
            {/* <input
                placeholder="Room Number"
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
            /> */}
            {/* <button onClick={joinRoom}> Join Room</button> */}
            {/* <input
                placeholder="Message..."
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            /> */}

            <nav>
                <ul>
                    <li>
                        <Link to="/" target="_blank" >Buttons</Link>
                    </li>

                </ul>
            </nav>

            <h1> Message:</h1>
            {messageReceived}
        </div>
    );
}

export default MessageScreen;