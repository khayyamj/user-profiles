angular.module('userProfiles')
.controller('profileCtrl', function($scope, friendService) {

   friendService.getFriends()
   .then(function(response){
      $scope.friends = response.data.friends;
      $scope.currentUser = response.data.currentUser;
      console.log('getFriends response data: ', response.data.currentUser.name);
   })
});
