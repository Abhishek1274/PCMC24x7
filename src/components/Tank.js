import React from 'react';
import Logo from '../assets/login.png';
import '../style/tanks.css';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tank_A1 from './Tanks/Tank_A1';
import Tank_A2 from './Tanks/Tank_A2';
import Tank_A2_ERS2 from './Tanks/Tank_A2_ERS2';
import Tank_A2_ERS3 from './Tanks/Tank_A2_ERS3';
import Tank_B1 from './Tanks/Tank_B1';
import Tank_B1G from './Tanks/Tank_B1G';
import Tank_C12 from './Tanks/Tank_C12';
import Tank_C2 from './Tanks/Tank_C2';
import Tank_C3 from './Tanks/Tank_C3';
import Tank_C5 from './Tanks/Tank_C5';
import Tank_C10 from './Tanks/Tank_C10';
import Tank_C11 from './Tanks/Tank_C11';
import Tank_C13 from './Tanks/Tank_C13';
import Tank_C14 from './Tanks/Tank_C14';
import Tank_D9 from './Tanks/Tank_D9';
import Tank_D10 from './Tanks/Tank_D10';
import Tank_D11 from './Tanks/Tank_D11';
import Tank_D13 from './Tanks/Tank_D13';
import Tank_B5 from './Tanks/Tank_B5';
import Tank_B9 from './Tanks/Tank_B9';

const Tank = (props) => {
    const {isLoggedIn, setisLoggedIn} = props.auth
    const areas = ["A1", 'A2', 'A2_E2', 'A2_E3', 'B1', 'B1G', "B5", 'B9', 'C2', 'C3', 'C5', 'C10', 'C11', 'C12', 'C13', 'C14', 'D9', 'D10', 'D11', 'D13'];
    const canvas = useRef();
    const canvasParent = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    // Current Date & Time
    let getCurrentDay=()=>{
        var a=new Array(7);
        a[0]="Sunday";
        a[1]="Monday";
        a[2]="Tuesday";
        a[3]="Wednesday";
        a[4]="Thursday";
        a[5]="Friday";
        a[6]="Saturday";
        var months=[
            "January","February","March","April","May","June","July","August","September","October","November","December"
        ];
        
        var day=new Date();
        let day1=a[day.getDay()];
        var month=months[day.getMonth()];
        var date=day.getDate();
        return `${day1}, ${month} ${date}`;
    };
    let getCurrentTime=()=>{
        
        var time=new Date();
        
        var year=time.getFullYear();
    
        var hours=time.getHours();
        var minute=time.getMinutes();
    
        let periods='AM';
        if(hours>11){
            periods="PM";
            if(hours>12)
                hours-=12;
        }
        if(minute<10)
            minute="0"+minute;
        return `${year} ${hours}:${minute} ${periods}`;
    };
console.log(isLoggedIn, 'isloggedin');
if(isLoggedIn) {
    return (
        <div className="container-fluid tank" style={{ paddingLeft: "1px", paddingRight: "1px", overflow: "hidden" }}>
            <header style={{ backgroundColor: "#e0e0e0"}}>
                <div className="container-fluid" style={{ paddingLeft: "1px", paddingRight: "1px" }}>
                    <div className="row">
                        <div className="col-md-10 d-flex">
                            <img src={Logo} width="100" height="75" alt="Not found img" />
                            <div className="container-fluid">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <h3><i>{id} ZONE ESR AND DMA</i></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                <div className='time border-left'>{getCurrentDay()} <br/>{getCurrentTime()}</div>
                                <div className="username border-left">User: DESKTOP-TEDB6</div>
                                <div className='logout'>
                                    <button className="btn-login"><AiOutlineLogin /> Login</button>
                                    <button onClick={() => {
                                        setisLoggedIn(false)
                                        localStorage.setItem("isLoggedIn", JSON.stringify(false))
                                        alert('You are Successfully Logged Out!!');
                                        navigate('/');
                                    }}  className="btn-logout"><AiOutlineLogout /> Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="areas-list d-flex">
                <Link to="/mapview" className="btn-menu">MENU</Link>
                <button className="btn-menu">ANALYTICS</button>
                {
                    areas.map((item, index) => {
                        return (
                            <Link to={`/tank_${item}`} className={`btn-area ${id === item ? 'active' : ''}`} key={index}>Zone<span>{ item + "ESR"}</span></Link>
                        )
                    })
                }
                <button className="btn-menu">DMA</button>
            </div>
            <div className="tank-status" ref={canvasParent}>
                <canvas ref={canvas} ></canvas>
                {
                    id === 'A1' ? <Tank_A1 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'A2' ? <Tank_A2 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'A2_E2' ? <Tank_A2_ERS2 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'A2_E3' ? <Tank_A2_ERS3 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'B1' ? <Tank_B1 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'B1G' ? <Tank_B1G canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'B5' ? <Tank_B5 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'B9' ? <Tank_B9 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'C2' ? <Tank_C2 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'C3' ? <Tank_C3 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'C5' ? <Tank_C5 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'C10' ? <Tank_C10 canvas={canvas} canvasParent={canvasParent} /> :
                    id === 'C11' ? <Tank_C11 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "C12" ? <Tank_C12 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "C13" ? <Tank_C13 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "C14" ? <Tank_C14 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "D9" ? <Tank_D9 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "D10" ? <Tank_D10 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "D11" ? <Tank_D11 canvas={canvas} canvasParent={canvasParent} /> :
                    id === "D13" ? <Tank_D13 canvas={canvas} canvasParent={canvasParent} /> :
                    null
                }
            </div>
        </div>
    )
}
    
//     return (<div className='btn-container'>
//     <button className='login-btn' onClick={() => {
//         navigate('/')
//     }}>Logine</button>
// </div>)
}

export default Tank;