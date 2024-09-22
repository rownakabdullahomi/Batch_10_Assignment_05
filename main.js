let availableValue = parseFloat(document.getElementById("available-value").innerText);
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const historySection = document.getElementById("history-section");
const card3Title = document.getElementById("card3-title").innerText;
const card2Title = document.getElementById("card2-title").innerText;
const card1Title = document.getElementById("card1-title").innerText;

// Event Handling for Card-1 Donation Button
document.getElementById("card1-btn").addEventListener("click", function () {
    const inputValue = getInputValueInFloat("card1-input");
    const existingValue = getExistingSpanValueInFloat("card1-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card1-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card1Title);
});



// Event Handling for Card-2 Donation Button
document.getElementById("card2-btn").addEventListener("click", function () {
    inputValue = getInputValueInFloat("card2-input");
    const existingValue = getExistingSpanValueInFloat("card2-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card2-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card2Title);
});



// Event Handling for Card-3 Donation Button
document.getElementById("card3-btn").addEventListener("click", function () {
    inputValue = getInputValueInFloat("card3-input");
    const existingValue = getExistingSpanValueInFloat("card3-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card3-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card3Title);
    
    

});



historyBtn.addEventListener("click", function(){
    historyBtn.classList.add("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.remove("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.add("font-medium", "text-[#111111B3]")

    
});
donationBtn.addEventListener("click", function(){
    historyBtn.classList.remove("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.add("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.remove("font-medium", "text-[#111111B3]")
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

function getDateTime(){
    return Date().toString();
}

function getHistory(inputValue, cardTitle){
    historySection.innerHTML += `
    <div class="navbar rounded-lg border-2 border-[#111111A] flex-col items-start pl-10 py-5 mb-5">
        <p class="font-bold text-[20px] text-txt11"> ${inputValue.toFixed(2)} Taka is Donated for ${cardTitle}, Bangladesh</p>
        <p class="font-light text-[16px] text-txt11"> Date: ${getDateTime()}</p>
    </div>
    `
}

