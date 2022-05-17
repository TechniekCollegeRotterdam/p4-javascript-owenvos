let name;
let country;
let p = document.getElementById("output");
let nameChange = document.getElementById("nameChange");
let countryChange = document.getElementById("countryChange");


nameChange.addEventListener("change", function(){
    name = event.target.value;
changeInput();
});
countryChange.addEventListener("change", function(){
    country = event.target.value;
    changeInput();
}
);
// const nameChange = function(event){
//      name = event.target.value;
//      changeInput();
//yo
// };

// const countryChange = function(event){
//    country = event.target.value;
//    changeInput();
// };

const changeInput = function(){
    const text = `Je heet ${name} en je komt uit ${country}`; 
    p.textContent = text;
};
