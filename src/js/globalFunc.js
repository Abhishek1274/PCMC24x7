import XMLParser from 'react-xml-parser';
export const exponentailHandle = num => {
    return parseFloat((num * 1).toExponential(2));
}

export const requestAPI = tagIds => {
    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("tagids", tagIds);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
        mode:'no-cors'
        };
        fetch("http://45.250.251.149:8090/PCMCWebService/Service.asmx/getTagByTagID", requestOptions)
        .then(response => response.text())
        .then(result => {
            const xml = new XMLParser().parseFromString(result);
            console.log(xml.children);
            return xml.children;
            // setTags(xml.children);
            
        })
        .catch(error => console.log('error', error));
}