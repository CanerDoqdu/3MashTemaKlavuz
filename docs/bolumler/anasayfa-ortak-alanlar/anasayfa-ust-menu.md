---
title: "Anasayfa Üst Menü"
description: "3Mash temasında Anasayfa Üst Menü adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Üst Menü

## Bu bölümde

- Yapılandırmada kayıtlı 256 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Üst Menü** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü ve ayar grupları açık olarak incelendi. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Duyuru Bandını Göster (`showAnnouncement`) | BOOLEAN | true | 📢 Duyuru Bandı | Hayır | — |
| Duyuru Vurgu Başlığı (`announcementHighlightText`) | RICH_TEXT | ⚡ Fırsatı kaçırmayın. | 📢 Duyuru Bandı | Hayır | — |
| Duyuru Açıklama Metni (`announcementText`) | RICH_TEXT | Kliniğinizin sessiz kaybını 30 saniyede hesaplayın; ücretsiz analizle nasıl azaltabileceğinizi birlikte görelim. | 📢 Duyuru Bandı | Hayır | — |
| Duyuru Buton Yazısı (`announcementCtaText`) | RICH_TEXT | Hemen hesaplayın | 📢 Duyuru Bandı | Hayır | — |
| Duyuru Bağlantı Linki (`announcementHref`) | TEXT | #hesap | 📢 Duyuru Bandı | Hayır | — |
| 🌐 Duyuru Dil Seçiciyi Göster (Aç/Kapat) (`showAnnouncementLangSwitch`) | BOOLEAN | true | 📢 Duyuru Bandı / 🌐 Dil Seçenekleri | Hayır | Duyuru bandındaki sağ üst dil değiştirici butonunu ve açılır menüsünü gösterir veya gizler. |
| Türk Bayrağı Logosu (`turkishFlagImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı / 🌐 Dil Seçenekleri | Hayır | — |
| Türk Bayrağı Metni (`turkishText`) | TEXT | Türkçe (TR) | 📢 Duyuru Bandı / 🌐 Dil Seçenekleri | Hayır | — |
| İngilizce Bayrak Logosu (`englishFlagImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı / 🌐 Dil Seçenekleri | Hayır | — |
| İngilizce Metni (`englishText`) | TEXT | English (EN) | 📢 Duyuru Bandı / 🌐 Dil Seçenekleri | Hayır | — |
| Logo Görseli (WebP) (`logoImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏷️ Logo | Hayır | Yüklenen WebP logo görseli. |
| Logo Bağlantı Linki (`logoHref`) | TEXT | / | 🏷️ Logo | Hayır | Logo tıklandığında gidilecek anasayfa adresi. |
| Logo Alternatif Açıklaması (Alt Metin) (`logoImageAlt`) | TEXT | 3MASH Logo | 🏷️ Logo | Hayır | — |
| Logo Metni (Yedek) (`logoText`) | TEXT | mash | 🏷️ Logo | Hayır | Görsel yüklenmediğinde veya ekran okuyucular için metin. |
| Görsel Logo: Genişlik (px) (`logoImageWidth`) | NUMBER | 118 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Yükseklik (px) (`logoImageHeight`) | NUMBER | 25 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Yatay Konum (X) (`logoImageXOffset`) | NUMBER | 0 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Dikey Konum (Y) (`logoImageYOffset`) | NUMBER | 0 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Sığdırma Biçimi (`logoImageFit`) | ENUM | contain | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| Görsel Logo: Saydamlık (Opaklık) (`logoImageOpacity`) | NUMBER | 100 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Parlaklık (`logoImageBrightness`) | NUMBER | 100 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Kontrast (`logoImageContrast`) | NUMBER | 100 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Doygunluk (`logoImageSaturation`) | NUMBER | 100 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Renk Tonu (`logoImageHue`) | NUMBER | 0 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Görsel Logo: Renkleri Ters Çevir (`logoImageInvert`) | NUMBER | 0 | 🏷️ Logo / 📐 Görsel Logo Ayarları | Hayır | — |
| Menü Buton Metni (`productsMenuText`) | RICH_TEXT | Ürünler | 📦 Ürünler Menüsü | Hayır | — |
| 🔗 Alt Bar: Tüm Ürünleri Gör Linkini Göster (`showAllProductsLink`) | BOOLEAN | false | 📦 Ürünler Menüsü | Hayır | — |
| 📝 Tüm Ürünleri Gör Metni (`allProductsText`) | RICH_TEXT | Tüm Ürünleri Gör → | 📦 Ürünler Menüsü | Hayır | — |
| 🔗 Tüm Ürünleri Gör Bağlantısı (`allProductsHref`) | TEXT | /tum-urunler | 📦 Ürünler Menüsü | Hayır | — |
| ⭐ Öne Çıkan Ürün Kartını Göster (`showProductsFeatureCard`) | BOOLEAN | true | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | — |
| 🏷️ Öne Çıkan: Üst Rozet / Etiket (`productsFeatureEyebrow`) | RICH_TEXT | YENİ · DÜNYADA İLK | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | — |
| 📌 Öne Çıkan: Başlık (`productsFeatureTitle`) | RICH_TEXT | MASH C4P Akıllı Kürleme Cihazı | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | — |
| 📝 Öne Çıkan: Açıklama Metni (`productsFeatureDescription`) | RICH_TEXT | Post-curing'i kullanıcı hatasından arındırır: reçineye göre süre, sıcaklık ve dalga boyunu otomatik yönetir. | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | — |
| 👉 Öne Çıkan: Buton Yazısı (`productsFeatureCtaText`) | RICH_TEXT | Keşfet → | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | — |
| 🔗 Öne Çıkan: Yönlendirme Linki (`productsFeatureHref`) | TEXT | /yikama-kurleme-cihazlari | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Hayır | Öne çıkan kartın yönlendireceği ürün veya kategori sayfası. |
| 🎨 Kart Arka Plan Rengi (`featureCardBgColor`) | COLOR | #0E0E0C | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Belirtilmemiş | Öne çıkan ürün kartının arka plan rengi |
| ✏️ Kart Yazı Rengi (`featureCardTextColor`) | COLOR | #ffffff | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Belirtilmemiş | Öne çıkan ürün kartının yazı rengi |
| ⚡ Kart Vurgu / Neon Rengi (`featureCardAccentColor`) | COLOR | #C7F136 | 📦 Ürünler Menüsü / ⭐ Öne Çıkan Ürün Kartı | Belirtilmemiş | Öne çıkan ürün kartının neon vurgu rengi (rozet, buton kenarı vb.) |
| Sol Sütun Üst Başlığı (`productsCol1Title`) | RICH_TEXT | ÜRETİM | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 👁️ Ürün 1'i Göster (`showProduct1`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 1: Başlık (`product1Title`) | RICH_TEXT | 3D Yazıcılar | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 1: Açıklama (`product1Description`) | RICH_TEXT | P1D / P16L hassas baskı | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 1: Bağlantı Linki (`product1Href`) | TEXT | /3d-yazicilar | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 👁️ Ürün 2'yi Göster (`showProduct2`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 2: Başlık (`product2Title`) | RICH_TEXT | Yıkama & Kürleme | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 2: Açıklama (`product2Description`) | RICH_TEXT | Yıkama ve akıllı kürleme | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 2: Bağlantı Linki (`product2Href`) | TEXT | /yikama-kurleme-cihazlari | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 👁️ Ürün 3'ü Göster (`showProduct3`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 3: Başlık (`product3Title`) | RICH_TEXT | Dental Reçineler | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 3: Açıklama (`product3Description`) | RICH_TEXT | Dental reçine seçenekleri | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 3: Bağlantı Linki (`product3Href`) | TEXT | /dental-3d-yazici-recineleri | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 🖼️ Ürün 1 İkon Görseli (`product1IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Belirtilmemiş | Ürün 1 (3D Yazıcı) ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| 🖼️ Ürün 2 İkon Görseli (`product2IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Belirtilmemiş | Ürün 2 (Reçine) ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| 🖼️ Ürün 3 İkon Görseli (`product3IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Belirtilmemiş | Ürün 3 (Fırın/Kürleme) ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| ➕ Ürün 7'yi Ekle / Göster (`showProduct7`) | BOOLEAN | false | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 7: Başlık (`product7Title`) | RICH_TEXT | Ürün 7 başlığı | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 7: Açıklama (`product7Description`) | RICH_TEXT | Ürün 7 için kısa açıklama. | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 7: Bağlantı Linki (`product7Href`) | TEXT | Boş metin | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 🖼️ Ürün 7 İkon Görseli (`product7IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| ➕ Ürün 9'u Ekle / Göster (`showProduct9`) | BOOLEAN | false | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 9: Başlık (`product9Title`) | RICH_TEXT | Ürün 9 başlığı | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 9: Açıklama (`product9Description`) | RICH_TEXT | Ürün 9 için kısa açıklama. | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Ürün 9: Bağlantı Linki (`product9Href`) | TEXT | Boş metin | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| 🖼️ Ürün 9 İkon Görseli (`product9IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ürünler Menüsü / 🏭 Sol Sütun (Üretim) | Hayır | — |
| Sağ Sütun Üst Başlığı (`productsCol2Title`) | RICH_TEXT | TAMAMLAYICI | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 👁️ Ürün 4'ü Göster (`showProduct4`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 4: Başlık (`product4Title`) | RICH_TEXT | Masaüstü Tarayıcılar | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 4: Açıklama (`product4Description`) | RICH_TEXT | Lab tarafında hassas veri | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 4: Bağlantı Linki (`product4Href`) | TEXT | /masasustu-tarayicilar | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 👁️ Ürün 5'i Göster (`showProduct5`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 5: Başlık (`product5Title`) | RICH_TEXT | Zirkon Bloklar & Titanyum | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 5: Açıklama (`product5Description`) | RICH_TEXT | Freze tarafının sarfları | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 5: Bağlantı Linki (`product5Href`) | TEXT | /zirkon-bloklar | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 👁️ Ürün 6'yı Göster (`showProduct6`) | BOOLEAN | true | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 6: Başlık (`product6Title`) | RICH_TEXT | Dental Fırınlar | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 6: Açıklama (`product6Description`) | RICH_TEXT | Sinterleme çözümleri | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 6: Bağlantı Linki (`product6Href`) | TEXT | /dental-firinlar | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 🖼️ Ürün 4 İkon Görseli (`product4IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Belirtilmemiş | Ürün 4 ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| 🖼️ Ürün 5 İkon Görseli (`product5IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Belirtilmemiş | Ürün 5 ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| 🖼️ Ürün 6 İkon Görseli (`product6IconImageUrl`) | IMAGE | Boş metin | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Belirtilmemiş | Ürün 6 ikonunu özel görsel ile değiştir (WebP/PNG). Boşsa varsayılan emoji ikon kullanılır. |
| ➕ Ürün 8'i Ekle / Göster (`showProduct8`) | BOOLEAN | false | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 8: Başlık (`product8Title`) | RICH_TEXT | Ürün 8 başlığı | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 8: Açıklama (`product8Description`) | RICH_TEXT | Ürün 8 için kısa açıklama. | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 8: Bağlantı Linki (`product8Href`) | TEXT | Boş metin | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 🖼️ Ürün 8 İkon Görseli (`product8IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| ➕ Ürün 10'u Ekle / Göster (`showProduct10`) | BOOLEAN | false | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 10: Başlık (`product10Title`) | RICH_TEXT | Ürün 10 başlığı | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 10: Açıklama (`product10Description`) | RICH_TEXT | Ürün 10 için kısa açıklama. | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| Ürün 10: Bağlantı Linki (`product10Href`) | TEXT | Boş metin | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 🖼️ Ürün 10 İkon Görseli (`product10IconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ürünler Menüsü / 🔬 Sağ Sütun (Tamamlayıcı & Sarf) | Hayır | — |
| 💡 Neden 3mash Menüsünü Göster (`showWhyMenu`) | BOOLEAN | true | 💡 Neden 3mash | Hayır | — |
| Menü Buton Metni (`whyMenuText`) | RICH_TEXT | Neden 3mash? | 💡 Neden 3mash | Hayır | — |
| 👁️ Madde 1'i Göster (`showWhyItem1`) | BOOLEAN | true | 💡 Neden 3mash / 📌 Madde 1 | Hayır | — |
| Madde 1: Numara (`why1Number`) | RICH_TEXT | 01 | 💡 Neden 3mash / 📌 Madde 1 | Hayır | — |
| Madde 1: Başlık (`why1Title`) | RICH_TEXT | Yılda 'ya varan görünmez kayıp | 💡 Neden 3mash / 📌 Madde 1 | Hayır | — |
| Madde 1: Açıklama (`why1Description`) | RICH_TEXT | Tekrarlanan işlerin kliniğinize gerçek maliyeti | 💡 Neden 3mash / 📌 Madde 1 | Hayır | — |
| Madde 1: Bağlantı Linki (Anchor veya URL) (`why1Href`) | TEXT | / | 💡 Neden 3mash / 📌 Madde 1 | Hayır | Tıklanınca gidilecek çapa (#sebep, #cozum vb.) veya sayfa linki (örn: / veya /urunler). Varsayılan: / |
| 👁️ Madde 2'yi Göster (`showWhyItem2`) | BOOLEAN | true | 💡 Neden 3mash / 📌 Madde 2 | Hayır | — |
| Madde 2: Numara (`why2Number`) | RICH_TEXT | 02 | 💡 Neden 3mash / 📌 Madde 2 | Hayır | — |
| Madde 2: Başlık (`why2Title`) | RICH_TEXT | Sebep: ölçüsel hassasiyet | 💡 Neden 3mash / 📌 Madde 2 | Hayır | — |
| Madde 2: Açıklama (`why2Description`) | RICH_TEXT | 250–500µm sapma bandı vs ±20µm güvenli bölge | 💡 Neden 3mash / 📌 Madde 2 | Hayır | — |
| Madde 2: Bağlantı Linki (Anchor veya URL) (`why2Href`) | TEXT | /#sebep | 💡 Neden 3mash / 📌 Madde 2 | Hayır | Tıklanınca gidilecek çapa (#sebep, #cozum vb.) veya sayfa linki. Sayfa içi bölüm için /#sebep yazın. |
| 👁️ Madde 3'ü Göster (`showWhyItem3`) | BOOLEAN | true | 💡 Neden 3mash / 📌 Madde 3 | Hayır | — |
| Madde 3: Numara (`why3Number`) | RICH_TEXT | 03 | 💡 Neden 3mash / 📌 Madde 3 | Hayır | — |
| Madde 3: Başlık (`why3Title`) | RICH_TEXT | Çözüm: uyumlu ekosistem | 💡 Neden 3mash / 📌 Madde 3 | Hayır | — |
| Madde 3: Açıklama (`why3Description`) | RICH_TEXT | Yazıcı + reçine + parametre bilgisi, birlikte kalibre | 💡 Neden 3mash / 📌 Madde 3 | Hayır | — |
| Madde 3: Bağlantı Linki (Anchor veya URL) (`why3Href`) | TEXT | /#cozum | 💡 Neden 3mash / 📌 Madde 3 | Hayır | Tıklanınca gidilecek çapa (#cozum vb.) veya sayfa linki. Sayfa içi bölüm için /#cozum yazın. |
| 👁️ Madde 4'ü Göster (`showWhyItem4`) | BOOLEAN | true | 💡 Neden 3mash / 📌 Madde 4 | Hayır | — |
| Madde 4: Numara (`why4Number`) | RICH_TEXT | 04 | 💡 Neden 3mash / 📌 Madde 4 | Hayır | — |
| Madde 4: Başlık (`why4Title`) | RICH_TEXT | Ve kürleme — son %20'lik fark | 💡 Neden 3mash / 📌 Madde 4 | Hayır | — |
| Madde 4: Açıklama (`why4Description`) | RICH_TEXT | Doğru basılan iş, yanlış kürlenirse yine başarısız olur | 💡 Neden 3mash / 📌 Madde 4 | Hayır | — |
| Madde 4: Bağlantı Linki (Anchor veya URL) (`why4Href`) | TEXT | /#kurleme | 💡 Neden 3mash / 📌 Madde 4 | Hayır | Tıklanınca gidilecek çapa (#kurleme vb.) veya sayfa linki. Sayfa içi bölüm için /#kurleme yazın. |
| ➕ Madde 5'i Ekle / Göster (`showWhyItem5`) | BOOLEAN | false | 💡 Neden 3mash / ➕ Madde 5 (Yeni Ekle) | Hayır | — |
| Madde 5: Numara (`why5Number`) | RICH_TEXT | 05 | 💡 Neden 3mash / ➕ Madde 5 (Yeni Ekle) | Hayır | — |
| Madde 5: Başlık (`why5Title`) | RICH_TEXT | Yeni avantaj başlığı | 💡 Neden 3mash / ➕ Madde 5 (Yeni Ekle) | Hayır | — |
| Madde 5: Açıklama (`why5Description`) | RICH_TEXT | Bu alana avantajın kısa açıklamasını yazın. | 💡 Neden 3mash / ➕ Madde 5 (Yeni Ekle) | Hayır | — |
| Madde 5: Bağlantı Linki (Anchor veya URL) (`why5Href`) | TEXT | Boş metin | 💡 Neden 3mash / ➕ Madde 5 (Yeni Ekle) | Hayır | — |
| ➕ Madde 6'yı Ekle / Göster (`showWhyItem6`) | BOOLEAN | false | 💡 Neden 3mash / ➕ Madde 6 (Yeni Ekle) | Hayır | — |
| Madde 6: Numara (`why6Number`) | RICH_TEXT | 06 | 💡 Neden 3mash / ➕ Madde 6 (Yeni Ekle) | Hayır | — |
| Madde 6: Başlık (`why6Title`) | RICH_TEXT | Yeni avantaj başlığı | 💡 Neden 3mash / ➕ Madde 6 (Yeni Ekle) | Hayır | — |
| Madde 6: Açıklama (`why6Description`) | RICH_TEXT | Bu alana avantajın kısa açıklamasını yazın. | 💡 Neden 3mash / ➕ Madde 6 (Yeni Ekle) | Hayır | — |
| Madde 6: Bağlantı Linki (Anchor veya URL) (`why6Href`) | TEXT | Boş metin | 💡 Neden 3mash / ➕ Madde 6 (Yeni Ekle) | Hayır | — |
| Kart Parlama Efekti (`showWhyItemGlow`) | BOOLEAN | true | 💡 Neden 3mash | Hayır | — |
| 🤝 Referanslar Linkini Göster (`showReferencesMenu`) | BOOLEAN | true | 🤝 Referanslar | Hayır | — |
| 🤝 Menü Buton Metni (`referencesText`) | RICH_TEXT | Referanslar | 🤝 Referanslar | Hayır | — |
| 🔗 Yönlendirme Linki (Anchor veya URL) (`referencesHref`) | TEXT | /#referanslar | 🤝 Referanslar | Hayır | Tıklanınca gidilecek bölüm çapa linki (örn: /#referanslar) veya sayfa rotası (örn: /referanslar). Varsayılan: /#referanslar |
| 🏷️ Hedef Bölüm ID'si (Anchor) (`referencesSectionId`) | TEXT | referanslar | 🤝 Referanslar | Hayır | Anasayfadaki referanslar bölümünün HTML ID değeri (# olmadan, örn: referanslar). |
| 🎓 Akademi Linkini Göster (`showAcademyMenu`) | BOOLEAN | true | 🎓 Akademi | Hayır | — |
| 🎓 Menü Buton Metni (`academyText`) | RICH_TEXT | Academy | 🎓 Akademi | Hayır | — |
| 🔗 Yönlendirme Linki (`academyHref`) | TEXT | /pages/mash-academy | 🎓 Akademi | Hayır | Mash Academy sayfasına giden rota veya bağlantı adresi. |
| 🔍 Arama Butonunu Göster (`showSearchButton`) | BOOLEAN | true | 🔍 Arama | Hayır | — |
| 📝 Arama Kutusu Yer Tutucu Metin (`searchPlaceholder`) | TEXT | Ürün veya reçine ara... | 🔍 Arama | Hayır | — |
| 🔗 Arama Sayfası Rotası (`searchHref`) | TEXT | /search | 🔍 Arama | Hayır | Arama yapıldığında sonuçların listeleneceği sayfa rotası. |
| 📦 Canlı Arama Ürün Kataloğu (`searchProductList`) | PRODUCT_LIST | Yapılandırmada varsayılan değer belirtilmemiş | 🔍 Arama | Hayır | Canlı arama önerileri ve hızlı sonuçlar için Tüm Ürünler listesini bağlayın. |
| 🖼️ Özel Arama İkonu (Görsel) (`searchIconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🔍 Arama / 🎨 Özel Arama İkonu | Hayır | Özel görsel ikon (WebP/PNG). Yüklenmezse varsayılan büyüteç ikonu görünür. |
| 📐 Özel Arama İkonu (SVG) (`searchIconSvg`) | SVG | Yapılandırmada varsayılan değer belirtilmemiş | 🔍 Arama / 🎨 Özel Arama İkonu | Hayır | Özel vektörel SVG arama ikonu kodu. |
| 👁️ Profil Açılır Panelini Göster (`showProfileMenu`) | BOOLEAN | true | 👤 Profil & Hesap | Hayır | Profil butonuna tıklandığında açılır hesap panelinin açılmasını sağlar. |
| 🔗 Giriş / Hesap Sayfası Rotası (`accountHref`) | TEXT | /account/login | 👤 Profil & Hesap | Hayır | Giriş yapmamış kullanıcıların yönlendirileceği sayfa rotası. |
| 📝 Panel Açıklama Metni (`profileMenuDescription`) | RICH_TEXT | Siparişlerinizi takip edin, hesap bilgilerinizi yönetin veya hızlıca giriş yapın. | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔑 Giriş Yap Buton Metni (`profileLoginButtonText`) | RICH_TEXT | Giriş yap | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | Kullanıcı giriş yapmamışken panel altındaki buton metni. |
| 🚪 Çıkış Buton Metni (`profileLink6Text`) | RICH_TEXT | Çıkış yap | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | Kullanıcı giriş yapmışken panel altındaki çıkış buton metni. |
| 📦 Link 1: Başlık (Siparişlerim) (`profileLink1Text`) | RICH_TEXT | Siparişlerim | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔗 Link 1: Siparişlerim Rotası (`profileLink1Href`) | TEXT | /account/orders | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 📍 Link 2: Başlık (Adreslerim) (`profileLink2Text`) | RICH_TEXT | Adreslerim | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔗 Link 2: Adreslerim Rotası (`profileLink2Href`) | TEXT | /account/addresses | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| ⭐ Link 3: Başlık (Favorilerim) (`profileLink3Text`) | RICH_TEXT | Favorilerim | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔗 Link 3: Favorilerim Rotası (`profileLink3Href`) | TEXT | /account/favorite-products | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 👤 Link 4: Başlık (Hesap Bilgileri) (`profileLink4Text`) | RICH_TEXT | Hesap Bilgileri | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔗 Link 4: Hesap Bilgileri Rotası (`profileLink4Href`) | TEXT | /account | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🎓 Link 5: Başlık (Mash Academy) (`profileLink5Text`) | RICH_TEXT | Mash Academy | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🔗 Link 5: Mash Academy Rotası (`profileLink5Href`) | TEXT | /pages/mash-academy | 👤 Profil & Hesap / 🔗 Panel Linkleri | Hayır | — |
| 🖼️ Özel Hesap İkonu (Görsel) (`accountIconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 👤 Profil & Hesap / 🎨 Özel Hesap İkonu | Hayır | Özel görsel ikon (WebP/PNG). Yüklenmezse varsayılan kullanıcı ikonu görünür. |
| 📐 Özel Hesap İkonu (SVG) (`accountIconSvg`) | SVG | Yapılandırmada varsayılan değer belirtilmemiş | 👤 Profil & Hesap / 🎨 Özel Hesap İkonu | Hayır | Özel vektörel SVG hesap ikonu kodu. |
| 👁️ Sepet Önizleme Panelini Göster (`showStorePanel`) | BOOLEAN | true | 🛒 Sepet | Hayır | Sepet butonuna tıklandığında açılır sepet çekmecesinin/panelinin açılmasını sağlar. |
| 🔗 Sepet Sayfası Rotası (`cartHref`) | TEXT | /cart | 🛒 Sepet | Hayır | Sepet sayfasına giden rota. |
| 🛒 Boş Sepet Buton Metni (`storePanelButtonText`) | RICH_TEXT | Markete git | 🛒 Sepet | Hayır | Sepet boşken panelde gösterilen buton metni. |
| 🖼️ Özel Sepet İkonu (Görsel) (`cartIconImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛒 Sepet / 🎨 Özel Sepet İkonu | Hayır | Özel görsel ikon (WebP/PNG). Yüklenmezse varsayılan sepet/çanta ikonu görünür. |
| 📐 Özel Sepet İkonu (SVG) (`cartIconSvg`) | SVG | Yapılandırmada varsayılan değer belirtilmemiş | 🛒 Sepet / 🎨 Özel Sepet İkonu | Hayır | Özel vektörel SVG sepet ikonu kodu. |
| 📱 Mobil Menü Açma Buton Etiketi (`mobileMenuLabel`) | RICH_TEXT | Menüyü aç | 📱 Mobil Menü | Hayır | Mobil cihazlarda hamburger menü butonunun yardımcı metni. |
| 📦 'Ürünler' Linkini Göster (Aç/Kapat) (`showMobileProductsLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | — |
| 📝 'Ürünler' Buton Metni (`mobileProductsText`) | RICH_TEXT | Ürünler | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde görünecek Ürünler buton metni (boş bırakılırsa masaüstü başlığı kullanılır). |
| 🔗 'Ürünler' Yönlendirme Rotası (`mobileProductsHref`) | TEXT | /search | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde Ürünler tıklandığında gidilecek rota. |
| ⚡ Vurgulu Linki Göster (Aç/Kapat) (`showMobileHighlightLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüdeki renkli vurgulu ek linki açıp kapatır. |
| 📝 Vurgulu Link Metni (`mobileHighlightText`) | RICH_TEXT | Dental Reçineler | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Vurgulu butonun üzerinde yazacak başlık metni (örn: Dental Reçineler). |
| 🔗 Vurgulu Link Rotası (`mobileHighlightHref`) | TEXT | /dental-3d-yazici-recineleri | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Tıklanınca yönlendirilecek sayfa veya bölüm adresi. |
| 💡 'Neden 3mash' Linkini Göster (Aç/Kapat) (`showMobileWhyLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | — |
| 📝 'Neden 3mash' Buton Metni (`mobileWhyText`) | RICH_TEXT | Neden 3mash? | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde görünecek Neden 3mash buton metni. |
| 🔗 'Neden 3mash' Yönlendirme Linki (`mobileWhyHref`) | TEXT | /#sebep | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde Neden 3mash tıklandığında gidilecek bölüm çapa linki. |
| 🤝 'Referanslar' Linkini Göster (Aç/Kapat) (`showMobileReferencesLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | — |
| 📝 'Referanslar' Buton Metni (`mobileReferencesText`) | RICH_TEXT | Referanslar | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde görünecek Referanslar buton metni. |
| 🔗 'Referanslar' Yönlendirme Linki (`mobileReferencesHref`) | TEXT | /#referanslar | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde Referanslar tıklandığında gidilecek bölüm veya sayfa rotası. |
| 🎓 'Akademi' Linkini Göster (Aç/Kapat) (`showMobileAcademyLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | — |
| 📝 'Akademi' Buton Metni (`mobileAcademyText`) | RICH_TEXT | Academy | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde görünecek Akademi buton metni. |
| 🔗 'Akademi' Yönlendirme Rotası (`mobileAcademyHref`) | TEXT | /pages/mash-academy | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menüde Akademi tıklandığında gidilecek rota. |
| 👤 'Hesabım / Giriş' Linkini Göster (Aç/Kapat) (`showMobileAccountLink`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | — |
| 📝 'Hesabım' Buton Metni (Giriş Yapılmışken) (`mobileAccountText`) | RICH_TEXT | Hesabım | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Kullanıcı giriş yapmışken mobil menüde görünecek metin. |
| 🔑 'Giriş Yap' Buton Metni (Giriş Yapılmamışken) (`mobileLoginText`) | RICH_TEXT | Giriş yap | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Kullanıcı giriş yapmamışken mobil menüde görünecek metin. |
| 🔗 'Hesabım' Yönlendirme Rotası (`mobileAccountHref`) | TEXT | /account/login | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Giriş yapılmadığında yönlendirilecek sayfa rotası. |
| 🌐 Dil Değiştirici Butonları Göster (Aç/Kapat) (`showMobileLangSwitch`) | BOOLEAN | true | 📱 Mobil Menü / 🔗 Menü Bağlantıları | Hayır | Mobil menü altında Türkçe / İngilizce bayrak ve dil butonları. |
| 🌐 İngilizce Duyuru Vurgu Başlığı (`announcementHighlightTextEn`) | RICH_TEXT | ⚡ Do not miss the opportunity. | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Duyuru Açıklama Metni (`announcementTextEn`) | RICH_TEXT | Calculate your clinic's silent loss in 30 seconds; Let's see together how you can reduce it with free analysis. | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Duyuru Buton Yazısı (`announcementCtaTextEn`) | RICH_TEXT | Calculate now | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Menü Buton Metni (`productsMenuTextEn`) | RICH_TEXT | Products | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tüm Ürünleri Gör Metni (`allProductsTextEn`) | RICH_TEXT | View All Products → | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Öne Çıkan: Üst Rozet / Etiket (`productsFeatureEyebrowEn`) | RICH_TEXT | NEW · FIRST IN THE WORLD | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Öne Çıkan: Başlık (`productsFeatureTitleEn`) | RICH_TEXT | MASH C4P Smart Curing Device | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Öne Çıkan: Açıklama Metni (`productsFeatureDescriptionEn`) | RICH_TEXT | It makes post-curing free from user error: automatically manages time, temperature and wavelength according to the resin. | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Öne Çıkan: Buton Yazısı (`productsFeatureCtaTextEn`) | RICH_TEXT | Discover → | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sol Sütun Üst Başlığı (`productsCol1TitleEn`) | RICH_TEXT | Production | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 1: Başlık (`product1TitleEn`) | RICH_TEXT | 3D Printers | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 1: Açıklama (`product1DescriptionEn`) | RICH_TEXT | P1D / P16L precision printing | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 2: Başlık (`product2TitleEn`) | RICH_TEXT | Washing & Curing | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 2: Açıklama (`product2DescriptionEn`) | RICH_TEXT | Washing and smart curing | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 3: Başlık (`product3TitleEn`) | RICH_TEXT | Dental Resins | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 3: Açıklama (`product3DescriptionEn`) | RICH_TEXT | Dental resin options | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 7: Başlık (`product7TitleEn`) | RICH_TEXT | Additional product | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 7: Açıklama (`product7DescriptionEn`) | RICH_TEXT | Additional product description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 9: Başlık (`product9TitleEn`) | RICH_TEXT | Additional product | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 9: Açıklama (`product9DescriptionEn`) | RICH_TEXT | Additional product description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sağ Sütun Üst Başlığı (`productsCol2TitleEn`) | RICH_TEXT | COMPLEMENTARY | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 4: Başlık (`product4TitleEn`) | RICH_TEXT | Desktop Scanners | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 4: Açıklama (`product4DescriptionEn`) | RICH_TEXT | Precise data for the lab | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 5: Başlık (`product5TitleEn`) | RICH_TEXT | Zirconia Blocks & Titanium | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 5: Açıklama (`product5DescriptionEn`) | RICH_TEXT | Consumables for milling | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 6: Başlık (`product6TitleEn`) | RICH_TEXT | Dental Furnaces | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 6: Açıklama (`product6DescriptionEn`) | RICH_TEXT | Sintering solutions | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 8: Başlık (`product8TitleEn`) | RICH_TEXT | Additional product | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 8: Açıklama (`product8DescriptionEn`) | RICH_TEXT | Additional product description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 10: Başlık (`product10TitleEn`) | RICH_TEXT | Additional product | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün 10: Açıklama (`product10DescriptionEn`) | RICH_TEXT | Additional product description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Menü Buton Metni (`whyMenuTextEn`) | RICH_TEXT | Why 3mash? | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 1: Başlık (`why1TitleEn`) | RICH_TEXT | Invisible loss up to $126K per year | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 1: Açıklama (`why1DescriptionEn`) | RICH_TEXT | The true cost of remakes to your clinic | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 2: Başlık (`why2TitleEn`) | RICH_TEXT | Reason: dimensional accuracy | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 2: Açıklama (`why2DescriptionEn`) | RICH_TEXT | 250–500µm deviation band vs ±20µm safe zone | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 3: Başlık (`why3TitleEn`) | RICH_TEXT | Solution: compatible ecosystem | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 3: Açıklama (`why3DescriptionEn`) | RICH_TEXT | Printer + resin + process knowledge, calibrated together | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 4: Başlık (`why4TitleEn`) | RICH_TEXT | And curing - the final 20% difference | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 4: Açıklama (`why4DescriptionEn`) | RICH_TEXT | A correctly printed job still fails if cured incorrectly | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 5: Başlık (`why5TitleEn`) | RICH_TEXT | Additional reason | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 5: Açıklama (`why5DescriptionEn`) | RICH_TEXT | Additional reason description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 6: Başlık (`why6TitleEn`) | RICH_TEXT | Additional reason | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Madde 6: Açıklama (`why6DescriptionEn`) | RICH_TEXT | Additional reason description | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Menü Buton Metni (`referencesTextEn`) | RICH_TEXT | References | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Menü Buton Metni (`academyTextEn`) | RICH_TEXT | Academy | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Arama Kutusu Yer Tutucu Metin (`searchPlaceholderEn`) | TEXT | Search for a product or resin... | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Panel Açıklama Metni (`profileMenuDescriptionEn`) | RICH_TEXT | Track your orders, manage your account details, or sign in quickly. | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Giriş Yap Buton Metni (`profileLoginButtonTextEn`) | RICH_TEXT | Sign in | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Çıkış Buton Metni (`profileLink6TextEn`) | RICH_TEXT | Sign out | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Link 1: Başlık (Siparişlerim) (`profileLink1TextEn`) | RICH_TEXT | My orders | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Link 2: Başlık (Adreslerim) (`profileLink2TextEn`) | RICH_TEXT | My addresses | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Link 3: Başlık (Favorilerim) (`profileLink3TextEn`) | RICH_TEXT | My favorites | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Link 4: Başlık (Hesap Bilgileri) (`profileLink4TextEn`) | RICH_TEXT | Account details | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Link 5: Başlık (Mash Academy) (`profileLink5TextEn`) | RICH_TEXT | Mash Academy | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Boş Sepet Buton Metni (`storePanelButtonTextEn`) | RICH_TEXT | Go to store | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Mobil Menü Açma Buton Etiketi (`mobileMenuLabelEn`) | RICH_TEXT | Open menu | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürünler' Buton Metni (`mobileProductsTextEn`) | RICH_TEXT | Products | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Vurgulu Link Metni (`mobileHighlightTextEn`) | RICH_TEXT | Dental Resins | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Neden 3mash' Buton Metni (`mobileWhyTextEn`) | RICH_TEXT | Why 3mash? | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Referanslar' Buton Metni (`mobileReferencesTextEn`) | RICH_TEXT | References | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Akademi' Buton Metni (`mobileAcademyTextEn`) | RICH_TEXT | Academy | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hesabım' Buton Metni (Giriş Yapılmışken) (`mobileAccountTextEn`) | RICH_TEXT | My account | 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Giriş Yap' Buton Metni (Giriş Yapılmamışken) (`mobileLoginTextEn`) | RICH_TEXT | Sign in | 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Eylem İkonlarını Göster (`showActionIcons`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Vurgulanacak İfade (`styledPhrase`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎨 Metin Görünümü | Hayır | — |
| 👁️ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | true | 🎨 Metin Görünümü | Hayır | — |
| ✍️ Vurguyu Kalın Göster (`styledPhraseBold`) | BOOLEAN | false | 🎨 Metin Görünümü | Hayır | — |
| ✍️ Vurguyu İtalik Göster (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Metin Görünümü | Hayır | — |
| 📢 Duyuru Vurgusunu Kalın Göster (`announcementStyledPhraseBold`) | BOOLEAN | false | 🎨 Metin Görünümü | Hayır | — |
| 📢 Duyuru Vurgusunu İtalik Göster (`announcementStyledPhraseItalic`) | BOOLEAN | false | 🎨 Metin Görünümü | Hayır | — |
| 🔗 Arama URL Parametresi (`searchQueryParam`) | TEXT | q | 🔍 Arama | Hayır | — |
| 👁️ Anasayfa Video Penceresini Göster (`showShopperVideo`) | BOOLEAN | true | 🎬 Anasayfa Video Penceresi | Hayır | — |
| 🎞️ Anasayfa Videosu (`shopperVideo`) | VIDEO | Yapılandırmada varsayılan değer belirtilmemiş | 🎬 Anasayfa Video Penceresi | Hayır | — |
| 🔗 Video Bağlantısı (`shopperVideoHref`) | TEXT | [bağlantı çıkarıldı] | 🎬 Anasayfa Video Penceresi | Hayır | Yerel video yüklenmediyse YouTube bağlantısı veya doğrudan MP4/WebM video adresi kullanılır. |
| ↔️ Video Penceresi Genişliği (px) (`shopperVideoWindowWidth`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 🎬 Anasayfa Video Penceresi | Hayır | — |
| ↕️ Video Penceresi Yüksekliği (px) (`shopperVideoWindowHeight`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 🎬 Anasayfa Video Penceresi | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
