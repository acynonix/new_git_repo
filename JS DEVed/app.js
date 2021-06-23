function greetUser(gender, name)
{
    switch(gender)
    {
        case "male":
            return `Hello Mr. ${name}, how're you doing ?`;
        case "female":
            return `Hello Miss ${name}, how're you doing ?`;
        case "trans":
            return `Hello ${name}, how're you doing ?`;
        default:
            return `Good Bye`;
    }
}

console.log(myname);
var myname="Akshay";