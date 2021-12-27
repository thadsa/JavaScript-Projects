function My_Best_Function() {
    window.alert("Click ok to get the answer");
    var str = "My favourite color is Black!";
    var result = str.fontcolor("black")
    document.getElementById("Color_Text").innerHTML=result
}
function My_last_Function(){
    x = 5;
    y = 6;
    z = x + y;
    document.getElementById("Total_Text").innerHTML = "The value of z is: " + z;
}