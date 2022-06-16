<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    n = prompt("Number: ");
    console.log(1);
    loop1:
    for(let i = 2; i <= n;i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                continue loop1;
            };           
        };
            alert(i);
    };
       
    </script>
</body>
</html>