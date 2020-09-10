//insert date

var input = 

window.onload = function(){
    var day = document.getElementById("currentDay");
    var now = moment().format("MMMM Do YYYY");
    day.innerHTML = now
    
}

$('#resetBtn').on('click', function(){
    $('.reset').innerHTML="";
})

// single function, filter using ID of the target element 


//save
$("#saveBtn").on("click",function(){
    

    // console.log('This is the input ->')s
    console.log(input)

    var content = input.value;

    //console.log('This is the content ->')
    console.log(content)

    localStorage.setItem("storedStuff", JSON.stringify(content));

});

//colors
// give a id to each input

