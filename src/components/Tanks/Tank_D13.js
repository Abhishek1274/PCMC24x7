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

const Tank_D13 = (props) => {
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
        setTags(tags);
        const a = Object.assign({}, { ...tags[0] }.children);
        var m = {...(Object.assign({}, { ...tags[0] }.children))[2]}.value;
        console.log((m*1).toExponential(2))
    }, [tags]);

    useEffect(() => {
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 320, canvasParent.current.clientHeight / 2 + 30);
        //pompu line
        ctx.beginPath();
        ctx.moveTo(600, 100);
        ctx.lineTo(600, canvasParent.current.clientHeight / 2);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610, 100);
        ctx.lineTo(600, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(650, 100);
        ctx.lineTo(650, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(660, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(660, 100);
        ctx.lineTo(650, 100);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //water direction
        ctx.beginPath();
        ctx.moveTo(350, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(400, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        followUp({x: 595, y: 430});
        followUp({x: 595, y: 230});
        followDown({x: 645, y: 410});
        followDown({x: 645, y: 210});

        //tank status pointer
        ctx.beginPath();
        ctx.moveTo(600, 275);
        ctx.lineTo(480, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(574, 375);
        ctx.lineTo(480, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(660, 665);
        ctx.lineTo(730, 665);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(683, 130);
        ctx.lineTo(733, 130);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(660, 230);
        ctx.lineTo(730, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(660, 275);
        ctx.lineTo(730, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
    }, []);

    //API fetching data
    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "193-199-196-113-116-205-189-115-112-114-117-206");

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
            <img src={TankLogo} alt="not found" style={{ top: 85, left: 506 }} width="200" height="250" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 595 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 574 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 525, left: 645 }} width="41" height="30" />
            <h3 style={{ top: 105, left: 585 }}>ESR-1</h3>
            <div className="valvu-status" style={{ top: '110px', left: '733px'}}>
                <div className="valvu-status-title">A2 IN LT-1</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>%</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '733px'}}>
                <div className="valvu-status-title">A2 D0 S0 CA-1</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '733px'}}>
                <div className="valvu-status-title">A2 D1 S0 MCMP-1</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '650px', left: '733px'}}>
                <div className="valvu-status-title">MFM_A2_D3_S0_MFM_2_DN300</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '280px'}}>
                <div className="valvu-status-title">A2 IN MFM-1</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '280px'}}>
                <div className="valvu-status-title">A2 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>{ exponentailHandle({...(Object.assign({}, { ...tags[6] }.children))[2]}.value) }</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 80 + "px", left: "550px" }}>
                A2 D3 S0 ASV-1 DN300
            </div>
            <button style={{top: height / 2 + 300 + "px", left: "575px"}} onClick={handleClick}>DMA-1</button>
        </>
    )
}

export default Tank_D13;