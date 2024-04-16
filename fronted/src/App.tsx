import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./pages/Client";
import ClientHome from "./pages/ClientHome";
import ClientIntroduction from "./pages/ClientIntroduction";
import ClientContact from "./pages/ClientContact";
import ClientRegulation from "./pages/ClientRegulation";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {
    return <div>
        <Routes>
            <Route path='/' element={<Client/>}>
                <Route index element={<ClientHome/>}/>
                <Route path='/gioi-thieu' element={<ClientIntroduction/>}/>
                <Route path='/lien-he' element={<ClientContact/>}/>
                <Route path='/quy-dinh' element={<ClientRegulation/>}/>
            </Route>
        </Routes>
    </div>
}

export default App;
