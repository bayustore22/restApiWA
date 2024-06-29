    async function fetchStats() {
        try {
            const response = await fetch('https://shannmoderz-95f1d384b6d2.herokuapp.com/stats');
            const data = await response.json();
            const res = data.result;
            
            document.getElementById('visitor').textContent = res.totalVisitors;
            document.getElementById('total-requests').textContent = res.totalRequests;
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
    fetchStats();

// Fungsi untuk menutup popup pertama dan menampilkan popup kedua
        function closePopup1() {
            document.getElementById('popup1').classList.remove('show');
            setTimeout(function() {
                document.getElementById('popup1').style.display = 'none';
                document.getElementById('popup2').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('popup2').classList.add('show');
                }, 10); // Menambahkan sedikit penundaan untuk memicu transisi
            }, 100); // Menunggu transisi selesai sebelum menyembunyikan elemen
        }

        // Fungsi untuk menutup popup kedua
        function closePopup2() {
            document.getElementById('popup2').classList.remove('show');
            setTimeout(function() {
                document.getElementById('popup2').style.display = 'none';
            }, 100); // Menunggu transisi selesai sebelum menyembunyikan elemen
        }

        // Menampilkan loading saat halaman dimuat
        window.onload = function() {
            setTimeout(function() {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('popup1').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('popup1').classList.add('show');
                }, 50); // Menambahkan sedikit penundaan untuk memicu transisi
            }, 8000); // Menampilkan loading selama 3 detik
        }

document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const menu = document.querySelector('nav');
            const menuItems = document.querySelectorAll('nav a');

            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('slide');
                menuToggle.classList.toggle('active');
            });
            
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(item => {
                        item.style.color = '#fff';
                    });
                    this.style.color = 'yellow';

                    setTimeout(() => {
                        this.style.color = '#fff';
                    }, 100);
                });
            });

            menu.classList.remove('slide');
        });

        function updateClock() {
            const clock = document.querySelector('.digital-clock');
            const hour = clock.querySelector('.hour');
            const minute = clock.querySelector('.minute');
            const second = clock.querySelector('.second');

            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            const seconds = currentTime.getSeconds();

            hour.textContent = hours.toString().padStart(2, '0');
            minute.textContent = minutes.toString().padStart(2, '0');
            second.textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateClock, 1000);

        function expandBox(box) {
  const isExpanded = box.classList.contains('expanded');
  const allBoxes = document.querySelectorAll('.small-box');

  if (!isExpanded) {
    box.classList.add('expanded');
    formatJson();
    box.querySelector('.button-container').style.display = 'block'; // Show the button container
  }
}
    
    document.addEventListener('click', (e) => {
  const expandedBox = document.querySelector('.small-box.expanded');
  if (expandedBox && e.target !== expandedBox && !expandedBox.contains(e.target)) {
    expandedBox.classList.remove('expanded');
  }
});``````````

function copyToClipboard(linkBox) {
  const textArea = document.createElement('textarea');
  textArea.value = linkBox.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  const popup = document.getElementById('popup');
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 2000);
}