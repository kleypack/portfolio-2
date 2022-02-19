// Modal
let modal = document.querySelector('.modal-bg');

// Images

let img = document.querySelector('.modal-img-trigger');
let modalImg = document.querySelector('.modal-img-content');



function triggerModal() {
	modal.style.display = 'block';
	modalImg.src = this.getAttribute('src');
}

for(var i=0, len = img.length; i < len; i++){
    img[i].addEventListener('click', triggerModal);
}

