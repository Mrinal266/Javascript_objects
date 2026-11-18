var myContact = {
    name: "Riya Sharma",
    phone: "98394-29846",
    school: "Sunrise Academy",
    city: "Mumbai"
}

var nameEL = document.getElementById("name")
var phoneEL = document.getElementById("phone")
nameEL.textContent = myContact.name
phoneEL.textContent = myContact.phone

var schoolEL = document.getElementById("school")
var cityEL = document.getElementById("city")
schoolEL.textContent = myContact["school"]
cityEL.textContent = myContact["city"]

var codeEL = document.getElementById("codeDisplay")
codeEL.textContent = 
'var myContact = {\n' + 
' name: "' + myContact.name + '", \n' +
' phone: "' + myContact.phone + '", \n' +
' school: "' + myContact.school + '", \n' +
' city: "' + myContact.city + '", \n' + '}'