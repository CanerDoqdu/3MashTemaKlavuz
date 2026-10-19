---
title: "Anasayfa Ekosistem"
description: "3Mash temasında Anasayfa Ekosistem adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Ekosistem

## Bu bölümde

- Yapılandırmada kayıtlı 68 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Ekosistem** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | ekosistem | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| 🔢 Bölüm Numarası (`indexNumber`) | RICH_TEXT | 05 | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| 📝 Bölüm Üst Etiketi (`indexText`) | RICH_TEXT | Uçtan Uca | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Dijital akışın her parçası, | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | tek çatı altında. | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| 📝 Yan Açıklama Metni (`sideHtml`) | RICH_TEXT | Cihaz satıp gitmiyoruz: doğru ürün için danışmanlık , sürdürülebilirlik için Akademi eğitimleri , satış sonrasında teknisyen + mühendis teknik destek. | 📝 Bölüm Başlığı ve Metinleri | Hayır | — |
| 👁️ Kart İkonlarını Göster (`showIcons`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ 3D Yazıcı Kart İkonu (`ecosystemItem1IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🖨️ 3D Yazıcı Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 3D Yazıcı Kart Başlığı (`ecosystemItem1Title`) | RICH_TEXT | 3D Yazıcılar | 📦 Ekosistem Kartları / 🖨️ 3D Yazıcı Kartı | Hayır | — |
| 🔗 3D Yazıcı Kart Bağlantısı (`ecosystemItem1Href`) | TEXT | /3d-yazicilar | 📦 Ekosistem Kartları / 🖨️ 3D Yazıcı Kartı | Hayır | — |
| 🖼️ Dental Reçine Kart İkonu (`ecosystemItem2IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🧪 Dental Reçine Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 Dental Reçine Kart Başlığı (`ecosystemItem2Title`) | RICH_TEXT | Dental Reçineler | 📦 Ekosistem Kartları / 🧪 Dental Reçine Kartı | Hayır | — |
| 🔗 Dental Reçine Kart Bağlantısı (`ecosystemItem2Href`) | TEXT | /dental-3d-yazici-recineleri | 📦 Ekosistem Kartları / 🧪 Dental Reçine Kartı | Hayır | — |
| 🖼️ Yıkama ve Kürleme Kart İkonu (`ecosystemItem3IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🧼 Yıkama ve Kürleme Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 Yıkama ve Kürleme Kart Başlığı (`ecosystemItem3Title`) | RICH_TEXT | Yıkama & Kürleme | 📦 Ekosistem Kartları / 🧼 Yıkama ve Kürleme Kartı | Hayır | — |
| 🔗 Yıkama ve Kürleme Kart Bağlantısı (`ecosystemItem3Href`) | TEXT | /yikama-kurleme-cihazlari | 📦 Ekosistem Kartları / 🧼 Yıkama ve Kürleme Kartı | Hayır | — |
| 🖼️ Masaüstü Tarayıcı Kart İkonu (`ecosystemItem4IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🔍 Masaüstü Tarayıcı Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 Masaüstü Tarayıcı Kart Başlığı (`ecosystemItem4Title`) | RICH_TEXT | Masaüstü Tarayıcılar | 📦 Ekosistem Kartları / 🔍 Masaüstü Tarayıcı Kartı | Hayır | — |
| 🔗 Masaüstü Tarayıcı Kart Bağlantısı (`ecosystemItem4Href`) | TEXT | /masasustu-tarayicilar | 📦 Ekosistem Kartları / 🔍 Masaüstü Tarayıcı Kartı | Hayır | — |
| 🖼️ Zirkon Blok Kart İkonu (`ecosystemItem5IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🦷 Zirkon Blok Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 Zirkon Blok Kart Başlığı (`ecosystemItem5Title`) | RICH_TEXT | Zirkon Bloklar | 📦 Ekosistem Kartları / 🦷 Zirkon Blok Kartı | Hayır | — |
| 🔗 Zirkon Blok Kart Bağlantısı (`ecosystemItem5Href`) | TEXT | /zirkon-bloklar | 📦 Ekosistem Kartları / 🦷 Zirkon Blok Kartı | Hayır | — |
| 🖼️ Dental Fırın Kart İkonu (`ecosystemItem6IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ekosistem Kartları / 🔥 Dental Fırın Kartı | Hayır | Yedek ikon görseli yükleyin. Boşsa paketli ikon kullanılır. |
| 📝 Dental Fırın Kart Başlığı (`ecosystemItem6Title`) | RICH_TEXT | Dental Fırınlar | 📦 Ekosistem Kartları / 🔥 Dental Fırın Kartı | Hayır | — |
| 🔗 Dental Fırın Kart Bağlantısı (`ecosystemItem6Href`) | TEXT | /dental-firinlar | 📦 Ekosistem Kartları / 🔥 Dental Fırın Kartı | Hayır | — |
| 📐 İkon Genişliği (`iconImageWidth`) | NUMBER | 44 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 📐 İkon Yüksekliği (`iconImageHeight`) | NUMBER | 44 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| ↔️ İkon Yatay Kaydırması (`iconImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| ↕️ İkon Dikey Kaydırması (`iconImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🖼️ İkon Görselini Sığdırma (`iconImageFit`) | ENUM | contain | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🎨 İkon Opaklığı (`iconImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| ✨ İkon Parlaklığı (`iconImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🎨 İkon Kontrastı (`iconImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🎨 İkon Doygunluğu (`iconImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🎨 İkon Renk Tonu (`iconImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🔄 İkon Renklerini Ters Çevir (`iconImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Kart İkonu Görünümü | Hayır | — |
| 🎨 Kart Köşe Yuvarlaklığı (`itemRadius`) | NUMBER | 16 | 🎨 Görünüm ve Renkler | Hayır | — |
| ✨ Kelime Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 👁️ Bölüm Işımasını Göster (`showBackgroundGlow`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Bölüm Üst Etiketi (`indexTextEn`) | RICH_TEXT | End to End | 📝 Bölüm Başlığı ve Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Every part of the digital workflow, | 📝 Bölüm Başlığı ve Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık Metni (`titleEmphasisEn`) | RICH_TEXT | under one roof. | 📝 Bölüm Başlığı ve Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yan Açıklama Metni (`sideHtmlEn`) | RICH_TEXT | We don't just sell devices: consulting for the right product, Academy training for sustainability, technician + engineer technical support after the sale. | 📝 Bölüm Başlığı ve Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3D Yazıcı Kart Başlığı (`ecosystemItem1TitleEn`) | RICH_TEXT | 3D Printers | 📦 Ekosistem Kartları / 🖨️ 3D Yazıcı Kartı | Hayır | — |
| 🌐 İngilizce Dental Reçine Kart Başlığı (`ecosystemItem2TitleEn`) | RICH_TEXT | Dental Resins | 📦 Ekosistem Kartları / 🧪 Dental Reçine Kartı | Hayır | — |
| 🌐 İngilizce Yıkama ve Kürleme Kart Başlığı (`ecosystemItem3TitleEn`) | RICH_TEXT | Wash & Cure | 📦 Ekosistem Kartları / 🧼 Yıkama ve Kürleme Kartı | Hayır | — |
| 🌐 İngilizce Masaüstü Tarayıcı Kart Başlığı (`ecosystemItem4TitleEn`) | RICH_TEXT | Desktop Scanners | 📦 Ekosistem Kartları / 🔍 Masaüstü Tarayıcı Kartı | Hayır | — |
| 🌐 İngilizce Zirkon Blok Kart Başlığı (`ecosystemItem5TitleEn`) | RICH_TEXT | Zirconia Blocks | 📦 Ekosistem Kartları / 🦷 Zirkon Blok Kartı | Hayır | — |
| 🌐 İngilizce Dental Fırın Kart Başlığı (`ecosystemItem6TitleEn`) | RICH_TEXT | Dental Furnaces | 📦 Ekosistem Kartları / 🔥 Dental Fırın Kartı | Hayır | — |
| 👁️ 3D Yazıcı Kartını Göster (`showEcosystemItem1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Dental Reçine Kartını Göster (`showEcosystemItem2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yıkama ve Kürleme Kartını Göster (`showEcosystemItem3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Masaüstü Tarayıcı Kartını Göster (`showEcosystemItem4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Zirkon Blok Kartını Göster (`showEcosystemItem5`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Dental Fırın Kartını Göster (`showEcosystemItem6`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Yan Açıklama Metni Rengi (`subTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Soluk Metin Rengi (`mutedTextColor`) | COLOR | #8F8F86 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi ve Kenarlık Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Kart Arka Plan Rengi (`panelColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Metin Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Yumuşak Vurgu Rengi (`accentSoftColor`) | COLOR | #F2F8DC | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
