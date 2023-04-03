import React, { useEffect, useState } from 'react';
import TankLogo from '../../assets/tank.png';
import pressureRotateRightLogo from '../../assets/pressureRotateRight.png';
import pressureRotateLeftLogo from '../../assets/pressureRotateLeft.png';
import pressure from '../../assets/pressure.png';
import Valvu from '../../assets/valvu.png';
import ValvuRotateRightLogo from '../../assets/valvuRotateRight.png';
import XMLParser from 'react-xml-parser';
import { exponentailHandle } from '../../js/globalFunc';
const handleClick = () => {
    window.location.href = "https://www.google.com";
  };

const Tank_1 = (props) => {
    const { canvas, canvasParent } = props;
    const [ height, setHeight ] = useState();
    let ctx = null;
    const [tags, setTags] = useState([]);

    useEffect(() => {
      const canvasEle = canvas.current;
      canvasEle.width = canvasParent.current.clientWidth;
      canvasEle.height = canvasParent.current.clientHeight;
      setHeight(canvasParent.current.clientHeight);
     
      ctx = canvasEle.getContext("2d");
      getCanvas();

      const interval = setInterval(() => {
        requestAPI();
      }, 3000);

    }, []);

    useEffect(() => {
        setTags(tags);
        const a = Object.assign({}, { ...tags[0] }.children);
        var m = {...(Object.assign({}, { ...tags[0] }.children))[2]}.value;
        console.log((m*1).toExponential(3))
    }, [tags]);

    const getCanvas = () => {
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 120, canvasParent.current.clientHeight / 2 + 30);
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 720, canvasParent.current.clientHeight / 2 + 30);
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 1220, canvasParent.current.clientHeight / 2 + 30);
        //pompu line 
            // ESR-1
        ctx.beginPath();
        ctx.moveTo(300, 100);
        ctx.lineTo(300, canvasParent.current.clientHeight / 2);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(310, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(310, 100);
        ctx.lineTo(300, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(350, 100);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2 + 100);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2 + 100);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(100, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(100, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(110, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(110, canvasParent.current.clientHeight / 2 + 160);
        ctx.lineTo(450, canvasParent.current.clientHeight / 2 + 160);
        ctx.lineTo(450, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(460, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(460, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(160, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(160, canvasParent.current.clientHeight / 2 + 110);
        ctx.lineTo(160, canvasParent.current.clientHeight / 2 + 110);
        ctx.lineTo(360, canvasParent.current.clientHeight / 2 + 110);
        ctx.lineTo(360, 100);
        ctx.lineTo(350, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        // ESR-2
        ctx.beginPath();
        ctx.moveTo(900, 100);
        ctx.lineTo(900, canvasParent.current.clientHeight / 2);
        ctx.lineTo(750, canvasParent.current.clientHeight / 2);
        ctx.lineTo(750, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(910, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(910, 100);
        ctx.lineTo(900, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(950, 100);
        ctx.lineTo(950, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1050, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1050, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1060, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1060, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1360, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1360, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1370, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1370, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1670, canvasParent.current.clientHeight / 2 + 150);
        ctx.lineTo(1670, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1680, canvasParent.current.clientHeight / 2 + 400);
        ctx.lineTo(1680, canvasParent.current.clientHeight / 2 + 140);
        ctx.lineTo(1480, canvasParent.current.clientHeight / 2 + 140);
        ctx.lineTo(1480, 100);
        ctx.lineTo(1470, 100);
        ctx.lineTo(1470, canvasParent.current.clientHeight / 2 + 140);
        ctx.lineTo(960, canvasParent.current.clientHeight / 2 + 140);
        ctx.lineTo(960, 100);
        ctx.lineTo(950, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //ESR-3
        ctx.beginPath();
        ctx.moveTo(1420, 100);
        ctx.lineTo(1420, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1270, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1270, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1430, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1430, 100);
        ctx.lineTo(1420, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //water direction
        ctx.beginPath();
        ctx.moveTo(150, canvasParent.current.clientHeight / 2);
        ctx.lineTo(180, canvasParent.current.clientHeight / 2);
        ctx.lineTo(180, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(200, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(180, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(180, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(150, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(750, canvasParent.current.clientHeight / 2);
        ctx.lineTo(780, canvasParent.current.clientHeight / 2);
        ctx.lineTo(780, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(800, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(780, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(780, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(750, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(750, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1250, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1280, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1280, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(1300, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(1280, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(1280, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1250, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1250, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        output({x: 101.5, y: canvasParent.current.clientHeight / 2 + 350});
        output({x: 451.5, y: canvasParent.current.clientHeight / 2 + 350});
        output({x: 1051.5, y: canvasParent.current.clientHeight / 2 + 350});
        output({x: 1361.5, y: canvasParent.current.clientHeight / 2 + 350});
        output({x: 1671.5, y: canvasParent.current.clientHeight / 2 + 350});
        followRight({x: 200, y: canvasParent.current.clientHeight / 2 + 145});
        followRight({x: 1500, y: canvasParent.current.clientHeight / 2 + 135});
        followRight({x: 1200, y: canvasParent.current.clientHeight / 2 + 135});
        followLeft({x: 1450, y: canvasParent.current.clientHeight / 2 + 135});
        followLeft({x: 135, y: canvasParent.current.clientHeight / 2 + 145});
        followLeft({x: 200, y: canvasParent.current.clientHeight / 2 + 95});
        followUp({x: 295, y: 430});
        followUp({x: 295, y: 230});
        followUp({x: 895, y: 430});
        followUp({x: 895, y: 230});
        followUp({x: 1415, y: 230});
        followUp({x: 1415, y: 430});
        followUp({x: 1465, y: 230});
        followDown({x: 345, y: 410});
        followDown({x: 345, y: 210});
        followDown({x: 945, y: 210});
        followDown({x: 945, y: 410});
        followDown({x: 1465, y: 410});
        followDown({x: 1665, y: canvasParent.current.clientHeight / 2 + 250});

        //tank status pointer
        ctx.beginPath();
        ctx.moveTo(300, 275);
        ctx.lineTo(180, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(274, 375);
        ctx.lineTo(180, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(360, 230);
        ctx.lineTo(430, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(360, 275);
        ctx.lineTo(430, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(360, 570);
        ctx.lineTo(430, 570);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250, 600);
        ctx.lineTo(250, 700);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(900, 270);
        ctx.lineTo(750, 270);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(900, 375);
        ctx.lineTo(750, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(960, 220);
        ctx.lineTo(1000, 220);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(960, 420);
        ctx.lineTo(1000, 420);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(950, 560);
        ctx.lineTo(850, 560);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(1050, 760);
        ctx.lineTo(950, 760);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1250, 760);
        ctx.lineTo(1360, 760);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1300, 280);
        ctx.lineTo(1430, 280);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1380, 375);
        ctx.lineTo(1430, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1480, 230);
        ctx.lineTo(1600, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1480, 280);
        ctx.lineTo(1600, 280);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(1480, 560);
        ctx.lineTo(1600, 560);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
    };

    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "21-175-172-18-3-15-59-65-184-170-176-173-16-60-66-185-179-171-177-4-174-61-67-186-180-5-17");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("http://45.250.251.149:8090/PCMCWebService/Service.asmx/getTagByTagID", requestOptions)
        .then(response => response.text())
        .then(result => {
            const xml = new XMLParser().parseFromString(result);
            setTags(xml.children);
            console.log(xml.children);
        })
        .catch(error => console.log('error', error));
    }

    const output = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 40);
        ctx.lineTo(position.x - 7, position.y + 40);
        ctx.lineTo(position.x + 4, position.y + 50);
        ctx.lineTo(position.x + 14, position.y + 40);
        ctx.lineTo(position.x + 7, position.y + 40);
        ctx.lineTo(position.x + 7, position.y);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
    }

    const followRight = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 20);
        ctx.lineTo(position.x + 20, position.y + 10);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followLeft = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 20);
        ctx.lineTo(position.x - 20, position.y + 10);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followUp = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x + 20, position.y);
        ctx.lineTo(position.x + 10, position.y - 20);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followDown = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x + 20, position.y);
        ctx.lineTo(position.x + 10, position.y + 20);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }
    return(
        <>
            <img src={TankLogo} alt="not found" style={{ top: 85, left: 206 }} width="200" height="250" />
            <img src={TankLogo} alt="not found" style={{ top: 85, left: 806 }} width="200" height="250" />
            <img src={TankLogo} alt="not found" style={{ top: 85, left: 1328 }} width="200" height="250" />
            <img src={pressure} alt="not found" style={{ top: 558, left: 230 }} width="41" height="41" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 295 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 750, left: 1045 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 750, left: 1355 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 895 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 875 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 274 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 1395 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 1415 }} width="41" height="30" />
            <img src={Valvu} alt="not found" style={{top: 558, left: 300}} width="41" height="41" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 650, left: 1045 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 650, left: 1355 }} width="41" height="30" />
            <h3 style={{ top: 105, left: 285 }}>ESR-1</h3>
            <h3 style={{ top: 105, left: 885 }}>ESR-2</h3>
            <h3 style={{ top: 105, left: 1405 }}>ESR-3</h3>
            <div className="valvu-status" style={{ top: '210px', left: '403px'}}>
                <div className="valvu-status-title">
                    A1 IN LT-1
                </div>
                <div className="valvu-status-value">
                 <span>{ parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[3] }.children))[2]}.value))/100).toFixed(2) }</span> 
                  { /* <span>{...(Object.assign({}, { ...tags[3] }.children))[2]}.value) }</span> */}
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '403px'}}>
                <div className="valvu-status-title">A1 D1 S0 CA-1</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[4] }.children))[2]}.value).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '550px', left: '433px'}}>
                <div className="valvu-status-title">A1 D0 S0 MCMP-1</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[5] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '0px'}}>
                <div className="valvu-status-title">A1 IN MFM-1</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[0] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[1] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3 Today</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '0px'}}>
                <div className="valvu-status-title">A1 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[2] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '200px'}}>
                <div className="valvu-status-title">A1_1_D0_MFM_1_DN500</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[6] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[7] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[8] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '600px'}}>
                <div className="valvu-status-title">A1 IN PT-2</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[11] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '600px'}}>
                <div className="valvu-status-title">A1 IN MFM-2</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[9] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[10] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3 Today</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '550px', left: '700px'}}>
                <div className="valvu-status-title">A1 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>0.00</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '1000px'}}>
                <div className="valvu-status-title">A1 IN LT-2</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[16] }.children))[2]}.value))/100).toFixed(2) }</span>
                    <span>m3r</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '400px', left: '1000px'}}>
                <div className="valvu-status-title">A1 D0 S0 CA-2</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[19] }.children))[2]}.value).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '1150px'}}>
                <div className="valvu-status-title">A1 IN MFM-3</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[17] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[18] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr Today</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '1200px'}}>
                <div className="valvu-status-title">A1 IN PT-3</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[20] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '550px', left: '700px'}}>
                <div className="valvu-status-title">A1 D0 S0 MCMP-2</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[12] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '1550px'}}>
                <div className="valvu-status-title">A1 IN LT-3</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[24] }.children))[2]}.value))/100).toFixed(2) }</span>
                    <span>mhr</span>
                </div>
            </div>

            <div className="valvu-status" style={{ top: '260px', left: '1550px'}}>
                <div className="valvu-status-title">A1 D0 S0 CA-3</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[25] }.children))[2]}.value).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>

            <div className="valvu-status" style={{ top: '550px', left: '1550px'}}>
                <div className="valvu-status-title">A1 D0 S0 MCMP-3</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[26] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>

            <div className="valvu-status" style={{ top: '750px', left: '800px'}}>
                <div className="valvu-status-title">A1_2_D0_S0_MFM_1DN600</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[13] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[14] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[15] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.dev</span>
                </div>
            </div>

            <div className="valvu-status" style={{ top: '750px', left: '1100px'}}>
                <div className="valvu-status-title">A1_2_D0-S0_MFM_2_DN100</div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[21] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[22] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ parseFloat({...(Object.assign({}, { ...tags[23] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>PRev.dev</span>
                </div>
            </div>

            <div className="valvu-name" style={{ top: height / 2 + 120 + "px", left: "200px" }}>
                A1 D3 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 220 + "px", left: "950px" }}>
                A1 D3 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 220 + "px", left: "1250px" }}>
                A1 D3 S0 ASV-1 DN300
            </div>
            <button style={{top: height / 2 + 400 + "px", left: "25px"}} onClick={handleClick}>DMA-1</button>
            
            {/* <button style="top: {{height / 2 + 400}}px; left: 25px;" onclick="window.location.href='https://www.google.com/'">DMA-1</button> */}

            <button style={{top: height / 2 + 400 + "px", left: "375px"}} onClick={handleClick}>DMA-2</button>
            <button style={{top: height / 2 + 400 + "px", left: "975px"}} onClick={handleClick}>DMA-3</button>
            <button style={{top: height / 2 + 400 + "px", left: "1290px"}} onClick={handleClick}>DMA-4</button>
            <button style={{top: height / 2 + 400 + "px", left: "1600px"}} onClick={handleClick}>DMA-5</button>
        </>
    )
}

export default Tank_1;