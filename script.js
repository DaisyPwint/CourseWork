var age = prompt("Please enter your age");
if(age >= 18)
{
    console.log('You are eligible for voting.');
}else{
    console.log('You are not eligible for voting.');
}

var result = prompt("Pleace enter your grade on exam A or B or C or D");
switch(result){
    case 'A': console.log('Excellent');
    break;
    case 'B': console.log('Well done');
    break;
    case 'C': console.log('try again');
    break;
    default:
        console.log('Thank you for your action');
}