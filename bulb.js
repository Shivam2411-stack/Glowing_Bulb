var glow = document.querySelector('#bulb');
var btn = document.querySelector('button');
var clickCount = 0;
var h3 = document.querySelector('h3');
var bd = document.querySelector('bulbsection');
var isManuallyOff = false;

function updateBulbStatus() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (clickCount === 0) {  // Check if bulb is not manually on
        if ((hours > 6 || (hours === 6 && minutes > 15)) && hours < 18) {
            bulbOff();  // Automatic off
            h3.innerHTML='Bulb is Automated \nAnd its Off ';
            h3.style.color = '#F6F1D5 ';
        } else {
            bulbOn();  // Automatic on
            h3.innerHTML='Bulb is Automated \nAnd its On';
            h3.style.color = ' ';
        }
    }
}

function bulbOn() {
    glow.style.backgroundColor = '#F6F1D5 ';
    glow.style.boxShadow = '0px 0px 32px 15px #F6F1D5 ';
    glow.style.transition = 'all 0.22s ease-in-out';
    h3.style.transition = 'all 0.3s ease-in-out';
    h3.innerHTML = "Bulb is On";
    h3.style.color = 'greenyellow ';
    h3.style.fontSize = '32px';
    clickCount = 1;
    isManuallyOff = false;  // Reset manual off state when turned on
}

function bulbOff() {
    glow.style.backgroundColor = 'grey';
    glow.style.boxShadow = 'none';
    h3.innerHTML = 'Bulb is Off';
    glow.style.border = 'none';
    h3.style.transition = 'all 0.22s ease-in-out';
    h3.style.color = '#F6F1D5 ';
    h3.style.fontSize = '35px';
    clickCount = 0;
}

btn.addEventListener('click', function () {
    if (clickCount == 0) {
        bulbOn();
        isManuallyOff = false;  // Reset manual off state when turned on manually
    } else {
        bulbOff();
        isManuallyOff = true;  // Set manual off state
    }
});

// Initial check and update every minute
updateBulbStatus();
setInterval(updateBulbStatus, 50000);
