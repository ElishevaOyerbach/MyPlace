let all_apartment;
all_apartment=JSON.parse(localStorage.getItem("apartmentsarr"));


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
           
           if(all_apartment[i].was_bought=="no"){
            const divforbuy=document.createElement('div');
            divforbuy.classList.add("forbuy")
            document.querySelector(".bigpicture").prepend(divforbuy)
            document.querySelector(".forbuy").innerHTML+=`<a class="buy" href=form.html?cost=${all_apartment[i].price}&id=${all_apartment[i].id}>לרכישה</a>`
           }
         
       }
       
    }

  
}