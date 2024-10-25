
// courts = document.getElemntsByClassName(court-details)
// console.log(courts)


function test() {
    const allCourts = document.getElementById('tennis-courts').children
    // console.log(allCourts)
    for (var courtIndex in allCourts) {
        // var court = all
        console.log('court');
        Court = allCourts[courtIndex];
        courtDetails = Court.getElementsByClassName('court-details');
        console.log(Court.children)
    }
}


function buttonAction() {
    const button = document.getElementById("button1");
    button.style.backgroundColor = "#E8F0B0";
    button.textContent =button.textContent + ' Reserved';
    console.log(5);
}


function buttonAction2() {
    const button = document.getElementById("button1");
    const court = button.parentNode.parentNode;
    if (court.classList.contains("court-three")) {
        console.log('True');
    }else {
        console.log('False');
    }
    // alert(button.parentNode.parentNode.className)

}

function numberOfButtons() {
    const courts = document.getElementsByClassName("court");
    alert(courts.length);
}

function speak() {
    alert('Hello');
}

