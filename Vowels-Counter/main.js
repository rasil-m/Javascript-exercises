const vowels="aeiou";
let count=0
function countVowels()
 {
    let text=document.querySelector("input").value.toLowerCase();

    for(let i=0;i<text.length;i++)
     {
        if(vowels.indexOf(text[i])>-1)
           {
             count++;
           } 
     }
     
     document.querySelector("#number").textContent=count;
     count=0;


 }