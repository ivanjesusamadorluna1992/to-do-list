function TodoCtrl($scope) {//es un objeto que hace referencia al modelo de la aplicación. Es un contexto de ejecución para las expresiones. 
  
  $scope.todos = [ // este arreglo muestra el proyecto 
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () { //Obtiene el listado del arreglo
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () { //aquí se captura el texto  "formTodoText"
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () { //se depura y regresamos a lo que teniamos 
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}