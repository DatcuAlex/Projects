function changeStatus(button) {
    const complaint = button.closest(".reclamatie");
    const statusSpan = complaint.querySelector(".status span");

    statusSpan.textContent = "Resolved";
    button.disabled = true;
    button.textContent = "Resolved";

    showNotification();
}
function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 5000);
}
function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const Mesaj_success = document.getElementById('Mesaj_success');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (this.checkValidity()) {
            Mesaj_success.style.display = 'block';

            setTimeout(function () {
                Mesaj_success.style.display = 'none';
            }, 5000);

            form.reset();
        } 
    });
});
