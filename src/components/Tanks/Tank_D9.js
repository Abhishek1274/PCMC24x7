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

const Tank_D9 = (props) => {
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
        ctx.fillText("INLET", 90, 535);
        console.log(canvasParent.current.clientHeight)
        //pompu line 1
        ctx.beginPath();
        ctx.moveTo(300, 110);
        ctx.lineTo(300, 500);
        ctx.lineTo(150, 500);
        ctx.lineTo(150, 500+10);
        ctx.lineTo(300+10, 500+10);
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
        ctx.lineTo(900, 700);
        ctx.lineTo(900, 700-10);
        ctx.lineTo(600+10, 700-10);
        ctx.lineTo(600+10, 120+10);
        ctx.lineTo(1450, 120+10);
        ctx.lineTo(1450, 120);
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
        ctx.lineWidth = 10;
        ctx.strokeRect(850, 250, 450, 170);
        ctx.beginPath();
        ctx.moveTo(1305, 330);
        ctx.lineTo(1450, 330);
        ctx.lineTo(1450, 340);
        ctx.lineTo(1305, 340);
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(214,214,214,0.8)';
        ctx.lineWidth = 9;
        ctx.strokeRect(900, 590, 450, 200);

        ctx.strokeStyle = 'rgba(214,214,214,0.8)';
        ctx.lineWidth = 9;
        ctx.strokeRect(1125, 515, 170, 150);

        ctx.fillStyle = '#3a8287';
        ctx.lineWidth = 1;
        ctx.fillRect(1129, 525, 162, 135);

        ctx.strokeStyle = 'rgba(214,214,214,0.8)';
        ctx.lineWidth = 8;
        ctx.strokeRect(181, 650, 215, 150);

        ctx.beginPath();
        ctx.moveTo(610, 340);
        ctx.lineTo(850, 340);
        ctx.lineTo(850, 330);
        ctx.lineTo(610, 330);
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(182, 730);
        ctx.lineTo(152, 730);
        ctx.lineWidth = 8;
        ctx.strokeStyle = 'rgba(214,214,214,0.8)';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1350, 700);
        ctx.lineTo(1460, 700);
        ctx.lineTo(1460, 690);
        ctx.lineTo(1350, 690);
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(600, 700);
        ctx.lineTo(600, 750);
        ctx.lineTo(400, 750);
        ctx.lineTo(400, 760);
        ctx.lineTo(610, 760);
        ctx.lineTo(610, 700);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();


        //water direction
        ctx.beginPath();
        ctx.moveTo(120, 500);
        ctx.lineTo(150, 500);
        ctx.lineTo(150, 500-5);
        ctx.lineTo(170, 500+5);
        ctx.lineTo(150, 500+15);
        ctx.lineTo(150, 500+10);
        ctx.lineTo(120, 500+10);
        ctx.lineTo(120, 500);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        followUp({x: 295, y: 175});
        followUp({x: 295, y: 345});
        followDown({x: 345, y: 160});
        followDown({x: 345, y: 325});
        followRight({x: 500, y: 435});
        followRight({x: 622, y: 115});
        followRight({x: 930, y: 580});
        followRight({x: 930, y: 780});
        followRight({x: 1060, y: 240});
        followRight({x: 1060, y: 410});
        followRight({x: 640, y: 325});
        followLeft({x: 570, y: 745});
        followRight({x: 705, y: 685});

        //tank status pointer
        tankPointer({x: 205, y: 230}, {x: 300, y: 230});
        tankPointer({x: 205, y: 402}, {x: 300, y: 402});
        tankPointer({x: 670, y: 130}, {x: 670, y: 160});
        tankPointer({x: 1010, y: 790}, {x: 1010, y: 845});
        tankPointer({x: 380, y: 85}, {x: 380+30, y: 85});
        tankPointer({x: 360, y: 170}, {x: 360+35, y: 170});
        tankPointer({x: 360, y: 230}, {x: 360+35, y: 230});
        tankPointer({x: 990, y: 406}, {x: 990, y: 406+65});
        tankPointer({x: 290, y: 650}, {x: 290, y: 650+35});
        tankPointer({x: 290, y: 800}, {x: 290, y: 800+35});

};

