// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function header() {

    const div = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    div.classList.add('header');
    span.classList.add('date');
    spanTemp.classList.add('temp');

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(spanTemp);

    span.textContent = 'MARCH 28, 2020';
    h1.textContent = 'Lambda Times';
    spanTemp.textContent = '98°'
    return div;
}
const container = document.querySelector('.header-container')
container.appendChild(header());