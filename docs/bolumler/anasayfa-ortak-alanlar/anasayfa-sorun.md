---
title: "Anasayfa Sorun"
description: "3Mash temasında Anasayfa Sorun adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Sorun

## Bu bölümde

- Yapılandırmada kayıtlı 61 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Sorun** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | sebep | 📝 İçerik ve Metinler / 🏷️ Bölüm Üst Bilgisi | Hayır | — |
| 🔢 Sıra Numarası (`indexNumber`) | RICH_TEXT | 02 | 📝 İçerik ve Metinler / 🏷️ Bölüm Üst Bilgisi | Hayır | — |
| 📝 Üst Bilgi Metni (`indexText`) | RICH_TEXT | Sorunun Kaynağı | 📝 İçerik ve Metinler / 🏷️ Bölüm Üst Bilgisi | Belirtilmemiş | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Kaybın görünmeyen sebebi: | 📝 İçerik ve Metinler / ✍️ Metin İçerikleri | Hayır | — |
| ⚡ Başlık Vurgusu (`titleEmphasis`) | RICH_TEXT | ölçüsel hassasiyet. | 📝 İçerik ve Metinler / ✍️ Metin İçerikleri | Hayır | — |
| 📝 Yan Açıklama Metni (`sideHtml`) | RICH_TEXT | Diş hekimliği dijitalleşti; herkes benzer cihazlara erişiyor. Asıl fark, ürettiğiniz işin ilk seferde oturup oturmadığı. | 📝 İçerik ve Metinler / ✍️ Metin İçerikleri | Hayır | — |
| 📝 Piyasa Kartı Etiketi (`badLabel`) | RICH_TEXT | Piyasada yaygın kurulum | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 📏 Piyasa Hassasiyet Değeri (`badValue`) | RICH_TEXT | 250–500µm | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 📝 Piyasa Kartı Açıklaması (`badDescriptionHtml`) | RICH_TEXT | Yanlış parametre, reçine uyumsuzluğu ve eksik kalibrasyonla sapma güvenli sınırın 2–5 katına çıkar. Tekrar oranı yükselir (bazı pratiklerde %42'ye ) → yüksek hacimli bir işletmede yılda −$126K'ya varan kayıp. | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 📝 3mash Kartı Etiketi (`goodLabel`) | RICH_TEXT | 3mash ekosistemiyle | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 📏 3mash Hassasiyet Değeri (`goodValue`) | RICH_TEXT | ±20µm | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 📝 3mash Kartı Açıklaması (`goodDescriptionHtml`) | RICH_TEXT | Yazıcı, reçine ve kürleme birlikte kalibre edildiğinde: her baskıda tekrar edilebilir hassasiyet → ≤%3 remake → yılda $72–162K'ya varan tasarruf potansiyeli. | 📝 İçerik ve Metinler / ⚖️ Karşılaştırma Kartları | Hayır | — |
| 👁️ Ölçek Notunu Göster (`showHairNote`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Ölçek Notu (`hairNoteHtml`) | RICH_TEXT | Ölçek için: bir insan saç teli ~70 µm. Piyasadaki sapma saç telinin 5 katına çıkabiliyor; biz saç telinin yarısında çalışıyoruz — ve bunu tek seferlik değil, her baskıda taahhüt ediyoruz. | 📝 İçerik ve Metinler / ✍️ Metin İçerikleri | Hayır | — |
| 👁️ Bilimsel Referansı Göster (`showReference`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📚 Bilimsel Referans Metni (`referenceHtml`) | RICH_TEXT | Bilimsel dayanak: full-arch model doğruluğu sistemden sisteme 3–190 µm arasında değişiyor (Etemad-Shahidi ve ark., J Clin Med 2020 ); SLA/DLP/PolyJet en doğru teknolojiler (Németh ve ark., J Dentistry 2023 ). Tekrar oranı ve sebepleri: McCracken ve ark., J Prosthodont 2019 . | 📝 İçerik ve Metinler / ✍️ Metin İçerikleri | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Yardımcı Yazı Rengi (`subTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Soluk Yazı Rengi (`mutedTextColor`) | COLOR | #8F8F86 | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Güçlü Çizgi Rengi (`lineStrongColor`) | COLOR | #D4D4CC | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Panel Rengi (`panelColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Yazı Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🎨 Uyarı Rengi (`dangerColor`) | COLOR | #E2492F | 🎨 Görünüm ve Efektler / 🎨 Renkler | Hayır | — |
| 🖼️ Ölçek Görseli (`hairImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | Görseli buradan yükleyin; boyut, konum ve efektler görsel kontrol grubundan yönetilir. |
| 📐 Görsel Genişliği (`hairImageWidth`) | NUMBER | 58 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 📐 Görsel Yüksekliği (`hairImageHeight`) | NUMBER | 58 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| ↔️ Görsel Yatay Konumu (`hairImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| ↕️ Görsel Dikey Konumu (`hairImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 🖼️ Görsel Sığdırma Biçimi (`hairImageFit`) | ENUM | contain | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🌫️ Görsel Saydamlığı (`hairImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| ☀️ Görsel Parlaklığı (`hairImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| ◐ Görsel Kontrastı (`hairImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 🎨 Görsel Doygunluğu (`hairImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 🌈 Görsel Renk Tonu (`hairImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 🔄 Görsel Renklerini Ters Çevir (`hairImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Efektler / 🖼️ Ölçek Görseli | Hayır | — |
| 👁️ Dijital Glitch Efektini Göster (`showDigitalGlitch`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Piyasa Değeri Animasyonunu Göster (`showBadValueCountUp`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kelime Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Efektler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Efektler / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Kelime Vurgu Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Efektler / ✨ Metin Vurgusu | Hayır | — |
| ⚡ Kelimeyi Kalın Göster (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Efektler / ✨ Metin Vurgusu | Hayır | — |
| ⚡ Kelimeyi İtalik Göster (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Efektler / ✨ Metin Vurgusu | Hayır | — |
| 👁️ Arka Plan Işığını Göster (`showBackgroundGlow`) | BOOLEAN | true | 🎨 Görünüm ve Efektler / 🌫️ Arka Plan Işığı | Hayır | — |
| 🎨 Arka Plan Işığı Rengi (`backgroundGlowColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Efektler / 🌫️ Arka Plan Işığı | Hayır | — |
| 🌫️ Arka Plan Işığı Opaklığı (`backgroundGlowOpacity`) | NUMBER | 18 | 🎨 Görünüm ve Efektler / 🌫️ Arka Plan Işığı | Hayır | — |
| 🌐 İngilizce Üst Bilgi Metni (`indexTextEn`) | RICH_TEXT | Root of the Problem | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | The unseen cause of loss: | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Vurgusu (`titleEmphasisEn`) | RICH_TEXT | dimensional accuracy. | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Dentistry went digital; everyone has access to similar machines. The real difference is whether your restoration seats on the first try . | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Piyasa Kartı Etiketi (`badLabelEn`) | RICH_TEXT | Common market setup | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Piyasa Kartı Açıklaması (`badDescriptionHtmlEn`) | RICH_TEXT | With wrong parameters, resin mismatch, and lack of calibration, deviation can reach 2-5x the safe limit . | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 3mash Kartı Etiketi (`goodLabelEn`) | RICH_TEXT | With 3mash ecosystem | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 3mash Kartı Açıklaması (`goodDescriptionHtmlEn`) | RICH_TEXT | When printer, resin, and curing are calibrated together : repeatable precision and minimal remake rate on every print. | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ölçek Notu (`hairNoteHtmlEn`) | RICH_TEXT | For scale: a human hair is ~70 µm. Market deviation can reach 5x the thickness of a hair ; we work at half the thickness of a human hair - and we commit to this on every print, not just once. | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Bilimsel Referans (`referenceHtmlEn`) | RICH_TEXT | Scientific basis: Full-arch model accuracy varies from 3–190 µm across systems ( Etemad-Shahidi et al., J Clin Med 2020 ); SLA/DLP/PolyJet are among the most accurate technologies ( Németh et al., J Dentistry 2023 ). Repeatability and its contributing factors: McCracken et al., J Prosthodont 2019 . | 📝 İçerik ve Metinler / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Yan Açıklamayı Göster (`showSideDescription`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Piyasa Kartını Göster (`showBadCard`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 3mash Kartını Göster (`showGoodCard`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
