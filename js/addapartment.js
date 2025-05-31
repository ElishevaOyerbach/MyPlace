let all_apartment;
all_apartment = JSON.parse(localStorage.getItem("apartmentsarr"));
let correntusers;
correntusers = JSON.parse(localStorage.getItem("usersarr"));
//פונקצייה להוספפת דירה

document.querySelector(".biti").onclick = function () {
  const checkmore = /^[a-zA-Zא-ת]+$/;
  const checknuumrooms = /[3-5]/;
  const checkprice = /[0-9]/;
  if (!checkmore.test(document.querySelector(".more").value) || !checknuumrooms.test(document.querySelector(".numrooms").value) ||
    !checkprice.test(document.querySelector(".price").value) || !checkprice.test(document.querySelector(".shetach").value))
    alert("הכנס פירוט שינית");
  else {
    Swal.fire({ title: "הדירה נוספה בהצלחה", text: "ניצור איתך קשר", icon: "success" })

    let p = document.querySelector(".price").value;
    let mr = document.querySelector(".shetach").value;
    let r = document.querySelector(".numrooms").value;
    let a = document.querySelector(".selectarea").value;
    let o = document.querySelector(".isporch").value;
    let n = document.querySelector(".more").value;



    addapartment(all_apartment.length, p, mr, r, a, o, n, "no", '../images/net1.png', "../images/net2.png", "../images/net2.pngg", "../images/net2.png");
  }

}
//מוסיף תכלס
function addapartment(id, price, area, num_rooms, place_in_cuntry, porrch, more, was_bought, big_image, second_image, third_image, sirtut) {
  const obj = {
    id, price, area, num_rooms, place_in_cuntry, porrch, more, was_bought, big_image, second_image, third_image, sirtut
  }
  let i = localStorage.getItem("apartmentsarr");
  all_apartment = JSON.parse(i);
  all_apartment.push(obj);
  const f = JSON.stringify(all_apartment);
  localStorage.setItem("apartmentsarr", f);
}
