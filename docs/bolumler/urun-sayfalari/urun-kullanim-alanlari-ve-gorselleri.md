---
title: "Ürün Kullanım Alanları ve Görselleri"
description: "3Mash temasında Ürün Kullanım Alanları ve Görselleri adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Kullanım Alanları ve Görselleri

## Bu bölümde

- Yapılandırmada kayıtlı 81 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Kullanım Alanları ve Görselleri** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📦 Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | — |
| 🔢 Bölüm Numarası (`sectionIndex`) | TEXT | 03 | 📝 Bölüm Başlığı | Hayır | Sarı kutudaki numara (Örn: 03) |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | UYGULAMA ALANLARI | 📝 Bölüm Başlığı | Hayır | Numaranın yanındaki büyük harf etiket |
| 📝 Bölüm Başlığı (`titleHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı | Hayır | Bölümün sol büyük h2 başlığı |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı | Hayır | Başlığın sağındaki açıklama paragrafı |
| 🖼️ Görsel 1 (`photo1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Fotoğraf şeridindeki 1. kart görseli |
| 📝 Görsel 1 Başlığı (`photo1Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Görselin altındaki kalın başlık (Örn: Geçici & Daimi Kron) |
| 📝 Görsel 1 Açıklaması (`photo1Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Başlığın altındaki açıklama metni |
| 🖼️ Görsel 2 (`photo2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | — |
| 📝 Görsel 2 Başlığı (`photo2Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Örn: Hassas Model Üretimi |
| 📝 Görsel 2 Açıklaması (`photo2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | — |
| 🖼️ Görsel 3 (`photo3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | — |
| 📝 Görsel 3 Başlığı (`photo3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Örn: Biyouyumlu Splint |
| 📝 Görsel 3 Açıklaması (`photo3Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | — |
| 🏷️ Kart 1 Üst Etiketi (`cardEyebrow`) | TEXT | KULLANIM ALANLARI | 📋 Kullanım Kartı 1 | Hayır | Küçük büyük harf etiket (Örn: KULLANIM ALANLARI) |
| 📝 Kart 1 Başlığı (`cardTitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | Kartın h3 başlığı |
| 📝 Kart 1 Maddesi 1 (`bullet1Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | Örn: Geçici kron ve köprü |
| 📝 Kart 1 Maddesi 2 (`bullet2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | — |
| 📝 Kart 1 Maddesi 3 (`bullet3Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | — |
| 📝 Kart 1 Maddesi 4 (`bullet4Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | — |
| 📝 Kart 1 Maddesi 5 (`bullet5Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | — |
| 📝 Kart 1 Maddesi 6 (`bullet6Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | — |
| 📝 Kart 1 Alt Notu (`cardNote`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 | Hayır | Listenin altındaki küçük not metni |
| 🏷️ Cihazlar Üst Etiketi (`devicesEyebrow`) | TEXT | CİHAZ UYUMLULUĞU | 🧩 Cihaz Uyumluluğu | Hayır | Örn: CİHAZ UYUMLULUĞU |
| 📝 Cihazlar Başlığı (`devicesTitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu | Hayır | h3 başlığı |
| 📝 Cihazlar Açıklaması (`devicesTextHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu | Hayır | Başlığın altındaki p açıklama metni |
| 🏷️ Cihaz ve Marka Etiketleri (`devicesChips`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu | Hayır | Örn: Asiga, Phrozen, Creality, Elegoo, HeyGears |
| 🔢 Ekosistem Bölüm Numarası (`ecoIndex`) | TEXT | 04 | 🌐 Tarama Ekosistemi | Hayır | Sarı kutudaki numara (Örn: 04) |
| 🏷️ Ekosistem Etiketi (`ecoLabel`) | TEXT | TARAMA EKOSİSTEMİ | 🌐 Tarama Ekosistemi | Hayır | Numaranın yanındaki büyük harf etiket (Örn: TARAMA EKOSİSTEMİ) |
| 📝 Ekosistem Başlığı (`ecoTitleHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi | Hayır | tmpdt-dev içindeki h3 başlığı |
| 📝 Ekosistem Açıklaması (`ecoTextHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi | Hayır | h3 başlığının altındaki p açıklama metni |
| 🏷️ Ekosistem Marka Etiketleri (`ecoChips`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi | Hayır | tmpdt-chipwrap içindeki span çipler. Örn: 3Shape Trios, Medit i700, Cerec Omnicam |
| 📝 Ana Buton Metni (`ecoButton1Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | tmpdt-dev-actions içindeki ana buton metni |
| 🔗 Ana Buton Linki (`ecoButton1Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | Ana butonun href adresi |
| 📝 İkinci Buton Metni (`ecoButton2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | tmpdt-btn.tmpdt-line çerçeveli buton metni |
| 🔗 İkinci Buton Linki (`ecoButton2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | Çerçeveli butonun href adresi |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 🧩 Ürün Şablonu JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | CRS Composite kaynak yapısındaki reusable template datası. Boş bırakılırsa ürünün varsayılan şablon datası kullanılır. |
| 🖼️ Görsel 1 Alternatif Metni (`photo1Alt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Erişilebilir görsel açıklaması. Boşsa ürün verisindeki metin korunur. |
| 🖼️ Görsel 2 Alternatif Metni (`photo2Alt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Erişilebilir görsel açıklaması. Boşsa ürün verisindeki metin korunur. |
| 🖼️ Görsel 3 Alternatif Metni (`photo3Alt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri | Hayır | Erişilebilir görsel açıklaması. Boşsa ürün verisindeki metin korunur. |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | APPLICATION AREAS | 📝 Bölüm Başlığı / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Bölüm Başlığı (`titleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 1 Başlığı (`photo1TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 1 Açıklaması (`photo1TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 1 Alternatif Metni (`photo1AltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 2 Başlığı (`photo2TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 2 Açıklaması (`photo2TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 2 Alternatif Metni (`photo2AltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 3 Başlığı (`photo3TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 3 Açıklaması (`photo3TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Görsel 3 Alternatif Metni (`photo3AltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Uygulama Görselleri / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Üst Etiketi (`cardEyebrowEn`) | TEXT | APPLICATION AREAS | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Başlığı (`cardTitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 1 (`bullet1TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 2 (`bullet2TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 3 (`bullet3TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 4 (`bullet4TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 5 (`bullet5TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Maddesi 6 (`bullet6TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Kart 1 Alt Notu (`cardNoteEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 1 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 📝 Kart 2 İçeriği (HTML) (`card2ContentHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 2 | Hayır | Kart 2 başlığını, maddelerini ve isteğe bağlı notunu zengin metin alanında düzenler. Boş bırakılırsa ürün verisindeki içerik korunur. |
| 🌐 İngilizce Kart 2 İçeriği (HTML) (`card2ContentHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Kullanım Kartı 2 / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Cihazlar Üst Etiketi (`devicesEyebrowEn`) | TEXT | DEVICE COMPATIBILITY | 🧩 Cihaz Uyumluluğu / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Cihazlar Başlığı (`devicesTitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Cihazlar Açıklaması (`devicesTextHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Cihaz ve Marka Etiketleri (`devicesChipsEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Cihaz Uyumluluğu / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Ekosistem Etiketi (`ecoLabelEn`) | TEXT | SCANNING ECOSYSTEM | 🌐 Tarama Ekosistemi / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Ekosistem Başlığı (`ecoTitleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Ekosistem Açıklaması (`ecoTextHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Ekosistem Marka Etiketleri (`ecoChipsEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🌐 Tarama Ekosistemi / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce Ana Buton Metni (`ecoButton1TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 🌐 İngilizce İkinci Buton Metni (`ecoButton2TextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler / 🌐 İngilizce Metinler | Hayır | İngilizce sayfada kullanılır. Boşsa ürün verisindeki mevcut İngilizce içerik korunur. |
| 👁️ Fotoğraf Şeridini Göster (`showPhotos`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Üç mevcut uygulama görselini birlikte gösterir veya gizler. |
| 👁️ Kullanım Kartı 1 Göster (`showUseCard1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | İlk mevcut kullanım kartını gösterir veya gizler. |
| 👁️ Kullanım Kartı 2 Göster (`showUseCard2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | İkinci mevcut kullanım kartını gösterir veya gizler. |
| 👁️ Cihaz Uyumluluğunu Göster (`showDevices`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Uyumlu cihazları ve marka etiketlerini gösterir veya gizler. |
| 👁️ Tarama Ekosistemini Göster (`showEcosystem`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Tarama ekosistemi içeriğini gösterir veya gizler. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
