// var item = document.getElementById("Item").value;

for(i = 0; i < document.querySelectorAll(".typeOfGrocery").length; i++){
    document.querySelectorAll(".typeOfGrocery")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        var item = document.getElementById("Item").value;

      

        switch (buttonInnerHTML) {
            case "Meats":
                var node = document.createElement("li")
                var itemnode = document.createTextNode(`${item}`);
                node.appendChild(itemnode)
                document.getElementById("meatList").appendChild(node)
                var item = document.getElementById("Item").value = "";
                break;
        
                case "Pantry":
                    var item = document.getElementById("Item").value;
                    var node = document.createElement("li")
                    var itemnode = document.createTextNode(`${item}`);
                    node.appendChild(itemnode)
                    document.getElementById("pantryList").appendChild(node)
                    var item = document.getElementById("Item").value = "";
                    
                    break;

                    case "Cold":
                        var node = document.createElement("li")
                        var itemnode = document.createTextNode(`${item}`);
                        node.appendChild(itemnode)
                        document.getElementById("coldList").appendChild(node)
                        var item = document.getElementById("Item").value = "";
                        break;

            default: alert("input an item!")
                break;
        }

       
    })
  
    
}

// function addItemToList(item){
//     var node = document.createElement("li")
//     var itemnode = document.createTextNode(`${item}`);
//     node.appendChild(itemnode)
// }


