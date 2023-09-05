# DAY - 8 HTML tasks
1. Fix the bug in below snippet
```HTML
    <html lang="en">
    <head>
        <title>Document
            <body>
                guvi
        </title>
    </head>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <div>
            <div>
                Guvi Geek Network
            </div>
        </body>
    </html>
```

2.Design a contact us form with all fields as required.

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <!-- control+alt+shift - multi line select -->
    <!-- html:5 - for generating boiler plate -->
    <!-- lorem*10 - to generate 10 lines of dummy lines-->
    <div>
    <form action="C:\Users\IronmanPc\Documents\MERNSTACK\DAY2\about.html" method="post">
        <label for="">First Name:</label>
        <input type="text" placeholder="Firstname">
        <br><br>
        <label for="">Last Name:</label>
        <input type="text" placeholder="Lastname">
        <br><br>
        <label for="">Choose your qualifications:</label>
        <br><br>
        <label for="">10th:</label>
        <input type="checkbox" name="Qualification1">
        <label for="">12th:</label>
        <input type="checkbox" name="Qualification2">
        <label for="">Bachelor:</label>
        <input type="checkbox" name="Qualification3">
        <label for="">Masters:</label>
        <input type="checkbox" name="Qualification4">
        <br><br>
        <label for="">Choose your Fav color:</label>
        <input type="color" name="color" value="blue">
        <br><br>
        <label for="">Date of submission:</label>
        <input type="date" name="date">
        <br><br>
        <label for="">Email ID:</label>
        <input type="email" name="emai">
        <br><br>
        <label for="">Upload a file:</label>
        <input type="file">
        <br><br>
        <label for="">Hidden:</label>
        <input type="hidden">
        <br><br>
        <label for="">month & year</label>
        <input type="month">
        <br><br>
        <label for="">GPA:</label>
        <input type="number" min="1" max="10">
        <br><br>
        <div class="password-container">
        <label for="">password:</label>
        <input type="password" id="id_password">
        <img src=
        "https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash-300x240.png"
                        width="1.8%" height="1%" 
                        style="margin-left: -5%;display:inline;
                        vertical-align: middle" 
                        id="togglePassword">
        </div>
        <br><br>
        <div class="radio">
        <label for="">Fav Language:</label>
        <label for="">English</label>
        <input type="radio" name="fav_language">
        
        <label for="">Tamil</label>
        <input type="radio" name="fav_language">
        <br><br>
        </div>
        <label for="">Enter your percentage:</label>
        <input type="range" min="10" max="100">
        <br><br>
        <label for="">search:</label>
        <input type="search">
        <br><br>
        <label for="">telephone:</label>
        <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
        <br><br>
        <label for="">Url:</label>
        <input type="url">
        <br><br>
        <label for="">week:</label>
        <input type="week">
         <br><br>
        <label for="">Please click submit once completed:</label>
        <input type="submit" value="Submit">
    </form>
    </div>
    <script>
        const togglePassword = 
        document.querySelector('#togglePassword');
          
    const password = document.querySelector('#id_password');
  
    togglePassword.addEventListener('click', function (e) {
  
        // Toggle the type attribute
        const type = password.getAttribute(
            'type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
  
        // Toggle the eye slash icon
        if (togglePassword.src.match(
"https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png")) {
            togglePassword.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png";
        } else {
            togglePassword.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png";
        }      
});
    </script>
</body>
</html>

```

