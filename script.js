// creating a practice box to append     
var timeBlocks= document.querySelector(".container")


var workHours=['9AM','10AM','11AM','12PM',"1PM",'2PM','3PM','4PM','5PM']
// blank var to add inputs 
var todoList="";

for (var i=0; i<workHours.length;i++){
    // to loop through the hours 
    var hours=workHours[i]
    // creating input elements to allow user to input plans for the day
    var listEl=document.createElement('li');
    // setting attributes
    listEl.setAttribute("id","planInput");
    // text Content
    listEl.textContent=hours;
    // appending 
    timeBlocks.appendChild(listEl);

    // creating add buttons 
    var addBtn=document.createElement('button')
    addBtn.textContent='Add Event'
    listEl.appendChild(addBtn);
}