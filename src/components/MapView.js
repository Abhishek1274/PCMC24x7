import React from 'react';
import Logo from '../assets/login.png';
import '../style/mapview.css';
import Map from './Map';
import { Link, useNavigate } from "react-router-dom";

const MapView = (props) => {
    const {isLoggedIn, setisLoggedIn} = props.auth
    const areas = ['A1', 'A2','A2_ERS2','A2_ERS3', 'B1', 'B1G', 'B5', 'B9', 'C2', 'C3', 'C5', 'C10', 'C11', 'C12', 'C13', 'C14', 'D9', 'D10', 'D11', 'D13'];
    const zones = [
        'A1 Pradhikaran ESR',
        'A2 Yamunanagar ESR-1',
        'A2 yamunanagar ESR-2',
        'A2 Yamunanagar ESR-3',
        'B2 Bijli Nagar',
        'B5 Chinchwad Gao',
        'B9 Premlok Park',
        'B1G Gurudwara',
        'C2 Boradewadi',
        'C3 WD4',
        'C5 Sector 7 & 10 ESR-1',
        'C5 Sector 7 & 10 ESR-2',
        'C13 Annasaheb Magar Stadium',
        'C14 Ajmera',
        'C10 Bhosari Gaothan',
        'C11 Sant Tukaram Nagar',
        'C12 Dighi ESR-1',
        'C12 Dighi ESR-2',
        'D9 New Sangavi',
        'D10 Old Sangavi',
        'D11 Sangavi Gaothan',
        'D13 Dutta Nagar',
    ];
    const navigate = useNavigate();
    console.log(isLoggedIn, 'isLoggedIn')
    {
        if (isLoggedIn)
            return (
                <div className="container-fluid" style={{ paddingLeft: "1px", paddingRight: "1px", overflow: "hidden" }}>
                    <header>
                        <div className="container-fluid" style={{ paddingLeft: "1px", paddingRight: "1px" }}>
                            <div className="row">
                                <div className="col-md-11 d-flex">
                                    <img src={Logo} width="100" height="75" alt="Not found img" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-4 d-flex align-items-center">
                                                <div className="header-up">
                                                    <button>TRENDS</button>
                                                    <button>HALMA</button>
                                                    <button>FLOW TOTAL</button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <h3>पिंपरी चिंचवड महानगर पालिका</h3>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5>IMPLEMENTATION OF CONTINUOUS (24*7) PRESSURIZED WATER SUPPLY IN 40% AREA OF PIMPRI CHINCHWAD</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 d-flex justify-content-end">
                                    <button onClick={() => {
                                        setisLoggedIn(false)
                                        localStorage.setItem("isLoggedIn", JSON.stringify(false))
                                        alert('You are Successfully Logged Out!!');
                                        navigate('/');
                                        
                                    }} className='btn-shutdown'>SHUTDOWN</button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="areas-list d-flex">
                        <button className="btn-menu">ANALYTICS</button>
                        {
                            areas.map((item, index) => {
                                return (
                                    <Link to={`/tank_${item}`} className="btn-area" key={index}><span>{item}</span></Link>
                                )
                            })
                        }
                        <button className="btn-menu">DMA</button>
                        <button className="btn-menu" style={{ fontSize: '12px' }}>Thergaon<br />1000mm</button>
                    </div>
                    <main>
                        <div className="container-fluid d-flex" style={{ paddingLeft: "1px", paddingRight: "1px" }}>
                            <div className="" style={{ width: "80%" }}>
                                <Map path="mapview" />
                            </div>
                            <div className="mt-4" style={{ width: "20%" }}>
                                <table style={{ width: "100%", height: "100%" }}>
                                    <thead>
                                        <tr><th className='text-center'>NO.</th><th className='text-center'>ZONE</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            zones.map((item, index) => {
                                                return (
                                                    <tr key={index}><th className='text-center'>{index + 1}</th><th>{item}</th></tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            )
    }
//     return (<div className='btn-container'>
//         <button className='login-btn' onClick={() => {
//             navigate('/')
//         }}>Login</button>
//     </div>)
}
export default MapView;