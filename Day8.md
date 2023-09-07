# DAY - 8 HTML tasks
> 1. Fix the bug in below snippet
```HTML
    <html lang="en">
    <head>
        <title>Document
            <body>
                Hello
        </title>
    </head>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <div>
            <div>
                Hello people
            </div>
        </body>
    </html>
```

> 2.Design a contact us form with all fields as required.

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
---
> 3. Use certain HTML elements to display the following in a HTML page.

```HTML
<!-- Create the ordered and unordered list -->
    <ul>
        <li>Programming Language</li>
        <ul style="list-style-type:circle">
            <li>Javascript</li>
                <ol type="a">
                    <li>Angular</li>
                    <li>React</li>
                    <li>Vue.js</li>
                </ol>
            <li>Python</li>   
                 <ol type="a">
                    <li>Django Framework</li>
                    <li>Flask Framework</li>
                    
                </ol> 
            <li>Java</li>
                <ol type="a">
                    <li>Spring</li>
                    <li>Maven</li>
                    <li>Hibernate</li>
                </ol>
        </ul>
        <li>Database</li>
            <ul style="list-style-type:circle">
            <li>MySQL</li>
            <li>MongoDB</li>     
            <li>Cansandra</li>
        </ul>
    </ul>
```
---
> 4. link

```HTML
<fieldset>
        <legend><h1>Link</h1></legend>
    <a href="https://google.com" target="_blank">Google</a>
</fieldset>
<br><br>
```
---
>5. Design the form
```HTML
<fieldset>
    <form action="about.html" method="post">
       <h1 style="color:white;background-color:rgb(255, 47, 47);">Yes! I want to subscribe to Mag-o-zine</h1>
       <label for="">First Name</label>
       <input type="text" name="fname">
       <label for="">Last Name</label>
       <input type="text" name="lname">
       <br><br>
       <label for="">Address</label>
       <input type="text" name="Address" size="250">
       <br><br>
       <label for="">City</label>
       <input type="text" name="City">
       <label for="">State</label>
       <input type="text" name="State">
       <label for="">Zip</label>
       <input type="text" name="Zip">
       <br><br>
       <label>subscribe for:</label>
       <input type="radio" name="exp">
       <label>1 Year($19.95)</label>
       <input type="radio" name="exp">
       <label>2 Year($35.00)</label>
       <br><br>
       <label>send me more information about:</label>
       <input type="checkbox">Computer - Mag-o-zine 
       <input type="checkbox">Fishing-Zine
       <input type="checkbox">Cat-O-zine
    </form>
</fieldset>
<br></br>
```

> 6. Design a table
```HTML
    <fieldset>
    <table>
       <caption>Health chart</caption>
       <tr>
        <td rowspan="2">State of Health</td>
        <td colspan="2">Fasting Value</td>        
        <td>After Eating</td>        
       </tr>
       <tr>
        <!-- <td></td> -->
        <td>Minimum</td>        
        <td>Maximum</td>  
        <td>2 hours after eating</td>      
       </tr>

       <tr>
        <td>Healthy</td>
        <td>70</td>
        <td>100</td>
        <td>Less than 140</td>
       </tr>
          
       <tr>
        <td>Pre-Diabets</td>
        <td>101</td>
        <td>126</td>
        <td>140 to 200</td>
       </tr>

       <tr>
       <td>Diabets</td>
       <td>More than 126</td>
        <td>N/A</td>
        <td>More than 200</td>
       </tr>
    </table>
    </fieldset>
    <br><br>
```
> 7. In your, HTML page add "HTML & CSS is awesome" and Highlight it without using any CSS.
```HTML
<fieldset>
    <ul>
    <mark style="font-size: 60px;">"HTML & CSS is awesome"</mark>
</ul>
</fieldset>
```
