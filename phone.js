// Input, Interaction, and Accessibility. Spring 2018, Assignment 1


/* TAB CONTROL */


//Hide all but the default tab and make button active
$(document).ready(function() { //do this when the document is loaded
    $("#dialerContent").show(); //show the HTML element with ID "dialer"
    $("#contactsContent").hide(); //hide the element with ID "contacts"
    $("#addContent").hide(); //hide the element with ID "add"

    $("#dialer").addclass("pure-button-active");
});


//When the dialer button is clicked, hide the contacts and add contact tabs
$("#dialer").click(function() { //when "dialer" is clicked
    $("#dialerContent").show(); //show dial element
    $("#contactsContent").hide(); //hide other elements
    $("#addContent").hide();

    $("#dialer").addclass("pure-button-active");
    $("#contacts").removeclass("pure-button-active");
    $("#add").removeclass("pure-button-active");
});

//When the contacts button is clicked, hide the dialer and add contact tabs
$("#contacts").click(function() { //when "contacts" is clicked
    $("#dialerContent").hide();
    $("#contactsContent").show();
    $("#addContent").hide();

     $("#contacts").addclass("pure-button-active");
    $("#dialer").removeclass("pure-button-active");
    $("#add").removeclass("pure-button-active");
    //also load buttons from a list of contacts
    listContacts();
});

//When the add contact button is clicked, hide the contacts and dialer tabs
$("#add").click(function() { //when "add contacts" is clicked
    $("#dialerContent").hide(); //hide dial element
    $("#contactsContent").hide();
    $("#addContent").show();

    $("#add").addclass("pure-button-active");
    $("#contacts").removeclass("pure-button-active");
    $("#dialer").removeclass("pure-button-active");
});


/* DIALER BUTTON CONTROL */
//When button is pressed, perform relevant action on dialer text input field
function inputNum(element){
    $("#dialer-box").val($("#dialer-box").val()+element.value);
}



/*https://stackoverflow.com/questions/20060915/javascript-how-do-you-set-the-value-of-a-button-with-an-element-from-an-array referenced to make this function */
function listContacts(){
    //Generate a list of contacts
    //list of names generated at listofrandomnames.com
    var contacts = [Archie Reeb, "Marc Flavell", "Kasey Burr", "Katharyn Lanford", "Sharilyn Krohn", "Eda Brinkmann", "Neida Stlouis", "Ranee Maltby", "Tod Bottomley","Margit Mazzola"];


    for(var i=0; i<contacts.length; i++){
        $("#contactsContent").append("<div>");
        $("#contactsContent").append("<button class='contactsList pure-button' value='contact'" + i + "'>");
        $("#contactsContent").append(contacts[i] + "</button>");
        $("#contactsContent").append("</div>");
    }
};
