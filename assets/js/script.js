//array of objects for each time slot
let schedule = 
[
    {
        Time: "9 am", //this will be visible to the user for the time of the time slot
        tag: 9,  //using a tag property with an integer to compare to military time for past present or future to color the time slots
        tasks: ""  //this property will hold the tasks entered by the user
    },

    {
        Time: "10 am",
        tag: 10,
        tasks: ""
    },

    {
        Time: "11 am",
        tag: 11,
        tasks: ""
    },

    {
        Time: "12 pm",
        tag: 12,
        tasks: ""
    },

    {
        Time: "1 pm",
        tag: 13,
        tasks: ""
    },

    {
        Time: "2 pm",
        tag: 14,
        tasks: ""
    },

    {
        Time: "3 pm",
        tag: 15,
        tasks: ""
    },

    {
        Time: "4 pm",
        tag: 16,
        tasks: ""
    },

    {
        Time: "5 pm",
        tag: 17,
        tasks: ""
    }
];

$(document).ready(function()
{
    //call the function that checks to see if there is any existing tasks to load
    loadtasks();

    //set the paragraph to show the current date and time
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var scheduleContainer = $("#scheduleContainer"); //load the main container to the variable scheduleContainer
    var getCurrentHour = (moment().format('H'));  //set getCurrentHour to military time numbers 0-23

    $.each(schedule, function(i, time)  //itterate through each item in the schedule array
    {
        scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>"); //make a new row with the id of time[i] and append it as a child of the container
        $("#time"+i).append("<div id=\"currentTime" + i + "\"" + "class=\"col-2 hour\">" + time.Time + "</div>"); //append a child div with the id of currentTime[i] and add the time property as text
        let scheduleHour = time.tag; //set scheculeHour = the tag property of the array. this will help compare to the hour for the current time row and determine what color it should be
        
            var stateClass = ""; //variable to hold either past present or future for the style
            if (getCurrentHour > scheduleHour) //if getCurrentHour is greater than scheduleHour(tag property of the array) then set stateClass to past - css style color is gray
            {
                stateClass ="past";
            }
            else if (getCurrentHour == scheduleHour)  //if getCurrentHour is equal to scheduleHour(tag property of the array) then set stateClass to present - css style color is red
            {
                stateClass ="present";
            }
            else if (getCurrentHour < scheduleHour)  //if getCurrentHour is less than scheduleHour(tag property of the array) then set stateClass to future - css style color is green
            {
                stateClass ="future";
            } 
        $("#time"+i).append("<textarea id=\"textArea" + i + "\"" + "class=\"col-8 " + stateClass + "\"textarea\">" + schedule[i].tasks + "</textarea>");  //append child div "textArea" to the tiem row"
        $("#time"+i).append("<div id=\"saveBtn" + i + "\"" + "data-index=\"" + i + "\"" + "class=\"col-2 saveBtn\">" + "save" + "</div>");  //append child div "saveBtn" to the time row"
    });

    //once the rows are made then add the click event for when the user clicks a save div
    $(".saveBtn").click(function(event) 
    {
        var element = event.target; //set element to the div that was clicked
        var index = parseInt($(element).attr("data-index"),10); //set index to the "data-index" attribute of the div to get the number
        saveTask(index);  //call saveTast function and pass in this index so we know what row needs to be saved
    });
});

  //the purpose of this function is to check if there is a schedule object in local storage and load each task item into the task property of the schedule object
function loadtasks() {
    var data = localStorage.getItem("schedule"); //set data = to the local storage item "schedule"
    if (data) //if not undefined
    {
      var scheduleArray = JSON.parse(data);  //set schedule array equal to data
      $.each(scheduleArray, function(i, item) //itterate through each item in schedule array
      {
        schedule[i].tasks = item.tasks; //set the task property of the schedule array to the current task item in scheduleAeray
      });
    }
    else {
      localStorage.setItem("schedule", JSON.stringify(schedule));  //if data is undefined then store a new schedule object in local storage
    }
  }

  //the purpose of this function is to grab the text of the textArea of index and write it to local storage
function saveTask(index)
{
    var textArea = $("#textArea" + index);  //set user tasks equal to the id of the current textarea
    if (textArea.val() !== "") //make sure the textarea is not blank
    {
        schedule[index].tasks = textArea.val();  //set the tasks property to the current index

        localStorage.setItem("schedule", JSON.stringify(schedule));  //convert to a string and send to local storage
    }
    else
    {
        alert("no tasks to save")  //alert the user no data to save
    }
};