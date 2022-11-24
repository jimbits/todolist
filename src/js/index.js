async function apiCall(parameter) {
    const url = `/.netlify/functions/getAllToDos`;
    try {
        const response = await fetch(url);
        console.log(response)
        const data = await response.json()
        renderPath(data)
       
    } catch (err) {
         
    }
}

apiCall()


function renderPath(path){
  
    const template = `<h1 class="text-4xl text-center py-32">${path.path}</h1>`
    const element = document.createRange().createContextualFragment(template).children[0]
    document.querySelector('#app').appendChild(element)

}