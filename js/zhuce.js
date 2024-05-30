email.onchange = function () {
    var email = this.value;
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(email)) {
        //邮箱格式正确
    } else {
        alert("邮箱格式不正确");
    }
}
function namechange() {
    var x = document.getElementById("name").value.length;
    if (x <= 5) {
    } else {
        alert("姓名格式不正确");
    }
}
passworld.onchange = function () {
    var passworld = this.value;
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    if (reg.test(passworld)) {

    } else {
        alert("密码格式不正确");
    }
}
ispassworld.onchange = function () {
    var p1 = this.value;
    var p2 = document.getElementById("passworld").value;
    if (p2 == p1) {
    }
    else {
        alert("两次密码不相同");
    }
}

function subm() {
    var na = document.getElementById("name").value;
    var pword = document.getElementById("passworld").value;
    var ipword = document.getElementById("ispassworld").value;
    var email = document.getElementById("email").value;
    var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    var reg2 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var x = document.getElementById("name").value.length;
    // 将用户名、密码和邮箱保存到本地存储
    localStorage.setItem("username", na);
    localStorage.setItem("password", pword);
    localStorage.setItem("email", email);
    // 进行验证码验证
    var code = document.getElementById("code_input").value;
    if (verifyCode.validate(code) && pword == ipword && reg1.test(pword) && reg2.test(email) && x <= 5) {
        // 验证码验证通过且密码相等，跳转到目标页面
        window.location.href = "liuchenyu_1.html";
    } else {
        // 验证码验证失败或密码不相等，给出相应提示
        if (!verifyCode.validate(code)) {
            alert("验证码错误");
        } else if (pword !== ipword) {
            alert("密码不相同或者未输入");
        } else if (!reg1.test(pword)) {
            alert("密码格式不正确");
        } else if (!reg2.test(email)) {
            alert("邮箱格式不正确");
        } else if(x>5){
            alert("姓名格式不正确");
        }
    }
}

