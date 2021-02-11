// Procurar o botão
document.querySelector ("#add-time")
// Quando clicar o botão
.addEventListener ("click", cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos
        //Que campos?
            const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean: true or false, "Node" se refere ao objeto HTML

            //Pegar os campos. Que campos?
            const fields = newFieldContainer.querySelectorAll('input')

           //para cada campo, limpar
           fields.forEach(function(field) {
               //pegar o field do momento e limpe ele
                           field.value = ""
           });
            

    // Colocar na página
        //Onde colocar?
            document.querySelector("#schedule-items").appendChild(newFieldContainer)
}