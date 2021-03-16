window.onload = function(){
    document.querySelector('video').play();
}

document.addEventListener('click', function (event) {
	if (event.target.classList.contains('theme-image')){
        document.querySelectorAll('.theme-image').forEach((image) => {
            image.style.border = 'none';
            let clickedElem = event.target;
            clickedElem.style.border = '3px solid #e3e3e3';
            themeImage =  clickedElem.alt;
            console.log('Theme name ' + themeImage);
        });
    }
}, false);

