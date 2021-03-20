function számos() {
    var divnagy = document.createElement("div");
    divnagy.id = "divnagy";
    document.body.appendChild(divnagy);
    for (var x = 0; x < 10; x++) {
        var div = document.createElement("div");
        div.innerHTML = x + 1;
        div.classList.add("egymás_mellé");
        div.style.backgroundColor = "rgb(100, 100, 100)";
        divnagy.appendChild(div);
    }

}