onReady();

function onReady() {
  console.log('Javascript is working!');
}

// declare fire and ice counts

let fireCount = 0;
let iceCount = 0;

// function to add fire emoji when fire button is clicked

function addFire(event) {
  const fireButton = event.target;
  console.log('fire button clicked');
  const emoji = document.getElementById('emoji'); // do we need this part?
  emoji.innerHTML += `🔥`;
  fireCount++;
  document.getElementById('fire-count').innerHTML = fireCount;
}

// function to add ice emoji when ice button is clicked

function addIce(event) {
  const iceButton = event.target;
  console.log('ice button clicked');
  const emoji = document.getElementById('emoji');
  emoji.innerHTML += `❄️`;
  iceCount++;
  document.getElementById('ice-count').innerHTML = iceCount;
}

// function to add tr and td when submit button is clicked

function addAffirmation(event) {
  event.preventDefault();
  console.log('submit button clicked');
  if (fireCount > iceCount) {
    const table = document.getElementById('table-body');
    const affirmation = document.getElementById('affirmation').value;
    const author = document.getElementById('author').value;
    table.innerHTML += `<tr>
                          <td>${affirmation}</td>
                          <td>${author}</td>
                          <td><button onclick="removeAffirmation(event)">X</button></td>
                        </tr>  `;
  } else {
    alert('no more affirmations');
  }
  document.getElementById('form').reset();
}

// function to remove affirmation from table

function removeAffirmation(event) {
  if (iceCount > fireCount) {
    event.target.closest('tr').remove();
  } else {
    alert('cannot delete');
  }
}
