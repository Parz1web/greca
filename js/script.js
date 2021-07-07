/*jshint esversion: 6 */

let header = document.querySelector('.header__logo');
let check = document.querySelector('#menu__toggle');

check.onclick = function(){
    if(this.checked){
        header.style.visibility = 'hidden';
    }
    else{
        header.style.visibility = 'visible';
    }
};
