const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];
const daysOfTheWeek =["Sunday","Monday" ,"Tuesday","Wednesday ","Thursday ","Friday","Saturday" ];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let century = "";
let year = "";
let month = "";
let day = "";
let dayOfTheWeek= "";
let akanName = ""

const displayAkanName = () => {
    const fGender = document.getElementById("female");
    const mGender = document.getElementById("male");
    if(fGender.checked) {
        mGender.checked = false;
        getAkanName(femaleNames);
        document.getElementById("show-akan-name").innerHTML =`Your Akan name is: ${akanName}`
        document.getElementById("show-akan-name").style.display = 'block'
    } else if( mGender.checked) {
        mGender.checked = false
        getAkanName(maleNames);
        console.log("Akan name "+akanName)
        document.getElementById("show-akan-name").innerHTML =`Your Akan name is: ${akanName}`
        document.getElementById("show-akan-name").style.display = 'block';
    }
}

const getAkanName = (genderArray) => {
    for(let i = 0; i<genderArray.length; i++){
        if(daysOfTheWeek[i]=== daysOfTheWeek[dayOfTheWeek-1]){
            akanName = genderArray[i];
        }
    }
}

const calculateDayOfTheWeek = (century, year, month , day)=> {
    return ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
}
document.getElementById("show-akan-name").style.display = 'none';

const getUserInput = function (event) {
    event.preventDefault();
    let dateOfBirth = document.getElementById("birth-date").value;
    let dateDetails = dateOfBirth.split('-')
    century = parseInt(dateDetails[0].slice(0,2));
    year = parseInt(dateDetails[0].slice(2,4));
    month = parseInt(dateDetails[1]);
    day = parseInt(dateDetails[2]);
    dayOfTheWeek = Math.floor(calculateDayOfTheWeek(century,year,month,day).toFixed())
    displayAkanName();
    
}