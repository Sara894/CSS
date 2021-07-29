let people = [
  {
    name: "Ann",
    surname: "Sun",
  },
  {
    name: "Kate",
    surname: "Waterdrink",
  },
  {
    name: "Alina",
    surname: "Karinova",
  },
  {
    name: "Maria",
    surname: "Voitova",
  },
];

let a = people.find(function(item)
{
    if(item.name == "Ann") return item;
});

console.log(a);
