let images = ["assets/images/features/invoice-web.png", "assets/images/features/birthday-web.png", "assets/images/features/sms-web.png", "assets/images/features/booking-web.png", "assets/images/features/extras-web.png"];
var switchId = 1;

function swapButtonImage(btn, type) {
    let src = btn.src;
    src = type == "activate" ? src.replace(".png", "-blue.png") : src.replace("-blue.png", ".png");
    btn.src = src;
}

function removeDisabled(btnParent) {
    btnParent.classList.remove("disabled");
}

function updateAllButtons(id) {
    for (i = 1; i <= 5; i++) {
        let btnId = ".btn" + i;
        let btnImgId = ".btnImage" + i;
        let btnParent = document.querySelector(btnId);
        let btn = document.querySelector(btnImgId);
        if (id == i) {
            btnParent.classList.remove("disabled");
            swapButtonImage(btn, "deactivate");
            swapButtonImage(btn, "activate");
        } else {
            btnParent.classList.add("disabled");
            swapButtonImage(btn, "deactivate");
        }

    }
}

function switchimage(id) {
    switchId = id
    let x = document.getElementById("answerr").src = images[id - 1];
    updateAllButtons(id);
};

setInterval(function() {
    switchimage(switchId);
    switchId = switchId == 5 ? 1 : switchId += 1;
}, 2500);

function myFunction(id) {
    var x = document.getElementById("answer" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Smooth Scroll

document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('[href^="#"]');
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", scrollHandler);
    }

    function scrollHandler(event) {
        event.preventDefault();

        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var targetElementId = this.getAttribute("href").split("#")[1];
        var goToPosition = document.getElementById(targetElementId).offsetTop;
        var distance = goToPosition - currentPosition;

        var totalStep = 40;
        var currentStep = 0;
        var intervalTime = 10;

        var scrollby = distance / totalStep;

        var isScrollElementBody = document.scrollingElement && document.scrollingElement.tagName == "BODY";

        var interval = setInterval(function() {
            if (currentStep < totalStep) {
                isScrollElementBody ? (document.body.scrollTop += scrollby) : (document.documentElement.scrollTop += scrollby);
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, intervalTime);
    }
});