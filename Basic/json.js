const jsonA = '{"name": "Shivam", "email" :"shivam@email.com", "age": 25, "city":"indore"}';
const data = JSON.parse(jsonA) //parse convert to object
console.log(data);

const jsonb = {name: "Shivam", email :"shivam@email.com", age: 25, city :"indore"};
const res = JSON.stringify(jsonb)  //stringify convert to string
console.log(res);
