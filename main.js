let availableValue = parseFloat(document.getElementById("available-value").innerText);
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const historySection = document.getElementById("history-section");
const card1Title = document.getElementById("card1-title").innerText.replace(", Bangladesh", ""); // Remove ", Bangladesh" from main title
const card2Title = document.getElementById("card2-title").innerText.replace(", Bangladesh", ""); 
const card3Title = document.getElementById("card3-title").innerText;
const mainSection = document.getElementById("main");

// Open blog.html in same tab
function IndexToBlogPage() {
    window.location.href = 'blog.html'; // Replace 'blog.html' actual page URL
}
function BlogToIndexPage() {
    window.location.href = 'index.html'; 
}

// // For opening blog.html page in a new tab
// function IndexToBlogPage() {
//     window.open('blog.html', '_blank'); // Replace 'blog.html' with the actual page URL
// }

// Event Handling for Card-1 Donation Button
document.getElementById("card1-btn").addEventListener("click", function () {
    const inputValueString = document.getElementById("card1-input").value; // String Value
    const inputValue = getInputValueInFloat(inputValueString);

    // All Types of Input and Amount Validation for Card-1
    if (inputValidation(inputValue, inputValueString) === false) {
        clearField("card1-input");
        return;
    }
    const existingValue = getExistingSpanValueInFloat("card1-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card1-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card1Title);
    clearField("card1-input");
    // successAlert();
    document.getElementById("modal").showModal();  //open the modal using ID.showModal() method (from daisy UI)
});

// Event Handling for Card-2 Donation Button
document.getElementById("card2-btn").addEventListener("click", function () {
    const inputValueString = document.getElementById("card2-input").value; // String Value 
    const inputValue = getInputValueInFloat(inputValueString);
        
    // All Types of All Types of Input and Amount Validation for Card-2
    if (inputValidation(inputValue, inputValueString) === false) {
        clearField("card2-input");
        return;
    }
    const existingValue = getExistingSpanValueInFloat("card2-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card2-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card2Title);
    clearField("card2-input");
    // successAlert();
    document.getElementById("modal").showModal();  //open the modal using ID.showModal() method (from daisy UI)
});

// Event Handling for Card-3 Donation Button
document.getElementById("card3-btn").addEventListener("click", function () {
    const inputValueString = document.getElementById("card3-input").value; // String Value  
    const inputValue = getInputValueInFloat(inputValueString);

    // All Types of All Types of Input and Amount Validation for Card-3
    if (inputValidation(inputValue, inputValueString) === false) {
        clearField("card3-input");
        return;
    }
    const existingValue = getExistingSpanValueInFloat("card3-donation");
    const totalDonation = inputValue + existingValue;
    addValueToSpan("card3-donation", totalDonation);
    availableValue -= inputValue;
    addValueToSpan("available-value", availableValue);
    getHistory(inputValue, card3Title);
    clearField("card3-input");
    // successAlert();
    document.getElementById("modal").showModal()  //open the modal using ID.showModal() method (from daisy UI)

});

// Event Handling for History Button
historyBtn.addEventListener("click", function () {
    // historyBtn.classList.toggle("bg-primary", "font-semibold", "text-txt11") 
    // donationBtn.classList.toggle("bg-primary", "font-semibold", "text-txt11", "font-medium", "text-[#111111B3]")
    historyBtn.classList.add("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.remove("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.add("font-medium", "text-[#111111B3]")
    mainSection.classList.add("hidden")
    historySection.classList.remove("hidden")

});

// Event Handling for Donation Button
donationBtn.addEventListener("click", function () {
    // historyBtn.classList.toggle("bg-primary", "font-semibold", "text-txt11")
    //donationBtn.classList.toggle("bg-primary", "font-semibold", "text-txt11")
    historyBtn.classList.remove("bg-primary", "font-semibold", "text-txt11")  
    donationBtn.classList.add("bg-primary", "font-semibold", "text-txt11")
    donationBtn.classList.remove("font-medium", "text-[#111111B3]")
    historySection.classList.add("hidden")
    mainSection.classList.remove("hidden")
});

// Reusable Function to Update Donation in Each Card
function addValueToSpan(id, inputValue) {
    const donationSpan = document.getElementById(id);
    donationSpan.innerText = inputValue.toFixed(2);
}

// Reusable Function to Get the Existing Donation Value from Each Card
function getExistingSpanValueInFloat(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// Reusable Function to Make the Input value from String to Float
function getInputValueInFloat(inputValueString) {
    return parseFloat(inputValueString);
}

// Reusable Function to Get the Date and time in String Format
function getDateTime() {
    return Date().toString();
}

// Function to Create History Record for Every Donate Cards
function getHistory(inputValue, cardTitle) {
    let historyDiv = document.createElement("div");
    historyDiv.innerHTML += `
    <div class="navbar rounded-lg border-2 border-[#111111A] flex-col items-start md:pl-10 px-4 py-5 mb-5">
        <p class="font-bold text-[20px] text-txt11"> ${inputValue.toFixed(2)} Taka is Donated for ${cardTitle}, Bangladesh</p>
        <p class="font-light text-[16px] text-txt11"> Date: ${getDateTime()}</p>
    </div>
    `
    // historySection.appendChild(historyDiv); // It shows the Last Input as Last Record
    historySection.insertBefore(historyDiv, historySection.firstChild); //Show the Last Input as First Record 
}

// Reusable Function for All Types of Input Validation
function inputValidation(inputValue, inputValueText) {
    // Validate Each Character is Number or Not (100abc, 100.2z, 500xy500 This Type of  Input Value)
    for(let i = 0; i<inputValueText.length; i++){
        if(inputValueText[i] === "."){     // Ignore point for Float Value
            continue;
        }
        else{
            if(isNaN(inputValueText[i])){
                alert("Please insert a valid positive number ..!!!");
                return false;
            }
        }      
    }

    // Validate Negative, text / String, Empty field
    if (inputValue <= 0 || isNaN(inputValue)) {
        alert("Please insert a valid positive number ..!!!");
        return false;
    }

    // Validate Donation Value Can Not be Greater Than Available Balance
    else if(inputValue > availableValue){
        alert("Available balance is low for this donation");
        return false;
    }
}

// Function to Clear the Input Field After Every Iteration
function clearField(id) {
    document.getElementById(id).value = "";
}


////////////// Customized Success Alert with Close Button (For Future)
// function successAlert(){
//     document.getElementById("success-alert").classList.remove("hidden");
//     document.getElementById("alert-close-btn").addEventListener("click", function(){
//     document.getElementById("success-alert").classList.add("hidden");
//     })
// }

