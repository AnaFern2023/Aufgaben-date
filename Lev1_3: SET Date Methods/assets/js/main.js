console.log("Hi");
let date = new Date()

document.write(date + "<br>")

date.setFullYear(2123) + date.setDate(24)
document.write(date + "<br>")

date.setMonth(3)
document.write(date + "<br>")

date.setDate(04)
document.write(date + "<br>")

date.setDate(date.getDate() + 30)
document.write(date + "<br>")