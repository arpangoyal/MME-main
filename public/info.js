
let submit = document.querySelector(".submit");
submit.addEventListener("click", async function (e) {
  e.preventDefault();
  let name = document.querySelector("#fname").value;
  let address = document.querySelector("#address").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let farm_loc = document.querySelector("#farml").value;
  let cul_area = document.querySelector("#culti").value;
  let category = document.querySelectorAll("#scales");
  let cat_label = document.querySelectorAll("#variety");
  let crop = document.querySelectorAll(".crp");

  // console.log(crop);
  if (crop.length == 0) {
    alert("After insert crop name and selling month click ADD CROP");
    return;
  }

  let cropname = document.querySelectorAll(".cropname");
  let cropmonth = document.querySelectorAll(".month");

  let crop_arr = [];
  for (let j = 0; j < crop.length; j++) {
    let crop_details = {
      Crop: cropname[j].innerHTML,
      Selling_month: cropmonth[j].innerText,
    };
    crop_arr.push(crop_details);
  }

  if (
    name.length == 0 ||
    address.length == 0 ||
    phone.length == 0 ||
    email.length == 0 ||
    farm_loc.length == 0 ||
    cul_area.length == 0
  ) {
    alert("fields cannot be empty");
    return;
  }
  let cate_arr = [];
  for (let i = 0; i < 4; i++) {
    if (category[i].checked == true) {
      cate_arr.push(cat_label[i].innerText);
    }
  }
  if (cate_arr.length == 0) {
    alert("Select category");
    return;
  }
  if (email.length != 0) {
    let validmail = ValidateEmail(email);
    if (validmail == false) {
      alert("wrong email id");
    }
  }
  
  let farmer_details = {
    Name: name,
    address: address,
    Phone: Number(phone),
    E_mail: email,
    Farm_Location: farm_loc,
    Area_Cultivation: Number(cul_area),
    category: cate_arr,
    crop_info: crop_arr,
  };
  console.log(farmer_details);

  axios.post("https://mme-8cus.onrender.com/login", farmer_details)
  .then(function (response) {
    console.log(response+" "+hello)
    })
    .catch((er) => {
      console.log(er);
    });
});

function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
