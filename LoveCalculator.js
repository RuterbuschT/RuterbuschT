// var name1 = prompt("What is your name?: ")
// var name2 = prompt("What is your lover's name?: ")

document.getElementById("startbutton").onclick = function(){
    if(document.getElementsByClassName("person1").value !== " " || document.getElementsByClassName("person2").value !== " "){
        var love_score = Math.random() * 100;
        love_score = Math.floor(love_score) + 1;

        document.getElementById("results").innerHTML = love_score + "%"
    } else{
        document.getElementById("results").innerHTML = "Please input names!"
    }

}