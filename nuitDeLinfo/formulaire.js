// let Input = document.getElementsByTagName('input');
// let formulaire = document.getElementsByTagName('form')[0];
// console.log(formulaire)
// document.getElementById('submit-button').addEventListener('click', ($event) => {
//     //default behavior : refresh la page
// } )

let somme = 0;
let truc = document.querySelectorAll('input[type=checkbox]');
console.log(truc);

for (let i = 1; i <= 6; i++) {
    document.querySelectorAll('input[type=checkbox]')[i].addEventListener('change', ($event) => {
        if ($event.target.checked)
        somme += i;
    else
        somme -= i;
    console.log(somme);
    if(somme == 21)
    {
    alert("citron");
    }
})}


