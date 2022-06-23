const resposta = document.querySelector("#resposta")
function raspar() {
    let subtitulos = document.querySelectorAll("h2");
    for (let i = 0; i < subtitulos.length; i++) {
        let temp = ["0"];
        temp[i] = subtitulos[i].innerText.split("[");
        let resultados = ["0"];
        resultados[i] = temp[i][0];
        console.log(resultados[i]);    
    }
}