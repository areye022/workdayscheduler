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

// single function, filter using ID of the target element 
// calling all save buttons so when we click on the designated event, it targets the correct case
$('button').click(function(e) {
    console.log(e.target.id)
    // using so we can perform different actions based on different conditions.
    switch(e.target.id){
        // below are the list of conditions/cases
        case "9am":
            // content will not have value of the id we are retreiving 
            var content = document.getElementById("9amPlan").value
            // setting the value into the local storage
            localStorage.setItem("9am", JSON.stringify(content));
            break; 
        case "10am":
            var content = document.getElementById("10amPlan").value
            localStorage.setItem("10am", JSON.stringify(content));
            break; 
        case "11am":
            var content = document.getElementById("11amPlan").value
            localStorage.setItem("11am", JSON.stringify(content));
            break; 
        case "12pm":
            var content = document.getElementById("12pmPlan").value
            localStorage.setItem("12pm", JSON.stringify(content));
            break;
        case "1pm":
            var content = document.getElementById("1pmPlan").value
            localStorage.setItem("1pm", JSON.stringify(content));
            break;
        case "2pm":
            var content = document.getElementById("2pmPlan").value
            localStorage.setItem("2pm", JSON.stringify(content));
                break;
        case "3pm":
            var content = document.getElementById("3pmPlan").value
            localStorage.setItem("3pm", JSON.stringify(content));
            break;
        case "4pm":
            var content = document.getElementById("4pmPlan").value
            localStorage.setItem("4pm", JSON.stringify(content));
            break;
        case "5pm":
            var content = document.getElementById("5pmPlan").value
            localStorage.setItem("5pm", JSON.stringify(content));
            break;

    }
})

//Color functions ??


