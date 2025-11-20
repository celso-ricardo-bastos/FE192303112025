(function(doc){

    const btn = doc.querySelector("[data-submit-btn='btn']");
    const form = doc.getElementById('form-cliente');
    const nome = doc.getElementById('recipient-name');
    const mensagem = doc.getElementById('message-text');
    
    btn.addEventListener('click', (event) => {
        if (validacao()) {
            enviarFormulario(form, nome.value, mensagem.value)
        }
    })

    function validacao() {
        if (!nome.value) {
            nome.classList.add('erro');
            return false;
        }
       
        nome.classList.remove('erro');
        return true
        
    }

    nome.addEventListener('keypress', function(event) {
        validacao()
    })


    function enviarFormulario(form, nome, mensagem){
        const xhr = new XMLHttpRequest();

        xhr.open('POST','http://localhost:3001/cliente');

        const objt = {nome: nome, mensagem: mensagem};
        const json = JSON.stringify(objt);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                console.log(xhr.responseText)
            }   
        }

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(json)
    }



})(document)