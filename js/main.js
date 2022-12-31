let intervalStorage = {};



function startScroll(){
    let rowArrow = document.querySelectorAll('#scroll');
    if(rowArrow){
        for(elem of rowArrow){
            setScroll(elem);
        }
    }
};


function setScroll(scrollingElem){
    if(scrollingElem.dataset.direction == 'left'){
        if(scrollingElem.dataset.id in intervalStorage) return;
        scrollingElem.scrollLeft = scrollingElem.scrollWidth;
        let intervalVar = setInterval(()=>{
            scrollingElem.scrollLeft -= 1
            if(scrollingElem.scrollLeft == 0){
                scrollingElem.scrollLeft = scrollingElem.scrollWidth;
            }
        }, 31);
        intervalStorage[scrollingElem.dataset.id] = intervalVar;
    }else{
        if(scrollingElem.dataset.id in intervalStorage) return;
        let intervalVar = setInterval(()=>{
            scrollingElem.scrollLeft += 1
            if(scrollingElem.scrollLeft == scrollingElem.scrollWidth - scrollingElem.clientWidth){
                scrollingElem.scrollLeft = 0;
            }
        }, 31);
        intervalStorage[scrollingElem.dataset.id] = intervalVar;
    }
}

document.addEventListener('scroll', function(){
    let gridItem1 = document.querySelector('.grid-item-1');
    let gridItem2 = document.querySelector('.grid-item-2');
    let gridItem3 = document.querySelector('.grid-item-3');
    let gridItem4 = document.querySelector('.grid-item-4');
    let gridItem5 = document.querySelector('.grid-item-5');
    let gridItem6 = document.querySelector('.grid-item-6');
    let gridItem7 = document.querySelector('.grid-item-7');
    let gridItem8 = document.querySelector('.grid-item-8');

    if(window.scrollY > 5400){
        startScroll();
    }

    if(window.scrollY > 3600){
        gridItem1.classList.remove('display-hide');
        gridItem1.classList.add('display-flex', 'animate__animated', 'animate__backInDown');
        gridItem2.classList.remove('display-hide');
        gridItem2.classList.add('display-flex', 'animate__animated', 'animate__bounceInRight');
        gridItem3.classList.remove('display-hide');
        gridItem3.classList.add('display-flex', 'animate__animated', 'animate__bounceInUp');
    }
    
    if(window.scrollY < 3600){
        gridItem1.classList.remove('display-flex');
        gridItem1.classList.add('display-hide');
        gridItem2.classList.remove('display-flex');
        gridItem2.classList.add('display-hide');
        gridItem3.classList.remove('display-flex');
        gridItem3.classList.add('display-hide');
    }

    if(window.scrollY > 4100){
        gridItem4.classList.remove('display-hide');
        gridItem4.classList.add('display-flex', 'animate__animated', 'animate__bounceInLeft');
        gridItem5.classList.remove('display-hide');
        gridItem5.classList.add('display-flex', 'animate__animated', 'animate__bounceIn');
        gridItem6.classList.remove('display-hide');
        gridItem6.classList.add('display-flex', 'animate__animated', 'animate__bounceInRight');
    }

    if(window.scrollY < 4100){
        gridItem4.classList.remove('display-flex');
        gridItem4.classList.add('display-hide');
        gridItem5.classList.remove('display-flex');
        gridItem5.classList.add('display-hide');
        gridItem6.classList.remove('display-flex');
        gridItem6.classList.add('display-hide');
    }

    if(window.scrollY > 4300){
        gridItem7.classList.remove('display-hide');
        gridItem7.classList.add('display-block', 'animate__animated', 'animate__bounceInUp');
        gridItem8.classList.remove('display-hide');
        gridItem8.classList.add('display-flex', 'animate__animated', 'animate__bounceInUp');
    }

    if(window.scrollY < 4300){
        gridItem7.classList.remove('display-block');
        gridItem7.classList.add('display-hide');
        gridItem8.classList.remove('display-flex');
        gridItem8.classList.add('display-hide');
    }
})

//modal window

document.addEventListener('DOMContentLoaded', function(){
    let modalBtn = document.querySelectorAll('#openModalBtn');
    let closeBtn = document.querySelectorAll('#closeModalBtn');
    let modalWindow = document.querySelectorAll('.modal-window');
    let id;
// не відкриває бо є дваелементи із одинаковим ID
    for(let elem of modalBtn){
        elem.addEventListener('click',function(e) {
            e.preventDefault();
            id = e.target.dataset.id;
            for(elem of modalWindow){
                if(elem.dataset.id == id){
                    elem.style.display = 'block';
                }
            }
        });
    }
    
    for (let elem of closeBtn){
        elem.addEventListener('click',function(e) {
            e.preventDefault();
            modalWindow[id-1].style.display = 'none';
        })
    }
    
    window.onclick = function(e){
        if (e.target == modalWindow[id-1]) {
            modalWindow[id-1].style.display = 'none';
        }
    }
});




