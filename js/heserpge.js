let correntusers;
correntusers=JSON.parse(localStorage.getItem("usersarr"));
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