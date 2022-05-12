// External Javascript file for the Sign-up Widgets
// Datepicker Widget for Date of Birth 
$(function getbirthDate(){
    $("#birthDate").datepicker({
        yearRange: '1972:2022',
        changeMonth: true,
        changeYear: true
    });
});

// Autocomplete Widget for Provinces
$(function getProvince (){
    let provinceMindanao = [
        "Agusan del Norte",     
        "Agusan del Sur",
        "Basilan",
        "Bukidnon",
        "Camiguin",
        "City of Isabela",
        "Compostella Valley",
        "Compostella Valley",
        "Cotabato City",
        "Davao del Norte",
        "Davao del Sur",
        "Davao Occidental",
        "Davao Oriental",
        "Dinagat Islands",
        "Lanao del Norte",
        "Lanao del Sur",
        "Maguindanao",
        "Misamis Occidental",
        "Misamis Oriental",
        "North Cotabato",
        "Sarangani",
        "South Cotabato",
        "Sultan Kudarat",
        "Sulu",
        "Surigao del Norte",
        "Surigao del Sur",
        "Tawi-Tawi",
        "Zamboanga del Norte",
        "Zamboanga del Sur",
        "Zamboanga Sibugay"
    ];  
    $("#provinceMin").autocomplete({
        source: provinceMindanao,
        minLength: 0,
        autoFocus: true
    });
});

// Spinner Widget for Year Level
 $(function getYearLevel() {  
    $( "#yearLevel" ).spinner({
        min: 1,
        max: 4
    }); 
 });
 
 // For submit event
function submitButton (){
    // The console.log codes are for checking purposes if the input fields are working 
    // Retrieving data from the form
    let firstName = $("#firstName").val();
    console.log(firstName);

    let middleName = $("#middleName").val();
    console.log(middleName);

    let lastName = $("#lastName").val();
    console.log(lastName);

    // Store the selected gender from radio button widget
    let genderInput = [];
    $('form input[type=radio]').each(function(){
        if ($(this).is(":checked")){
            genderInput.push($(this).attr('value'));
        }
    });
    console.log(genderInput);

    // Store the selected date of birth from datepicker widget
    let birthDate =  $("#birthDate").datepicker('getDate');
    let formatDate = $.datepicker.formatDate("mm-dd-yy", birthDate);
    console.log(formatDate);

    // Store the selected province from autocomplete widget
    let selectedProvince = $("#provinceMin").val();
    console.log(selectedProvince);

    // Store the selected year level from spinner widget
    let yearLevel = $("#yearLevel").val();
    console.log(yearLevel);

    // Stores all the retrieved data
    let outputData = 
        'First Name: ' + firstName + '\n' +
        'Middle Name: ' + middleName + '\n' +
        'Last Name: ' + lastName + '\n' +
        'Gender: ' + genderInput + '\n' +
        'Date of Birth: ' + formatDate + '\n' +
        'Province: ' + selectedProvince + '\n' +
        'Year Level: ' + yearLevel;

    // Convert the text to BLOB in order to save the data to txt file
    const textToBLOB = new Blob([outputData], {type: 'text/plain' });
    const sFileName = 'signupData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
}