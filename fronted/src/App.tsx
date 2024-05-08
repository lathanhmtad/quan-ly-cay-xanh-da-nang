import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./pages/Client";
import ClientHome from "./pages/client-home";
import ClientIntroduction from "./pages/client-introduction";
import ClientContact from "./pages/client-contact";
import ClientRegulation from "./pages/client-regulation";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Admin from "./pages/Admin";
import Dashboard from "./pages/dashboard";
import ManageUser from "./pages/manage-user";
import LoginPage from "./pages/login/LoginPage";
import ManageTree from "./pages/manage-tree";
import ManageKeHoach from "./pages/manage-ke-hoach";
import ManageDonThu from "./pages/manage-don-thu";
import DonThuDetails from "./components/DonThuDetails";
import ManageDiaDiem from "./pages/manage-dia-diem";

function App() {
    return <div>
        <Routes>
            <Route path='/' element={<Client/>}>
                <Route index element={<ClientHome/>}/>
                <Route path='/gioi-thieu' element={<ClientIntroduction/>}/>
                <Route path='/lien-he' element={<ClientContact/>}/>
                <Route path='/quy-dinh' element={<ClientRegulation/>}/>
            </Route>
            <Route path='/admin' element={<Admin/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='nguoi-dung' element={<ManageUser/>}/>
                <Route path='cay-xanh' element={<ManageTree/>}/>
                <Route path='ke-hoach' element={<ManageKeHoach/>}/>
                <Route path='don-thu' element={<ManageDonThu/>}/>
                <Route path='chi-tiet-don-thu/:id' element={<DonThuDetails/>}/>
                <Route path='dia-diem' element={<ManageDiaDiem/>}/>
            </Route>

            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
}

export default App;
