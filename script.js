var clientes =  [];




document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    let nomeCliente = document.querySelector('input[name=nome_cliente]');
    let emailCliente = document.querySelector('input[name=email_cliente]');
    let cpfCliente = document.querySelector('input[name=cpf_cliente]');
    let telefoneCliente = document.querySelector('input[name=telefone_cliente]');
    let cepCliente = document.querySelector('input[name=cep_cliente]');
    let logradouroCliente = document.querySelector('input[name=logradouro_cliente]');
    let numeroCliente = document.querySelector('input[name=numero_cliente]');
    let bairroCliente = document.querySelector('input[name=bairro_cliente]');
    let cidadeCliente = document.querySelector('input[name=cidade_cliente]');
    let estadoCliente = document.querySelector('input[name=estado_cliente]');
  
    clientes.push({
        nome: nomeCliente.value,
        email: emailCliente.value,
        cpf: cpfCliente.value,
        telefone: telefoneCliente.value,
        cep: cepCliente.value,
        logradouro: logradouroCliente.value,
        numero: numeroCliente.value,
        bairro: bairroCliente.value,
        cidade: cidadeCliente.value,
        estado: estadoCliente.value
    });

    
    limparCampos();
    atualizarTabela();
    fecharModalCadastro();
         
});


function fecharModalCadastro(){
    let modal = document.querySelector('.modal-cadastro-cliente');
    modal.style.display = "none";
  
}

function abrirModalCadastro(){
    let modal = document.querySelector('.modal-cadastro-cliente');
    modal.style.display = "block";
}


function atualizarTabela(){
    document.querySelector('.tabela-clientes > tbody').innerHTML = "";
    clientes.forEach((val,index) =>{
        const novaLinha = document.createElement('tr')
        novaLinha.innerHTML=`
            <td><button type="button" id ="${index}" class ="button-delete">DELETAR</button></td>
            <td data-title = "Nome" >${val.nome}</td>
            <td data-title = "Email">${val.email}</td>
            <td data-title = "Cpf">${val.cpf}</td>
            <td data-title = "Telefone">${val.telefone}</td>
            <td data-title = "Cep">${val.cep}</td>
            <td data-title = "Logradouro">${val.logradouro}</td>
            <td data-title = "Numero">${val.numero}</td>
            <td data-title = "Bairro">${val.bairro}</td>
            <td data-title = "Cidade">${val.cidade}</td>
            <td data-title = "Estado">${val.estado}</td>
      
        `;

        document.querySelector('.tabela-clientes > tbody').appendChild(novaLinha);
    })
    

}

function removerCliente(evento){
    if(evento.target.type == 'button'){
        clientes.splice(evento.target.id, 1);
    }

    atualizarTabela();
}



function limparCampos(){
     let campos = document.querySelectorAll(".campo > input");
     campos.forEach((val)=>{
         val.value = "";
     })
}


document.querySelector(".tabela-clientes > tbody")
.addEventListener('click', removerCliente);











    
