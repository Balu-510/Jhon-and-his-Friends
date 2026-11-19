let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function logEmployee(i) {
  console.log(
    `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
  );
}

// 1. Print developers using map
function PrintDeveloperbyMap() {
  arr.map((i) => {
    if (i.profession === "developer") {
      logEmployee(i);
    }
  });
}

// 2. Print developers using forEach
function PrintDeveloperbyForEach() {
  arr.forEach((i) => {
    if (i.profession === "developer") {
      logEmployee(i);
    }
  });
}

// 3. Add a new employee and log the array
function addData() {
  let temp = { id: 4, name: "Neel", age: "27", profession: "Engineer" };
  arr.push(temp);
  arr.forEach(logEmployee);
}

// 4. Remove admin using filter and log the array
function removeAdmin() {
  arr = arr.filter((i) => i.profession !== "admin");
  arr.forEach(logEmployee);
}

// 5. Create a second array with 3 objects, concatenate and log
function concatenateArray() {
  let arr1 = [
    { id: 5, name: "Ravi", age: "28", profession: "developer" },
    { id: 6, name: "Kumar", age: "24", profession: "admin" },
    { id: 7, name: "Lokesh", age: "28", profession: "manager" },
  ];
  arr = arr.concat(arr1);
  arr.forEach(logEmployee);
}
