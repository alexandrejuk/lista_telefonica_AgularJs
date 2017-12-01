angular.module('listaTelefonica').factory('operadorasApi', ($http, config) => {
  const _getOperadoras = () => 
    $http({
        method: 'GET',
        url: `${config.baseUrl}/operadoras`
      });

    return { getOperadoras: _getOperadoras }
});
