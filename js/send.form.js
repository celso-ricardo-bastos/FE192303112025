(function(doc){

    const btn = doc.querySelector("[data-submit-btn='btn']");
    const form = doc.getElementById('form-cliente');
    const nome = doc.getElementById('recipient-name');
    const mensagem = doc.getElementById('message-text');

    const cep = doc.getElementById('recipient-cep');
    const logradouro = doc.getElementById('recipient-logradouro');

    const avisoResposta = doc.querySelector("[data-resposta='menssagem']");

    /* Usando bootstrap */
    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            const storage = localStorage.getItem('dados-form');
            const storageJson = JSON.parse(storage);
            logradouro.value = storageJson.logradouro
            cep.value = storageJson.cep
        })
    }

    // nome.addEventListener('focus', () => {
    //     const storage = localStorage.getItem('dados-form');
    //     const storageJson = JSON.parse(storage);
    //     logradouro.value = storageJson.logradouro
    //     cep.value = storageJson.cep
    // })


    cep.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            buscaPorCep(event.target)
        }
    })

    async function buscaPorCep(cep) {

        const storage = localStorage.getItem('dados-form');

        if(!storage) {

            try {

                const busca = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
                const dados = await busca.json();
                logradouro.value = dados.logradouro;

                const json = JSON.stringify({cep: cep.value, logradouro: dados.logradouro})
                localStorage.setItem('dados-form', json);
                return;
                    
            } catch (error) {
                console.log('Tratamento de erro')
            }
            
            
        }

        const storageJson = JSON.parse(storage);
        logradouro.value = storageJson.logradouro
        cep.value = storageJson.cep
        
    }

    btn.addEventListener('click', (event) => {
        if (validacao()) {
            enviarFormulario(form, nome, mensagem)
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

        const objt = {nome: nome.value, mensagem: mensagem.value};
       
        const json = JSON.stringify(objt);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200){
                const dados = JSON.parse(xhr.responseText);

                avisoResposta.innerHTML = dados.status;
                nome.value = '';
                mensagem.value = '';
                logradouro.value = '';
                cep.value = '';
            }   
            else if (xhr.readyState === 4 && xhr.status === 400){
                console.log(xhr.responseText)
            } 
        }

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(json)
    }



    // let Pessoa = function(nome) {
    //     this.nome = nome;
    //     this.end = 'Rua bla'
    // }

    // Pessoa.prototype.getNome = function() {
    //     ['ana', 'pedro'].forEach(function(elemento) {
    //             if (elemento == this.nome) {
    //                 console.log('Encontrei');
    //             }    
    //     }.bind(this));
    // }


    // let pessoa = new Pessoa('ana')
    // pessoa.getNome();


})(document)