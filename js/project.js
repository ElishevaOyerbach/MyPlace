
let apartment=[
  {id:1,price:150000,area:120,num_rooms:5,place_in_cuntry:'מרכז',porch:'yes',was_bought:'no',
  more:'דירה מאווררת ומרוחת',big_image:"../images/a.jpg",second_image:"../images/a.jpg",third_image:"../images/a.jpg",sirtut:"../images/a.jpg"},
  {id:2,price:100000,area:120,num_rooms:5,place_in_cuntry:'מרכז',porch:'yes',was_bought:'no',
  more:'דירה מאווררת ומרוחת',big_image:"../images/b.png",second_image:"../images/b.png",third_image:"../images/b.png",sirtut:"../images/b.png"},
  {id:3,price:250000,area:120,num_rooms:6,place_in_cuntry:'צפון',porch:'yes',was_bought:'no',
  more:'דירה מאווררת ומרוחת',big_image:"../images/a.jpg",second_image:"../images/c.png",third_image:"../images/c.png",sirtut:"../images/c.png"},
]
let myarray=localStorage.getItem("apartmentsarr");
let all_apartment;

  if(myarray!=null)
  all_apartment=JSON.parse(myarray);
  else
  all_apartment=apartment;
  const str=JSON.stringify(all_apartment);
  localStorage.setItem("apartmentsarr",str);



//עמוד בבית
// var slider=document.getElementById("selectrooms");
// var output=document.getElementById("demo");
// output.innerHTML=slider.value;
// slider.oninput=function(){
//   output.innerHTML=this.value;}

//פונקצייה להוספפת דירה

document.querySelector(".biti").onclick=function(){

  alert("הדירה נוספה");
  let p=document.querySelector(".price").value;
  let mr=document.querySelector(".shetach").value;
  let r=document.querySelector(".numrooms").value;
  let a=document.querySelector(".selectarea").value;
  let o=document.querySelector(".isporch").value;
  let n=document.querySelector(".more").value;
  addapartment(all_apartment.length,p,mr,r,a,o,n,"no",'../images/home1.jpg',"../images/home1.jpg","../images/home1.jpg","../images/home1.jpg");
 
 
}
//מוסיף תכלס
function addapartment(id,price,area,num_rooms,place_in_cuntry,porrch,more,was_bought,big_image,second_image,third_image,sirtut)
{
  const obj={
    id,price,area,num_rooms,place_in_cuntry,porrch,more,was_bought,big_image,second_image,third_image,sirtut
  }
  let i=localStorage.getItem("apartmentsarr");
  all_apartment=JSON.parse(i);
  all_apartment.push(obj);
  const f=JSON.stringify(all_apartment);
  localStorage.setItem("apartmentsarr",f);
}

// //פונקציה זו יוצרת קישור בהתאם לנתונים
document.querySelector(".selectmoney").oninput=function (){
    document.querySelector(".l").innerHTML+=`<a href="apartments.html?area=${document.querySelector(".selectarea").value}&rooms=${document.querySelector("#selectrooms").value}&many=${document.querySelector(".selectmoney").value}">חפש לי</a>`

}

