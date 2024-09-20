function preconceito() {
    
    let nome1 = document.getElementById('first_name').value;
    let nome2 = document.getElementById('second_name').value;

    
    if (nome1 === "" || nome2 === "") {
        alert("Preencha os campos!");
    } else {
       
        localStorage.clear();
        localStorage.setItem('nome1', nome1);
        localStorage.setItem('nome2', nome2);

       
        console.log("Redirecionando para index2.html");

        
        window.location.assign('index2.html'); 
    }
}
