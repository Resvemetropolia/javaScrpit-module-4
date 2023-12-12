<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris Joke</title>
</head>
<body>

<script>
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data.value);
        })
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
        });
</script>

</body>
</html>
