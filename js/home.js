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
    let users=[{name:'אלישבע',
    id:215280678,
    email:'elisheva71533@gmail.com'},
    {name:'אסתי',
    id:215280679,
    email:'s0504172669@gmail.com'},
  ];
let myarruser=localStorage.getItem("usersarr");
let correntusers;
if(myarruser!=null)
correntusers=JSON.parse(localStorage.getItem("usersarr"));
else
correntusers=users;
const s2=JSON.stringify(correntusers);
localStorage.setItem("usersarr",s2);

  let flag="false";
  
  //עמוד בבית
  var slider=document.getElementById("selectrooms");
  var output=document.getElementById("demo");
  output.innerHTML=slider.value;
  slider.oninput=function(){
  output.innerHTML=this.value;}
  var slider2=document.getElementById("selectmoney");
  var output2=document.getElementById("demo2");
  output2.innerHTML=slider2.value;
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

     
          return [
           document.getElementById("swal-input1").value,
           document.getElementById("swal-input2").value
          ];
        }
      });
      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }
      
      
  })()
  }
    // //פונקציה זו יוצרת קישור בהתאם לנתונים
  slider2.oninput=function(){
    output2.innerHTML=this.value;if(flag=="false"){ document.querySelector(".l").innerHTML+=`<a href="apartments.html?area=${document.querySelector(".selectarea").value}&rooms=${document.querySelector("#selectrooms").value}&many=${document.querySelector("#selectmoney").value}">חפש לי</a>`; flag="true"}

}
//    
  