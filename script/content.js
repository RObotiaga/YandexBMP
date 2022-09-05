const mainSelector = document.querySelector('.main, .serp-list, .Content.Content_first, .Footer.SearchPage-Footer');
const pageColor = localStorage.getItem('page-color');
const secondSelector = document.querySelector(' .misspell__level, .mini-suggest__item, .VanillaReact.RelatedBottom, a.link.link_theme_none.link_target_serp.pager__item.pager__item_kind_page.i-bem, a.link.link_theme_none.link_target_serp.pager__item.pager__item_kind_next.i-bem, .serp-list_right_yes');
const thirdSelector = document.getElementsByClassName('serp-list_right_yes');
let sheet = document.styleSheets[0];
let mainColor = pageColor.slice(0,7);
let secondColor = pageColor.slice(8);
const root = document.querySelector(':root');

function reverseHEX(){
    
};

function useColor(mainColor,secondColor){
    mainSelector.style.background = mainColor;
    secondSelector.style.background = secondColor; 
    root.style.setProperty('--color-g-bg-overflow', secondColor);
    root.style.setProperty('--color-g-bg-primary', secondColor);
    for (val of thirdSelector) {
        val.style.background = secondColor;
    }
};
useColor(mainColor,secondColor);
chrome.extension.onRequest.addListener(function(req){
    useColor(req.msg[0],req.msg[1]);
    localStorage.setItem('page-color',req.msg);

});


