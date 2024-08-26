document.addEventListener('DOMContentLoaded', function() {
    const timeSelect = document.getElementById('time');

    // Function to populate time slots
    function populateTimeSlots() {
        const times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    // Call the function to populate time slots when the page loads
    populateTimeSlots();

    // Handle form submission
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value;

        // Display a confirmation message (for demo purposes)
        const confirmationMessage = `
            Thank you, ${name}! Your appointment has been scheduled for ${date} at ${time}.
            We will contact you at ${email} or ${phone} if needed.`;
        document.getElementById('confirmation-message').textContent = confirmationMessage;

        // Clear form fields (optional)
        document.getElementById('appointment-form').reset();
    });
});
