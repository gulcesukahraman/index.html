/* ---------------------------------------------------
   PH Design — Duş Kanalı Konfigüratörü
   ---------------------------------------------------
   Görselleri değiştirmek için:
   Aşağıdaki `combinations` nesnesine "kanal-fayans" anahtarıyla
   ilgili görsel dosya yolunu ekle veya güncelle.

   Örnek:
     "gold-siyah": "images/gold-siyah.jpg"

   Dosyaları /images klasörüne, aşağıdaki isimlendirmeyle koy:
     gold-siyah.jpg     gold-krem.jpg     gold-beyaz.jpg     gold-gri.jpg
     bronz-siyah.jpg    bronz-krem.jpg    bronz-beyaz.jpg    bronz-gri.jpg
     mat-siyah-siyah.jpg  mat-siyah-krem.jpg  mat-siyah-beyaz.jpg  mat-siyah-gri.jpg
     inox-siyah.jpg     inox-krem.jpg     inox-beyaz.jpg     inox-gri.jpg
--------------------------------------------------- */

const combinations = {
  "gold-siyah":       "images/gold-siyah.jpg",
  "gold-krem":        "images/gold-krem.jpg",
  "gold-beyaz":       "images/gold-beyaz.jpg",
  "gold-gri":         "images/gold-gri.jpg",

  "bronz-siyah":      "images/bronz-siyah.jpg",
  "bronz-krem":       "images/bronz-krem.jpg",
  "bronz-beyaz":      "images/bronz-beyaz.jpg",
  "bronz-gri":        "images/bronz-gri.jpg",

  "mat-siyah-siyah":  "images/mat-siyah-siyah.jpg",
  "mat-siyah-krem":   "images/mat-siyah-krem.jpg",
  "mat-siyah-beyaz":  "images/mat-siyah-beyaz.jpg",
  "mat-siyah-gri":    "images/mat-siyah-gri.jpg",

  "inox-siyah":       "images/inox-siyah.jpg",
  "inox-krem":        "images/inox-krem.jpg",
  "inox-beyaz":       "images/inox-beyaz.jpg",
  "inox-gri":         "images/inox-gri.jpg",
};

// Görünen etiketler (okuma alanı için)
const labels = {
  "gold": "Gold",
  "bronz": "Bronz",
  "mat-siyah": "Mat Siyah",
  "inox": "İnox",
  "siyah": "Siyah",
  "krem": "Krem",
  "beyaz": "Beyaz",
  "gri": "Gri",
};

const state = {
  kanal: "gold",
  fayans: "siyah",
};

const imageEl = document.getElementById("combo-image");
const emptyEl = document.getElementById("viewer-empty");
const readoutKanal = document.getElementById("readout-kanal");
const readoutFayans = document.getElementById("readout-fayans");

function comboKey(){
  return `${state.kanal}-${state.fayans}`;
}

// Bir görselin gerçekten yüklenip yüklenemediğini kontrol eder
function tryLoadImage(src){
  return new Promise((resolve) => {
    const test = new Image();
    test.onload = () => resolve(true);
    test.onerror = () => resolve(false);
    test.src = src;
  });
}

async function updateViewer(){
  const key = comboKey();
  const src = combinations[key];

  readoutKanal.textContent = labels[state.kanal];
  readoutFayans.textContent = labels[state.fayans];

  if (!src){
    imageEl.classList.remove("is-visible");
    emptyEl.classList.add("is-visible");
    return;
  }

  const ok = await tryLoadImage(src);

  if (ok){
    imageEl.classList.remove("is-visible");
    // kısa bir yumuşak geçiş için bir sonraki frame'de kaynağı ata
    requestAnimationFrame(() => {
      imageEl.src = src;
      imageEl.classList.add("is-visible");
      emptyEl.classList.remove("is-visible");
    });
  } else {
    imageEl.classList.remove("is-visible");
    emptyEl.classList.add("is-visible");
  }
}

function setActiveSwatch(row, value){
  row.querySelectorAll(".swatch").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.value === value);
  });
}

function wireGroup(rowId, stateKey){
  const row = document.getElementById(rowId);
  row.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-disabled")) return;
      state[stateKey] = btn.dataset.value;
      setActiveSwatch(row, btn.dataset.value);
      updateViewer();
    });
  });
}

wireGroup("kanal-row", "kanal");
wireGroup("fayans-row", "fayans");

setActiveSwatch(document.getElementById("kanal-row"), state.kanal);
setActiveSwatch(document.getElementById("fayans-row"), state.fayans);

updateViewer();
