import React from 'react';
import TankLogo from '../../assets/tank.png';
import pressureRotateRightLogo from '../../assets/pressureRotateRight.png';
import pressureRotateLeftLogo from '../../assets/pressureRotateLeft.png';
import ValvuRotateRightLogo from '../../assets/valvuRotateRight.png';
import ValvuRotateLeftLogo from '../../assets/valvuRotateLeft.png';
import XMLParser from 'react-xml-parser';
import { exponentailHandle } from '../../js/globalFunc';
import { useEffect, useState } from 'react';

const handleClick = () => {
    window.location.href = "https://www.google.com";
  };

const Tank_B5 = (props) => {
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
        ctx.fillText("INLET", 320, canvasParent.current.clientHeight / 2 + 30);
        //pompu line ESR-1
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
        ctx.lineTo(650, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(400, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(400, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(410, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(410, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(900, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(900, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(910, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(910, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, 100);
        ctx.lineTo(650, 100);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //pompu line ESR-2
        ctx.beginPath();
        ctx.moveTo(1300, 100);
        ctx.lineTo(1300, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1050, canvasParent.current.clientHeight / 2);
        ctx.lineTo(1050, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1310, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(1310, 100);
        ctx.lineTo(1300, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1350, 100);
        ctx.lineTo(1350, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1600, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1600, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1610, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1610, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(1360, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(1360, 100);
        ctx.lineTo(1350, 100);
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

        output({x: 402, y: canvasParent.current.clientHeight / 2 + 295});
        output({x: 902, y: canvasParent.current.clientHeight / 2 + 295});
        followRight({x: 700, y: canvasParent.current.clientHeight / 2 + 45});
        followRight({x: 500, y: canvasParent.current.clientHeight / 2 - 5});
        followLeft({x: 600, y: canvasParent.current.clientHeight / 2 + 45});
        followUp({x: 595, y: 430});
        followUp({x: 595, y: 230});
        followDown({x: 645, y: 410});
        followDown({x: 645, y: 210});

        output({x: 1102, y: canvasParent.current.clientHeight / 2 + 295});
        output({x: 1602, y: canvasParent.current.clientHeight / 2 + 295});
        followRight({x: 1400, y: canvasParent.current.clientHeight / 2 + 45});
        followRight({x: 1200, y: canvasParent.current.clientHeight / 2 - 5});
        followLeft({x: 1300, y: canvasParent.current.clientHeight / 2 + 45});
        followUp({x: 1295, y: 430});
        followUp({x: 1295, y: 230});
        followDown({x: 1345, y: 410});
        followDown({x: 1345, y: 210});

        //tank status pointer
        ctx.beginPath();
        ctx.moveTo(600, 275);
        ctx.lineTo(480, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(400, 715);
        ctx.lineTo(300, 715);
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
        ctx.moveTo(812, 715);
        ctx.lineTo(880, 715);
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

        //
        ctx.beginPath();
        ctx.moveTo(1300, 275);
        ctx.lineTo(1180, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1100, 715);
        ctx.lineTo(1000, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1274, 375);
        ctx.lineTo(1180, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1512, 715);
        ctx.lineTo(1580, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1383, 130);
        ctx.lineTo(1433, 130);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1360, 230);
        ctx.lineTo(1430, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1360, 275);
        ctx.lineTo(1430, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
    };

    const requestAPI = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", "848-849-850-851-852-853-854-855-856-857-858-859-860-861-862-134-135-136-137-138-139-140-141-142-143-144-145-229-228-230-231");

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
            <img src={TankLogo} alt="not found" style={{ top: 85, left: 1206 }} width="200" height="250" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 595 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 1295 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 700, left: 396 }} width="41" height="30" />
            <img src={pressureRotateRightLogo} alt="not found" style={{ top: 700, left: 1096 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 574 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 1274 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 700, left: 874 }} width="41" height="30" />
            <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 700, left: 1574 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 895 }} width="41" height="30" />
            <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 1595 }} width="41" height="30" />
            <img src={ValvuRotateLeftLogo} alt="not found" style={{ top: 600, left: 374 }} width="41" height="30" />
            <img src={ValvuRotateLeftLogo} alt="not found" style={{ top: 600, left: 1074 }} width="41" height="30" />
            <h3 style={{ top: 105, left: 585 }}>ESR-1</h3>
            <h3 style={{ top: 105, left: 1285 }}>ESR-2</h3>



            
            <div className="valvu-status" style={{ top: '110px', left: '733px'}}>
                <div className="valvu-status-title">B5 IN LT-1</div>
                <div className="valvu-status-value">
                <span>{ parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[0] }.children))[2]}.value))/100).toFixed(2) }</span>
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '733px'}}>
                <div className="valvu-status-title">B5 D0 S0 CA-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[21] }.children))[2]}.value).toFixed(2)}</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '733px'}}>
                <div className="valvu-status-title">B5 D1 S0 MCMP-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[15] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '666px'}}>
                <div className="valvu-status-title">B5 D1 S0 MFM-2 DN400</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[18] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[24] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[27] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '280px'}}>
                <div className="valvu-status-title">B5 IN MFM-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[3] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[9] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '280px'}}>
                <div className="valvu-status-title">B5 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[6] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '150px'}}>
                <div className="valvu-status-title">B5 D1 S0 MFM-1 DN400</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[17] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[23] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[28] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>

            {/* ESR-2 */}

            <div className="valvu-status" style={{ top: '110px', left: '1433px'}}>
                <div className="valvu-status-title">B5 IN LT-2</div>
                <div className="valvu-status-value">
                    <span>{parseFloat((exponentailHandle({...(Object.assign({}, { ...tags[1] }.children))[2]}.value))/100).toFixed(2)}</span>
                    <span>mtr</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '210px', left: '1433px'}}>
                <div className="valvu-status-title">B5 D0 S0 CA-2</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[22] }.children))[2]}.value).toFixed(2)}</span>
                    <span>ppm</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '1433px'}}>
                <div className="valvu-status-title">B5 D1 S0 MCMP-2</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[16] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '1666px'}}>
                <div className="valvu-status-title">B5 D2 S0 MFM-2 DN300</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[20] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[26] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[30] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '260px', left: '980px'}}>
                <div className="valvu-status-title">B5 IN MFM-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[4] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[10] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '360px', left: '980px'}}>
                <div className="valvu-status-title">B5 IN PT-1</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[7] }.children))[2]}.value).toFixed(2)}</span>
                    <span>bar</span>
                </div>
            </div>
            <div className="valvu-status" style={{ top: '700px', left: '1150px'}}>
                <div className="valvu-status-title">B5 D2 S0 MFM-1 DN300</div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[19] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3/hr</span>
                </div>
                <div className="valvu-status-value">
                    <span>{parseFloat({...(Object.assign({}, { ...tags[25] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Today</span>
                </div>
                <div className="valvu-status-value">
                <span>{parseFloat({...(Object.assign({}, { ...tags[29] }.children))[2]}.value).toFixed(2)}</span>
                    <span>m3</span>
                    <span>Prev.day</span>
                </div>
            </div>

            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "300px" }}>
                B5 D3 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "800px" }}>
                B5 D3 S0 ASV-2 DN300
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "1010px" }}>
                B5 D3 S0 ASV-1 DN300
            </div>
            <div className="valvu-name" style={{ top: height / 2 + 150 + "px", left: "1500px" }}>
                B5 D3 S0 ASV-2 DN300
            </div>
            <button style={{top: height / 2 + 350 + "px", left: "325px", width: 650}} onClick={handleClick}>DMA-1</button>
            <button style={{top: height / 2 + 350 + "px", left: "1025px"}} onClick={handleClick}>DMA-2</button>
            <button style={{top: height / 2 + 350 + "px", left: "1525px"}} onClick={handleClick}>DMA-3</button>
        </>
    )
}

export default Tank_B5;