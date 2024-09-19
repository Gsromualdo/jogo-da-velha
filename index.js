function preconceito() {
    let nome1 = document.getElementById('first_name').value;
    let nome2 = document.getElementById('second_name').value;

    if (nome1 == "" || nome2 == "") {
        alert("Preencha os campos!")
    }
    else {
        localStorage.clear();
    
        localStorage.setItem('nome1', nome1);
        
        localStorage.setItem('nome2', nome2);

        window.location.assign('index2.html');
    }

    
}

function name() {
    document.getElementById("jogador").innerHTML = localStorage.getItem("nome1");
    document.getElementById("jogador2").innerHTML = localStorage.getItem("nome2");
}

name();