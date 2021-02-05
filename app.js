var div;
function add() {
    // create post card and give class
    var post = document.getElementById("post").value;
     div = document.createElement("div");
    main.appendChild(div);
    div.setAttribute("class", "card");
    //para
    p = document.createElement("p");
    div.appendChild(p);
    p.innerText = post;
    //create edit button and give attribute
    var edit = document.createElement("button");
    edit.innerHTML = "edit"
    edit.setAttribute("class", "edit");
    edit.setAttribute("onclick", "edit()");
    div.appendChild(edit);//move edit buton into post(div)
    //create delete button  and give attribute
    var deletePost = document.createElement("button");
    deletePost.innerHTML = "x"
    deletePost.setAttribute("class", "delete");
    deletePost.setAttribute("onclick", "del()");
    div.appendChild(deletePost); //move delete buton into post(div)
    
    /// empty function to empty input of todo after click on add 
    function empty()
    {
    var blur = document.getElementById("post");
    blur.value = " ";
    }
    empty();
}
 
// delete all function to delete all post
function deleteAll() {
    var em = document.getElementById("main");
    em.innerHTML = " ";
}
// edit function to edit post
function edit() { 
    var updateTodo = prompt("Update your todo");
    var del = event.target
    del.previousSibling.innerText = updateTodo;
}
// delete funtion to delet the sinlge post
function del() {
    var del = event.target
    del.parentNode.remove()
    
}



