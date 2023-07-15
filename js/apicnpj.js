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


    const gerarPDF = () => {
        // Obtém os valores dos campos preenchidos com as informações da API
        const nome = getElement('nome').value || '';
        const fantasia = getElement('fantasia').value || '';
        const inscricao = getElement('inscricao').value || '';
        const porte = getElement('porte').value || '';
        const natureza = getElement('natureza').value || '';
        const situacao = getElement('situacao').value || '';
        const telefone = getElement('telefone').value || '';
        const cep = getElement('cep').value || '';
        const cidade = getElement('cidade').value || '';
        const numero = getElement('numero').value || '';
        const estado = getElement('estado').value || '';
        const uf = getElement('uf').value || '';
        const endereco = getElement('endereco').value || '';
        const bairro = getElement('bairro').value || '';
        const complemento = getElement('complemento').value || '';


        // Obtém o valor do CNPJ consultado
        const cnpj = getElement('cnpj').value;
  
        // Remove caracteres especiais do CNPJ para garantir que o nome do arquivo seja válido
        const nomeArquivo = cnpj.replace(/[^\d]/g, '') + '.pdf';
    
        // Define o título do PDF
        const doc = new jsPDF({ title: 'Informações do CNPJ' });
    
        // Adiciona os valores dos campos ao PDF
        doc.text(`CNPJ: ${cnpj}`, 20, 10);
        doc.text(`Nome: ${nome}`, 20, 20);
        doc.text(`Nome Fantasia: ${fantasia}`, 20, 30);
        doc.text(`Inscrição Estadual: ${inscricao}`, 20, 40);
        doc.text(`Porte: ${porte}`, 20, 50);
        doc.text(`Natureza Jurídica: ${natureza}`, 20, 60);
        doc.text(`Situação Cadastral: ${situacao}`, 20, 70);
        doc.text(`Telefone: ${telefone}`, 20, 80);
        doc.text(`CEP: ${cep}`, 20, 90);
        doc.text(`Cidade: ${cidade}`, 20, 100);
        doc.text(`Número: ${numero}`, 20, 110);
        doc.text(`Estado: ${estado}`, 20, 120);
        doc.text(`UF: ${uf}`, 20, 130);
        doc.text(`Endereço: ${endereco}`, 20, 140);
        doc.text(`Bairro: ${bairro}`, 20, 150);
        doc.text(`Complemento: ${complemento}`, 20, 160);
    
        // Salva o PDF com o nome "informacoes_cnpj.pdf"
        doc.save(nomeArquivo);
        
    }










 // Verifica se todos os elementos existem antes de acessar a propriedade value
 
    // Cria um novo




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
