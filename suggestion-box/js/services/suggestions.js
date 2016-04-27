app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Pizza libre para el club hípico',
				upvotes:15,
				comments: []
			},
			{
				title: 'Cambio de papeleras por otras más grandes',
				upvotes: 9,
				comments: []
			},
			{
				title: 'Presidente dimisión',
				upvotes: 89,
				comments: []
			},
			{
				title: 'Mari te amo',
				upvotes: 1,
				comments: []
			},
		]
	};
	return demoSuggestions;
}]);