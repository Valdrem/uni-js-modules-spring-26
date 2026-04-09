'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (const stud of students) {
  document.getElementById("target").innerHTML += "<option value='" + stud.id + "'>" + stud.name + "</option>";
  console.log(stud.name, stud.id);
}

