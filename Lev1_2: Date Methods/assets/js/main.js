console.log("Hi");
let date = new Date()

let monate = [
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

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

document.write(date + "<br>");
document.write(date.getFullYear() + "<br>")
document.write(`${date.getMonth()} ${"Monat"}${"<br>"}`)
document.write(`${date.getDay()} ${"Tag"}${"<br>"}`)
document.write(`${date.getHours()} ${"Stunde"}${"<br>"}`)
document.write(`${date.getMinutes()} ${"Minuten"}${"<br>"}`)
document.write(`${wochenTag[date.getDay()]}${"<br>"}`)
document.write(`${monate[date.getMonth()]}${"<br>"}`)

const clock = document.querySelector('#clock');
const specification = document.querySelector('#specification')

clock.innerHTML = `${wochenTag[1].substring(0, 3)} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} PM`
specification.innerHTML += `DAY HOURS MINUTES SECONDS PERIOD`