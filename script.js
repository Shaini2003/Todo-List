var add=document.getElementById("addToDo");
var input=document.getElementById("inputField");
var todoContainer=document.getElementById("todoContainer");

add.addEventListener('click,addItem');
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
    const item_value=input.item_value;
}