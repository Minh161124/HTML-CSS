// var fullName = 'Do Nhat Minh';
// var i=5;
// var age = i+2; 
// alert('你好'+fullName+' '+age+'岁'+'，环境来到这里');
// alert: thong bao
// confirm: thong bao xac nhan
// confirm('Xac nhan ban khong phai nguoi may!')
// prompt: xac nhan + textbox
// prompt('Nhap tuoi de tiep')
// settimeout: truyen vao 1 funtion va truyen vao 1 time va chi chay 1 lan duy nhat
// setTimeout(function() { alert('Thongbao')}, 1000)
// setInterval: truyen vao 1 funtion va truyen vao 1 time va chay theo chu ki moiligiay da dat ra. 1000mls=1s
// setInterval(function() { alert('Thongbao')}, 6000)

// var languages =['javascript','Ruby','PHP',null];
//  console.log(Array.isArray (new Array))
// console.log(languages[2])
// console.log(typeof languages.toString())
// console.log( languages.toString())
// console.log( languages.join('; '))
// var languages2 =['TT','TANH','TVIET'];
// console.log(languages.concat(languages2))
// console.log(languages.slice(1,3))

// var myInfo = {
//     name: 'Nhat Minh',
//     age: 22,
//     address: Hanoi,
// }

// var myKey = 'address'
// console.log(myInfo[myKey])// lay du lieu myKey
// myInfo['my-email'] = 'nhatmin1611@';//Them du lieu
// console.log(myInfo.name)//Xuat du lie dung key(name, age,...)

// function User(firstName, lastName, avata) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avata = avata;
// }
// User.prototype.className = 'F8';

// var athor = new User('minh', 'do', 'avatar')
// console.log(athor);

// //Date
// var date = new Date();
// var day =date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();
// var hour = date.getHours()

// console.log("${hour}/${date}/${month}/${year}");

//Signup
function signup(e) {
  e.preventDefault();

  const userName = document.getElementById("username").value;
  const passWord = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (!userName || !passWord || !confirmPass) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (passWord !== confirmPass) {
    alert("Mật khẩu xác nhận không trùng khớp!");
    return;
  }

  if (localStorage.getItem(userName)) {
    alert("Tên người dùng đã tồn tại!");
    return;
  }

  const user = {
    userName: userName,
    passWord: passWord
  };

  localStorage.setItem(userName, JSON.stringify(user));
  alert("Đăng ký thành công!");
  window.location.href = "login.html";
}


//Login
function login(e) {
  e.preventDefault(); // tránh reload trang

  const userName = document.getElementById("username").value;
  const passWord = document.getElementById("password").value;

  if (!userName || !passWord) {
    alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
    return;
  }

  // Lấy dữ liệu từ localStorage theo username
  const storedData = localStorage.getItem(userName);

  if (!storedData) {
    alert("Tài khoản không tồn tại!");
    return;
  }

  // Chuyển JSON string -> object
  const storedUser = JSON.parse(storedData);

  // So sánh mật khẩu
  if (storedUser.passWord !== passWord) {
    alert("Sai mật khẩu!");
    return;
  }

  alert("Đăng nhập thành công!");
  window.location.href = "index.html";
}
