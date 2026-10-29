// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
const arrCount = []


function increment() {
    count += 1
    arrCount.push(count)
    countEl.innerText = count
}



function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let strOutput = " " + count + " - "

    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent = saveEl.innerText + strOutput
    // NB: Make sure to not delete the existing content of the paragraph



    //countEl.textContent = 0
    //saveEl.textContent = "Previous Entries"
    console.log(count)
    console.log("Andy" + arrCount.length)
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous Entries"
    arrCount.reset
}


