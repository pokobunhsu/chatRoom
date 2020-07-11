function send(){
    let content = document.querySelector("#content").value
    document.querySelector("#chat").innerHTML += `<div style="text-align: right;">${content}</div>`
    document.querySelector("#content").value = ""
}