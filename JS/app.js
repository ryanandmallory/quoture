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
        editLayoutQuoteAttribution: '.edit-layout-quote-attribution'
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
            document.querySelector('.create-quote').style.display = 'none';
            document.querySelector('.edit-layout').style.display = 'flex';
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
            console.log('Image ' + UICtrl.getThemeColor(event))
            document.querySelector('.main-quote-image').src = UICtrl.getThemeImage(event);
            console.log('Theme image is  ' + UICtrl.getThemeImage(event));
            document.querySelector('.edit-layout-quote-image-img').src = UICtrl.getThemeImage(event);
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
    // Load Event Listeners
    const loadEventListeners = function () {
        document.querySelector(UISelectors.btnBegin).addEventListener('click', UICtrl.revealBackgroundTheme);
        document.querySelector(UISelectors.btnNextPage).addEventListener('click', UICtrl.revealCreateQuote);
        document.querySelector(UISelectors.btnRandom).addEventListener('click', UICtrl.revealRandomColor);
        document.querySelector(UISelectors.btnInputColor).addEventListener('input', UICtrl.revealInputColor);
        document.querySelector(UISelectors.btnInputNext).addEventListener('click', UICtrl.revealQuoteAttribute);
        document.querySelector(UISelectors.btnInputNextTwo).addEventListener('click', UICtrl.revealEditLayout);
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

