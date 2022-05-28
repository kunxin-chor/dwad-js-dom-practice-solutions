
function getFormValues() {

    // step 1: select the <input type="email"> element
    let emailElement = document.querySelector("#email-address");    
    let email = emailElement.value;

    // let model = null;
    // // get all the radio buttons
    // let allRadioButtons = document.querySelectorAll(".phone-type");
    // // use a for loop to determine which one has been checked
    // for (let rb of allRadioButtons) {
    //     if (rb.checked) {            
    //         model = rb.value;
    //         break;
    //     }
    // }
    let model = document.querySelector('.phone-type:checked').value;
    
 
    let services = [];
    // let allCheckboxes = document.querySelectorAll(".services");
    // for (let eachCheckbox of allCheckboxes) {
    //     if (eachCheckbox.checked) {
    //         services.push(eachCheckbox.value)
    //     }
    // }

     document.querySelectorAll(".services:checked").forEach(function(element){
        services.push(element.value)
    })

    let pickup = document.querySelector("#pick-up").value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
