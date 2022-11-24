async function apiCall(parameter) {
    const url = `/.netlify/functions/getAllToDos`;
    try {
        const response = await fetch(url);
     
        const data = await response.json()
        renderPath(data)
       
    } catch (err) {
         
    }
}

apiCall()


function renderPath(path){
    console.log(path)
    const template = `
    <ul>
        <li>file name:${path.filename}</li>
        <li>directory name: ${path.dirname}</li>
        <li>filePath: ${path.filePath}</li>
   </ul>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    document.querySelector('#app').appendChild(element)

}