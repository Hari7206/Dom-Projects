let post = document.querySelector('.img')
let like = document.getElementById('love-hover')
let likeColor = document.getElementById('like-count')

let state = false
post.addEventListener('dblclick', showLike)

function showLike() {
    if (state == false) {
        like.classList.add('active');

        setTimeout(() => {
            like.classList.remove('active');
        }, 1000);

        likeColor.style.color = 'red'
           count.innerHTML = '1'
          state = true;
    }

    else{
     like.classList.add('active');

        setTimeout(() => {
            like.classList.remove('active');
        }, 1000);

          likeColor.style.color = 'black'
           count.innerHTML = ''
          state = false;
    }
}


let count = document.getElementById('text')

