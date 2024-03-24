color_array = ['card_color--1', 'card_color--2', 'card_color--3', 'card_color--4', 'card_color--5', 'card_color--6', 'card_color--7', 'card_color--8', 'card_color--9'];
color_index = 0;
ShowAll1 = false;
ShowAll2 = false;
ShowAll3 = false;
const cardDetails = [
  {
    title: "DUBAI PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-1.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "MALAISIA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-2.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "SRILANKA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-3.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "INDIA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-4.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "UNITE STATE PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-5.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "GOA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-6.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "PAKISTHAN PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-7.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "CHENNAI PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-8.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "SOUTHI ARABIA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-9.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "AHAMATHPATH PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-10.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "CHINA PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-6.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  },
  {
    title: "JABBAN PACKAGE TOUR",
    price: "$123",
    pictureClass: "./img/nat-6.jpg",
    Highlighted_disc: ['Free Food', 'Transport', 'Free Food', 'Transport', 'Transport']
  }

];

// Function to generate HTML for each card
function generateCardHTML(card) {

  list = "";
  card.Highlighted_disc.forEach(card => {
    list = list + "<li>" + card + "</li>";
  });
  value = `<div class="col-1-of-3">
<div class="card">
  <div class="card__side card__side--front">
    <img src=${card.pictureClass} alt="Description of the image" class="card__picture">
    <h4 class="card__heading">
      <span class="card__heading-span ${color_array[color_index]}"
        >${card.title}</span
      >
    </h4>
    <div class="card__details">
      <ul>
      ${list}
      </ul>
    </div>
  </div>
  <div class="card__side card__side--back ${color_array[color_index]}">
    <div class="card__cta">
      <div class="card__price-box">
        <p class="card__price-only">Only</p>
        <p class="card__price-value">${card.price}</p>
      </div>
      <a href="#popup" class="btn btn--white">Buy now</a>
    </div>
  </div>
</div>
</div>
`;
  if (color_array.length === color_index + 1) {
    color_index = 0;
  }
  else {
    color_index = color_index + 1;
  }

  return value;
}

// Function to dynamically generate cards
function generateCards1() {
  color_index = 0;
  const cardContainer = document.getElementById("cardContainer1");
  cardContainer.innerHTML = '';
  i = 0;
  cardDetails.forEach(card => {
    if (!ShowAll1 && i === 3) {
      return;
    }
    const cardHTML = generateCardHTML(card);
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    i++;
  });
}
function generateCards2() {
  color_index = 0;
  const cardContainer = document.getElementById("cardContainer2");
  cardContainer.innerHTML = '';
  i = 0;
  cardDetails.forEach(card => {
    if (!ShowAll2 && i === 3) {
      return;
    }
    const cardHTML = generateCardHTML(card);
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    i++;
  });
}
function generateCards3() {
  color_index = 0;
  const cardContainer = document.getElementById("cardContainer3");
  cardContainer.innerHTML = '';
  i = 0;
  cardDetails.forEach(card => {
    if (!ShowAll3 && i === 3) {
      return;
    }
    const cardHTML = generateCardHTML(card);
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    i++;
  });
}

// Call the function to generate cards
generateCards1();
generateCards2();
generateCards3();

// Define the method you want to call
function handleClick1(button) {
  if (ShowAll1) {
    ShowAll1 = false;
    button.textContent = "Show All";
    var section = document.getElementById("s1");
    section.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    ShowAll1 = true;
    button.textContent = "Hide All";

  }

  generateCards1();
}

// Define the method you want to call
function handleClick2(button) {
  if (ShowAll2) {
    ShowAll2 = false;
    button.textContent = "Show All";
    var section = document.getElementById("s2");
    section.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    ShowAll2 = true;
    button.textContent = "Hide All";
  }
  generateCards2();
}
// Define the method you want to call
function handleClick3(button) {
  if (ShowAll3) {
    ShowAll3 = false;
    button.textContent = "Show All";
    var section = document.getElementById("s3");
    section.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    ShowAll3 = true;
    button.textContent = "Hide All";
  }
  generateCards3();
}
var searchInput = document.querySelector('.searchInput');
var suggestionsBox = document.querySelector('.suggestions');

searchInput.addEventListener('input', function () {
  if (this.value.length == 0) {
    suggestionsBox.innerHTML = '';
      suggestionsBox.style.display = 'none';
  }
  else {
    var searchValue = this.value.trim().toLowerCase();
    var matches = cardDetails.filter(function (suggestion) {
      return suggestion.title.toLowerCase().includes(searchValue);
    });

    if (matches.length > 0) {
      var suggestionsHTML = '<ul>';
      matches.forEach(function (match) {
        suggestionsHTML += '<a href="#popup" id="link1"><li>' + match.title +'</li></a>';
      });
      suggestionsHTML += '</ul>';
      suggestionsBox.innerHTML = suggestionsHTML;
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.innerHTML = '';
      suggestionsBox.style.display = 'none';
    }
  }
});

document.addEventListener('click', function (event) {
  if (!searchInput.contains(event.target)) {
    suggestionsBox.style.display = 'none';
  }
});

suggestionsBox.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    searchInput.value ='';
    suggestionsBox.style.display = 'none';
    var value = Array.from(cardDetails).indexOf(event.target);
  }
});
