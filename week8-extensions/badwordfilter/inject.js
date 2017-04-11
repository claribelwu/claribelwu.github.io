//This is the code that will be injected on any page
var grammarObj = {
	"S": ["#fuck# #haha# #lol# #omg# #wtf# #wth# #lmao#"],
	"fuck": ["floop", "flarble", "flip","mcchicken frick", "flick", "foot", "fup"],
	"haha": ["herherherh","hoho","mehehe","heh","ohohoh", "*hyena laugh*", "*maniacal laugh*", "*laughs evilly*", "*cackles*"],
	"lol": ["i am laughing out loud", "laugh out loud.","aloe el", "lolly"],
	"omg": ["oh my gumballs", "oh my golden retriever", "oh my grandma", "oh my granola", "oh my garden", "oh my goodess gracious me", "oh my gravy"],
	"wtf": ["what the flibbity", "what the flobboty", "what the butt", "what intarnation", "what the what the what the", "woh the flup"],
	"wth": ["what the hick", "what the hock", "what the hack", "what the ham", "what the henry", "what the helena", "what the helen", "what the holland", "what the honeybunches of oats", "what the human"],
	"lmao" : ["but ultimately I agree", "isn't that crazy?", "I just don't understand", "isn't that just the silliest thing", "this is hilarious", "laugh my buttocks off", "laughing my bottom off", "laughing my arse off", "I can't believe it, Jimmy"]
	
}
var grammar = tracery.createGrammar(grammarObj)

$('h1,h2').each(function(){
	var t = grammar.flatten("#S#");
	$(this).text(t)
})

$('contains("dog")').each(function)