app.controller('controllerCadastro', function($scope, $http) {
    //$http faz a requisição como GET, POST, DELETE E PUT
    //scope é um objeto que liga o controller ao view (html)
    // cria o controlador que  que usa $scope e $http para manipulação dos dados
    $scope.novoFuncionario = {};
     // inicializa um objeto para armazenar os dodos do novo funcionario
    $scope.cadastrarFuncionario = function() {
        // define a função que será chamada ao cadastrar um funcionário
        $http.post('http://localhost:3000/funcionarios', $scope.novoFuncionario)
        // envia um post para o servidor na url, passando os dados do novo funcionario
            .then(function(response) { // Define o que fazer quando a promessa do http é resolvida
                console.log("Funcionário cadastrado:", response.data);
                $scope.novoFuncionario = {}; // Limpa o formulário
            });
    };
});
