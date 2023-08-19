//use all the for- each loop to iterate over the data
let obj =[
    {person:"Name 1",age:"2",company:"Guvi"},
    {person:"Name 2",age:"7",company:"Guvi Geek"},
    {person:"Name 3",age:"10",company:"Guvi Geek Networks"}
]

//for
//forEach- ES5 and ES6
//for of
//for in
for(let i=0;i<obj.length;i++)
{
   console.log(
    `Person : ${obj[i].person} 
     age : ${obj[i].age}
     company : ${obj[i].company}
    `);
}

obj.forEach(
    (x)=>{
        console.log(
            `Name : ${x['person']}
             age: ${x['age']}
             company: ${x['company']}
             `
        )
        } 
)

for(let i in obj)
{
    console.log(obj[i].person)
}

for(let i of obj)
{
    console.log(i['age'])
}
