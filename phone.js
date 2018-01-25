// Input, Interaction, and Accessibility. Spring 2018, Assignment 1

//Hide all but the default tab
$(document).ready(function() { //do this when the document is loaded
    $("#dialerContent").show(); //show the HTML element with ID "dialer"
    $("#contactsContent").hide(); //hide the element with ID "contacts"
    $("#addContent").hide(); //hide the element with ID "add"
});


//When the dialer button is clicked, hide the contacts and add contact tabs
$("#dialer").click(function() { //when "dialer" is clicked
    $("#dialerContent").show(); //show dial element
    $("#contactsContent").hide(); //hide other elements
    $("#addContent").hide();
});

//When the contacts button is clicked, hide the dialer and add contact tabs
$("#contacts").click(function() { //when "contacts" is clicked
    $("#dialerContent").hide();
    $("#contactsContent").show();
    $("#addContent").hide();
});

//When the add contact button is clicked, hide the contacts and dialer tabs
$("#add").click(function() { //when "add contacts" is clicked
    $("#dialerContent").hide(); //hide dial element
    $("#contactsContent").hide();
    $("#addContent").show();
});
