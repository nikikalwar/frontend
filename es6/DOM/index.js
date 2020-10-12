const fetch = require("node-fetch");

fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?pageNumber=1&q=top%20english%20songs&autoCorrect=false&pageSize=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": ""
	}
})
.then(response => {
	return response.json();
}).then(data=>console.log(data))
.catch(err => {
	console.log(err);
});
