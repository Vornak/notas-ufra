

function calc(){
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    view = document.getElementById("resultado-view")
    console.log(n1)
    media = (n1+n2)/2;
    if(media<6){
        if(n1>n2){
            x=(6*2)-n1
            view.innerHTML = "Nota mínima pra passar: " + x;
            console.log('precisa tirar pelo menos', x)
        }else{
            x=(6*2)-n2
            view.innerHTML = "Nota mínima pra passar: " + x;
            console.log('precisa tirar pelo menos', x)
        }
    }else{
        view.innerHTML = "Você já tem o suficiente pra passar"
    }
}
