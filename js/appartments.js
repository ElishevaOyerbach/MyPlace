let timerInterval;



let correntusers;
correntusers=JSON.parse(localStorage.getItem("usersarr"));
let all_apartment;
all_apartment=JSON.parse(localStorage.getItem("apartmentsarr"));
function begin(){
 
  
    const strparm=location.search;
    const searchparms=new URLSearchParams(strparm);
    const area= searchparms.get("area");
    const rooms=+searchparms.get("rooms");
    const many=+searchparms.get("many");
     //יצירת מערך עם הדירות המתאימות
     let count=0;
     let goodapartments =[];
     for(let i=0;i<all_apartment.length;i++)
   {
    if(all_apartment[i].num_rooms==rooms && all_apartment[i].place_in_cuntry==area&&all_apartment[i].price<=many)
     {count=count+1;
   
      document.querySelector(".allmy").innerHTML+=`<div id=a${count} class="a"><div/>`;
       
      goodapartments[count-1]=all_apartment[i];
    } 
   }
   const divwefind=document.createElement('div');
   divwefind.classList.add("find");
   document.querySelector(".allmy").prepend(divwefind);
   let s=` נמצאו ${count } נכסים`;
   document.querySelector(".find").innerHTML+=`<p class="coountfind">${s}</p>`
   document.querySelector
   //הכנסת הנתונים לדיוים
  // 
   for(let i=0;i<count;i++){
    document.getElementById(`a${i+1}`).innerHTML+=`<div id="card${i+1}" class="card" ></div>`;
    document.getElementById(`card${i+1}`).innerHTML=`<div class="card-img" id="${i+1}ba${i+1}" ></div>`;
    document.getElementById(`${i+1}ba${i+1}`).style.backgroundImage+=`url(${goodapartments[i].big_image})`;
    document.getElementById(`${i+1}ba${i+1}`).innerHTML+=`<div class="card-info" id="y${i+1}">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="../images/home.png"><path d="M0 0h24v24H0z" fill="none"></path><path</path></svg>
    <p class="text-title">My Place</p>
    <p class="text-body">${goodapartments[i].more}</p>
  </div>`
    //    document.getElementById(`a${i+1}`).innerHTML+=`<img src=${goodapartments[i].big_image} class="myfirstpic" img >`;
        document.getElementById(`a${i+1}`).innerHTML+=`<div class="under_pic" id="pic${i+1}"></div>`
        document.getElementById(`pic${i+1}`).innerHTML+=`<div class="under_pic_left" id="pic_left${i+1}"></div>`;
         document.getElementById(`pic_left${i+1}`).innerHTML+=`<div class="thehouse"></div>`
        document.getElementById(`pic${i+1}`).innerHTML+=`<div class="under_pic_right" id="pic_right${i+1}"></div>`;
        document.getElementById(`pic_right${i+1}`).innerHTML+=`<p class="the_area">אזור: ${goodapartments[i].place_in_cuntry}</p>`;
        document.getElementById(`pic_right${i+1}`).innerHTML+=`<span class="the_room">חדרים: ${goodapartments[i].num_rooms}</span>`;
       document.getElementById(`pic_right${i+1}`).innerHTML+=`<span class="the_price">מחיר: ${goodapartments[i].price}</span>`;
       document.getElementById(`pic_left${i+1}`).innerHTML+=`<a href=apartment.html?id=${goodapartments[i].id} class="to_look">לצפיה בנכס</a>`; 
    if (goodapartments[i].was_bought=="yes")
     {  document.getElementById(`y${i+1}`).style.backgroundImage+=`url("../images/sold.png")`;
      
    }
    }
}

//רישום
let bool="false";
  document.querySelector(".forrishum").onclick=function(){
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: " הכנס שם משתמש וסיסמה",
        html: `
          <input id="swal-input1" class="swal2-input" placeholder=" שם">
          <input id="swal-input2" class="swal2-input" placeholder=" תעודת זהות">
        `,
        focusConfirm: false,
        preConfirm: () => {
          let x= document.getElementById("swal-input1").value;
          let y=document.getElementById("swal-input2").value;
          for(let i=0;i<correntusers.length;i++) 
          {
            if(correntusers[i].name==x&&correntusers[i].id==y)
               { bool="true";

               }    
          }
          if(bool=="false")
          {
            const newname={
              name:x,id:y
            }
            correntusers.push(newname);
            const f=JSON.stringify(correntusers);
            localStorage.setItem("usersarr",f);
          }
        }
      });
      if (formValues&&bool=="true") {
        Swal.fire(JSON.stringify('שמך כבר רשום במערכת'));
      }
      if (formValues&&bool=="false") {
        Swal.fire(JSON.stringify('לקוח חדש, פרטיך נרשמו במערכת'));
      }
      
      bool="false";
  })()
  }