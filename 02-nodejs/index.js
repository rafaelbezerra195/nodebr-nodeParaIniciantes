/**
 * 1.Obter um usuario
 * 2.Obter o numero de telefone de um usuario, a partir de seu id
 * 3.Obter o endereço de um usuario, a partir de seu id
 */

const obterUsuario = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

const obterTelefone = (idUsuario) => {
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            return resolve({
                ddd: 11,
                telefone: '88731303'
            })
        }, 2000)
    })   
}

const obterEndereco = (idUsuario) => {
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            return resolve({
                rua: 'Gomes de Sá',
                numero: 680,
                cidade: 'Paranaguá'
            })
        }, 2000)
    })
}

const usuarioPromise = obterUsuario()
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
                    .then((result) => {
                        usuario.telefone = result
                        return usuario
                    })
    })
    .then((usuario) => {
        return obterEndereco(usuario.id)
                    .then((result) => {
                        usuario.endereco = result
                        return usuario
                    })
    })
    .then((resultado) => {
        console.log('Resultado', resultado)
    })
    .catch((erro) => {
        console.error('Erro', erro)
    })