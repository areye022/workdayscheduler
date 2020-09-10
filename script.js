// I am creating a work scheduler. it will show all hours from 9am-5pm
// Each hour will have the option to add text content
// when i add the text content, it will save to the local storage so that I may reload it
// and it still be there.
// The past times will be grey, present, green, and future yellow

// 
var currentDay=document.querySelector("#currentDay");
var now=moment().format('MMMM Do YYYY');
currentDay.innerHTML=now;


// creating a practice box to append     
var timeBlocks= document.querySelector(".container")


// var workHours=['9AM','10AM','11AM','12PM',"1PM",'2PM','3PM','4PM','5PM']
// blank var to add inputs 
$("#saveBtn").on("click", function(){
    var input = document.getElementById("fiveAmTask");
    // console.log(‘This is the input ->’)s
    console.log(input)
    var content=input.value;
    // console.log(‘This is the content ->’)
    console.log(content)
    localStorage.setItem('storedStuff', JSON.stringify(content));
    var storedInput = localStorage.getItem('storedStuff')
    console.log("This is the stored input ->", JSON.parse(storedInput));
});


