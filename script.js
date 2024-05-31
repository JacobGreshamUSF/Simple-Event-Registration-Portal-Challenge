//U59555732
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const preferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(el => el.value);

    // Validate form fields
    if (!name || !email || !eventDate) {
        alert('Please fill out all required fields.');
        return;
    }

    // Display registration details
    const registrationDetails = document.getElementById('registrationDetails');
    registrationDetails.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${preferences.join(', ')}</p>
    `;
});
