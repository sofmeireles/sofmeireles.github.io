window.onload = () => {
    const pres = document.getElementById("pres")
    pres.addEventListener('mouseover', function () { showText("pres-text", "seta1") }, false);
    pres.addEventListener('mouseout', function () { hideText("pres-text", "seta1") }, false);

    var past1 = document.getElementById("past1")
    past1.addEventListener("mouseover", function () { showText("past1-text", "seta2") }, false);
    past1.addEventListener("mouseout", function () { hideText("past1-text", "seta2") }, false);

    var past2 = document.getElementById("past2")
    past2.addEventListener("mouseover", function () { showText("past2-text", "seta3") }, false);
    past2.addEventListener("mouseout", function () { hideText("past2-text", "seta3") }, false);


    function showText(id, seta) {
        document.getElementById(id).style.opacity = 1;
        document.getElementById(seta).style.color = "rgb(181, 181, 181)";
    }

    function hideText(id, seta) {
        document.getElementById(id).style.opacity = 0
        document.getElementById(seta).style.color = "white";
    }
}