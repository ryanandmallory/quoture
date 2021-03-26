// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const QuoteContainer = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    // Data Structure
    const quoteContainer = {
        quote: [],
        attribution: ''
    }
    // Public methods
    return {
        getItems: function(){
            return quoteContainer.quote;
        },
    }
})();

// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        introDisplay: ".intro-display-container",
        themeImage: ".theme-image",
        btnBegin: ".begin",
        btnNextPage: ".next-page",
        selectBackgroundTheme: ".select-background-theme",
        createQuote: ".create-quote",
        colorCircles: ".color-circles",
        colorPicker: ".color-picker",
        inputColor: ".input-color",
        btnRandom: ".random",
        btnInputColor: ".input-color",
        inputText: "#inputTxt",
        inputAttribute: '#inputAttribution',
        quoteMain: '.quote-main',
        quoteAttribute: '.quote-attribution',
        btnInputNext: '.input-next',
        btnInputNextTwo: '.input-next-two',
        editLayoutQuoteMain: '.edit-layout-quote-main',
        editLayoutQuoteAttribution: '.edit-layout-quote-attribution',
        btnEditLayoutSlide: '.edit-layout-slide-next-btn a',
        btnInputColorAlt: '#inputColorALT',
        sliderFontSize: '#sizeRange',
        radioColorEffect: '.radio-effects',
        fontSelection: '.font-selection',
        btnEditQuote: '.edit-quote',
        alignText: ".align",
        btnArrow: '.arrow',
        btnPreviewQuote: '.preview-quote',
        btnRevealQuote: '.reveal-quote',
        btnNextLayout: '.next-btn-layout',
        btnEditLayout: '.edit-layout-btn',
        btnSaveQuote: '.save-quote-btn',
        btnDownloadImage: '.download-image'
    }
    // Public methods
    return {
        getSelectors: function (){
            return UISelectors;
        },
        revealBackgroundTheme:function() {
            document.querySelector('.select-background-theme').style.display = 'flex'; 
            document.querySelector('.intro-display-container').style.display = 'none'; 
        },
        getThemeImage: function (event) {
            if (event.target.classList.contains('theme-image')){
                let imageTheme;
                let clickedElem = event.target;
                document.querySelectorAll(".theme-image").forEach((image) => {
                    if (clickedElem.alt === 'Abstract'){ imageTheme = 'https://source.unsplash.com/1024x576/?abstract'; }
                    if (clickedElem.alt === 'Animals'){ imageTheme = 'https://source.unsplash.com/1024x576/?animals'; }
                    if (clickedElem.alt === 'Architecture'){ imageTheme = 'https://source.unsplash.com/1024x576/?architecture'; }
                    if (clickedElem.alt === 'Horizon'){ imageTheme = 'https://source.unsplash.com/1024x576/?horizon'; }
                    if (clickedElem.alt === 'Nature'){ imageTheme = 'https://source.unsplash.com/1024x576/?nature'; }
                    if (clickedElem.alt === 'People'){ imageTheme = 'https://source.unsplash.com/1024x576/?people'; }
                    if (clickedElem.alt === 'Rocks'){ imageTheme = 'https://source.unsplash.com/1024x576/?rocks'; }
                    if (clickedElem.alt === 'Technology'){ imageTheme = 'https://source.unsplash.com/1024x576/?technology'; }
                    if (clickedElem.alt === 'Water'){ imageTheme = 'https://source.unsplash.com/1024x576/?water'; }
                    image.style.border = 'none';
                    clickedElem.style.border = '3px solid #e3e3e3';
                });
                return imageTheme;                
            }    
        },
        getEditThemeImage: function (event) {
            if (event.target.classList.contains('edit-theme-image')){
                let imageTheme;
                let clickedElem = event.target;
                document.querySelectorAll(".edit-theme-image").forEach((image) => {
                    if (clickedElem.alt === 'Abstract'){ imageTheme = 'https://source.unsplash.com/1024x576/?abstract/' + this.randomNum(); }
                    if (clickedElem.alt === 'Animals'){ imageTheme = 'https://source.unsplash.com/1024x576/?animals/' + this.randomNum(); }
                    if (clickedElem.alt === 'Architecture'){ imageTheme = 'https://source.unsplash.com/1024x576/?architecture/' + this.randomNum(); }
                    if (clickedElem.alt === 'Horizon'){ imageTheme = 'https://source.unsplash.com/1024x576/?horizon/' + this.randomNum(); }
                    if (clickedElem.alt === 'Nature'){ imageTheme = 'https://source.unsplash.com/1024x576/?nature/' + this.randomNum(); }
                    if (clickedElem.alt === 'People'){ imageTheme = 'https://source.unsplash.com/1024x576/?people/' + this.randomNum(); }
                    if (clickedElem.alt === 'Rocks'){ imageTheme = 'https://source.unsplash.com/1024x576/?rocks/' + + this.randomNum(); }
                    if (clickedElem.alt === 'Technology'){ imageTheme = 'https://source.unsplash.com/1024x576/?technology/' + + this.randomNum(); }
                    if (clickedElem.alt === 'Water'){ imageTheme = 'https://source.unsplash.com/1024x576/?water/' + this.randomNum(); }
                    image.style.border = 'none';
                    clickedElem.style.border = '3px solid #e3e3e3';
                });
                return imageTheme;                
            }
        },
        getThemeColor: function (event) {
            let themeHex;
            if (event.target.classList.contains('color-circles')){
                document.querySelectorAll(UISelectors.colorCircles).forEach((colorName) => {
                    let clickedElem = event.target;
                    colorName.style.border = 'none';
                    colorName.style.width = '65px';
                    colorName.style.height = '65px';
                    clickedElem.style.width = '60px';
                    clickedElem.style.height = '60px';
                    clickedElem.style.border = '3px solid #e3e3e3';
                    themeHex =  clickedElem.dataset.hex;
                    document.querySelector(UISelectors.colorPicker).style.background = themeHex;
                    document.querySelector(UISelectors.inputColor).value = themeHex; 
                });
            }
            return themeHex;
        },
        revealCreateQuote: function() {
            let themeColor = document.querySelector('.color-picker').style.background;
            if (themeColor == ''){
                themeColor = document.querySelector('.color-picker').style.background = 'rgb(11,67,142)';
            }
            function rgbToHex(rgb) {
                let sep = rgb.indexOf(",") > -1 ? "," : " ";
                rgb = rgb.substr(4).split(")")[0].split(sep);
                let r = (+rgb[0]).toString(16),
                    g = (+rgb[1]).toString(16),
                    b = (+rgb[2]).toString(16);
                if (r.length == 1)
                    r = "0" + r;
                if (g.length == 1)
                    g = "0" + g;
                if (b.length == 1)
                    b = "0" + b;
                return "#" + r + g + b;
            }
            if (document.querySelector('.edit-layout-quote-image').src == null){
                document.querySelector('.edit-layout-quote-image-img').src = 'https://source.unsplash.com/1024x576/?nature';
            }
            themeColor = rgbToHex(themeColor);
            document.querySelector('.create-quote').style.display = 'flex';
            document.querySelector('.select-background-theme').style.display = 'none';
            document.querySelector('.quote-overlay').style.background = themeColor;
            document.querySelector('.edit-layout-quote-image-overlay').style.background = themeColor;
            document.querySelector('#inputColorALT').value = themeColor;
        },
        randomNum: function(){
            let random = Math.floor(Math.random() * 255);
            return random;
        },
        revealRandomColor: function() {
            let convertRBGToHexOne = UICtrl.randomNum();
		    let convertRBGToHexTwo = UICtrl.randomNum();
		    let convertRBGToHexThree = UICtrl.randomNum();
            let convertRBGtoHexFinal;
            document.querySelectorAll(UISelectors.colorCircles).forEach((colorName) => {
                colorName.style.border = 'none';            
            });
            convertRBGtoHexFinal = rgbToHex(parseInt(convertRBGToHexOne), parseInt(convertRBGToHexTwo), parseInt(convertRBGToHexThree));
            function componentToHex(c) {
                let hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            function rgbToHex(r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
            document.querySelector('.color-picker').style.background = convertRBGtoHexFinal;
            document.querySelector('.input-color').value = convertRBGtoHexFinal;
        },
        revealInputColor: function () {
            let inputValue;
            inputValue = document.querySelector('.input-color').value;
            document.querySelector('.color-picker').style.background = inputValue;
            document.querySelectorAll(UISelectors.colorCircles).forEach((colorName) => {
                colorName.style.border = 'none';            
            });
        },
        getInputText: function (event) {
            let quoteInput = document.querySelector('#inputTxt');
            let quoteAttribute = document.querySelector('#inputAttribution');
            if (event.target.matches('#inputTxt')) {
                return quoteInput.value;
            }
            if (event.target.matches('#inputAttribution')) {
                return quoteAttribute.value;
            }
        },
        revealQuoteAttribute: function () {
            if (document.querySelector('#inputTxt').value === ''){
                document.querySelector('.input-quote-error').style.display = 'flex';
            } else {
                document.querySelector('.input-quote-error').style.display = 'none';
                document.querySelector('.input-quote-wrapper input:last-of-type').style.display = 'block';
                document.querySelector('.input-quote-wrapper input').style.display = 'none';
                document.querySelector('.input-next').style.display = 'none';
                document.querySelector('.input-next-two').style.display = 'block';
            }
        },
        revealEditLayout: function () {
            let tempImage;
            document.querySelector('.create-quote').style.display = 'none';
            document.querySelector('.edit-layout').style.display = 'flex';
            tempImage = document.querySelector('.main-quote-image').src;
            document.querySelector('.edit-layout-quote-image-img').src = tempImage;
        },
        advanceSlide: function () {
            const activeSlides = document.querySelectorAll('.active');
            const slides = document.querySelectorAll('.slide');
            for (var y = 0; y < slides.length; y++){
                for (var i = 0; i < slides.length; i++){
                    if (slides[slides.length - 1] !== activeSlides[2]){
                        activeSlides[0].classList.remove('active');
                        activeSlides[1].nextElementSibling.classList.add('active');
                        activeSlides[2].nextElementSibling.classList.add('active');
                    } else {
                        activeSlides[0].classList.remove('active');
                        activeSlides[1].classList.remove('active');
                        activeSlides[2].classList.remove('active');
    
                        slides[0].classList.add('slide', 'active');
                        slides[1].classList.add('slide', 'active');
                        slides[2].classList.add('slide', 'active');
                    }
                }
            }
        },
        editInputColor: function () {
            let editColor = document.querySelector('#inputColorALT').value;
            document.querySelector('.edit-layout-quote-image-overlay').style.background = editColor;
            document.querySelector('.quote-overlay').style.background = editColor;
        },
        editFontSize: function () {
            let fontSizeVal = document.querySelector('#sizeRange').value;
		    document.querySelector('.edit-layout-quote-main').style.fontSize = fontSizeVal + 'px';
            fontSizeVal = parseInt(Math.round(fontSizeVal * .25)) + parseInt(fontSizeVal);
		    document.querySelector('.quote-main').style.fontSize =  fontSizeVal + 'px';
        },
        editChangeEffect: function (event) {
            const editChangeEffectListener = function (effect){
                document.querySelector('.edit-layout-quote-image-overlay').style.mixBlendMode = effect;
                document.querySelector('.quote-overlay').style.mixBlendMode = effect;
            }
            if (event.target.classList.contains('radioColor')){ editChangeEffectListener('color') }
            if (event.target.classList.contains('radioHue')){ editChangeEffectListener('hue') }
            if (event.target.classList.contains('radioScreen')){ editChangeEffectListener('screen') }
            if (event.target.classList.contains('radioBurn')){ editChangeEffectListener('color-burn') }
            if (event.target.classList.contains('radioIntensify')){ editChangeEffectListener('saturation') }
            if (event.target.classList.contains('radioSoft')){ editChangeEffectListener('soft-light') } 
        },
        editChangeFont: function (event) {
            const editChangeFontListener = function (font){
                document.querySelector('.edit-layout-quote-main').style.fontFamily = font;
                document.querySelector('.quote-main').style.fontFamily = font;
            }
            if (event.target.classList.contains('segoeUIFont')){ editChangeFontListener("Segoe UI, Tahoma, Verdana, sans-serif") }
            if (event.target.classList.contains('montserratFont')){ editChangeFontListener("Montserrat, Tahoma, Verdana, sans-serif") }
            if (event.target.classList.contains('openSansFont')){ editChangeFontListener("Open Sans, Tahoma, Verdana, sans-serif") }
            if (event.target.classList.contains('merriweatherFont')){ editChangeFontListener("Merriweather, serif") }
            if (event.target.classList.contains('libreBaskervilleFont')){ editChangeFontListener("Libre Baskerville, serif") }
        },
        revealCreateQuoteEdit: function (){
            let tempImage;
            document.querySelector('.create-quote').style.display = 'flex';
            document.querySelector('.edit-layout').style.display = 'none';
            document.querySelector('#inputAttribution').style.display = 'none';
            document.querySelector('#inputTxt').style.display = 'block';
            document.querySelector('.input-next').style.display = 'block';
            document.querySelector('.input-next-two').style.display = 'none';
            tempImage = document.querySelector('.edit-layout-quote-image-img').src;
            document.querySelector('.main-quote-image').src = tempImage;

        },
        editChangeAlignment: function (event){
            const editChangeAlignListener = function (align){
                document.querySelector('.edit-layout-quote-main').style.textAlign = align;
                document.querySelector('.edit-layout-quote-attribution').style.textAlign = align;
                document.querySelector('.quote-main').style.textAlign = align;
                document.querySelector('.quote-attribution').style.textAlign = align;
            }
            if (event.target.classList.contains('left')){ editChangeAlignListener('left') }
            if (event.target.classList.contains('center')){ editChangeAlignListener('center') }
            if (event.target.classList.contains('right')){ editChangeAlignListener('right') }
        },
        editChangePosition: function (event) {
            if (document.querySelector('.edit-layout').style.display == 'flex'){
                const editQuoteWrapper = document.querySelector('.edit-layout-quote-container');
                const quoteContainer = document.querySelector('.quote-container');
                let top = parseInt(window.getComputedStyle(editQuoteWrapper).getPropertyValue('top'));
                let left = parseInt(window.getComputedStyle(editQuoteWrapper).getPropertyValue('left'));
                let code = event.key;
                let tempVal;
                const runPositionAnimation = function(position) {
                    position.style.background = 'url(../img/arrow-fill.svg) top left no-repeat';
                    setTimeout(function(){ position.style.background = 'url(../img/arrow.svg) top left no-repeat'; }, 250);
                }
                if (code == 'ArrowUp' || event.target.classList.contains('up')) {
                    const postionWrapper = document.querySelector('.position-wrapper .up');
		            top = top - 5 + 'px';
                    tempVal = parseInt(top) + parseInt(top)*.25 + 'px';
                    editQuoteWrapper.style.top = top;
		            quoteContainer.style.top = tempVal;
                    runPositionAnimation(postionWrapper);
                }
                if (code == 'ArrowDown' || event.target.classList.contains('down')) {
                    const postionWrapper = document.querySelector('.position-wrapper .down');
		            top = top + 5 + 'px';
                    tempVal = parseInt(top) + parseInt(top)*.25 + 'px';
		            editQuoteWrapper.style.top = top;
		            quoteContainer.style.top = tempVal;
                    runPositionAnimation(postionWrapper);
                }
                if (code == 'ArrowLeft'  || event.target.classList.contains('left')) {
                    const postionWrapper = document.querySelector('.position-wrapper .left');
		            left = left - 5 + 'px';
                    tempVal = parseInt(left) + parseInt(left)*.25 + 'px';
		            editQuoteWrapper.style.left = left;
		            quoteContainer.style.left = tempVal;
                    runPositionAnimation(postionWrapper);
                }
                if (code == 'ArrowRight'  || event.target.classList.contains('right')) {
                    const postionWrapper = document.querySelector('.position-wrapper .right');
		            left = left + 5 + 'px';
                    tempVal = parseInt(left) + parseInt(left)*.25 + 'px';
		            editQuoteWrapper.style.left = left;
		            quoteContainer.style.left = tempVal;
                    runPositionAnimation(postionWrapper);
                }
            }
        },
        allowPreviewQuote: function () {
            document.querySelector('.input-quote-wrapper').style.display = 'none';
            document.querySelector('.inspiration-link').style.display = 'none';
            if (document.querySelector('.preview-quote')){
                let previewDiv = document.querySelector('.preview-quote');
                let previewPara = document.querySelector('.preview-quote-para');
                const para = document.createElement('p');
                const text = document.createTextNode("Reveal");
                previewPara.remove();
                para.appendChild(text);
                para.setAttribute('class', 'reveal-quote-para');
                previewDiv.appendChild(para);
                document.querySelector('.preview-quote').setAttribute('class', 'reveal-quote');
            }
        },
        allowEditQuote: function (event) {
            document.querySelector('.input-quote-wrapper').style.display = 'flex';
            document.querySelector('.inspiration-link').style.display = 'block';
            if (event.target.closest('.reveal-quote')){
                document.querySelector('.reveal-quote-para').remove();
                const para = document.createElement('p');
                const text = document.createTextNode("Preview");
                para.appendChild(text);
                para.setAttribute('class', 'preview-quote-para');
                document.querySelector('.reveal-quote').appendChild(para);
                document.querySelector('.reveal-quote').setAttribute('class', 'preview-quote');
            }
        },
        revealFinalQuote: function (){
            document.querySelector('.edit-layout').style.display = 'none';
            document.querySelector('.create-quote').style.display = 'flex';
            document.querySelector('.input-quote-error').style.display = 'none';
            document.querySelector('.input-quote-wrapper').style.display = 'none';
            document.querySelector('.inspiration-link').style.display = 'none';
            document.querySelector('.preview-quote').style.display = 'none';
            document.querySelector('.buttons-wrapper').style.display = 'flex';
        },
        saveQuoteModal: function (){
            document.querySelector('.final-quote-overlay-message').style.display = 'flex';
            document.querySelector('.final-quote-message').style.display = 'flex';
        },
        exitQuoteModal: function (){
            document.querySelector('.final-quote-overlay-message').style.display = 'none';
            document.querySelector('.final-quote-message').style.display = 'none';
        }
    }
})();

