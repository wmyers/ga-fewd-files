//see https://developer.mozilla.org/en/docs/Web/API/Element/classList
//see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
        } else {
            if (header.classList.contains("smaller")) {
                header.classList.remove("smaller");
            }
        }
    });
}

//needs to be done after the page has loaded
window.onload = init();
