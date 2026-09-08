GÖRSEL YÜKLEME REHBERİ
=======================

Bu klasöre, her duş kanalı + fayans kombinasyonu için hazır banyo
fotoğraflarını aşağıdaki isimlendirmeyle ekleyin:

  gold-siyah.jpg        gold-krem.jpg        gold-beyaz.jpg        gold-gri.jpg
  bronz-siyah.jpg       bronz-krem.jpg       bronz-beyaz.jpg       bronz-gri.jpg
  mat-siyah-siyah.jpg   mat-siyah-krem.jpg   mat-siyah-beyaz.jpg   mat-siyah-gri.jpg
  inox-siyah.jpg        inox-krem.jpg        inox-beyaz.jpg        inox-gri.jpg

Kural: dosya adı = "[kanal-değeri]-[fayans-değeri].jpg"
(değerler script.js içindeki "combinations" nesnesindeki anahtarlarla birebir eşleşir)

Bir kombinasyona ait görseliniz yoksa dosyayı eklemeyin — sayfa o seçim
yapıldığında otomatik olarak "Bu kombinasyon için görsel yakında eklenecek."
mesajını gösterir, bozulmaz.

Yeni bir kombinasyon eklemek isterseniz (örn. yeni bir fayans rengi):
1. index.html içinde ilgili seçim grubuna yeni bir <button class="swatch"> ekleyin.
2. script.js içindeki "combinations" nesnesine yeni anahtar/görsel yolunu ekleyin.
3. Görseli bu klasöre doğru isimle koyun.

Görseller olduğu gibi kullanılır: yeniden oluşturma, filtre veya renk
değişimi uygulanmaz.
