
// let correntusers;
// correntusers=JSON.parse(localStorage.getItem("usersarr"));
let all_apartment;
all_apartment=JSON.parse(localStorage.getItem("apartmentsarr"));
document.querySelector(".the_btm_end").onclick=function()
{

    const lo=location.search;
    const ca=new URLSearchParams(lo);
    const mycost= ca.get("cost");
    const thecod2=ca.get("id");
    all_apartment[thecod2-1].was_bought="yes";
    const eli=JSON.stringify(all_apartment);
    localStorage.setItem("apartmentsarr",eli);
  
  }