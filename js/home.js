



document.querySelector("#imageandform").innerHTML += `<a href="../html/addapartment.html" class="fsale"></a>`;
let timer = setTimeout(() => {
  document.querySelector(".fsale").style.display = "block";
}, 2000);
let timerstop = setTimeout(() => {
  document.querySelector(".fsale").style.display = "none";
}, 5000);



let apartment = [
  {
    id: 1,
    price: 2500000,
    area: 93,
    num_rooms: 4,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה מאווררת ומווחת, עם כיווני אויר ונוף יפיפה',
    big_image: "../images/a3.PNG",
    second_image: "../images/a2.PNG",
    third_image: "../images/a4.PNG",
    sirtut: "../images/a1.PNG"
  },

  {
    id: 2,
    price: 1900000,
    area: 86,
    num_rooms: 3,
    place_in_cuntry: 'מרכז',
    porch: 'no',
    was_bought: 'no',
    more: 'דירה מאווררת ומווחת,עם מרפסת גדולה וחניה מקורה',
    big_image: "../images/b1.PNG",
    second_image: "../images/b2.PNG",
    third_image: "../images/b3.PNG",
    sirtut: "../images/b4.PNG"
  },

  {
    id: 3,
    price: 4300000,
    area: 160,
    num_rooms: 5,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת פנטהאוז בת 5 חדרים כולל יחידת הורים. בשטח של כ 125 מ"ר בנוי + 35 מ"ר מרפסת שמש במפלס העליון.',
    big_image: "../images/c1.PNG",
    second_image: "../images/c2.jpg",
    third_image: "../images/c3.PNG",
    sirtut: "../images/c4.jpg"
  },

  {
    id: 4,
    price: 8200000,
    area: 183,
    num_rooms: 4,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת גן יפיפיה בדרום הארץ עם יחידת הורים וגקוזי',
    big_image: "../images/d1.jpg",
    second_image: "../images/d2.jpg",
    third_image: "../images/d3.jpg",
    sirtut: "../images/d4.jpg"
  },

  {
    id: 5,
    price: 6400000,
    area: 150,
    num_rooms: 5,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'פנטאוז מדהים במרכז עם 2 מרפסות ענקיות ועם נוף משגע',
    big_image: "../images/e1.PNG",
    second_image: "../images/e2.PNG",
    third_image: "../images/e3.PNG",
    sirtut: "../images/e4.PNG"
  },

  {
    id: 6,
    price: 4350000,
    area: 130,
    num_rooms: 5,
    place_in_cuntry: 'מרכז',
    porch: 'no',
    was_bought: 'no',
    more: 'דירת גג 4 חדרים מרווחת ומשופצת, עם מטבח גדול ויחידת הורים',
    big_image: "../images/f1.PNG",
    second_image: "../images/f2.PNG",
    third_image: "../images/f3.PNG",
    sirtut: "../images/f4.jpg"
  },

  {
    id: 7,
    price: 7000000,
    area: 190,
    num_rooms: 4,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת גן 4 חדרים עם תקרות גבוהות ועם חצר ענקית ומטופחת ',
    big_image: "../images/g2.jpeg",
    second_image: "../images/g1.png",
    third_image: "../images/g3.PNG",
    sirtut: "../images/g4.PNG"
  },

  {
    id: 8,
    price: 5500000,
    area: 150,
    num_rooms: 5,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה חדשה מהנילונים עם נוף מדהים ו4 כיוני אויר',
    big_image: "../images/h1.PNG",
    second_image: "../images/h2.jpg",
    third_image: "../images/h3.jpg",
    sirtut: "../images/h4.PNG"
  },

  {
    id: 9,
    price: 4000000,
    area: 115,
    num_rooms: 4,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה משופצת בפריפריה עם מטבח מאובזר ועיצוב מודרני וחדיש',
    big_image: "../images/i1.JPEG",
    second_image: "../images/i2.JPEG",
    third_image: "../images/i3.JPEG1.jpg",
    sirtut: "../images/i4.jpg"
  },

  {
    id: 10,
    price: 3700000,
    area: 90,
    num_rooms: 4,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת גן בדרום הארץ ליד שדות פרחים ומטעי עץ קסומים',
    big_image: "../images/j1.jpeg",
    second_image: "../images/j2.jpg",
    third_image: "../images/j2.png",
    sirtut: "../images/j4.png"
  },

  {
    id: 11,
    price: 9600000,
    area: 225,
    num_rooms: 3,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'פנטאוז מדהים בצפון הארץ עם נוף הצופה אל הכנרת',
    big_image: "../images/k1.jpg",
    second_image: "../images/k2.jpg",
    third_image: "../images/k3.jpg",
    sirtut: "../images/k4.jpg"
  },

  {
    id: 12,
    price: 7200000,
    area: 200,
    num_rooms: 5,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת 6 חדרים במרכז הארץ מרווחת וחדשה עם מרפסת שמש ענקית',
    big_image: "../images/l1.png",
    second_image: "../images/l2.jpg",
    third_image: "../images/l3.png",
    sirtut: "../images/l4.png"
  },

  {
    id: 13,
    price: 4000000,
    area: 160,
    num_rooms: 5,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת גן מאווררת עם ברכה ענקית וגקוזי',
    big_image: "../images/m1.jpg",
    second_image: "../images/m2.jpg",
    third_image: "../images/m3.jpg",
    sirtut: "../images/1.jpg"
  },
  {
    id: 14,
    price: 2400000,
    area: 135,
    num_rooms: 5,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה חדשה ומפוארת עם  מטבח ענק וסלון גדול',
    big_image: "../images/n1.jpeg",
    second_image: "../images/n2.jpeg",
    third_image: "../images/n3.jpg",
    sirtut: "../images/n4.jpg"
  },

  {
    id: 15,
    price: 8000000,
    area: 235,
    num_rooms: 4,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה מהממת בצפון הארץ עם 4 חדרים ענקיים ומרווחים וסלון מפואר',
    big_image: "../images/o1.jpg",
    second_image: "../images/o2.png",
    third_image: "../images/o3.jpg",
    sirtut: "../images/o4.jpg"
  },

  {
    id: 16,
    price: 5700000,
    area: 110,
    num_rooms: 4,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'הדירה שרק יכלתם לחלום עליה - דירה מטורפת במרכז הארץ עם 2 מרפסות סוכה ענקיות ונוף מטורף ',
    big_image: "../images/p1.png",
    second_image: "../images/p2.jpg",
    third_image: "../images/p3.jpg",
    sirtut: "../images/p4.jpg"
  },
  {
    id: 17,
    price: 4100000,
    area: 120,
    num_rooms: 3,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה גדולה ומרווחת בדרום הארץ במחיר מציאה',
    big_image: "../images/q1.jpg",
    second_image: "../images/q2.png",
    third_image: "../images/q3.png",
    sirtut: "../images/q4.jpg"
  },
  {
    id: 18,
    price: 5100000,
    area: 120,
    num_rooms: 4,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה יפה ומטופחת כווני אוויר תונןף מדהיםה',
    big_image: "../images/r1.jpg",
    second_image: "../images/r2.jpg",
    third_image: "../images/r3.jpg",
    sirtut: "../images/r4.jpg"
  },
  {
    id: 19,
    price: 1000008,
    area: 125,
    num_rooms: 3,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה יפה ומטופחת דירה במיקום מרכזי עם נוף מושלם ה',
    big_image: "../images/s1.jpg",
    second_image: "../images/s2.jpg",
    third_image: "../images/s3.jpg",
    sirtut: "../images/s4.jpg"
  },
  {
    id: 20,
    price: 1005008,
    area: 90,
    num_rooms: 3,
    place_in_cuntry: 'דרום',
    porch: 'no',
    was_bought: 'no',
    more: 'דירה מושלמת 3 כיווני אוויר מוארת ובמקום מרכזי',
    big_image: "../images/t1.jpg",
    second_image: "../images/t2.jpg",
    third_image: "../images/t3.png",
    sirtut: "../images/a4.jpg"
  },
  {
    id: 21,
    price: 1000008,
    area: 95,
    num_rooms: 3,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירה בצפון הארץ 3 חדרים גדולה ואוררת באזור שקט',
    big_image: "../images/w1.jpg",
    second_image: "../images/w2.jpg",
    third_image: "../images/w3.jpg",
    sirtut: "../images/w4.jpg"
  },
  {
    id: 22,
    price: 5500008,
    area: 100,
    num_rooms: 3,
    place_in_cuntry: 'מרכז',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת 3 חדרים במרכז עם נוף מושלם',
    big_image: "../images/x1.png",
    second_image: "../images/x2.png",
    third_image: "../images/x3.jpg",
    sirtut: "../images/r4.jpg"
  },
  {
    id: 23,
    price: 5000608,
    area: 150,
    num_rooms: 5,
    place_in_cuntry: 'דרום',
    porch: 'no',
    was_bought: 'no',
    more: 'דירת 5 חדרים בדרום',
    big_image: "../images/y1.jpg",
    second_image: "../images/y2.jpg",
    third_image: "../images/y3.jpg",
    sirtut: "../images/p4.jpg"
  },
  {
    id: 24,
    price: 3004658,
    area: 135,
    num_rooms: 5,
    place_in_cuntry: 'צפון',
    porch: 'yes',
    was_bought: 'no',
    more: 'דירת 5 חדרים בצפון חני קרוב לבית',
    big_image: "../images/z1.jpeg",
    second_image: "../images/z2.jpg",
    third_image: "../images/z3.jpg",
    sirtut: "../images/n4.jpg"
  },
  {
    id: 25,
    price: 4004658,
    area: 145,
    num_rooms: 4,
    place_in_cuntry: 'מרכז',
    porch: 'no',
    was_bought: 'no',
    more: 'דירת 4 חדרים עם נוף מטורף 3 כיווני אוויר קומה נמוכה',
    big_image: "../images/aa1.jpg",
    second_image: "../images/aa2.png",
    third_image: "../images/aa3.jpg",
    sirtut: "../images/m4.jpg"
  },
  {
    id: 26,
    price: 3704658,
    area: 150,
    num_rooms: 5,
    place_in_cuntry: 'דרום',
    porch: 'yes',
    was_bought: 'no',
    more:'דירה מהנילונים ישר מהקבלן מרווחת ומארת מחסן',
    big_image: "../images/bb1.jpg",
    second_image: "../images/bb2.jpg",
    third_image: "../images/bb3.jpg",
    sirtut: "../images/m4.jpg"
  },
  {
    id: 27,
    price: 1804658,
    area: 200,
    num_rooms: 3,
    place_in_cuntry: 'צפון',
    porch: 'no',
    was_bought: 'no',
    more:'דירת 3 חדרים בצפון עם חניה מחסן אופציה להרחבה מיקום מרכזי',
    big_image: "../images/cc1.png",
    second_image: "../images/cc2.png",
    third_image: "../images/cc3.png",
    sirtut: "../images/d4.jpg"
  },
  {
    id: 28,
    price: 1204658,
    area: 300,
    num_rooms: 5,
    place_in_cuntry: 'מרכז',
    porch: 'no',
    was_bought: 'no',
    more:'דירת 5 חדרים במרכז מאוררת ןמרווחת מקום מעולה תחבורה מצוינת',
    big_image: "../images/dd1.jpg",
    second_image: "../images/dd2.jpg",
    third_image: "../images/dd3.jpg",
    sirtut: "../images/q4.jpg"
  },




]
let myarray = localStorage.getItem("apartmentsarr");
let all_apartment;

