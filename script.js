//insert date

var input = 

window.onload = function(){
    // variables for day, and setting = to current date using moment()
    var day = document.getElementById("currentDay");
    var now = moment().format("MMMM Do YYYY");
    // updating the text in the html
    day.innerHTML = now
    
    // getting the id value and to local storage 
    document.getElementById("9amPlan").value = JSON.parse(localStorage.getItem("9am"))

    document.getElementById("10amPlan").value = JSON.parse(localStorage.getItem("10am"))
    
    document.getElementById("11amPlan").value = JSON.parse(localStorage.getItem("11am"))

    document.getElementById("12pmPlan").value = JSON.parse(localStorage.getItem("12pm"))
    
    document.getElementById("1pmPlan").value = JSON.parse(localStorage.getItem("1pm"))

    document.getElementById("2pmPlan").value = JSON.parse(localStorage.getItem("2pm"))
    
    document.getElementById("3pmPlan").value = JSON.parse(localStorage.getItem("3pm"))

    document.getElementById("4pmPlan").value = JSON.parse(localStorage.getItem("4pm"))
    
    document.getElementById("5pmPlan").value = JSON.parse(localStorage.getItem("5pm"))
}

// reset button, however, not functioning properly
$('#resetBtn').on('click', function(){
    $('.reset').innerHTML="";
})



//Color functions 


