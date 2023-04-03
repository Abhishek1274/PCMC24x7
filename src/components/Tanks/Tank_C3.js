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

const Tank_C3 = (props) => {
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

      const interval = setInterval(() => {
        requestAPI();
      }, 3000);

    }, []);

    useEffect(() => {
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 90, 735);
        console.log(canvasParent.current.clientHeight)
        //pompu line 1
        ctx.beginPath();
        ctx.moveTo(300, 110);
        ctx.lineTo(300, 700);
        ctx.lineTo(150, 700);
        ctx.lineTo(150, 700+10);
        ctx.lineTo(300+10, 700+10);
        ctx.lineTo(300+10, 100);
        ctx.lineTo(300, 110);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //pompu line 2
        ctx.beginPath();
        ctx.moveTo(350, 110);
        ctx.lineTo(350, 450);
        ctx.lineTo(600, 450);
        ctx.lineTo(600, 700);
        ctx.lineTo(950, 700);
        ctx.lineTo(950, 700-10);
        ctx.lineTo(600+10, 700-10);
        ctx.lineTo(600+10, 120+10);
        ctx.lineTo(950, 120+10);
        ctx.lineTo(950, 120);
        ctx.lineTo(600, 120);
        ctx.lineTo(600, 450-10);
        ctx.lineTo(350+10, 450-10);
        ctx.lineTo(350+10, 110);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //pompu line 2
        ctx.strokeStyle = 'rgba(214,214,214,0.8)';
        ctx.lineWidth = 7;
        ctx.strokeRect(1050, 350, 250, 170);
        ctx.beginPath();
        ctx.moveTo(1303, 415);
        ctx.lineTo(1343, 415);
        ctx.lineTo(1343, 425);
        ctx.lineTo(1303, 425);
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //water direction
        ctx.beginPath();
        ctx.moveTo(120, 700);
        ctx.lineTo(150, 700);
        ctx.lineTo(150, 700-5);
        ctx.lineTo(170, 700+5);
        ctx.lineTo(150, 700+15);
        ctx.lineTo(150, 700+10);
        ctx.lineTo(120, 700+10);
        ctx.lineTo(120, 700);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        followUp({x: 295, y: 175});
        followUp({x: 295, y: 345});
        followDown({x: 345, y: 160});
        followDown({x: 345, y: 325});
        followRight({x: 500, y: 435});
        followRight({x: 750, y: 115});
        followRight({x: 750, y: 685});
        followUp({x: 595, y: 315});
        followDown({x: 595, y: 575});

        //tank status pointer
        tankPointer({x: 205, y: 230}, {x: 300, y: 230});
        tankPointer({x: 205, y: 402}, {x: 300, y: 402});
        tankPointer({x: 670, y: 130}, {x: 670, y: 160});
        tankPointer({x: 670, y: 700}, {x: 670, y: 735});
        tankPointer({x: 380, y: 85}, {x: 380+30, y: 85});
        tankPointer({x: 360, y: 170}, {x: 360+35, y: 170});
        tankPointer({x: 360, y: 230}, {x: 360+35, y: 230});
        tankPointer({x: 1168, y: 355}, {x: 1168, y: 355+35});

    }, []);

    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "863-864-865-866-26-24-235-27-236-237-28-238-243-29-244");

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
            <img src={pressure} alt="not found" style={{ top: 90, left: 655 }} width="30" height="46" />
            <img src={valvu} alt="not found" style={{ top: 98, left: 817 }} width="41" height="35" />
            <img src={pressure} alt="not found" style={{ top: 661, left: 655 }} width="30" height="46" />
            <img src={pressure} alt="not found" style={{ top: 315, left: 1153 }} width="30" height="46" />
            <img src={valvu} alt="not found" style={{ top: 668, left: 817 }} width="41" height="35" />
            <h3 style={{ top: 55, left: 285 }}>ESR-1</h3>
            <div className="valvu-status" style={{ top: '213px', left: '4px'}}>
                <div className="valvu-status-title">C3 IN MFM-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[0] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[1] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '383px', left: '4px'}}>
                <div className="valvu-status-title">C3 IN PT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[2] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '70px', left: '412px'}}>
                <div className="valvu-status-title">C3 IN LT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[3] }.children))[2]}.value))/100).toFixed(2) }</span>
                    <span>%</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '153px', left: '395px'}}>
                <div className="valvu-status-title">Chlorine_C3_1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[4] }.children))[2]}.value).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '211px', left: '396px'}}>
                <div className="valvu-status-title">A1 OUT PT_1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[5] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '157px', left: '619px'}}>
                <div className="valvu-status-title">C3 D1 S0 MFM-1 DN300</div>
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
            <div className="valvu-status" style={{ top: '737px', left: '619px'}}>
                <div className="valvu-status-title">C3 D2 S0 MFM-1 DN300</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[9] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[10] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[11] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '388px', left: '1076px'}}>
                <div className="valvu-status-title">MFM D2 C3-1A DN300</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[12] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[13] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[14] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-name" style={{ top: "136.5px", left: "718px" }}>
                A2 D3 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: "710.5px", left: "718px" }}>
                A2 D3 S0 ASV-1 DN300
            </div>
            <button style={{top: "102.5px", left: "950px"}} onClick={handleClick}>DMA-1</button>
            <button style={{top: "674.5px", left: "950px"}} onClick={handleClick}>DMA-2</button>
        </>
    )
}

export default Tank_C3;