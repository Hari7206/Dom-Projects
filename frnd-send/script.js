let status = document.querySelector("#current")
let btn = document.querySelector('#button')


let current = false;

btn.addEventListener('click' , textChange)
function textChange() {
  if( current == false ){
  status.style.color = 'green'
  status.innerHTML = 'Friends'
    btn.innerHTML = "⨯ Cancle Request"
    btn.style.backgroundColor = 'silver'
    current = true;
  }

  else {
    status.style.color = 'red'
     status.innerHTML = 'Stranger'
    btn.innerHTML = " + Add Button"
    btn.style.backgroundColor = 'rgb(86, 88, 240)'
    current = false;
  }

}



