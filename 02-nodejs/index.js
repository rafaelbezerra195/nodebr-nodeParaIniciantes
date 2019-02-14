/**
 * 1.Obter um usuario
 * 1.Obter o numero de telefone de um usuario, a partir de seu id
 * 1.Obter o endereço de um usuario, a partir de seu id
 */

const obterUsuario = (callback) => {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

const obterTelefone = (idUsuario, callback) => {
    setTimeout(function(){
        return callback(null, {
            ddd: 11,
            telefone: '88731303'
        })
    }, 2000) 
}

const obterEndereco = (idUsuario,callback) => {
    setTimeout(function(){
        return callback(null, {
            rua: 'Gomes de Sá',
            numero: 680,
            cidade: 'Paranaguá'
        })
    }, 2000)    
}



obterUsuario((erro, usuario) => {
    
    if(erro){
        console.erro('Um erro foi encontrado', erro)
        return
    }
    

    obterTelefone(usuario.id, (erro1, telefone) => {
        if(erro1){
            console.erro('Um erro foi encontrado no telefone', erro)
            return
        }
       
        obterEndereco(usuario.id, (erro2, endereco) => {
            if(erro2){
                console.erro('Um erro foi encontrado no endereco', erro)
                return
            }
    
            console.log(`
                Nome: ${usuario.nome};
                Endereço: ${endereco.rua}, Nº${endereco.numero};
                Telefone: (${telefone.ddd}) ${telefone.telefone}.
            `)
        })        
    })     
})


//const telefone = obterUsuario(usuario.id)
//console.log('Telefone', telefone)
