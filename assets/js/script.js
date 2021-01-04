let schedule = 
[
    {
        Time: "9 am",
        tag: 9
    },

    {
        Time: "10 am",
        tag: 10
    },

    {
        Time: "11 am",
        tag: 11
    },

    {
        Time: "12 pm",
        tag: 12
    },

    {
        Time: "1 pm",
        tag: 13
    },

    {
        Time: "2 pm",
        tag: 14
    },

    {
        Time: "3 pm",
        tag: 15
    },

    {
        Time: "4 pm",
        tag: 16
    },

    {
        Time: "5 pm",
        tag: 17
    }
]

$(document).ready(function()
{

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // var scheduleContainer = $("#scheduleContainer");
    // var currentTime = (moment().format('LT'));
    // $.each(schedule, function(i, time)
    // {
    //     scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>");
    //     $("#time"+i).append("<div class=\"col-2 hour\">" + time.Time + "</div>");
    //     $("#time"+i).append("<textarea class=\"col-8 future textarea\">" + "tasks go here" + "</textarea>");
    //     $("#time"+i).append("<div class=\"col-2 saveBtn\">" + "save" + "</div>");
    // });


    var scheduleContainer = $("#scheduleContainer");
    var getCurrentHour = (moment().format('H'));

    $.each(schedule, function(i, time)
    {
        scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>");
        $("#time"+i).append("<div class=\"col-2 hour\">" + time.Time + "</div>");
        let scheduleHour = time.tag;
        
            if (getCurrentHour > scheduleHour)
            {
                $("#time"+i).append("<textarea class=\"col-8 past textarea\">" + "tasks go here" + "</textarea>");
            }
            else if (getCurrentHour == scheduleHour)
            {
                $("#time"+i).append("<textarea class=\"col-8 present textarea\">" + "tasks go here" + "</textarea>");
            }
            else if (getCurrentHour < scheduleHour)
            {
                $("#time"+i).append("<textarea class=\"col-8 future textarea\">" + "tasks go here" + "</textarea>");
            } 

        $("#time"+i).append("<div class=\"col-2 saveBtn\">" + "save" + "</div>");

        
    });

});