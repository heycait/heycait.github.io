(function(){

  var app = angular.module('nextCapital', [])

  app.controller('TodoCtrl', function($http){
    this.todos = [];
    this.newTodo = {
      is_complete: false
    }

    var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos.json?api_token=' + sessionStorage.getItem('api_token');

    $http.get(link)
         .success(function(response){
            this.todos = response;
         });

    this.addTodo = function(){
      alert('you clicked')
      this.todos.push({description: $scope.formTodo, is_complete: false});

      var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos';

      $http({
        method: 'POST',
        url: link,
        data: {api_token: sessionStorage.getItem('api_token'), todo: {description: $scope.formTodo}},
      }).success(function(response){
        console.log(response)
        alert('stuff happend')
        debugger
      });

    };
  });

})();




// don't let it add if field is blank....


          // $scope.markComplete = function(){
          //   alert('you marked me!')
          // }

      // Doing it this way results in the error "please sign in first" compared to doing it with jQuery/Ajax
        // $scope.logout = function(){
        //   var link = 'http://recruiting-api.nextcapital.com/users/sign_out';

        //   $http({
        //     method: 'DELETE',
        //     url: link,
        //     data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
        //   }).success(function(response){
        //     console.log(response);
        //     alert('stuff happened')
        //     debugger
        //     window.location.href = '/'
        //     // window.location.href = '/nextcapital-todo/'
        //   });
        // }
      // });

$(function() {
  $( "#sortable" ).sortable({placeholder: "ui-state-highlight"});
  $( "#sortable" ).disableSelection();
});


$('#logout').click(function(e){
  e.preventDefault();

  var request = $.ajax({
    method: 'DELETE',
    url: 'http://recruiting-api.nextcapital.com/users/sign_out',
    data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
  }).done(function(response){
    window.location.href = '/'
    // window.location.href = '/nextcapital-todo/'
  });
});



