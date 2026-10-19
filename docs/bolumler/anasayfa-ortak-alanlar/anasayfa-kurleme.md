---
title: "Anasayfa Kürleme"
description: "3Mash temasında Anasayfa Kürleme adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Kürleme

## Bu bölümde

- Yapılandırmada kayıtlı 124 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Kürleme** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 Yıkama Kartı için İkas Ürünü (`curingProduct1Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Kaynakları | Hayır | Ürün seçildiğinde kartın ana verileri canlı ikas ürününden alınır. Boş bırakılırsa bu kart grubundaki manuel metinler ve görsel kullanılır. |
| 🧮 Kürleme Kartı için İkas Ürünü (`curingProduct2Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Kaynakları | Hayır | Ürün seçildiğinde kartın ana verileri canlı ikas ürününden alınır. Boş bırakılırsa bu kart grubundaki manuel metinler ve görsel kullanılır. |
| 📍 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | kurleme | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| 🔢 Bölüm Numarası (`indexNumber`) | RICH_TEXT | 04 | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| 🏷️ Bölüm Üst Etiketi (`indexText`) | RICH_TEXT | Kritik Son Adım | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Sadece yazıcı değil. Sonucu | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | kürleme tamamlar. | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| 📝 Yan Açıklama Metni (HTML) (`sideHtml`) | RICH_TEXT | Baskı, cihazdan çıktığında bitmemiştir. Yanlış kürlenen iş, doğru basılmış olsa bile başarısız olur. İşte üç sebep: | 📝 İçerik / 📍 Bölüm Başlığı ve Giriş | Hayır | — |
| 🏷️ 1. Neden Üst Etiketi (`reason1Eyebrow`) | RICH_TEXT | SEBEP 01 | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 1. Neden Başlığı (`reason1Title`) | RICH_TEXT | Mekanik dayanım | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 1. Neden Açıklaması (HTML) (`reason1DescriptionHtml`) | RICH_TEXT | Eksik kürleme (undercure) kırılganlık demek — geçici kron ve köprülerin sık kırılmasının en yaygın görünmez sebebi. | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 🏷️ 2. Neden Üst Etiketi (`reason2Eyebrow`) | RICH_TEXT | SEBEP 02 | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 2. Neden Başlığı (`reason2Title`) | RICH_TEXT | Ölçüsel doğruluk | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 2. Neden Açıklaması (HTML) (`reason2DescriptionHtml`) | RICH_TEXT | Fazla kürleme (overcure) malzemeyi çeker ve deforme eder . Yazıcıda kazanılan ±20 µm, kürleme ünitesinde kaybedilir. | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 🏷️ 3. Neden Üst Etiketi (`reason3Eyebrow`) | RICH_TEXT | SEBEP 03 | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 3. Neden Başlığı (`reason3Title`) | RICH_TEXT | Biyouyumluluk & renk | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 📝 3. Neden Açıklaması (HTML) (`reason3DescriptionHtml`) | RICH_TEXT | Doğru dönüşüm derecesi monomer salınımını engeller; renk stabilitesi ve hasta güvenliği sağlar. | 📝 İçerik / 📌 Kürleme Nedenleri | Hayır | — |
| 🏷️ Yıkama Kartı Etiketi (`curingProduct1Tag`) | RICH_TEXT | YIKAMA | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📝 Yıkama Kartı Başlığı (`curingProduct1Title`) | RICH_TEXT | Mash W1E Ultrasonik Yıkama Cihazı | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📝 Yıkama Kartı Açıklaması (HTML) (`curingProduct1DescriptionHtml`) | RICH_TEXT | Reçine baskı sonrası yüzeyde kalan fazla reçineyi ultrasonik temizleme ile kısa sürede ve hassas biçimde uzaklaştırır; kürleme öncesi temiz yüzey sağlar. | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 🖼️ Yıkama Kartı Görseli (`curingProduct1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | Canlı ürün görseli yoksa bu görsel kullanılır; ürün seçilmemişse paketli görselin yerine geçer. |
| ♿ Yıkama Görsel Alt Metni (`curingProduct1ImageAlt`) | TEXT | Mash W1E Ultrasonik Yıkama Cihazı | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📌 Yıkama Özellik 1 Etiketi (`curingProduct1Spec1Label`) | RICH_TEXT | İşlem | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📊 Yıkama Özellik 1 Değeri (`curingProduct1Spec1Value`) | RICH_TEXT | Ultrasonik temizleme | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📌 Yıkama Özellik 2 Etiketi (`curingProduct1Spec2Label`) | RICH_TEXT | Akış | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📊 Yıkama Özellik 2 Değeri (`curingProduct1Spec2Value`) | RICH_TEXT | Yıkama → kürleme hazırlığı | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 📝 Yıkama Kartı Buton Metni (`curingProduct1CtaText`) | RICH_TEXT | İncele | 📝 İçerik / 🧼 Yıkama Kartı | Hayır | — |
| 🔗 Yıkama Kartı Buton Bağlantısı (`curingProduct1CtaHref`) | TEXT | /mash-w1e-ultrasonik-yikama-cihazi | 🔗 Bağlantılar | Hayır | — |
| 🏷️ Kürleme Kartı Etiketi (`curingProduct2Tag`) | RICH_TEXT | KÜRLEME | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📝 Kürleme Kartı Başlığı (`curingProduct2Title`) | RICH_TEXT | Mash C1E UV Kürleme Cihazı | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📝 Kürleme Kartı Açıklaması (HTML) (`curingProduct2DescriptionHtml`) | RICH_TEXT | Kürleme, polimer malzemelerin sertleştirilme sürecidir. 3D baskı tamamlandıktan sonra ürünün boyutsal kararlılığını ve yüzey dayanımını destekler. Mash C1E, 24 LED'li 360° kürleme sistemi ve 360-530 nm geniş spektrum desteğiyle reçine baskılarınızda hızlı ve homojen kürleme sunar. Sararmayı önlemeye yardımcı olan teknolojisi ve dahili fan sistemiyle güvenilir, profesyonel sonuçlar sağlar. | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 🖼️ Kürleme Kartı Görseli (`curingProduct2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 💡 Kürleme Kartı | Hayır | Canlı ürün görseli yoksa bu görsel kullanılır; ürün seçilmemişse paketli görselin yerine geçer. |
| ♿ Kürleme Görsel Alt Metni (`curingProduct2ImageAlt`) | TEXT | Mash C1E UV Kürleme Cihazı | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📌 Kürleme Özellik 1 Etiketi (`curingProduct2Spec1Label`) | RICH_TEXT | Işık | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📊 Kürleme Özellik 1 Değeri (`curingProduct2Spec1Value`) | RICH_TEXT | 24 LED / 360° | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📌 Kürleme Özellik 2 Etiketi (`curingProduct2Spec2Label`) | RICH_TEXT | Spektrum | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📊 Kürleme Özellik 2 Değeri (`curingProduct2Spec2Value`) | RICH_TEXT | 360-530 nm | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 📝 Kürleme Kartı Buton Metni (`curingProduct2CtaText`) | RICH_TEXT | İncele | 📝 İçerik / 💡 Kürleme Kartı | Hayır | — |
| 🔗 Kürleme Kartı Buton Bağlantısı (`curingProduct2CtaHref`) | TEXT | /mash-c1e-uv-kurleme-cihazi | 🔗 Bağlantılar | Hayır | — |
| ↔️ Ürün Görseli Genişliği (px) (`productImageWidth`) | NUMBER | 205 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| ↕️ Ürün Görseli Yüksekliği (px) (`productImageHeight`) | NUMBER | 190 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| ↔️ Ürün Görseli Yatay Kaydırma (px) (`productImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| ↕️ Ürün Görseli Dikey Kaydırma (px) (`productImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 🖼️ Ürün Görseli Sığdırma (`productImageFit`) | ENUM | contain | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| ✨ Ürün Görseli Saydamlığı (%) (`productImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| ☀️ Ürün Görseli Parlaklığı (%) (`productImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 🎚️ Ürün Görseli Kontrastı (%) (`productImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 🎨 Ürün Görseli Doygunluğu (%) (`productImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 🌈 Ürün Görseli Tonu (°) (`productImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 🔄 Ürün Görseli Ters Çevirme (%) (`productImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Görsel Yerleşimi | Hayır | — |
| 📚 Akademi Giriş Metni (`readMoreText`) | RICH_TEXT | Derine inmek isteyenlere, Mash Academy'den: | 📝 İçerik / 📚 Akademi Metinleri | Hayır | — |
| 📝 Akademi Bağlantısı 1 Metni (`readMoreLink1Text`) | RICH_TEXT | Overcure ve Undercure Nedir? | 📝 İçerik / 📚 Akademi Metinleri | Hayır | — |
| 🔗 Akademi Bağlantısı 1 Adresi (`readMoreLink1Href`) | TEXT | /blog/dental-3d-baskida-overcure-ve-undercure-nedir-en-dogru-kurleme-icin-kapsamli-rehber | 🔗 Bağlantılar | Hayır | — |
| 📝 Akademi Bağlantısı 2 Metni (`readMoreLink2Text`) | RICH_TEXT | 385nm mi 405nm mi? | 📝 İçerik / 📚 Akademi Metinleri | Hayır | — |
| 🔗 Akademi Bağlantısı 2 Adresi (`readMoreLink2Href`) | TEXT | /blog/dental-3d-baskida-dogru-dalga-boyu-secimi-385nm-mi-405nm-mi | 🔗 Bağlantılar | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Açıklama Yazı Rengi (`subTextColor`) | COLOR | #A5A59A | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #8B8B80 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi ve Kenarlık Rengi (`lineColor`) | COLOR | #26261F | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ürün Kartı Arka Plan Rengi (`panelColor`) | COLOR | #161612 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgulu Alan Yazı Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Yumuşak Vurgu Arka Planı (`accentSoftColor`) | COLOR | #1C1C17 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Neden Kartı Arka Plan Rengi (`reasonCardBackgroundColor`) | COLOR | #161612 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ürün Görsel Alanı Başlangıç Rengi (`productMediaStartColor`) | COLOR | #1D1D17 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ürün Görsel Alanı Bitiş Rengi (`productMediaEndColor`) | COLOR | #14140F | 🎨 Görünüm ve Renkler | Hayır | — |
| ◻️ Neden Kartı Köşe Yuvarlaklığı (px) (`reasonCardRadius`) | NUMBER | 18 | 🎨 Görünüm ve Renkler | Hayır | — |
| ◻️ Ürün Kartı Köşe Yuvarlaklığı (px) (`productCardRadius`) | NUMBER | 20 | 🎨 Görünüm ve Renkler | Hayır | — |
| ✨ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Vurgulu Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🔠 Vurgulu Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✒️ Vurgulu Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🌐 İngilizce Bölüm Üst Etiketi (`indexTextEn`) | RICH_TEXT | Critical Final Step | 📝 İçerik / 🌐 Başlık ve Giriş (EN) | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Not just the printer. It is | 📝 İçerik / 🌐 Başlık ve Giriş (EN) | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık (`titleEmphasisEn`) | RICH_TEXT | curing that completes the result. | 📝 İçerik / 🌐 Başlık ve Giriş (EN) | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | The print is not finished when it leaves the device. A poorly cured job, even if correctly printed , will fail. Here are three reasons: | 📝 İçerik / 🌐 Başlık ve Giriş (EN) | Hayır | — |
| 🌐 İngilizce 1. Neden Etiketi (`reason1EyebrowEn`) | RICH_TEXT | REASON 01 | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 1. Neden Başlığı (`reason1TitleEn`) | RICH_TEXT | Mechanical strength | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 1. Neden Açıklaması (`reason1DescriptionHtmlEn`) | RICH_TEXT | Undercure means brittleness — the most common hidden cause of frequent fractures in provisional crowns and bridges. | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 2. Neden Etiketi (`reason2EyebrowEn`) | RICH_TEXT | REASON 02 | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 2. Neden Başlığı (`reason2TitleEn`) | RICH_TEXT | Dimensional accuracy | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 2. Neden Açıklaması (`reason2DescriptionHtmlEn`) | RICH_TEXT | Overcure shrinks and deforms the material. The ±20 µm accuracy achieved in the printer is lost in the curing unit. | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 3. Neden Etiketi (`reason3EyebrowEn`) | RICH_TEXT | REASON 03 | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 3. Neden Başlığı (`reason3TitleEn`) | RICH_TEXT | Biocompatibility & color | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce 3. Neden Açıklaması (`reason3DescriptionHtmlEn`) | RICH_TEXT | Proper degree of conversion prevents monomer elution ; ensures color stability and patient safety. | 📝 İçerik / 🌐 Neden Kartları (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Kartı Etiketi (`curingProduct1TagEn`) | RICH_TEXT | WASHING | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Kartı Başlığı (`curingProduct1TitleEn`) | RICH_TEXT | Mash W1E Ultrasonic Washing Device | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Kartı Açıklaması (`curingProduct1DescriptionHtmlEn`) | RICH_TEXT | Removes excess resin remaining on the surface after resin printing quickly and precisely with ultrasonic cleaning ; provides a clean surface before curing. | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Görseli Alt Metni (`curingProduct1ImageAltEn`) | TEXT | Mash W1E Ultrasonic Washing Device | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Özelliği 1 Etiketi (`curingProduct1Spec1LabelEn`) | RICH_TEXT | Process | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Özelliği 1 Değeri (`curingProduct1Spec1ValueEn`) | RICH_TEXT | Ultrasonic cleaning | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Özelliği 2 Etiketi (`curingProduct1Spec2LabelEn`) | RICH_TEXT | Workflow | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Özelliği 2 Değeri (`curingProduct1Spec2ValueEn`) | RICH_TEXT | Washing → curing preparation | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Yıkama Buton Metni (`curingProduct1CtaTextEn`) | RICH_TEXT | Explore | 📝 İçerik / 🌐 Yıkama Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Kartı Etiketi (`curingProduct2TagEn`) | RICH_TEXT | CURING | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Kartı Başlığı (`curingProduct2TitleEn`) | RICH_TEXT | Mash C1E UV Curing Device | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Kartı Açıklaması (`curingProduct2DescriptionHtmlEn`) | RICH_TEXT | Curing is the process of hardening polymer materials. After 3D printing is complete, it supports the dimensional stability and surface durability of the product. With its 24-LED 360° curing system and wide 360–530 nm spectrum support, the Mash C1E offers fast and homogeneous curing for your resin prints. With technology that helps prevent yellowing and a built-in fan system, it delivers reliable, professional results. | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Görseli Alt Metni (`curingProduct2ImageAltEn`) | TEXT | Mash C1E UV Curing Device | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Özelliği 1 Etiketi (`curingProduct2Spec1LabelEn`) | RICH_TEXT | Light | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Özelliği 1 Değeri (`curingProduct2Spec1ValueEn`) | RICH_TEXT | 24 LED / 360° | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Özelliği 2 Etiketi (`curingProduct2Spec2LabelEn`) | RICH_TEXT | Spectrum | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Özelliği 2 Değeri (`curingProduct2Spec2ValueEn`) | RICH_TEXT | 360-530nm | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Kürleme Buton Metni (`curingProduct2CtaTextEn`) | RICH_TEXT | Explore | 📝 İçerik / 🌐 Kürleme Kartı (EN) | Hayır | — |
| 🌐 İngilizce Akademi Giriş Metni (`readMoreTextEn`) | RICH_TEXT | For those who want to dive deeper, from Mash Academy: | 📝 İçerik / 🌐 Akademi Metinleri (EN) | Hayır | — |
| 🌐 İngilizce Akademi Bağlantısı 1 Metni (`readMoreLink1TextEn`) | RICH_TEXT | What is Overcure and Undercure? | 📝 İçerik / 🌐 Akademi Metinleri (EN) | Hayır | — |
| 🌐 İngilizce Akademi Bağlantısı 2 Metni (`readMoreLink2TextEn`) | RICH_TEXT | 385nm or 405nm? | 📝 İçerik / 🌐 Akademi Metinleri (EN) | Hayır | — |
| 🏷️ Canlı Ürün Fiyat Etiketi (`dynamicPriceLabel`) | TEXT | Fiyat | 📝 İçerik / 🏷️ Dinamik Ürün Etiketleri | Hayır | — |
| 🏷️ Canlı Ürün Liste Fiyatı Etiketi (`dynamicListPriceLabel`) | TEXT | Liste | 📝 İçerik / 🏷️ Dinamik Ürün Etiketleri | Hayır | — |
| 🏷️ Canlı Ürün Marka Etiketi (`dynamicBrandLabel`) | TEXT | Marka | 📝 İçerik / 🏷️ Dinamik Ürün Etiketleri | Hayır | — |
| 🏷️ Canlı Ürün Kategori Etiketi (`dynamicCategoryLabel`) | TEXT | Kategori | 📝 İçerik / 🏷️ Dinamik Ürün Etiketleri | Hayır | — |
| 🌐 İngilizce Canlı Ürün Fiyat Etiketi (`dynamicPriceLabelEn`) | TEXT | Price | 📝 İçerik / 🌐 Dinamik Etiketler (EN) | Hayır | — |
| 🌐 İngilizce Canlı Ürün Liste Fiyatı Etiketi (`dynamicListPriceLabelEn`) | TEXT | List | 📝 İçerik / 🌐 Dinamik Etiketler (EN) | Hayır | — |
| 🌐 İngilizce Canlı Ürün Marka Etiketi (`dynamicBrandLabelEn`) | TEXT | Brand | 📝 İçerik / 🌐 Dinamik Etiketler (EN) | Hayır | — |
| 🌐 İngilizce Canlı Ürün Kategori Etiketi (`dynamicCategoryLabelEn`) | TEXT | Category | 📝 İçerik / 🌐 Dinamik Etiketler (EN) | Hayır | — |
| 👁️ 1. Kürleme Nedenini Göster (`showReason1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 2. Kürleme Nedenini Göster (`showReason2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 3. Kürleme Nedenini Göster (`showReason3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yıkama Kartını Göster (`showProduct1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kürleme Kartını Göster (`showProduct2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Akademi Bağlantılarını Göster (`showReadMore`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 1. Akademi Bağlantısını Göster (`showReadMoreLink1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 2. Akademi Bağlantısını Göster (`showReadMoreLink2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
