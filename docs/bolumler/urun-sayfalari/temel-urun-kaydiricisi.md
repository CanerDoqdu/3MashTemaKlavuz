---
title: "Temel Ürün Kaydırıcısı"
description: "3Mash temasında Temel Ürün Kaydırıcısı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Temel Ürün Kaydırıcısı

## Bu bölümde

- Yapılandırmada kayıtlı 66 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Temel Ürün Kaydırıcısı** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 01. Genel ve Bölüm ID | Hayır | Ürün sayfasındaki mevcut ürünü bağla. Slider sadece reçine ürünlerinde render edilir. |
| Bu Section Göster (`sectionVisible`) | BOOLEAN | true | 01. Genel ve Bölüm ID | Hayır | Kapalıysa ürünler basic slider section render edilmez. |
| Section Anchor ID (`sectionAnchorId`) | TEXT | Boş metin | 01. Genel ve Bölüm ID | Hayır | — |
| Setup Mesajı (`setupMessage`) | TEXT | Slider görseli ekleyin. | 01. Genel ve Bölüm ID | Hayır | — |
| Slider Erişilebilirlik Etiketi (`carouselAriaLabel`) | TEXT | Uyumlu cihazlar | 01. Genel ve Bölüm ID | Hayır | — |
| Üst Metni Göster (`showIntro`) | BOOLEAN | true | 02. Üst Başlık ve Açıklama | Hayır | — |
| Üst Başlık (`introTitle`) | TEXT | Uyumlu Cihazlar | 02. Üst Başlık ve Açıklama | Hayır | — |
| Üst Açıklama (`introDescriptionHtml`) | RICH_TEXT | Custom Resin Solutions resmi distribütörü olarak; kullandığınız 3D yazıcı markası fark etmeksizin, parametre uyumlama işlemini ücretsiz olarak gerçekleştirmekteyiz. Satış sonrası kullanıcı eğitimleri ve 7/24 teknik destek ile yanınızdayız. | 02. Üst Başlık ve Açıklama | Hayır | — |
| Üst Metin Hizası (`introAlign`) | TEXT | center | 02. Üst Başlık ve Açıklama | Hayır | left, center veya right yazın. |
| Üst Metin Maksimum Genişlik (`introMaxWidth`) | NUMBER | 1320 | 02. Üst Başlık ve Açıklama | Hayır | — |
| Üst Metin Alt Boşluk (`introSpacing`) | NUMBER | 42 | 02. Üst Başlık ve Açıklama | Hayır | — |
| Üst Başlık Font Boyutu (`introTitleFontSize`) | NUMBER | 22 | 03. Başlık Tipografisi | Hayır | — |
| Üst Açıklama Font Boyutu (`introBodyFontSize`) | NUMBER | 16 | 03. Başlık Tipografisi | Hayır | — |
| Görsel Sayısı (`imageCount`) | NUMBER | 9 | 04. Gösterilecek Görsel Sayısı | Hayır | — |
| Görsel 1 Göster (`image1Enabled`) | BOOLEAN | true | 05. 1. Slider Görseli | Hayır | — |
| Görsel 1 (`image1`) | IMAGE | Boş metin | 05. 1. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 1 Alt Metin (`image1Alt`) | TEXT | Uyumlu cihaz 1 | 05. 1. Slider Görseli | Hayır | — |
| Görsel 2 Göster (`image2Enabled`) | BOOLEAN | true | 06. 2. Slider Görseli | Hayır | — |
| Görsel 2 (`image2`) | IMAGE | Boş metin | 06. 2. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 2 Alt Metin (`image2Alt`) | TEXT | Uyumlu cihaz 2 | 06. 2. Slider Görseli | Hayır | — |
| Görsel 3 Göster (`image3Enabled`) | BOOLEAN | true | 07. 3. Slider Görseli | Hayır | — |
| Görsel 3 (`image3`) | IMAGE | Boş metin | 07. 3. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 3 Alt Metin (`image3Alt`) | TEXT | Uyumlu cihaz 3 | 07. 3. Slider Görseli | Hayır | — |
| Görsel 4 Göster (`image4Enabled`) | BOOLEAN | true | 08. 4. Slider Görseli | Hayır | — |
| Görsel 4 (`image4`) | IMAGE | Boş metin | 08. 4. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 4 Alt Metin (`image4Alt`) | TEXT | Uyumlu cihaz 4 | 08. 4. Slider Görseli | Hayır | — |
| Görsel 5 Göster (`image5Enabled`) | BOOLEAN | true | 09. 5. Slider Görseli | Hayır | — |
| Görsel 5 (`image5`) | IMAGE | Boş metin | 09. 5. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 5 Alt Metin (`image5Alt`) | TEXT | Uyumlu cihaz 5 | 09. 5. Slider Görseli | Hayır | — |
| Görsel 6 Göster (`image6Enabled`) | BOOLEAN | true | 10. 6. Slider Görseli | Hayır | — |
| Görsel 6 (`image6`) | IMAGE | Boş metin | 10. 6. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 6 Alt Metin (`image6Alt`) | TEXT | Uyumlu cihaz 6 | 10. 6. Slider Görseli | Hayır | — |
| Görsel 7 Göster (`image7Enabled`) | BOOLEAN | true | 11. 7. Slider Görseli | Hayır | — |
| Görsel 7 (`image7`) | IMAGE | Boş metin | 11. 7. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 7 Alt Metin (`image7Alt`) | TEXT | Uyumlu cihaz 7 | 11. 7. Slider Görseli | Hayır | — |
| Görsel 8 Göster (`image8Enabled`) | BOOLEAN | true | 12. 8. Slider Görseli | Hayır | — |
| Görsel 8 (`image8`) | IMAGE | Boş metin | 12. 8. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 8 Alt Metin (`image8Alt`) | TEXT | Uyumlu cihaz 8 | 12. 8. Slider Görseli | Hayır | — |
| Görsel 9 Göster (`image9Enabled`) | BOOLEAN | true | 13. 9. Slider Görseli | Hayır | — |
| Görsel 9 (`image9`) | IMAGE | Boş metin | 13. 9. Slider Görseli | Hayır | Boş bırakılırsa component içindeki hazır görsel kullanılır. |
| Görsel 9 Alt Metin (`image9Alt`) | TEXT | Uyumlu cihaz 9 | 13. 9. Slider Görseli | Hayır | — |
| Maksimum Genişlik (`maxWidth`) | NUMBER | 1240 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Üst Boşluk (`paddingTop`) | NUMBER | 28 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Alt Boşluk (`paddingBottom`) | NUMBER | 28 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Desktop Görünen Görsel (`visibleImagesDesktop`) | NUMBER | 4 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Tablet Görünen Görsel (`visibleImagesTablet`) | NUMBER | 3 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Görseller Arası Boşluk (`imageGap`) | NUMBER | 42 | 14. Yerleşim ve Görsel Sayısı | Hayır | — |
| Slider Süresi (`carouselDurationSeconds`) | NUMBER | 64 | 15. Slider Davranışı ve Hız | Hayır | — |
| Hoverda Durdur (`pauseOnHover`) | BOOLEAN | true | 15. Slider Davranışı ve Hız | Hayır | — |
| Kenar Fade Genişliği (`edgeFadeWidth`) | NUMBER | 32 | 15. Slider Davranışı ve Hız | Hayır | — |
| Görsel Genişliği (`imageWidth`) | NUMBER | 150 | 16. Görsel Stili ve Oran | Hayır | — |
| Görsel Yüksekliği (`imageHeight`) | NUMBER | 150 | 16. Görsel Stili ve Oran | Hayır | — |
| Görsel X Kaydırma (`imageXOffset`) | NUMBER | 0 | 16. Görsel Stili ve Oran | Hayır | — |
| Görsel Y Kaydırma (`imageYOffset`) | NUMBER | 0 | 16. Görsel Stili ve Oran | Hayır | — |
| Görsel Yerleşimi (`imageFit`) | TEXT | contain | 16. Görsel Stili ve Oran | Hayır | contain, cover, fill veya scale-down. |
| Görsel Ölçek (`imageScale`) | NUMBER | 1 | 16. Görsel Stili ve Oran | Hayır | — |
| Görsel Opaklık (`imageOpacity`) | NUMBER | 100 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Görsel Brightness (`imageBrightness`) | NUMBER | 100 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Görsel Contrast (`imageContrast`) | NUMBER | 100 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Görsel Saturation (`imageSaturation`) | NUMBER | 100 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Görsel Hue (`imageHue`) | NUMBER | 0 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Görsel Invert (`imageInvert`) | NUMBER | 0 | 17. Görsel Efekt ve Filtreleri | Hayır | — |
| Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 18. Görünüm ve Renkler | Hayır | — |
| Yazı Rengi (`textColor`) | COLOR | #0E0E0C | 18. Görünüm ve Renkler | Hayır | — |
| İkincil Yazı Rengi (`subTextColor`) | COLOR | #55554E | 18. Görünüm ve Renkler | Hayır | — |
| Ürün Template JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 01. Genel ve Bölüm ID | Hayır | CRS kaynaklı reusable ürün template datası. Doluysa source'da karşılığı olmayan bu section ürün template'inde render edilmez. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
