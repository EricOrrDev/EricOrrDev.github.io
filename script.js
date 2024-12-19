document.addEventListener("DOMContentLoaded", function () {
    const public_key = "qm12bETfWVUNNzcQq";
    const service_id = "service_fwes1u6";
    const template_id ="template_svtr3lz";

    emailjs.init(public_key); // Replace with your EmailJS public key

    const contactButton = document.getElementById("contactButton");
    const contactForm = document.getElementById("contactForm");
    const contactFormInner = document.getElementById("contactFormInner");

    // Toggle form visibility
    contactButton.addEventListener("click", function () {
        contactForm.classList.toggle("active");
    });

    // Handle form submission
    contactFormInner.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send(service_id, template_id, {
            from_name: name,
            from_email: email,
            message: message,
        }).then(
            function (response) {
                alert("Message sent successfully!");
                contactFormInner.reset(); // Reset form fields
            },
            function (error) {
                alert("Failed to send message. Please try again later.");
            }
        );
    });
});
