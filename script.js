document.getElementById('translate').addEventListener('click', translateToBanana);
let url = "https://api.funtranslations.com/translate/minion.json"
function translateToBanana(){
    var input = document.getElementById('input').value;
    let encodedUrl = constructEncodedURL(input);
    console.log(input)
    fetch(encodedUrl).then(response => response.json()).then(data => {
        document.getElementById('output').innerText = data.contents.translated;  
    }).catch(()=>alert("some error occured"))
}
function constructEncodedURL(param){
    return url+"?text="+encodeURI(param);
}