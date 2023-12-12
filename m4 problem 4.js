<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TV Series Search</title>
</head>
<body>

<form id="searchForm" action="https://api.tvmaze.com/search/shows" method="GET">
    <label for="query">Enter TV Series:</label>
    <input id="query" name="q" type="text" required>
    <input type="submit" value="Search">
</form>

<div id="results"></div>

<script>
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var query = document.getElementById("query").value;
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("results").innerHTML = '';
                if (data && data.length > 0) {
                    data.forEach(show => {
                        var articleElement = document.createElement("article");
                        var h2Element = document.createElement("h2");
                        h2Element.textContent = show.show.name;
                        articleElement.appendChild(h2Element);
                        var aElement = document.createElement("a");
                        aElement.href = show.show.url;
                        aElement.textContent = "Details";
                        aElement.target = "_blank";
                        articleElement.appendChild(aElement);
                        var imgElement = document.createElement("img");
                        imgElement.src = show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
                        imgElement.alt = show.show.name;
                        articleElement.appendChild(imgElement);
                        var divElement = document.createElement("div");
                        divElement.innerHTML = show.show.summary;
                        articleElement.appendChild(divElement);
                        document.getElementById("results").appendChild(articleElement);
                    });
                } else {
                    document.getElementById("results").innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
</script>

</body>
</html>
