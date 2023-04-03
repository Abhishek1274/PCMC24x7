import React from 'react';
import TankLogo from '../../assets/tank.png';
import pressureRotateRightLogo from '../../assets/pressureRotateRight.png';
import pressureRotateLeftLogo from '../../assets/pressureRotateLeft.png';
import ValvuRotateRightLogo from '../../assets/valvuRotateRight.png';
import ValvuRotateLeftLogo from '../../assets/valvuRotateLeft.png';
import { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import { exponentailHandle } from '../../js/globalFunc';

const handleClick = () => {
    window.location.href = "https://www.google.com";
  };

const Tank_C10 = (props) => {
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
        ctx.fillText("INLET", 70, canvasParent.current.clientHeight / 2 + 30);
        //pompu line
        ctx.beginPath();
        ctx.moveTo(600-300, 100);
        ctx.lineTo(600-300, canvasParent.current.clientHeight / 2);
        ctx.lineTo(400-300, canvasParent.current.clientHeight / 2);
        ctx.lineTo(400-300, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610-300, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610-300, 100);
        ctx.lineTo(600-300, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();
        //pompu line 2
        ctx.beginPath();
        ctx.moveTo(350, 100);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2);
        ctx.lineTo(650, canvasParent.current.clientHeight / 2);
        ctx.lineTo(650, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(650, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(500, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(500, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(510, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(510, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(730, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(730, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(740, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(740, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, canvasParent.current.clientHeight / 2 - 10);
        ctx.lineTo(360, canvasParent.current.clientHeight / 2 - 10);
        ctx.lineTo(360, 100);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //water direction
        ctx.beginPath();
        ctx.moveTo(350-250, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380-250, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380-250, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(400-250, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(380-250, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(380-250, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350-250, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350-250, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        output({x: 501.5, y: canvasParent.current.clientHeight / 2 + 295});
        output({x: 731.5, y: canvasParent.current.clientHeight / 2 + 295});
        output({x: 1101.5, y: canvasParent.current.clientHeight / 2 + 295});
        followRight({x: 700, y: canvasParent.current.clientHeight / 2 + 45});
        followLeft({x: 600, y: canvasParent.current.clientHeight / 2 + 45});
        followUp({x: 595-300, y: 350});
        followUp({x: 595-300, y: 230});
        followDown({x: 645-300, y: 330});
        followDown({x: 645-300, y: 210});

        //tank status pointer
        ctx.beginPath();
        ctx.moveTo(600-300, 275);
        ctx.lineTo(480-300, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 715);
        ctx.lineTo(450, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(574-300, 375);
        ctx.lineTo(480-300, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1112, 715);
        ctx.lineTo(1166, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(742, 715);
        ctx.lineTo(792, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(389, 130);
        ctx.lineTo(433, 130);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(366, 230);
        ctx.lineTo(430, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(366, 275);
        ctx.lineTo(430, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
    };

    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "899-900-901-902-126-127-152-153-154-155-156-157");

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
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 700, left: 496 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 274 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 700, left: 704 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 700, left: 1074 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 1095 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 725 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 494 }} width="41" height="30" />
            <h3 style={{ top: 105, left: 285 }}>ESR-1</h3>
            <div className="valvu-status" style={{ top: '110px', left: '433px'}}>
                <div className="valvu-status-title">C10 IN LT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[3] }.children))[2]}.value)/100).toFixed(2) }</span>
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '433px'}}>
                <div className="valvu-status-title">C10 D0 S0 CA-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[5] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '433px'}}>
                <div className="valvu-status-title">C10 D1 S0 MCMP-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[4] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '1146px'}}>
                <div className="valvu-status-title">C10 D1 SO_MFM-1 DN300</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[8] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[11] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>5399.9</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '766px'}}>
                <div className="valvu-status-title">C10 D1 SO_MFM-2 DN200</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[7] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[10] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>2738.3</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '4px'}}>
                <div className="valvu-status-title">C10 IN MFM-1</div>
                <div className="valvu-status-value">
                    <span>43.00</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>2182.0</span>
                    <span>m3</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '4px'}}>
                <div className="valvu-status-title">C10 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>0.00</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '250px'}}>
                <div className="valvu-status-title">C10 D1 S0_MFM-1 DN200</div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[6] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                <span>{ parseFloat(({...(Object.assign({}, { ...tags[9] }.children))[2]}.value)).toFixed(2) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>0.0</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>

            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "400px" }}>
                A1-2 D0 S0 AOBV-1 DN700
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "640px" }}>
                A1-2 D0 S0 AOBV-1 DN700
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "1000px" }}>
                A1-2 D0 S0 AOBV-1 DN700
            </div>
            <button style={{top: height / 2 + 350 + "px", left: "425px"}} onClick={handleClick}>DMA-1</button>
            <button style={{top: height / 2 + 350 + "px", left: "655px"}} onClick={handleClick}>DMA-2</button>
            <button style={{top: height / 2 + 350 + "px", left: "1025px"}} onClick={handleClick}>DMA-3</button>
        </>
    )
}

export default Tank_C10;