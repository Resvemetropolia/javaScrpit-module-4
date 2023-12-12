<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris Joke App</title>
</head>
<body>

<form id="searchForm">
    <label for="searchTerm">Enter Search Term:</label>
    <input id="searchTerm" type="text" required>
    <input type="submit" value="Search">
</form>

<div id="results"></div>

<script>
    // JavaScript code to handle form submission
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var searchTerm = document.getElementById("searchTerm").value;
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("results").innerHTML = '';
                if (data.result && data.result.length > 0) {
                    data.result.forEach(joke => {
                        var articleElement = document.createElement("article");
                        var pElement = document.createElement("p");
                        pElement.textContent = joke.value;
                        articleElement.appendChild(pElement);
                        document.getElementById("results").appendChild(articleElement);
                    });
                } else {
                    document.getElementById("results").innerHTML = '<p>No jokes found for the given search term.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris jokes:', error);
            });
    });
</script>

</body>
</html>
