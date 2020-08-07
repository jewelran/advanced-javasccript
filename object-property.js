const student = [
    {id :23, name :"jewel"},
    {id :27, name :"rana"},
    {id :29, name :"fsdsd"}

]
const sName = student.map(s => s.name);
const bigger = student.filter(s => s.id);
const biggerOne = student.find(s => s.id>23);
console.log(biggerOne)