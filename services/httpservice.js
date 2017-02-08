angular.module('yodaSpeak')

.service('httpService', ['$http', function ($http){

	var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

	this.getYodaSpeak = function(phrase){
		return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config)
			.then(function(response){
				return response.data
			})
	}

}]);