
function Start() { 
    var key = "spells/?name=Acid+Arrow";
    var data = "http://www.dnd5eapi.co/api/spells/1";
    var http_request = new XMLHttpRequest();
    var displayName;
    var displayTime;
    var displayComponents;
    var displayDamage;
    var displayType;
    var displayDuration;
    var displayLevel;
    var displayRange;

    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            try{
                var jsonObject = JSON.parse(http_request.responseText);
                displayName = jsonObject.name;
                displayTime = jsonObject.casting_time;
                displayComponents = jsonObject.components;
                displayDamage = jsonObject.desc;
                displayType = jsonObject.school.name;
                displayDuration = jsonObject.duration;
                displayLevel = jsonObject.level;
                displayRange = jsonObject.range;
                document.getElementById("changeName").innerHTML = displayName;
                document.getElementById("changeTime").innerHTML = displayTime;
                document.getElementById("changeComponents").innerHTML = displayComponents;
                document.getElementById("changeType").innerHTML = displayType;
                document.getElementById("changeDuration").innerHTML = displayDuration;
                document.getElementById("changeLevel").innerHTML = displayLevel;
                document.getElementById("changeRange").innerHTML = displayRange;
                document.getElementById("changeDamage").innerHTML = displayDamage;
            }catch (e) {
                console.log(e.toString());
            }    
        }        
    };

    http_request.open("GET", data, true); 
    http_request.send(); 
    }

Start();

function addSpell(){
    
    var spell = document.getElementById("Spell").innerHTML;
    alert("Spell is: " + spell);
    
    var key = 100;
    var data = "http://www.dnd5eapi.co/api/spells/" + key;
    var http_request = new XMLHttpRequest();
    var displayName;
    var displayTime;
    var displayComponents;
    var displayDamage;
    var displayType;
    var displayDuration;
    var displayLevel;
    var displayRange;

    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            try{
                var jsonObject = JSON.parse(http_request.responseText);
                displayName = jsonObject.name;
                displayTime = jsonObject.casting_time;
                displayComponents = jsonObject.components;
                displayDamage = jsonObject.desc;
                displayType = jsonObject.school.name;
                displayDuration = jsonObject.duration;
                displayLevel = jsonObject.level;
                displayRange = jsonObject.range;
                document.getElementById("changeName").innerHTML = displayName;
                document.getElementById("changeTime").innerHTML = displayTime;
                document.getElementById("changeComponents").innerHTML = displayComponents;
                document.getElementById("changeType").innerHTML = displayType;
                document.getElementById("changeDuration").innerHTML = displayDuration;
                document.getElementById("changeLevel").innerHTML = displayLevel;
                document.getElementById("changeRange").innerHTML = displayRange;
                document.getElementById("changeDamage").innerHTML = displayDamage;
            }catch (e) {
                console.log(e.toString());
            }    
        }        
    };

    http_request.open("GET", data, true); 
    http_request.send(); 
    
}
