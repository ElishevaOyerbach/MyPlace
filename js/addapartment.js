let all_apartment;
all_apartment=JSON.parse(localStorage.getItem("apartmentsarr"));
//פונקצייה להוספפת דירה

document.querySelector(".biti").onclick=function(){

  swal("הדירה נוספה בהצלחה!!!!", "ניצור איתך קשר במקרה הצורך...", "success");


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
  