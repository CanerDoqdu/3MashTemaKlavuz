---
title: "Anasayfa Alt Bilgi"
description: "3Mash temasında Anasayfa Alt Bilgi adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Alt Bilgi

## Bu bölümde

- Yapılandırmada kayıtlı 154 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Alt Bilgi** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Logo Erişilebilirlik Metni (`logoText`) | RICH_TEXT | 3mash | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | — |
| 📝 Marka Açıklaması (`descriptionText`) | RICH_TEXT | Dental klinik ve laboratuvarlar için entegre 3D baskı ekosistemi: yazıcı, reçine, kürleme çözümleri ve üretim uzmanlığı bir arada. | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | — |
| 📝 Ürün Bağlantısı 1 Metni (`productLink1Text`) | RICH_TEXT | 3D Yazıcılar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Ürün Bağlantısı 1 Adresi (`productLink1Href`) | TEXT | /3d-yazicilar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Tam domain kullanmayın; kategori routeunu /3d-yazicilar olarak girin. |
| 📝 Ürün Bağlantısı 2 Metni (`productLink2Text`) | RICH_TEXT | Dental Reçineler | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Ürün Bağlantısı 2 Adresi (`productLink2Href`) | TEXT | /dental-3d-yazici-recineleri | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Tam domain kullanmayın; kategori routeunu /dental-3d-yazici-recineleri olarak girin. |
| 📝 Ürün Bağlantısı 3 Metni (`productLink3Text`) | RICH_TEXT | Yıkama & Kürleme | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Ürün Bağlantısı 3 Adresi (`productLink3Href`) | TEXT | /yikama-kurleme-cihazlari | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Tam domain kullanmayın; kategori routeunu /yikama-kurleme-cihazlari olarak girin. |
| 📝 Ürün Bağlantısı 4 Metni (`productLink4Text`) | RICH_TEXT | Masaüstü Tarayıcılar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Ürün Bağlantısı 4 Adresi (`productLink4Href`) | TEXT | /masasustu-tarayicilar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Kategori rotasını tam domain olmadan /masasustu-tarayicilar biçiminde girin. |
| 📝 Şirket Bağlantısı 1 Metni (`companyLink1Text`) | RICH_TEXT | Hakkımızda | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Şirket Bağlantısı 1 Adresi (`companyLink1Href`) | TEXT | /pages/hakkimizda | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | Hakkımızda sayfası için yayın routeu: /pages/hakkimizda. |
| 📝 Şirket Bağlantısı 2 Metni (`companyLink2Text`) | RICH_TEXT | Mash Academy | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Şirket Bağlantısı 2 Adresi (`companyLink2Href`) | TEXT | /pages/mash-academy | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | Doğru Academy routeu /pages/mash-academy. |
| 📝 Şirket Bağlantısı 3 Metni (`companyLink3Text`) | RICH_TEXT | Blog | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Şirket Bağlantısı 3 Adresi (`companyLink3Href`) | TEXT | /blog | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | Tam domain kullanmayın; blog routeunu /blog olarak girin. |
| 📝 Şirket Bağlantısı 4 Metni (`companyLink4Text`) | RICH_TEXT | SSS | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Şirket Bağlantısı 4 Adresi (`companyLink4Href`) | TEXT | /pages/sss | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | SSS sayfası için yayın rotası /pages/sss biçimindedir. |
| 📝 İletişim Bağlantısı 1 Metni (`contactLink1Text`) | RICH_TEXT | info@[3Mash alan adı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | — |
| 🔗 İletişim Bağlantısı 1 Adresi (`contactLink1Href`) | TEXT | mailto:info@[3Mash alan adı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | Email için mailto: formatı kullanılır. |
| 📝 İletişim Bağlantısı 2 Metni (`contactLink2Text`) | RICH_TEXT | Antalya Teknokent, Konyaaltı | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | — |
| 🔗 İletişim Bağlantısı 2 Adresi (`contactLink2Href`) | TEXT | [bağlantı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | Harita bağlantısı için HTTPS adresi kullanın. |
| 📝 İletişim Bağlantısı 3 Metni (`contactLink3Text`) | RICH_TEXT | Telefonla İletişim | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | — |
| 🔗 İletişim Bağlantısı 3 Adresi (`contactLink3Href`) | TEXT | tel:+905314326577 | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | Telefon bağlantısını tel:+ülke-kodu-numara biçiminde girin. |
| 📝 Telif Hakkı Metni (`copyrightText`) | RICH_TEXT | © 2026 3MASH Teknoloji A.Ş. Tüm hakları saklıdır. | ⚖️ Yasal İçerik | Hayır | — |
| 🎨 Alt Bilgi Arka Planı (`backgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Başlık ve Logo Rengi (`textColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Bağlantı Metni Rengi (`mutedTextColor`) | COLOR | #8B8B80 | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #26261F | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 📝 Ürün Sütunu Başlığı (`productColumnTitle`) | RICH_TEXT | Ürünler | 🔗 Ürün Bağlantıları / 📂 Kategori ve Menü Kaynakları | Hayır | — |
| 📝 Şirket Sütunu Başlığı (`companyColumnTitle`) | RICH_TEXT | ŞİRKET | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | — |
| 📝 İletişim Sütunu Başlığı (`contactColumnTitle`) | RICH_TEXT | İLETİŞİM | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | — |
| 📂 Ürün Kategorileri (`productCategoryList`) | CATEGORY_LIST | \{"categoryListType":"ALL","initialSort":"A_Z","initialLimit":50,"categoryIds":null\} | 🔗 Ürün Bağlantıları / 📂 Kategori ve Menü Kaynakları | Hayır | Tüm Kategoriler ya da seçili kategorilere bağlayın. Ayarlandığında alt bilgi Ürünler sütunu canlı ikas kategorilerini okur. |
| 🔗 Ürün Sütunu Bağlantı Listesi (`productFooterLinks`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Ürün Bağlantıları / 📂 Kategori ve Menü Kaynakları | Hayır | Alt bilgi Ürünler sütunu için editörden yönetilen isteğe bağlı Bağlantılar. Ürün alt bilgi kategorileri boş olduğunda kullanılır. |
| 🔢 En Fazla Kategori Sayısı (`footerCategoryLimit`) | NUMBER | 6 | 🔗 Ürün Bağlantıları / 📂 Kategori ve Menü Kaynakları | Hayır | Alt bilgi Ürünler sütununda gösterilecek maksimum canlı ikas kategori sayısı. |
| 🔗 Şirket Bağlantı Listesi (`companyFooterLinks`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🏢 Şirket Bağlantıları / 🔗 Elle Düzenlenen Linkler | Hayır | Alt bilgi Şirket sütunu için editörden yönetilen isteğe bağlı Bağlantılar. |
| 🔗 İletişim Bağlantı Listesi (`contactFooterLinks`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📇 İletişim Bilgileri | Hayır | Alt bilgi İletişim sütunu için editörden yönetilen isteğe bağlı Bağlantılar. |
| 🔗 Logo Ana Sayfa Adresi (`logoHref`) | TEXT | / | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | Tam domain kullanmayın; anasayfa için / girin. |
| 🖼️ Logo Görseli (`logoImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | Logo görseli veya Logo SVG kullanın. İkisi de girilirse Logo SVG gösterilir. |
| 🖼️ Logo Alternatif Metni (`logoImageAlt`) | TEXT | 3mash | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | — |
| 🖼️ Logo SVG Kodu (`logoSvg`) | SVG | Yapılandırmada varsayılan değer belirtilmemiş | 🏷️ Marka İçeriği / 🖼️ Logo İçeriği | Hayır | Logo görseli veya Logo SVG kullanın. İkisi de girilirse Logo SVG gösterilir. |
| 📐 Logo Görseli Genişliği (`logoImageWidth`) | NUMBER | 116 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | Genişlik piksel cinsindendir; geçerli aralık 40–300 px. |
| 📐 Logo Görseli Yüksekliği (`logoImageHeight`) | NUMBER | 24 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | Yükseklik piksel cinsindendir; geçerli aralık 12–100 px. |
| ↔️ Logo Görseli Yatay Konumu (`logoImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| ↕️ Logo Görseli Dikey Konumu (`logoImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🖼️ Logo Görseli Sığdırma (`logoImageFit`) | ENUM | contain | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🎚️ Logo Görseli Opaklığı (`logoImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ Logo Görseli Parlaklığı (`logoImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ Logo Görseli Karşıtlığı (`logoImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ Logo Görseli Doygunluğu (`logoImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ Logo Görseli Tonu (`logoImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ Logo Görseli Renk Ters Çevirme (`logoImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 📐 SVG Logo Genişliği (`logoSvgWidth`) | NUMBER | 116 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | Genişlik piksel cinsindendir; geçerli aralık 40–300 px. |
| 📐 SVG Logo Yüksekliği (`logoSvgHeight`) | NUMBER | 24 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | Yükseklik piksel cinsindendir; geçerli aralık 12–100 px. |
| ↔️ SVG Logo Yatay Konumu (`logoSvgXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| ↕️ SVG Logo Dikey Konumu (`logoSvgYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Opaklığı (`logoSvgOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Parlaklığı (`logoSvgBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Karşıtlığı (`logoSvgContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Doygunluğu (`logoSvgSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Tonu (`logoSvgHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 🎚️ SVG Logo Renk Ters Çevirme (`logoSvgInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Logo Görünümü | Hayır | — |
| 📝 Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / 📝 Metin Biçimi | Hayır | — |
| 📝 Vurgulanacak İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / 📝 Metin Biçimi | Hayır | — |
| 🎨 Vurgulanan İfade Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / 📝 Metin Biçimi | Hayır | — |
| 📝 Vurgulanan İfadeyi Kalınlaştır (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / 📝 Metin Biçimi | Hayır | — |
| 📝 Vurgulanan İfadeyi İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / 📝 Metin Biçimi | Hayır | — |
| 📝 Ürün Bağlantısı 5 Metni (`productLink5Text`) | RICH_TEXT | Zirkon Bloklar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | — |
| 🔗 Ürün Bağlantısı 5 Adresi (`productLink5Href`) | TEXT | /zirkon-bloklar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Kategori rotasını tam domain olmadan /zirkon-bloklar biçiminde girin. |
| 📝 Ürün Bağlantısı 6 Metni (`productLink6Text`) | RICH_TEXT | Dental Fırınlar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Altıncı bağlantıyı gizlemek için görünürlük anahtarını kapatın. |
| 🔗 Ürün Bağlantısı 6 Adresi (`productLink6Href`) | TEXT | /dental-firinlar | 🔗 Ürün Bağlantıları / ✍️ Elle Düzenlenen Linkler | Hayır | Kategori rotasını tam domain olmadan /dental-firinlar biçiminde girin. |
| 📝 Yasal Bağlantı 1 Metni (`legalLink1Text`) | RICH_TEXT | KVKK | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | — |
| 🔗 Yasal Bağlantı 1 Adresi (`legalLink1Href`) | TEXT | /pages/kvkk | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | KVKK sayfası için yayın routeu: /pages/kvkk. |
| 📝 Yasal Bağlantı 2 Metni (`legalLink2Text`) | RICH_TEXT | Çerez Tercihleri | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | — |
| 🔗 Yasal Bağlantı 2 Adresi (`legalLink2Href`) | TEXT | # | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | Çerez tercihleri için # kullanın; bu bağlantı çerez ayarlarını açar. |
| 📝 Yasal Bağlantı 3 Metni (`legalLink3Text`) | RICH_TEXT | İade & Garanti | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | — |
| 🔗 Yasal Bağlantı 3 Adresi (`legalLink3Href`) | TEXT | /pages/iade-ve-garanti | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | İade ve garanti sayfası için yayın rotası /pages/iade-ve-garanti biçimindedir. |
| 📝 Yasal Bağlantı 4 Metni (`legalLink4Text`) | RICH_TEXT | Mesafeli Satış | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | — |
| 🔗 Yasal Bağlantı 4 Adresi (`legalLink4Href`) | TEXT | /pages/mesafeli-satis-sozlesmesi | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | Mesafeli satış sayfası için yayın rotası /pages/mesafeli-satis-sozlesmesi biçimindedir. |
| 🌐 Marka Açıklaması (`descriptionTextEn`) | RICH_TEXT | Integrated 3D printing ecosystem for dental clinics and laboratories: printers, resins, curing solutions, and manufacturing expertise together. | 🏷️ Marka İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Sütunu Başlığı (`productColumnTitleEn`) | RICH_TEXT | PRODUCTS | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 1 Metni (`productLink1TextEn`) | RICH_TEXT | 3D Printers | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 2 Metni (`productLink2TextEn`) | RICH_TEXT | Dental Resins | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 3 Metni (`productLink3TextEn`) | RICH_TEXT | Wash & Cure | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 4 Metni (`productLink4TextEn`) | RICH_TEXT | Desktop Scanners | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 5 Metni (`productLink5TextEn`) | RICH_TEXT | Zirconia Blocks | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantısı 6 Metni (`productLink6TextEn`) | RICH_TEXT | Dental Furnaces | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Ürün Bağlantı Listesi (`productFooterLinksEn`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Ürün Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Sütunu Başlığı (`companyColumnTitleEn`) | RICH_TEXT | COMPANY | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Bağlantısı 1 Metni (`companyLink1TextEn`) | RICH_TEXT | About Us | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Bağlantısı 2 Metni (`companyLink2TextEn`) | RICH_TEXT | Mash Academy | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Bağlantısı 3 Metni (`companyLink3TextEn`) | RICH_TEXT | Blog | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Bağlantısı 4 Metni (`companyLink4TextEn`) | RICH_TEXT | FAQ | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Şirket Bağlantı Listesi (`companyFooterLinksEn`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🏢 Şirket Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İletişim Sütunu Başlığı (`contactColumnTitleEn`) | RICH_TEXT | CONTACT | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İletişim Bağlantısı 1 Metni (`contactLink1TextEn`) | RICH_TEXT | info@[3Mash alan adı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İletişim Bağlantısı 2 Metni (`contactLink2TextEn`) | RICH_TEXT | Antalya Teknokent, Konyaaltı | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İletişim Bağlantısı 3 Metni (`contactLink3TextEn`) | RICH_TEXT | Call us | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İletişim Bağlantı Listesi (`contactFooterLinksEn`) | LIST_OF_LINK | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Ödeme Yöntemleri Erişilebilirlik Metni (`paymentMethodsLabel`) | RICH_TEXT | Ödeme yöntemleri | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🌐 Ödeme Yöntemleri Erişilebilirlik Metni (`paymentMethodsLabelEn`) | RICH_TEXT | Payment methods | 📞 İletişim ve Sosyal Medya / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Telif Hakkı Metni (`copyrightTextEn`) | RICH_TEXT | © 2026 3MASH Technology Inc. All rights reserved. | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Yasal Bağlantı 1 Metni (`legalLink1TextEn`) | RICH_TEXT | Privacy & KVKK | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Yasal Bağlantı 2 Metni (`legalLink2TextEn`) | RICH_TEXT | Cookie Settings | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Yasal Bağlantı 3 Metni (`legalLink3TextEn`) | RICH_TEXT | Return & Warranty | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 Yasal Bağlantı 4 Metni (`legalLink4TextEn`) | RICH_TEXT | Distance Selling | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Marka Alanını Göster (`showBrand`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Marka Açıklamasını Göster (`showDescription`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Sütununu Göster (`showProductColumn`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Şirket Sütununu Göster (`showCompanyColumn`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İletişim Sütununu Göster (`showContactColumn`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sosyal Medya Simgelerini Göster (`showSocialIcons`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ödeme Simgelerini Göster (`showPaymentBadges`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yasal Bilgileri Göster (`showLegalInfo`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 1 Göster (`showProductLink1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 2 Göster (`showProductLink2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 3 Göster (`showProductLink3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 4 Göster (`showProductLink4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 5 Göster (`showProductLink5`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Bağlantısı 6 Göster (`showProductLink6`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Şirket Bağlantısı 1 Göster (`showCompanyLink1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yasal Bağlantı 1 Göster (`showLegalLink1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Şirket Bağlantısı 2 Göster (`showCompanyLink2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yasal Bağlantı 2 Göster (`showLegalLink2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Şirket Bağlantısı 3 Göster (`showCompanyLink3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yasal Bağlantı 3 Göster (`showLegalLink3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Şirket Bağlantısı 4 Göster (`showCompanyLink4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yasal Bağlantı 4 Göster (`showLegalLink4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İletişim Bağlantısı 1 Göster (`showContactLink1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İletişim Bağlantısı 2 Göster (`showContactLink2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İletişim Bağlantısı 3 Göster (`showContactLink3`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 📝 Yasal Bağlantı 5 Metni (`legalLink5Text`) | RICH_TEXT | Üyelik Sözleşmesi | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | — |
| 🔗 Yasal Bağlantı 5 Adresi (`legalLink5Href`) | TEXT | /pages/uyelik-sozlesmesi | ⚖️ Yasal İçerik / 🔗 Yasal Bağlantılar | Hayır | Üyelik sözleşmesi sayfası için yayın rotası /pages/uyelik-sozlesmesi biçimindedir. |
| 🌐 Yasal Bağlantı 5 Metni (`legalLink5TextEn`) | RICH_TEXT | Membership Agreement | ⚖️ Yasal İçerik / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Visa Simgesi Etiketi (`visaBadgeLabel`) | TEXT | VISA | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| ♿ Maestro Simgesi Etiketi (`maestroBadgeLabel`) | TEXT | Maestro | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| ♿ Mastercard Simgesi Etiketi (`mastercardBadgeLabel`) | TEXT | Mastercard | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 👁️ Yasal Bağlantı 5 Göster (`showLegalLink5`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 🔗 Facebook Sayfası (`facebookHref`) | TEXT | [bağlantı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | Güvenli bağlantı için HTTPS adresi kullanın. |
| ♿ Facebook Erişilebilirlik Metni (`facebookLabel`) | TEXT | Facebook | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🔗 Instagram Sayfası (`instagramHref`) | TEXT | [bağlantı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | Güvenli bağlantı için HTTPS adresi kullanın. |
| ♿ Instagram Erişilebilirlik Metni (`instagramLabel`) | TEXT | Instagram | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🔗 YouTube Kanalı (`youtubeHref`) | TEXT | [bağlantı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | Güvenli bağlantı için HTTPS adresi kullanın. |
| ♿ YouTube Erişilebilirlik Metni (`youtubeLabel`) | TEXT | YouTube | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🔗 LinkedIn Sayfası (`linkedinHref`) | TEXT | [bağlantı çıkarıldı] | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | Güvenli bağlantı için HTTPS adresi kullanın. |
| ♿ LinkedIn Erişilebilirlik Metni (`linkedinLabel`) | TEXT | LinkedIn | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ Facebook Simgesi (`facebookIconImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ Instagram Simgesi (`instagramIconImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ YouTube Simgesi (`youtubeIconImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ LinkedIn Simgesi (`linkedinIconImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ Visa Ödeme Görseli (`visaBadgeImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ Maestro Ödeme Görseli (`maestroBadgeImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |
| 🖼️ Mastercard Ödeme Görseli (`mastercardBadgeImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📞 İletişim ve Sosyal Medya / 📱 Sosyal Medya ve Ödeme | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
