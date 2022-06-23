$("h1").addClass("big-title margin-50");

$("h1").click(function()
{
$("h1").css("color","purple");
}
);

$("button").click(function()
{
$("h1").css("color","green");
}
);

$("input").keypress(function()
{
    $("h1").text(event.key);
}
);

$("h1").on("mouseover",function() 
{
$("h1").css("color","red");
});