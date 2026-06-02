// ================= BOOKING FORM =================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get values
            const name = form.querySelector('input[type="text"]').value;
            const phone = form.querySelectorAll('input[type="text"]')[1]?.value;
            const service = form.querySelector("select").value;
            const date = form.querySelector('input[type="date"]').value;
            const time = form.querySelector('input[type="time"]').value;

            // Basic validation
            if (!name || !phone || !service || !date || !time) {
                alert("Please fill in all fields to book your appointment.");
                return;
            }

            // Success message
            alert(
                "Booking Successful!\n\n" +
                "Name: " + name + "\n" +
                "Service: " + service + "\n" +
                "Date: " + date + "\n" +
                "Time: " + time + "\n\n" +
                "We will confirm your appointment shortly."
            );

            // Reset form
            form.reset();
        });
    }

});
// ================= SMOOTH SCROLL =================

const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ================= ACTIVE NAV =================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "gold";
        link.style.fontWeight = "bold";
    }
});