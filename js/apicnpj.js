const getElement = (elem) => {
    return document.getElementById(elem);
}

getElement('searchbody').addEventListener('submit', function (e) {
        e.preventDefault();
        let search = getElement('cnpj').value;
        if (search.length !== 14) {
            alert('CNPJ inválido!');
        } else {
            fetch(`https://publica.cnpj.ws/cnpj/${search}`)
                .then((res) => res.json())
                .then((data) => {
                    getElement('nome').value = data.razao_social;
                    getElement('fantasia').value = data.estabelecimento.nome_fantasia;
                    getElement('inscricao').value = data.estabelecimento.inscricoes_estaduais[0].inscricao_estadual;
                    getElement('porte').value = data.porte.descricao;
                    getElement('natureza').value = data.natureza_juridica.descricao;
                    getElement('situacao').value = data.estabelecimento.situacao_cadastral;
                    getElement('telefone').value = data.estabelecimento.telefone1;
                    getElement('cep').value = data.estabelecimento.cep;
                    getElement('cidade').value = data.estabelecimento.cidade.nome;
                    getElement('numero').value = data.estabelecimento.numero;
                    getElement('estado').value = data.estabelecimento.estado.nome;
                    getElement('uf').value = data.estabelecimento.estado.sigla;
                    getElement('endereco').value = data.estabelecimento.logradouro;
                    getElement('bairro').value = data.estabelecimento.bairro;
                    getElement('complemento').value = data.estabelecimento.complemento;

                    
                }).catch(error => {
                    
                });
        }
    })






// const limparFormulario = (endereco) =>{
//     document.getElementById('endereco').value = '';
//     document.getElementById('bairro').value = '';
//     document.getElementById('cidade').value = '';
//     document.getElementById('estado').value = '';
// }


// const preencherFormulario = (endereco) =>{
//     document.getElementById('endereco').value = endereco.logradouro;
//     document.getElementById('bairro').value = endereco.bairro;
//     document.getElementById('cidade').value = endereco.localidade;
//     document.getElementById('estado').value = endereco.uf;
// }


// const eNumero = (numero) => /^[0-14]+$/.test(numero);

// const cnpjValido = (cnpj) => cnpj.length == 8 && eNumero(cnpj); 

// const pesquisarCnpj = async() => {
//     limparFormulario();
    
//     const cnpj = document.getElementById('cnpj').value.replace("-","");
//     const url = `https://publica.cnpj.ws/cnpj/{json}`;
//     if (cnpjValido(cnpj)){
//         const dados = await fetch(url);
//         const endereco = await dados.json();
//         if (endereco.hasOwnProperty('erro')){
//             document.getElementById('endereco').value = 'CNPJ não encontrado!';
//         }else {
//             preencherFormulario(endereco);
//         }
//     }else{
//         document.getElementById('endereco').value = 'CNPJ incorreto!';
//     }
     
// }