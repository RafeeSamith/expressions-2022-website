if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {  
    var pastel = document.getElementsByClassName("section-pastel")[0];
    var header = document.getElementsByTagName("header")[0];

    function scrollery() {
        let foo = pastel.getBoundingClientRect().bottom
        console.log(foo)
        if (foo < 0) {
            header.style.opacity = 100
        } else {
            header.style.opacity = 0
        }
    }

    document.addEventListener('scroll', scrollery)
}