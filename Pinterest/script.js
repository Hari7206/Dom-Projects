const posts = [
  { id: 1, name: "Mountain Landscape", image: "https://picsum.photos/400/500?random=1" },
  { id: 2, name: "Ocean Beach", image: "https://picsum.photos/400/600?random=2" },
  { id: 3, name: "City Skyline", image: "https://picsum.photos/400/550?random=3" },
  { id: 4, name: "Forest Nature", image: "https://picsum.photos/400/650?random=4" },
  { id: 5, name: "Cute Dog", image: "https://picsum.photos/400/500?random=5" },
  { id: 6, name: "Cute Cat", image: "https://picsum.photos/400/600?random=6" },
  { id: 7, name: "Modern Architecture", image: "https://picsum.photos/400/550?random=7" },
  { id: 8, name: "Gaming Setup", image: "https://picsum.photos/400/500?random=8" },
  { id: 9, name: "Minimal Desk", image: "https://picsum.photos/400/600?random=9" },
  { id: 10, name: "Street Fashion", image: "https://picsum.photos/400/550?random=10" },

  { id: 11, name: "Healthy Food", image: "https://picsum.photos/400/650?random=11" },
  { id: 12, name: "Coffee Aesthetic", image: "https://picsum.photos/400/500?random=12" },
  { id: 13, name: "Travel Adventure", image: "https://picsum.photos/400/600?random=13" },
  { id: 14, name: "Coding Setup", image: "https://picsum.photos/400/550?random=14" },
  { id: 15, name: "Laptop Lifestyle", image: "https://picsum.photos/400/500?random=15" },
  { id: 16, name: "Fitness Motivation", image: "https://picsum.photos/400/650?random=16" },
  { id: 17, name: "Car Wallpaper", image: "https://picsum.photos/400/550?random=17" },
  { id: 18, name: "Bike Ride", image: "https://picsum.photos/400/600?random=18" },
  { id: 19, name: "Sunset Sky", image: "https://picsum.photos/400/500?random=19" },
  { id: 20, name: "Space Galaxy", image: "https://picsum.photos/400/650?random=20" },

  { id: 21, name: "Anime Art", image: "https://picsum.photos/400/550?random=21" },
  { id: 22, name: "Abstract Art", image: "https://picsum.photos/400/600?random=22" },
  { id: 23, name: "Interior Design", image: "https://picsum.photos/400/500?random=23" },
  { id: 24, name: "Bedroom Ideas", image: "https://picsum.photos/400/650?random=24" },
  { id: 25, name: "Luxury Watch", image: "https://picsum.photos/400/550?random=25" },
  { id: 26, name: "Sneaker Style", image: "https://picsum.photos/400/600?random=26" },
  { id: 27, name: "Makeup Look", image: "https://picsum.photos/400/500?random=27" },
  { id: 28, name: "Nature Waterfall", image: "https://picsum.photos/400/650?random=28" },
  { id: 29, name: "Desert View", image: "https://picsum.photos/400/550?random=29" },
  { id: 30, name: "Snow Mountains", image: "https://picsum.photos/400/600?random=30" },

  { id: 31, name: "Startup Office", image: "https://picsum.photos/400/500?random=31" },
  { id: 32, name: "Tech Gadgets", image: "https://picsum.photos/400/650?random=32" },
  { id: 33, name: "Street Photography", image: "https://picsum.photos/400/550?random=33" },
  { id: 34, name: "Art Painting", image: "https://picsum.photos/400/600?random=34" },
  { id: 35, name: "Plant Aesthetic", image: "https://picsum.photos/400/500?random=35" },
  { id: 36, name: "Mountain Lake", image: "https://picsum.photos/400/650?random=36" },
  { id: 37, name: "Vintage Car", image: "https://picsum.photos/400/550?random=37" },
  { id: 38, name: "Luxury Villa", image: "https://picsum.photos/400/600?random=38" },
  { id: 39, name: "Camping Night", image: "https://picsum.photos/400/500?random=39" },
  { id: 40, name: "Music Studio", image: "https://picsum.photos/400/650?random=40" },

  { id: 41, name: "Books Library", image: "https://picsum.photos/400/550?random=41" },
  { id: 42, name: "UI Design", image: "https://picsum.photos/400/600?random=42" },
  { id: 43, name: "Mobile App", image: "https://picsum.photos/400/500?random=43" },
  { id: 44, name: "Laptop Wallpaper", image: "https://picsum.photos/400/650?random=44" },
  { id: 45, name: "Night City", image: "https://picsum.photos/400/550?random=45" },
  { id: 46, name: "Rain Mood", image: "https://picsum.photos/400/600?random=46" },
  { id: 47, name: "Street Art", image: "https://picsum.photos/400/500?random=47" },
  { id: 48, name: "Aesthetic Room", image: "https://picsum.photos/400/650?random=48" },
  { id: 49, name: "Digital Art", image: "https://picsum.photos/400/550?random=49" },
  { id: 50, name: "Luxury Car", image: "https://picsum.photos/400/600?random=50" }
];


function showImages(){
    let container = document.querySelector('.container')
    let pics = ''
    posts.forEach(function(elem){
        pics += ` <div class="box">
                        <img src="${elem.image}" alt="" class="cursor-pointer">
                    </div>`
    })
    container.innerHTML = pics;
    
}

function searchBar() {
    let searchInput = document.getElementById('searchinput')
    const overlay = document.querySelector(".overlay");
    let searchdata = document.querySelector('.searchdata')
 let container = document.querySelector('.container')

    searchInput.addEventListener('focus' , () =>{
       overlay.style.display = 'block'
    })
    searchInput.addEventListener('blur' , () =>{
       overlay.style.display = 'none'
    })



    searchInput.addEventListener('input' , ()=> {
        searchdata.style.display = "block"

       const value = searchInput.value.toLowerCase();
            if (value === "") {
        searchdata.style.display = "none";
        searchdata.innerHTML = "";
        return;
    }
       const filtered = posts.filter(posts =>
    posts.name.toLowerCase().startsWith(value)
  );
  let obj = ''
  filtered.forEach(function (elem) {
    obj += `<div id=${elem.id} class="res flex px-8  py-3">
<i class="ri-search-line font-semibold mr-5"></i>
<h3 class="font-semibold">${elem.name}</h3>
</div>`
  })

searchdata.innerHTML = obj;
let results = document.querySelectorAll('.res'); 
results.forEach(function(elem){
    elem.addEventListener('click', function(){
       let foundid = elem.id;
       let picIs;
       for(let i = 0; i<posts.length; i++){
        if(posts[i].id == foundid){
             picIs = posts[i];
                break;
        }

       }
          container.innerHTML = '<img src="' + picIs.image + '" />';
    });
});
    })
}

showImages();
searchBar();