const requestAPI = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("tagids", "867-868-869-870-10-16-260-17-261-264-187-265-256-19-257-258-188-259-262-20-263");

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
            <img src={pressure} alt="not found" style={{ top: 755, left: 995 }} width="30" height="46" />
            <img src={pressure} alt="not found" style={{ top: 386, left: 976 }} width="30" height="46" />
            <img src={pressure} alt="not found" style={{ top: 615, left: 275 }} width="30" height="46" />
            <img src={pressure} alt="not found" style={{ top: 765, left: 275 }} width="30" height="46" />
            <img src={valvu} alt="not found" style={{ top: 728, left: 480 }} width="41" height="35" />
            <img src={valvu} alt="not found" style={{ top: 308, left: 720 }} width="41" height="35" />
            <img src={valvu} alt="not found" style={{ top: 763, left: 1157 }} width="41" height="35" />
            <img src={valvu} alt="not found" style={{ top: 563, left: 987 }} width="41" height="35" />
            <h3 style={{ top: 55, left: 280 }}>ESR-1</h3>
            <div className="valvu-status" style={{ top: '213px', left: '4px'}}>
                <div className="valvu-status-title">D9 IN MFM-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[1] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[3] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '383px', left: '4px'}}>
                <div className="valvu-status-title">D9 IN PT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[2] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '70px', left: '412px'}}>
                <div className="valvu-status-title">D9 IN LT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[0] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>Mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '153px', left: '395px'}}>
                <div className="valvu-status-title">A1 OUT CL-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[5] }.children))[2]}.value).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '211px', left: '396px'}}>
                <div className="valvu-status-title">A1 OUT PT_1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[4] }.children))[2]}.value).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '157px', left: '619px'}}>
                <div className="valvu-status-title">MFM D1 D9-1 DN300</div>
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
            <div className="valvu-status" style={{ top: '835px', left: '915px'}}>
                <div className="valvu-status-title">MFM D3 D9-1A DN400</div>
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
            <div className="valvu-status" style={{ top: '673px', left: '190px'}}>
                <div className="valvu-status-title">MFM D4 D9-1 DN200</div>
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
            <div className="valvu-status" style={{ top: '833px', left: '190px'}}>
                <div className="valvu-status-title">MFM D4 D9-2 DN200</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[15] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[16] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[17] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '468px', left: '896px'}}>
                <div className="valvu-status-title">MFM D2 D9-1A DN200</div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[18] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[19] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat({...(Object.assign({}, { ...tags[20] }.children))[2]}.value).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-name" style={{ top: "136.5px", left: "733px" }}>
                A1-2 D0 S0 AOBV-1 DN600
            </div>
            <div className="valvu-name" style={{ top: "350.5px", left: "638px" }}>
                A1-2 D0 S0 AOBV-2 DN100
            </div>
            <div className="valvu-name" style={{ top: "605.5px", left: "910px" }}>
                A1-2 D0 S0 AOBV-3 DN450
            </div>
            <div className="valvu-name" style={{ top: "805px", left: "1085px" }}>
                
            </div>
            <div className="valvu-name" style={{ top: "770px", left: "410px" }}>
                A1-1 D0 S0 AOBV-1 DN600
            </div>
            <button style={{top: "102.5px", left: "1450px"}} onClick={handleClick}>DMA-1</button>
            <button style={{top: "313.5px", left: "1450px"}} onClick={handleClick}>DMA-2</button>
            <button style={{top: "675.5px", left: "1450px"}} onClick={handleClick}>DMA-3</button>
            <button style={{top: "712px", left: "15px"}} onClick={handleClick}>DMA-4</button>
        </>
    )
}

export default Tank_D9;