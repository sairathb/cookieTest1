function onLoad() {
    var cookies = document.cookie.split(';');
    var name = cookies.find(c => { return c.trim().startsWith('name') });
    name = name ? name.trim().split('=')[1] : '';
    document.getElementById('name').value = name;
    setNameMessage(false);
    setDineOptions();
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
    else if (hour >= 15 && hour < 18) message = 'evening-snacks';
    else if (hour >= 18) message = 'dinner';
    return message;
}

function setDinePreferance() {
    var choice = document.getElementById('choice').value;
    var expires = new Date();
    expires.setMonth(expires.getMonth() + 12);
    document.cookie = "currentChoice=" + choice + ";expires=" + expires + ";path=/";
    var dine = _dine();
    var cookies = document.cookie.split(';');
    var options = cookies.find(c => { return c.trim().startsWith(dine) });
    options = options ? JSON.parse(options.trim().split('=')[1]) : [];
    var index = options.indexOf(choice);
    if (index == -1) {
        options.push(choice);
    }
    document.cookie = `${dine}=${JSON.stringify(options)};expires=${expires};path=/`;
    document.getElementById('foodPanel').setAttribute('style', 'display: none');
    document.getElementById('currentDineLabel').innerHTML = choice;
    document.getElementById('orderPanel').setAttribute('style', 'display: block');
}

function setDineOptions() {
    var dine = _dine();
    var cookies = document.cookie.split(';');
    var options = cookies.find(c => { return c.trim().startsWith(dine) });
    options = options ? JSON.parse(options.trim().split('=')[1]) : [];
    var optionHtml = '';
    options.forEach(option => {
        optionHtml += `<a href="#" onclick="document.getElementById('choice').value='${option}'" class="list-group-item">${option}</a>`
    })
    document.getElementById('options').innerHTML = optionHtml;
}

function deleteAllCookies() {
    var c = document.cookie.split("; ");
    for (i in c)
        document.cookie = /^[^=]+/.exec(c[i])[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    location.reload();
}