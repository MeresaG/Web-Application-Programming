function content(result) {
    return   `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h3>The Answer is : ${result}</h3>
    <a href ="../../calculator.html"> An Other Calculation</a>
</body>
</html>
`  
}

module.exports = content;
