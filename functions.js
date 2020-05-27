function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   //A1: the function holds a min and max.
   //R: math.floor rounds the number down while math.random can't reach a number past 1,its in between 0 and 1.
}

var celebrity = [
   {
      name: "Johnny Depp",
      phone: "760-555-6666",
   },
   {
      name: "Dwyane Johnson",
      phone: "305-786-9543",
   },
   {
      name: "Tyra Banks",
      phone: "463-777-4444 ",
      likes: ["beaches", "beer", "glasses"],
   },
];
function contacts(name1, prop) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   var num = "";
   var text = "";
   for (var x = 0; x < celebrity.length; x++) {
      if (celebrity[x].name === name1) {
         if (celebrity[x].hasOwnProperty(prop)) {
            num = celebrity[x][prop];
         } else {
            text = "No such Property";
         }
      } else {
         text = "No such celebrity exists";
      }
   }
   return num || text;
}

function headsOrTails(input1) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   var counter = 0;
   if (input1 == "heads") {
      counter++;
   } else if (input1 == "tails") {
      counter--;
   }
   if (counter > 0) return counter + " Heads ";
   return counter + " Tails ";
}
