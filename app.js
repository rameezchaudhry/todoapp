var div;
var db=firebase.database().ref('todos'); 
// update from database to todo app
db.on('child_added',function(data){
    // create post div
     div = document.createElement("div");
    main.appendChild(div);
    div.setAttribute("class", "card");
    //para
    p = document.createElement("p");
    div.appendChild(p);
    p.innerText = data.val().post;
    //create edit button and give attribute
    var edit = document.createElement("button");
    edit.innerHTML = "edit"
    edit.setAttribute("class", "edit");
    edit.setAttribute("onclick", "edit()");
    edit.setAttribute("id", data.val().key);
    div.appendChild(edit);//move edit buton into post(div)
    //create delete button  and give attribute
    var deletePost = document.createElement("button");
    deletePost.innerHTML = "x"
    deletePost.setAttribute("class", "delete");
    deletePost.setAttribute("id", data.val().key); // pass key firebase through id
    deletePost.setAttribute("onclick", "del()");
    div.appendChild(deletePost); //move delete buton into post(div)
    
    // console.log(data.val())
})
// on press enter
function run(){
if(event.keyCode==13)
{
    add();
}

}


function add() {
    // create post card and give class
    var post = document.getElementById("post");
    if(post.value!="" && post.value != " ")
    {
    // insert data to database
   var key= db.push().key;
    var todo={
        post:post.value,
        key:key
    }
    db.child(key).set(todo)
    
    /// empty function to empty input of todo after click on add 
    function empty()
    {
    var blur = document.getElementById("post");
    blur.value ="";
    }
    empty();
    }
    else
    {
        alert("Enter value")
    }
}
 
// delete all function to delete all post
function deleteAll() {
    var em = document.getElementById("main");
    em.innerHTML = "";
    db.remove();
}
// edit function to edit post
function edit() { 
    var updateTodo = prompt("Update your todo");
    var edit = event.target
//create object to update database from promt
    var update= {
        key:edit.id,
        post:updateTodo
    }
    db.child(edit.id).set(update);
    //update dom from promt
     edit.previousSibling.innerText = updateTodo;
// console.log(edit.id)
}
// delete funtion to delet the sinlge post
function del() {
     var del = event.target
    del.parentNode.remove()
    db.child(del.id).remove();
}