//עמוד דירות
function begin(){
  
    const strparm=location.search;
    const searchparms=new URLSearchParams(strparm);
    const area= searchparms.get("area");
    const rooms=searchparms.get("rooms");
    const many=searchparms.get("many");
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
    document.getElementById(`a${i+1}`).innerHTML+=`<div id="${i+1}ba${i+1}" class="myfirstpic"></div>`;
    document.getElementById(`${i+1}ba${i+1}`).style.backgroundImage=`url(${goodapartments[i].big_image})`;
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
       document.getElementById(`${i+1}ba${i+1}`).innerHTML+=`<div class="sold"></div>`
    }
   
   //עמוד דירה
}
function start(){
  const a=location.search;
  const b=new URLSearchParams(a);
  const myid= b.get("id");
  //תמונה גדולה
  const divbig=document.createElement('div');
  divbig.classList.add("bigpicture");
   document.querySelector(".allpage").prepend(divbig);
   const fewpicrures=document.createElement('div');
   fewpicrures.classList.add("few");
   document.querySelector(".allpage").append(fewpicrures);
   const divupwrite=document.createElement('div');
   divupwrite.classList.add("divupw");
   document.querySelector(".few").append(divupwrite);
   const divthreepic=document.createElement('div');
   divthreepic.classList.add("three");
   document.querySelector(".few").append(divthreepic);
   //תמונה ריאשונה
   const divone=document.createElement('div');
   divone.classList.add("thefirst");
   document.querySelector(".three").append(divone);
   //תמונה שניה
   const divtwo=document.createElement('div');
   divtwo.classList.add("thesecond");
   document.querySelector(".three").append(divtwo);
   //תמונה שלישית
    const divthree=document.createElement('div');
   divthree.classList.add("thethird");
   document.querySelector(".three").append(divthree);
   const divdetails=document.createElement('div');
   //פרטים למטה
   divdetails.classList.add("datails");
   document.querySelector(".allpage").append(divdetails);
   const rightsize=document.createElement('div');
   rightsize.classList.add("right");
   document.querySelector(".datails").append(rightsize);
   const leftsize=document.createElement('div');
   leftsize.classList.add("left");
   document.querySelector(".datails").append(leftsize)
   const divprice=document.createElement('div')
   divprice.classList.add("theprice");
   document.querySelector(".right").append(divprice)
   const divmeter=document.createElement('div')
   divmeter.classList.add("themeter");
   document.querySelector(".right").append(divmeter);
   const divrooms=document.createElement('div')
   divrooms.classList.add("therooms");
   document.querySelector(".right").append(divrooms);
   const divporch=document.createElement('div')
   divporch.classList.add("theporch");
   document.querySelector(".right").append(divporch);
   const divid=document.createElement('div')
   divid.classList.add("theid");
   document.querySelector(".right").append(divid);


  //כדאי לשנות את הלולאה
    for(let i=0;i<all_apartment.length;i++)
    {if(all_apartment[i].id==myid)
       { document.querySelector(".bigpicture").style.backgroundImage=`url(${all_apartment[i].big_image})`;
          if(all_apartment[i].was_bought=="yes")
          { document.querySelector(".bigpicture").innerHTML+=`<div class="sold"></div>`

          }
          let x=`דירה ב${all_apartment[i].place_in_cuntry} עם  ${all_apartment[i].num_rooms} חדרים`;
           document.querySelector(".divupw").innerHTML+=`<p class="towrite">${x}</p>`;
           document.querySelector(".thefirst").style.backgroundImage=`url(${all_apartment[i].second_image})`;
           document.querySelector(".thesecond").style.backgroundImage=`url(${all_apartment[i].third_image})`;
           document.querySelector(".thethird").style.backgroundImage=`url(${all_apartment[i].sirtut})`;
           let y=all_apartment[i].more;
           document.querySelector(".left").innerHTML+=`<p class="themore">${y}</p>`;
           y=`מחיר:${all_apartment[i].price}`;
           document.querySelector(".theprice").innerHTML+=`<p class="themore">${y}</p>`;
           y=`מטר:${all_apartment[i].area}`;
           document.querySelector(".themeter").innerHTML+=`<p class="themore">${y}</p>`;
           y=`מספר חדרים:${all_apartment[i].num_rooms}`;
           document.querySelector(".therooms").innerHTML+=`<p class="themore">${y}</p>`;
           y=`${all_apartment[i].porch} :מרפסת`;
           document.querySelector(".theporch").innerHTML+=`<p class="themore">${y}</p>`;
           y=`קוד נכס:15${all_apartment[i].id} `;
           document.querySelector(".theid").innerHTML+=`<p class="themore">${y}</p>`;
           debugger
           if(all_apartment[i].was_bought=="no"){
            const divforbuy=document.createElement('div');
            divforbuy.classList.add("forbuy")
            document.querySelector(".bigpicture").prepend(divforbuy)
            document.querySelector(".forbuy").innerHTML+=`<a class="buy" href=form.html?cost=${all_apartment[i].price}&id=${all_apartment[i].id}>לרכישה</a>`
           }
         
       }
       
    }

  
}
//עמוד טופס

function po(){
  const lo=location.search;
  const ca=new URLSearchParams(lo);
  const mycost= ca.get("cost");
  const thecod2=ca.get("id");
  all_apartment[thecod2-1].was_bought="yes";
  const eli=JSON.stringify(all_apartment);
  localStorage.setItem("apartmentsarr",eli);

}
 
//עמוד כל הדירות סרגל


function pageall(){

for(let i=0;i<all_apartment.length;i++){
  document.querySelector(".allap").innerHTML+=`<div id=a${i+1} class="a"><div/>`;
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
  }}
//עמוד דירות סרגל
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
  if (goodapartments[i].was_bought=="yes")
     document.getElementById(`${i+1}ba${i+1}`).innerHTML+=`<div class="sold"></div>`
   }

}