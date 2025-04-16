const cultures = [
    {
      nama: "Tari Kecak",
      asal: "Bali",
      steps: [
        {
          text: "Tari Kecak adalah tarian tradisional dari Bali yang menampilkan puluhan penari laki-laki duduk melingkar sambil menyerukan 'cak'.",
          image: "https://images.unsplash.com/photo-1511164657592-59a452023479?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Tarian ini berasal dari tradisi Sanghyang dan berkembang pada tahun 1930-an sebagai bentuk teater Ramayana.",
          image: "https://images.unsplash.com/photo-1702318192103-30ce1a291c53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Tari ini menggambarkan pertarungan antara Rama dan Rahwana, dengan suasana mistis dan irama vokal yang khas.",
          image: "https://images.unsplash.com/photo-1675956000201-5c42a62edf35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ],
      gambar: "assets/image/kecak.jpg"
    },
    {
      nama: "Wayang Kulit",
      asal: "Jawa Tengah",
      steps: [
        {
          text: "Wayang Kulit adalah pertunjukan boneka kulit tradisional yang digunakan untuk menceritakan kisah epik Hindu.",
          image: "assets/image/wayang.jpg"
        },
        {
          text: "Pertunjukan ini menggunakan layar putih dan lampu di belakangnya, menciptakan bayangan wayang di layar.",
          image: "https://jarwadi.me/wp-content/uploads/2012/06/dsc02484swk.jpg"
        },
        {
          text: "Dalang memainkan semua karakter, menyuarakan dialog, dan mengatur gamelan yang mengiringi.",
          image: "https://images.unsplash.com/photo-1620409123739-3849e65df57a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ],
      gambar: "assets/image/wayang.jpg"
    },
    {
      nama: "Rumah Gadang",
      asal: "Sumatera Barat",
      steps: [
        {
          text: "Rumah Gadang adalah rumah adat suku Minangkabau yang atapnya menyerupai tanduk kerbau.",
          image: "assets/image/gadang.jpg"
        },
        {
          text: "Rumah ini mencerminkan sistem kekerabatan matrilineal dan digunakan untuk berbagai acara adat.",
          image: "https://plus.unsplash.com/premium_photo-1673283243936-57acf471fc0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Tiap bagian rumah punya filosofi yang mendalam, dari jumlah ruang hingga ukiran kayunya.",
          image: "https://responradio.com/wp-content/uploads/2023/12/Mengungkap-Keunikan-dan-Asal-Usul-Rumah-Gadang.jpg"
        }
      ],
      gambar: "assets/image/gadang.jpg"
    }
  ];  
  
  const listEl = document.getElementById("culture-list");
  const detailEl = document.getElementById("culture-detail");
  
  let currentIndex = 0;
  let currentStep = 0;
  
  cultures.forEach((culture, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${culture.gambar}" alt="${culture.nama}" />
      <div class="card-content">
        <h3>${culture.nama}</h3>
        <p>${culture.asal}</p>
      </div>
    `;
    card.onclick = () => showDetail(index, 0);
    listEl.appendChild(card);
  });
  
  function showDetail(index, step) {
    const data = cultures[index];
    const stepData = data.steps[step];
    currentIndex = index;
    currentStep = step;
  
    detailEl.classList.remove("hidden");
    listEl.style.display = "none";
  
    detailEl.innerHTML = `
      <h2>${data.nama}</h2>
      <p><strong>Asal:</strong> ${data.asal}</p>
      <img src="${stepData.image}" alt="Step ${step + 1} ${data.nama}" />
      <p>${stepData.text}</p>
      <div class="button-group">
        <button onclick="hideDetail()">← Kembali</button>
        ${step < data.steps.length - 1 
          ? `<button onclick="nextStep()">Selanjutnya →</button>`
          : `<button onclick="hideDetail()">Selesai</button>`}
      </div>
    `;
  }
  
  
  function nextStep() {
    currentStep++;
    showDetail(currentIndex, currentStep);
  }
  
  function hideDetail() {
    detailEl.classList.add("hidden");
    listEl.style.display = "grid";
  }
  