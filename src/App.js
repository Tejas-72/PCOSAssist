import logo from "./logo.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";
import Awareness from "./Awareness/Awareness";
import PreventiveMeasures from "./pages/Preventive";
import Footer from "./components/Footer";
import Diagnosis from "./pages/Diagnosis";
import Prevent from "./pages/Prevent";
import Yoga from "./pages/Yoga";
import Food from "./pages/Food";



function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
    return (
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
            
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />                     
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/preventive" element={<Prevent/>}/>                    
                    <Route path="/awareness" element={<Awareness/>}/>
                    <Route path="/diagnosis" element={<Diagnosis/>}/>
                    <Route path="/prevn" element={<PreventiveMeasures/>}/>
                    <Route path="/yoga" element={<Yoga/>}/>
                    <Route path="/food" element={<Food/>}/>
                </Routes>
             
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
