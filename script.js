(function(){

var detailsForm= document.querySelector("#destination_form_details");
detailsForm.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();

    var destName= event.target.elements["name"]
    var destLocation= event.target.elements["location"]
    var destPhoto= event.target.elements["photo"]
}

}())