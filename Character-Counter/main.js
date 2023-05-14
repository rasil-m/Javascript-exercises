let num=0
function count()
 {
    let text=document.querySelector("textarea").value;
    if(text=="")
    {
        num=0;
    }
    else
    {
        num++;
    }
    document.querySelector("#result").textContent=num;
 }