
function copy()
 {
    document.querySelector("#copyText").select();
    navigator.clipboard.writeText(document.querySelector("#copyText").value);
 }