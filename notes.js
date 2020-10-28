

const { debug } = require('console');
const chalks = require('chalk');
const fs = require('fs');


const readNotes=(title)=>{
    const notes = loadNotes();

    const duplicate = notes.find((notes)=>
    
    notes.title === title
);
    if(!duplicate)
    {
        console.log(chalks.red("no record found"));
    }
    else{
        
        console.log(chalks.blue.inverse(duplicate.title));
        console.log(duplicate.body);
    }
}

const addnote=(title,body)=>{

    const notes = loadNotes();

    const duplicate = notes.find((notes)=>
    
    notes.title === title
);
    if(!duplicate)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes);

    }
    else{
        console.log(chalks.red("This Title Already exist! Try another one."));
    }
    
    
}
const removeNote=(title)=>{
    const notes = loadNotes();
    const newNotes = notes.filter(
        (notes)=>notes.title!=title)
    if(notes.length===newNotes.length)
    {
        console.log(chalks.red("title not found"));

    }
    else{
    console.log(chalks.green("Note removed successfully"));

    saveNote(newNotes);
    }

}

const saveNote=(notes)=>{
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}

const loadNotes=()=>{
    try{
    const buffer = fs.readFileSync('notes.json');
    const stringData = buffer.toString();
    return JSON.parse(stringData);
    }
    catch(e)
    {
        return [];

    }
}

const listnotes=()=>{
    const notes = loadNotes();
    notes.forEach((notes) => {
        console.log(chalks.blue(notes.title))
    });
}
module.exports =
{
    getnotes: getnotes,
    addnotes: addnote,
    removenote: removeNote,
    listnotes: listnotes,
    readnotes : readNotes
}