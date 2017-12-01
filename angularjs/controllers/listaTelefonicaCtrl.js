angular.module('listaTelefonica').controller('listaTelefonicaCtrl', ($scope, contatosApi, operadorasApi) => {
    
    $scope.app = 'Lista Telefonica';
    $scope.contatos = [];
    $scope.operadoras = [];

     const carregarContatos = () => {
        contatosApi.getContatos().then((res) => {
             $scope.contatos = res.data
         }, (res) => {
             console.log(res.status)
         });
     }

    const carregarOperadoras = () => {
        operadorasApi.getOperadoras().then((res) => {
             $scope.operadoras = res.data
         }, (res) => {
             console.log(res.status)
         });
    }
     $scope.addContato = (contato) => {
       contatosApi.postContato(contato).then((res) => {
             $scope.contatos.push(angular.copy(contato))
             delete $scope.contato;
             $scope.contatoForm.$setPristine();
         }, (res) => {
             console.log(res.status)
         });
     };
     $scope.apagarContatos = (contatos) => {
         $scope.contatos = contatos.filter(contato => {
             if (!contato.selecionado) return contato;
         });
     };
     $scope.isContatoSelecionado = (contatos) => {
         return contatos.some((contato) => {
             return contato.selecionado;
         })
     };
     $scope.ordenarPor = (campo) => {
          $scope.criterioDeOrdenacao = campo;
     }
     $scope.classe1 = 'selecionado';
     $scope.classe2 = 'negrito';

     carregarContatos();
     carregarOperadoras();
 });