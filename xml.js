function Insert(){
    var ul = document.getElementById("MISCLIST");
    var ul1 = document.getElementById("HITPOINTS");
    var ul2 = document.getElementById("AC");
    var ul3 = document.getElementById("INI");
    var ul4 = document.getElementById("STR");
    var ul5 = document.getElementById("DEX");
    var ul6 = document.getElementById("CON");
    var ul7 = document.getElementById("INT");
    var ul8 = document.getElementById("WIS");
    var ul9 = document.getElementById("CHA");
    
    var value = document.getElementById("MISC").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}

function ADDMISC(){
    var ul = document.getElementById("MISCLIST");
    var value = document.getElementById("MISC").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

   button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}



function Start() { 
    var num = document.getElementById("spell").value;
    if(num == "Acid Arrow")
        num = 1;
    else if(num == "Acid Splash")
        num = 2;
    else if(num == "Aid")
        num = 3;
    else if(num == "Alarm")
        num = 4;
    else if(num == "Alter Self")
        num = 5;
    else if(num == "Animal Messenger")
        num = 6;
    else if(num == "Animal Shapes")
        num = 7;
    else if(num == "Animate Dead")
        num = 8;
    else if(num == "Animate Objects")
        num = 9;
    else if(num == "Antilife Shell")
        num = 10;
    else if(num == "Antimagic field")
        num = 11;
    else if(num == "Antipathy" || num == "Sympathy")
        num = 12;
    else if(num == "Arcane Eye")
        num = 13;
    else if(num == "Arcane Hand")
        num = 14;
    else if(num == "Arcane Lock")
        num = 15;
    else if(num == "Arcane Sword")
        num = 16;
    else if(num == "Arcanist's Magic Aura")
        num = 17;
    else if(num == "Astral Projection")
        num = 18;
    else if(num == "Augury")
        num = 19;
    else if(num == "Awaken")
        num = 20;
    else if(num == "Bane")
        num = 21;
    else if(num == "Banishment")
        num = 22;
    else if(num == "Barkskin")
        num = 23;
    else if(num == "Beacon of Hope")
        num = 24;
    else if(num == "Bestow Curse")
        num = 25;
    else if(num == "Black Tentacles")
        num = 26;
    else if(num == "Blade Barrier")
        num = 27;
    else if(num == "Bless")
        num = 28;
    else if(num == "Blight")
        num = 29;
    else if(num == "Blindness" || num == "Deafness")
        num = 30;
    else if(num == "Blink")
        num = 31;
    else if(num == "Blur")
        num = 32;
    else if(num == "Burning Hands")
        num = 33;
    else if(num == "Call Lightning")
        num = 34;
    else if(num == "Calm Emotions")
        num = 35;
    else if(num == "Chain Lightning")
        num = 36;
    else if(num == "Charm Person")
        num = 37;
    else if(num == "Chill Touch")
        num = 38;
    else if(num == "Circle Of Death")
        num = 39;
    else if(num == "Clairvoyance")
        num = 40;
    else if(num == "Clone")
        num = 41;
    else if(num == "Cloudkill" || num == "Cloud Kill")
        num = 42;
    else if(num == "Color Spray")
        num = 43;
    else if(num == "Command")
        num = 44;
    else if(num == "Commune")
        num = 45;
    else if(num == "Commune With Nature" || num == "Commune with Nature")
        num = 46;
    else if(num == "Comprehend Language" || num == "Comprehend Languages")
        num = 47;
    else if(num == "Cone of Cold")
        num = 48;
    else if(num == "Confusion")
        num = 49;
    else if(num == "Conjure Animals")
        num = 50;
    else if(num == "Conjure Celestial")
        num = 51;
    else if(num == "Conjure Elemental")
        num = 52;
    else if(num == "Conjure Fey")
        num = 53;
    else if(num == "Conjure Minor Elementals")
        num = 54;
    else if(num == "Conjure Woodland Beings")
        num = 55;
    else if(num == "Contact Other Plane")
        num = 56;
    else if(num == "Contagion")
        num = 57;
    else if(num == "Contingency")
        num = 58;
    else if(num == "Continual Flame")
        num = 59;
    else if(num == "Control Water")
        num = 60;
    else if(num == "Control Weather")
        num = 61;
    else if(num == "Create Food and Water" || num == "Create Food And Water")
        num = 62;
    else if(num == "Create Water/Destory Water" || num == "Create Water" || num == "Destroy Water")
        num = 63;
    else if(num == "Create Undead")
        num = 64;
    else if(num == "Creation")
        num = 65;
    else if(num == "Cure Wounds")
        num = 66;
    else if(num == "Dancing Lights")
        num = 67;
    else if(num == "Darkness")
        num = 68;
    else if(num == "Darkvision" || num == "Dark Vision")
        num = 69;
    else if(num == "Daylight" || num == "Day Light")
        num = 70;
    else if(num == "Deathward" || num == "Death Ward")
        num = 71;
    else if(num == "Delayed Blast Fireball")
        num = 72;
    else if(num == "Demiplane" || num == "Demi Plane")
        num = 73;
    else if(num == "Detect Evil and Good" || num == "Detect Evil And Good")
        num = 74;
    else if(num == "Dectect Magic")
        num = 75;
    else if(num == "Detect Poison And Disease" || num == "Detect Poison and Disease")
        num = 76;
    else if(num == "Detect Thoughts")
        num = 77;
    else if(num == "Dimension Door")
        num = 78;
    else if(num == "Disguise Self")
        num = 79;
    else if(num == "Disintegrate")
        num = 80;
    else if(num == "Dispel Evil and Good" || num == "Dispel Evil" || num == "Dispel Good")
        num = 81;
    else if(num == "Dispel Magic")
        num = 82;
    else if(num == "Divination")
        num = 83;
    else if(num == "Divine Favor")
        num = 84;
    else if(num == "Divine Word")
        num = 85;
    else if(num == "Dominate Beast")
        num = 86;
    else if(num == "Dominate Monster")
        num = 87;
    else if(num == "Dominate Person")
        num = 88;
    else if(num == "Dream")
        num = 89;
    else if(num == "Earthquake")
        num = 90;
    else if(num == "Eldritch Blast")
        num = 91;
    else if(num == "Enhance Ability")
        num = 92;
    else if(num == "Enlarge/Reduce" || num == "Enlarge" || num == "Reduce")
        num = 93;
    else if(num == "Entangle")
        num = 94;
    else if(num == "Enthrall")
        num = 95;
    else if(num == "Etherealness")
        num = 96;
    else if(num == "Expeditious Retreat")
        num = 97;
    else if(num == "EyeBite")
        num = 98;
    else if(num == "Fabricate")
        num = 99;
    else if(num == "Faerie Fire")
        num = 100;
    else if(num == "Faithful Hound")
        num = 101;
    else if(num == "False Life")
        num = 102;
    else if(num == "Fear")
        num = 103;
    else if(num == "Feather Fall")
        num = 104;
    else if(num == "Feeble Mind" || num == "Feeblemind")
        num = 105;
    else if(num == "Find Steed")
        num = 106;
    else if(num == "Find The Path" || num == "Find the Path")
        num = 107;
    else if(num == "Find Traps")
        num = 108;
    else if(num == "Finger of Death" || num == "Finger Of Death")
        num = 109;
    else if(num == "Fireball")
        num = 110;
    else
        num = 201;
    
    var data = "http://www.dnd5eapi.co/api/spells/" + num;
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
