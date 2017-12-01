angular.module('listaTelefonica').factory('contatosApi', ($http) => {
    const _getContatos = () => $http({
        method: 'GET',
        url: 'http://localhost:3000/contatos'
    });
    const _saveContatoApi = (contato) =>  $http({
        method: 'POST',
        url: 'http://localhost:3000/contatos',
        data: contato
    });

    return { getContatos: _getContatos, postContato: _saveContatoApi };
});