if (myarray != null)
  all_apartment = JSON.parse(myarray);
else
  all_apartment = apartment;
const str = JSON.stringify(all_apartment);
localStorage.setItem("apartmentsarr", str);
let users = [{
  name: 'אלישבע',
  id: 215280678,
},
{
  name: 'אסתי',
  id: 215280679,
},
];
let myarruser = localStorage.getItem("usersarr");
let correntusers;
if (myarruser != null)
  correntusers = JSON.parse(localStorage.getItem("usersarr"));
else
  correntusers = users;
const s2 = JSON.stringify(correntusers);
localStorage.setItem("usersarr", s2);

let flag = "false";

//עמוד בבית
var slider = document.getElementById("selectrooms");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}
var slider2 = document.getElementById("selectmoney");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
let bool = "false";
document.querySelector(".forrishum").onclick = function () {
  (async () => {
    const { value: formValues } = await Swal.fire({
      title: " הכנס שם משתמש וסיסמה",
      html: `
          <input id="swal-input1" class="swal2-input" placeholder=" שם">
          <input id="swal-input2" class="swal2-input" placeholder=" תעודת זהות">
        `,
      focusConfirm: false,
      preConfirm: () => {
        let x = document.getElementById("swal-input1").value;
        let y = document.getElementById("swal-input2").value;
        for (let i = 0; i < correntusers.length; i++) {
          if (correntusers[i].name == x && correntusers[i].id == y) {
            bool = "true";

          }
        }
        if (bool == "false") {
          const newname = {
            name: x, id: y
          }
          correntusers.push(newname);
          const f = JSON.stringify(correntusers);
          localStorage.setItem("usersarr", f);
        }
      }
    });
    if (formValues && bool == "true") {
      Swal.fire(JSON.stringify('שמך כבר רשום במערכת'));
    }
    if (formValues && bool == "false") {
      Swal.fire(JSON.stringify('לקוח חדש, פרטיך נרשמו במערכת'));
    }
    bool = "false";

  })()
}
// //פונקציה זו יוצרת קישור בהתאם לנתונים
slider2.oninput = function () {
  output2.innerHTML = this.value; if (flag == "false") {
    document.querySelector(".l").innerHTML += `<a href="apartments.html?area=${document.querySelector(".selectarea").value}&rooms=${document.querySelector("#selectrooms").value}&many=${document.querySelector("#selectmoney").value}">
    <button class="cta">
                    <span class="l">Get Started</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
    </a>`; flag = "true"
  }

}
//
