const notes = [];
function addNote(content,id){
    if (typeof (content) === 'string' && typeof (id) === 'number')
        
    notes.push(content, id)
}

addNote(`My baby  My bacha`, 50)
addNote(`My father  My bacha`, 60)
addNote(`My mother  My bacha`, 70)
addNote(`My brother  My bacha`, 80)
addNote(`My uncle  My bacha`,  90 )

console.log(notes);

// Get a note 
function getNoteFromId(id) {

   if (typeof (id) === 'number') { 
  
        for (let i = 0; i < notes.length; i++) {
    
        const id = notes[i].id;
    
        if (id === id) {
     
          const content = notes[i].content;
    
          return content;
   
  
        } 
  
        }
     
      }
   
    }
console.log(getNoteFromId(50));

// Get all notes **Should return an array of the notes.

const getNotes = notes.values(); 

for (let elements of getNotes) { 
 console.log(elements); 
  }


// Log out notes
function logOutNotesFormatted() {

    for (const note of notes) {
      
        console.log(`The note with id: ${notes.id}, has the following note text: ${notes.content}.`)
     

        }

}


console.log(logOutNotesFormatted());

//Unique feature
// på vej




           

       


