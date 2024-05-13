
let all_apartment;
all_apartment=JSON.parse(localStorage.getItem("apartmentsarr"));
function roof(){
 
    for(let i=0;i<=(all_apartment.length)/2;i++)
    {
    document.querySelector(".aproof").innerHTML+=`<div id=a${i+1} class="a"><div/>`;
    document.getElementById(`a${i+1}`).innerHTML+=`<div id="${i+1}ba${i+1}" class="myfirstpic"></div>`;
    document.getElementById(`${i+1}ba${i+1}`).style.backgroundImage=`url(${all_apartment[i].big_image})`;
    //    document.getElementById(`a${i+1}`).innerHTML+=`<img src=${goodapartments[i].big_image} class="myfirstpic" img >`;
    document.getElementById(`a${i+1}`).innerHTML+=`<div class="under_pic" id="pic${i+1}"></div>`
    document.getElementById(`pic${i+1}`).innerHTML+=`<div class="under_pic_left" id="pic_left${i+1}"></div>`;
    document.getElementById(`pic${i+1}`).innerHTML+=`<div class="under_pic_right" id="pic_right${i+1}"></div>`;
    document.getElementById(`pic_left${i+1}`).innerHTML+=`<div class="thehouse"></div>`
    document.getElementById(`pic_right${i+1}`).innerHTML+=`<p class="the_area">אזור: ${all_apartment[i].place_in_cuntry}</p>`;
    document.getElementById(`pic_right${i+1}`).innerHTML+=`<span class="the_room">חדרים: ${all_apartment[i].num_rooms}</span>`;
    document.getElementById(`pic_right${i+1}`).innerHTML+=`<span class="the_price">מחיר: ${all_apartment[i].price}</span>`;
    document.getElementById(`pic_left${i+1}`).innerHTML+=`<a href=apartment.html?id=${all_apartment[i].id} class="to_look">לצפיה בנכס</a>`; 
    if (all_apartment[i].was_bought=="yes")
       document.getElementById(`${i+1}ba${i+1}`).innerHTML+=`<div class="sold"></div>`
     }
  }