#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber:number = Math.floor(10000 + Math.random()*90000)

let myBalance:number = 0;

let answer = await inquirer.prompt([
   {
      name:"Students",
      type:"input",
      message:"Enter Student name:",
      validate: function(value){
         if (value.trim() !== ""){
            return true;
         }
         return "Please enter a non-empty value."
      },
   },
   {
      name:"Courses",
      type:"list",
      message:"Select the courses to be enrolled",
      choices:["Python","Java Script","Web Development"],
   }
]);

const tuitionFee:{[key: string]: number} = {
   "Python": 10000,
   "Java Script": 7000,
   "Web Development": 10000
};

console.log(`\nTuition Fees: ${tuitionFee[answer.Courses]}/-\n`);
console.log(`\nBalance:${myBalance}\n`)

let paymentType = await inquirer.prompt ([
   {
   name:"Payment",
   type:"list",
   message:"Select Payment Type:",
   choices:["Easy Paisa","Jazz Cash","Bank Transfer"],

   },
   {
      name:"Amount",
      type:"input",
      message:"Transfer Money",
      validate: function(value){
         if(value.trim() !== ""){
            return true;
         }
         return "Please enter a value.";
      }
   }
])
     console.log(`You select ${paymentType.Payment}`);



 if (paymentType.Amount > tuitionFee[answer.Courses]){
   let returnAmount = paymentType.Amount -= tuitionFee[answer.Courses]
    console.log(`${returnAmount} is extra amount.`)
}
else if(paymentType.Amount < tuitionFee[answer.Courses]){
   console.log("You paid insufficient amount.")
}


const tuitionFees = tuitionFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.Amount)

if (tuitionFees === paymentAmount){
   console.log(`Congratulations! You have successfully enrolled in ${answer.Courses}.`);
   
   
   let ans = await inquirer.prompt([
      {
         name:"Select",
         type:"list",
         message:"What would you like to do next?",
         choices:["view status", "exit"]
      }

   ])
   if (ans.Select === "view status"){
      console.log(`Student Name: ${answer.Students}`);
      console.log(`Student ID: ${randomNumber}`);
      console.log(`Courses:${answer.Courses}`);
      console.log(`Tuition Fee Paid:${paymentType.Amount}`);
      console.log(`Balance:${myBalance+= paymentAmount}`)
   }
   else{
      console.log("Exiting Student Management System")
   }
}
else { if (paymentType.Amount > tuitionFee[answer.Courses]){
   let returnAmount = paymentType.Amount -= tuitionFee[answer.Courses]
    console.log(`${returnAmount} is extra amount.`)
}
   }

