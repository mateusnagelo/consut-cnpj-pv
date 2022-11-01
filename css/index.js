const getElement = (elem) => {
    return document.getElementById(elem);
}

getElement('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let search = getElement('cnpj').value;
    if (search.length !== 14) {
        alert('CNPJ inválido!')
    } else {
        fetch(`https://publica.cnpj.ws/cnpj/${search}`)
            .then((res) => res.json())
            .then((data) => {
                getElement('nome').value = data.razao_social;
                getElement('fantasia').value = data.estabelecimento.nome_fantasia;
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




                getElement('inscricao').value = data.estabelecimento.inscricao_estadual;



            }).catch(error => {
                alert('Erro ao consultar CNPJ. Por favor verifique.')
            })
    }
})