let availableValue = parseFloat(document.getElementById("available-value").innerText);
let inputValue = 0;

// Event Handling for Card-1 Button
document.getElementById("card1-btn").addEventListener("click", function () {
    inputValue += getInputValueInFloat("card1-input");
    addValueToSpan("card1-donation", inputValue);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
});

function addValueToSpan(id, inputValue) {
    const donationSpan = document.getElementById(id);
    donationSpan.innerText = inputValue.toFixed(2);
}

function getInputValueInFloat(id) {
    return parseFloat(document.getElementById(id).value);
}

