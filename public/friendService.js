angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function(user) {
      console.log('friendService login function fired with user: ', user)
      return $http({
         method: 'POST',
         url: 'http://localhost:3000/api/login',
         data: {
            name: user.name,
            password: user.password
         }
      })
      .then(function(response) {
         return response
      })
    };

    this.getFriends = function() {
      console.log('friendService getFriends function fired')
    	return $http.get('http://localhost:3000/api/profiles')
      }
    
});
