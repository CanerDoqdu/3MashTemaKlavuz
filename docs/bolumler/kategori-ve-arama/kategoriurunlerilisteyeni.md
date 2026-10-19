---
title: "KategoriUrunleriListeYeni"
description: "3Mash temasında KategoriUrunleriListeYeni adıyla kayıtlı bölümün yapılandırma alanları."
---

# KategoriUrunleriListeYeni

## Bu bölümde

- Yapılandırmada kayıtlı 2273 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **KategoriUrunleriListeYeni** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📦 Canlı Ürün Listesi (Kart Sırası) (`productList`) | PRODUCT_LIST | Yapılandırmada varsayılan değer belirtilmemiş | 🔄 Canlı Ürün Kaynağı | Hayır | Yıkama ve Kürleme kartları canlı moddaysa bağlı listedeki ilk 3 ürün, liste sırasıyla kartlara gelir. |
| ⚡ Duyuru Vurgu Metni (`resinEyebrowText`) | TEXT | ⚡ Doğru reçineyi mi arıyorsunuz? | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Vurgu Metni (`printerEyebrowText`) | TEXT | ⚡ Hangi yazıcı size uygun? | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`printerAnnouncementText`) | TEXT | Hız, çözünürlük ve bütçeye göre karşılaştırın; emin değilseniz ekibimiz eşleştirir. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`printerAnnouncementCtaText`) | TEXT | Karşılaştırmaya git → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`printerAnnouncementHref`) | TEXT | #karsilastirma-tablosu | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`printerHeroTitlePrefix`) | TEXT | ±20 mikron | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`printerHeroTitleEmphasis`) | TEXT | burada doğar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`printerHeroTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`printerHeroDescriptionHtml`) | RICH_TEXT | Hassasiyet tesadüf değildir; doğru dalga boyu , termal stabilite ve kalibrasyonla kurulur. 3mash yazıcıları malzemeye göre tasarlanır: 385 nm ışık reçinenin kürlenme spektrumuna tam uyar, entegre ısıtma viskoziteyi sabitler. Üstelik gizli lisans veya RFID ücreti yok — istediğiniz reçineyle çalışırsınız. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`printerPrimaryButtonText`) | TEXT | Yazıcıları karşılaştır ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`printerPrimaryButtonHref`) | TEXT | #karsilastir | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`printerSecondaryButtonText`) | TEXT | Bana uygun olanı öner | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`printerSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`printerMetric1Value`) | TEXT | 385 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`printerMetric1Emphasis`) | TEXT | nm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`printerMetric1Label`) | TEXT | reçine kürlenme spektrumuna tam uyum · keskin marjin | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`printerMetric2Value`) | TEXT | 14×19 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`printerMetric2Emphasis`) | TEXT | µm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`printerMetric2Label`) | TEXT | MASH P16L · 16K XY çözünürlük | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`printerMetric3Value`) | TEXT | ±20 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`printerMetric3Emphasis`) | TEXT | µm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`printerMetric3Label`) | TEXT | CURIE M1 · tekrarlanabilir doğruluk | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`printerMetric4Value`) | TEXT | 0 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`printerMetric4Emphasis`) | TEXT | gizli ücret | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`printerMetric4Label`) | TEXT | lisans / RFID kilidi yok · marka bağımsız reçine | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`printerSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`printerSelectorLabel`) | TEXT | CİHAZLAR | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`printerSelectorTitlePrefix`) | TEXT | İhtiyacınıza göre | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`printerSelectorTitleEmphasis`) | TEXT | üç yol. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`printerSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`printerSelectorSideHtml`) | RICH_TEXT | En yüksek çözünürlük, en yüksek hız ya da en uygun giriş — üçü de aynı 3mash desteğiyle ve gizli ücret olmadan gelir. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`printerSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`printerFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`printerFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`printerFeatureEyebrow`) | TEXT | MASH P16L · 385nm · 16K | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`printerFeatureTitlePrefix`) | TEXT | Marjin hattı, | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`printerFeatureTitleEmphasis`) | TEXT | saç telinden ince. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`printerFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`printerFeatureDescriptionHtml`) | RICH_TEXT | Profesyonel 385 nm UV kaynağı reçinelerin kürlenme spektrumuna tam uyar; parazit ışığı minimize ederek keskin marjin hatları sunar. 16K çözünürlük 14×19 µm XY hassasiyet getirir; entegre termal kontrol reçine viskozitesini sabitleyerek her baskıda aynı sonucu güvence altına alır. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`printerFeatureHref`) | TEXT | /mash-p16l-385nm-16k-dental-3d-yazici | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`printerFeatureCtaText`) | TEXT | Ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`printerFeatureSpec1Label`) | TEXT | XY çözünürlük | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`printerFeatureSpec1Value`) | TEXT | 14×19 µm (16K) | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`printerFeatureSpec2Label`) | TEXT | Işık kaynağı | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`printerFeatureSpec2Value`) | TEXT | 385 nm UV | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`printerFeatureSpec3Label`) | TEXT | Termal kontrol | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`printerFeatureSpec3Value`) | TEXT | Entegre (25/30°C) | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`printerFeatureSpec4Label`) | TEXT | Kalibrasyon | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`printerFeatureSpec4Value`) | TEXT | 8 nokta dikey kilit | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`printerDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`printerDetailLabel`) | TEXT | NEDEN 3MASH YAZICILARI FARKLI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`printerDetailTitlePrefix`) | TEXT | İyi cihaz değil, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`printerDetailTitleEmphasis`) | TEXT | doğru sistem. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`printerDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`printerDetailSideHtml`) | RICH_TEXT | Hassasiyet dört şeyin bir araya gelmesiyle çıkar. 3mash yazıcıları bunları baştan düşünülerek tasarlanır. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`printerDetailCard1Title`) | TEXT | Malzemeye göre ışık | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`printerDetailCard1DescriptionHtml`) | RICH_TEXT | 385 nm dalga boyu reçine kimyasına uyar; parazit ışığı azaltır, marjini keskinleştirir. (P16L) | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`printerDetailCard2Title`) | TEXT | Termal stabilite | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`printerDetailCard2DescriptionHtml`) | RICH_TEXT | Entegre ısıtma reçine viskozitesini sabitler; baskıdan baskıya sonucu tekrar edilebilir kılar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`printerDetailCard3Title`) | TEXT | Kalibrasyon derdi yok | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`printerDetailCard3DescriptionHtml`) | RICH_TEXT | 8 nokta dikey kilit ve 6 aya kadar kalibrasyon gerektirmeyen yapı — her gün aynı doğruluk. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`printerDetailCard4Title`) | TEXT | Kilitlenme yok | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`printerDetailCard4DescriptionHtml`) | RICH_TEXT | Gizli lisans / RFID ücreti yok. İstediğiniz marka reçineyle çalışır, bir ekosisteme mahkûm olmazsınız. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`printerDetailCalloutTitlePrefix`) | TEXT | Yazıcı, hikâyenin | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`printerDetailCalloutTitleEmphasis`) | TEXT | üçte biri. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`printerDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`printerDetailCalloutDescriptionHtml`) | RICH_TEXT | En iyi cihaz bile yanlış reçine veya yanlış kürlemeyle hassasiyeti kaybeder. Kuronun oturması yazıcı + reçine + kürlemenin senkronuna bağlıdır — biz üçünü birlikte kalibre ediyoruz. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`printerDetailCalloutButton1Text`) | TEXT | Uyumlu reçineler → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`printerDetailCalloutButton1Href`) | TEXT | /dental-3d-yazici-recineleri | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`printerDetailCalloutButton2Text`) | TEXT | Kürlemenin önemi → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`printerDetailCalloutButton2Href`) | TEXT | /yikama-kurleme-cihazlari#neden-gerekli | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`printerFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`printerFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`printerFaqTitle`) | TEXT | Yazıcı seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`printerFaqSideHtml`) | RICH_TEXT | Diş hekimleri ve laboratuvarların en çok sorduğu sorular, net cevaplarla. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`printerFaq1Question`) | TEXT | Hangi dental 3D yazıcıyı seçmeliyim? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`printerFaq1AnswerHtml`) | RICH_TEXT | İhtiyacınıza göre: en yüksek çözünürlük ve keskin marjin için MASH P16L (385 nm · 16K · 14×19 µm); hız ve düşük toplam maliyet için yerli Mash CURIE M1 (±20 µm, 14 dk'da geçici kron); dijitale ekonomik giriş için Creality Halot-Sky 6K (arttırılmış versiyonda ±15 µm). Emin değilseniz yukarıdaki karşılaştırmayı kullanın veya ekibimize danışın. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`printerFaq2Question`) | TEXT | 385 nm mi, 405 nm mi? Fark ne? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`printerFaq2AnswerHtml`) | RICH_TEXT | 385 nm dalga boyu, çoğu dental reçinenin kürlenme spektrumuna daha iyi uyar; parazit ışığı azaltır ve daha keskin marjinler sağlar. MASH P16L bu yüzden profesyonel 385 nm UV kaynağı kullanır. Detaylı karşılaştırma için Mash Academy'deki 385nm mi 405nm mi? yazısına bakabilirsiniz. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`printerFaq3Question`) | TEXT | Gizli lisans veya RFID reçine ücreti var mı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`printerFaq3AnswerHtml`) | RICH_TEXT | Hayır. 3mash yazıcılarında gizli lisans veya RFID kilidi yoktur. Cihazı bir marka reçineye mahkûm etmiyoruz; dilediğiniz reçineyle çalışabilir, maliyetinizi kendiniz kontrol edebilirsiniz. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`printerFaq4Question`) | TEXT | Ne sıklıkta kalibrasyon gerekir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`printerFaq4AnswerHtml`) | RICH_TEXT | Sık sık değil. MASH P16L 8 nokta dikey kilit sayesinde aylarca stabil kalır; Mash CURIE M1 6 aya kadar kalibrasyon gerektirmez. Böylece her gün aynı doğrulukta baskı alırsınız. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`printerFaq5Question`) | TEXT | Başka marka reçineyle çalışır mı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`printerFaq5AnswerHtml`) | RICH_TEXT | Evet. 3mash yazıcıları marka bağımsızdır. Dahası teknik ekibimiz, kullandığınız reçineyi cihazınızın parametreleriyle birlikte kalibre ederek en iyi sonucu almanızı sağlar. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`printerFinalTitlePrefix`) | TEXT | Doğru yazıcıyı | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`printerFinalTitleEmphasis`) | TEXT | birlikte seçelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`printerFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`printerFinalDescriptionHtml`) | RICH_TEXT | Hangi işler, hangi hacim, hangi bütçe? Kısa bir görüşmeyle size en uygun cihazı, reçineyi ve doğru parametreleri ücretsiz önerelim — elinizdeki cihazı da değerlendiririz. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`printerFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`printerFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`printerFinalSecondaryButtonText`) | TEXT | Karşılaştırmaya dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`printerFinalSecondaryButtonHref`) | TEXT | #karsilastir | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`printerBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`printerTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`printerMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`printerPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`printerAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`printerLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`printerShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`printerShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`printerShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`printerShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`printerShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`printerShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`printerShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`printerShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ MASH P16L Görseli (`printerPrinterP16lImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 🖼️ Mash CURIE M1 Görseli (`printerPrinterCurieImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 🖼️ Creality Halot-Sky 6K Görseli (`printerPrinterHalotImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 MASH P16L Görsel Alt Metni (`printerPrinterP16lImageAlt`) | TEXT | MASH P16L dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 MASH P16L İngilizce Görsel Alt Metni (`printerPrinterP16lImageAltEn`) | TEXT | MASH P16L dental 3D printer | 🌐 Ürün Seçici | Hayır | — |
| 📝 Mash CURIE M1 Görsel Alt Metni (`printerPrinterCurieImageAlt`) | TEXT | Mash CURIE M1 dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 Mash CURIE M1 İngilizce Görsel Alt Metni (`printerPrinterCurieImageAltEn`) | TEXT | Mash CURIE M1 dental 3D printer | 🌐 Ürün Seçici | Hayır | — |
| 📝 Creality Halot-Sky 6K Görsel Alt Metni (`printerPrinterHalotImageAlt`) | TEXT | Creality Halot-Sky 6K dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 Creality Halot-Sky 6K İngilizce Görsel Alt Metni (`printerPrinterHalotImageAltEn`) | TEXT | Creality Halot-Sky 6K dental 3D printer | 🌐 Ürün Seçici | Hayır | — |
| 📝 Duyuru Açıklama Metni (`resinAnnouncementText`) | TEXT | Uygulamanıza göre filtreleyin; emin değilseniz ekibimiz sizin için eşleştirir. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`resinAnnouncementCtaText`) | TEXT | Reçine seçiciye git → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`resinAnnouncementHref`) | TEXT | #secici | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`resinHeroTitlePrefix`) | TEXT | Sonucun yarısı | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`resinHeroTitleEmphasis`) | TEXT | reçinede | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`resinHeroTitleSuffix`) | TEXT | saklı. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`resinHeroDescriptionHtml`) | RICH_TEXT | Ana sayfada gördüğümüz gibi hassasiyet tek bir cihazdan çıkmaz. Doğru reçine, doğru işe eşleştiğinde ve cihazınızın parametreleriyle birlikte kalibre edildiğinde ortaya çıkar. CE Class IIa sertifikalı CRS hattı ve ekonomik Mash hattıyla, her uygulama için doğru bir reçine var. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`resinPrimaryButtonText`) | TEXT | Reçineni seç ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`resinPrimaryButtonHref`) | TEXT | #secici | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`resinSecondaryButtonText`) | TEXT | Emin değil misiniz? Ekibe sorun | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`resinSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`resinMetric1Value`) | TEXT | CE | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`resinMetric1Emphasis`) | TEXT | Class IIa | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`resinMetric1Label`) | TEXT | biyouyumlu CRS hattı · sertifikalı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`resinMetric2Value`) | TEXT | 16 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`resinMetric2Emphasis`) | TEXT | reçine | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`resinMetric2Label`) | TEXT | model, kron, protez, diş eti, splint, aligner, guide… | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`resinMetric3Value`) | TEXT | Marka | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`resinMetric3Emphasis`) | TEXT | bağımsız | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`resinMetric3Label`) | TEXT | tüm DLP & LCD 3D yazıcılarla uyumlu | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`resinMetric4Value`) | TEXT | Birlikte | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`resinMetric4Emphasis`) | TEXT | kalibre | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`resinMetric4Label`) | TEXT | cihaz parametrelerinizle eşleştirilerek teslim | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`resinSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`resinSelectorLabel`) | TEXT | REÇİNE SEÇİCİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`resinSelectorTitlePrefix`) | TEXT | Hangi işe | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`resinSelectorTitleEmphasis`) | TEXT | hangi reçine? | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`resinSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`resinSelectorSideHtml`) | RICH_TEXT | Uygulamanızı seçin, doğru reçineyi görün. Hepsi tüm DLP/LCD yazıcılarla çalışır; CRS hattı ayrıca CE Class IIa biyouyumludur. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`resinSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`resinFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`resinFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`resinFeatureEyebrow`) | TEXT | CRS COMPOSITE · CE CLASS IIa | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`resinFeatureTitlePrefix`) | TEXT | Daimi kron artık | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`resinFeatureTitleEmphasis`) | TEXT | baskıdan | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`resinFeatureTitleSuffix`) | TEXT | çıkıyor. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`resinFeatureDescriptionHtml`) | RICH_TEXT | Geçici ve daimi kron-köprülerin katmanlı üretimi için biyouyumlu reçine. Rakiplerine kıyasla daha yüksek bükülme mukavemeti ve hassas marjinal uyum; yarı saydamlık–opaklık arasında dengeli translüsentlik. Ağız koşullarına dayanıklı, tat/koku yapmaz. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`resinFeatureHref`) | TEXT | /crs-composite-mukemmel-dayanimli-gecici-recinesi | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`resinFeatureCtaText`) | TEXT | Ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`resinFeatureSpec1Label`) | TEXT | Eğilme mukavemeti (ISO 10477) | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`resinFeatureSpec1Value`) | TEXT | 144 MPa | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`resinFeatureSpec2Label`) | TEXT | Eğilme modülü (ISO 10477) | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`resinFeatureSpec2Value`) | TEXT | 5000 MPa | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`resinFeatureSpec3Label`) | TEXT | Uygulama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`resinFeatureSpec3Value`) | TEXT | Geçici + daimi kron-köprü | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`resinFeatureSpec4Label`) | TEXT | Uyum | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`resinFeatureSpec4Value`) | TEXT | Tüm DLP / LCD yazıcılar | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`resinDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`resinDetailLabel`) | TEXT | İKİ HAT, TEK STANDART | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`resinDetailTitlePrefix`) | TEXT | Bütçenize göre hat, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`resinDetailTitleEmphasis`) | TEXT | kaliteye göre değil. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`resinDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`resinDetailSideHtml`) | RICH_TEXT | İster premium ister ekonomik seçin; ikisi de tüm marka yazıcılarla çalışır ve teknik ekibimizin parametre desteğiyle gelir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`resinDetailCard1Title`) | TEXT | CRS — Biyouyumlu premium hat | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`resinDetailCard1DescriptionHtml`) | RICH_TEXT | CRSCAM üretimi, CE Class IIa sertifikalı; hassasiyet, dayanım ve biyouyumluluğun kritik olduğu işler için. Ağız içinde kalan tüm uygulamaların adresi. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`resinDetailCard2Title`) | TEXT | Mash — Ekonomik hat | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`resinDetailCard2DescriptionHtml`) | RICH_TEXT | Yüksek hacimli, ağız dışı ve deneme işleri için uygun maliyetli alternatif. Model, try-in ve ekonomik guide ihtiyaçlarını karşılar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`resinDetailCard3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`resinDetailCard3DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`resinDetailCard4Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`resinDetailCard4DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`resinDetailCalloutTitlePrefix`) | TEXT | Reçine tek başına yeterli değil: | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`resinDetailCalloutTitleEmphasis`) | TEXT | kürleme sonucu tamamlar. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`resinDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`resinDetailCalloutDescriptionHtml`) | RICH_TEXT | Doğru reçineyi seçseniz bile, yanlış post-curing hassasiyeti ve dayanımı bozar. Her CRS reçinesi bir kürleme protokolüyle gelir; akıllı kürleme cihazımız bu protokolü otomatik uygular. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`resinDetailCalloutButton1Text`) | TEXT | Kürlemenin önemini gör → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`resinDetailCalloutButton1Href`) | TEXT | /yikama-kurleme-cihazlari#neden-gerekli | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`resinDetailCalloutButton2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`resinDetailCalloutButton2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`resinFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`resinFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`resinFaqTitle`) | TEXT | Reçine seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`resinFaqSideHtml`) | RICH_TEXT | Diş hekimleri ve laboratuvarların en çok sorduğu sorular, net cevaplarla. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`resinFaq1Question`) | TEXT | Hangi dental reçineyi seçmeliyim? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`resinFaq1AnswerHtml`) | RICH_TEXT | Reçineyi uygulamaya göre seçmelisiniz: model için CRS Model ya da ekonomik Mash Study ; geçici/daimi kron-köprü için CRS Composite ; protez tabanı için CRS Denture ; diş eti için CRS Gingiva ; gece plağı için CRS Splint Hard/Soft ; şeffaf hizalayıcı için CRS Aligner ; cerrahi rehber için CRS Guide . Emin değilseniz yukarıdaki reçine seçiciyi kullanın veya ekibimize danışın. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`resinFaq2Question`) | TEXT | CE Class IIa biyouyumluluk ne anlama geliyor? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`resinFaq2AnswerHtml`) | RICH_TEXT | CE Class IIa, ağız içinde belirli bir süre temas eden tıbbi cihaz sınıfıdır; reçinenin hasta güvenliği ve biyouyumluluk standartlarını karşıladığını gösterir. CRS hattımız CE Class IIa sertifikalıdır ve MDR süreçleri üretici ortağımız CRSCAM tarafından yürütülür. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`resinFaq3Question`) | TEXT | Reçineleriniz başka marka 3D yazıcılarla çalışır mı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`resinFaq3AnswerHtml`) | RICH_TEXT | Evet. Tüm CRS ve Mash reçineleri tüm DLP ve LCD marka yazıcılarla uyumludur. Ayrıca teknik ekibimiz, reçineyi cihazınızın parametreleriyle birlikte kalibre ederek teslim eder — böylece marka fark etmeden aynı sonucu alırsınız. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`resinFaq4Question`) | TEXT | Model reçinesinde nelere dikkat etmeliyim? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`resinFaq4AnswerHtml`) | RICH_TEXT | İyi bir model reçinesinde boyutsal doğruluk , yüksek detay çözünürlüğü, belirgin kole hatları ve mat/lekesiz yüzey aranır. CRS Model kum ve gri renk seçenekleriyle optik tespit için yüksek görsel detay sunar. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`resinFaq5Question`) | TEXT | Reçine performansını kürleme etkiler mi? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`resinFaq5AnswerHtml`) | RICH_TEXT | Kesinlikle. Yetersiz kürleme kırılganlık ve monomer salınımı, fazla kürleme deformasyon yaratır. Doğru reçine bile yanlış kürlemeyle başarısız olur; bu yüzden her reçineyi bir kürleme protokolüyle veriyoruz. Detay için kürleme bölümüne bakabilirsiniz. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`resinFinalTitlePrefix`) | TEXT | İşinize uygun reçineyi | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`resinFinalTitleEmphasis`) | TEXT | birlikte seçelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`resinFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`resinFinalDescriptionHtml`) | RICH_TEXT | Hangi uygulama, hangi cihaz, hangi bütçe? Kısa bir görüşmeyle size en uygun CRS veya Mash reçinesini ve doğru parametreleri ücretsiz önerelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`resinFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`resinFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`resinFinalSecondaryButtonText`) | TEXT | Reçine seçiciye dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`resinFinalSecondaryButtonHref`) | TEXT | #secici | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`resinBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`resinTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`resinMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`resinPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`resinAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`resinLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`resinShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`resinShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`resinShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`resinShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`resinShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`resinShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`resinShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`resinShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`washCureEyebrowText`) | TEXT | ⚡ Baskı sonrası sonucu sabitleyin | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`washCureAnnouncementText`) | TEXT | Yıkama ve kürleme kritik; W1E ve C1E cihazlarını birlikte kullanın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`washCureAnnouncementCtaText`) | TEXT | Cihaza git → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`washCureAnnouncementHref`) | TEXT | #cihaz | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`washCureHeroTitlePrefix`) | TEXT | Baskı bittiğinde | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`washCureHeroTitleEmphasis`) | TEXT | sonuç daha bitmedi. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`washCureHeroTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`washCureHeroDescriptionHtml`) | RICH_TEXT | Yıkama ve post-curing, dental 3D baskıda yüzey temizliğini, mekanik dayanımı ve ölçü stabilitesini tamamlayan adımdır. Doğru cihaz; reçinenin protokolünü, ışık dalga boyunu ve laboratuvar iş akışını aynı çizgide tutar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`washCurePrimaryButtonText`) | TEXT | Yıkama & kürleme cihazını incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`washCurePrimaryButtonHref`) | TEXT | #cihaz | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`washCureSecondaryButtonText`) | TEXT | Akışı birlikte kuralım | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`washCureSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`washCureMetric1Value`) | TEXT | 3 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`washCureMetric1Emphasis`) | TEXT | cihaz | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`washCureMetric1Label`) | TEXT | yıkama ve kürleme adımları | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`washCureMetric2Value`) | TEXT | 360 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`washCureMetric2Emphasis`) | TEXT | ° | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`washCureMetric2Label`) | TEXT | C1E ışık sistemi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`washCureMetric3Value`) | TEXT | 24 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`washCureMetric3Emphasis`) | TEXT | LED | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`washCureMetric3Label`) | TEXT | C1E UV kürleme düzeni | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`washCureMetric4Value`) | TEXT | ₺ | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`washCureMetric4Emphasis`) | TEXT | 16,534.00 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`washCureMetric4Label`) | TEXT | W1E başlangıç fiyatı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`washCureSelectorNumber`) | TEXT | 01 | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`washCureSelectorLabel`) | TEXT | CİHAZLAR | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`washCureSelectorTitlePrefix`) | TEXT | Baskı sonrası için | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`washCureSelectorTitleEmphasis`) | TEXT | iki tamamlayıcı adım. | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`washCureSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`washCureSelectorSideHtml`) | RICH_TEXT | Mash W1E baskı sonrası yıkama adımını, Mash C1E ise UV kürleme adımını kontrol altına alır. Birlikte kullanıldığında reçine baskı sonrası temiz yüzey, dengeli kürleme ve tekrar edilebilir sonuç için net bir akış oluşturur. | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`washCureSelectorCardCtaText`) | TEXT | İncele | 🛍️ Kart Bölümü Başlığı | Hayır | — |
| 📝 Özellik Bölüm Numarası (`washCureFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`washCureFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`washCureFeatureEyebrow`) | TEXT | MASH W1E + MASH C1E | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`washCureFeatureTitlePrefix`) | TEXT | Yıkama ve kürleme | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`washCureFeatureTitleEmphasis`) | TEXT | ayrı ayrı kontrol edilir. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`washCureFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`washCureFeatureDescriptionHtml`) | RICH_TEXT | W1E yıkama adımında yüzeyi hazırlar; C1E, 24 LED'li 360° ışık sistemiyle UV post-curing sürecini tamamlar. Böylece baskı sonrası akış iki net cihazla yönetilir. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`washCureFeatureHref`) | TEXT | /mash-c1e-uv-kurleme-cihazi | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`washCureFeatureCtaText`) | TEXT | C1E detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`washCureFeatureSpec1Label`) | TEXT | Yıkama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`washCureFeatureSpec1Value`) | TEXT | Mash W1E | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`washCureFeatureSpec2Label`) | TEXT | Kürleme | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`washCureFeatureSpec2Value`) | TEXT | Mash C1E | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`washCureFeatureSpec3Label`) | TEXT | C1E ışık sistemi | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`washCureFeatureSpec3Value`) | TEXT | 360° / 24 LED | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`washCureFeatureSpec4Label`) | TEXT | C1E spektrum | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`washCureFeatureSpec4Value`) | TEXT | 360-530 nm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`washCureDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`washCureDetailLabel`) | TEXT | NEDEN GEREKLİ | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`washCureDetailTitlePrefix`) | TEXT | Kürleme, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`washCureDetailTitleEmphasis`) | TEXT | sonucu tamamlar. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`washCureDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`washCureDetailSideHtml`) | RICH_TEXT | Yazıcı ve reçine doğru olsa bile baskı sonrası işlem eksikse yüzey, dayanım ve ölçü stabilitesi beklendiği gibi oluşmaz. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`washCureDetailCard1Title`) | TEXT | Yüzey temizliği | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`washCureDetailCard1DescriptionHtml`) | RICH_TEXT | Yıkama adımı baskı üzerindeki fazla reçineyi temizler; sonraki kürleme için yüzeyi hazırlar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`washCureDetailCard2Title`) | TEXT | Mekanik değerler | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`washCureDetailCard2DescriptionHtml`) | RICH_TEXT | Post-curing, reçinenin hedef dayanımına yaklaşması için gereken tamamlayıcı adımdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`washCureDetailCard3Title`) | TEXT | Protokol uyumu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`washCureDetailCard3DescriptionHtml`) | RICH_TEXT | Cihaz seçimi reçine protokolüyle birlikte düşünülmeli; süre ve ışık uyumu sonucu doğrudan etkiler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`washCureDetailCard4Title`) | TEXT | Teknik destek | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`washCureDetailCard4DescriptionHtml`) | RICH_TEXT | 3mash ekibi cihaz, reçine ve yazıcı parametrelerini birlikte değerlendirerek doğru akışı kurmanıza yardımcı olur. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`washCureDetailCalloutTitlePrefix`) | TEXT | Yazıcı + reçine + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`washCureDetailCalloutTitleEmphasis`) | TEXT | kürleme. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`washCureDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`washCureDetailCalloutDescriptionHtml`) | RICH_TEXT | Dental baskıda güvenilir sonuç üç adımın birlikte çalışmasıyla çıkar. Yıkama/kürleme cihazı, bu zincirin son halkasını kontrol altına alır. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`washCureDetailCalloutButton1Text`) | TEXT | Uyumlu reçineleri gör → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`washCureDetailCalloutButton1Href`) | TEXT | /dental-3d-yazici-recineleri | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`washCureDetailCalloutButton2Text`) | TEXT | 3D yazıcılara git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`washCureDetailCalloutButton2Href`) | TEXT | /3d-yazicilar | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`washCureFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`washCureFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`washCureFaqTitle`) | TEXT | Yıkama ve kürleme seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`washCureFaqSideHtml`) | RICH_TEXT | Baskı sonrası işlemin dental sonuç üzerindeki etkisini net cevaplarla özetledik. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`washCureFaq1Question`) | TEXT | Yıkama kürleme cihazı neden gerekli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`washCureFaq1AnswerHtml`) | RICH_TEXT | Baskıdan çıkan parçanın yüzeyindeki fazla reçinenin temizlenmesi ve materyalin hedef mekanik değerlere ulaşması için yıkama ve post-curing adımı gerekir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`washCureFaq2Question`) | TEXT | Bu kategoride hangi ürün var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`washCureFaq2AnswerHtml`) | RICH_TEXT | Bu kategoride Mash W1E Ultrasonik Yıkama Cihazı, Mash C1E UV Kürleme Cihazı ve Creality Wash&Cure UW-03 birlikte konumlanır. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`washCureFaq3Question`) | TEXT | C1E hangi ışık sistemiyle çalışır? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`washCureFaq3AnswerHtml`) | RICH_TEXT | Mash C1E, 24 LED'li 360° ışık sistemi ve 360-530 nm geniş spektrum desteğiyle dental reçine baskıların UV post-curing adımını destekler. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`washCureFaq4Question`) | TEXT | Yazıcı ve reçine doğruysa kürleme yine de önemli mi? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`washCureFaq4AnswerHtml`) | RICH_TEXT | Evet. Reçine ve yazıcı doğru seçilse bile yanlış veya eksik post-curing dayanım, yüzey kalitesi ve stabiliteyi etkileyebilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`washCureFaq5Question`) | TEXT | Hangi protokolü kullanmalıyım? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`washCureFaq5AnswerHtml`) | RICH_TEXT | Kullanılan reçineye ve baskı tipine göre süre/ışık protokolü değişebilir. Emin değilseniz cihaz, reçine ve yazıcı bilginizle ekibimize danışın. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`washCureFinalTitlePrefix`) | TEXT | Baskı sonrası akışı | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`washCureFinalTitleEmphasis`) | TEXT | birlikte kuralım. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`washCureFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`washCureFinalDescriptionHtml`) | RICH_TEXT | Hangi yazıcı, hangi reçine, hangi parça tipi? Kısa bir görüşmeyle yıkama ve kürleme adımını iş akışınıza göre birlikte netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`washCureFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`washCureFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`washCureFinalSecondaryButtonText`) | TEXT | Cihazlara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`washCureFinalSecondaryButtonHref`) | TEXT | #cihaz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`washCureBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`washCureTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`washCureMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`washCurePanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`washCureAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`washCureLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`washCureShowAnnouncement`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Kategori Girişini Göster (`washCureShowHero`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Metrikleri Göster (`washCureShowMetrics`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`washCureShowSelector`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`washCureShowFeature`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Seri ve Detayları Göster (`washCureShowDetail`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`washCureShowFaq`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`washCureShowFinalCta`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 📝 Duyuru Vurgu Metni (`washingEyebrowText`) | TEXT | ⚡ Baskı sonrası temizlikte kayıp yaşamayın | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`washingAnnouncementText`) | TEXT | Reçine baskı sonrası yüzey temizliği için W1E Ultrasonik Yıkama Cihazı ile hassas ve hızlı arındırma. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`washingAnnouncementCtaText`) | TEXT | Yıkama cihazını incele → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`washingAnnouncementHref`) | TEXT | #cihaz | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`washingHeroTitlePrefix`) | TEXT | Baskı sonrası | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`washingHeroTitleEmphasis`) | TEXT | kusursuz yüzey, | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`washingHeroTitleSuffix`) | TEXT | yıkamayla başlar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`washingHeroDescriptionHtml`) | RICH_TEXT | Dental 3D baskıdan çıkan parçaların yüzeyinde kalan fazla sıvı reçineyi ultrasonik titreşimlerle mikro detaylardan uzaklaştırır. Kürleme öncesi homojen, temiz ve yapışkanlıktan arınmış yüzey kalitesi sağlar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`washingPrimaryButtonText`) | TEXT | Yıkama cihazını incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`washingPrimaryButtonHref`) | TEXT | #cihaz | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`washingSecondaryButtonText`) | TEXT | İş akışına danış | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`washingSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`washingMetric1Value`) | TEXT | Ultrasonik | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`washingMetric1Emphasis`) | TEXT | yıkama | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`washingMetric1Label`) | TEXT | mikro boşluklarda derinlemesine temizlik | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`washingMetric2Value`) | TEXT | 16.453 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`washingMetric2Emphasis`) | TEXT | TRY | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`washingMetric2Label`) | TEXT | W1E başlangıç fiyatı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`washingMetric3Value`) | TEXT | Hassas | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`washingMetric3Emphasis`) | TEXT | arındırma | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`washingMetric3Label`) | TEXT | parça geometrisine zarar vermez | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`washingMetric4Value`) | TEXT | Kürleme | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`washingMetric4Emphasis`) | TEXT | öncesi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`washingMetric4Label`) | TEXT | homojen post-curing için hazır yüzey | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`washingSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`washingSelectorLabel`) | TEXT | YIKAMA CİHAZLARI | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`washingSelectorTitlePrefix`) | TEXT | Baskı sonrası için | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`washingSelectorTitleEmphasis`) | TEXT | ultrasonik temizleme gücü. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`washingSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`washingSelectorSideHtml`) | RICH_TEXT | Mash W1E , baskı sonrası yıkama adımını kontrol altına alarak yüzeydeki fazla reçineyi hızlı ve güvenli biçimde temizler. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`washingSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`washingFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`washingFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`washingFeatureEyebrow`) | TEXT | MASH W1E · ULTRASONİK YIKAMA | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`washingFeatureTitlePrefix`) | TEXT | Kürleme öncesi, | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`washingFeatureTitleEmphasis`) | TEXT | mikron seviyesinde temizlik. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`washingFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`washingFeatureDescriptionHtml`) | RICH_TEXT | Parça üzerindeki kürlenmemiş reçine kalıntıları giderilmezse, kürleme anında marjin detayları kaybolur ve boyutsal sapmalar oluşur. W1E ultrasonik kavitasyon dalgalarıyla en dar aralıklara kadar homojen temizlik sağlar. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`washingFeatureHref`) | TEXT | /mash-w1e-ultrasonik-yikama-cihazi | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`washingFeatureCtaText`) | TEXT | W1E detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`washingFeatureSpec1Label`) | TEXT | İşlem | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`washingFeatureSpec1Value`) | TEXT | Ultrasonik yıkama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`washingFeatureSpec2Label`) | TEXT | Akış | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`washingFeatureSpec2Value`) | TEXT | Baskı sonrası temizlik | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`washingFeatureSpec3Label`) | TEXT | Temizlik | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`washingFeatureSpec3Value`) | TEXT | Mikron hassasiyetinde | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`washingFeatureSpec4Label`) | TEXT | Hazırlık | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`washingFeatureSpec4Value`) | TEXT | Post-curing öncesi | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`washingDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`washingDetailLabel`) | TEXT | NEDEN YIKAMA KRİTİK | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`washingDetailTitlePrefix`) | TEXT | Yüzey temizliği, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`washingDetailTitleEmphasis`) | TEXT | sonucun temelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`washingDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`washingDetailSideHtml`) | RICH_TEXT | Doğru yıkanmamış bir parça, en iyi kürleme cihazına girse bile optik ve mekanik kalitesini kaybeder. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`washingDetailCard1Title`) | TEXT | Marjin netliği | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`washingDetailCard1DescriptionHtml`) | RICH_TEXT | Fazla reçine marjin basamaklarında birikmez; kron ve köprülerin ağıza tam oturmasını güvenceye alır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`washingDetailCard2Title`) | TEXT | Kürleme verimi | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`washingDetailCard2DescriptionHtml`) | RICH_TEXT | Kürlenmemiş sıvı film tabakasını uzaklaştırarak UV ışığının doğrudan parça yüzeyine nüfuz etmesini sağlar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`washingDetailCard3Title`) | TEXT | Yüzey pürüzsüzlüğü | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`washingDetailCard3DescriptionHtml`) | RICH_TEXT | Yapışkanlık hissini ortadan kaldırır, pürüzsüz ve temiz dental restorasyon yüzeyleri oluşturur. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`washingDetailCard4Title`) | TEXT | Süre tasarrufu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`washingDetailCard4DescriptionHtml`) | RICH_TEXT | Manuel fırçalama veya uzun süreli solvent temasını azaltır, tekrarlanabilir iş akışı sunar. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`washingDetailCalloutTitlePrefix`) | TEXT | Yıkama tamamlandıktan sonra: | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`washingDetailCalloutTitleEmphasis`) | TEXT | akıllı kürleme adımı. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`washingDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`washingDetailCalloutDescriptionHtml`) | RICH_TEXT | Temizlenen parçalar hedef mekanik dayanım ve biyouyumluluk değerine ulaşmak için UV kürleme cihazına aktarılır. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`washingDetailCalloutButton1Text`) | TEXT | Kürleme cihazlarını gör → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`washingDetailCalloutButton1Href`) | TEXT | /kurleme-cihazlari | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`washingDetailCalloutButton2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`washingDetailCalloutButton2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`washingFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`washingFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`washingFaqTitle`) | TEXT | Yıkama cihazları hakkında merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`washingFaqSideHtml`) | RICH_TEXT | Ultrasonik yıkamanın dental iş akışındaki önemini net cevaplarla yanıtladık. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`washingFaq1Question`) | TEXT | Dental 3D baskıda ultrasonik yıkama neden gereklidir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`washingFaq1AnswerHtml`) | RICH_TEXT | Ultrasonik kavitasyon, manuel temizliğin ulaşamadığı ince kole hatları, interdental boşluklar ve kanal içlerindeki sıvı reçineyi parçaya zarar vermeden tamamen söker. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`washingFaq2Question`) | TEXT | W1E ile hangi yıkama sıvıları kullanılabilir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`washingFaq2AnswerHtml`) | RICH_TEXT | İzopropil Alkol (IPA), etanol veya özel dental reçine temizleme solüsyonlarıyla tam uyumlu olarak kullanılabilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`washingFaq3Question`) | TEXT | Yıkama süresi ne kadar olmalıdır? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`washingFaq3AnswerHtml`) | RICH_TEXT | Kullanılan reçine tipine göre genellikle 2 ila 5 dakika arası ultrasonik banyo yüzey temizliği için yeterlidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`washingFaq4Question`) | TEXT | Yıkamadan sonra doğrudan kürlemeye geçilebilir mi? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`washingFaq4AnswerHtml`) | RICH_TEXT | Yıkama sonrası parçanın yüzeyindeki solventin tamamen buharlaşması ve parçanın kuruması beklendikten sonra kürleme adımına geçilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`washingFaq5Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`washingFaq5AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`washingFinalTitlePrefix`) | TEXT | Laboratuvarınız için doğru yıkama akışını | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`washingFinalTitleEmphasis`) | TEXT | birlikte kuralım. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`washingFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`washingFinalDescriptionHtml`) | RICH_TEXT | Hangi reçineleri kullanıyorsunuz, günlük baskı hacminiz ne kadar? İhtiyacınıza en uygun yıkama protokolünü ücretsiz belirleyelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`washingFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`washingFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`washingFinalSecondaryButtonText`) | TEXT | Cihazlara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`washingFinalSecondaryButtonHref`) | TEXT | #cihaz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`washingBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`washingTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`washingMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`washingPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`washingAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`washingLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`washingShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`washingShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`washingShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`washingShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`washingShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`washingShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`washingShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`washingShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`curingEyebrowText`) | TEXT | ⚡ Mekanik dayanım ve biyouyumluluğu tamamlayın | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`curingAnnouncementText`) | TEXT | Mash C1E 24 LED 360° homojen ışık sistemi ile reçinenizin hedef klinik değerlerine ulaşmasını sağlayın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`curingAnnouncementCtaText`) | TEXT | Kürleme cihazını incele → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`curingAnnouncementHref`) | TEXT | #cihaz | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`curingHeroTitlePrefix`) | TEXT | Reçinenin gerçek gücü | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`curingHeroTitleEmphasis`) | TEXT | doğru kürlemeyle | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`curingHeroTitleSuffix`) | TEXT | ortaya çıkar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`curingHeroDescriptionHtml`) | RICH_TEXT | Dental 3D baskıda polimerizasyonun tamamlanması, biyouyumluluk sertifikasyonu ve 140+ MPa bükülme mukavemeti ancak kontrollü UV post-curing ile elde edilir. 24 LED'li 360° ışık düzeni ve 360-530 nm geniş spektrumuyla Mash C1E, parçayı her açıdan eşit sertleştirir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`curingPrimaryButtonText`) | TEXT | Kürleme cihazını incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`curingPrimaryButtonHref`) | TEXT | #cihaz | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`curingSecondaryButtonText`) | TEXT | Kürleme protokolü danış | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`curingSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`curingMetric1Value`) | TEXT | 360 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`curingMetric1Emphasis`) | TEXT | ° | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`curingMetric1Label`) | TEXT | C1E homojen ışık sistemi · gölgesiz | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`curingMetric2Value`) | TEXT | 24 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`curingMetric2Emphasis`) | TEXT | LED | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`curingMetric2Label`) | TEXT | yüksek güçlü UV kürleme matrisi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`curingMetric3Value`) | TEXT | 360-530 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`curingMetric3Emphasis`) | TEXT | nm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`curingMetric3Label`) | TEXT | tüm dental reçinelerle uyumlu geniş spektrum | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`curingMetric4Value`) | TEXT | 76.782 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`curingMetric4Emphasis`) | TEXT | TRY | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`curingMetric4Label`) | TEXT | C1E profesyonel post-curing fiyatı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`curingSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`curingSelectorLabel`) | TEXT | KÜRLEME CİHAZLARI | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`curingSelectorTitlePrefix`) | TEXT | Dental reçineler için | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`curingSelectorTitleEmphasis`) | TEXT | ileri UV polimerizasyon. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`curingSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`curingSelectorSideHtml`) | RICH_TEXT | Mash C1E , 24 LED'li 360° ışık sistemi ve 360-530 nm spektrum desteğiyle dental restorasyonların mekanik dayanımını, şeffaflığını ve biyouyumluluğunu zirveye taşır. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`curingSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`curingFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`curingFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`curingFeatureEyebrow`) | TEXT | MASH C1E · 360° UV POST-CURING | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`curingFeatureTitlePrefix`) | TEXT | 24 LED ile | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`curingFeatureTitleEmphasis`) | TEXT | gölgesiz ve homojen | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`curingFeatureTitleSuffix`) | TEXT | polimerizasyon. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`curingFeatureDescriptionHtml`) | RICH_TEXT | Geleneksel kürleme kutularında tabanın altı veya iç kaviteler eksik kürlenir. C1E, 360 derece yerleştirilmiş 24 adet yüksek çıkışlı LED ile tüm yüzeyleri eşit sürede kürler; artık monomer salınımını sıfıra indirir. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`curingFeatureHref`) | TEXT | /mash-c1e-uv-kurleme-cihazi | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`curingFeatureCtaText`) | TEXT | C1E ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`curingFeatureSpec1Label`) | TEXT | LED Sayısı | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`curingFeatureSpec1Value`) | TEXT | 24 Adet Yüksek Güçlü | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`curingFeatureSpec2Label`) | TEXT | Işık Açısı | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`curingFeatureSpec2Value`) | TEXT | 360° Çepeçevre | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`curingFeatureSpec3Label`) | TEXT | Dalga Boyu | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`curingFeatureSpec3Value`) | TEXT | 360 - 530 nm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`curingFeatureSpec4Label`) | TEXT | Sonuç | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`curingFeatureSpec4Value`) | TEXT | Maksimum Bükülme Dayanımı | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`curingDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`curingDetailLabel`) | TEXT | NEDEN KÜRLEME KRİTİK | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`curingDetailTitlePrefix`) | TEXT | Doğru kürlenmeyen parça, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`curingDetailTitleEmphasis`) | TEXT | ağızda kırıma uğrar. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`curingDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`curingDetailSideHtml`) | RICH_TEXT | Baskıdan çıkan parça henüz %70-80 polimerizedir. Son %20-30'luk mukavemet ve stabilite farkını doğru post-curing tamamlar. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`curingDetailCard1Title`) | TEXT | Maksimum mukavemet | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`curingDetailCard1DescriptionHtml`) | RICH_TEXT | CRS Composite gibi reçinelerde 144 MPa bükülme direncine ulaşmak için doğru süre ve UV dozu şarttır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`curingDetailCard2Title`) | TEXT | Biyouyumluluk güvencesi | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`curingDetailCard2DescriptionHtml`) | RICH_TEXT | Ağız içinde kalacak protez ve splintlerde artık monomer kalıntısını yok ederek hasta güvenliği sağlar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`curingDetailCard3Title`) | TEXT | Boyutsal kararlılık | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`curingDetailCard3DescriptionHtml`) | RICH_TEXT | Homojen kürleme, parçanın bir tarafının fazla çekip deforme olmasını önler; oklüzyon uyumunu korur. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`curingDetailCard4Title`) | TEXT | Optik translüsentlik | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`curingDetailCard4DescriptionHtml`) | RICH_TEXT | Doğru dalga boyunda kürlenen restorasyonlar sararma yapmaz, doğal diş translüsentliğini korur. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`curingDetailCalloutTitlePrefix`) | TEXT | Uyumlu reçineler ve parametreler: | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`curingDetailCalloutTitleEmphasis`) | TEXT | üretim uzmanlığı. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`curingDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`curingDetailCalloutDescriptionHtml`) | RICH_TEXT | Her reçinenin kürlenme süresi farklıdır. 3mash ekibi olarak sattığımız tüm reçinelerin C1E kürleme parametrelerini kalibre edilmiş olarak teslim ediyoruz. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`curingDetailCalloutButton1Text`) | TEXT | Dental reçineleri incele → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`curingDetailCalloutButton1Href`) | TEXT | /dental-3d-yazici-recineleri | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`curingDetailCalloutButton2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`curingDetailCalloutButton2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`curingFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`curingFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`curingFaqTitle`) | TEXT | Kürleme cihazları hakkında merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`curingFaqSideHtml`) | RICH_TEXT | Dental post-curing adımının klinik başarısına dair merak edilen cevaplar. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`curingFaq1Question`) | TEXT | UV kürleme cihazı neden bu kadar önemlidir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`curingFaq1AnswerHtml`) | RICH_TEXT | Reçine 3D yazıcıdan çıkan modeller tam mekanik dayanımına henüz ulaşmamıştır. UV post-curing işlemi reçine zincirlerini tamamen bağlayarak sertlik, biyouyumluluk ve elastikiyet değerlerini tamamlar. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`curingFaq2Question`) | TEXT | Mash C1E hangi dalga boylarını destekler? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`curingFaq2AnswerHtml`) | RICH_TEXT | Mash C1E, 360 nm ile 530 nm arasındaki geniş spektrumu destekler; piyasadaki tüm DLP, SLA ve LCD dental reçineleriyle tam uyumludur. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`curingFaq3Question`) | TEXT | Gölgesiz 360° kürleme neden gereklidir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`curingFaq3AnswerHtml`) | RICH_TEXT | Işık tek bir yönden gelirse parçanın altı veya iç kısımları yumuşak kalır, bu da ağızda erken kırılmalara yol açar. 360° dizilim her yüzeyin aynı anda tam sertleşmesini sağlar. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`curingFaq4Question`) | TEXT | Kürleme süresi nasıl belirlenir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`curingFaq4AnswerHtml`) | RICH_TEXT | Kullanılan reçinenin üretici protokolüne göre genellikle 5 ila 20 dakika arasında değişir. C1E üzerinde süre hassas şekilde ayarlanabilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`curingFaq5Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`curingFaq5AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`curingFinalTitlePrefix`) | TEXT | Kürleme sürecinizi | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`curingFinalTitleEmphasis`) | TEXT | standarda bağlayalım. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`curingFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`curingFinalDescriptionHtml`) | RICH_TEXT | Hangi reçineleri kullanıyorsunuz, hangi endikasyonları basıyorsunuz? C1E akıllı kürleme cihazı ile kliniğinizin/laboratuvarınızın kalite standardını sabitleyelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`curingFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`curingFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`curingFinalSecondaryButtonText`) | TEXT | Cihazlara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`curingFinalSecondaryButtonHref`) | TEXT | #cihaz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`curingBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`curingTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`curingMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`curingPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`curingAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`curingLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`curingShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`curingShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`curingShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`curingShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`curingShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`curingShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`curingShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`curingShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`zirconEyebrowText`) | TEXT | ⚡ Zirkon seçimini vaka belirler | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`zirconAnnouncementText`) | TEXT | Renk, kalınlık, translüsentlik ve sinterleme akışını birlikte kontrol ederek doğru ArgenZ zirkonu seçin. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`zirconAnnouncementCtaText`) | TEXT | Zirkonları karşılaştır → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`zirconAnnouncementHref`) | TEXT | #zirkonlar | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`zirconHeroTitlePrefix`) | TEXT | Doğru zirkon, | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`zirconHeroTitleEmphasis`) | TEXT | vakanın içinde | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`zirconHeroTitleSuffix`) | TEXT | seçilir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`zirconHeroDescriptionHtml`) | RICH_TEXT | ArgenZ zirkon bloklarda sonuç; yalnızca diskin kendisinden değil, endikasyon, renk, kalınlık, nesting ve sinterleme protokolünün birlikte doğru kurulmasından gelir. Estetik multilayer geçişten yüksek dayanım isteyen restorasyonlara kadar üç aktif ArgenZ seçeneği aynı kategoride listelenir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`zirconPrimaryButtonText`) | TEXT | Zirkonları incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`zirconPrimaryButtonHref`) | TEXT | #zirkonlar | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`zirconSecondaryButtonText`) | TEXT | Vaka uyumunu sor | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`zirconSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`zirconMetric1Value`) | TEXT | 3 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`zirconMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`zirconMetric1Label`) | TEXT | farklı estetik ve dayanım seçenekleri | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`zirconMetric2Value`) | TEXT | 850 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`zirconMetric2Emphasis`) | TEXT | MPa | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`zirconMetric2Label`) | TEXT | ST Multilayer estetik zirkon dayanımı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`zirconMetric3Value`) | TEXT | 1250 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`zirconMetric3Emphasis`) | TEXT | MPa | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`zirconMetric3Label`) | TEXT | HT+ ve HT+ Multilayer yüksek dayanım sınıfı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`zirconMetric4Value`) | TEXT | 7.337 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`zirconMetric4Emphasis`) | TEXT | TRY | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`zirconMetric4Label`) | TEXT | başlangıç fiyat aralığı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`zirconSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`zirconSelectorLabel`) | TEXT | ZİRKON SEÇİCİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`zirconSelectorTitlePrefix`) | TEXT | Estetik, dayanım, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`zirconSelectorTitleEmphasis`) | TEXT | gradient. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`zirconSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`zirconSelectorSideHtml`) | RICH_TEXT | Estetik, dayanım ve indikasyon ihtiyacına göre HT+, ST Multilayer ve multilayer seçeneklerini birlikte değerlendirin. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`zirconSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`zirconFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`zirconFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`zirconFeatureEyebrow`) | TEXT | ARGENZ HT+ · 1250 MPa · 45% | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`zirconFeatureTitlePrefix`) | TEXT | Dayanım ve estetik | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`zirconFeatureTitleEmphasis`) | TEXT | aynı diskte. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`zirconFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`zirconFeatureDescriptionHtml`) | RICH_TEXT | HT+ zirkonya, dayanım korunurken estetik ışık geçirgenliği hedefleyen restorasyonlar için konumlandırılır. Full contour ve altyapı işlerinde CAM shrinkage değeri, milling stratejisi ve sinterleme protokolü birlikte kontrol edilmelidir. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`zirconFeatureHref`) | TEXT | /argenz-ht-plus-zirkon-blok | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`zirconFeatureCtaText`) | TEXT | HT+ ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`zirconFeatureSpec1Label`) | TEXT | Dayanım | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`zirconFeatureSpec1Value`) | TEXT | 1250 MPa | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`zirconFeatureSpec2Label`) | TEXT | Translüsentlik | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`zirconFeatureSpec2Value`) | TEXT | 45% | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`zirconFeatureSpec3Label`) | TEXT | Marka | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`zirconFeatureSpec3Value`) | TEXT | Argen | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`zirconFeatureSpec4Label`) | TEXT | Kategori | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`zirconFeatureSpec4Value`) | TEXT | Zirkon blok | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`zirconDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`zirconDetailLabel`) | TEXT | SEÇİM MANTIĞI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`zirconDetailTitlePrefix`) | TEXT | Zirkon blok, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`zirconDetailTitleEmphasis`) | TEXT | tek başına karar değildir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`zirconDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`zirconDetailSideHtml`) | RICH_TEXT | Aynı materyal farklı vaka, renk ve kalınlıkta farklı sonuç verir. Bu yüzden zirkon seçimi frezeleme ve sinterleme akışıyla birlikte düşünülmelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`zirconDetailCard1Title`) | TEXT | Endikasyon | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`zirconDetailCard1DescriptionHtml`) | RICH_TEXT | Tek kron, köprü, altyapı veya full contour ihtiyacı materyal tipini belirler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`zirconDetailCard2Title`) | TEXT | Renk ve kalınlık | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`zirconDetailCard2DescriptionHtml`) | RICH_TEXT | Shade seçimi, disk kalınlığı ve multilayer konumlandırma estetik sonucu doğrudan etkiler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`zirconDetailCard3Title`) | TEXT | CAM ve shrinkage | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`zirconDetailCard3DescriptionHtml`) | RICH_TEXT | Disk üzerindeki shrinkage değeri CAM yazılıma doğru girilmeli; nesting stratejisi vaka tipine göre kurulmalıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`zirconDetailCard4Title`) | TEXT | Sinterleme | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`zirconDetailCard4DescriptionHtml`) | RICH_TEXT | Fırın çevrimi, sıcaklık ve finishing/glaze adımları zirkon sonucunu tamamlar. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`zirconDetailCalloutTitlePrefix`) | TEXT | Blok + freze + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`zirconDetailCalloutTitleEmphasis`) | TEXT | fırın. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`zirconDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`zirconDetailCalloutDescriptionHtml`) | RICH_TEXT | Zirkon restorasyonun güvenilirliği, doğru disk seçimi kadar freze ve sinterleme adımlarının birlikte yönetilmesine bağlıdır. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`zirconDetailCalloutButton1Text`) | TEXT | Dental fırınlara git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`zirconDetailCalloutButton1Href`) | TEXT | /dental-firinlar | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`zirconDetailCalloutButton2Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`zirconDetailCalloutButton2Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`zirconFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`zirconFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`zirconFaqTitle`) | TEXT | Zirkon blok seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`zirconFaqSideHtml`) | RICH_TEXT | Renk, kalınlık, materyal tipi ve sinterleme protokolü için temel karar noktaları. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`zirconFaq1Question`) | TEXT | Bu kategoride hangi ürünler var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`zirconFaq1AnswerHtml`) | RICH_TEXT | ArgenZ HT+, ArgenZ ST Multilayer ve ArgenZ HT+ Multilayer seçenekleri farklı estetik ve dayanım ihtiyaçlarına göre konumlanır. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`zirconFaq2Question`) | TEXT | ST Multilayer ne zaman seçilir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`zirconFaq2AnswerHtml`) | RICH_TEXT | Yüksek estetik, doğal dentin geçişi ve 50% translüsentlik ihtiyacında ST Multilayer uygun seçenektir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`zirconFaq3Question`) | TEXT | HT+ ne zaman seçilir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`zirconFaq3AnswerHtml`) | RICH_TEXT | Dayanım, full contour veya altyapı restorasyonları ön plandaysa HT+ materyal sınıfı tercih edilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`zirconFaq4Question`) | TEXT | HT+ Multilayer farkı nedir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`zirconFaq4AnswerHtml`) | RICH_TEXT | HT+ dayanımını doğal shade gradient ve multilayer geçişle birleştirir; nesting pozisyonu renk sonucunu etkiler. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`zirconFaq5Question`) | TEXT | Satın almadan önce ne kontrol edilmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`zirconFaq5AnswerHtml`) | RICH_TEXT | Endikasyon, renk, kalınlık, CAM shrinkage değeri, freze stratejisi ve sinterleme protokolü birlikte kontrol edilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`zirconFinalTitlePrefix`) | TEXT | Doğru zirkonu | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`zirconFinalTitleEmphasis`) | TEXT | birlikte seçelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`zirconFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`zirconFinalDescriptionHtml`) | RICH_TEXT | Vaka tipi, renk, kalınlık ve fırın akışınızı kısa bir görüşmeyle netleştirip doğru ArgenZ zirkon bloğu birlikte belirleyelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`zirconFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`zirconFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`zirconFinalSecondaryButtonText`) | TEXT | Zirkonlara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`zirconFinalSecondaryButtonHref`) | TEXT | #zirkonlar | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`zirconBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`zirconTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`zirconMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`zirconPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`zirconAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`zirconLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`zirconShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`zirconShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`zirconShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`zirconShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`zirconShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`zirconShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`zirconShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`zirconShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`furnaceEyebrowText`) | TEXT | ⚡ Fırın seçimi iş akışına göre yapılır | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`furnaceAnnouncementText`) | TEXT | Sinterleme, press ve porselen akışını laboratuvar hacminize göre karşılaştırın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`furnaceAnnouncementCtaText`) | TEXT | Fırınları karşılaştır → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`furnaceAnnouncementHref`) | TEXT | #firinlar | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`furnaceHeroTitlePrefix`) | TEXT | Restorasyon kalitesi, | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`furnaceHeroTitleEmphasis`) | TEXT | kontrollü ısıyla | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`furnaceHeroTitleSuffix`) | TEXT | tamamlanır. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`furnaceHeroDescriptionHtml`) | RICH_TEXT | Zirkon sinterleme, press seramik ve porselen pişiriminde sonuç; fırın sıcaklığı, çevrim kontrolü ve laboratuvar akışının birlikte kurulmasıyla stabil hale gelir. Naberthem hattı, hızlı sinterleme ihtiyacından vakumlu porselen pişirimine kadar dental üretimin kritik ısı adımlarını kapsar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`furnacePrimaryButtonText`) | TEXT | Fırınları incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`furnacePrimaryButtonHref`) | TEXT | #firinlar | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`furnaceSecondaryButtonText`) | TEXT | Akışı birlikte planlayalım | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`furnaceSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`furnaceMetric1Value`) | TEXT | 4 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`furnaceMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`furnaceMetric1Label`) | TEXT | sinterleme ve porselen pişirim seçenekleri | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`furnaceMetric2Value`) | TEXT | 1650 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`furnaceMetric2Emphasis`) | TEXT | °C | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`furnaceMetric2Label`) | TEXT | LHT 02/17 LB Speed maksimum sıcaklık sınıfı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`furnaceMetric3Value`) | TEXT | 1600 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`furnaceMetric3Emphasis`) | TEXT | °C | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`furnaceMetric3Label`) | TEXT | LHT 01/16 Turbo Fire hızlı sinterleme akışı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`furnaceMetric4Value`) | TEXT | Press | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`furnaceMetric4Emphasis`) | TEXT | / Porselen | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`furnaceMetric4Label`) | TEXT | VL 01/12 LB hattında iki farklı laboratuvar işi | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`furnaceSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`furnaceSelectorLabel`) | TEXT | FIRIN SEÇİCİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`furnaceSelectorTitlePrefix`) | TEXT | Sinterleme, press, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`furnaceSelectorTitleEmphasis`) | TEXT | porselen. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`furnaceSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`furnaceSelectorSideHtml`) | RICH_TEXT | Dental fırın seçimi tek bir teknik değerden ibaret değildir. Zirkon tipi, restorasyon hacmi, press/porselen ihtiyacı ve çevrim süresi birlikte düşünülmelidir. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`furnaceSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`furnaceFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`furnaceFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`furnaceFeatureEyebrow`) | TEXT | NABERTHEM LHT 02/17 LB SPEED | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`furnaceFeatureTitlePrefix`) | TEXT | Zirkon sinterleme için | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`furnaceFeatureTitleEmphasis`) | TEXT | yüksek sıcaklık | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`furnaceFeatureTitleSuffix`) | TEXT | kontrolü. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`furnaceFeatureDescriptionHtml`) | RICH_TEXT | LHT 02/17 LB Speed, 1650 °C maksimum sıcaklık sınıfı ve geniş fırın odasıyla zirkonya sinterleme akışında öne çıkar. Elektrikli kaldırma masası ve kontrollü çevrim yapısı, laboratuvar üretimini tekrarlanabilir hale getirmeye yardımcı olur. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`furnaceFeatureHref`) | TEXT | /naberthem-lht-02-17-lb-speed | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`furnaceFeatureCtaText`) | TEXT | Ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`furnaceFeatureSpec1Label`) | TEXT | Maksimum sıcaklık | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`furnaceFeatureSpec1Value`) | TEXT | 1650 °C | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`furnaceFeatureSpec2Label`) | TEXT | Uygulama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`furnaceFeatureSpec2Value`) | TEXT | Zirkonya sinterleme | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`furnaceFeatureSpec3Label`) | TEXT | Yapı | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`furnaceFeatureSpec3Value`) | TEXT | Elektrikli kaldırma masası | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`furnaceFeatureSpec4Label`) | TEXT | Kategori sırası | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`furnaceFeatureSpec4Value`) | TEXT | 1 | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`furnaceDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`furnaceDetailLabel`) | TEXT | SEÇİM MANTIĞI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`furnaceDetailTitlePrefix`) | TEXT | Fırın seçimi, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`furnaceDetailTitleEmphasis`) | TEXT | malzemeyle başlar. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`furnaceDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`furnaceDetailSideHtml`) | RICH_TEXT | Zirkon, press seramik ve porselen pişiriminde aynı fırın mantığı kullanılmaz. Isı aralığı, çevrim süresi, yükleme yapısı ve restorasyon tipi birlikte değerlendirilmelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`furnaceDetailCard1Title`) | TEXT | Sinterleme | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`furnaceDetailCard1DescriptionHtml`) | RICH_TEXT | Zirkonya restorasyonlarda fırın sıcaklığı ve çevrim profili dayanım, renk ve ölçü stabilitesini etkiler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`furnaceDetailCard2Title`) | TEXT | Hızlı çevrim | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`furnaceDetailCard2DescriptionHtml`) | RICH_TEXT | Turbo Fire gibi hızlı çözümler, düşük adetli kron işlerinde teslim süresini kısaltmak için konumlanır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`furnaceDetailCard3Title`) | TEXT | Press | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`furnaceDetailCard3DescriptionHtml`) | RICH_TEXT | Press seramik akışında kaldırma tabla ve kontrollü çevrim, tekrarlanabilir presleme sonucunu destekler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`furnaceDetailCard4Title`) | TEXT | Porselen | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`furnaceDetailCard4DescriptionHtml`) | RICH_TEXT | Vakumlu veya normal atmosfer pişirimlerinde homojen ısıtma ve doğru çevrim yüzey kalitesini belirler. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`furnaceDetailCalloutTitlePrefix`) | TEXT | Zirkon + fırın + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`furnaceDetailCalloutTitleEmphasis`) | TEXT | protokol. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`furnaceDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`furnaceDetailCalloutDescriptionHtml`) | RICH_TEXT | Doğru blok seçimi, doğru sinterleme çevrimiyle tamamlanır. Zirkon disk, frezeleme stratejisi ve fırın programını aynı akışta değerlendirin. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`furnaceDetailCalloutButton1Text`) | TEXT | Zirkon bloklara git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`furnaceDetailCalloutButton1Href`) | TEXT | /zirkon-bloklar | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`furnaceDetailCalloutButton2Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`furnaceDetailCalloutButton2Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`furnaceFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`furnaceFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`furnaceFaqTitle`) | TEXT | Dental fırın seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`furnaceFaqSideHtml`) | RICH_TEXT | Sinterleme, press ve porselen akışı için temel seçim noktaları. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`furnaceFaq1Question`) | TEXT | Bu kategoride hangi fırınlar var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`furnaceFaq1AnswerHtml`) | RICH_TEXT | Naberthem LHT 02/17 LB Speed, Naberthem LHT 01/16 Turbo Fire, Naberthem VL 01/12 LB Pres Fırını ve Naberthem VL 01/12 LB Porselen Fırını listelenir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`furnaceFaq2Question`) | TEXT | Sinterleme fırını seçerken neye bakılmalı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`furnaceFaq2AnswerHtml`) | RICH_TEXT | Zirkon tipi, restorasyon adedi, maksimum sıcaklık, çevrim süresi, fırın odası hacmi ve laboratuvarın günlük üretim ritmi birlikte değerlendirilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`furnaceFaq3Question`) | TEXT | Turbo Fire hangi işlerde mantıklı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`furnaceFaq3AnswerHtml`) | RICH_TEXT | Hızlı zirkonyum oksit sinterleme ihtiyacı olan, özellikle düşük adetli kron işlerinde kısa çevrim avantajı isteyen laboratuvarlar için uygundur. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`furnaceFaq4Question`) | TEXT | Press ve porselen fırını aynı şey mi? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`furnaceFaq4AnswerHtml`) | RICH_TEXT | Hayır. Press seramik ve porselen pişirim süreçleri farklı ihtiyaçlara sahiptir; VL 01/12 LB hattında bu iki iş için ayrı ürünler bulunur. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`furnaceFaq5Question`) | TEXT | Zirkon blokla fırın birlikte mi seçilmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`furnaceFaq5AnswerHtml`) | RICH_TEXT | Evet. Zirkon blok materyali, sinterleme protokolü ve fırın çevrimi birlikte düşünülmediğinde renk, dayanım ve ölçü stabilitesi değişebilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`furnaceFinalTitlePrefix`) | TEXT | Laboratuvarınıza uygun fırını | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`furnaceFinalTitleEmphasis`) | TEXT | birlikte seçelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`furnaceFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`furnaceFinalDescriptionHtml`) | RICH_TEXT | Hangi zirkon, hangi adet, hangi teslim süresi? Kısa bir görüşmeyle sinterleme, press veya porselen akışınız için doğru fırın seçimini netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`furnaceFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`furnaceFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`furnaceFinalSecondaryButtonText`) | TEXT | Fırınlara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`furnaceFinalSecondaryButtonHref`) | TEXT | #firinlar | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`furnaceBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`furnaceTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`furnaceMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`furnacePanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`furnaceAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`furnaceLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`furnaceShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`furnaceShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`furnaceShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`furnaceShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`furnaceShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`furnaceShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`furnaceShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`furnaceShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`scannerEyebrowText`) | TEXT | ⚡ Tarayıcı seçimi üretim hacmine göre yapılır | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`scannerAnnouncementText`) | TEXT | E2, E3 ve E4 arasındaki farkı laboratuvar iş akışınıza göre karşılaştırın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`scannerAnnouncementCtaText`) | TEXT | Tarayıcıları karşılaştır → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`scannerAnnouncementHref`) | TEXT | #tarayicilar | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`scannerHeroTitlePrefix`) | TEXT | Dijital üretim, | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`scannerHeroTitleEmphasis`) | TEXT | doğru taramayla | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`scannerHeroTitleSuffix`) | TEXT | başlar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`scannerHeroDescriptionHtml`) | RICH_TEXT | CAD/CAM akışında model verisinin kalitesi, üretimin geri kalanını doğrudan etkiler. 3Shape E serisi; doku taramasından implant bar doğruluğuna, yüksek hacimli tam çene taramaya kadar laboratuvarın tarama ihtiyacını üç farklı seviyede karşılar. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`scannerPrimaryButtonText`) | TEXT | Tarayıcıları incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`scannerPrimaryButtonHref`) | TEXT | #tarayicilar | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`scannerSecondaryButtonText`) | TEXT | Laboratuvarı birlikte eşleyelim | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`scannerSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`scannerMetric1Value`) | TEXT | 3 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`scannerMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`scannerMetric1Label`) | TEXT | E2, E3 ve E4 tarayıcı seçenekleri | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`scannerMetric2Value`) | TEXT | 4 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`scannerMetric2Emphasis`) | TEXT | μm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`scannerMetric2Label`) | TEXT | 3Shape E4 hassasiyet bilgisi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`scannerMetric3Value`) | TEXT | 9 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`scannerMetric3Emphasis`) | TEXT | sn | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`scannerMetric3Label`) | TEXT | 3Shape E4 tam çene tarama hızı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`scannerMetric4Value`) | TEXT | 3Shape | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`scannerMetric4Emphasis`) | TEXT | E serisi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`scannerMetric4Label`) | TEXT | dental laboratuvar CAD/CAM başlangıcı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`scannerSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`scannerSelectorLabel`) | TEXT | TARAYICI SEÇİCİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`scannerSelectorTitlePrefix`) | TEXT | Doku, implant bar, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`scannerSelectorTitleEmphasis`) | TEXT | hız. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`scannerSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`scannerSelectorSideHtml`) | RICH_TEXT | Masaüstü tarayıcı seçiminde ilk soru model değil, iş akışıdır. Doku taraması, implant bar doğruluğu ve yüksek hacimli tam çene tarama farklı cihaz seviyeleri gerektirir. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`scannerSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`scannerFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`scannerFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`scannerFeatureEyebrow`) | TEXT | 3SHAPE E4 · 4 μM · 9 SN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`scannerFeatureTitlePrefix`) | TEXT | Hız ve hassasiyet | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`scannerFeatureTitleEmphasis`) | TEXT | aynı taramada. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`scannerFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`scannerFeatureDescriptionHtml`) | RICH_TEXT | 3Shape E4, dört kamera yapısı, 4 μm hassasiyet ve 9 saniye tam çene tarama hızıyla E serisinin en güçlü cihazı olarak konumlandırılır. Yoğun laboratuvar akışında hızlı ve hassas veri üretmek için öne çıkar. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`scannerFeatureHref`) | TEXT | /3shape-e4 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`scannerFeatureCtaText`) | TEXT | E4 ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`scannerFeatureSpec1Label`) | TEXT | Hassasiyet | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`scannerFeatureSpec1Value`) | TEXT | 4 μm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`scannerFeatureSpec2Label`) | TEXT | Tam çene | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`scannerFeatureSpec2Value`) | TEXT | 9 sn | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`scannerFeatureSpec3Label`) | TEXT | Kamera | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`scannerFeatureSpec3Value`) | TEXT | 4 | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`scannerFeatureSpec4Label`) | TEXT | Kategori sırası | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`scannerFeatureSpec4Value`) | TEXT | 3 | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`scannerDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`scannerDetailLabel`) | TEXT | TARAYICI SEÇİM | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`scannerDetailTitlePrefix`) | TEXT | Tarayıcı seçimi, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`scannerDetailTitleEmphasis`) | TEXT | iş tipine bağlıdır. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`scannerDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`scannerDetailSideHtml`) | RICH_TEXT | Dental laboratuvarda tarama verisi, tasarım ve üretim sürecinin başlangıcıdır. Bu yüzden cihaz seçimi yalnızca fiyatla değil, iş tipi ve doğruluk ihtiyacıyla yapılmalıdır. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`scannerDetailCard1Title`) | TEXT | Doku taraması | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`scannerDetailCard1DescriptionHtml`) | RICH_TEXT | E2, model ve doku tarama işlerinde üretkenliği artırmaya odaklanan giriş seviyesidir. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`scannerDetailCard2Title`) | TEXT | İmplant bar doğruluğu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`scannerDetailCard2DescriptionHtml`) | RICH_TEXT | E3, implant bar doğruluğu ve yüksek performans ihtiyacını uygun maliyetle karşılamak için konumlanır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`scannerDetailCard3Title`) | TEXT | Yüksek hacim | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`scannerDetailCard3DescriptionHtml`) | RICH_TEXT | E4, hızlı tam çene tarama ve hassasiyet gerektiren yoğun laboratuvar akışlarında öne çıkar. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`scannerDetailCard4Title`) | TEXT | CAD/CAM bağlantısı | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`scannerDetailCard4DescriptionHtml`) | RICH_TEXT | Tarama verisi, tasarım ve üretim adımlarına temel oluşturur; mevcut akışla uyum birlikte değerlendirilmelidir. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`scannerDetailCalloutTitlePrefix`) | TEXT | Tarama + tasarım + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`scannerDetailCalloutTitleEmphasis`) | TEXT | üretim. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`scannerDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`scannerDetailCalloutDescriptionHtml`) | RICH_TEXT | Masaüstü tarayıcı, dental CAD/CAM zincirinin ilk halkasıdır. Tarayıcı seçimini freze, zirkon, fırın ve yazıcı akışınızla birlikte planlayın. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`scannerDetailCalloutButton1Text`) | TEXT | Sistemlere git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`scannerDetailCalloutButton1Href`) | TEXT | /sistemler | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`scannerDetailCalloutButton2Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`scannerDetailCalloutButton2Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`scannerFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`scannerFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`scannerFaqTitle`) | TEXT | Masaüstü tarayıcı seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`scannerFaqSideHtml`) | RICH_TEXT | E2, E3 ve E4 arasında karar verirken bakılması gereken temel noktalar. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`scannerFaq1Question`) | TEXT | Bu kategoride hangi tarayıcılar var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`scannerFaq1AnswerHtml`) | RICH_TEXT | 3Shape E2, E3 ve E4 seçenekleri laboratuvarların farklı tarama hızı ve hassasiyet ihtiyaçlarına göre konumlanır. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`scannerFaq2Question`) | TEXT | 3Shape E2 ne için seçilir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`scannerFaq2AnswerHtml`) | RICH_TEXT | Model ve doku taraması yapan, laboratuvar üretkenliğini artırmak isteyen ekipler için konumlanır. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`scannerFaq3Question`) | TEXT | 3Shape E3 farkı nedir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`scannerFaq3AnswerHtml`) | RICH_TEXT | E3 tarafında implant bar doğruluğu ve yüksek performans vurgusu öne çıkar. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`scannerFaq4Question`) | TEXT | 3Shape E4 hangi durumda mantıklı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`scannerFaq4AnswerHtml`) | RICH_TEXT | 4 μm hassasiyet, 9 sn tam çene tarama ve dört kamera gerektiren yüksek hacimli laboratuvar akışlarında E4 öne çıkar. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`scannerFaq5Question`) | TEXT | Tarayıcı seçimini neye göre yapmalıyım? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`scannerFaq5AnswerHtml`) | RICH_TEXT | Günlük tarama hacmi, implant bar işi olup olmadığı, tam çene hız beklentisi ve mevcut CAD/CAM akışı birlikte değerlendirilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`scannerFinalTitlePrefix`) | TEXT | Laboratuvarınıza uygun tarayıcıyı | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`scannerFinalTitleEmphasis`) | TEXT | birlikte seçelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`scannerFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`scannerFinalDescriptionHtml`) | RICH_TEXT | Doku taraması mı, implant bar doğruluğu mu, yüksek hacimli tam çene akışı mı? Kısa bir görüşmeyle E2, E3 ve E4 arasındaki doğru seçimi netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`scannerFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`scannerFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`scannerFinalSecondaryButtonText`) | TEXT | Tarayıcılara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`scannerFinalSecondaryButtonHref`) | TEXT | #tarayicilar | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`scannerBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`scannerTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`scannerMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`scannerPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`scannerAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`scannerLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`scannerShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`scannerShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`scannerShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`scannerShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`scannerShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`scannerShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`scannerShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`scannerShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`spareEyebrowText`) | TEXT | ⚡ Doğru yedek parça cihaz uyumuyla seçilir | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`spareAnnouncementText`) | TEXT | P16L, Halot Sky, Piocreat C01 ve sarf parçalarını kullanım ihtiyacınıza göre karşılaştırın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`spareAnnouncementCtaText`) | TEXT | Yedek parçaları gör → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`spareAnnouncementHref`) | TEXT | #yedek-parcalar | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`spareHeroTitlePrefix`) | TEXT | Üretim sürekliliği, | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`spareHeroTitleEmphasis`) | TEXT | doğru parçayla | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`spareHeroTitleSuffix`) | TEXT | korunur. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`spareHeroDescriptionHtml`) | RICH_TEXT | 3D yazıcı bakımında parça seçimi yalnızca ürün adından ibaret değildir. Cihaz modeli, ekran revizyonu, tank/film uyumu, tabla kalibrasyonu ve ilk test baskısı birlikte kontrol edildiğinde üretim tekrar stabil hale gelir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`sparePrimaryButtonText`) | TEXT | Yedek parçaları incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`sparePrimaryButtonHref`) | TEXT | #yedek-parcalar | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`spareSecondaryButtonText`) | TEXT | Uyumluluğu kontrol ettir | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`spareSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`spareMetric1Value`) | TEXT | 8 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`spareMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`spareMetric1Label`) | TEXT | yazıcı bakım ve yedek parça seçenekleri | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`spareMetric2Value`) | TEXT | 16K | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`spareMetric2Emphasis`) | TEXT | LCD | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`spareMetric2Label`) | TEXT | MASH P16L monokrom ekran yedek parçası | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`spareMetric3Value`) | TEXT | 800 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`spareMetric3Emphasis`) | TEXT | ml | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`spareMetric3Label`) | TEXT | MASH P16L reçine tankı kapasitesi | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`spareMetric4Value`) | TEXT | 6K | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`spareMetric4Emphasis`) | TEXT | Mono | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`spareMetric4Label`) | TEXT | Creality Halot Sky LCD ekran kiti | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`spareSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`spareSelectorLabel`) | TEXT | PARÇA LİSTESİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`spareSelectorTitlePrefix`) | TEXT | Elektronik, tabla, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`spareSelectorTitleEmphasis`) | TEXT | tank ve film. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`spareSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`spareSelectorSideHtml`) | RICH_TEXT | Kategori içindeki ürünler bakım ve servis akışının farklı noktalarına denk gelir. Ana kart ve LCD ekran elektronik; tabla, tank ve film baskı temas yüzeyidir. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`spareSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`spareFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`spareFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`spareFeatureEyebrow`) | TEXT | MASH P16L · 16K LCD · 385 nm | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`spareFeatureTitlePrefix`) | TEXT | Mikron detay | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`spareFeatureTitleEmphasis`) | TEXT | LCD ekranda | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`spareFeatureTitleSuffix`) | TEXT | başlar. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`spareFeatureDescriptionHtml`) | RICH_TEXT | MASH P16L 16K monokrom LCD ekran; 9.6 inç panel, 14x19 μm hassasiyet, 385 nm UV ışık uyumu ve 100°C ısı direnciyle dental üretimde yüksek detay seviyesini destekler. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`spareFeatureHref`) | TEXT | /mash-p16l-16k-monokrom-lcd-ekran-yedek-parca | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`spareFeatureCtaText`) | TEXT | LCD ekran detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`spareFeatureSpec1Label`) | TEXT | Çözünürlük | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`spareFeatureSpec1Value`) | TEXT | 16K UHD | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`spareFeatureSpec2Label`) | TEXT | Hassasiyet | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`spareFeatureSpec2Value`) | TEXT | 14x19 μm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`spareFeatureSpec3Label`) | TEXT | Ekran | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`spareFeatureSpec3Value`) | TEXT | 9.6 inç | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`spareFeatureSpec4Label`) | TEXT | Işık | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`spareFeatureSpec4Value`) | TEXT | 385 nm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`spareDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`spareDetailLabel`) | TEXT | SERVİS MANTIĞI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`spareDetailTitlePrefix`) | TEXT | Parça değişimi, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`spareDetailTitleEmphasis`) | TEXT | kalibrasyonla biter. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`spareDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`spareDetailSideHtml`) | RICH_TEXT | Yedek parça değişiminde son adım montaj değil, cihazın yeniden stabil baskı verebildiğini doğrulamaktır. Ekran, tank filmi, tabla ve reçine birlikte kontrol edilmelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`spareDetailCard1Title`) | TEXT | Cihaz uyumu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`spareDetailCard1DescriptionHtml`) | RICH_TEXT | Satın alma öncesi cihaz modeli, parça revizyonu ve bağlantı tipi doğrulanmalıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`spareDetailCard2Title`) | TEXT | Temiz montaj | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`spareDetailCard2DescriptionHtml`) | RICH_TEXT | LCD ekran, film ve tank yüzeyi reçine kalıntısı ve tozdan arındırılarak kurulmalıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`spareDetailCard3Title`) | TEXT | İlk katman | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`spareDetailCard3DescriptionHtml`) | RICH_TEXT | Tabla ve tank değişiminden sonra hizalama ve ilk katman tutunması test edilmelidir. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`spareDetailCard4Title`) | TEXT | Test baskısı | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`spareDetailCard4DescriptionHtml`) | RICH_TEXT | Elektronik veya sarf parça değişiminden sonra kısa bir test baskısı üretim riskini azaltır. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`spareDetailCalloutTitlePrefix`) | TEXT | Yedek parça + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`spareDetailCalloutTitleEmphasis`) | TEXT | teknik destek. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`spareDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`spareDetailCalloutDescriptionHtml`) | RICH_TEXT | Parçayı tek başına satın almak yerine cihaz modelini ve baskı problemini birlikte kontrol edin. Doğru parça, doğru kurulum adımıyla üretimi tekrar stabil hale getirir. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`spareDetailCalloutButton1Text`) | TEXT | 3D yazıcılara git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`spareDetailCalloutButton1Href`) | TEXT | /3d-yazicilar | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`spareDetailCalloutButton2Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`spareDetailCalloutButton2Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`spareFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`spareFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`spareFaqTitle`) | TEXT | Yedek parça seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`spareFaqSideHtml`) | RICH_TEXT | Cihaz uyumu, kurulum ve test baskısı için temel kontrol noktaları. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`spareFaq1Question`) | TEXT | Bu kategoride hangi ürünler var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`spareFaq1AnswerHtml`) | RICH_TEXT | MASH P16L ana kart, LCD ekran, küçük/büyük baskı tablası, reçine tankı, ACF/FEP film, Piocreat C01 LCD ve Creality Halot Sky LCD ekran kiti listelenir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`spareFaq2Question`) | TEXT | Yanlış parça almamak için ne kontrol edilmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`spareFaq2AnswerHtml`) | RICH_TEXT | Cihaz modeli, parça revizyonu, ekran/tank ölçüsü ve bağlantı uyumu satın alma öncesi kontrol edilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`spareFaq3Question`) | TEXT | LCD ekran değişimi sonrası ne yapılmalı? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`spareFaq3AnswerHtml`) | RICH_TEXT | Bağlantılar, ekran yüzeyi, tank filmi ve pozlama testi kontrol edilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`spareFaq4Question`) | TEXT | Tabla değişimi sonrası kalibrasyon gerekir mi? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`spareFaq4AnswerHtml`) | RICH_TEXT | Evet. Platform hizalaması ve ilk katman tutunması test edilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`spareFaq5Question`) | TEXT | ACF/FEP film ne işe yarar? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`spareFaq5AnswerHtml`) | RICH_TEXT | Tank alt yüzeyinde UV ışığın reçineye dengeli iletilmesini ve stabil katman oluşumunu destekleyen sarf malzemedir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`spareFinalTitlePrefix`) | TEXT | Doğru yedek parçayı | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`spareFinalTitleEmphasis`) | TEXT | birlikte netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`spareFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`spareFinalDescriptionHtml`) | RICH_TEXT | Cihaz modelinizi, baskı probleminizi ve mevcut parça revizyonunu paylaşın; doğru ürünü ve kurulum kontrol listesini birlikte belirleyelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`spareFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`spareFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`spareFinalSecondaryButtonText`) | TEXT | Yedek parçalara dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`spareFinalSecondaryButtonHref`) | TEXT | #yedek-parcalar | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`spareBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`spareTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`spareMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`sparePanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`spareAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`spareLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`spareShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`spareShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`spareShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`spareShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`spareShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`spareShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`spareShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`spareShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`systemEyebrowText`) | TEXT | ⚡ Sistem ürünleri birlikte düşünülür | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`systemAnnouncementText`) | TEXT | Trasformer Comp Flow ve Light Glass akışını tam çene kompozit restorasyon ihtiyacına göre karşılaştırın. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`systemAnnouncementCtaText`) | TEXT | Sistemleri gör → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`systemAnnouncementHref`) | TEXT | #sistemler | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`systemHeroTitlePrefix`) | TEXT | Tam çene kompozitte | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`systemHeroTitleEmphasis`) | TEXT | sistem birlikte | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`systemHeroTitleSuffix`) | TEXT | çalışır. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`systemHeroDescriptionHtml`) | RICH_TEXT | Trasformer sistemi; kompozit materyal, ışık geçirgenliği, doğruluk ve stabiliteyi aynı restorasyon akışında birleştirir. Comp Flow şırınga kompozit ve Light Glass mufla sistemi, vaka planıyla birlikte değerlendirilmelidir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`systemPrimaryButtonText`) | TEXT | Sistemleri incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`systemPrimaryButtonHref`) | TEXT | #sistemler | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`systemSecondaryButtonText`) | TEXT | Vaka uyumunu sor | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`systemSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`systemMetric1Value`) | TEXT | 2 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`systemMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`systemMetric1Label`) | TEXT | Comp Flow ve Light Glass sistemleri | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`systemMetric2Value`) | TEXT | Tam | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`systemMetric2Emphasis`) | TEXT | çene | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`systemMetric2Label`) | TEXT | kompozit restorasyon akışı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`systemMetric3Value`) | TEXT | CRS | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`systemMetric3Emphasis`) | TEXT | Trasformer | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`systemMetric3Label`) | TEXT | sistem ve materyal birlikte konumlanır | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`systemMetric4Value`) | TEXT | 14.654 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`systemMetric4Emphasis`) | TEXT | TRY | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`systemMetric4Label`) | TEXT | Light Glass başlangıç fiyat aralığı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`systemSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`systemSelectorLabel`) | TEXT | SİSTEM SEÇİCİ | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`systemSelectorTitlePrefix`) | TEXT | Kompozit materyal, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`systemSelectorTitleEmphasis`) | TEXT | mufla sistemi. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`systemSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`systemSelectorSideHtml`) | RICH_TEXT | Bu kategori tekil ürün listesinden çok bir restorasyon akışı gibi düşünülmelidir. Comp Flow materyal tarafını, Light Glass ise mufla sistemi tarafını temsil eder. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`systemSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`systemFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`systemFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`systemFeatureEyebrow`) | TEXT | TRASFORMER LIGHT GLASS | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`systemFeatureTitlePrefix`) | TEXT | Kompozit restorasyonda | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`systemFeatureTitleEmphasis`) | TEXT | ışık ve stabilite. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`systemFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`systemFeatureDescriptionHtml`) | RICH_TEXT | Trasformer Light Glass Mufla Sistemi, modern dijital laboratuvarların tam çene kompozit restorasyonlarda ihtiyaç duyduğu doğruluk, ışık geçirgenliği ve stabiliteyi desteklemek için tasarlanmıştır. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`systemFeatureHref`) | TEXT | /trasformer-light-glass-mufla-sistemi | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`systemFeatureCtaText`) | TEXT | Light Glass detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`systemFeatureSpec1Label`) | TEXT | Ürün | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`systemFeatureSpec1Value`) | TEXT | Mufla sistemi | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`systemFeatureSpec2Label`) | TEXT | Uygulama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`systemFeatureSpec2Value`) | TEXT | Tam çene | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`systemFeatureSpec3Label`) | TEXT | Materyal | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`systemFeatureSpec3Value`) | TEXT | Kompozit | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`systemFeatureSpec4Label`) | TEXT | Kategori sırası | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`systemFeatureSpec4Value`) | TEXT | 2 | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`systemDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`systemDetailLabel`) | TEXT | AKIŞ MANTIĞI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`systemDetailTitlePrefix`) | TEXT | Sistem ürünü, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`systemDetailTitleEmphasis`) | TEXT | tek parça değildir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`systemDetailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`systemDetailSideHtml`) | RICH_TEXT | Comp Flow ve Light Glass aynı restorasyon hedefinin iki parçasıdır. Materyal seçimi, mufla sistemi kullanımı ve vaka planı birlikte netleşmelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`systemDetailCard1Title`) | TEXT | Materyal | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`systemDetailCard1DescriptionHtml`) | RICH_TEXT | Comp Flow, sistem içindeki kompozit uygulama adımıdır; renk ve vaka planıyla seçilir. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`systemDetailCard2Title`) | TEXT | Mufla sistemi | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`systemDetailCard2DescriptionHtml`) | RICH_TEXT | Light Glass, tam çene kompozit restorasyonlarda stabilite ve ışık geçirgenliği için konumlanır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`systemDetailCard3Title`) | TEXT | Vaka planı | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`systemDetailCard3DescriptionHtml`) | RICH_TEXT | Tam çene restorasyonlarda dijital plan, materyal ve sistem adımı birlikte düşünülmelidir. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`systemDetailCard4Title`) | TEXT | Laboratuvar akışı | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`systemDetailCard4DescriptionHtml`) | RICH_TEXT | Sistem ürünleri mevcut laboratuvar süreci ve ekip alışkanlığına göre uygulanmalıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`systemDetailCalloutTitlePrefix`) | TEXT | Materyal + sistem + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`systemDetailCalloutTitleEmphasis`) | TEXT | vaka. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`systemDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`systemDetailCalloutDescriptionHtml`) | RICH_TEXT | Tam çene kompozit restorasyon akışında doğru ürün seçimi vaka hedefiyle başlar. Renk, sistem uyumu ve laboratuvar sürecini birlikte netleştirin. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`systemDetailCalloutButton1Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`systemDetailCalloutButton1Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`systemDetailCalloutButton2Text`) | TEXT | Tarayıcılara git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`systemDetailCalloutButton2Href`) | TEXT | /masasustu-tarayicilar | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`systemFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`systemFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`systemFaqTitle`) | TEXT | Sistem ürünleri hakkında merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`systemFaqSideHtml`) | RICH_TEXT | Trasformer Comp Flow ve Light Glass arasındaki rol ayrımı. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`systemFaq1Question`) | TEXT | Bu kategoride hangi ürünler var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`systemFaq1AnswerHtml`) | RICH_TEXT | Trasformer Comp Flow Şırınga Kompozit ve Trasformer Light Glass Mufla Sistemi listelenir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`systemFaq2Question`) | TEXT | Comp Flow ne için kullanılır? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`systemFaq2AnswerHtml`) | RICH_TEXT | Light Glass sistemiyle birlikte tam çene kompozit restorasyon akışında kullanılan şırınga kompozittir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`systemFaq3Question`) | TEXT | Light Glass ne işe yarar? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`systemFaq3AnswerHtml`) | RICH_TEXT | Tam çene kompozit restorasyonlarda doğruluk, ışık geçirgenliği ve stabilite hedefleyen mufla sistemidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`systemFaq4Question`) | TEXT | Bu ürünler birlikte mi düşünülmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`systemFaq4AnswerHtml`) | RICH_TEXT | Evet. Comp Flow materyal, Light Glass sistem adımı olarak aynı restorasyon akışında değerlendirilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`systemFaq5Question`) | TEXT | Satın almadan önce ne kontrol edilmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`systemFaq5AnswerHtml`) | RICH_TEXT | Vaka tipi, renk seçimi, laboratuvar süreci ve sistem kullanım adımları netleştirilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`systemFinalTitlePrefix`) | TEXT | Trasformer akışını | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`systemFinalTitleEmphasis`) | TEXT | birlikte planlayalım. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`systemFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`systemFinalDescriptionHtml`) | RICH_TEXT | Vaka hedefinizi, renk ihtiyacınızı ve laboratuvar sürecinizi paylaşın; Comp Flow ve Light Glass kullanımını birlikte netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`systemFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`systemFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`systemFinalSecondaryButtonText`) | TEXT | Sistemlere dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`systemFinalSecondaryButtonHref`) | TEXT | #sistemler | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`systemBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`systemTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`systemMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`systemPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`systemAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`systemLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`systemShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`systemShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`systemShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`systemShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`systemShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`systemShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`systemShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`systemShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Duyuru Vurgu Metni (`titaniumEyebrowText`) | TEXT | ⚡ Titanyum disk seçimi implant üstü akışla yapılır | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Açıklama Metni (`titaniumAnnouncementText`) | TEXT | MESA Grade 5 ELI disk materyal, çap ve CAD/CAM uyumu üzerinden değerlendirilir. | 📢 Duyuru Bandı | Hayır | — |
| 📝 Duyuru Buton Metni (`titaniumAnnouncementCtaText`) | TEXT | Titanyum diski gör → | 📢 Duyuru Bandı | Hayır | — |
| 🔗 Duyuru Linki (`titaniumAnnouncementHref`) | TEXT | #titanyum | 📢 Duyuru Bandı | Hayır | — |
| 📝 Kategori Başlık (İlk Kısım) (`titaniumHeroTitlePrefix`) | TEXT | İmplant üstü işlerde | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Vurgulu Kısım) (`titaniumHeroTitleEmphasis`) | TEXT | biyouyumlu titanyum | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Başlık (Son Kısım) (`titaniumHeroTitleSuffix`) | TEXT | güven verir. | 📝 Kategori Girişi | Hayır | — |
| 📝 Kategori Açıklama Metni (`titaniumHeroDescriptionHtml`) | RICH_TEXT | MESA Grade 5 ELI titanyum disk, implant üstü restorasyonlar için yüksek dayanım ve biyouyumluluk sunar. Ø98.5 mm formu ile CAD/CAM freze sistemlerinde kullanılmak üzere konumlanır. | 📝 Kategori Girişi | Hayır | — |
| 📝 Birincil Buton Metni (`titaniumPrimaryButtonText`) | TEXT | Titanyum diski incele ↓ | 📝 Kategori Girişi | Hayır | — |
| 🔗 Birincil Buton Linki (`titaniumPrimaryButtonHref`) | TEXT | #titanyum | 📝 Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`titaniumSecondaryButtonText`) | TEXT | Freze uyumunu sor | 📝 Kategori Girişi | Hayır | — |
| 🔗 İkincil Buton Linki (`titaniumSecondaryButtonHref`) | TEXT | /pages/iletisim | 📝 Kategori Girişi | Hayır | — |
| 📝 Metrik 1 - Değer (`titaniumMetric1Value`) | TEXT | 1 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Vurgulu Kısım (`titaniumMetric1Emphasis`) | TEXT | ürün | 📊 Metrikler | Hayır | — |
| 📝 Metrik 1 - Açıklama (`titaniumMetric1Label`) | TEXT | freze iş akışı için titanyum disk | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Değer (`titaniumMetric2Value`) | TEXT | Grade | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Vurgulu Kısım (`titaniumMetric2Emphasis`) | TEXT | 5 ELI | 📊 Metrikler | Hayır | — |
| 📝 Metrik 2 - Açıklama (`titaniumMetric2Label`) | TEXT | titanyum materyal sınıfı | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Değer (`titaniumMetric3Value`) | TEXT | Ø98.5 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Vurgulu Kısım (`titaniumMetric3Emphasis`) | TEXT | mm | 📊 Metrikler | Hayır | — |
| 📝 Metrik 3 - Açıklama (`titaniumMetric3Label`) | TEXT | CAD/CAM disk formu | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Değer (`titaniumMetric4Value`) | TEXT | 3.930 | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Vurgulu Kısım (`titaniumMetric4Emphasis`) | TEXT | TRY | 📊 Metrikler | Hayır | — |
| 📝 Metrik 4 - Açıklama (`titaniumMetric4Label`) | TEXT | başlangıç fiyat aralığı | 📊 Metrikler | Hayır | — |
| 📝 Seçici Bölüm Numarası (`titaniumSelectorNumber`) | TEXT | 01 | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Bölüm Etiketi (`titaniumSelectorLabel`) | TEXT | TİTANYUM DİSK | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (İlk Kısım) (`titaniumSelectorTitlePrefix`) | TEXT | Grade 5 ELI, | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Vurgulu Kısım) (`titaniumSelectorTitleEmphasis`) | TEXT | implant üstü. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Başlık (Son Kısım) (`titaniumSelectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Seçici Sağ Yan Açıklama (`titaniumSelectorSideHtml`) | RICH_TEXT | Titanyum disk seçimi materyal sınıfı, disk formu, freze uyumu ve implant üstü endikasyonla birlikte yapılmalıdır. | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`titaniumSelectorCardCtaText`) | TEXT | İncele | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Özellik Bölüm Numarası (`titaniumFeatureNumber`) | TEXT | 02 | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Bölüm Etiketi (`titaniumFeatureLabel`) | TEXT | ÖNE ÇIKAN | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Kartı Üst Etiket (`titaniumFeatureEyebrow`) | TEXT | MESA · GRADE 5 ELI · Ø98.5 MM | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (İlk Kısım) (`titaniumFeatureTitlePrefix`) | TEXT | CAD/CAM frezeleme için | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Vurgulu Kısım) (`titaniumFeatureTitleEmphasis`) | TEXT | titanyum disk. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Başlık (Son Kısım) (`titaniumFeatureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Açıklama Metni (`titaniumFeatureDescriptionHtml`) | RICH_TEXT | MESA Grade 5 ELI, implant üstü restorasyonlarda CAD/CAM sistemlerle uyumlu yüksek dayanımlı titanyum disk çözümüdür. Ø98.5 mm disk formu, frezeleme akışının temel kontrol noktasıdır. | ⭐ Öne Çıkan Ürün | Hayır | — |
| 🔗 Özellik Detay Linki (`titaniumFeatureHref`) | TEXT | /mesa-grade-5-eli-titanyum-disk?Boyut=10-mm | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik Buton Metni (`titaniumFeatureCtaText`) | TEXT | Ürün detayına git → | ⭐ Öne Çıkan Ürün | Hayır | — |
| 📝 Özellik 1 - Etiket (`titaniumFeatureSpec1Label`) | TEXT | Materyal | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 1 - Değer (`titaniumFeatureSpec1Value`) | TEXT | Grade 5 ELI | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Etiket (`titaniumFeatureSpec2Label`) | TEXT | Çap | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 2 - Değer (`titaniumFeatureSpec2Value`) | TEXT | Ø98.5 mm | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Etiket (`titaniumFeatureSpec3Label`) | TEXT | Uygulama | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 3 - Değer (`titaniumFeatureSpec3Value`) | TEXT | İmplant üstü | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Etiket (`titaniumFeatureSpec4Label`) | TEXT | Uyum | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Özellik 4 - Değer (`titaniumFeatureSpec4Value`) | TEXT | CAD/CAM | 🔧 Teknik Özellikler | Hayır | — |
| 📝 Detay Bölüm Numarası (`titaniumDetailNumber`) | TEXT | 03 | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Bölüm Etiketi (`titaniumDetailLabel`) | TEXT | SEÇİM MANTIĞI | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (İlk Kısım) (`titaniumDetailTitlePrefix`) | TEXT | Titanyum disk, | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Vurgulu Kısım) (`titaniumDetailTitleEmphasis`) | TEXT | CAM akışıyla | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Başlık (Son Kısım) (`titaniumDetailTitleSuffix`) | TEXT | seçilir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Detay Sağ Yan Açıklama (`titaniumDetailSideHtml`) | RICH_TEXT | İmplant üstü restorasyonlarda materyal seçimi, disk ölçüsü, holder uyumu ve frezeleme stratejisi birlikte değerlendirilmelidir. | 🧩 Seri ve Detaylar | Hayır | — |
| 📝 Kart 1 - Başlık (`titaniumDetailCard1Title`) | TEXT | Materyal sınıfı | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 1 - Açıklama (`titaniumDetailCard1DescriptionHtml`) | RICH_TEXT | Grade 5 ELI titanyum, yüksek dayanım ve biyouyumluluk ihtiyacı olan implant üstü işler için konumlanır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Başlık (`titaniumDetailCard2Title`) | TEXT | Disk formu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 2 - Açıklama (`titaniumDetailCard2DescriptionHtml`) | RICH_TEXT | Ø98.5 mm formu, CAD/CAM freze sistemleriyle uyum kontrolünün başlangıç noktasıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Başlık (`titaniumDetailCard3Title`) | TEXT | CAM stratejisi | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 3 - Açıklama (`titaniumDetailCard3DescriptionHtml`) | RICH_TEXT | Frezeleme yolu, holder uyumu ve disk boyutu restorasyon sonucunu etkiler. | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Başlık (`titaniumDetailCard4Title`) | TEXT | Vaka uyumu | 📄 Detay Kartları | Hayır | — |
| 📝 Kart 4 - Açıklama (`titaniumDetailCard4DescriptionHtml`) | RICH_TEXT | İmplant üstü restorasyonlarda materyal ve tasarım hedefi birlikte doğrulanmalıdır. | 📄 Detay Kartları | Hayır | — |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`titaniumDetailCalloutTitlePrefix`) | TEXT | Disk + freze + | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`titaniumDetailCalloutTitleEmphasis`) | TEXT | implant planı. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`titaniumDetailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Açıklaması (`titaniumDetailCalloutDescriptionHtml`) | RICH_TEXT | Titanyum disk seçimini freze sisteminiz, CAM yazılımınız ve implant üstü vaka planınızla birlikte netleştirin. | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 1 Metni (`titaniumDetailCalloutButton1Text`) | TEXT | Sistemlere git → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 1 Linki (`titaniumDetailCalloutButton1Href`) | TEXT | /sistemler | 📣 Detay Çağrısı | Hayır | — |
| 📝 Çağrı Kutusu Buton 2 Metni (`titaniumDetailCalloutButton2Text`) | TEXT | Teknik destek al → | 📣 Detay Çağrısı | Hayır | — |
| 🔗 Çağrı Kutusu Buton 2 Linki (`titaniumDetailCalloutButton2Href`) | TEXT | /pages/iletisim | 📣 Detay Çağrısı | Hayır | — |
| 📝 SSS Bölüm Numarası (`titaniumFaqNumber`) | TEXT | 04 | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Bölüm Etiketi (`titaniumFaqLabel`) | TEXT | SIK SORULANLAR | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Ana Başlık (`titaniumFaqTitle`) | TEXT | Titanyum disk seçerken merak edilenler. | ❓ SSS Başlığı | Hayır | — |
| 📝 SSS Sağ Yan Açıklama (`titaniumFaqSideHtml`) | RICH_TEXT | Materyal, çap, CAD/CAM uyumu ve implant üstü kullanım için temel sorular. | ❓ SSS Başlığı | Hayır | — |
| 📝 Soru 1 (`titaniumFaq1Question`) | TEXT | Bu kategoride hangi ürün var? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 1 (`titaniumFaq1AnswerHtml`) | RICH_TEXT | MESA Titanyum Disk Grade 5 ELI, CAD/CAM freze iş akışları için konumlanan titanyum disk seçeneğidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 2 (`titaniumFaq2Question`) | TEXT | MESA Grade 5 ELI ne için kullanılır? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 2 (`titaniumFaq2AnswerHtml`) | RICH_TEXT | İmplant üstü restorasyonlar için kullanılan CAD/CAM uyumlu titanyum disktir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 3 (`titaniumFaq3Question`) | TEXT | Disk çapı nedir? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 3 (`titaniumFaq3AnswerHtml`) | RICH_TEXT | Ürün açıklamasında Ø98.5 mm formu belirtilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 4 (`titaniumFaq4Question`) | TEXT | Biyouyumlu mudur? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 4 (`titaniumFaq4AnswerHtml`) | RICH_TEXT | Kaynak açıklamada yüksek dayanım ve biyouyumluluk sunduğu belirtilir. | 💬 SSS Soruları | Hayır | — |
| 📝 Soru 5 (`titaniumFaq5Question`) | TEXT | Satın almadan önce ne kontrol edilmeli? | 💬 SSS Soruları | Hayır | — |
| 📝 Cevap 5 (`titaniumFaq5AnswerHtml`) | RICH_TEXT | Freze sistemi, holder uyumu, disk boyutu ve implant üstü vaka planı birlikte kontrol edilmelidir. | 💬 SSS Soruları | Hayır | — |
| 📝 Kapanış Başlık (İlk Kısım) (`titaniumFinalTitlePrefix`) | TEXT | Titanyum disk uyumunu | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`titaniumFinalTitleEmphasis`) | TEXT | birlikte kontrol edelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Başlık (Son Kısım) (`titaniumFinalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Açıklama Metni (`titaniumFinalDescriptionHtml`) | RICH_TEXT | Freze sisteminizi, CAM akışınızı ve implant üstü vaka tipinizi paylaşın; doğru disk boyutu ve kullanım planını birlikte netleştirelim. | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış Birincil Buton Metni (`titaniumFinalPrimaryButtonText`) | TEXT | Uzmana danış — ücretsiz | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış Birincil Buton Linki (`titaniumFinalPrimaryButtonHref`) | TEXT | /pages/iletisim | 🔗 Kapanış Çağrısı | Hayır | — |
| 📝 Kapanış İkincil Buton Metni (`titaniumFinalSecondaryButtonText`) | TEXT | Titanyum diske dön | 🔗 Kapanış Çağrısı | Hayır | — |
| 🔗 Kapanış İkincil Buton Linki (`titaniumFinalSecondaryButtonHref`) | TEXT | #titanyum | 🔗 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`titaniumBackgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`titaniumTextColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil / Soluk Metin Rengi (`titaniumMutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel ve Kart Arka Planı (`titaniumPanelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu / Aksiyon Rengi (`titaniumAccentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi / Kenarlık Rengi (`titaniumLineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`titaniumShowAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`titaniumShowHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`titaniumShowMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`titaniumShowSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`titaniumShowFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`titaniumShowDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`titaniumShowFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`titaniumShowFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`resinEyebrowTextEn`) | TEXT | ⚡ Looking for the right resin? | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`printerEyebrowTextEn`) | TEXT | ⚡ Which printer suits you? | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`printerAnnouncementTextEn`) | TEXT | Compare based on speed, resolution, and budget; if you're not sure, our team will match you with the right option. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`printerAnnouncementCtaTextEn`) | TEXT | Go to comparison → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`printerHeroTitlePrefixEn`) | TEXT | ±20 microns | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`printerHeroTitleEmphasisEn`) | TEXT | is born here. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`printerHeroDescriptionHtmlEn`) | RICH_TEXT | Precision is not a coincidence; it's built with the right wavelength , thermal stability, and calibration. 3mash printers are designed around the material: 385 nm light matches the resin's curing spectrum exactly, and integrated heating stabilizes viscosity. What's more, there are no hidden license or RFID fees — you can work with any resin you want. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`printerPrimaryButtonTextEn`) | TEXT | Compare printers ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`printerSecondaryButtonTextEn`) | TEXT | Recommend the right one for me | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`printerMetric1ValueEn`) | TEXT | 385 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`printerMetric1EmphasisEn`) | TEXT | nm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`printerMetric1LabelEn`) | TEXT | perfect match to the resin's curing spectrum · sharp margin | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`printerMetric2ValueEn`) | TEXT | 14×19 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`printerMetric2EmphasisEn`) | TEXT | µm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`printerMetric2LabelEn`) | TEXT | MASH P16L · 16K XY resolution | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`printerMetric3ValueEn`) | TEXT | ±20 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`printerMetric3EmphasisEn`) | TEXT | µm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`printerMetric3LabelEn`) | TEXT | CURIE M1 · repeatable accuracy | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`printerMetric4ValueEn`) | TEXT | 0 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`printerMetric4EmphasisEn`) | TEXT | hidden fee | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`printerMetric4LabelEn`) | TEXT | no license / RFID lock · brand-independent resin | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`printerSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`printerSelectorLabelEn`) | TEXT | DEVICES | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`printerSelectorTitlePrefixEn`) | TEXT | Based on your needs, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`printerSelectorTitleEmphasisEn`) | TEXT | three options. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`printerSelectorSideHtmlEn`) | RICH_TEXT | Highest resolution, highest speed, or the best entry point — all three come with the same 3mash support and without hidden fees . | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`printerSelectorCardCtaTextEn`) | TEXT | View | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`printerFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`printerFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`printerFeatureEyebrowEn`) | TEXT | MASH P16L · 385 nm · 16K | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`printerFeatureTitlePrefixEn`) | TEXT | Margin line, | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`printerFeatureTitleEmphasisEn`) | TEXT | thinner than a strand of hair. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`printerFeatureDescriptionHtmlEn`) | RICH_TEXT | The professional 385 nm UV source matches the curing spectrum of resins and minimizes stray light for sharp margin lines . 16K resolution brings 14×19 µm XY precision; integrated thermal control stabilizes resin viscosity, so you get the same result with every print . | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`printerFeatureCtaTextEn`) | TEXT | Go to product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`printerFeatureSpec1LabelEn`) | TEXT | XY resolution | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`printerFeatureSpec1ValueEn`) | TEXT | 14×19 µm (16K) | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`printerFeatureSpec2LabelEn`) | TEXT | Light source | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`printerFeatureSpec2ValueEn`) | TEXT | 385 nm UV | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`printerFeatureSpec3LabelEn`) | TEXT | Thermal control | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`printerFeatureSpec3ValueEn`) | TEXT | Integrated (25/30°C) | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`printerFeatureSpec4LabelEn`) | TEXT | Calibration | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`printerFeatureSpec4ValueEn`) | TEXT | 8-point vertical lock | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`printerDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`printerDetailLabelEn`) | TEXT | WHY 3MASH PRINTERS ARE DIFFERENT | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`printerDetailTitlePrefixEn`) | TEXT | Not just a good device, | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`printerDetailTitleEmphasisEn`) | TEXT | the right system. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`printerDetailSideHtmlEn`) | RICH_TEXT | Precision comes from the combination of four things. 3mash printers are designed with these in mind from the start. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`printerDetailCard1TitleEn`) | TEXT | Light matched to the material | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`printerDetailCard1DescriptionHtmlEn`) | RICH_TEXT | The 385 nm wavelength matches the resin chemistry; it reduces stray light and sharpens the margin. (P16L) | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`printerDetailCard2TitleEn`) | TEXT | Thermal stability | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`printerDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Integrated heating stabilizes resin viscosity and keeps results repeatable from print to print. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`printerDetailCard3TitleEn`) | TEXT | No calibration hassle | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`printerDetailCard3DescriptionHtmlEn`) | RICH_TEXT | 8-point vertical lock and up to 6 months of calibration-free operation — the same accuracy, every day. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`printerDetailCard4TitleEn`) | TEXT | No lock-in | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`printerDetailCard4DescriptionHtmlEn`) | RICH_TEXT | No hidden license / RFID fee. Works with the resin brand you want, so you're not locked into one ecosystem. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`printerDetailCalloutTitlePrefixEn`) | TEXT | The printer is | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`printerDetailCalloutTitleEmphasisEn`) | TEXT | only one-third of the story. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`printerDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Even the best device loses precision with the wrong resin or the wrong curing. Whether a crown seats properly depends on the synchronization of printer + resin + curing — we calibrate all three together. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`printerDetailCalloutButton1TextEn`) | TEXT | Compatible resins → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`printerDetailCalloutButton2TextEn`) | TEXT | The importance of curing → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`printerFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`printerFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`printerFaqTitleEn`) | TEXT | Frequently asked questions when choosing a printer. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`printerFaqSideHtmlEn`) | RICH_TEXT | The most frequently asked questions from dentists and labs, with clear answers. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`printerFaq1QuestionEn`) | TEXT | Which dental 3D printer should I choose? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`printerFaq1AnswerHtmlEn`) | RICH_TEXT | It depends on your needs: for the highest resolution and sharpest margins, choose the MASH P16L (385 nm · 16K · 14×19 µm); for speed and low total cost, the domestic Mash CURIE M1 (±20 µm, temporary crown in 14 min); for an economical entry into digital, the Creality Halot-Sky 6K (±15 µm in the enhanced version). If you're not sure, check out the comparison above or consult our team. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`printerFaq2QuestionEn`) | TEXT | 385 nm or 405 nm? What's the difference? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`printerFaq2AnswerHtmlEn`) | RICH_TEXT | 385 nm wavelength better matches the curing spectrum of most dental resins; it reduces stray light and provides sharper margins. This is why the MASH P16L uses a professional 385 nm UV source. For a detailed comparison, see the Mash Academy article 385nm or 405nm? . | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`printerFaq3QuestionEn`) | TEXT | Is there a hidden license or RFID resin fee? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`printerFaq3AnswerHtmlEn`) | RICH_TEXT | No. 3mash printers have no hidden license or RFID lock. We don't tie the device to a single resin brand; you can work with any resin you like and control your own costs. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`printerFaq4QuestionEn`) | TEXT | How often is calibration required? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`printerFaq4AnswerHtmlEn`) | RICH_TEXT | Not often. The MASH P16L's 8-point vertical lock keeps it stable for months; the Mash CURIE M1 goes up to 6 months without calibration. That way you get the same print accuracy every day. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`printerFaq5QuestionEn`) | TEXT | Does it work with another brand's resin? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`printerFaq5AnswerHtmlEn`) | RICH_TEXT | Yes. 3mash printers are brand-independent. What's more, our technical team helps you get the best result with the resin you use by calibrating it together with your device's parameters . | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`printerFinalTitlePrefixEn`) | TEXT | Let's choose the right printer | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`printerFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`printerFinalDescriptionHtmlEn`) | RICH_TEXT | What kind of work, what volume, what budget? In a short conversation we'll recommend the right device, resin, and parameters for you free of charge — and we'll evaluate the device you already own, too. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`printerFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`printerFinalSecondaryButtonTextEn`) | TEXT | Back to comparison | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`resinAnnouncementTextEn`) | TEXT | Filter by your application; if you're not sure, our team will match one for you. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`resinAnnouncementCtaTextEn`) | TEXT | Go to resin selector → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`resinHeroTitlePrefixEn`) | TEXT | Half of the result is hidden | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`resinHeroTitleEmphasisEn`) | TEXT | in the resin. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`resinHeroDescriptionHtmlEn`) | RICH_TEXT | As we saw on the home page, precision doesn't come from a single device. It emerges when the right resin is matched to the right job and calibrated together with your device's parameters. With the CE Class IIa certified CRS line and the economical Mash line, there's a right resin for every application. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`resinPrimaryButtonTextEn`) | TEXT | Select your resin ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`resinSecondaryButtonTextEn`) | TEXT | Not sure? Ask our team | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`resinMetric1ValueEn`) | TEXT | CE | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`resinMetric1EmphasisEn`) | TEXT | Class IIa | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`resinMetric1LabelEn`) | TEXT | biocompatible CRS line · certified | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`resinMetric2ValueEn`) | TEXT | 16 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`resinMetric2EmphasisEn`) | TEXT | resins | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`resinMetric2LabelEn`) | TEXT | model, crown, denture, gingiva, splint, aligner, guide… | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`resinMetric3ValueEn`) | TEXT | Brand | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`resinMetric3EmphasisEn`) | TEXT | independent | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`resinMetric3LabelEn`) | TEXT | compatible with all DLP & LCD 3D printers | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`resinMetric4ValueEn`) | TEXT | Together | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`resinMetric4EmphasisEn`) | TEXT | calibrated | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`resinMetric4LabelEn`) | TEXT | delivered matched to your device parameters | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`resinSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`resinSelectorLabelEn`) | TEXT | RESIN SELECTOR | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`resinSelectorTitlePrefixEn`) | TEXT | Which resin for | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`resinSelectorTitleEmphasisEn`) | TEXT | which application? | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`resinSelectorSideHtmlEn`) | RICH_TEXT | Choose your application, see the right resin. All work with every DLP/LCD printer; the CRS line is also CE Class IIa biocompatible. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`resinSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`resinFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`resinFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`resinFeatureEyebrowEn`) | TEXT | CRS COMPOSITE · CE CLASS IIa | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`resinFeatureTitlePrefixEn`) | TEXT | Permanent crowns now come | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`resinFeatureTitleEmphasisEn`) | TEXT | straight from the printer. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`resinFeatureDescriptionHtmlEn`) | RICH_TEXT | A biocompatible resin for layered production of temporary and permanent crowns and bridges. Higher flexural strength than competitors and precise marginal fit; balanced translucency between semi-transparency and opacity. Resistant to oral conditions, no taste or odor. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`resinFeatureCtaTextEn`) | TEXT | Go to product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`resinFeatureSpec1LabelEn`) | TEXT | Flexural strength (ISO 10477) | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`resinFeatureSpec1ValueEn`) | TEXT | 144 MPa | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`resinFeatureSpec2LabelEn`) | TEXT | Flexural modulus (ISO 10477) | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`resinFeatureSpec2ValueEn`) | TEXT | 5000 MPa | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`resinFeatureSpec3LabelEn`) | TEXT | Application | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`resinFeatureSpec3ValueEn`) | TEXT | Temporary + permanent crown-bridge | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`resinFeatureSpec4LabelEn`) | TEXT | Compatibility | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`resinFeatureSpec4ValueEn`) | TEXT | All DLP / LCD printers | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`resinDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`resinDetailLabelEn`) | TEXT | TWO LINES, ONE STANDARD | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`resinDetailTitlePrefixEn`) | TEXT | A line for your budget, | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`resinDetailTitleEmphasisEn`) | TEXT | not for a quality tier. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`resinDetailSideHtmlEn`) | RICH_TEXT | Whether you choose premium or economical, both work with all printer brands and come with parameter support from our technical team. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`resinDetailCard1TitleEn`) | TEXT | CRS — Biocompatible premium line | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`resinDetailCard1DescriptionHtmlEn`) | RICH_TEXT | Manufactured by CRSCAM, CE Class IIa certified — for work where precision, strength, and biocompatibility are critical. The go-to choice for all applications that remain intraoral. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`resinDetailCard2TitleEn`) | TEXT | Mash — Economical line | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`resinDetailCard2DescriptionHtmlEn`) | RICH_TEXT | A cost-effective alternative for high-volume, extraoral, and trial work. Meets model, try-in, and economical guide needs. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`resinDetailCalloutTitlePrefixEn`) | TEXT | Resin alone is not enough: | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`resinDetailCalloutTitleEmphasisEn`) | TEXT | curing completes the result. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`resinDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Even if you choose the right resin, incorrect post-curing ruins precision and strength. Every CRS resin comes with a curing protocol ; our smart curing device applies this protocol automatically. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`resinDetailCalloutButton1TextEn`) | TEXT | See the importance of curing → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`resinFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`resinFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`resinFaqTitleEn`) | TEXT | Frequently asked questions when choosing a resin. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`resinFaqSideHtmlEn`) | RICH_TEXT | The most frequently asked questions from dentists and labs, with clear answers. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`resinFaq1QuestionEn`) | TEXT | Which dental resin should I choose? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`resinFaq1AnswerHtmlEn`) | RICH_TEXT | Choose the resin based on the application : CRS Model or the economical Mash Study for models; CRS Composite for temporary/permanent crowns and bridges; CRS Denture for denture bases; CRS Gingiva for gum tissue; CRS Splint Hard/Soft for night guards; CRS Aligner for clear aligners; CRS Guide for surgical guides. If you are not sure, use the resin selector above or contact our team. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`resinFaq2QuestionEn`) | TEXT | What does CE Class IIa biocompatibility mean? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`resinFaq2AnswerHtmlEn`) | RICH_TEXT | CE Class IIa is a medical device class that remains in contact with the mouth for a certain period; it indicates that the resin meets patient safety and biocompatibility standards. Our CRS line is CE Class IIa certified, and MDR processes are carried out by our manufacturing partner CRSCAM. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`resinFaq3QuestionEn`) | TEXT | Do your resins work with other brand 3D printers? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`resinFaq3AnswerHtmlEn`) | RICH_TEXT | Yes. All CRS and Mash resins are compatible with all DLP and LCD brand printers. Our technical team also delivers the resin by calibrating it together with your device's parameters — so you get the same result regardless of brand. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`resinFaq4QuestionEn`) | TEXT | What should I pay attention to with model resin? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`resinFaq4AnswerHtmlEn`) | RICH_TEXT | A good model resin needs dimensional accuracy , high detail resolution, well-defined collar lines, and a matte, stain-free surface. CRS Model offers high visual detail for optical detection in sand and gray shade options. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`resinFaq5QuestionEn`) | TEXT | Does curing affect resin performance? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`resinFaq5AnswerHtmlEn`) | RICH_TEXT | Absolutely. Insufficient curing causes brittleness and monomer release, while excessive curing causes deformation. Even the right resin can fail with the wrong curing; that's why we provide every resin with a curing protocol. For details, you can check the curing section . | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`resinFinalTitlePrefixEn`) | TEXT | Let's choose the right resin for your work | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`resinFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`resinFinalDescriptionHtmlEn`) | RICH_TEXT | Which application, which device, which budget? With a short conversation, let's recommend the most suitable CRS or Mash resin and the correct parameters for you free of charge . | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`resinFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`resinFinalSecondaryButtonTextEn`) | TEXT | Back to the resin selector | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`washCureEyebrowTextEn`) | TEXT | ⚡ Lock in your post-print result | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`washCureAnnouncementTextEn`) | TEXT | Washing and curing are critical; use the W1E and C1E together. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`washCureAnnouncementCtaTextEn`) | TEXT | Go to devices → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`washCureHeroTitlePrefixEn`) | TEXT | When printing ends, | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`washCureHeroTitleEmphasisEn`) | TEXT | the result isn't finished yet. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`washCureHeroDescriptionHtmlEn`) | RICH_TEXT | Washing and post-curing are the steps that complete surface cleanliness, mechanical strength, and dimensional stability in dental 3D printing. The right device keeps the resin's protocol, light wavelength, and lab workflow aligned. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`washCurePrimaryButtonTextEn`) | TEXT | Browse the devices ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`washCureSecondaryButtonTextEn`) | TEXT | Let's set up the workflow together | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`washCureMetric1ValueEn`) | TEXT | 3 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`washCureMetric1EmphasisEn`) | TEXT | devices | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`washCureMetric1LabelEn`) | TEXT | washing and curing steps | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`washCureMetric2ValueEn`) | TEXT | 360 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`washCureMetric2EmphasisEn`) | TEXT | ° | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`washCureMetric2LabelEn`) | TEXT | C1E light system | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`washCureMetric3ValueEn`) | TEXT | 24 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`washCureMetric3EmphasisEn`) | TEXT | LED | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`washCureMetric3LabelEn`) | TEXT | C1E UV curing setup | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`washCureMetric4ValueEn`) | TEXT | ₺ | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`washCureMetric4EmphasisEn`) | TEXT | 16,534.00 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`washCureMetric4LabelEn`) | TEXT | W1E starting price | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`washCureSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`washCureSelectorLabelEn`) | TEXT | DEVICES | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`washCureSelectorTitlePrefixEn`) | TEXT | After printing, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`washCureSelectorTitleEmphasisEn`) | TEXT | two complementary steps. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`washCureSelectorSideHtmlEn`) | RICH_TEXT | The Mash W1E takes control of the post-print washing step, while the Mash C1E takes control of the UV curing step. Used together, they create a clear workflow for a clean surface, balanced curing, and repeatable results after resin printing. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`washCureSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`washCureFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`washCureFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`washCureFeatureEyebrowEn`) | TEXT | MASH W1E + MASH C1E | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`washCureFeatureTitlePrefixEn`) | TEXT | Washing and curing are | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`washCureFeatureTitleEmphasisEn`) | TEXT | controlled separately. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`washCureFeatureDescriptionHtmlEn`) | RICH_TEXT | The W1E prepares the surface during the washing step; the C1E completes the UV post-curing process with its 24-LED 360° light system. This way the post-print workflow is managed with two clear devices. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`washCureFeatureCtaTextEn`) | TEXT | Go to C1E details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`washCureFeatureSpec1LabelEn`) | TEXT | Washing | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`washCureFeatureSpec1ValueEn`) | TEXT | Mash W1E | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`washCureFeatureSpec2LabelEn`) | TEXT | Curing | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`washCureFeatureSpec2ValueEn`) | TEXT | Mash C1E | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`washCureFeatureSpec3LabelEn`) | TEXT | C1E light system | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`washCureFeatureSpec3ValueEn`) | TEXT | 360° / 24 LED | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`washCureFeatureSpec4LabelEn`) | TEXT | C1E spectrum | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`washCureFeatureSpec4ValueEn`) | TEXT | 360-530 nm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`washCureDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`washCureDetailLabelEn`) | TEXT | WHY IT'S NEEDED | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`washCureDetailTitlePrefixEn`) | TEXT | Curing | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`washCureDetailTitleEmphasisEn`) | TEXT | completes the result. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`washCureDetailSideHtmlEn`) | RICH_TEXT | Even if the printer and resin are correct, if post-processing is missing, the surface, strength, and dimensional stability will not turn out as expected. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`washCureDetailCard1TitleEn`) | TEXT | Surface cleaning | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`washCureDetailCard1DescriptionHtmlEn`) | RICH_TEXT | The washing step cleans excess resin on the print; it prepares the surface for the subsequent curing. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`washCureDetailCard2TitleEn`) | TEXT | Mechanical values | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`washCureDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Post-curing is the complementary step required for the resin to approach its target strength. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`washCureDetailCard3TitleEn`) | TEXT | Protocol compliance | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`washCureDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Device selection should be considered together with the resin protocol; duration and light compatibility directly affect the result. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`washCureDetailCard4TitleEn`) | TEXT | Technical support | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`washCureDetailCard4DescriptionHtmlEn`) | RICH_TEXT | The 3mash team helps you establish the right workflow by evaluating the device, resin, and printer parameters together. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`washCureDetailCalloutTitlePrefixEn`) | TEXT | Printer + resin + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`washCureDetailCalloutTitleEmphasisEn`) | TEXT | curing. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`washCureDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | A reliable result in dental printing comes from three steps working together. The washing/curing device controls the last link in this chain. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`washCureDetailCalloutButton1TextEn`) | TEXT | See compatible resins → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`washCureDetailCalloutButton2TextEn`) | TEXT | Go to 3D printers → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`washCureFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`washCureFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`washCureFaqTitleEn`) | TEXT | Frequently asked questions when choosing washing and curing. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`washCureFaqSideHtmlEn`) | RICH_TEXT | We summarized the effect of post-processing on the dental outcome with clear answers. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`washCureFaq1QuestionEn`) | TEXT | Why is a wash & cure device necessary? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`washCureFaq1AnswerHtmlEn`) | RICH_TEXT | A washing and post-curing step is required to clean excess resin from the surface of a printed part and to bring the material to its target mechanical values. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`washCureFaq2QuestionEn`) | TEXT | Which products are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`washCureFaq2AnswerHtmlEn`) | RICH_TEXT | This category features the Mash W1E Ultrasonic Washing Device, the Mash C1E UV Curing Device, and the Creality Wash&Cure UW-03 together. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`washCureFaq3QuestionEn`) | TEXT | Which light system does the C1E work with? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`washCureFaq3AnswerHtmlEn`) | RICH_TEXT | The Mash C1E supports the UV post-curing step of dental resin prints with its 24-LED 360° light system and wide 360-530 nm spectrum support. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`washCureFaq4QuestionEn`) | TEXT | Does curing still matter if the printer and resin are correct? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`washCureFaq4AnswerHtmlEn`) | RICH_TEXT | Yes. Even if the resin and printer are chosen correctly, incorrect or incomplete post-curing can affect strength, surface quality, and stability. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`washCureFaq5QuestionEn`) | TEXT | Which protocol should I use? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`washCureFaq5AnswerHtmlEn`) | RICH_TEXT | The time/light protocol may vary depending on the resin used and the print type. If you're not sure, consult our team with your device, resin, and printer information. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`washCureFinalTitlePrefixEn`) | TEXT | Let's build your post-print workflow | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`washCureFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`washCureFinalDescriptionHtmlEn`) | RICH_TEXT | Which printer, which resin, which part type? With a short conversation, let's clarify the washing and curing step together according to your workflow. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`washCureFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`washCureFinalSecondaryButtonTextEn`) | TEXT | Back to devices | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`washingEyebrowTextEn`) | TEXT | ⚡ Don't lose out on post-print cleaning | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`washingAnnouncementTextEn`) | TEXT | Precise and fast cleaning with the W1E Ultrasonic Washing Device for surface cleaning after resin printing. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`washingAnnouncementCtaTextEn`) | TEXT | Browse the washing device → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`washingHeroTitlePrefixEn`) | TEXT | After printing, | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`washingHeroTitleEmphasisEn`) | TEXT | a flawless surface | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Son Kısım) (`washingHeroTitleSuffixEn`) | TEXT | starts with washing. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`washingHeroDescriptionHtmlEn`) | RICH_TEXT | It removes excess liquid resin left on the surface of dental 3D printed parts from micro details using ultrasonic vibrations. It provides a homogeneous, clean, tack-free surface quality before curing. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`washingPrimaryButtonTextEn`) | TEXT | Browse the washing device ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`washingSecondaryButtonTextEn`) | TEXT | Consult the workflow | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`washingMetric1ValueEn`) | TEXT | Ultrasonic | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`washingMetric1EmphasisEn`) | TEXT | washing | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`washingMetric1LabelEn`) | TEXT | deep cleaning in micro gaps | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`washingMetric2ValueEn`) | TEXT | 16.453 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`washingMetric2EmphasisEn`) | TEXT | TRY | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`washingMetric2LabelEn`) | TEXT | W1E starting price | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`washingMetric3ValueEn`) | TEXT | Precise | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`washingMetric3EmphasisEn`) | TEXT | cleaning | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`washingMetric3LabelEn`) | TEXT | does not damage the part geometry | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`washingMetric4ValueEn`) | TEXT | Ready for | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`washingMetric4EmphasisEn`) | TEXT | curing | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`washingMetric4LabelEn`) | TEXT | ready surface for homogeneous post-curing | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`washingSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`washingSelectorLabelEn`) | TEXT | WASHING DEVICES | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`washingSelectorTitlePrefixEn`) | TEXT | For post-print cleaning, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`washingSelectorTitleEmphasisEn`) | TEXT | ultrasonic cleaning power. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`washingSelectorSideHtmlEn`) | RICH_TEXT | The Mash W1E takes control of the post-print washing step, quickly and safely cleaning excess resin from the surface. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`washingSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`washingFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`washingFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`washingFeatureEyebrowEn`) | TEXT | MASH W1E · ULTRASONIC WASHING | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`washingFeatureTitlePrefixEn`) | TEXT | Before curing, | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`washingFeatureTitleEmphasisEn`) | TEXT | micron-level cleaning. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`washingFeatureDescriptionHtmlEn`) | RICH_TEXT | If uncured resin residue on the part is not removed, margin details are lost during curing and dimensional deviations occur. The W1E provides homogeneous cleaning down to the narrowest gaps with ultrasonic cavitation waves. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`washingFeatureCtaTextEn`) | TEXT | Go to W1E details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`washingFeatureSpec1LabelEn`) | TEXT | Process | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`washingFeatureSpec1ValueEn`) | TEXT | Ultrasonic washing | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`washingFeatureSpec2LabelEn`) | TEXT | Workflow | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`washingFeatureSpec2ValueEn`) | TEXT | Post-print cleaning | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`washingFeatureSpec3LabelEn`) | TEXT | Cleaning | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`washingFeatureSpec3ValueEn`) | TEXT | Micron-level precision | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`washingFeatureSpec4LabelEn`) | TEXT | Preparation | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`washingFeatureSpec4ValueEn`) | TEXT | Before post-curing | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`washingDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`washingDetailLabelEn`) | TEXT | WHY WASHING IS CRITICAL | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`washingDetailTitlePrefixEn`) | TEXT | Surface cleaning | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`washingDetailTitleEmphasisEn`) | TEXT | is the basis of the result. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`washingDetailSideHtmlEn`) | RICH_TEXT | A part that hasn't been properly washed loses its optical and mechanical quality even if it goes into the best curing device. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`washingDetailCard1TitleEn`) | TEXT | Margin clarity | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`washingDetailCard1DescriptionHtmlEn`) | RICH_TEXT | Excess resin does not build up at margin steps, ensuring crowns and bridges seat properly in the mouth. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`washingDetailCard2TitleEn`) | TEXT | Curing efficiency | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`washingDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Removes the uncured liquid film layer, allowing UV light to penetrate directly into the part's surface. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`washingDetailCard3TitleEn`) | TEXT | Surface smoothness | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`washingDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Eliminates the tacky feel, creating smooth, clean dental restoration surfaces. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`washingDetailCard4TitleEn`) | TEXT | Time savings | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`washingDetailCard4DescriptionHtmlEn`) | RICH_TEXT | Reduces manual brushing or prolonged solvent contact, offering a repeatable workflow. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`washingDetailCalloutTitlePrefixEn`) | TEXT | Once washing is complete: | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`washingDetailCalloutTitleEmphasisEn`) | TEXT | the smart curing step. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`washingDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Cleaned parts are transferred to the UV curing device to reach the target mechanical strength and biocompatibility values. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`washingDetailCalloutButton1TextEn`) | TEXT | See curing devices → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`washingFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`washingFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`washingFaqTitleEn`) | TEXT | Frequently asked questions about washing devices. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`washingFaqSideHtmlEn`) | RICH_TEXT | We answered the key questions about the importance of ultrasonic washing in the dental workflow. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`washingFaq1QuestionEn`) | TEXT | Why is ultrasonic washing necessary in dental 3D printing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`washingFaq1AnswerHtmlEn`) | RICH_TEXT | Ultrasonic cavitation completely removes liquid resin from fine collar lines, interdental spaces, and canal interiors that manual cleaning cannot reach, without damaging the part. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`washingFaq2QuestionEn`) | TEXT | Which washing liquids can be used with the W1E? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`washingFaq2AnswerHtmlEn`) | RICH_TEXT | Can be used fully compatible with Isopropyl Alcohol (IPA), ethanol, or special dental resin cleaning solutions. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`washingFaq3QuestionEn`) | TEXT | How long should washing take? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`washingFaq3AnswerHtmlEn`) | RICH_TEXT | Depending on the type of resin used, an ultrasonic bath of generally 2 to 5 minutes is sufficient for surface cleaning. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`washingFaq4QuestionEn`) | TEXT | Can curing begin directly after washing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`washingFaq4AnswerHtmlEn`) | RICH_TEXT | After washing, wait until the solvent on the surface of the part has completely evaporated and the part has dried before moving to the curing step. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`washingFinalTitlePrefixEn`) | TEXT | Let's build the right washing workflow for your laboratory | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`washingFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`washingFinalDescriptionHtmlEn`) | RICH_TEXT | Which resins do you use, and what is your daily print volume? Let's determine the washing protocol that best fits your needs, free of charge. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`washingFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`washingFinalSecondaryButtonTextEn`) | TEXT | Back to devices | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`curingEyebrowTextEn`) | TEXT | ⚡ Complete mechanical strength and biocompatibility | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`curingAnnouncementTextEn`) | TEXT | With the Mash C1E's 24-LED 360° homogeneous light system, help your resin reach its target clinical values. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`curingAnnouncementCtaTextEn`) | TEXT | Review the curing device → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`curingHeroTitlePrefixEn`) | TEXT | The resin's true strength emerges | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`curingHeroTitleEmphasisEn`) | TEXT | with correct curing. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`curingHeroDescriptionHtmlEn`) | RICH_TEXT | In dental 3D printing, complete polymerization, biocompatibility certification, and 140+ MPa flexural strength can only be achieved with controlled UV post-curing . With its 24-LED 360° light array and wide 360-530 nm spectrum, the Mash C1E cures the part evenly from every angle. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`curingPrimaryButtonTextEn`) | TEXT | Review the curing device ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`curingSecondaryButtonTextEn`) | TEXT | Ask about the curing protocol | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`curingMetric1ValueEn`) | TEXT | 360 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`curingMetric1EmphasisEn`) | TEXT | ° | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`curingMetric1LabelEn`) | TEXT | C1E homogeneous light system · shadow-free | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`curingMetric2ValueEn`) | TEXT | 24 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`curingMetric2EmphasisEn`) | TEXT | LED | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`curingMetric2LabelEn`) | TEXT | high-power UV curing matrix | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`curingMetric3ValueEn`) | TEXT | 360-530 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`curingMetric3EmphasisEn`) | TEXT | nm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`curingMetric3LabelEn`) | TEXT | broad-spectrum compatibility with all dental resins | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`curingMetric4ValueEn`) | TEXT | 76.782 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`curingMetric4EmphasisEn`) | TEXT | TRY | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`curingMetric4LabelEn`) | TEXT | C1E professional post-curing price | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`curingSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`curingSelectorLabelEn`) | TEXT | CURING DEVICES | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`curingSelectorTitlePrefixEn`) | TEXT | For dental resins, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`curingSelectorTitleEmphasisEn`) | TEXT | advanced UV polymerization. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`curingSelectorSideHtmlEn`) | RICH_TEXT | With its 24-LED 360° light system and 360-530 nm spectrum support, the Mash C1E takes the mechanical strength, transparency, and biocompatibility of dental restorations to their peak. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`curingSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`curingFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`curingFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`curingFeatureEyebrowEn`) | TEXT | MASH C1E · 360° UV POST-CURING | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`curingFeatureTitlePrefixEn`) | TEXT | Shadow-free, homogeneous | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`curingFeatureTitleEmphasisEn`) | TEXT | polymerization | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Son Kısım) (`curingFeatureTitleSuffixEn`) | TEXT | with 24 LEDs. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`curingFeatureDescriptionHtmlEn`) | RICH_TEXT | In conventional curing boxes, the underside or internal cavities are undercured. The C1E cures all surfaces evenly with 24 high-output LEDs placed at 360 degrees, reducing residual monomer release to zero. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`curingFeatureCtaTextEn`) | TEXT | Go to C1E product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`curingFeatureSpec1LabelEn`) | TEXT | Number of LEDs | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`curingFeatureSpec1ValueEn`) | TEXT | 24 High-Power | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`curingFeatureSpec2LabelEn`) | TEXT | Light Angle | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`curingFeatureSpec2ValueEn`) | TEXT | 360° All-Around | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`curingFeatureSpec3LabelEn`) | TEXT | Wavelength | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`curingFeatureSpec3ValueEn`) | TEXT | 360 - 530 nm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`curingFeatureSpec4LabelEn`) | TEXT | Result | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`curingFeatureSpec4ValueEn`) | TEXT | Maximum Flexural Strength | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`curingDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`curingDetailLabelEn`) | TEXT | WHY CURING IS CRITICAL | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`curingDetailTitlePrefixEn`) | TEXT | A part that is not properly cured, | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`curingDetailTitleEmphasisEn`) | TEXT | fractures in the mouth. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`curingDetailSideHtmlEn`) | RICH_TEXT | A part fresh off the printer is only 70-80% polymerized. The right post-curing completes the remaining 20-30% difference in strength and stability. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`curingDetailCard1TitleEn`) | TEXT | Maximum strength | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`curingDetailCard1DescriptionHtmlEn`) | RICH_TEXT | In resins like CRS Composite, the correct duration and UV dose are essential to reach 144 MPa flexural strength. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`curingDetailCard2TitleEn`) | TEXT | Biocompatibility assurance | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`curingDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Ensures patient safety by eliminating residual monomer in dentures and splints that remain in the mouth. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`curingDetailCard3TitleEn`) | TEXT | Dimensional stability | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`curingDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Homogeneous curing prevents one side of the part from shrinking excessively and deforming; it preserves occlusal fit. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`curingDetailCard4TitleEn`) | TEXT | Optical translucency | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`curingDetailCard4DescriptionHtmlEn`) | RICH_TEXT | Restorations cured at the correct wavelength don't yellow and retain natural tooth translucency. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`curingDetailCalloutTitlePrefixEn`) | TEXT | Compatible resins and parameters: | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`curingDetailCalloutTitleEmphasisEn`) | TEXT | production expertise. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`curingDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Every resin has a different curing time. As the 3mash team, we deliver all the resins we sell with the C1E curing parameters already calibrated. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`curingDetailCalloutButton1TextEn`) | TEXT | Explore dental resins → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`curingFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`curingFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`curingFaqTitleEn`) | TEXT | Frequently asked questions about curing devices. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`curingFaqSideHtmlEn`) | RICH_TEXT | Answers to common questions about the clinical success of the dental post-curing step. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`curingFaq1QuestionEn`) | TEXT | Why is a UV curing device so important? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`curingFaq1AnswerHtmlEn`) | RICH_TEXT | Models coming out of a resin 3D printer have not yet reached their full mechanical strength. The UV post-curing process fully cross-links the resin chains, completing the hardness, biocompatibility, and elasticity values. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`curingFaq2QuestionEn`) | TEXT | Which wavelengths does the Mash C1E support? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`curingFaq2AnswerHtmlEn`) | RICH_TEXT | The Mash C1E supports a wide spectrum between 360 nm and 530 nm and is fully compatible with all DLP, SLA, and LCD dental resins on the market. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`curingFaq3QuestionEn`) | TEXT | Why is shadow-free 360° curing necessary? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`curingFaq3AnswerHtmlEn`) | RICH_TEXT | If light comes from only one direction, the underside or inner parts of the piece remain soft, which leads to early fractures in the mouth. The 360° arrangement ensures every surface fully hardens at the same time. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`curingFaq4QuestionEn`) | TEXT | How is the curing time determined? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`curingFaq4AnswerHtmlEn`) | RICH_TEXT | It generally varies between 5 and 20 minutes according to the manufacturer's protocol for the resin used. The time can be precisely adjusted on the C1E. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`curingFinalTitlePrefixEn`) | TEXT | Let's standardize your | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`curingFinalTitleEmphasisEn`) | TEXT | curing process. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`curingFinalDescriptionHtmlEn`) | RICH_TEXT | Which resins do you use, and which indications do you print? Let's lock in your clinic's/lab's quality standard with the C1E smart curing device. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`curingFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`curingFinalSecondaryButtonTextEn`) | TEXT | Back to devices | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`zirconEyebrowTextEn`) | TEXT | ⚡ The case determines the zirconia selection | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`zirconAnnouncementTextEn`) | TEXT | Select the right ArgenZ zirconia by checking color, thickness, translucency, and sintering workflow together. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`zirconAnnouncementCtaTextEn`) | TEXT | Compare zirconia → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`zirconHeroTitlePrefixEn`) | TEXT | The right zirconia | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`zirconHeroTitleEmphasisEn`) | TEXT | is chosen by the case. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`zirconHeroDescriptionHtmlEn`) | RICH_TEXT | The result with ArgenZ zirconia blocks comes not just from the disc itself, but from correctly setting up the indication, color, thickness, nesting, and sintering protocol together. Three active ArgenZ options are listed in the same category, ranging from an aesthetic multilayer transition to restorations requiring high strength. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`zirconPrimaryButtonTextEn`) | TEXT | Browse zirconia ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`zirconSecondaryButtonTextEn`) | TEXT | Ask about case fit | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`zirconMetric1ValueEn`) | TEXT | 3 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`zirconMetric1EmphasisEn`) | TEXT | products | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`zirconMetric1LabelEn`) | TEXT | different aesthetic and strength options | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`zirconMetric2ValueEn`) | TEXT | 850 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`zirconMetric2EmphasisEn`) | TEXT | MPa | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`zirconMetric2LabelEn`) | TEXT | ST Multilayer aesthetic zirconia strength | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`zirconMetric3ValueEn`) | TEXT | 1250 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`zirconMetric3EmphasisEn`) | TEXT | MPa | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`zirconMetric3LabelEn`) | TEXT | HT+ and HT+ Multilayer high-strength class | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`zirconMetric4ValueEn`) | TEXT | 7.337 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`zirconMetric4EmphasisEn`) | TEXT | TRY | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`zirconMetric4LabelEn`) | TEXT | starting price range | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`zirconSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`zirconSelectorLabelEn`) | TEXT | ZIRCONIA SELECTOR | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`zirconSelectorTitlePrefixEn`) | TEXT | Aesthetics, strength, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`zirconSelectorTitleEmphasisEn`) | TEXT | gradient. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`zirconSelectorSideHtmlEn`) | RICH_TEXT | Evaluate the HT+, ST Multilayer, and multilayer options together based on aesthetics, strength, and indication needs. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`zirconSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`zirconFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`zirconFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`zirconFeatureEyebrowEn`) | TEXT | ARGENZ HT+ · 1250 MPa · 45% | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`zirconFeatureTitlePrefixEn`) | TEXT | Strength and aesthetics | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`zirconFeatureTitleEmphasisEn`) | TEXT | on the same disc. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`zirconFeatureDescriptionHtmlEn`) | RICH_TEXT | HT+ zirconia is positioned for restorations that target aesthetic light transmission while preserving strength. In full contour and substructure work, the CAM shrinkage value, milling strategy, and sintering protocol should be checked together. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`zirconFeatureCtaTextEn`) | TEXT | Go to HT+ product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`zirconFeatureSpec1LabelEn`) | TEXT | Strength | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`zirconFeatureSpec1ValueEn`) | TEXT | 1250 MPa | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`zirconFeatureSpec2LabelEn`) | TEXT | Translucency | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`zirconFeatureSpec2ValueEn`) | TEXT | 45% | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`zirconFeatureSpec3LabelEn`) | TEXT | Brand | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`zirconFeatureSpec3ValueEn`) | TEXT | Argen | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`zirconFeatureSpec4LabelEn`) | TEXT | Category | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`zirconFeatureSpec4ValueEn`) | TEXT | Zirconia block | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`zirconDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`zirconDetailLabelEn`) | TEXT | SELECTION LOGIC | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`zirconDetailTitlePrefixEn`) | TEXT | The zirconia block | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`zirconDetailTitleEmphasisEn`) | TEXT | is not a decision on its own. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`zirconDetailSideHtmlEn`) | RICH_TEXT | The same material gives different results in different cases, colors, and thicknesses. That's why zirconia selection should be considered together with the milling and sintering workflow. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`zirconDetailCard1TitleEn`) | TEXT | Indication | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`zirconDetailCard1DescriptionHtmlEn`) | RICH_TEXT | The need for a single crown, bridge, substructure, or full contour determines the material type. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`zirconDetailCard2TitleEn`) | TEXT | Color and thickness | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`zirconDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Shade selection, disc thickness, and multilayer positioning directly affect the aesthetic result. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`zirconDetailCard3TitleEn`) | TEXT | CAM and shrinkage | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`zirconDetailCard3DescriptionHtmlEn`) | RICH_TEXT | The shrinkage value on the disk must be entered correctly into the CAM software; the nesting strategy should be set according to the case type. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`zirconDetailCard4TitleEn`) | TEXT | Sintering | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`zirconDetailCard4DescriptionHtmlEn`) | RICH_TEXT | The furnace cycle, temperature, and finishing/glaze steps complete the zirconia result. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`zirconDetailCalloutTitlePrefixEn`) | TEXT | Block + milling + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`zirconDetailCalloutTitleEmphasisEn`) | TEXT | furnace. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`zirconDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | The reliability of a zirconia restoration depends as much on managing the milling and sintering steps together as on choosing the right disc. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`zirconDetailCalloutButton1TextEn`) | TEXT | Go to dental furnaces → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`zirconDetailCalloutButton2TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`zirconFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`zirconFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`zirconFaqTitleEn`) | TEXT | Frequently asked questions when choosing a zirconia block. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`zirconFaqSideHtmlEn`) | RICH_TEXT | Key decision points for color, thickness, material type, and sintering protocol. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`zirconFaq1QuestionEn`) | TEXT | Which products are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`zirconFaq1AnswerHtmlEn`) | RICH_TEXT | The ArgenZ HT+, ArgenZ ST Multilayer, and ArgenZ HT+ Multilayer options are positioned for different aesthetic and strength needs. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`zirconFaq2QuestionEn`) | TEXT | When is ST Multilayer chosen? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`zirconFaq2AnswerHtmlEn`) | RICH_TEXT | For high aesthetics, natural dentin transition, and 50% translucency needs, ST Multilayer is the suitable option. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`zirconFaq3QuestionEn`) | TEXT | When should HT+ be chosen? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`zirconFaq3AnswerHtmlEn`) | RICH_TEXT | If strength, full-contour, or substructure restorations are the priority, the HT+ material class is preferred. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`zirconFaq4QuestionEn`) | TEXT | What is the difference with HT+ Multilayer? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`zirconFaq4AnswerHtmlEn`) | RICH_TEXT | It combines HT+ strength with a natural shade gradient and multilayer transition; nesting position affects the color result. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`zirconFaq5QuestionEn`) | TEXT | What should be checked before purchasing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`zirconFaq5AnswerHtmlEn`) | RICH_TEXT | Indication, color, thickness, CAM shrinkage value, milling strategy, and sintering protocol should be checked together. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`zirconFinalTitlePrefixEn`) | TEXT | Let's choose the right zirconia | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`zirconFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`zirconFinalDescriptionHtmlEn`) | RICH_TEXT | Let's clarify your case type, shade, thickness, and furnace flow in a short call and choose the right ArgenZ zirconia block together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`zirconFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`zirconFinalSecondaryButtonTextEn`) | TEXT | Back to zirconia | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`furnaceEyebrowTextEn`) | TEXT | ⚡ Furnace selection is based on your workflow | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`furnaceAnnouncementTextEn`) | TEXT | Compare sintering, press, and porcelain workflows according to your laboratory volume. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`furnaceAnnouncementCtaTextEn`) | TEXT | Compare furnaces → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`furnaceHeroTitlePrefixEn`) | TEXT | Restoration quality is completed | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`furnaceHeroTitleEmphasisEn`) | TEXT | with controlled heat. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`furnaceHeroDescriptionHtmlEn`) | RICH_TEXT | The outcome of zirconia sintering, press ceramic, and porcelain firing becomes stable when furnace temperature, cycle control, and lab workflow are set up together. The Naberthem line covers the critical heat steps of dental production, from fast sintering needs to vacuum porcelain firing. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`furnacePrimaryButtonTextEn`) | TEXT | Explore furnaces ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`furnaceSecondaryButtonTextEn`) | TEXT | Let's plan the workflow together | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`furnaceMetric1ValueEn`) | TEXT | 4 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`furnaceMetric1EmphasisEn`) | TEXT | products | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`furnaceMetric1LabelEn`) | TEXT | sintering and porcelain firing options | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`furnaceMetric2ValueEn`) | TEXT | 1650 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`furnaceMetric2EmphasisEn`) | TEXT | °C | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`furnaceMetric2LabelEn`) | TEXT | LHT 02/17 LB Speed maximum temperature class | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`furnaceMetric3ValueEn`) | TEXT | 1600 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`furnaceMetric3EmphasisEn`) | TEXT | °C | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`furnaceMetric3LabelEn`) | TEXT | LHT 01/16 Turbo Fire fast sintering workflow | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`furnaceMetric4ValueEn`) | TEXT | Press | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`furnaceMetric4EmphasisEn`) | TEXT | / Porcelain | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`furnaceMetric4LabelEn`) | TEXT | Two different laboratory jobs on the VL 01/12 LB line | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`furnaceSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`furnaceSelectorLabelEn`) | TEXT | FURNACE SELECTOR | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`furnaceSelectorTitlePrefixEn`) | TEXT | Sintering, pressing, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`furnaceSelectorTitleEmphasisEn`) | TEXT | porcelain. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`furnaceSelectorSideHtmlEn`) | RICH_TEXT | Dental furnace selection is not just about a single technical value. Zirconia type, restoration volume, press/porcelain needs, and cycle time should be considered together. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`furnaceSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`furnaceFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`furnaceFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`furnaceFeatureEyebrowEn`) | TEXT | NABERTHEM LHT 02/17 LB SPEED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`furnaceFeatureTitlePrefixEn`) | TEXT | For zirconia sintering, | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`furnaceFeatureTitleEmphasisEn`) | TEXT | high-temperature | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Son Kısım) (`furnaceFeatureTitleSuffixEn`) | TEXT | control. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`furnaceFeatureDescriptionHtmlEn`) | RICH_TEXT | The LHT 02/17 LB Speed stands out in the zirconia sintering workflow with its 1650 °C maximum temperature class and large furnace chamber. Its electric lift table and controlled cycle structure help make laboratory production repeatable. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`furnaceFeatureCtaTextEn`) | TEXT | Go to product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`furnaceFeatureSpec1LabelEn`) | TEXT | Maximum temperature | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`furnaceFeatureSpec1ValueEn`) | TEXT | 1650 °C | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`furnaceFeatureSpec2LabelEn`) | TEXT | Application | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`furnaceFeatureSpec2ValueEn`) | TEXT | Zirconia sintering | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`furnaceFeatureSpec3LabelEn`) | TEXT | Structure | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`furnaceFeatureSpec3ValueEn`) | TEXT | Electric lifting table | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`furnaceFeatureSpec4LabelEn`) | TEXT | Category order | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`furnaceFeatureSpec4ValueEn`) | TEXT | 1 | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`furnaceDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`furnaceDetailLabelEn`) | TEXT | SELECTION LOGIC | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`furnaceDetailTitlePrefixEn`) | TEXT | Furnace selection | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`furnaceDetailTitleEmphasisEn`) | TEXT | starts with the material. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`furnaceDetailSideHtmlEn`) | RICH_TEXT | The same furnace logic doesn't apply to zirconia, press ceramic, and porcelain firing. Heat range, cycle time, loading structure, and restoration type should be evaluated together. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`furnaceDetailCard1TitleEn`) | TEXT | Sintering | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`furnaceDetailCard1DescriptionHtmlEn`) | RICH_TEXT | In zirconia restorations, furnace temperature and cycle profile affect strength, color, and dimensional stability. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`furnaceDetailCard2TitleEn`) | TEXT | Fast cycle | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`furnaceDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Fast solutions like Turbo Fire are positioned to shorten delivery time for low-volume crown work. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`furnaceDetailCard3TitleEn`) | TEXT | Press | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`furnaceDetailCard3DescriptionHtmlEn`) | RICH_TEXT | In the press ceramic workflow, the lift table and controlled cycle support a repeatable pressing result. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`furnaceDetailCard4TitleEn`) | TEXT | Porcelain | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`furnaceDetailCard4DescriptionHtmlEn`) | RICH_TEXT | Homogeneous heating and correct cycling determine surface quality in vacuum or normal-atmosphere firings. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`furnaceDetailCalloutTitlePrefixEn`) | TEXT | Zirconia + furnace + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`furnaceDetailCalloutTitleEmphasisEn`) | TEXT | protocol. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`furnaceDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | The right block choice is completed with the right sintering cycle. Evaluate the zirconia disk, milling strategy, and furnace program in the same workflow. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`furnaceDetailCalloutButton1TextEn`) | TEXT | Go to zirconia blocks → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`furnaceDetailCalloutButton2TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`furnaceFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`furnaceFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`furnaceFaqTitleEn`) | TEXT | Frequently asked questions when choosing a dental furnace. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`furnaceFaqSideHtmlEn`) | RICH_TEXT | Key selection points for sintering, press, and porcelain workflow. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`furnaceFaq1QuestionEn`) | TEXT | Which furnaces are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`furnaceFaq1AnswerHtmlEn`) | RICH_TEXT | Naberthem LHT 02/17 LB Speed, Naberthem LHT 01/16 Turbo Fire, Naberthem VL 01/12 LB Press Furnace, and Naberthem VL 01/12 LB Porcelain Furnace are listed. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`furnaceFaq2QuestionEn`) | TEXT | What should be considered when choosing a sintering furnace? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`furnaceFaq2AnswerHtmlEn`) | RICH_TEXT | Zirconia type, number of restorations, maximum temperature, cycle time, furnace chamber volume, and the lab's daily production rhythm should be evaluated together. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`furnaceFaq3QuestionEn`) | TEXT | For which work does Turbo Fire make sense? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`furnaceFaq3AnswerHtmlEn`) | RICH_TEXT | Suitable for laboratories that need fast zirconium oxide sintering, especially those wanting a short-cycle advantage for low-quantity crown jobs. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`furnaceFaq4QuestionEn`) | TEXT | Are press and porcelain furnaces the same thing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`furnaceFaq4AnswerHtmlEn`) | RICH_TEXT | No. Press ceramic and porcelain firing processes have different needs; the VL 01/12 LB line has separate products for these two jobs. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`furnaceFaq5QuestionEn`) | TEXT | Should the zirconia block and furnace be chosen together? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`furnaceFaq5AnswerHtmlEn`) | RICH_TEXT | Yes. If the zirconia block material, sintering protocol, and furnace cycle are not considered together, color, strength, and dimensional stability can vary. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`furnaceFinalTitlePrefixEn`) | TEXT | Let's choose the right furnace for your laboratory | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`furnaceFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`furnaceFinalDescriptionHtmlEn`) | RICH_TEXT | Which zirconia, how many units, what delivery time? With a short conversation, let's clarify the right furnace choice for your sintering, press, or porcelain workflow. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`furnaceFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`furnaceFinalSecondaryButtonTextEn`) | TEXT | Back to furnaces | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`scannerEyebrowTextEn`) | TEXT | ⚡ Scanner selection is based on production volume | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`scannerAnnouncementTextEn`) | TEXT | Compare the difference between the E2, E3, and E4 according to your lab workflow. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`scannerAnnouncementCtaTextEn`) | TEXT | Compare scanners → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`scannerHeroTitlePrefixEn`) | TEXT | Digital production begins | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`scannerHeroTitleEmphasisEn`) | TEXT | with correct scanning. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`scannerHeroDescriptionHtmlEn`) | RICH_TEXT | In the CAD/CAM workflow, the quality of model data directly affects the rest of production. The 3Shape E series meets the lab's scanning needs at three different levels, from tissue scanning to implant bar accuracy and high-volume full-arch scanning. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`scannerPrimaryButtonTextEn`) | TEXT | Review scanners ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`scannerSecondaryButtonTextEn`) | TEXT | Let's match the laboratory together | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`scannerMetric1ValueEn`) | TEXT | 3 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`scannerMetric1EmphasisEn`) | TEXT | products | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`scannerMetric1LabelEn`) | TEXT | E2, E3, and E4 scanner options | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`scannerMetric2ValueEn`) | TEXT | 4 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`scannerMetric2EmphasisEn`) | TEXT | μm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`scannerMetric2LabelEn`) | TEXT | 3Shape E4 precision | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`scannerMetric3ValueEn`) | TEXT | 9 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`scannerMetric3EmphasisEn`) | TEXT | sec | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`scannerMetric3LabelEn`) | TEXT | 3Shape E4 full-arch scanning speed | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`scannerMetric4ValueEn`) | TEXT | 3Shape | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`scannerMetric4EmphasisEn`) | TEXT | E series | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`scannerMetric4LabelEn`) | TEXT | dental laboratory CAD/CAM starting point | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`scannerSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`scannerSelectorLabelEn`) | TEXT | SCANNER SELECTOR | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`scannerSelectorTitlePrefixEn`) | TEXT | Tissue, implant bar, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`scannerSelectorTitleEmphasisEn`) | TEXT | speed. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`scannerSelectorSideHtmlEn`) | RICH_TEXT | When choosing a desktop scanner, the first question is not the model but the workflow. Tissue scanning, implant bar accuracy, and high-volume full-arch scanning require different device tiers. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`scannerSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`scannerFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`scannerFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`scannerFeatureEyebrowEn`) | TEXT | 3SHAPE E4 · 4 μM · 9 SEC | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`scannerFeatureTitlePrefixEn`) | TEXT | Speed and precision | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`scannerFeatureTitleEmphasisEn`) | TEXT | in the same scan. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`scannerFeatureDescriptionHtmlEn`) | RICH_TEXT | The 3Shape E4 is positioned as the most powerful device in the E series, with a four-camera design, 4 μm precision, and 9-second full-arch scanning speed. It stands out for producing fast and precise data in high-volume lab workflows. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`scannerFeatureCtaTextEn`) | TEXT | Go to E4 product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`scannerFeatureSpec1LabelEn`) | TEXT | Accuracy | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`scannerFeatureSpec1ValueEn`) | TEXT | 4 μm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`scannerFeatureSpec2LabelEn`) | TEXT | Full arch | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`scannerFeatureSpec2ValueEn`) | TEXT | 9 sec | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`scannerFeatureSpec3LabelEn`) | TEXT | Cameras | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`scannerFeatureSpec3ValueEn`) | TEXT | 4 | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`scannerFeatureSpec4LabelEn`) | TEXT | Category order | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`scannerFeatureSpec4ValueEn`) | TEXT | 3 | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`scannerDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`scannerDetailLabelEn`) | TEXT | SCANNER SELECTION | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`scannerDetailTitlePrefixEn`) | TEXT | Scanner selection | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`scannerDetailTitleEmphasisEn`) | TEXT | depends on the type of work. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`scannerDetailSideHtmlEn`) | RICH_TEXT | In the dental lab, scan data is the starting point of the design and production process. That's why device selection should be based not only on price but on the type of work and accuracy needs. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`scannerDetailCard1TitleEn`) | TEXT | Tissue scanning | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`scannerDetailCard1DescriptionHtmlEn`) | RICH_TEXT | The E2 is the entry-level option focused on boosting productivity in model and tissue scanning work. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`scannerDetailCard2TitleEn`) | TEXT | Implant bar accuracy | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`scannerDetailCard2DescriptionHtmlEn`) | RICH_TEXT | The E3 is positioned to meet the need for implant bar accuracy and high performance at an affordable cost. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`scannerDetailCard3TitleEn`) | TEXT | High volume | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`scannerDetailCard3DescriptionHtmlEn`) | RICH_TEXT | The E4 stands out in busy lab workflows that require fast full-arch scanning and precision. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`scannerDetailCard4TitleEn`) | TEXT | CAD/CAM connection | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`scannerDetailCard4DescriptionHtmlEn`) | RICH_TEXT | Scan data forms the basis for the design and production steps; compatibility with your existing workflow should be evaluated together. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`scannerDetailCalloutTitlePrefixEn`) | TEXT | Scanning + design + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`scannerDetailCalloutTitleEmphasisEn`) | TEXT | production. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`scannerDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | The desktop scanner is the first link in the dental CAD/CAM chain. Plan your scanner choice together with your milling, zirconia, furnace, and printer workflow. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`scannerDetailCalloutButton1TextEn`) | TEXT | Go to systems → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`scannerDetailCalloutButton2TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`scannerFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`scannerFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`scannerFaqTitleEn`) | TEXT | Frequently asked questions when choosing a desktop scanner. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`scannerFaqSideHtmlEn`) | RICH_TEXT | Key points to consider when deciding between the E2, E3, and E4. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`scannerFaq1QuestionEn`) | TEXT | Which scanners are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`scannerFaq1AnswerHtmlEn`) | RICH_TEXT | The 3Shape E2, E3, and E4 options are positioned according to labs' different scanning speed and precision needs. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`scannerFaq2QuestionEn`) | TEXT | Why choose the 3Shape E2? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`scannerFaq2AnswerHtmlEn`) | RICH_TEXT | Positioned for teams that perform model and tissue scanning and want to increase laboratory productivity. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`scannerFaq3QuestionEn`) | TEXT | What's different about the 3Shape E3? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`scannerFaq3AnswerHtmlEn`) | RICH_TEXT | On the E3 side, the emphasis is on implant bar accuracy and high performance. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`scannerFaq4QuestionEn`) | TEXT | When does the 3Shape E4 make sense? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`scannerFaq4AnswerHtmlEn`) | RICH_TEXT | The E4 stands out in high-volume lab workflows requiring 4 μm precision, 9-second full-arch scanning, and four cameras. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`scannerFaq5QuestionEn`) | TEXT | What should I base my scanner selection on? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`scannerFaq5AnswerHtmlEn`) | RICH_TEXT | Daily scan volume, whether there is implant bar work, full-arch speed expectations, and the existing CAD/CAM workflow should be evaluated together. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`scannerFinalTitlePrefixEn`) | TEXT | Let's choose the right scanner for your laboratory | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`scannerFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`scannerFinalDescriptionHtmlEn`) | RICH_TEXT | Tissue scanning, implant bar accuracy, or a high-volume full-arch workflow? Let's clarify the right choice between E2, E3, and E4 with a short conversation. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`scannerFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`scannerFinalSecondaryButtonTextEn`) | TEXT | Back to scanners | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`spareEyebrowTextEn`) | TEXT | ⚡ Choose the right spare part by device compatibility | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`spareAnnouncementTextEn`) | TEXT | Compare the P16L, Halot Sky, Piocreat C01, and consumable parts based on your usage needs. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`spareAnnouncementCtaTextEn`) | TEXT | See spare parts → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`spareHeroTitlePrefixEn`) | TEXT | Production continuity is protected | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`spareHeroTitleEmphasisEn`) | TEXT | with the right part. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`spareHeroDescriptionHtmlEn`) | RICH_TEXT | Choosing parts for 3D printer maintenance isn't just about the product name. When the device model, screen revision, tank/film compatibility, platform calibration, and the first test print are checked together, production becomes stable again. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`sparePrimaryButtonTextEn`) | TEXT | Browse spare parts ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`spareSecondaryButtonTextEn`) | TEXT | Get compatibility checked | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`spareMetric1ValueEn`) | TEXT | 8 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`spareMetric1EmphasisEn`) | TEXT | products | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`spareMetric1LabelEn`) | TEXT | printer maintenance and spare part options | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`spareMetric2ValueEn`) | TEXT | 16K | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`spareMetric2EmphasisEn`) | TEXT | LCD | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`spareMetric2LabelEn`) | TEXT | MASH P16L monochrome screen replacement part | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`spareMetric3ValueEn`) | TEXT | 800 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`spareMetric3EmphasisEn`) | TEXT | ml | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`spareMetric3LabelEn`) | TEXT | MASH P16L resin tank capacity | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`spareMetric4ValueEn`) | TEXT | 6K | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`spareMetric4EmphasisEn`) | TEXT | Mono | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`spareMetric4LabelEn`) | TEXT | Creality Halot Sky LCD display kit | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`spareSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`spareSelectorLabelEn`) | TEXT | PARTS LIST | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`spareSelectorTitlePrefixEn`) | TEXT | Electronics, build plate, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`spareSelectorTitleEmphasisEn`) | TEXT | tank and film. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`spareSelectorSideHtmlEn`) | RICH_TEXT | The products in this category correspond to different points in the maintenance and service workflow. The mainboard and LCD screen are electronic components; the plate, tank, and film are the printing contact surfaces. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`spareSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`spareFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`spareFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`spareFeatureEyebrowEn`) | TEXT | MASH P16L · 16K LCD · 385 nm | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`spareFeatureTitlePrefixEn`) | TEXT | Micron-level detail begins | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`spareFeatureTitleEmphasisEn`) | TEXT | on the LCD screen. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`spareFeatureDescriptionHtmlEn`) | RICH_TEXT | The MASH P16L 16K monochrome LCD screen supports a high level of detail in dental production with its 9.6-inch panel, 14x19 μm precision, 385 nm UV light compatibility, and 100°C heat resistance. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`spareFeatureCtaTextEn`) | TEXT | Go to LCD screen details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`spareFeatureSpec1LabelEn`) | TEXT | Resolution | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`spareFeatureSpec1ValueEn`) | TEXT | 16K UHD | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`spareFeatureSpec2LabelEn`) | TEXT | Accuracy | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`spareFeatureSpec2ValueEn`) | TEXT | 14x19 μm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`spareFeatureSpec3LabelEn`) | TEXT | Screen | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`spareFeatureSpec3ValueEn`) | TEXT | 9.6 inches | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`spareFeatureSpec4LabelEn`) | TEXT | Light | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`spareFeatureSpec4ValueEn`) | TEXT | 385 nm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`spareDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`spareDetailLabelEn`) | TEXT | SERVICE LOGIC | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`spareDetailTitlePrefixEn`) | TEXT | Part replacement | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`spareDetailTitleEmphasisEn`) | TEXT | ends with calibration. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`spareDetailSideHtmlEn`) | RICH_TEXT | The last step in a spare part replacement is not installation, but verifying that the device can produce stable prints again. The screen, tank film, tray, and resin should be checked together. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`spareDetailCard1TitleEn`) | TEXT | Device compatibility | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`spareDetailCard1DescriptionHtmlEn`) | RICH_TEXT | The device model, part revision, and connection type should be verified before purchase. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`spareDetailCard2TitleEn`) | TEXT | Clean assembly | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`spareDetailCard2DescriptionHtmlEn`) | RICH_TEXT | The LCD screen, film, and tank surface should be cleaned of resin residue and dust before installation. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`spareDetailCard3TitleEn`) | TEXT | First layer | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`spareDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Alignment and first-layer adhesion should be tested after platform and tank replacement. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`spareDetailCard4TitleEn`) | TEXT | Test print | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`spareDetailCard4DescriptionHtmlEn`) | RICH_TEXT | A short test print after replacing electronic or consumable parts reduces production risk. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`spareDetailCalloutTitlePrefixEn`) | TEXT | Spare part + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`spareDetailCalloutTitleEmphasisEn`) | TEXT | technical support. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`spareDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Instead of purchasing the part on its own, check the device model and the printing problem together. The right part, combined with the right installation step, restores stable production again. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`spareDetailCalloutButton1TextEn`) | TEXT | Go to 3D printers → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`spareDetailCalloutButton2TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`spareFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`spareFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`spareFaqTitleEn`) | TEXT | Frequently asked questions when choosing spare parts. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`spareFaqSideHtmlEn`) | RICH_TEXT | Key checkpoints for device compatibility, installation, and test print. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`spareFaq1QuestionEn`) | TEXT | Which products are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`spareFaq1AnswerHtmlEn`) | RICH_TEXT | The MASH P16L mainboard, LCD screen, small/large build plate, resin tank, ACF/FEP film, Piocreat C01 LCD, and Creality Halot Sky LCD screen kit are listed. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`spareFaq2QuestionEn`) | TEXT | What should be checked to avoid getting the wrong part? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`spareFaq2AnswerHtmlEn`) | RICH_TEXT | Device model, part revision, screen/vat size, and connection compatibility should be checked before purchase. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`spareFaq3QuestionEn`) | TEXT | What should be done after replacing the LCD screen? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`spareFaq3AnswerHtmlEn`) | RICH_TEXT | Connections, screen surface, tank film, and exposure test should be checked. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`spareFaq4QuestionEn`) | TEXT | Is calibration required after platform replacement? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`spareFaq4AnswerHtmlEn`) | RICH_TEXT | Yes. Platform alignment and first-layer adhesion should be tested. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`spareFaq5QuestionEn`) | TEXT | What is ACF/FEP film for? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`spareFaq5AnswerHtmlEn`) | RICH_TEXT | A consumable that supports balanced transmission of UV light to the resin and stable layer formation on the underside of the tank. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`spareFinalTitlePrefixEn`) | TEXT | Let's identify the right spare part | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`spareFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`spareFinalDescriptionHtmlEn`) | RICH_TEXT | Share your device model, print issue, and current part revision; let's determine the right product and installation checklist together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`spareFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`spareFinalSecondaryButtonTextEn`) | TEXT | Back to spare parts | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`systemEyebrowTextEn`) | TEXT | ⚡ System products work together | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`systemAnnouncementTextEn`) | TEXT | Compare the Comp Flow and Light Glass workflow for your full-arch composite case. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`systemAnnouncementCtaTextEn`) | TEXT | See systems → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`systemHeroTitlePrefixEn`) | TEXT | In full-arch composite work, | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`systemHeroTitleEmphasisEn`) | TEXT | the system works together. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`systemHeroDescriptionHtmlEn`) | RICH_TEXT | The Trasformer system combines composite material, light transmission, accuracy, and stability in the same restoration workflow. The Comp Flow syringe composite and Light Glass muffle system should be evaluated together with the case plan. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`systemPrimaryButtonTextEn`) | TEXT | Review systems ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`systemSecondaryButtonTextEn`) | TEXT | Ask about case fit | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`systemMetric1ValueEn`) | TEXT | 2 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`systemMetric1EmphasisEn`) | TEXT | products | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`systemMetric1LabelEn`) | TEXT | Comp Flow and Light Glass systems | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`systemMetric2ValueEn`) | TEXT | Full | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`systemMetric2EmphasisEn`) | TEXT | arch | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`systemMetric2LabelEn`) | TEXT | composite restoration workflow | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`systemMetric3ValueEn`) | TEXT | CRS | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`systemMetric3EmphasisEn`) | TEXT | Trasformer | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`systemMetric3LabelEn`) | TEXT | system and material positioned together | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`systemMetric4ValueEn`) | TEXT | 14.654 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`systemMetric4EmphasisEn`) | TEXT | TRY | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`systemMetric4LabelEn`) | TEXT | Light Glass starting price range | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`systemSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`systemSelectorLabelEn`) | TEXT | SYSTEM SELECTOR | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`systemSelectorTitlePrefixEn`) | TEXT | Composite material, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`systemSelectorTitleEmphasisEn`) | TEXT | muffle system. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`systemSelectorSideHtmlEn`) | RICH_TEXT | This category should be thought of as a restoration workflow rather than a single product list. Comp Flow represents the material side, while Light Glass represents the muffle system side. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`systemSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`systemFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`systemFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`systemFeatureEyebrowEn`) | TEXT | TRASFORMER LIGHT GLASS | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`systemFeatureTitlePrefixEn`) | TEXT | In composite restoration, | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`systemFeatureTitleEmphasisEn`) | TEXT | light and stability. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`systemFeatureDescriptionHtmlEn`) | RICH_TEXT | The Trasformer Light Glass Muffle System is designed to support the accuracy, light transmission, and stability that modern digital laboratories need in full-arch composite restorations. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`systemFeatureCtaTextEn`) | TEXT | Go to Light Glass details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`systemFeatureSpec1LabelEn`) | TEXT | Product | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`systemFeatureSpec1ValueEn`) | TEXT | Muffle system | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`systemFeatureSpec2LabelEn`) | TEXT | Application | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`systemFeatureSpec2ValueEn`) | TEXT | Full arch | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`systemFeatureSpec3LabelEn`) | TEXT | Material | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`systemFeatureSpec3ValueEn`) | TEXT | Composite | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`systemFeatureSpec4LabelEn`) | TEXT | Category order | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`systemFeatureSpec4ValueEn`) | TEXT | 2 | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`systemDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`systemDetailLabelEn`) | TEXT | WORKFLOW LOGIC | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`systemDetailTitlePrefixEn`) | TEXT | A system product | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`systemDetailTitleEmphasisEn`) | TEXT | is not a single part. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`systemDetailSideHtmlEn`) | RICH_TEXT | Comp Flow and Light Glass are two parts of the same restoration goal. Material selection, muffle system use, and the case plan should be clarified together. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`systemDetailCard1TitleEn`) | TEXT | Material | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`systemDetailCard1DescriptionHtmlEn`) | RICH_TEXT | Comp Flow is the composite application step within the system; it is selected based on shade and case plan. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`systemDetailCard2TitleEn`) | TEXT | Muffle system | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`systemDetailCard2DescriptionHtmlEn`) | RICH_TEXT | Light Glass is positioned for stability and light transmittance in full-arch composite restorations. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`systemDetailCard3TitleEn`) | TEXT | Case plan | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`systemDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Digital plan, material, and system steps should be considered together in full-arch restorations. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`systemDetailCard4TitleEn`) | TEXT | Laboratory workflow | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`systemDetailCard4DescriptionHtmlEn`) | RICH_TEXT | System products should be applied according to the existing laboratory process and team practice. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`systemDetailCalloutTitlePrefixEn`) | TEXT | Material + system + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`systemDetailCalloutTitleEmphasisEn`) | TEXT | case. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`systemDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | The right product selection in the full-arch composite restoration workflow starts with the case goal. Clarify color, system compatibility, and laboratory process together. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`systemDetailCalloutButton1TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`systemDetailCalloutButton2TextEn`) | TEXT | Go to scanners → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`systemFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`systemFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`systemFaqTitleEn`) | TEXT | Frequently asked questions about system products. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`systemFaqSideHtmlEn`) | RICH_TEXT | The division of roles between Trasformer Comp Flow and Light Glass. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`systemFaq1QuestionEn`) | TEXT | Which products are in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`systemFaq1AnswerHtmlEn`) | RICH_TEXT | Trasformer Comp Flow Syringe Composite and Trasformer Light Glass Muffle System are listed. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`systemFaq2QuestionEn`) | TEXT | What is Comp Flow used for? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`systemFaq2AnswerHtmlEn`) | RICH_TEXT | It is a syringe composite used together with the Light Glass system in the full-arch composite restoration workflow. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`systemFaq3QuestionEn`) | TEXT | What is Light Glass used for? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`systemFaq3AnswerHtmlEn`) | RICH_TEXT | A muffle system targeting accuracy, light transmission, and stability in full-arch composite restorations. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`systemFaq4QuestionEn`) | TEXT | Should these products be considered together? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`systemFaq4AnswerHtmlEn`) | RICH_TEXT | Yes. Comp Flow (the material) and Light Glass (the system step) are evaluated within the same restoration workflow. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`systemFaq5QuestionEn`) | TEXT | What should be checked before purchasing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`systemFaq5AnswerHtmlEn`) | RICH_TEXT | Case type, shade selection, lab process, and system usage steps should be clarified. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`systemFinalTitlePrefixEn`) | TEXT | Let's plan the Trasformer workflow | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`systemFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`systemFinalDescriptionHtmlEn`) | RICH_TEXT | Share your case goal, shade requirement, and lab process; let's clarify Comp Flow and Light Glass usage together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`systemFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`systemFinalSecondaryButtonTextEn`) | TEXT | Back to systems | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`titaniumEyebrowTextEn`) | TEXT | ⚡ Titanium disc selection follows the implant-supported workflow | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`titaniumAnnouncementTextEn`) | TEXT | The MESA Grade 5 ELI disc is evaluated by material, diameter, and CAD/CAM compatibility. | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`titaniumAnnouncementCtaTextEn`) | TEXT | View titanium disc → | 🌐 Duyuru Bandı | Hayır | — |
| 🌐 İngilizce Kategori Başlık (İlk Kısım) (`titaniumHeroTitlePrefixEn`) | TEXT | For implant-supported work, | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Vurgulu Kısım) (`titaniumHeroTitleEmphasisEn`) | TEXT | biocompatible titanium | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık (Son Kısım) (`titaniumHeroTitleSuffixEn`) | TEXT | builds confidence. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Açıklama Metni (`titaniumHeroDescriptionHtmlEn`) | RICH_TEXT | The MESA Grade 5 ELI titanium disc offers high strength and biocompatibility for implant-supported restorations. With its Ø98.5 mm form, it is designed for use in CAD/CAM milling systems. | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`titaniumPrimaryButtonTextEn`) | TEXT | Review titanium disc ↓ | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`titaniumSecondaryButtonTextEn`) | TEXT | Ask about milling compatibility | 🌐 Kategori Girişi | Hayır | — |
| 🌐 İngilizce Metrik 1 - Değer (`titaniumMetric1ValueEn`) | TEXT | 1 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Vurgulu Kısım (`titaniumMetric1EmphasisEn`) | TEXT | product | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 1 - Açıklama (`titaniumMetric1LabelEn`) | TEXT | titanium disc for milling workflows | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Değer (`titaniumMetric2ValueEn`) | TEXT | Grade | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Vurgulu Kısım (`titaniumMetric2EmphasisEn`) | TEXT | 5 ELI | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 2 - Açıklama (`titaniumMetric2LabelEn`) | TEXT | titanium material class | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Değer (`titaniumMetric3ValueEn`) | TEXT | Ø98.5 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Vurgulu Kısım (`titaniumMetric3EmphasisEn`) | TEXT | mm | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 3 - Açıklama (`titaniumMetric3LabelEn`) | TEXT | CAD/CAM disc form | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Değer (`titaniumMetric4ValueEn`) | TEXT | 3.930 | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Vurgulu Kısım (`titaniumMetric4EmphasisEn`) | TEXT | TRY | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Metrik 4 - Açıklama (`titaniumMetric4LabelEn`) | TEXT | starting price range | 🌐 Metrikler | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Numarası (`titaniumSelectorNumberEn`) | TEXT | 01 | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Bölüm Etiketi (`titaniumSelectorLabelEn`) | TEXT | TITANIUM DISC | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (İlk Kısım) (`titaniumSelectorTitlePrefixEn`) | TEXT | Grade 5 ELI, | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Başlık (Vurgulu Kısım) (`titaniumSelectorTitleEmphasisEn`) | TEXT | implant-supported. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Seçici Sağ Yan Açıklama (`titaniumSelectorSideHtmlEn`) | RICH_TEXT | Titanium disc selection should consider material class, disc form, milling compatibility, and implant-supported indication together. | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`titaniumSelectorCardCtaTextEn`) | TEXT | Explore | 🌐 Ürün Seçici | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Numarası (`titaniumFeatureNumberEn`) | TEXT | 02 | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Bölüm Etiketi (`titaniumFeatureLabelEn`) | TEXT | FEATURED | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Kartı Üst Etiket (`titaniumFeatureEyebrowEn`) | TEXT | MESA · GRADE 5 ELI · Ø98.5 MM | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (İlk Kısım) (`titaniumFeatureTitlePrefixEn`) | TEXT | For CAD/CAM milling, | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Başlık (Vurgulu Kısım) (`titaniumFeatureTitleEmphasisEn`) | TEXT | a titanium disc. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Açıklama Metni (`titaniumFeatureDescriptionHtmlEn`) | RICH_TEXT | The MESA Grade 5 ELI is a high-strength titanium disk solution compatible with CAD/CAM systems for implant-supported restorations. The Ø98.5 mm disk form is the key control point of the milling workflow. | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik Buton Metni (`titaniumFeatureCtaTextEn`) | TEXT | Go to product details → | 🌐 Öne Çıkan Ürün | Hayır | — |
| 🌐 İngilizce Özellik 1 - Etiket (`titaniumFeatureSpec1LabelEn`) | TEXT | Material | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 1 - Değer (`titaniumFeatureSpec1ValueEn`) | TEXT | Grade 5 ELI | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Etiket (`titaniumFeatureSpec2LabelEn`) | TEXT | Diameter | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 2 - Değer (`titaniumFeatureSpec2ValueEn`) | TEXT | Ø98.5 mm | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Etiket (`titaniumFeatureSpec3LabelEn`) | TEXT | Application | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 3 - Değer (`titaniumFeatureSpec3ValueEn`) | TEXT | Implant-supported | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Etiket (`titaniumFeatureSpec4LabelEn`) | TEXT | Compatibility | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Özellik 4 - Değer (`titaniumFeatureSpec4ValueEn`) | TEXT | CAD/CAM | 🌐 Teknik Özellikler | Hayır | — |
| 🌐 İngilizce Detay Bölüm Numarası (`titaniumDetailNumberEn`) | TEXT | 03 | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Bölüm Etiketi (`titaniumDetailLabelEn`) | TEXT | SELECTION LOGIC | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (İlk Kısım) (`titaniumDetailTitlePrefixEn`) | TEXT | Titanium disc selection | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Başlık (Vurgulu Kısım) (`titaniumDetailTitleEmphasisEn`) | TEXT | starts with the CAM workflow. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Detay Sağ Yan Açıklama (`titaniumDetailSideHtmlEn`) | RICH_TEXT | Material selection, disc size, holder compatibility, and milling strategy should be evaluated together for implant-supported restorations. | 🌐 Seri ve Detaylar | Hayır | — |
| 🌐 İngilizce Kart 1 - Başlık (`titaniumDetailCard1TitleEn`) | TEXT | Material class | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 1 - Açıklama (`titaniumDetailCard1DescriptionHtmlEn`) | RICH_TEXT | Grade 5 ELI titanium is positioned for implant-supported work that requires high strength and biocompatibility. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Başlık (`titaniumDetailCard2TitleEn`) | TEXT | Disc form | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 2 - Açıklama (`titaniumDetailCard2DescriptionHtmlEn`) | RICH_TEXT | The Ø98.5 mm form is the starting point for compatibility checks with CAD/CAM milling systems. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Başlık (`titaniumDetailCard3TitleEn`) | TEXT | CAM strategy | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 3 - Açıklama (`titaniumDetailCard3DescriptionHtmlEn`) | RICH_TEXT | Milling path, holder compatibility, and disk size affect the restoration result. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Başlık (`titaniumDetailCard4TitleEn`) | TEXT | Case fit | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Kart 4 - Açıklama (`titaniumDetailCard4DescriptionHtmlEn`) | RICH_TEXT | Material and design goals should be validated together for implant-supported restorations. | 🌐 Detay Kartları | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (İlk Kısım) (`titaniumDetailCalloutTitlePrefixEn`) | TEXT | Disc + milling + | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Başlık (Vurgulu Kısım) (`titaniumDetailCalloutTitleEmphasisEn`) | TEXT | implant plan. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Açıklaması (`titaniumDetailCalloutDescriptionHtmlEn`) | RICH_TEXT | Clarify titanium disc selection together with your milling system, CAM software, and implant-supported case plan. | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 1 Metni (`titaniumDetailCalloutButton1TextEn`) | TEXT | Go to systems → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce Çağrı Kutusu Buton 2 Metni (`titaniumDetailCalloutButton2TextEn`) | TEXT | Get technical support → | 🌐 Detay Çağrısı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Numarası (`titaniumFaqNumberEn`) | TEXT | 04 | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Bölüm Etiketi (`titaniumFaqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Ana Başlık (`titaniumFaqTitleEn`) | TEXT | Frequently asked questions when choosing a titanium disc. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce SSS Sağ Yan Açıklama (`titaniumFaqSideHtmlEn`) | RICH_TEXT | Key questions on material, diameter, CAD/CAM compatibility, and use on implants. | 🌐 SSS Başlığı | Hayır | — |
| 🌐 İngilizce Soru 1 (`titaniumFaq1QuestionEn`) | TEXT | Which product is in this category? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 1 (`titaniumFaq1AnswerHtmlEn`) | RICH_TEXT | The MESA Titanium Disk Grade 5 ELI is a titanium disk option positioned for CAD/CAM milling workflows. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 2 (`titaniumFaq2QuestionEn`) | TEXT | What is the MESA Grade 5 ELI used for? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 2 (`titaniumFaq2AnswerHtmlEn`) | RICH_TEXT | A CAD/CAM-compatible titanium disc used for implant-supported restorations. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 3 (`titaniumFaq3QuestionEn`) | TEXT | What is the disk diameter? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 3 (`titaniumFaq3AnswerHtmlEn`) | RICH_TEXT | The Ø98.5 mm form is stated in the product description. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 4 (`titaniumFaq4QuestionEn`) | TEXT | Is it biocompatible? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 4 (`titaniumFaq4AnswerHtmlEn`) | RICH_TEXT | The source description states that it offers high strength and biocompatibility. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Soru 5 (`titaniumFaq5QuestionEn`) | TEXT | What should be checked before purchasing? | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Cevap 5 (`titaniumFaq5AnswerHtmlEn`) | RICH_TEXT | Milling system, holder compatibility, disk size, and implant-supported case plan should be checked together. | 🌐 SSS Soruları | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (İlk Kısım) (`titaniumFinalTitlePrefixEn`) | TEXT | Let's check titanium disc compatibility | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlık (Vurgulu Kısım) (`titaniumFinalTitleEmphasisEn`) | TEXT | together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklama Metni (`titaniumFinalDescriptionHtmlEn`) | RICH_TEXT | Share your milling system, CAM workflow, and implant-supported case type; let's clarify the right disk size and usage plan together. | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Birincil Buton Metni (`titaniumFinalPrimaryButtonTextEn`) | TEXT | Consult an expert — free | 🌐 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış İkincil Buton Metni (`titaniumFinalSecondaryButtonTextEn`) | TEXT | Back to titanium disc | 🌐 Kapanış Çağrısı | Hayır | — |
| 📝 Kart Açıklaması (`washCureSelectorProduct1DescriptionHtml`) | RICH_TEXT | 3D baskı sonrası parçaların yüzeyindeki reçine kalıntılarını temizlemek için konumlanan ultrasonik yıkama cihazı. | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Açıklaması (İngilizce) (`washCureSelectorProduct1DescriptionHtmlEn`) | RICH_TEXT | An ultrasonic washing device designed to clean resin residue from the surface of parts after 3D printing. | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🏷️ Kart Etiketi (`washCureSelectorProduct1Tag`) | TEXT | YIKAMA | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Etiketi (İngilizce) (`washCureSelectorProduct1TagEn`) | TEXT | WASHING | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Etiketi (`washCureSelectorProduct1Spec1Label`) | TEXT | İşlem | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Etiketi (İngilizce) (`washCureSelectorProduct1Spec1LabelEn`) | TEXT | Process | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Değeri (`washCureSelectorProduct1Spec1Value`) | TEXT | Ultrasonik yıkama | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Değeri (İngilizce) (`washCureSelectorProduct1Spec1ValueEn`) | TEXT | Ultrasonic washing | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Etiketi (`washCureSelectorProduct1Spec2Label`) | TEXT | Akış | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Etiketi (İngilizce) (`washCureSelectorProduct1Spec2LabelEn`) | TEXT | Workflow | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Değeri (`washCureSelectorProduct1Spec2Value`) | TEXT | Baskı sonrası temizlik | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Değeri (İngilizce) (`washCureSelectorProduct1Spec2ValueEn`) | TEXT | Post-print cleaning | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Etiketi (`washCureSelectorProduct1Spec3Label`) | TEXT | Kategori | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Etiketi (İngilizce) (`washCureSelectorProduct1Spec3LabelEn`) | TEXT | Category | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Değeri (`washCureSelectorProduct1Spec3Value`) | TEXT | Yıkama | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Değeri (İngilizce) (`washCureSelectorProduct1Spec3ValueEn`) | TEXT | Washing | 🌐 Kart 1 · İngilizce | Hayır | — |
| 📝 Kart Açıklaması (`washCureSelectorProduct2DescriptionHtml`) | RICH_TEXT | 24 LED'li 360° ışık sistemi ve 360-530 nm geniş spektrum desteğiyle dental reçine baskılar için UV post-curing cihazı. | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Açıklaması (İngilizce) (`washCureSelectorProduct2DescriptionHtmlEn`) | RICH_TEXT | A UV post-curing device for dental resin prints, with a 24-LED 360° light system and 360-530 nm wide spectrum support. | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🏷️ Kart Etiketi (`washCureSelectorProduct2Tag`) | TEXT | KÜRLEME | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Etiketi (İngilizce) (`washCureSelectorProduct2TagEn`) | TEXT | CURING | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Etiketi (`washCureSelectorProduct2Spec1Label`) | TEXT | Işık | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Etiketi (İngilizce) (`washCureSelectorProduct2Spec1LabelEn`) | TEXT | Light | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Değeri (`washCureSelectorProduct2Spec1Value`) | TEXT | 360° / 24 LED | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Değeri (İngilizce) (`washCureSelectorProduct2Spec1ValueEn`) | TEXT | 360° / 24 LED | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Etiketi (`washCureSelectorProduct2Spec2Label`) | TEXT | Spektrum | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Etiketi (İngilizce) (`washCureSelectorProduct2Spec2LabelEn`) | TEXT | Spectrum | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Değeri (`washCureSelectorProduct2Spec2Value`) | TEXT | 360-530 nm | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Değeri (İngilizce) (`washCureSelectorProduct2Spec2ValueEn`) | TEXT | 360-530 nm | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Etiketi (`washCureSelectorProduct2Spec3Label`) | TEXT | Kategori | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Etiketi (İngilizce) (`washCureSelectorProduct2Spec3LabelEn`) | TEXT | Category | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Değeri (`washCureSelectorProduct2Spec3Value`) | TEXT | Kürleme | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Değeri (İngilizce) (`washCureSelectorProduct2Spec3ValueEn`) | TEXT | Curing | 🌐 Kart 2 · İngilizce | Hayır | — |
| 📝 Kart Açıklaması (`washCureSelectorProduct3DescriptionHtml`) | RICH_TEXT | Reçine 3D baskılar için yıkama ve UV kürleme adımlarını tek post-process akışında toplayan cihaz. | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Açıklaması (İngilizce) (`washCureSelectorProduct3DescriptionHtmlEn`) | RICH_TEXT | A device that combines washing and UV curing for resin 3D prints in a single post-processing workflow . | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🏷️ Kart Etiketi (`washCureSelectorProduct3Tag`) | TEXT | YIKAMA + KÜRLEME | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Etiketi (İngilizce) (`washCureSelectorProduct3TagEn`) | TEXT | WASHING + CURING | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Etiketi (`washCureSelectorProduct3Spec1Label`) | TEXT | İşlem | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Etiketi (İngilizce) (`washCureSelectorProduct3Spec1LabelEn`) | TEXT | Process | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 1 Değeri (`washCureSelectorProduct3Spec1Value`) | TEXT | Yıkama + kürleme | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 1 Değeri (İngilizce) (`washCureSelectorProduct3Spec1ValueEn`) | TEXT | Washing + curing | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Etiketi (`washCureSelectorProduct3Spec2Label`) | TEXT | UV | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Etiketi (İngilizce) (`washCureSelectorProduct3Spec2LabelEn`) | TEXT | UV | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 2 Değeri (`washCureSelectorProduct3Spec2Value`) | TEXT | 365 / 405 nm | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 2 Değeri (İngilizce) (`washCureSelectorProduct3Spec2ValueEn`) | TEXT | 365 / 405 nm | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Etiketi (`washCureSelectorProduct3Spec3Label`) | TEXT | Kategori | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Etiketi (İngilizce) (`washCureSelectorProduct3Spec3LabelEn`) | TEXT | Category | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔧 Özellik 3 Değeri (`washCureSelectorProduct3Spec3Value`) | TEXT | Post-process | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Özellik 3 Değeri (İngilizce) (`washCureSelectorProduct3Spec3ValueEn`) | TEXT | Post-processing | 🌐 Kart 3 · İngilizce | Hayır | — |
| 📋 Sütun 1 Başlığı (`washCureSelectorCompareColumn1Title`) | TEXT | Akış | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Sütun 1 Başlığı (İngilizce) (`washCureSelectorCompareColumn1TitleEn`) | TEXT | Workflow | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Sütun 2 Başlığı (`washCureSelectorCompareColumn2Title`) | TEXT | Yıkama | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Sütun 2 Başlığı (İngilizce) (`washCureSelectorCompareColumn2TitleEn`) | TEXT | Washing | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Sütun 3 Başlığı (`washCureSelectorCompareColumn3Title`) | TEXT | Kürleme | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Sütun 3 Başlığı (İngilizce) (`washCureSelectorCompareColumn3TitleEn`) | TEXT | Curing | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Sütun 4 Başlığı (`washCureSelectorCompareColumn4Title`) | TEXT | Birlikte | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Sütun 4 Başlığı (İngilizce) (`washCureSelectorCompareColumn4TitleEn`) | TEXT | Together | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Satır 1 Başlığı (`washCureSelectorCompareRow1Label`) | TEXT | Amaç | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 1 Başlığı (İngilizce) (`washCureSelectorCompareRow1LabelEn`) | TEXT | Purpose | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 1 · Ürün 1 Değeri (`washCureSelectorCompareRow1Value1`) | RICH_TEXT | Baskı sonrası yüzey temizliği | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 1 · Ürün 1 Değeri (İngilizce) (`washCureSelectorCompareRow1Value1En`) | RICH_TEXT | Post-print surface cleaning | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 1 · Ürün 2 Değeri (`washCureSelectorCompareRow1Value2`) | RICH_TEXT | Mekanik değerleri tamamlamak | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 1 · Ürün 2 Değeri (İngilizce) (`washCureSelectorCompareRow1Value2En`) | RICH_TEXT | Completing the mechanical values | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 1 · Ürün 3 Değeri (`washCureSelectorCompareRow1Value3`) | RICH_TEXT | Yazıcı, reçine ve post-process uyumu | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 1 · Ürün 3 Değeri (İngilizce) (`washCureSelectorCompareRow1Value3En`) | RICH_TEXT | Printer, resin, and post-process compatibility | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Satır 2 Başlığı (`washCureSelectorCompareRow2Label`) | TEXT | Cihaz | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 2 Başlığı (İngilizce) (`washCureSelectorCompareRow2LabelEn`) | TEXT | Device | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 2 · Ürün 1 Değeri (`washCureSelectorCompareRow2Value1`) | RICH_TEXT | Mash W1E Ultrasonik Yıkama | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 2 · Ürün 1 Değeri (İngilizce) (`washCureSelectorCompareRow2Value1En`) | RICH_TEXT | Mash W1E Ultrasonic Washing | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 2 · Ürün 2 Değeri (`washCureSelectorCompareRow2Value2`) | RICH_TEXT | Mash C1E UV Kürleme | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 2 · Ürün 2 Değeri (İngilizce) (`washCureSelectorCompareRow2Value2En`) | RICH_TEXT | Mash C1E UV Curing | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 2 · Ürün 3 Değeri (`washCureSelectorCompareRow2Value3`) | RICH_TEXT | W1E + C1E birlikte planlanır | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 2 · Ürün 3 Değeri (İngilizce) (`washCureSelectorCompareRow2Value3En`) | RICH_TEXT | W1E + C1E planned together | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📋 Satır 3 Başlığı (`washCureSelectorCompareRow3Label`) | TEXT | Kontrol | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 3 Başlığı (İngilizce) (`washCureSelectorCompareRow3LabelEn`) | TEXT | Control | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 3 · Ürün 1 Değeri (`washCureSelectorCompareRow3Value1`) | RICH_TEXT | Fazla reçine kalıntısını azaltmak | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 3 · Ürün 1 Değeri (İngilizce) (`washCureSelectorCompareRow3Value1En`) | RICH_TEXT | Reducing excess resin residue | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 3 · Ürün 2 Değeri (`washCureSelectorCompareRow3Value2`) | RICH_TEXT | UV ışıkla son dayanımı desteklemek | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 3 · Ürün 2 Değeri (İngilizce) (`washCureSelectorCompareRow3Value2En`) | RICH_TEXT | Supporting final strength with UV light | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Satır 3 · Ürün 3 Değeri (`washCureSelectorCompareRow3Value3`) | RICH_TEXT | Reçine protokolüne göre süre ve işlem akışı | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Satır 3 · Ürün 3 Değeri (İngilizce) (`washCureSelectorCompareRow3Value3En`) | RICH_TEXT | Duration and workflow according to the resin protocol | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 📝 Tablo Altı Açıklaması (`washCureSelectorCompareNoteHtml`) | RICH_TEXT | Yıkama ve kürleme cihazını iş akışınıza göre değerlendirmeniz için ürün bilgileri tek ekranda karşılaştırılır. | 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Tablo Altı Açıklaması (İngilizce) (`washCureSelectorCompareNoteHtmlEn`) | RICH_TEXT | Product information is compared on a single screen to help you evaluate the washing and curing device based on your workflow. | 🌐 Karşılaştırma Tablosu | Hayır | — |
| 👁️ Mash W1E Kartını Göster (`washCureSelectorProduct1Visible`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Mash C1E Kartını Göster (`washCureSelectorProduct2Visible`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Creality UW-03 Kartını Göster (`washCureSelectorProduct3Visible`) | BOOLEAN | true | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 👁️ Karşılaştırma Tablosunu Göster (`washCureSelectorCompareVisible`) | BOOLEAN | false | 👁️ Ürün Kartı Görünürlüğü | Hayır | — |
| 📝 Ana Sayfa Adı (`washCureBreadcrumbHomeLabel`) | TEXT | Ana sayfa | 📝 Kategori Girişi | Hayır | — |
| 🌐 Ana Sayfa Adı (İngilizce) (`washCureBreadcrumbHomeLabelEn`) | TEXT | Home | 🌐 Kategori Girişi | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`washCureBreadcrumbHomeHref`) | TEXT | / | 📝 Kategori Girişi | Hayır | — |
| 📝 Üst Kategori Adı (`washCureBreadcrumbParentLabel`) | TEXT | Ürünler | 📝 Kategori Girişi | Hayır | — |
| 🌐 Üst Kategori Adı (İngilizce) (`washCureBreadcrumbParentLabelEn`) | TEXT | Products | 🌐 Kategori Girişi | Hayır | — |
| 🔗 Üst Kategori Bağlantısı (`washCureBreadcrumbParentHref`) | TEXT | /search | 📝 Kategori Girişi | Hayır | — |
| 📝 Geçerli Kategori Adı (`washCureBreadcrumbCurrentLabel`) | TEXT | Yıkama Kürleme Cihazları | 📝 Kategori Girişi | Hayır | — |
| 🌐 Geçerli Kategori Adı (İngilizce) (`washCureBreadcrumbCurrentLabelEn`) | TEXT | Wash & Cure Devices | 🌐 Kategori Girişi | Hayır | — |
| 📝 Kart Başlığı (`washCureSelectorProduct1Title`) | TEXT | Mash W1E Ultrasonik Yıkama Cihazı | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Başlığı (İngilizce) (`washCureSelectorProduct1TitleEn`) | TEXT | Mash W1E Ultrasonic Washing Device | 🌐 Kart 1 · İngilizce | Hayır | — |
| 🔗 Ürün Bağlantısı (`washCureSelectorProduct1Href`) | TEXT | /mash-w1e-ultrasonik-yikama-cihazi | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🖼️ Kart Görseli (`washCureSelectorProduct1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🖼️ Görsel Alt Metni (`washCureSelectorProduct1ImageAlt`) | TEXT | Mash W1E ultrasonik yıkama cihazı | 🧽 Kart 1 · Yıkama (Elle Düzenleme) | Hayır | — |
| 🌐 Görsel Alt Metni (İngilizce) (`washCureSelectorProduct1ImageAltEn`) | TEXT | Mash W1E ultrasonic washing device | 🌐 Kart 1 · İngilizce | Hayır | — |
| 📝 Kart Başlığı (`washCureSelectorProduct2Title`) | TEXT | Mash C1E UV Kürleme Cihazı | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Başlığı (İngilizce) (`washCureSelectorProduct2TitleEn`) | TEXT | Mash C1E UV Curing Device | 🌐 Kart 2 · İngilizce | Hayır | — |
| 🔗 Ürün Bağlantısı (`washCureSelectorProduct2Href`) | TEXT | /mash-c1e-uv-kurleme-cihazi | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🖼️ Kart Görseli (`washCureSelectorProduct2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🖼️ Görsel Alt Metni (`washCureSelectorProduct2ImageAlt`) | TEXT | Mash C1E UV kürleme cihazı | 💡 Kart 2 · Kürleme (Elle Düzenleme) | Hayır | — |
| 🌐 Görsel Alt Metni (İngilizce) (`washCureSelectorProduct2ImageAltEn`) | TEXT | Mash C1E UV curing device | 🌐 Kart 2 · İngilizce | Hayır | — |
| 📝 Kart Başlığı (`washCureSelectorProduct3Title`) | TEXT | Creality Wash&Cure UW-03 | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Kart Başlığı (İngilizce) (`washCureSelectorProduct3TitleEn`) | TEXT | Creality Wash&Cure UW-03 | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔗 Ürün Bağlantısı (`washCureSelectorProduct3Href`) | TEXT | /creality-washcure-uw-02 | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🖼️ Kart Görseli (`washCureSelectorProduct3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🖼️ Görsel Alt Metni (`washCureSelectorProduct3ImageAlt`) | TEXT | Creality Wash&Cure UW-03 | 🧪 Kart 3 · Birleşik Cihaz (Elle Düzenleme) | Hayır | — |
| 🌐 Görsel Alt Metni (İngilizce) (`washCureSelectorProduct3ImageAltEn`) | TEXT | Creality Wash&Cure UW-03 | 🌐 Kart 3 · İngilizce | Hayır | — |
| 🔄 Kartları Canlı Ürünlerden Doldur (`washCureSelectorUseLiveProducts`) | BOOLEAN | true | 🛍️ Kart Bölümü Başlığı | Hayır | Açıksa Canlı Ürün Listesindeki ilk 3 ürün kartlara bağlanır. Kapalıysa aşağıdaki elle düzenlenen kart içerikleri kullanılır. |
| ↕️ Kategori Girişi Sırası (`heroOrder`) | NUMBER | 1 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| ↕️ Ürünler Bölümü Sırası (`selectorOrder`) | NUMBER | 2 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| ↕️ Ürün Seçimi Bölümü Sırası (`featureOrder`) | NUMBER | 3 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| ↕️ Seçim Rehberi Bölümü Sırası (`detailOrder`) | NUMBER | 4 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| ↕️ Sıkça Sorulanlar Bölümü Sırası (`faqOrder`) | NUMBER | 5 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| ↕️ Kapanış Çağrısı Bölümü Sırası (`finalCtaOrder`) | NUMBER | 6 | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Duyuru Bandını Göster (`showAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Kategori Girişini Göster (`showHero`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Ürünler Bölümünü Göster (`showSelector`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Ürün Seçimi Bölümünü Göster (`showFeature`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Seçim Rehberini Göster (`showDetail`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Sıkça Sorulanları Göster (`showFaq`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`showFinalCta`) | BOOLEAN | true | 👁️ Görünürlük ve Bölüm Sırası | Hayır | — |
| 📝 Ana Sayfa Bağlantı Metni (`breadcrumbHomeLabel`) | TEXT | Ana sayfa | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Ana Sayfa Bağlantı Metni (`breadcrumbHomeLabelEn`) | TEXT | Home | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`breadcrumbHomeHref`) | TEXT | / | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 📝 Ürünler Bağlantı Metni (`breadcrumbParentLabel`) | TEXT | Ürünler | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Ürünler Bağlantı Metni (`breadcrumbParentLabelEn`) | TEXT | Products | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Duyuru Vurgu Metni (`eyebrowText`) | TEXT | Yeni kategoriyi keşfedin | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Duyuru Vurgu Metni (`eyebrowTextEn`) | TEXT | Discover this category | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Duyuru Açıklama Metni (`announcementText`) | TEXT | İhtiyacınıza uygun ürünleri inceleyin. | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`announcementTextEn`) | TEXT | Explore products for your needs. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Duyuru Buton Metni (`announcementCtaText`) | TEXT | Ürünlere git → | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`announcementCtaTextEn`) | TEXT | Browse products → | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Duyuru Bağlantısı (`announcementHref`) | TEXT | #kategori-urunleri | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 📝 Kategori Giriş Açıklaması (`heroDescriptionHtml`) | RICH_TEXT | Bu kategorideki ürünleri inceleyin ve ihtiyacınıza uygun seçeneği bulun. | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Giriş Açıklaması (`heroDescriptionHtmlEn`) | RICH_TEXT | Explore the products in this category and find the right option for your needs. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Birincil Buton Metni (`primaryButtonText`) | TEXT | Ürünleri incele ↓ | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`primaryButtonTextEn`) | TEXT | Browse products ↓ | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Birincil Buton Bağlantısı (`primaryButtonHref`) | TEXT | #kategori-urunleri | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 📝 İkincil Buton Metni (`secondaryButtonText`) | TEXT | Ekibe danışın | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`secondaryButtonTextEn`) | TEXT | Ask our team | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 İkincil Buton Bağlantısı (`secondaryButtonHref`) | TEXT | /pages/iletisim | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 📝 Bölüm Numarası (`selectorNumber`) | TEXT | 01 | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Bölüm Numarası (`selectorNumberEn`) | TEXT | 01 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Etiketi (`selectorLabel`) | TEXT | KATEGORİ ÜRÜNLERİ | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`selectorLabelEn`) | TEXT | CATEGORY PRODUCTS | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Başlığı (`selectorTitlePrefix`) | TEXT | Ürünleri | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`selectorTitlePrefixEn`) | TEXT | Explore the | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Vurgulu Başlık (`selectorTitleEmphasis`) | TEXT | inceleyin | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık (`selectorTitleEmphasisEn`) | TEXT | products | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Yan Açıklaması (`selectorSideHtml`) | RICH_TEXT | Ürünlerin özelliklerini inceleyin ve seçenekleri karşılaştırın. | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Bölüm Yan Açıklaması (`selectorSideHtmlEn`) | RICH_TEXT | Review product details and compare the available options. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Ürün Kartı Buton Metni (`selectorCardCtaText`) | TEXT | Ürünü incele | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Ürün Kartı Buton Metni (`selectorCardCtaTextEn`) | TEXT | View product | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Ürün Yoksa Gösterilecek Metin (`selectorEmptyMessageHtml`) | RICH_TEXT | Bu kategoride henüz ürün bulunmuyor. | 🛍️ Kategori Ürünleri | Hayır | — |
| 🌐 İngilizce Ürün Yoksa Gösterilecek Metin (`selectorEmptyMessageHtmlEn`) | RICH_TEXT | There are no products in this category yet. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Numarası (`featureNumber`) | TEXT | 02 | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Bölüm Numarası (`featureNumberEn`) | TEXT | 02 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Etiketi (`featureLabel`) | TEXT | ÜRÜN SEÇİMİ | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`featureLabelEn`) | TEXT | CHOOSING A PRODUCT | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Üst Etiket (`featureEyebrow`) | TEXT | İHTİYACINIZA GÖRE | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Üst Etiket (`featureEyebrowEn`) | TEXT | FOR YOUR NEEDS | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Başlığı (`featureTitlePrefix`) | TEXT | Size uygun | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`featureTitlePrefixEn`) | TEXT | Find the right | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Vurgulu Başlık (`featureTitleEmphasis`) | TEXT | seçeneği bulun | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık (`featureTitleEmphasisEn`) | TEXT | option | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Açıklaması (`featureDescriptionHtml`) | RICH_TEXT | Ürün detaylarını ve teknik bilgileri inceleyerek seçenekleri ihtiyacınıza göre değerlendirin. | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Bölüm Açıklaması (`featureDescriptionHtmlEn`) | RICH_TEXT | Review product details and technical information to compare options for your needs. | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Buton Bağlantısı (`featureHref`) | TEXT | /pages/iletisim | ⭐ Ürün Seçimi | Hayır | — |
| 📝 Buton Metni (`featureCtaText`) | TEXT | Ekibe danışın | ⭐ Ürün Seçimi | Hayır | — |
| 🌐 İngilizce Buton Metni (`featureCtaTextEn`) | TEXT | Ask our team | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Numarası (`detailNumber`) | TEXT | 03 | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Bölüm Numarası (`detailNumberEn`) | TEXT | 03 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Etiketi (`detailLabel`) | TEXT | NASIL SEÇİLİR? | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`detailLabelEn`) | TEXT | HOW TO CHOOSE | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Başlığı (`detailTitlePrefix`) | TEXT | Karar verirken | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`detailTitlePrefixEn`) | TEXT | What to | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Vurgulu Başlık (`detailTitleEmphasis`) | TEXT | nelere bakmalı? | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık (`detailTitleEmphasisEn`) | TEXT | consider | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Yan Açıklaması (`detailSideHtml`) | RICH_TEXT | Ürün sayfalarındaki özellikleri, kullanım amacınızı ve ihtiyaç duyduğunuz desteği birlikte değerlendirin. | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Bölüm Yan Açıklaması (`detailSideHtmlEn`) | RICH_TEXT | Consider product specifications, your intended use, and the support you may need. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 1 Numarası (`detailCard1Number`) | TEXT | 01 | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 1 Numarası (`detailCard1NumberEn`) | TEXT | 01 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 1 Başlığı (`detailCard1Title`) | TEXT | Kullanım amacınızı belirleyin | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 1 Başlığı (`detailCard1TitleEn`) | TEXT | Define your intended use | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 1 Açıklaması (`detailCard1DescriptionHtml`) | RICH_TEXT | Ürünü hangi iş veya ihtiyaç için kullanacağınızı belirleyerek seçenekleri daraltın. | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 1 Açıklaması (`detailCard1DescriptionHtmlEn`) | RICH_TEXT | Narrow down the options by identifying the task or need the product will serve. | 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Kart 1 Görünsün (`detailWhyCard1Visible`) | BOOLEAN | true | 📋 Seçim Rehberi | Hayır | — |
| 📝 Kart 2 Numarası (`detailCard2Number`) | TEXT | 02 | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 2 Numarası (`detailCard2NumberEn`) | TEXT | 02 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 2 Başlığı (`detailCard2Title`) | TEXT | Ürün özelliklerini karşılaştırın | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 2 Başlığı (`detailCard2TitleEn`) | TEXT | Compare product details | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 2 Açıklaması (`detailCard2DescriptionHtml`) | RICH_TEXT | Teknik özellikleri ve ürün açıklamalarını karşılaştırarak size uyan seçeneği değerlendirin. | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 2 Açıklaması (`detailCard2DescriptionHtmlEn`) | RICH_TEXT | Compare specifications and descriptions to assess which option suits you. | 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Kart 2 Görünsün (`detailWhyCard2Visible`) | BOOLEAN | true | 📋 Seçim Rehberi | Hayır | — |
| 📝 Kart 3 Numarası (`detailCard3Number`) | TEXT | 03 | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 3 Numarası (`detailCard3NumberEn`) | TEXT | 03 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 3 Başlığı (`detailCard3Title`) | TEXT | Gerekirse destek alın | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 3 Başlığı (`detailCard3TitleEn`) | TEXT | Ask for help if needed | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kart 3 Açıklaması (`detailCard3DescriptionHtml`) | RICH_TEXT | Kararsız kaldığınız noktaları ekibimize iletip ürün seçimi konusunda destek alın. | 📋 Seçim Rehberi | Hayır | — |
| 🌐 İngilizce Kart 3 Açıklaması (`detailCard3DescriptionHtmlEn`) | RICH_TEXT | Contact our team if you need help choosing between the available options. | 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Kart 3 Görünsün (`detailWhyCard3Visible`) | BOOLEAN | true | 📋 Seçim Rehberi | Hayır | — |
| 📝 Bölüm Numarası (`faqNumber`) | TEXT | 04 | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Bölüm Numarası (`faqNumberEn`) | TEXT | 04 | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Etiketi (`faqLabel`) | TEXT | SIKÇA SORULAN SORULAR | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`faqLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Başlığı (`faqTitle`) | TEXT | Merak edilenler | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`faqTitleEn`) | TEXT | Common questions | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Bölüm Yan Açıklaması (`faqSideHtml`) | RICH_TEXT | Aradığınız yanıtı bulamazsanız ekibimizle iletişime geçebilirsiniz. | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Bölüm Yan Açıklaması (`faqSideHtmlEn`) | RICH_TEXT | If you can't find the answer, get in touch with our team. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Soru 1 (`faq1Question`) | TEXT | Ürünleri nasıl karşılaştırabilirim? | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Soru 1 (`faq1QuestionEn`) | TEXT | How can I compare products? | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yanıt 1 (`faq1AnswerHtml`) | RICH_TEXT | Ürün kartından ürün detayına geçerek teknik özellikleri ve açıklamaları karşılaştırabilirsiniz. | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Yanıt 1 (`faq1AnswerHtmlEn`) | RICH_TEXT | Open a product page from its card to review and compare specifications and descriptions. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Soru 2 (`faq2Question`) | TEXT | Hangi ürünün bana uygun olduğunu nasıl öğrenebilirim? | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Soru 2 (`faq2QuestionEn`) | TEXT | How do I find the right product for me? | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yanıt 2 (`faq2AnswerHtml`) | RICH_TEXT | Kullanım amacınızı ve ihtiyaçlarınızı belirleyip ürün detaylarını inceleyin. Yardım için ekibimize danışabilirsiniz. | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Yanıt 2 (`faq2AnswerHtmlEn`) | RICH_TEXT | Start with your intended use and needs, then review the product details. You can contact our team for help. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Soru 3 (`faq3Question`) | TEXT | Ürünlerle ilgili ek bilgi alabilir miyim? | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Soru 3 (`faq3QuestionEn`) | TEXT | Can I get more information about a product? | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yanıt 3 (`faq3AnswerHtml`) | RICH_TEXT | Ürün sayfasındaki bilgileri inceleyebilir veya sorularınız için ekibimizle iletişime geçebilirsiniz. | ❓ Sıkça Sorulan Sorular | Hayır | — |
| 🌐 İngilizce Yanıt 3 (`faq3AnswerHtmlEn`) | RICH_TEXT | Review the information on the product page or contact our team with any questions. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kapanış Başlığı (`finalTitlePrefix`) | TEXT | Karar vermekte | 📣 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Başlığı (`finalTitlePrefixEn`) | TEXT | Need help | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Vurgulu Kapanış Başlığı (`finalTitleEmphasis`) | TEXT | yardıma mı ihtiyacınız var? | 📣 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Vurgulu Kapanış Başlığı (`finalTitleEmphasisEn`) | TEXT | choosing? | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kapanış Açıklaması (`finalDescriptionHtml`) | RICH_TEXT | İhtiyacınızı paylaşın; ekibimiz size uygun seçenekleri değerlendirmenize yardımcı olsun. | 📣 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Kapanış Açıklaması (`finalDescriptionHtmlEn`) | RICH_TEXT | Tell us what you need and our team can help you review the available options. | 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Birincil Buton Metni (`finalPrimaryButtonText`) | TEXT | Ekibe danışın | 📣 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`finalPrimaryButtonTextEn`) | TEXT | Talk to our team | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Birincil Buton Bağlantısı (`finalPrimaryButtonHref`) | TEXT | /pages/iletisim | 📣 Kapanış Çağrısı | Hayır | — |
| 📝 İkincil Buton Metni (`finalSecondaryButtonText`) | TEXT | Ürünleri incele | 📣 Kapanış Çağrısı | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`finalSecondaryButtonTextEn`) | TEXT | Browse products | 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 İkincil Buton Bağlantısı (`finalSecondaryButtonHref`) | TEXT | #kategori-urunleri | 📣 Kapanış Çağrısı | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel Rengi (`panelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 🔗 Ürünler Bağlantısı (`breadcrumbParentHref`) | TEXT | /search | 📢 Duyuru ve Kategori Girişi | Hayır | — |
| 🌐 İngilizce Kategori Başlık Sonu (`resinHeroTitleSuffixEn`) | TEXT | Boş metin | 📝 Kategori Girişi | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
