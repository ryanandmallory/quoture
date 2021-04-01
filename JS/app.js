// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Quote = function(quote, name, category){
        this.quote = quote;
        this.name = name;
        this.category = category;
    }
    
    // Public methods
    return {
        getItems: function(){
            return Quote.quote;
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
        btnDownloadImage: '.download-image',
        btnNeedInspiration: '.inspiration-link',
        btnQuoteSlider: '.btn-quote-slider',
        quoteCategories: '.quote-categories',
        useThisQuote: '.use-this-quote',
        btnFinalQuoteDownload: '.final-quote-download-btn'
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
                    if (clickedElem.alt === 'Abstract'){ imageTheme = '../img/quote-imgs/abstract/abstract-1.jpg'; }
                    if (clickedElem.alt === 'Animals'){ imageTheme = '../img/quote-imgs/animals/animals-1.jpg'; }
                    if (clickedElem.alt === 'Architecture'){ imageTheme = '../img/quote-imgs/architecture/architecture-1.jpg'; }
                    if (clickedElem.alt === 'Horizon'){ imageTheme = '../img/quote-imgs/horizon/horizon-1.jpg'; }
                    if (clickedElem.alt === 'Nature'){ imageTheme = '../img/quote-imgs/nature/nature-1.jpg'; }
                    if (clickedElem.alt === 'People'){ imageTheme = '../img/quote-imgs/people/people-1.jpg'; }
                    if (clickedElem.alt === 'Rocks'){ imageTheme = '../img/quote-imgs/rocks/rocks-1.jpg'; }
                    if (clickedElem.alt === 'Technology'){ imageTheme = '../img/quote-imgs/technology/technology-1.jpg'; }
                    if (clickedElem.alt === 'Water'){ imageTheme = '../img/quote-imgs/water/water-1.jpg'; }
                    image.style.border = 'none';
                    clickedElem.style.border = '3px solid #e3e3e3';
                });
                return imageTheme;                
            }    
        },
        getEditThemeImage: function (event) {
            if (event.target.classList.contains('edit-theme-image')){
                let randomImage = function () {
                    let random = Math.floor(Math.random() * 5) + 1;
                    return random;
                }
                let imageTheme;
                let clickedElem = event.target;
                document.querySelectorAll(".edit-theme-image").forEach((image) => {
                    if (clickedElem.alt === 'Abstract'){ imageTheme = '../img/quote-imgs/abstract/abstract-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Animals'){ imageTheme = '../img/quote-imgs/animals/animals-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Architecture'){ imageTheme = '../img/quote-imgs/architecture/architecture-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Horizon'){ imageTheme = '../img/quote-imgs/horizon/horizon-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Nature'){ imageTheme = '../img/quote-imgs/nature/nature-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'People'){ imageTheme = '../img/quote-imgs/people/people-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Rocks'){ imageTheme = '../img/quote-imgs/rocks/rocks-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Technology'){ imageTheme = '../img/quote-imgs/technology/technology-' + randomImage() + '.jpg' }
                    if (clickedElem.alt === 'Water'){ imageTheme = '../img/quote-imgs/water/water-' + randomImage() + '.jpg' }
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
            document.querySelector('.buttons-wrapper').style.display = 'none';
            document.querySelector('.preview-quote').style.display = 'block';
            document.querySelector('.inspiration-link').style.display = 'block';
            document.querySelector('#inputAttribution').style.display = 'none';
            document.querySelector('#inputTxt').style.display = 'block';
            document.querySelector('.input-next').style.display = 'block';
            document.querySelector('.input-next-two').style.display = 'none';
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
            document.querySelector('#sizeRange').max = "50"
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
            document.querySelector('.input-quote-wrapper').style.display = 'flex';
            document.querySelector('.input-next-two').style.display = 'none';
            tempImage = document.querySelector('.edit-layout-quote-image-img').src;
            document.querySelector('.main-quote-image').src = tempImage;
            if (document.querySelector('.edit-layout-quote-attribution').textContent === ''){
                document.querySelector('.quote-attribution').textContent = '';
            }
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
                    if (parseInt(tempVal) >= 165){
                        editQuoteWrapper.style.top = top;
                        quoteContainer.style.top = tempVal;
                        runPositionAnimation(postionWrapper);
                    } else { return } 
                }
                if (code == 'ArrowDown' || event.target.classList.contains('down')) {
                    const postionWrapper = document.querySelector('.position-wrapper .down');
		            top = top + 5 + 'px';
                    tempVal = parseInt(top) + parseInt(top)*.25 + 'px';
                    if (parseInt(tempVal) <= 363){
                        editQuoteWrapper.style.top = top;
                        quoteContainer.style.top = tempVal;
                        runPositionAnimation(postionWrapper);
                    } else { return } 
                }
                if (code == 'ArrowLeft'  || event.target.classList.contains('left')) {
                    const postionWrapper = document.querySelector('.position-wrapper .left');
		            left = left - 5 + 'px';
                    tempVal = parseInt(left) + parseInt(left)*.25 + 'px';
                    if (parseInt(tempVal) >= 300){
                        editQuoteWrapper.style.left = left;
                        quoteContainer.style.left = tempVal;
                        runPositionAnimation(postionWrapper);
                        console.log("Left:" + tempVal)
                    } else { return } 
                }
                if (code == 'ArrowRight'  || event.target.classList.contains('right')) {
                    const postionWrapper = document.querySelector('.position-wrapper .right');
		            left = left + 5 + 'px';
                    tempVal = parseInt(left) + parseInt(left)*.25 + 'px';
                    if (parseInt(tempVal) <= 800){
                        editQuoteWrapper.style.left = left;
                        quoteContainer.style.left = tempVal;
                        runPositionAnimation(postionWrapper);
                        console.log("Right:" + tempVal)
                    } else { return } 
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
            let tempImg;
            tempImg = document.querySelector('.edit-layout-quote-image-img').src;
            document.querySelector('.main-quote-image').src = tempImg;
            document.querySelector('.edit-layout').style.display = 'none';
            document.querySelector('.create-quote').style.display = 'flex';
            document.querySelector('.input-quote-error').style.display = 'none';
            document.querySelector('.input-quote-wrapper').style.display = 'none';
            document.querySelector('.inspiration-link').style.display = 'none';
            document.querySelector('.preview-quote').style.display = 'none';
            document.querySelector('.buttons-wrapper').style.display = 'flex';
            if (document.querySelector('.edit-layout-quote-attribution').textContent === ''){
                document.querySelector('.quote-attribution').textContent = '';
            }
        },
        saveQuoteModal: function (){
            const quoteColor = document.querySelector('.quote-overlay').style.background;
            let quoteColorHex;
            document.querySelector('.final-quote-overlay-message').style.display = 'flex';
            document.querySelector('.final-quote-message').style.display = 'flex';
            document.querySelector('.quote-overlay').style.display = 'none';
            const findEffectRadio = function() {
                let radios = document.getElementsByName('effects');
                let radioEffect;
                for (let i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        radioEffect = radios[i].id;
                        return radioEffect
                    }
                }
            }
            // HTML2Canvas
            html2canvas(document.getElementById("element-to-print"), {scale: 1, allowTaint : true, removeContainer: false, logging: true, letterRendering: 1, allowTaint: false, useCORS: true, foreignObjectRendering: false }).then(canvas => {
                let ctx = canvas.getContext("2d");
                imagestring = canvas.toDataURL("image/png");
                ctx.globalCompositeOperation = findEffectRadio();
                ctx.fillStyle = quoteColor;
                ctx.fillRect(0, 0, 1600, 1000);
                const link = document.createElement('a');
                link.setAttribute('class', 'final-quote-display-anchor');
                link.appendChild(canvas);
                document.querySelector('.final-quote-display').appendChild(link);
                document.querySelector('.final-quote-display').style.display = 'block';
            });
        },
        exitQuoteModal: function (){
            document.querySelector('.final-quote-overlay-message').style.display = 'none';
            document.querySelector('.final-quote-message').style.display = 'none';
        },
        quoteLibrary: function (){
            document.querySelector('.quote-library').style.display = 'block';
            document.querySelector('.create-quote').style.display = 'none';
        },
        displayCategoryQuote: function (categoryName) {
            fetch('../js/quotes.json').then(response => {
                console.log(response)
                return response.json();
            }).then(data => {
                const activeImgCategoryDisplay = function (selectorElem) {
                    const allImgQuoteIcons = document.querySelectorAll('.quote-categories img');
                    for (let i = 0; i < allImgQuoteIcons.length; i++){
                        allImgQuoteIcons[i].style.background = '#ffffff';
                        allImgQuoteIcons[i].style.borderRadius = 0;
                        allImgQuoteIcons[i].style.filter = 'none';
                    }
                    const imgActive = document.querySelector(selectorElem);
                    imgActive.style.boxSizing = 'border-box';
                    imgActive.style.background = '#e3e3e3';
                    imgActive.style.borderRadius = '100%';
                    imgActive.style.filter = 'drop-shadow(0px 0px 6px rgba(56,24,15,0.25))';
                }
                const runQuoteDisplay = function (categoryElem) {
                    const removeOldCategories = function () {
                        const quoteLibraryText = document.querySelectorAll('.quote-library-txt');
                        const quoteLibraryAttr = document.querySelectorAll('.quote-library-attr');
                        for (var i = 0; i < quoteLibraryText.length; i++){
                            for (var j = 0; j < quoteLibraryAttr.length; j++){
                                quoteLibraryText[i].remove();
                                quoteLibraryAttr[j].remove();
                            }
                        }
                    }
                    removeOldCategories();
                    let quoteElement = data['Quotes'].filter( text => {
                        if (text.category === categoryElem) {
                            return `${text.quote}`;
                        }
                        if (text.category === categoryElem) {
                            return `${text.quote}`;
                        }
                    });
                    for (var j = 0; j < quoteElement.length; j++) {
                        const jsonStringQuote = JSON.stringify(quoteElement[j].quote);
                        const jsonStringAuthor = JSON.stringify(quoteElement[j].author);
                        const outputQuote = `<p class="quote-library-txt"> ${JSON.parse(jsonStringQuote)} </p>`;
                        const outputAuthor = `<p class="quote-library-attr"> ${JSON.parse(jsonStringAuthor)} </p>`;
                        document.querySelector('.quote-library-slide').insertAdjacentHTML('afterbegin', outputAuthor);
                        document.querySelector('.quote-library-slide').insertAdjacentHTML('afterbegin', outputQuote);
                    }
                }
                if (categoryName === 'Spiritual'){
                    runQuoteDisplay('spiritual');
                    activeImgCategoryDisplay('.quote-categories:nth-child(1) img');
                }
                if (categoryName === 'Motivation'){
                    runQuoteDisplay('motivation');
                    activeImgCategoryDisplay('.quote-categories:nth-child(2) img');
                }
                if (categoryName === 'Funny'){
                    runQuoteDisplay('funny');
                    activeImgCategoryDisplay('.quote-categories:nth-child(3) img');
                }
                if (categoryName === 'Famous'){
                    runQuoteDisplay('famous');
                    activeImgCategoryDisplay('.quote-categories:nth-child(4) img');
                }
                if (categoryName === 'Inspiration'){
                    runQuoteDisplay('inspiration');
                    activeImgCategoryDisplay('.quote-categories:nth-child(5) img');
                }                
                const quoteLibraryText = document.querySelectorAll('.quote-library-txt');
                const quoteLibraryAttr = document.querySelectorAll('.quote-library-attr');
                for (var i = 0; i < quoteLibraryText.length; i++){
                    for (var j = 0; j < quoteLibraryAttr.length; j++){
                        quoteLibraryText[0].classList.add('active-quote-libray-txt');
                        quoteLibraryAttr[0].classList.add('active-quote-libray-attr');
                    }
                }
            }).catch ( error => {
                    console.log('Something went wrong, please check your code.');
                    console.error(error);
            });
        },
        quoteCategoriesOnload: function (){
            fetch('../js/quotes.json').then(response => {
                return response.json();
            }).then(data => {
                const runQuoteDisplay = function (categoryElem) {
                    const imgActive = document.querySelector('.quote-categories:nth-child(3) img');
                    imgActive.style.boxSizing = 'border-box';
                    imgActive.style.background = '#e3e3e3';
                    imgActive.style.borderRadius = '100%';
                    imgActive.style.filter = 'drop-shadow(0px 0px 6px rgba(56,24,15,0.25))';
                    let spiritual = data['Quotes'].filter( text => {
                        if (text.category === categoryElem) {
                            return `${text.quote}`;
                        }
                        if (text.category === categoryElem) {
                            return `${text.quote}`;
                        }
                    });
                    for (var j = 0; j < spiritual.length; j++) {
                        const jsonStringQuote = JSON.stringify(spiritual[j].quote);
                        const jsonStringAuthor = JSON.stringify(spiritual[j].author);
                        const outputQuote = `<p class="quote-library-txt"> ${JSON.parse(jsonStringQuote)} </p>`;
                        const outputAuthor = `<p class="quote-library-attr"> ${JSON.parse(jsonStringAuthor)} </p>`;
                        document.querySelector('.quote-library-slide').insertAdjacentHTML('afterbegin', outputAuthor);
                        document.querySelector('.quote-library-slide').insertAdjacentHTML('afterbegin', outputQuote);
                    }
                }
                
                runQuoteDisplay('funny');
                            
                const quoteLibraryText = document.querySelectorAll('.quote-library-txt');
                const quoteLibraryAttr = document.querySelectorAll('.quote-library-attr');
                for (var i = 0; i < quoteLibraryText.length; i++){
                    for (var j = 0; j < quoteLibraryAttr.length; j++){
                        quoteLibraryText[0].classList.add('active-quote-libray-txt');
                        quoteLibraryAttr[0].classList.add('active-quote-libray-attr');
                    }
                }
            }).catch ( error => {
                    console.log('Something went wrong, please check your code.');
                    console.error(error);
            }); 
        },
        displayQuoteSlider: function (event){
            const quoteSlide = document.querySelectorAll('.quote-library-txt');
            const quoteSlideAttr = document.querySelectorAll('.quote-library-attr');
            const quoteSlideActive = document.querySelectorAll('.active-quote-libray-txt');
            const quoteSlideAttrActive = document.querySelectorAll('.active-quote-libray-attr');
            if (event.target.parentElement.classList.contains('quote-next')){
                for (var i = 0; i < quoteSlide.length; i++){
                    for (var x = 0; x < quoteSlideActive.length; x++ ){
                        if (quoteSlide[quoteSlide.length - 1] !== quoteSlideActive[0]){
                            quoteSlideActive[0].nextElementSibling.nextElementSibling.classList.add('active-quote-libray-txt');
                            quoteSlideActive[0].classList.remove('active-quote-libray-txt');
                        } else {
                            quoteSlideActive[0].classList.remove('active-quote-libray-txt');
                            quoteSlide[quoteSlide.length - 1].classList.add('active-quote-libray-txt')
                        }
                    }
                }
                for (var i = 0; i < quoteSlideAttr.length; i++){
                    for (var x = 0; x < quoteSlideAttrActive.length; x++ ){
                        if (quoteSlideAttr[quoteSlideAttr.length - 1] !== quoteSlideAttrActive[0]){
                            quoteSlideAttrActive[0].nextElementSibling.nextElementSibling.classList.add('active-quote-libray-attr');
                            quoteSlideAttrActive[0].classList.remove('active-quote-libray-attr');
                        } else {
                            quoteSlideAttrActive[0].classList.remove('active-quote-libray-attr');
                            quoteSlideAttr[quoteSlide.length - 1].classList.add('active-quote-libray-attr')
                        }
                    }
                }
            } else {
                for (var i = 0; i < quoteSlide.length; i++){
                    for (var x = 0; x < quoteSlideActive.length; x++ ){
                        if (quoteSlide[0] !== quoteSlideActive[0]){
                            quoteSlideActive[0].previousElementSibling.previousElementSibling.classList.add('active-quote-libray-txt');
                            quoteSlideActive[0].classList.remove('active-quote-libray-txt');
                        } else {
                            quoteSlideActive[0].classList.remove('active-quote-libray-txt');
                            quoteSlide[0].classList.add('active-quote-libray-txt')
                        }
                    }
                }
                for (var i = 0; i < quoteSlideAttr.length; i++){
                    for (var x = 0; x < quoteSlideAttrActive.length; x++ ){
                        if (quoteSlideAttr[0] !== quoteSlideAttrActive[0]){
                            quoteSlideAttrActive[0].previousElementSibling.previousElementSibling.classList.add('active-quote-libray-attr');
                            quoteSlideAttrActive[0].classList.remove('active-quote-libray-attr');
                        } else {
                            quoteSlideAttrActive[0].classList.remove('active-quote-libray-attr');
                            quoteSlideAttr[0].classList.add('active-quote-libray-attr')
                        }
                    }
                }
            }
        },
        placeLibraryQuote: function (){
            const libraryQuote = document.querySelector('.active-quote-libray-txt');
            const libraryAttr = document.querySelector('.active-quote-libray-attr');
            document.querySelector('.quote-library').style.display = 'none';
            document.querySelector('.create-quote').style.display = 'flex';
            document.querySelector('#inputTxt').value = libraryQuote.textContent;
            document.querySelector('#inputAttribution').value = libraryAttr.textContent;
            document.querySelector('.quote-main').textContent = libraryQuote.textContent;
            document.querySelector('.quote-attribution').textContent = libraryAttr.textContent;
            document.querySelector('.edit-layout-quote-main').textContent = libraryQuote.textContent;
            document.querySelector('.edit-layout-quote-attribution').textContent = libraryAttr.textContent;
        },
        downloadQuoteImage: function (){
            window.location.href = window.location.pathname + window.location.search + window.location.hash;
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
        if (event.target.closest(".edit-theme-image")) {
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
            UICtrl.allowPreviewQuote();
        };
    });
    // Call icon when clicked to display quote
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.quoteCategories)) {
            UICtrl.displayCategoryQuote(event.target.parentNode.firstChild.alt);
        };
    });
    // Call icon and quote when page is loaded
    UICtrl.quoteCategoriesOnload();
    // Call event on quote slider when clicked on prev or next button
    document.addEventListener('click', function (event) {
        if (event.target.closest(UISelectors.btnQuoteSlider)) {
            UICtrl.displayQuoteSlider(event);
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
        document.querySelector(UISelectors.btnNeedInspiration).addEventListener('click', UICtrl.quoteLibrary);
        document.querySelector(UISelectors.useThisQuote).addEventListener('click', UICtrl.placeLibraryQuote);
        document.querySelector(UISelectors.btnFinalQuoteDownload).addEventListener('click', UICtrl.downloadQuoteImage);
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

