let bulb = document.getElementById('bulb')
let onOff = document.getElementById('on-off')


let state = false;
onOff.addEventListener('click' , form)

function form() {
    if(state == false) {
  bulb.style.backgroundColor = "yellow";
state = true;
    }
    else {
         bulb.style.backgroundColor = "silver";
        state = false
    }
}