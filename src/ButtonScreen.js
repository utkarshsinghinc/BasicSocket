import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
const socket = io.connect("http://localhost:3001");

function ButtonScreen() {

    const room = "4";


    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });
        joinRoom()

    }, [socket]);


    const onClick1 = () => {
        setMessage("Button 1 is clicked");

    }

    const onClick2 = () => {
        setMessage("Button 2 is clicked");

    }

    const onClick3 = () => {
        setMessage("Button 3 is clicked");

    }

    const onClick4 = () => {
        setMessage("Button 4 is clicked");

    }



    return (
        <div className="App">
            {/* <input
                placeholder="Room Number..."
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

            <button onClick={() => { onClick1(); sendMessage(); }}> Button1</button>
            <button onClick={() => { onClick2(); sendMessage(); }}> Button2</button>
            <button onClick={() => { onClick3(); sendMessage(); }}> Button3</button>
            <button onClick={() => { onClick4(); sendMessage(); }}> Button4</button>

            {/* <h1> Message:</h1>
            {messageReceived} */}

            <nav>
                <ul>
                    <li>
                        <Link to="/MessageScreen" target="_blank">Message</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default ButtonScreen;