let availableValue = parseFloat(document.getElementById("available-value").innerText);

// Event Handling for Card-1 Donation Button
document.getElementById("card1-btn").addEventListener("click", function () {
    const inputValue = getInputValueInFloat("card1-input");
    const existingValue = getExistingSpanValueInFloat("card1-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card1-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
});

// Event Handling for Card-2 Donation Button
document.getElementById("card2-btn").addEventListener("click", function () {
    inputValue = getInputValueInFloat("card2-input");
    const existingValue = getExistingSpanValueInFloat("card2-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card2-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
});

// Event Handling for Card-3 Donation Button
document.getElementById("card3-btn").addEventListener("click", function () {
    inputValue = getInputValueInFloat("card3-input");
    const existingValue = getExistingSpanValueInFloat("card3-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card3-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
});


function addValueToSpan(id, inputValue) {
    const donationSpan = document.getElementById(id);
    donationSpan.innerText = inputValue.toFixed(2);
}

function getExistingSpanValueInFloat(id){
    return parseFloat(document.getElementById(id).innerText);
}
function getInputValueInFloat(id) {
    return parseFloat(document.getElementById(id).value);
}

