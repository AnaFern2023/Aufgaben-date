console.log("Hi");

let datum = document.querySelector('#datum')


let actuallyDate = () => {
    let date = new Date()
    console.log(date);
    console.log(`${date.getDate()}//0${date.getMonth()}//${date.getFullYear()}`);

    datum.innerHTML = `${date.getDate()}//0${date.getMonth() + 1}//${date.getFullYear()}`
}

actuallyDate()
