

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
    }
    else {
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

setInterval(function(){
  switchimage(switchId);
  switchId = switchId == 5 ? 1 : switchId+=1;
}, 2500);

function myFunction(id) {
  var x = document.getElementById("answer" + id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};


hideAll();
document.querySelector('.hide-1').style.display = ('block');
let a = 1;
window.setInterval(() => {
    hideAll();
    if (a > 5) {
        a = 1;
    }
    document.querySelector('.hide-' + a).style.display = ('block');
    a++;
}, 2000);

function hideAll() {
    document.querySelector('.hide-1').style.display = ('none')
    document.querySelector('.hide-2').style.display = ('none')
    document.querySelector('.hide-3').style.display = ('none')
    document.querySelector('.hide-4').style.display = ('none')
    document.querySelector('.hide-5').style.display = ('none')
}