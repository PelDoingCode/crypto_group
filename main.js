var content1 = [
    "Venez copier les trades de notre tradeur. <br\> Mais aussi en apprendre plus sur le trading et la technologie lié aux cryptomonnaies !",
    "Bla bla blablabalabalbalabalbla,",
    "erihtvzritvhoerhtzt",
    "eoritzheroitvoertvzet",
    "eoitcherzoitzoti"
]

var left_chevron = document.querySelector(".fa-chevron-left");
var right_chevron = document.querySelector(".fa-chevron-right");
var content_displayed = document.querySelector("#content_displayed");
var index_content1 = 0;

left_chevron.addEventListener("click", function(){
    if (index_content1===0){
        index_content1 = content1.length;
    }
    index_content1 = (index_content1-1)%content1.length;
    content_displayed.innerHTML = content1[index_content1];
})

right_chevron.addEventListener("click", function(){
    index_content1 = (index_content1+1)%content1.length;
    content_displayed.innerHTML = content1[index_content1];
})
