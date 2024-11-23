// Global variables:




// Dictionary words and definitions
const wordDefinitions = {
    // 1.
    "yes":{
        partOfSpeech: "noun",
        definitions: ["used to give a affirmative respnse.","used as a reponse to someone addressing one or otherwise trying to attract one's attention."]
    },
    // 2.
    "panacea":{
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."]
    },
    //3.
    "concatenation":{
        partOfSpeech: "noun",
        definitions: ["a series of interconnected or interdependent things or events."]
    },
    // 4.
    "saw":{
        partOfSpeech: "verb",
        definitions: ["to cut (something) using  saw.","Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
    },
    // 5.
    "found":{
        partOfSpeech: "adjective", 
        definitions: ["having been discovered by chance or unexpectedly","(of a ship) Equipped; supplied."]
    },
    // 6.
    "crane":{
        partOfSpeech: "verb",
        definitions: ["strech out one's body or neck in order to see something.","Move (a heavy object) with a crane."]
    },
    // 7.
    "minute":{
        partOfSpeech: "noun",
        definitions: ["a period of time equal to sixty seconds or a sixtieth of an hour.","a sixtieth of a degree of angular measurement(symbol:')"]
    },
    // 8
    "grotesque":{
        partOfSpeech: "adjective",
        definitions: ["comically or repulsively ugly or distorted."]
    },
    // 9
    "label":{
        partOfSpeech: "adjective",
        definitions: ["a small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    // 11.
    "debacle":{
        partOfSpeech: "noun",
        definitions: ["A sudden and ignominious failure; a fiasco."]
    },
    // 12.
    "element":{
        partOfSpeech: "noun",
        definitions: ["an entity that is a single member of a set."]
    },
    // 13.
    "index":{
        partOfSpeech: "noun",
        definitions: ["a spicific place in a list or a string."]
    },
    // 14.
    "comments":{
        partOfSpeech: "noun",
        definitions: ["adding additinal information to something"]
    },
    // 15.
    "string":{
        partOfSpeech: "noun",
        definitions: ["a word or a sentence together"]
    },
    // 16.
    "slice":{
        partOfSpeech: "noun",
        definitions: ["A part of a list or a sting."]
    },
    // 17.
    "array":{
        partOfSpeech: "noun",
        definitions: ["an impressive display or range of a particular type of thing.", "an ordered series or arrangement."]

    },
    // 18.
    "directory":{
        partOfSpeech:"noun",
        definitions: ["A file system structure that organizes files and other resources on a computer or network."]
    },
    // 19.
    "file":{
        partOfSpeech:"noun",
        definitions:["A container in your computer that holds information."]
    },
    // 20.
    "clone":{
        partOfSpeech:"noun",
        definitions:["a copy or clone of something."]
    },
    // 21.
    "selectors":{
        partOfSpeech: "noun",
        definitions: ["A person or thing that selects something."]

    },
    // 22.
    "property":{
        partOfSpeech: "noun",
        definitions: ["What it is about an element you want to change."]
    },
    // 23.
    "value":{
        partOfSpeech: "noun",
        definitions: ["what you set properties to."]
    },
    // 24.
    "declaration":{
        partOfSpeech: "noun",
        definitions: ["a property and a value together"]
    },
    // 25.
    "display":{
        partOfSpeech: "verb",
        definitions: ["Used to Change how something is displayed on the website."]
    },
    // 26.
    "flex":{
        partOfSpeech: "noun",
        definitions: ["a way to organixe items in the middle of the screen on a website."]
    },
    // 27.
    "padding":{
        partOfSpeech: "noun",
        definitions: ["space between the content and any side of the box."]
    },
    // 28.
    "attributes":{
        partOfSpeech: "verb",
        definitions: ["A keyword and a value that give more information about an element."]
    },
    // 29.
    "float":{
        partOfSpeech: "verb",
        definitions: ["A style used to move images to the left or right side of the screen."]
    },
    // 30.
    "statements":{
        partOfSpeech: "noun",
        definitions: ["Lines of code used to make up javascript files."]
    },
    // 31.
    "expressions":{
        partOfSpeech: "noun",
        definitions: ["a part of a statement."]
    },

};


// Button

const button = document.getElementById("searchButton");
const partofSpeechUsed = document.getElementById("partOfSpeechForWord");
const definitionsUsed = document.getElementById("definitionForWord");


// Instruction help:

    //1. Grab the word from the input element and store in varibale
    //2. You want to check if the word is in the dictionary
        //2a. If the word is in there, creat p elements to store the part of speech, and each definition.



// function



function searchWord(){
    
    const inputContent = document.getElementById("wordInputed").value.toLowerCase();
    
     console.log(inputContent);

    if(wordDefinitions.hasOwnProperty(inputContent)){
        partofSpeechUsed.innerText = wordDefinitions[inputContent].partOfSpeech;
        definitionsUsed.innerText = wordDefinitions[inputContent].definitions;
    }
    else(
        partofSpeechUsed.innerText = "Word unavailable.",
        definitionsUsed.innerText = "Definition unavailable."
    )

}


button.addEventListener("click", searchWord);





// console.log("YEEEE!!!!")