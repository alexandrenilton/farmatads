var head="display:''"
function doit(header){
var head=header.style
if (head.display=="none")
head.display=""
else
head.display="none"
}
function popCalInMainFrame(dateCtrl) {
	var w=self.top.mainFrame.gfPop;
	w.fPopCalendar(dateCtrl,null,null,null,[0,0,false]);	// pop calendar at fixed location
}

function go()
{
	box = document.forms[0].navi;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}
function go2()
{
	box2 = document.forms[0].navi2;
	destination = box2.options[box2.selectedIndex].value;
	if (destination) location.href = destination;
}