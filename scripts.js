const images = [
  'assets/images/gallery-5.jpg',
  'assets/images/gallery-3.jpg',
  'assets/images/gallery-2.jpg',
]

let key = 0

function setImageSlider() {
  const imageSliderElement = document.getElementById('img-slide')
  imageSliderElement.setAttribute('src', images[key])
}

setImageSlider()

const navigatorButtons = document.getElementsByClassName('carousel-control-prev, .carousel-control-next')
for (const navBtn of navigatorButtons) {
  navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('carousel-control-next')) {
      key++
      if (key >= images.length) {
        key = 0
      }
    } else {
      key--
      if (key < 0) {
        key = images.length - 1
      }
    }
    setImageSlider()
  })
}

$(document).ready(function () {
  $('#slider').carousel({
    interval: 2000
  });
});

document.getElementById('ticket-form').addEventListener('submit', function(event) {
  // Mencegah pengiriman formulir secara default
  event.preventDefault();

  // Mengambil nilai dari input nama
  var name = document.getElementById('name').value;

  // Mengambil nilai dari radio button tiket
  var ticketType = document.querySelector('input[name="ticket-type"]:checked');
  var ticketTypeValue = ticketType ? ticketType.value : '';

  // Mengambil nilai dari checkbox merchandise
  var merchandiseValues = [];
  var checkboxes = document.querySelectorAll('input[name="merchandise"]:checked');
  checkboxes.forEach(function(checkbox) {
    merchandiseValues.push(checkbox.value);
  });

  // Memeriksa apakah formulir sudah diisi
  if (name && ticketTypeValue) {
    // Menampilkan alert jika formulir sudah diisi
    alert('Terima kasih, ' + name + '! Formulir sudah diisi.');
  } else {
    // Menampilkan pesan jika formulir belum lengkap
    alert('Mohon lengkapi formulir terlebih dahulu.');
  }
});


