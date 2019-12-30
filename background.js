function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "background") {
        if ((x > 445 && x < 677) && (y > 400 && y < 475)) {
            window.location.href = 'first.html';
        }
    }
}