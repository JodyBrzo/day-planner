let schedule = 
[
    {
        Time: "9 am",
        tag: 9,
        tasks: ""
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

    loadtasks();

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var scheduleContainer = $("#scheduleContainer");
    var getCurrentHour = (moment().format('H'));

    $.each(schedule, function(i, time)
    {

        scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>");
        $("#time"+i).append("<div id=\"currentTime" + i + "\"" + "class=\"col-2 hour\">" + time.Time + "</div>");
        let scheduleHour = time.tag;
        
            var stateClass = "";
            if (getCurrentHour > scheduleHour)
            {
                stateClass ="past";
            }
            else if (getCurrentHour == scheduleHour)
            {
                stateClass ="present";
            }
            else if (getCurrentHour < scheduleHour)
            {
                stateClass ="future";
            } 
        $("#time"+i).append("<textarea id=\"textArea" + i + "\"" + "class=\"col-8 " + stateClass + "\"textarea\">" + schedule[i].tasks + "</textarea>");  
        console.log(stateClass);  
        $("#time"+i).append("<div id=\"saveBtn" + i + "\"" + "data-index=\"" + i + "\"" + "class=\"col-2 saveBtn\">" + "save" + "</div>");
    });

    $(".saveBtn").click(function(event)
    {
        var element = event.target;
        console.log(element);
        var index = parseInt($(element).attr("data-index"),10);
        saveTask(index);
    });
});

function loadtasks() {
    var data = localStorage.getItem("schedule");
    if (data) //if not undefined
    {
      var scheduleArray = JSON.parse(data);  //make sure there is a highscores object
      $.each(scheduleArray, function(i, item)
      {
        schedule[i].tasks = item.tasks;
      });
    }
    else {
      localStorage.setItem("schedule", JSON.stringify(schedule));  //if not make one and store it to local storage
    }
  }

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