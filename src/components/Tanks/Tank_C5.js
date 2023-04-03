import React from 'react';
import TankLogo from '../../assets/tank.png';
import pressure from '../../assets/pressure.png';
import pressureRotateRightLogo from '../../assets/pressureRotateRight.png';
import pressureRotateLeftLogo from '../../assets/pressureRotateLeft.png';
import valvu from '../../assets/valvu.png';
import ValvuRotateLeftLogo from '../../assets/valvuRotateLeft.png';
import { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import { exponentailHandle } from '../../js/globalFunc';

const handleClick = () => {
    window.location.href = "https://www.google.com";
  };

const Tank_C5 = (props) => {
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
        console.log((m*1).toExponential(2))
    }, [tags]);
    const getCanvas = () => {
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 90, 635);
        ctx.fillText("INLET", 700+90, 635);
        console.log(canvasParent.current.clientHeight)
        //pompu line 1  left
        ctx.beginPath();
        ctx.moveTo(300, 110);
        ctx.lineTo(300, 600);
        ctx.lineTo(150, 600);
        ctx.lineTo(150, 600+10);
        ctx.lineTo(300+10, 600+10);
        ctx.lineTo(300+10, 100);
        ctx.lineTo(300, 110);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //pompu line 2 left
        ctx.beginPath();
        ctx.moveTo(350, 110);
        ctx.lineTo(350, 700);;
        ctx.lineTo(50, 700);;
        ctx.lineTo(50, 850);;
        ctx.lineTo(60, 850);;
        ctx.lineTo(60, 710);;
        ctx.lineTo(360, 710);;
        ctx.lineTo(360, 110);;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //water direction left
        ctx.beginPath();
        ctx.moveTo(120, 600);
        ctx.lineTo(150, 600);
        ctx.lineTo(150, 600-5);
        ctx.lineTo(170, 600+5);
        ctx.lineTo(150, 600+15);
        ctx.lineTo(150, 600+10);
        ctx.lineTo(120, 600+10);
        ctx.lineTo(120, 600);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
        //DMA direction left
        ctx.beginPath();
        ctx.moveTo(50, 800);
        ctx.lineTo(60, 800);
        ctx.lineTo(60, 800+50);
        ctx.lineTo(60+5, 800+50);
        ctx.lineTo(60-5, 800+70);
        ctx.lineTo(50-5, 800+50);
        ctx.lineTo(50, 800+50);
        ctx.lineTo(50, 800);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
        //pompu line 1  right
        ctx.beginPath();
        ctx.moveTo(700+300, 110);
        ctx.lineTo(700+300, 600);
        ctx.lineTo(700+150, 600);
        ctx.lineTo(700+150, 600+10);
        ctx.lineTo(700+300+10, 600+10);
        ctx.lineTo(700+300+10, 100);
        ctx.lineTo(700+300, 110);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //pompu line 2 right
        ctx.beginPath();
        ctx.moveTo(700+350, 110);
        ctx.lineTo(700+350, 700);;
        ctx.lineTo(700+50, 700);;
        ctx.lineTo(700+50, 850);;
        ctx.lineTo(700+60, 850);;
        ctx.lineTo(700+60, 710);;
        ctx.lineTo(700+360, 710);;
        ctx.lineTo(700+360, 110);;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //water direction right
        ctx.beginPath();
        ctx.moveTo(700+120, 600);
        ctx.lineTo(700+150, 600);
        ctx.lineTo(700+150, 600-5);
        ctx.lineTo(700+170, 600+5);
        ctx.lineTo(700+150, 600+15);
        ctx.lineTo(700+150, 600+10);
        ctx.lineTo(700+120, 600+10);
        ctx.lineTo(700+120, 600);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
        //DMA direction right
        ctx.beginPath();
        ctx.moveTo(700+50, 800);
        ctx.lineTo(700+60, 800);
        ctx.lineTo(700+60, 800+50);
        ctx.lineTo(700+60+5, 800+50);
        ctx.lineTo(700+60-5, 800+70);
        ctx.lineTo(700+50-5, 800+50);
        ctx.lineTo(700+50, 800+50);
        ctx.lineTo(700+50, 800);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();

        //tank direct pointer left
        followUp({x: 295, y: 175});
        followUp({x: 295, y: 345});
        followDown({x: 345, y: 160});
        followDown({x: 345, y: 325});
        followLeft({x: 210, y: 695});

        //tank direct pointer right
        followUp({x: 700+295, y: 175});
        followUp({x: 700+295, y: 345});
        followDown({x: 700+345, y: 160});
        followDown({x: 700+345, y: 325});
        followLeft({x: 700+210, y: 695});

        //tank status pointer left
        tankPointer({x: 205, y: 230}, {x: 300, y: 230});
        tankPointer({x: 205, y: 402}, {x: 300, y: 402});
        tankPointer({x: 120, y: 700}, {x: 120, y: 740});
        tankPointer({x: 380, y: 85}, {x: 380+30, y: 85});
        tankPointer({x: 360, y: 170}, {x: 360+35, y: 170});
        tankPointer({x: 360, y: 230}, {x: 360+35, y: 230});
        //tank status pointer right
        tankPointer({x: 700+205, y: 230}, {x: 700+300, y: 230});
        tankPointer({x: 700+205, y: 402}, {x: 700+300, y: 402});
        tankPointer({x: 700+120, y: 700}, {x: 700+120, y: 740});
        tankPointer({x: 700+380, y: 85}, {x: 700+380+30, y: 85});
        tankPointer({x: 700+360, y: 170}, {x: 700+360+35, y: 170});
        tankPointer({x: 700+360, y: 230}, {x: 700+360+35, y: 230});

    };

    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "892-893-894-895-896-897-898-76-77-78-79-80-81-82-83-245-246");

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

    const tankPointer = (start, end) => {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
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
            <img src={TankLogo} alt="not found" style={{ top: 33, left: 205 }} width="200" height="250" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 210, left: 295 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 385, left: 274 }} width="41" height="30" />
            <img src={pressure} alt="not found" style={{ top: 670, left: 105 }} width="30" height="46" />
            <img src={valvu} alt="not found" style={{ top: 677, left: 270 }} width="41" height="35" />
            <img src={TankLogo} alt="not found" style={{ top: 33, left: 205+700 }} width="200" height="250" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 210, left: 295+700 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 385, left: 274+700 }} width="41" height="30" />
            <img src={pressure} alt="not found" style={{ top: 670, left: 105+700 }} width="30" height="46" />
            <img src={valvu} alt="not found" style={{ top: 677, left: 270+700 }} width="41" height="35" />
            <h3 style={{position:'absolute', top:56, left: 282}}>ESR-1</h3>
            <h3 style={{position:'absolute', top:56, left: 282+700}}>ESR-1</h3>
            {/* Left */}
            <div className="valvu-status" style={{ top: '213px', left: '4px'}}>
                <div className="valvu-status-title">C5 IN MFM-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[0] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[1] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3 Today</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '383px', left: '4px'}}>
                <div className="valvu-status-title">C5 IN PT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[2] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '70px', left: '412px'}}>
                <div className="valvu-status-title">C5 IN LT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[3] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '153px', left: '395px'}}>
                <div className="valvu-status-title">C5 D0 s0 CA-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[7] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '211px', left: '396px'}}>
                <div className="valvu-status-title">C5 D1 S0 MCMP-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[9] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '737px', left: '68px'}}>
                <div className="valvu-status-title">MFM_C5_D1_S0_MFM_1_DN_300</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[11] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[13] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[15] }.children))[2]}.value)).toFixed(2) }</span>    
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            {/* Right */}
            <div className="valvu-status" style={{ top: '213px', left: '704px'}}>
                <div className="valvu-status-title">C5 IN MFM-2</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[4] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[5] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3 Today</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '383px', left: '704px'}}>
                <div className="valvu-status-title">C5 IN PT-2</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[2] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '70px', left: '1112px'}}>
                <div className="valvu-status-title">C5 IN LT-2</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[6] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '153px', left: '1095px'}}>
                <div className="valvu-status-title">C5 D0 S0 CA-2</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[8] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '211px', left: '1096px'}}>
                <div className="valvu-status-title">C5 D1 S0 MCMP-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[10] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '737px', left: '768px'}}>
                <div className="valvu-status-title">MFM_C5_D1_S0_MFM_1_DN_300</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[12] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[14] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[16] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-name" style={{ top: "718.5px", left: "218px" }}>
                CS D1 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: "718.5px", left: "918px" }}>
                CS D1 S0 ASV-1 DN300
            </div>
            <button style={{top: "871px", left: "5px"}} onClick={handleClick}>DMA-1</button>
            <button style={{top: "871px", left: "705px"}} onClick={handleClick}>DMA-2</button>
        </>
    )
}

export default Tank_C5;