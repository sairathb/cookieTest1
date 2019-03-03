var expires = new Date();
expires.setMonth(expires.getMonth() + 12);
var cookies =  document.cookie.split(';');

document.cookie = "agent=" + navigator.userAgent.replace(/;/g,',') + ";expires=" + expires + ";path=/";
document.cookie = "language=" + navigator.language + ";expires=" + expires + ";path=/";
document.cookie = "appversion=" + navigator.appVersion.replace(/;/g,',') + ";expires=" + expires + ";path=/";
document.cookie = "memory=" + navigator.deviceMemory + ";expires=" + expires + ";path=/";
document.cookie = "cookieEnabled=" + navigator.cookieEnabled + ";expires=" + expires + ";path=/";

function onLogin() {
    var username = cookies.find(c => { return c.trim().startsWith('username') });
    if(username)
        location.href = '/home.html';
}

function onHome(){
    var username = cookies.find(c => { return c.trim().startsWith('username') });
    username = username ? username.trim().split('=')[1] : '';
    if(!username)
        location.href = '/login.html';
    document.getElementById('username').innerHTML = username;
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(password !== "class@714") {
        document.getElementById('errorMessage').setAttribute('style', 'display: block');
        return false;
    }
    document.cookie = "username=" + username + ";expires=" + expires + ";path=/";
}

function logout(){
    var c = document.cookie.split("; ");
    for (i in c)
        document.cookie = /^[^=]+/.exec(c[i])[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    location.reload();
}

function getIP(json) {
    document.cookie = "ip=" + json.ip + ";expires=" + expires + ";path=/";
}