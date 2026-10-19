---
title: "Anasayfa Çözüm Ürünleri"
description: "3Mash temasında Anasayfa Çözüm Ürünleri adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Çözüm Ürünleri

## Bu bölümde

- Yapılandırmada kayıtlı 145 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Çözüm Ürünleri** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | cozum | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| 🔢 Bölüm Numarası (`indexNumber`) | RICH_TEXT | 03 | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| 🏷️ Bölüm Üst Etiketi (`indexText`) | RICH_TEXT | Çözüm · Üretim Ekosistemi | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Hassasiyet cihazdan çıkmaz; | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | uyumdan çıkar. | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| 📝 Yan Açıklama Metni (`sideHtml`) | RICH_TEXT | Kuronun oturması üç şeyin senkronuna bağlı: yazıcı, reçine, kürleme. Biz üçünü birlikte kalibre edip saha birikimiyle teslim ediyoruz — elinizdeki başka marka cihaza bile. | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| ♿ Ürün Kartları Erişilebilirlik Etiketi (`carouselAriaLabel`) | TEXT | Çözüm ürünleri | 📝 Bölüm Başlığı ve Giriş | Hayır | — |
| ↔️ Kartlar Arası Boşluk (px) (`cardGap`) | NUMBER | 22 | 🎨 Görünüm ve Renkler / 📐 Kart Aralığı ve Köşeleri | Hayır | — |
| ↔️ Ürün Görseli Genişliği (px) (`productImageWidth`) | NUMBER | 170 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| ↕️ Ürün Görseli Yüksekliği (px) (`productImageHeight`) | NUMBER | 156 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| ↔️ Ürün Görseli Yatay Konumu (px) (`productImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| ↕️ Ürün Görseli Dikey Konumu (px) (`productImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| 🖼️ Ürün Görseli Sığdırma Biçimi (`productImageFit`) | ENUM | contain | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🖼️ Ürün Görseli Saydamlığı (%) (`productImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| ☀️ Ürün Görseli Parlaklığı (%) (`productImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| ◐ Ürün Görseli Kontrastı (%) (`productImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| 🎨 Ürün Görseli Doygunluğu (%) (`productImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| 🌈 Ürün Görseli Renk Tonu (`productImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| 🔄 Ürün Görseli Renklerini Ters Çevir (%) (`productImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Ürün Görseli Yerleşimi ve Efektleri | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Açıklama Metni Rengi (`subTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #8F8F86 | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Kart Arka Plan Rengi (`panelColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Vurgu Üzerindeki Metin Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Yumuşak Vurgu Rengi (`accentSoftColor`) | COLOR | #F2F8DC | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Uyarı Rengi (`dangerColor`) | COLOR | #E2492F | 🎨 Görünüm ve Renkler / 🎨 Bölüm ve Kart Renkleri | Hayır | — |
| 🎨 Görsel Alanı Başlangıç Rengi (`cardMediaStartColor`) | COLOR | #F4F4EF | 🎨 Görünüm ve Renkler / 🖼️ Kart Görsel Alanı Renkleri | Hayır | — |
| 🎨 Görsel Alanı Bitiş Rengi (`cardMediaEndColor`) | COLOR | #E9E9E2 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görsel Alanı Renkleri | Hayır | — |
| ◻️ Kart Köşe Yuvarlaklığı (px) (`cardRadius`) | NUMBER | 20 | 🎨 Görünüm ve Renkler / 📐 Kart Aralığı ve Köşeleri | Hayır | — |
| 👁️ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🔠 Vurgulanan Metni Kalın Göster (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanan Metni İtalik Göster (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✨ Arka Plan Işımasını Göster (`showBackgroundGlow`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🌐 İngilizce Bölüm Üst Etiketi (`indexTextEn`) | RICH_TEXT | Solution · Production Ecosystem | 📝 Bölüm Başlığı ve Giriş / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Precision doesn't come from the device; | 📝 Bölüm Başlığı ve Giriş / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık Metni (`titleEmphasisEn`) | RICH_TEXT | it comes from compatibility. | 📝 Bölüm Başlığı ve Giriş / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yan Açıklama Metni (`sideHtmlEn`) | RICH_TEXT | A crown seating depends on three things in sync: printer, resin, curing. We calibrate all three together and deliver with field-proven knowledge, even for your existing third-party device. | 📝 Bölüm Başlığı ve Giriş / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ MASH P1D Kartını Göster (`showSolutionCard1`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ MASH P1D Kart Etiketi (`solutionCard1Tag`) | TEXT | PROFESYONEL | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 🖼️ MASH P1D Ürün Görseli (`solutionCard1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| ♿ MASH P1D Görsel Açıklaması (`solutionCard1ImageAlt`) | TEXT | MASH P1D | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 📝 MASH P1D Ürün Başlığı (`solutionCard1Title`) | TEXT | MASH P1D | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 📝 MASH P1D Ürün Açıklaması (`solutionCard1DescriptionHtml`) | RICH_TEXT | Malzemeye göre tasarlanmış optik sistemle profesyonel DLP üretim. Yüksek hacimli lab ve kliniklerin motoru. | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 🧮 MASH P1D Teknik Özellikleri (`solutionCard1SpecsHtml`) | RICH_TEXT | Işık kaynağı 385 nm DLP Hassasiyet ±20 µm Karakter Tekrar edilebilirlik | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 📝 MASH P1D Buton Metni (`solutionCard1CtaText`) | TEXT | İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 MASH P1D Buton Bağlantısı (`solutionCard1CtaHref`) | TEXT | /3d-yazicilar | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılar varsayılan bağlantıya döner. |
| 🌐 İngilizce MASH P1D Kart Etiketi (`solutionCard1TagEn`) | TEXT | PROFESSIONAL | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P1D Görsel Açıklaması (`solutionCard1ImageAltEn`) | TEXT | MASH P1D | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P1D Ürün Başlığı (`solutionCard1TitleEn`) | TEXT | MASH P1D | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P1D Ürün Açıklaması (`solutionCard1DescriptionHtmlEn`) | RICH_TEXT | Professional DLP production with an optical system designed around the material. The engine of high-volume labs and clinics. | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P1D Teknik Özellikleri (`solutionCard1SpecsHtmlEn`) | RICH_TEXT | Light source 385 nm DLP Accuracy ±20 µm Character Repeatability | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P1D Buton Metni (`solutionCard1CtaTextEn`) | TEXT | Explore | 🛍️ Ürün Kartları / 🌐 MASH P1D İngilizce İçerikleri | Hayır | — |
| 👁️ MASH P16L Kartını Göster (`showSolutionCard2`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ MASH P16L Kart Etiketi (`solutionCard2Tag`) | TEXT | GİRİŞ SEGMENTİ | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 🖼️ MASH P16L Ürün Görseli (`solutionCard2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| ♿ MASH P16L Görsel Açıklaması (`solutionCard2ImageAlt`) | TEXT | MASH P16L | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 📝 MASH P16L Ürün Başlığı (`solutionCard2Title`) | TEXT | MASH P16L | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 📝 MASH P16L Ürün Açıklaması (`solutionCard2DescriptionHtml`) | RICH_TEXT | Dijitale yeni geçenler için 3mash revizyonlu LCD yazıcı. Aynı parametre desteği, aynı teknik ekip. | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 🧮 MASH P16L Teknik Özellikleri (`solutionCard2SpecsHtml`) | RICH_TEXT | Teknoloji LCD · revize Rol Ekosisteme giriş Destek Kurulum + eğitim | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 📝 MASH P16L Buton Metni (`solutionCard2CtaText`) | TEXT | İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 MASH P16L Buton Bağlantısı (`solutionCard2CtaHref`) | TEXT | /3d-yazicilar | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılar varsayılan bağlantıya döner. |
| 🌐 İngilizce MASH P16L Kart Etiketi (`solutionCard2TagEn`) | TEXT | ENTRY LEVEL | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P16L Görsel Açıklaması (`solutionCard2ImageAltEn`) | TEXT | MASH P16L | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P16L Ürün Başlığı (`solutionCard2TitleEn`) | TEXT | MASH P16L | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P16L Ürün Açıklaması (`solutionCard2DescriptionHtmlEn`) | RICH_TEXT | An 3mash-revised LCD printer for those new to digital. Same parameter support, same technical team. | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P16L Teknik Özellikleri (`solutionCard2SpecsHtmlEn`) | RICH_TEXT | Technology LCD · revised Role Entry into the ecosystem Support Installation + training | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce MASH P16L Buton Metni (`solutionCard2CtaTextEn`) | TEXT | Explore | 🛍️ Ürün Kartları / 🌐 MASH P16L İngilizce İçerikleri | Hayır | — |
| 👁️ CRS Reçineler Kartını Göster (`showSolutionCard3`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ CRS Reçineler Kart Etiketi (`solutionCard3Tag`) | TEXT | RESMİ DİSTRİBÜTÖR | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 🖼️ Sol Reçine Görseli (`solutionCard3ImageLeftUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 🖼️ Orta Reçine Görseli (`solutionCard3ImageCenterUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 🖼️ Sağ Reçine Görseli (`solutionCard3ImageRightUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| ♿ Sol Reçine Görsel Açıklaması (`solutionCard3ImageLeftAlt`) | TEXT | CRS Tepsi Reçinesi | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| ♿ Orta Reçine Görsel Açıklaması (`solutionCard3ImageCenterAlt`) | TEXT | CRS Model Reçinesi | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| ♿ Sağ Reçine Görsel Açıklaması (`solutionCard3ImageRightAlt`) | TEXT | CRS Protez Reçinesi | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 📝 CRS Reçineler Ürün Başlığı (`solutionCard3Title`) | TEXT | CRS Reçineler | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 📝 CRS Reçineler Ürün Açıklaması (`solutionCard3DescriptionHtml`) | RICH_TEXT | CE Class IIa biyouyumlu & model reçineleri; cihazınızın parametreleriyle birlikte kalibre edilmiş teslim edilir. | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 🧮 CRS Reçineler Teknik Özellikleri (`solutionCard3SpecsHtml`) | RICH_TEXT | Sertifika CE Class IIa Uygulama Model · geçici · splint · guide Uyum Marka bağımsız | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 📝 CRS Reçineler Buton Metni (`solutionCard3CtaText`) | TEXT | İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 CRS Reçineler Buton Bağlantısı (`solutionCard3CtaHref`) | TEXT | /dental-3d-yazici-recineleri | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılar varsayılan bağlantıya döner. |
| 🌐 İngilizce CRS Reçineler Kart Etiketi (`solutionCard3TagEn`) | TEXT | OFFICIAL DISTRIBUTOR | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sol Reçine Görsel Açıklaması (`solutionCard3ImageLeftAltEn`) | TEXT | CRS Tray Resin | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Orta Reçine Görsel Açıklaması (`solutionCard3ImageCenterAltEn`) | TEXT | CRS Model Resin | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sağ Reçine Görsel Açıklaması (`solutionCard3ImageRightAltEn`) | TEXT | CRS Denture Resin | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce CRS Reçineler Ürün Başlığı (`solutionCard3TitleEn`) | TEXT | CRS Resins | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce CRS Reçineler Ürün Açıklaması (`solutionCard3DescriptionHtmlEn`) | RICH_TEXT | CE Class IIa biocompatible & model resins; delivered calibrated together with your device parameters. | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce CRS Reçineler Teknik Özellikleri (`solutionCard3SpecsHtmlEn`) | RICH_TEXT | Certificate CE Class IIa Application Model · temporary · splint · guide Compatibility Brand-independent | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce CRS Reçineler Buton Metni (`solutionCard3CtaTextEn`) | TEXT | Explore | 🛍️ Ürün Kartları / 🌐 CRS Reçineler İngilizce İçerikleri | Hayır | — |
| ➕ Ek Kart 4'ü Göster (`showSolutionCard4`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ Ek Kart 4 Etiketi (`solutionCard4Tag`) | TEXT | YENİ ÇÖZÜM | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 🖼️ Ek Kart 4 Görseli (`solutionCard4ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| ♿ Ek Kart 4 Görsel Açıklaması (`solutionCard4ImageAlt`) | TEXT | Yeni çözüm ürünü görseli | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 📝 Ek Kart 4 Başlığı (`solutionCard4Title`) | TEXT | Yeni çözüm ürünü | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 📝 Ek Kart 4 Açıklaması (`solutionCard4DescriptionHtml`) | RICH_TEXT | Bu alanı yeni ürününüzün kısa açıklamasıyla düzenleyin. | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 🧮 Ek Kart 4 Teknik Özellikleri (`solutionCard4SpecsHtml`) | RICH_TEXT | Özellik Ürün bilgisi | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 📝 Ek Kart 4 Buton Metni (`solutionCard4CtaText`) | TEXT | Ürünü İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Ek Kart 4 Buton Bağlantısı (`solutionCard4CtaHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılarda buton gösterilmez. |
| 🌐 İngilizce Ek Kart 4 Etiketi (`solutionCard4TagEn`) | TEXT | NEW SOLUTION | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 4 Görsel Açıklaması (`solutionCard4ImageAltEn`) | TEXT | New solution product image | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 4 Başlığı (`solutionCard4TitleEn`) | TEXT | New solution product | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 4 Açıklaması (`solutionCard4DescriptionHtmlEn`) | RICH_TEXT | Add a short description of your new product here. | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 4 Teknik Özellikleri (`solutionCard4SpecsHtmlEn`) | RICH_TEXT | Feature Product detail | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 4 Buton Metni (`solutionCard4CtaTextEn`) | TEXT | Explore product | 🛍️ Ürün Kartları / 🌐 Ek Kart 4 İngilizce İçerikleri | Hayır | — |
| ➕ Ek Kart 5'i Göster (`showSolutionCard5`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ Ek Kart 5 Etiketi (`solutionCard5Tag`) | TEXT | YENİ ÇÖZÜM | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| 🖼️ Ek Kart 5 Görseli (`solutionCard5ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| ♿ Ek Kart 5 Görsel Açıklaması (`solutionCard5ImageAlt`) | TEXT | Yeni çözüm ürünü görseli | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| 📝 Ek Kart 5 Başlığı (`solutionCard5Title`) | TEXT | Yeni çözüm ürünü | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| 📝 Ek Kart 5 Açıklaması (`solutionCard5DescriptionHtml`) | RICH_TEXT | Bu alanı yeni ürününüzün kısa açıklamasıyla düzenleyin. | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| 🧮 Ek Kart 5 Teknik Özellikleri (`solutionCard5SpecsHtml`) | RICH_TEXT | Özellik Ürün bilgisi | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| 📝 Ek Kart 5 Buton Metni (`solutionCard5CtaText`) | TEXT | Ürünü İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Ek Kart 5 Buton Bağlantısı (`solutionCard5CtaHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılarda buton gösterilmez. |
| 🌐 İngilizce Ek Kart 5 Etiketi (`solutionCard5TagEn`) | TEXT | NEW SOLUTION | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 5 Görsel Açıklaması (`solutionCard5ImageAltEn`) | TEXT | New solution product image | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 5 Başlığı (`solutionCard5TitleEn`) | TEXT | New solution product | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 5 Açıklaması (`solutionCard5DescriptionHtmlEn`) | RICH_TEXT | Add a short description of your new product here. | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 5 Teknik Özellikleri (`solutionCard5SpecsHtmlEn`) | RICH_TEXT | Feature Product detail | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 5 Buton Metni (`solutionCard5CtaTextEn`) | TEXT | Explore product | 🛍️ Ürün Kartları / 🌐 Ek Kart 5 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Kartları Erişilebilirlik Etiketi (`carouselAriaLabelEn`) | TEXT | Solution products | 📝 Bölüm Başlığı ve Giriş / 🌐 İngilizce İçerikler | Hayır | — |
| 🛍️ MASH P1D Görseli için Ürün Seç (`solutionCard1Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🖨️ MASH P1D | Hayır | — |
| 🛍️ MASH P16L Görseli için Ürün Seç (`solutionCard2Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🖨️ MASH P16L | Hayır | — |
| 🛍️ CRS Kart Görseli için Ürün Seç (`solutionCard3Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / 🧪 CRS Reçineler | Hayır | — |
| 🛍️ Ek Kart 4 Görseli için Ürün Seç (`solutionCard4Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 4 | Hayır | — |
| 🛍️ Ek Kart 5 Görseli için Ürün Seç (`solutionCard5Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 5 | Hayır | — |
| ➕ Ek Kart 6'ı Göster (`showSolutionCard6`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🏷️ Ek Kart 6 Etiketi (`solutionCard6Tag`) | TEXT | YENİ ÇÖZÜM | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 🖼️ Ek Kart 6 Görseli (`solutionCard6ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| ♿ Ek Kart 6 Görsel Açıklaması (`solutionCard6ImageAlt`) | TEXT | Yeni çözüm ürünü görseli | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 📝 Ek Kart 6 Başlığı (`solutionCard6Title`) | TEXT | Yeni çözüm ürünü | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 📝 Ek Kart 6 Açıklaması (`solutionCard6DescriptionHtml`) | RICH_TEXT | Bu alanı yeni ürününüzün kısa açıklamasıyla düzenleyin. | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 🧮 Ek Kart 6 Teknik Özellikleri (`solutionCard6SpecsHtml`) | RICH_TEXT | Özellik Ürün bilgisi | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 📝 Ek Kart 6 Buton Metni (`solutionCard6CtaText`) | TEXT | Ürünü İncele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Ek Kart 6 Buton Bağlantısı (`solutionCard6CtaHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler | Hayır | Dahili sayfa yolu veya çapa kullanın. Güvenli olmayan bağlantılarda buton gösterilmez. |
| 🌐 İngilizce Ek Kart 6 Etiketi (`solutionCard6TagEn`) | TEXT | NEW SOLUTION | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 6 Görsel Açıklaması (`solutionCard6ImageAltEn`) | TEXT | New solution product image | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 6 Başlığı (`solutionCard6TitleEn`) | TEXT | New solution product | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 6 Açıklaması (`solutionCard6DescriptionHtmlEn`) | RICH_TEXT | Add a short description of your new product here. | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ek Kart 6 Buton Metni (`solutionCard6CtaTextEn`) | TEXT | Explore product | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |
| 🛍️ Ek Kart 6 Görseli için Ürün Seç (`solutionCard6Product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kartları / ➕ Ek Kart 6 | Hayır | — |
| 🌐 İngilizce Ek Kart 6 Teknik Özellikleri (`solutionCard6SpecsHtmlEn`) | RICH_TEXT | Feature Product detail | 🛍️ Ürün Kartları / 🌐 Ek Kart 6 İngilizce İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
