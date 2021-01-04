let schedule = 
[
    {
        Time: "9:00 am"
    },

    {
        Time: "10:00 am"
    },

    {
        Time: "11:00 am"
    },

    {
        Time: "12:00 pm"
    },

    {
        Time: "1:00 pm"
    },

    {
        Time: "2:00 pm"
    },

    {
        Time: "3:00 pm"
    },

    {
        Time: "4:00 pm"
    },

    {
        Time: "5:00 pm"
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
    var getCurrentTime = (moment().format('LT'));
    var getCurrentHour = getCurrentTime.charAt(0);

    $.each(schedule, function(i, time)
    {
        scheduleContainer.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>");
        $("#time"+i).append("<div class=\"col-2 hour\">" + time.Time + "</div>");
            let x = time.Time.charAt(0);
            if (getCurrentHour <= x)
            {
                $("#time"+i).append("<textarea class=\"col-8 past textarea\">" + "tasks go here" + "</textarea>");
            }
            else if (getCurrentHour == x)
            {
                $("#time"+i).append("<textarea class=\"col-8 present textarea\">" + "tasks go here" + "</textarea>");
            }
            else if (getCurrentHour >= x)
            {
                $("#time"+i).append("<textarea class=\"col-8 future textarea\">" + "tasks go here" + "</textarea>");
            }        
        $("#time"+i).append("<div class=\"col-2 saveBtn\">" + "save" + "</div>");
        console.log(x);
        console.log("moment time " + moment(time.Time));
    });

    console.log(getCurrentHour);


});