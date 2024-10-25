app.controller('controllerLista', function($scope, $http) { 
    $scope.funcionarios = [];

    // Carrega a lista de funcionários do servidor
    $scope.carregarFuncionarios = function() {
        $http.get('http://localhost:3000/funcionarios')
            .then(function(response) {
                $scope.funcionarios = response.data;
            });
    };

    $scope.carregarFuncionarios(); // Carrega a lista ao iniciar

    $scope.editarFuncionario = function(funcionario) {
        $http.put('http://localhost:3000/funcionarios', $scope.novoFuncionario)
            .then(function(response) { 
                $scope.novoFuncionario = {}; 
            });
        }
    $scope.deletarFuncionario = function(funcionario) {
        $http.delete('http://localhost:3000/funcionarios/' + funcionario.id)
            .then(function() {
                $scope.carregarFuncionarios(); // Atualiza a lista após a deleção
            });
    };
});
