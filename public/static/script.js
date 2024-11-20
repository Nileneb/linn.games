document.addEventListener('DOMContentLoaded', function () {
    var notification = document.getElementById('push-notification');
    var acceptBtn = document.getElementById('accept-btn');

   
    notification.style.display = 'block';

    
    acceptBtn.addEventListener('click', function () {
        notification.style.display = 'none';
    });

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var mailto_link = 'mailto:bene.linn@yahoo.de?subject=Kontaktanfrage von ' + encodeURIComponent(name) +
            '&body=Name: ' + encodeURIComponent(name) + '%0A' +
            'Email: ' + encodeURIComponent(email) + '%0A' +
            'Nachricht: ' + encodeURIComponent(message);

        window.location.href = mailto_link;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Document fully loaded and parsed.");

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    const videoElement = document.createElement('video');
    videoElement.src = '/video';  // Flask-Endpunkt f�r das Video
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = false;

    videoContainer.appendChild(videoElement);
    document.body.appendChild(videoContainer);
    console.log("Video element appended and started.");

    const cookieNotification = document.getElementById('push-notification');

    if (!cookieNotification) {
        console.error("Cookie notification element not found!");
        return;
    }

    console.log("Cookie notification element found.");

    videoElement.addEventListener('play', function () {
        console.log("Video started playing.");
        videoContainer.style.visibility = 'visible';  // Video-Container sichtbar machen
        cookieNotification.classList.add('visible');
    });

    videoElement.addEventListener('ended', function () {
        console.log("Video ended.");
    });

    videoElement.addEventListener('canplay', function () {
        console.log("Video is ready to play.");
    });
});
function validateRegistration() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwoerter stimmen nicht ueberein.");
        return false;
    }

    var regexPassword = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password)) {
        alert("Das Passwort muss mindestens 8 Zeichen lang sein, eine Zahl und ein Sonderzeichen enthalten.");
        return false;
    }

    var birthdate = document.getElementById('birthdate').value;
    var regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regexDate.test(birthdate)) {
        alert("Das Geburtsdatum muss im Format TT/MM/JJJJ sein.");
        return false;
    }

    return true;
}


