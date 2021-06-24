var cards = document.querySelectorAll('.card')
var cardlist = document.querySelector('#cardlist')

// var go = setInterval(action, 500);
window.addEventListener('scroll', action)
var bottomline = window.innerHeight*0.8

var timer = 1;
function action(){
    if(timer == 1){
        var a=1;
        cards = document.querySelectorAll('.card')
        for(card of cards){
            a++;
            if(card.getBoundingClientRect().top <= bottomline){
                card.classList.add('active')
            }else{
                card.classList.remove('active')
                setTimeout(() => {
                    cardlist.removeChild(cardlist.lastElementChild)
                }, 1000); 
            }
            if(a==cards.length){
                let newcard = document.createElement('li')
                let node = document.createTextNode('card')
                newcard.appendChild(node)
                newcard.classList.add("card")
                cardlist.appendChild(newcard)
            }
            console.log(cards.length)
        };
        timer=0;
        setTimeout(() => {
            timer = 1;
        }, 300);
    }
}