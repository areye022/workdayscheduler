// creating a practice box to append     
var timeBlocks= document.querySelector(".container")


var workHours=['9AM','10AM','11AM','12PM',"1PM",'2PM','3PM','4PM','5PM']
// blank var to add inputs 
var todoList="";

for (var i=0; i<workHours.length;i++){
    console.log(workHours);
    var listEl=document.createElement('input');
    listEl.setAttribute("id","planInput");
    listEl.textContent=workHours[i];
    timeBlocks.appendChild(listEl);
}