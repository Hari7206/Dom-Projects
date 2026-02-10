let main = document.querySelector('main')
let cursor = document.getElementById('cursor')

main.addEventListener('mousemove' , moving)

function moving(curr){
cursor.style.left = curr.x + 'px'
cursor.style.top = curr.y + 'px'
}