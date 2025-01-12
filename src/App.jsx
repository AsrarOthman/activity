import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Selamat Datang ke Laman Web Aktiviti dan Projek Saya - Asrar Otmhan -
        </h1>
        <p>
          Ini adalah laman web saya yang memaparkan setiap aktiviti yang saya
          jalankan.
        </p>

        <div className="home-section">
          <h2>Projek atau Aktiviti</h2>

          <div className="card-container">
            {/* Card 1 */}
            <div className="card">
              <img
                src="/src/img/img1.png"
                alt="Placeholder"
                className="card-image"
              />
              <a
                href="https://invoice-gen.aotechnology.com.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>AOT Invoice Generator</h3>
              </a>
              <p>
                Platform ini memudahkan penciptaan invois dengan cepat tanpa
                kerja manual atau masalah format.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <img
                src="/src/img/img2.png"
                alt="Placeholder"
                className="card-image"
              />

              <a
                href="https://dictionary.aotechnology.com.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>AOT Dictionary</h3>
              </a>
              <p>
                AOT DICTIONARY adalah laman web di mana anda boleh memahami
                makna sesuatu ayat dengan mudah.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <img
                src="/src/img/img3.png"
                alt="Placeholder"
                className="card-image"
              />

              <a
                href="https://asrarothman.github.io/kerja-it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Kerja-IT</h3>
              </a>
              <p>
                Kerja-IT adalah sebuah platform untuk mencari kerja yang saya
                bina sebagai projek untuk mempelajari penggunaan API.
              </p>
            </div>

            {/* Card 4
             */}
            <div className="card">
              <img
                src="/src/img/img4.png"
                alt="Placeholder"
                className="card-image"
              />

              <a
                href="https://asrarothman.github.io/sec-2023-day-8/key-code-finder/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>KeyCode Finder</h3>
              </a>
              <p>
                KeyCode Finder bertujuan untuk membantu pengguna mengenal pasti
                kod kekunci (keycode) bagi setiap kekunci yang ditekan pada
                papan kekunci (keyboard).{" "}
              </p>
            </div>

            {/* Card 5 */}
            <div className="card">
              <img
                src="/src/img/img5.png"
                alt="Placeholder"
                className="card-image"
              />

              <a
                href="https://asrarothman.github.io/-sec-2023-day-7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>BMI Calculator</h3>
              </a>
              <p>
                Aplikasi BMI Calculator digunakan untuk mengira Indeks Jisim
                Badan (BMI), yang membantu menilai tahap kesihatan seseorang
                berdasarkan berat badan dan ketinggian mereka.
              </p>
            </div>
            {/* Card 6 */}
            <div className="card">
              <img
                src="/src/img/img6.png"
                alt="Placeholder"
                className="card-image"
              />

              <a
                href="https://www.figma.com/proto/acnoe7cafta09kyUlJxKiK/FGV-App?node-id=1-3&p=f&t=yZ7zYiKtpqHs9O3r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Design Figma UI/UX</h3>
              </a>
              <p>
                Mereka bentuk aplikasi menggunakan Figma untuk FGV Agri
                Services, sebuah aplikasi yang bertujuan untuk memudahkan
                pengurusan dan pemantauan aktiviti pertanian.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="box"></div>

      {/* Footer */}
      <footer className="App-footer">
        <p>© 2025 Asrar Othman</p>
      </footer>
    </div>
  );
}

export default App;
