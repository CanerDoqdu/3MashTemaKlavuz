---
title: "Anasayfa Referanslar"
description: "3Mash temasında Anasayfa Referanslar adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Referanslar

## Bu bölümde

- Yapılandırmada kayıtlı 115 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Referanslar** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | guven | 📝 Bölüm İçeriği | Hayır | — |
| 🔢 Bölüm Sıra Numarası (`indexNumber`) | RICH_TEXT | 06 | 📝 Bölüm İçeriği | Hayır | — |
| 📝 Bölüm Üst Etiketi (`indexText`) | RICH_TEXT | Referanslar | 📝 Bölüm İçeriği | Hayır | — |
| 📝 Ana Başlık Metni (`titleText`) | RICH_TEXT | Türkiye'nin en büyük lab'ları neden | 📝 Bölüm İçeriği | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | bizimle üretiyor? | 📝 Bölüm İçeriği | Hayır | — |
| 📝 Yan Açıklama Metni (`sideHtml`) | RICH_TEXT | Kısa cevap hep aynı: tutarlılık. 580+ dental laboratuvar ve klinik bu sistemle üretiyor, çünkü sonuç her seferinde aynı çıkıyor. | 📝 Bölüm İçeriği | Hayır | — |
| 💬 1. Müşteri Yorumu (`testimonial1Text`) | RICH_TEXT | Profesyoneller mutlak başarı için profesyonellere güvenir. Ekipman seçimi, temini, eğitimi ve kullanımında Mash ile iş birliği yapıyoruz. | 💬 Müşteri Yorumları / ⭐ Öne Çıkan Yorum | Hayır | — |
| 🖼️ 1. Profil Fotoğrafı (`testimonial1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💬 Müşteri Yorumları / ⭐ Öne Çıkan Yorum | Hayır | Yedek profil fotoğrafı yükleyin. Boşsa paketli profil fotoğrafı kullanılır. |
| 🖼️ 1. Fotoğraf Alternatif Metni (`testimonial1ImageAlt`) | TEXT | Mehmet İşlek | 💬 Müşteri Yorumları / ⭐ Öne Çıkan Yorum | Hayır | — |
| 👤 1. Müşteri Adı (`testimonial1Name`) | RICH_TEXT | Mehmet İşlek | 💬 Müşteri Yorumları / ⭐ Öne Çıkan Yorum | Hayır | — |
| 🏷️ 1. Müşteri Unvanı (`testimonial1Role`) | RICH_TEXT | ATTELIA · Kurucu Başhekim — 22 yıldır gülümseme tasarlayan klinik | 💬 Müşteri Yorumları / ⭐ Öne Çıkan Yorum | Hayır | — |
| 💬 2. Müşteri Yorumu (`testimonial2Text`) | RICH_TEXT | Yenilikçi ve yaratıcı. Donanım, yazılım ve malzemelerde uzun vadeli, başarılı bir iş birliği. | 💬 Müşteri Yorumları / 💬 2. Müşteri Yorumu | Hayır | — |
| 🖼️ 2. Profil Fotoğrafı (`testimonial2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💬 Müşteri Yorumları / 💬 2. Müşteri Yorumu | Hayır | Yedek profil fotoğrafı yükleyin. Boşsa paketli profil fotoğrafı kullanılır. |
| 🖼️ 2. Fotoğraf Alternatif Metni (`testimonial2ImageAlt`) | TEXT | Berkan Öztaş | 💬 Müşteri Yorumları / 💬 2. Müşteri Yorumu | Hayır | — |
| 👤 2. Müşteri Adı (`testimonial2Name`) | RICH_TEXT | Berkan Öztaş | 💬 Müşteri Yorumları / 💬 2. Müşteri Yorumu | Hayır | — |
| 🏷️ 2. Müşteri Unvanı (`testimonial2Role`) | RICH_TEXT | DENTEK · Genel Müd. Yard. | 💬 Müşteri Yorumları / 💬 2. Müşteri Yorumu | Hayır | — |
| 💬 3. Müşteri Yorumu (`testimonial3Text`) | RICH_TEXT | Sorunları biz daha yaşamadan çözmüşler. Her zaman aynı kalitede üretim — mükemmel sonuçlar. | 💬 Müşteri Yorumları / 💬 3. Müşteri Yorumu | Hayır | — |
| 🖼️ 3. Profil Fotoğrafı (`testimonial3ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💬 Müşteri Yorumları / 💬 3. Müşteri Yorumu | Hayır | Yedek profil fotoğrafı yükleyin. Boşsa paketli profil fotoğrafı kullanılır. |
| 🖼️ 3. Fotoğraf Alternatif Metni (`testimonial3ImageAlt`) | TEXT | Göksel Pişkin | 💬 Müşteri Yorumları / 💬 3. Müşteri Yorumu | Hayır | — |
| 👤 3. Müşteri Adı (`testimonial3Name`) | RICH_TEXT | Göksel Pişkin | 💬 Müşteri Yorumları / 💬 3. Müşteri Yorumu | Hayır | — |
| 🏷️ 3. Müşteri Unvanı (`testimonial3Role`) | RICH_TEXT | MIKRO LAB · Kurucu Ortak | 💬 Müşteri Yorumları / 💬 3. Müşteri Yorumu | Hayır | — |
| ↔️ Profil Fotoğrafı Genişliği (`profileImageWidth`) | NUMBER | 58 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| ↕️ Profil Fotoğrafı Yüksekliği (`profileImageHeight`) | NUMBER | 58 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| ↔️ Profil Fotoğrafı Yatay Kaydırma (`profileImageXOffset`) | NUMBER | 0 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| ↕️ Profil Fotoğrafı Dikey Kaydırma (`profileImageYOffset`) | NUMBER | 0 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 🖼️ Profil Fotoğrafı Sığdırma (`profileImageFit`) | ENUM | cover | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🌫️ Profil Fotoğrafı Opaklığı (`profileImageOpacity`) | NUMBER | 100 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| ☀️ Profil Fotoğrafı Parlaklığı (`profileImageBrightness`) | NUMBER | 100 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 🎚️ Profil Fotoğrafı Kontrastı (`profileImageContrast`) | NUMBER | 100 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 🎨 Profil Fotoğrafı Doygunluğu (`profileImageSaturation`) | NUMBER | 100 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 🌈 Profil Fotoğrafı Tonu (`profileImageHue`) | NUMBER | 0 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 🔄 Profil Fotoğrafı Ters Renk (`profileImageInvert`) | NUMBER | 0 | 🖼️ Görsel Sunumu / 👤 Profil Fotoğrafları | Hayır | — |
| 📝 Marka Şeridi Etiketi (`trustedLabel`) | RICH_TEXT | Güvenenler | 🤝 Güvenilen Markalar | Hayır | — |
| ↕️ Marka Logosu Yüksekliği (`trustedLogoHeight`) | NUMBER | 58 | 🖼️ Görsel Sunumu / 🏷️ Logo Görselleri | Hayır | — |
| 🌫️ Marka Logosu Opaklığı (`trustedLogoOpacity`) | NUMBER | 75 | 🖼️ Görsel Sunumu / 🏷️ Logo Görselleri | Hayır | — |
| 🎨 Marka Logosu Gri Tonu (`trustedLogoGrayscale`) | NUMBER | 100 | 🖼️ Görsel Sunumu / 🏷️ Logo Görselleri | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Açıklama Metni Rengi (`subTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #8F8F86 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Kenarlık ve Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Kart Arka Plan Rengi (`panelColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Öne Çıkan Kart Rengi (`darkColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Üstü Metin Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🔲 Kart Köşe Yarıçapı (`cardRadius`) | NUMBER | 20 | 🎨 Görünüm ve Renkler | Hayır | — |
| 👁️ 1. Marka Logosunu Göster (`trustedLogo1Enabled`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ 1. Marka Logosu (`trustedLogo1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | Yedek güvenilen marka logosu 1 yükleyin. Boşsa paketli logo 1 kullanılır. |
| 🖼️ 1. Marka Logosu Alternatif Metni (`trustedLogo1ImageAlt`) | TEXT | Güvenen marka 1 | 🤝 Güvenilen Markalar | Hayır | — |
| 👁️ 2. Marka Logosunu Göster (`trustedLogo2Enabled`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ 2. Marka Logosu (`trustedLogo2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | Yedek güvenilen marka logosu 2 yükleyin. Boşsa paketli logo 2 kullanılır. |
| 🖼️ 2. Marka Logosu Alternatif Metni (`trustedLogo2ImageAlt`) | TEXT | Güvenen marka 2 | 🤝 Güvenilen Markalar | Hayır | — |
| 👁️ 3. Marka Logosunu Göster (`trustedLogo3Enabled`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 🖼️ 3. Marka Logosu (`trustedLogo3ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | Yedek güvenilen marka logosu 3 yükleyin. Boşsa paketli logo 3 kullanılır. |
| 🖼️ 3. Marka Logosu Alternatif Metni (`trustedLogo3ImageAlt`) | TEXT | Güvenen marka 3 | 🤝 Güvenilen Markalar | Hayır | — |
| 👁️ 4. Marka Logosunu Göster (`trustedLogo4Enabled`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ 4. Marka Logosu (`trustedLogo4ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | Yedek güvenilen marka logosu 4 yükleyin. Boşsa paketli logo 4 kullanılır. |
| 🖼️ 4. Marka Logosu Alternatif Metni (`trustedLogo4ImageAlt`) | TEXT | Güvenen marka 4 | 🤝 Güvenilen Markalar | Hayır | — |
| 👁️ 5. Marka Logosunu Göster (`trustedLogo5Enabled`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ 5. Marka Logosu (`trustedLogo5ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | Yedek güvenilen marka logosu 5 yükleyin. Boşsa paketli logo 5 kullanılır. |
| 🖼️ 5. Marka Logosu Alternatif Metni (`trustedLogo5ImageAlt`) | TEXT | Güvenen marka 5 | 🤝 Güvenilen Markalar | Hayır | — |
| 👁️ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 📝 Bölüm İçeriği / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 📝 Bölüm İçeriği / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 📝 Bölüm İçeriği / ✨ Metin Vurgusu | Hayır | — |
| 💪 Vurgulanan Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 📝 Bölüm İçeriği / ✨ Metin Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 📝 Bölüm İçeriği / ✨ Metin Vurgusu | Hayır | — |
| 👁️ Arka Plan Işımasını Göster (`showBackgroundGlow`) | BOOLEAN | true | 🎨 Görünüm ve Renkler | Hayır | — |
| 🌐 İngilizce Bölüm Üst Etiketi (`indexTextEn`) | RICH_TEXT | References | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Ana Başlık Metni (`titleTextEn`) | RICH_TEXT | Why do Turkey's largest labs | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Vurgulu Başlık Metni (`titleEmphasisEn`) | RICH_TEXT | produce with us? | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Yan Açıklama Metni (`sideHtmlEn`) | RICH_TEXT | The short answer is always the same: consistency. 580+ dental labs and clinics produce with this system because the result is the same every single time. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Müşteri Yorumunun İngilizcesi (`testimonial1TextEn`) | RICH_TEXT | Professionals trust professionals for absolute success. We collaborate with Mash in equipment selection, supply, training, and operation. | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Profil Fotoğrafı İngilizce Alternatif Metni (`testimonial1ImageAltEn`) | TEXT | Mehmet İşlek | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Müşteri Adının İngilizcesi (`testimonial1NameEn`) | RICH_TEXT | Mehmet İşlek | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Müşteri Unvanının İngilizcesi (`testimonial1RoleEn`) | RICH_TEXT | ATTELIA · Chief Physician & Founder — Designing smiles for 22 years | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Müşteri Yorumunun İngilizcesi (`testimonial2TextEn`) | RICH_TEXT | Innovative and creative. A long-term, successful collaboration across hardware, software, and materials. | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Profil Fotoğrafı İngilizce Alternatif Metni (`testimonial2ImageAltEn`) | TEXT | Berkan Öztaş | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Müşteri Adının İngilizcesi (`testimonial2NameEn`) | RICH_TEXT | Berkan Öztaş | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Müşteri Unvanının İngilizcesi (`testimonial2RoleEn`) | RICH_TEXT | DENTEK · Deputy General Manager | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Müşteri Yorumunun İngilizcesi (`testimonial3TextEn`) | RICH_TEXT | They solved problems before we even encountered them. Consistent production quality every single time — excellent results. | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Profil Fotoğrafı İngilizce Alternatif Metni (`testimonial3ImageAltEn`) | TEXT | Göksel Pişkin | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Müşteri Adının İngilizcesi (`testimonial3NameEn`) | RICH_TEXT | Göksel Pişkin | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Müşteri Unvanının İngilizcesi (`testimonial3RoleEn`) | RICH_TEXT | MIKRO LAB · Co-Founder | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 Marka Şeridi Etiketinin İngilizcesi (`trustedLabelEn`) | RICH_TEXT | Trusted by | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Marka Logosunun İngilizce Alternatif Metni (`trustedLogo1ImageAltEn`) | TEXT | Trusted brand 1 | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Marka Logosunun İngilizce Alternatif Metni (`trustedLogo2ImageAltEn`) | TEXT | Trusted brand 2 | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Marka Logosunun İngilizce Alternatif Metni (`trustedLogo3ImageAltEn`) | TEXT | Trusted brand 3 | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 4. Marka Logosunun İngilizce Alternatif Metni (`trustedLogo4ImageAltEn`) | TEXT | Trusted brand 4 | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 5. Marka Logosunun İngilizce Alternatif Metni (`trustedLogo5ImageAltEn`) | TEXT | Trusted brand 5 | 🤝 Güvenilen Markalar / 🌐 İngilizce İçerikler | Evet | — |
| 👁️ 1. Müşteri Yorumunu Göster (`showTestimonial1`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 2. Müşteri Yorumunu Göster (`showTestimonial2`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 3. Müşteri Yorumunu Göster (`showTestimonial3`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| ➕ 4. Müşteri Yorumunu Ekle / Göster (`showTestimonial4`) | BOOLEAN | false | 👁️ Görünürlük | Evet | — |
| 💬 4. Müşteri Yorumu (`testimonial4Text`) | RICH_TEXT | Yeni müşteri yorumunuzu buraya ekleyin. | 💬 Müşteri Yorumları / ➕ 4. Müşteri Yorumu | Evet | — |
| 🌐 4. Müşteri Yorumunun İngilizcesi (`testimonial4TextEn`) | RICH_TEXT | Add the new customer testimonial here. | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🖼️ 4. Profil Fotoğrafı (`testimonial4ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💬 Müşteri Yorumları / ➕ 4. Müşteri Yorumu | Hayır | — |
| 🖼️ 4. Fotoğraf Alternatif Metni (`testimonial4ImageAlt`) | TEXT | Yeni müşteri profil fotoğrafı | 💬 Müşteri Yorumları / ➕ 4. Müşteri Yorumu | Evet | — |
| 🌐 4. Profil Fotoğrafı İngilizce Alternatif Metni (`testimonial4ImageAltEn`) | TEXT | New customer profile photo | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 👤 4. Müşteri Adı (`testimonial4Name`) | RICH_TEXT | Yeni müşteri | 💬 Müşteri Yorumları / ➕ 4. Müşteri Yorumu | Evet | — |
| 🌐 4. Müşteri Adının İngilizcesi (`testimonial4NameEn`) | RICH_TEXT | New customer | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🏷️ 4. Müşteri Unvanı (`testimonial4Role`) | RICH_TEXT | Unvan veya kurum | 💬 Müşteri Yorumları / ➕ 4. Müşteri Yorumu | Evet | — |
| 🌐 4. Müşteri Unvanının İngilizcesi (`testimonial4RoleEn`) | RICH_TEXT | Role or organization | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| ➕ 5. Müşteri Yorumunu Ekle / Göster (`showTestimonial5`) | BOOLEAN | false | 👁️ Görünürlük | Evet | — |
| 💬 5. Müşteri Yorumu (`testimonial5Text`) | RICH_TEXT | Yeni müşteri yorumunuzu buraya ekleyin. | 💬 Müşteri Yorumları / ➕ 5. Müşteri Yorumu | Evet | — |
| 🌐 5. Müşteri Yorumunun İngilizcesi (`testimonial5TextEn`) | RICH_TEXT | Add another customer testimonial here. | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🖼️ 5. Profil Fotoğrafı (`testimonial5ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 💬 Müşteri Yorumları / ➕ 5. Müşteri Yorumu | Hayır | — |
| 🖼️ 5. Fotoğraf Alternatif Metni (`testimonial5ImageAlt`) | TEXT | Yeni müşteri profil fotoğrafı | 💬 Müşteri Yorumları / ➕ 5. Müşteri Yorumu | Evet | — |
| 🌐 5. Profil Fotoğrafı İngilizce Alternatif Metni (`testimonial5ImageAltEn`) | TEXT | New customer profile photo | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 👤 5. Müşteri Adı (`testimonial5Name`) | RICH_TEXT | Yeni müşteri | 💬 Müşteri Yorumları / ➕ 5. Müşteri Yorumu | Evet | — |
| 🌐 5. Müşteri Adının İngilizcesi (`testimonial5NameEn`) | RICH_TEXT | New customer | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 🏷️ 5. Müşteri Unvanı (`testimonial5Role`) | RICH_TEXT | Unvan veya kurum | 💬 Müşteri Yorumları / ➕ 5. Müşteri Yorumu | Evet | — |
| 🌐 5. Müşteri Unvanının İngilizcesi (`testimonial5RoleEn`) | RICH_TEXT | Role or organization | 💬 Müşteri Yorumları / 🌐 İngilizce İçerikler | Evet | — |
| 👁️ Marka Şeridini Göster (`showTrustedLogos`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ Marka Şeridi Etiketini Göster (`showTrustedLabel`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 🖼️ Marka Etiketi Üzerindeki Görsel (`trustedLabelHoverImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🤝 Güvenilen Markalar | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
