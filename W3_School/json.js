// "employees":[
//     {"first name": "John", "last name": "Doe"},
//     {"first name": "Anna", "last name": "Smith"},
//     {"first name": "Peter", "last name": "Jones"},
// ]

let text =
  '{"employees":[' +
  ' {"firstname": "John", "lastname": "Doe"},' +
  ' {"firstname": "Anna", "lastname": "Smith"},' +
  '{"firstname": "Peter", "lastname": "Jones"}]}';

let obj = JSON.parse(text);
for (let i = 0; i < 3; i++)
  console.log(
    "First Name : " +
      obj.employees[i].firstname +
      " " +
      "Last Name : " +
      obj.employees[i].lastname
  );
