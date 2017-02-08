var app = angular.module('yodaSpeak', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){

		var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
		$scope.speak = function(phrase){
			var api = $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config);
			api.then(function (response){
				var newSpeech = response.data;
				$scope.changed = newSpeech;
			})
		}
		
		// console.log(api);
		// api.then(function (response) {
		// 	console.log(response.data);
		// });


		// $scope.speak = function(phrase) {
		// 	var postSpeak = $http.post(api, phrase);
		// 	console.log(postSpeak);
		// 	postSpeak.then(function(response){
		// 		console.log(response)
		// 	})
		// }
}]);

