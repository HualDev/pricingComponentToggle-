const toggle = document.getElementById('toggle')
const span = document.getElementsByTagName('span')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('circle_left')
    for(i=0; i<span.length; i++){
        span[i].classList.toggle('no_show')
    }
})
