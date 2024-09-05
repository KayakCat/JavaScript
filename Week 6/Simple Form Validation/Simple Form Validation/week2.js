// JavaScript Document - wow such empty! Thanks Jay!

// it's validation time! we put the fun in function and the function in dysfunction - because we are versatile like that

function funValidation(){
    //use getelementbyid to get input values(input fields)
    const firstName = document.getElementById(`first-name`);
    const lastName = document.getElementById(`last-name`);
    const email = document.getElementById(`email`);
    const confirmEmail = document.getElementById(`confirm-email`);
    const phone = document.getElementById(`um-hello`);

    //use getelementbyid for the span elements
    //these are for when there is an error, this will allow us to change the class so the label will turn the color red or maybe hotpink to display a validation error to the user
    const fnError = document.getElementById(`fn-error`);
    const lnError = document.getElementById(`ln-error`);
    const emailError = document.getElementById(`email-error`);
    const confirmEmailError = document.getElementById(`confirm-email-error`);
    const phoneError = document.getElementById(`phone-error`);

    //regular expressions - there is nothing regular about this mumbo jumbo! 
    //first name and last name will just use name regex
    const nameReg = /^[A-Za-z\-]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^\d{10}$/;

    //is it valid? we need to create a boolean value by creating a variable that equals true (i named my variable isValid but i could name it pineAppleOnPizzaYes if i wanted to), the validation will set itself to false if any of the validations fail, otherwise it will stay true and the form will be submitted
    let isValid = true;

    //validation for first name - if/else statment with a validation boolean that equals false for error handling
    // using the === sign to make sure that when i check the name value and i am looking for an empty string, so there will be no conversion to anything else - JUST EMPTY STRING
    if(firstName.value === ''){
        fnError.textContent = 'This field cannot be left blank, please enter your first name.';//this is setting up the error message if the field is left blank
        firstName.style.borderColor = `hotpink`;//setting up the color of the error message by using the id
        isValid = false;//this is the boolean being set to false if the error is triggered
        //this alternative condition is to make sure the name does not have any special characters in it. The ! is a not condition. So if the RegEx stored in the nameReg variable is not followed it will trigger isValid to be false
    }
    else if(!nameReg.test(firstName.value)){
        fnError.textContent = 'Your name cannot include any special characters.';
        firstName.style.borderColor = `hotpink`;
        isValid = false;
    }
    else {
        fnError.textContent = '';//this will clear out the element so there are no error messages displayed
        firstName.style.borderColor = '';//setting the color to default since there is no error
    }

    //validation for last name
    //since this is using the same RegEx copy and paste is the way to go. Change all the first names to last name 
    if(lastName.value === ''){
        lnError.textContent = 'This field cannot be left blank, please enter your last name.';//this is setting up the error message if the field is left blank
        lastName.style.borderColor = `hotpink`;//setting up the color of the error message by using the id
        isValid = false;//this is the boolean being set to false if the error is triggered
        //this alternative condition is to make sure the name does not have any special characters in it. The ! is a not condition. So if the RegEx stored in the nameReg variable is not followed it will trigger isValid to be false
    }
    else if(!nameReg.test(lastName.value)){
        lnError.textContent = 'Your last name cannot include any special characters.';
        lastName.style.borderColor = `hotpink`;
        isValid = false;
    }
    else {
        lnError.textContent = '';//this will clear out the element so there are no error messages displayed
        lastName.style.borderColor = '';//setting the color to default since there is no error
    }

    // Email Validation - if the email is not entered in a valid format - ex. email@email.com, an error will be triggered
    if (!emailReg.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        email.style.borderColor = 'hotpink';
        isValid = false;
    } else {
        emailError.textContent = '';
        document.getElementById('email').style.borderColor = '';
    }

    // Email Confirmation Validation- if the confirmation email (second time entering email) does not match it displays a message saying emails do not match
    if (confirmEmail.value !== email.value) {
        confirmEmailError.textContent = 'Emails do not match.';
        confirmEmail.style.borderColor = 'hotpink';
        isValid = false;
    } else {
        confirmEmailError.textContent = '';
        confirmEmail.style.borderColor = '';
    }

    // Phone Number Validation-if phone number isn't 10 digits its a no go
    if (!phoneReg.test(phone.value)) {
        phoneError.textContent = 'Phone number must be 10 digits.';
        phone.style.borderColor = 'hotpink';
        isValid = false;
    } else {
        phoneError.textContent = '';
        phone.style.borderColor = '';
    }

    if (isValid) {
        // Hide the form and show the confirmation
        document.getElementById('form').style.display = 'none';
        document.getElementById('confirmation').classList.remove('hidden');

       
        //creating an object is basically a library of things to describe the variable created
        //an object has two parts - the data(attributes or fields) and the methods(behavior or functions)
        const person = {
            fname: firstName.value,
            lname: lastName.value,
            email: email.value,
            phone: formatPhoneNumber(phone.value)
        };

         // Person object will appear as confirmation (with CORRECT info the user entered)
         const info = document.getElementById('info');
         info.innerHTML = `Congratulations you are now enrolled in Adulting 101<br>
                           Name: ${person.fname} ${person.lname}<br>
                           Email: ${person.email}<br>
                           Phone: ${person.phone}`;
        console.log('Form Data:', person);//showing the form data
    }
    
}

// Function to format phone number with dashes
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}





