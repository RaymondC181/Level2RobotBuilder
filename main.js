var h = false; 
var n = false; 
var s = false; 

function myScanner() {
    var checkBox = document.getElementById("scanner");
    var text = document.getElementById("scannerMode");
  
    if (checkBox.checked == true){
      text.innerHTML = "On";
    } else {
      text.innerHTML = "Off";

    }
  }

  function myDefensive() {
    var checkBox = document.getElementById("defensive");
    var text = document.getElementById("defenseMode");
  
    if (checkBox.checked == true){
      text.innerHTML = "On";
    } else {
      text.innerHTML = "Off";

    }
  }

function hydro()
{
    document.getElementById("type").innerHTML= "Hydro Power";
    h = true; 
    n = false; 
    s = false; 
}
function nuclear()
{
    document.getElementById("type").innerHTML= "Nuclear Power";
    h =  false; 
    n = true; 
    s = false; 
}
function solar()
{
    document.getElementById("type").innerHTML= "Solar Power";
    h =  false; 
    n = false; 
    s = true; 
}

function addP()
{
    powerNumber++; 
    display(); 
}

function minusP()
{
    if (powerNumber>0)
    {
        powerNumber--; 
    }
    display(); 
}

function addS()
{
    speedNumber++; 
    display(); 
}
function minusS()
{
    if (speedNumber>0)
    {
        speedNumber--; 
    }
    display(); 
}

function addI()
{
    structureNumber++; 
    display(); 
}

function minusI()
{
    if (structureNumber>0)
    {
        structureNumber--; 
    }
    display(); 
}

function initialize()
{
    power = document.getElementById("powerLevel"); 
    speed =  document.getElementById("topSpeed");  
    structure = document.getElementById("structureIntegerity"); 
    
    powerNumber = 0; 
    speedNumber=0;
    structureNumber=0; 
}

function display()
{
    power.innerHTML = powerNumber;
    speed.innerHTML = speedNumber; 
    structure.innerHTML = structureNumber; 
}

function changeImage1()
{
    document.getElementById("image").src = "robot1.png";
}

function changeImage2()
{
    document.getElementById("image").src = "robot2.png";
}

function changeImage3()
{
    document.getElementById("image").src = "robot3.png";
}

function changeImage4()
{
    document.getElementById("image").src = "robot4.png";
}

function changeImage5()
{
    document.getElementById("image").src = "robot5.png";
}