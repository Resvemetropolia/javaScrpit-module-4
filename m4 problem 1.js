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

<script>
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var query = document.getElementById("query").value;
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
</script>

</body>
</html>
