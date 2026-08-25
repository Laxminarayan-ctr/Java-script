function Weekday (day){

    let dayname;

    switch(day){
        case 1:
            dayname = 'Monday';
            break;
        case 2:
            dayname = 'Tuesday';        
            break;
        case 3:
            dayname = 'Wednesday';  
            break;
        case 4:
            dayname = 'Thursday';   
            break;
        case 5:
            dayname = 'Friday';         

            break;       
            
        case 6:
            dayname = 'Saturday';  
            break;  
        case 7:
            dayname = 'Sunday';  
            break; 
            default: dayname = 'Invalid day';

            
            


    }
    
    return dayname;
}
//console.log(Weekday (8))

function lunchbrowser(browser) {
    let browsername;

    switch (browser) {
        case "chrome":
            browsername = "You are using Chrome";
            break;

        case "firefox":
            browsername = "You are using Firefox";
            break;

        case "edge":
            browsername = "You are using Edge";
            break;

        default:
            browsername = "Invalid browser";
    }

    console.log(browsername);

}

lunchbrowser("firefox");





