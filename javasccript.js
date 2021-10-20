function off(element){
    if(element.innerText == "LogIn"){
        element.innerText = "LogOut"
    }
    else{ 
        element.innerText ="LogIn"
    }
}
function hide(element){
    element.remove()
}