// Check off specific todos by clicking
$("ul").on("click","li", function(){
	if($(this).css("color") === "rgb(255, 215, 0)"){
		$(this).css("color", "black");
		$(this).css("text-decoration", "none")
		$(this).css("background", "green")
	} else{
	$(this).css("background", "teal")
	$(this).css("color", "gold")
	$(this).css("text-decoration", "line-through")
	}});
//click on x to delete todo
$("ul").on("click","span", function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
	event.stopPropagation();
})
$("input[type='text'").keypress(function(event)
{
	if(event.which===13){
var todoText = $(this).val();
//create a new li and add to ul
$("ul").append("<li><span>X</span> "  + todoText + "</li>")
$(this).val("");
	}
})