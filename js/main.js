let rowArrow = document.querySelectorAll('#scroll');
console.log(rowArrow);
var scroll = rowArrow[0];
var max = scroll.scrollLeft;
console.log(max);
function showScroll(elem){
    console.log(elem.scrollLeft);
}

scroll.addEventListener('scroll', function(e) {
    showScroll(e.target);
});


