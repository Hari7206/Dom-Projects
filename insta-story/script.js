let arr = [
    {
        dp: "https://i.pinimg.com/736x/95/f4/58/95f458e35e3e14f3a3680c524b129165.jpg",
        story: "https://i.pinimg.com/1200x/02/56/ef/0256ef872b9509b5d5920d664c6a65bf.jpg",
    },
    {
        dp: "https://i.pinimg.com/736x/70/b8/61/70b861e8c2f006a681166af8656ee46b.jpg",
        story: "https://i.pinimg.com/736x/08/ef/b9/08efb9f6f7d001d18bf4eb44d3e4090d.jpg",
    },
    {
        dp: "https://i.pinimg.com/736x/1f/e5/a0/1fe5a0d8604e7309b8efc203fef5ea48.jpg",
        story: "https://i.pinimg.com/736x/3a/42/41/3a424129a08b0afc1a3e075b887b8662.jpg",
    },
    {
        dp: "https://i.pinimg.com/736x/d6/fe/62/d6fe62e07cf6e45874ab508c447831ed.jpg",
        story: "https://i.pinimg.com/736x/d5/a1/f2/d5a1f2ad6168a0aa1f7f99a10c758e43.jpg",
    },
    {
        dp: "https://i.pinimg.com/736x/40/ef/36/40ef364064de4c7ec6a9672443da40f9.jpg",
        story: "https://i.pinimg.com/736x/46/df/1f/46df1f54c4ff64945f507558644e4621.jpg",
    },
]

let storiyan = document.getElementById('storiyan')
let storImg = document.getElementById('fullscreen')
let clutter = ""

arr.forEach(function (val, ind) {
    clutter += `  <div class="story">
                <img src="${val.dp}" id="${ind}" alt="">
                  </div>`
})
storiyan.innerHTML = clutter

storiyan.addEventListener('click', showImg)
function showImg(dets) {
    storImg.style.display = "block"
    storImg.style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        storImg.style.display = "none"
    }, 3000);
}