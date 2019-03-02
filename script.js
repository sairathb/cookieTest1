function onLoad() {
    var cookies = document.cookie.split(';');
    var name = cookies.find(c => { return c.trim().startsWith('name') });
    name = name ? name.trim().split('=')[1] : '';
    document.getElementById('name').value = name;
    setNameMessage(false);
}

function setNameMessage(shouldSetCookie) {
    var name = document.getElementById('name').value;
    document.getElementById('nameLabel').innerHTML = name;
    document.getElementById('dineLabel').innerHTML = _dine();
    if (shouldSetCookie) {
        var expires = new Date();
        expires.setMonth(expires.getMonth() + 12);
        document.cookie = "name=" + name + ";expires=" + expires + ";path=/";
    }
    if (!name) {
        document.getElementById('foodPanel').setAttribute('style', 'display: none');
        document.getElementById('namePanel').setAttribute('style', 'display: block');
    } else {
        document.getElementById('foodPanel').setAttribute('style', 'display: block');
        document.getElementById('namePanel').setAttribute('style', 'display: none');
    }
    return false;
}

function _dine() {
    var hour = (new Date()).getHours();
    var message = '';
    if (hour < 11) message = 'breakfast';
    else if (hour >= 11 && hour < 15) message = 'lunch';
    else if (hour >= 15 && hour < 18) message = 'evening snacks';
    else if (hour >= 18) message = 'dinner';
    return message;
}