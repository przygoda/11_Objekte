
function ausgabe(outputStr) {
    console.log(outputStr);
}

/***** Erinnerung: Arrays *******/

/*
let arr;
arr = ["Ich","bin","Imran"];
ausgabe(arr[2]);

arr = [["hallo"],["hi","hallo"]];
ausgabe(arr[1][0]);
*/

/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName: "Imran", familyName:"Malik",
                salary: [120000,125000], hasAccess: true,
                sayHello: function(){ 
                                    return "Hi, ich bin " +  this.firstName + ".";
                                    }
            };


let txtStr = "Ich bin " + person.firstName + " " + person.familyName +
            " und verdiene " + person.salary[1] + " p.a."


/* ausgabe(person);
ausgabe(person.firstName);
ausgabe(txtStr);
ausgabe(person.sayHello()); */

/***** Objekte 2 - Hierarchie *******/

// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m[1] der tiefste See der Erde. ...
// deep - deeper - deepest 
// Nested Object

let baikal = {
                deep:{
                        deeper:{
                                deepest: "Das Licht auf 1642m."
                                }
                     }
            }

ausgabe(baikal);
ausgabe(baikal.deep.deeper.deepest);



