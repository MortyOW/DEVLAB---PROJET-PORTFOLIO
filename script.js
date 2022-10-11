/* Changement du bouton clique */
console.log('salut')

function ChangeName() {
    console.log('salut')
    if (document.getElementById("changeMe").innerHTML == "Clique") {
        document.getElementById("changeMe").innerHTML = "Refresh"
    } else if (document.getElementById("changeMe").innerHTML == "Refresh") {
        document.location.reload()
    }

}


function Refresh(){
if (document.getElementById("changeMe").innerHTML == "Refresh" && document.getElementById('changeMe').clicked == true) {
    document.location.reload();
}}