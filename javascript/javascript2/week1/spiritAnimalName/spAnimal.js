const spAnimalName = [
  "Butterfly- The change maker",
  "Spider- The Creative Man",
  "Crow- The magical Man",
  "Owl- The illusionst",
  "Hummingbird - The happy Man",
  "Hawk- The wisdom Man",
  "Grasshopper- The innovative Man",
  "Eagle- Who listen to heart",
  "Cat- The clever Man",
  "Fish- Tha smart Man"

];

const input = document.getElementById('input');
const btn = document.getElementById('spirit');
const p = document.getElementById('spName');
   
input.addEventListener('input', function () { 
get(input.value, 'text'); }); 

input.addEventListener('mouseover', function () { 
get(input.value, 'hover');});

btn.addEventListener('click', function() {
get(input.value, 'click');});


function get(value, selectedOption) {
const arrName = Math.floor(Math.random() * spAnimalName.length);
const option = document.getElementById('selectList').value;
  
if (!input.value || !selectedOption) {
      p.textContent = `Enter your name & select a category`;
    } 
    else if(option === selectedOption && value) {
    const inputName = value;
    p.textContent = `${inputName} - ${spAnimalName[arrName]}`;
    return p.textContent;

    }

}


  
