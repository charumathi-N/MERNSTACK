Find the culprits and nail them — debugging javascript
# Once you are familiar with basic syntax you can reinforce your understanding by solving these simple snippets
__1.Find the culprit__
```HTML
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>
```
__Fix__
> index.html
```HTML
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"> </script>
 Whats the error in this ?
</body>
</html>
```
>script.js

 >alert( “I’m JavaScript!");


---
__2.Find the culprit__
```HTML
let admin=9, fname=10.5; 
fname = "Hey";
lname = "there"
admin = fname+lname;
alert( admin );
```
>Output: Hey there
---
__3.Fix the below to print guvi geek__

```HTML
let fname=10.5; 
fname = "Guvi";
lname = "geek";
let name = fname+lname;
alert( 'hello ${name}' );
```

---




