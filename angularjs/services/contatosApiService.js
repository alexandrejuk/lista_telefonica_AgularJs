angular.module('listaTelefonica').factory('contatosApi', ($http, config) => {
    const _getContatos = () => $http({
        method: 'GET',
        url: `${config.baseUrl}/contatos`
    });
    const _saveContatoApi = (contato) =>  $http({
        method: 'POST',
        url: `${config.baseUrl}/contatos`,
        data: contato
    });

    return { getContatos: _getContatos, postContato: _saveContatoApi };
});