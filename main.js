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

let a = people.findIndex(function(item)
{
    if(item.name == "Kate") return item;
});

console.log(a);
