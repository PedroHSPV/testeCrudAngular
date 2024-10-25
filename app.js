var app = angular.module('appCadastro', ['ngRoute']);
//cria um novo modulo que depende do modulo rgroute 
app.config(function($routeProvider) {
    $routeProvider
    //quando a rota cadastro for acessada, iniciando o html cadastro
    // que sera exibido na view ng-view
    // controler define qual controlador vai gerenciar a logica da pagina 
        .when('/cadastro', {
            templateUrl: 'cadastro.html',
            controller: 'controllerCadastro'
        })
        .when('/lista', {
            templateUrl: 'lista.html',
            controller: 'controllerLista'
        })
        .otherwise({ // define o redirecionamento padrão para a rota lista 
            redirectTo: '/lista'
        });
});
