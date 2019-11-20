let container = $("#container");
let table = $("<table></table>");
table.addClass("jumbotron");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//creating an array to call back in the for loop, generating a table
let timeList = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

//creating a function to determine local time and dynamically generate HTML for a table
function dynamicTime() {
    for (let i=0; i<timeList.length; i++) {
        let tableRow = $("<tr></tr>").attr("id", i);
        //timeBlock --> contains timeList elements
        let timeBlock = $("<td></td>");
        timeBlock.addClass("hour");
        timeBlock.text(timeList[i]);
        //description contains textarea input for planner
        let description = $("<td></td>");
        //utilizing bootstrap to make website device responsive
        description.addClass("col-md-12");
        let textarea = $("<textarea></textarea>");
        textarea.addClass("textarea form-control");
        description.append(textarea);
        //saveButtons generated for storing user data to local storage as desired
        let saveButton = $("<td></td>");
        let button = $("<button></button>");
        //add event listener click event 
        button.addClass("saveBtn");
        saveButton.append(button);
        //appending all td elements to each row of the table
        tableRow.append(timeBlock, description, saveButton);
        //appending each row of the table sequentially to the table itself 
        table.append(tableRow);
    }
    //appending the table to the div container
    container.append(table);
};
//executing dynamic time function
dynamicTime();