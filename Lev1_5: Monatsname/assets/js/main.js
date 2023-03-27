console.log("Hi");



let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let monatsName = ((datum) => {

    let date = new Date(datum)

    console.log(list[date.getMonth()]);

})
monatsName("2001,3,4")
monatsName("2019,12,24")
monatsName("1410,07,15")