//App Controller — the starting point
const App = (function(ItemCtrl, UICtrl){

    const UISelectors = UICtrl.getSelectors();
    // Select Theme Color
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.colorCircles)) {
            document.querySelector('.quote-overlay').style.background = UICtrl.getThemeColor(event);
            document.querySelector('.edit-layout-quote-image-overlay').style.background = UICtrl.getThemeColor(event);
        }
    });
    // Select Theme Image
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.themeImage)) {
            document.querySelector('.main-quote-image').src = UICtrl.getThemeImage(event);
            document.querySelector('.edit-layout-quote-image-img').src = UICtrl.getThemeImage(event);
        }
    });
    // Select Edit Theme Image
    document.addEventListener('click', function (event) {
        if (event.target.closest(".edit-layout-slide")) {
            document.querySelector('.main-quote-image').src = UICtrl.getEditThemeImage(event);
            document.querySelector('.edit-layout-quote-image-img').src = UICtrl.getEditThemeImage(event);
        }
    });
    // Type in Quote and Attribution
    document.addEventListener('keyup', function (event) {
        if (event.target.closest(UISelectors.inputText)) {
            document.querySelector(UISelectors.quoteMain).innerHTML = UICtrl.getInputText(event);
            document.querySelector(UISelectors.editLayoutQuoteMain).innerHTML = UICtrl.getInputText(event);
        }
        if (event.target.closest(UISelectors.inputAttribute)) {
            document.querySelector(UISelectors.quoteAttribute).innerHTML = "— " + UICtrl.getInputText(event);
            document.querySelector(UISelectors.editLayoutQuoteAttribution).innerHTML = "— " + UICtrl.getInputText(event);
        }
    });
    // Edit layout radio buttons
    document.addEventListener('input', function (event) {
        if (event.target.closest(UISelectors.radioColorEffect)) {
            UICtrl.editChangeEffect(event);
        };
    });
    // Edit layout change font
    document.addEventListener('input', function (event) {
        if (event.target.closest(UISelectors.fontSelection)) {
            UICtrl.editChangeFont(event);
        };
    });
    // Edit layout alignment font
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.alignText)) {
            UICtrl.editChangeAlignment(event);
        };
    });
    // Edit layout position arrow keys
    document.addEventListener('keydown', function (event) {
        UICtrl.editChangePosition(event);
    });
    // Edit layout position arrow buttons
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.btnArrow)) {
            UICtrl.editChangePosition(event);
        };
    });
    // Reveal edit mode
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.btnRevealQuote)) {
            console.log("Click button call allowEditQuote method");
            UICtrl.allowEditQuote(event);
        };
    });
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.btnPreviewQuote)) {
            console.log("Click button call allowPreviewQuote method");
            UICtrl.allowPreviewQuote();
        };
    });
    // Load Event Listeners
    const loadEventListeners = function () {
        document.querySelector(UISelectors.btnBegin).addEventListener('click', UICtrl.revealBackgroundTheme);
        document.querySelector(UISelectors.btnNextPage).addEventListener('click', UICtrl.revealCreateQuote);
        document.querySelector(UISelectors.btnRandom).addEventListener('click', UICtrl.revealRandomColor);
        document.querySelector(UISelectors.btnInputColor).addEventListener('input', UICtrl.revealInputColor);
        document.querySelector(UISelectors.btnInputNext).addEventListener('click', UICtrl.revealQuoteAttribute);
        document.querySelector(UISelectors.btnInputNextTwo).addEventListener('click', UICtrl.revealEditLayout);
        document.querySelector(UISelectors.btnEditLayoutSlide).addEventListener('click', UICtrl.advanceSlide);
        document.querySelector(UISelectors.btnInputColorAlt).addEventListener('input', UICtrl.editInputColor); 
        document.querySelector(UISelectors.sliderFontSize).addEventListener('input', UICtrl.editFontSize);
        document.querySelector(UISelectors.btnEditQuote).addEventListener('click', UICtrl.revealCreateQuoteEdit);
        document.querySelector(UISelectors.btnNextLayout).addEventListener('click', UICtrl.revealFinalQuote);
        document.querySelector(UISelectors.btnEditLayout).addEventListener('click', UICtrl.revealEditLayout);
        document.querySelector(UISelectors.btnSaveQuote).addEventListener('click', UICtrl.saveQuoteModal);
        document.querySelector(UISelectors.btnDownloadImage).addEventListener('click', UICtrl.exitQuoteModal);
    }
    // Public methods
    return {
        // Fetch items from data structure or Items Controller
        init: function(){
            //Set the initial state
            const items = ItemCtrl.getItems();
            // Load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);
App.init();

