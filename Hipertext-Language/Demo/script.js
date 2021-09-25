// Select the HTML elements that we need
var input = document.getElementById("tarea")
var boton = document.getElementById("boton")
var tareas = document.querySelector("ul")

// When the button is clicked
boton.addEventListener("click", function(){
    // Get what is written in the <input>
    var tarea = input.value

    // Add it as a new item <li>
    var li = document.createElement("li")
    li.textContent = tarea
    tareas.appendChild(li)
})
/*<!-- Ghost comment-->*/