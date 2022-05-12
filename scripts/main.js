// image switcher code
let myPic = document.querySelector('img');
myPic.onclick = function () {
    let mySrc = myPic.getAttribute('src');
    if (mySrc === 'images/sravankowsi.jpeg') {
        myPic.setAttribute('src', 'images/sravan.jpeg');
    } else if (mySrc === 'images/sravan.jpeg') {
        myPic.setAttribute('src', 'images/kowsi.jpeg');
    } else {
        myPic.setAttribute('src', 'images/sravankowsi.jpeg');
    }
}

// show gallery screen
function showGallery() {
    location.href ="gallery.html";
}

// show big day screen
function showBigDay() {
    location.href = "big-day.html";
}

// show home screen
function showHome() {
    location.href = "index.html";
}
