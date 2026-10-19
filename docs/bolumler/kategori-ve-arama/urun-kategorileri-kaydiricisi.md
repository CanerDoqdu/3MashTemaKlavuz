---
title: "Ürün Kategorileri Kaydırıcısı"
description: "3Mash temasında Ürün Kategorileri Kaydırıcısı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Kategorileri Kaydırıcısı

## Bu bölümde

- Yapılandırmada kayıtlı 71 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Kategorileri Kaydırıcısı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 Sayfa Ürünü (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kaynağı | Hayır | Bu sayfadaki ürünü seçin. Otomatik mod, bu ürünün kategorisine göre ürünleri listeler. |
| 🔢 İlgili Ürünler Bölüm Sırası (`relatedIndex`) | TEXT | Boş metin | 📝 Carousel İçeriği | Hayır | İlgili ürünler başlığının yanındaki sıra numarası. |
| 🏷️ İlgili Ürünler Bölüm Etiketi (`relatedLabel`) | TEXT | Boş metin | 📝 Carousel İçeriği | Hayır | Sıra numarasının yanında gösterilen bölüm etiketi. |
| 📝 İlgili Ürünler Başlığı (`relatedTitleHtml`) | RICH_TEXT | Boş metin | 📝 Carousel İçeriği | Hayır | Ürün carouselinin üst başlığı. HTML biçimlendirmesi desteklenir. |
| 📝 Son CTA Başlığı (`finalCtaTitleHtml`) | RICH_TEXT | Boş metin | 🔗 CTA Metinleri ve Bağlantıları / 📣 Son CTA İçeriği | Hayır | Sayfa sonundaki CTA alanının başlığı. HTML biçimlendirmesi desteklenir. |
| 📝 Son CTA Açıklaması (`finalCtaTextHtml`) | RICH_TEXT | Boş metin | 🔗 CTA Metinleri ve Bağlantıları / 📣 Son CTA İçeriği | Hayır | Son CTA alanındaki başlık altı açıklama. HTML biçimlendirmesi desteklenir. |
| 📝 Birincil Buton Metni (`primaryButtonText`) | TEXT | Boş metin | 🔗 CTA Metinleri ve Bağlantıları / 🔘 CTA Butonları | Hayır | Lime arka planlı birincil buton etiketi. |
| 🔗 Birincil Buton Adresi (`primaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🔘 CTA Butonları | Hayır | Birincil CTA hedef adresi. |
| 📝 İkincil Buton Metni (`secondaryButtonText`) | TEXT | Boş metin | 🔗 CTA Metinleri ve Bağlantıları / 🔘 CTA Butonları | Hayır | Çerçeveli ikincil buton etiketi. |
| 🔗 İkincil Buton Adresi (`secondaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🔘 CTA Butonları | Hayır | İkincil CTA hedef adresi. |
| 🎨 Carousel Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Son CTA Arka Plan Rengi (`finalCtaBackground`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Son CTA Metin Rengi (`finalCtaTextColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🧮 Ürün Şablonu Verisi (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kaynağı | Hayır | Gelişmiş ürün şablonu JSON verisi; boş bırakıldığında ürün verisinin otomatik çözümlemesi kullanılır. |
| ⚙️ Carousel Ürün Kaynağı (`sourceMode`) | TEXT | auto | 🛍️ Ürün Kaynağı / 🛍️ Carousel Ürünleri | Hayır | auto seçili ürünün kategorisini kullanır; manual ise Manuel Carousel Ürünleri alanındaki kaynağı kullanır. |
| 🛍️ Manuel Carousel Ürünleri (`productList`) | PRODUCT_LIST | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kaynağı / 🛍️ Carousel Ürünleri | Hayır | Ürün Kaynağı manual seçildiğinde carousel'de gösterilecek ürün kaynağını belirler. |
| 🔢 En Fazla Ürün (`productLimit`) | NUMBER | 12 | 🛍️ Ürün Kaynağı / 🛍️ Carousel Ürünleri | Hayır | 1 ile 40 arasında. |
| 👁️ Mevcut Ürünü Listele (`showCurrentProduct`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🔗 Bölüm Bağlantı Kimliği (`sectionAnchorId`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Carousel İçeriği | Hayır | — |
| 📝 Otomatik Carousel Başlığı (`titleText`) | RICH_TEXT | Buraya ilgili ürünler bölümünün başlığını yazın. | 📝 Carousel İçeriği | Hayır | — |
| 🌐 İngilizce Otomatik Carousel Başlığı (`titleTextEn`) | RICH_TEXT | Add a heading for the related products section here. | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 📝 Otomatik Carousel Açıklaması (`descriptionHtml`) | RICH_TEXT | Buraya listelenecek ürünlerin hangi kategoriye veya ürün grubuna ait olduğunu açıklayın. | 📝 Carousel İçeriği | Hayır | — |
| 🌐 İngilizce Carousel Açıklaması (`descriptionHtmlEn`) | RICH_TEXT | Describe the category or product group shown in this carousel here. | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 🌐 İngilizce Kategori Etiketi (`relatedLabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 🌐 İngilizce İlgili Ürünler Başlığı (`relatedTitleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 🌐 İngilizce Son CTA Başlığı (`finalCtaTitleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🌐 İngilizce Son CTA İçerikleri | Hayır | — |
| 🌐 İngilizce Son CTA Açıklaması (`finalCtaTextHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🌐 İngilizce Son CTA İçerikleri | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`primaryButtonTextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🌐 İngilizce CTA Buton Metinleri | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`secondaryButtonTextEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 CTA Metinleri ve Bağlantıları / 🌐 İngilizce CTA Buton Metinleri | Hayır | — |
| 👁️ Carousel Başlığını Göster (`showHeader`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Gezinme Oklarını Göster (`showArrows`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Kategorisini Göster (`showCategoryName`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Fiyatını Göster (`showPrice`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ↗️ Ürünleri Yeni Sekmede Aç (`openLinksInNewTab`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 👁️ İlgili Ürün Carouselini Göster (`showRelatedProducts`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Son CTA Alanını Göster (`showFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ↔️ Ok Tıklamasında Kayacak Kart (`scrollByCards`) | NUMBER | 1 | 📐 Sayfa Düzeni | Hayır | 1 ile 6 arasında. |
| ↔️ Kartlar Arası Boşluk (px) (`cardGap`) | NUMBER | 56 | 📐 Sayfa Düzeni | Hayır | 0 ile 120 piksel arasında. |
| ↔️ İçerik Maksimum Genişliği (px) (`maxWidth`) | NUMBER | 1280 | 📐 Sayfa Düzeni | Hayır | 480 ile 2560 piksel arasında. |
| ↕️ Üst Boşluk (px) (`paddingTop`) | NUMBER | 64 | 📐 Sayfa Düzeni | Hayır | 0 ile 320 piksel arasında. |
| ↕️ Alt Boşluk (px) (`paddingBottom`) | NUMBER | 0 | 📐 Sayfa Düzeni | Hayır | 0 ile 320 piksel arasında. |
| 🖥️ Bilgisayarda Görünen Kart (`visibleCardsDesktop`) | NUMBER | 4 | 📐 Sayfa Düzeni / 💻 Bilgisayar | Hayır | 1 ile 6 arasında. |
| 📲 Tablette Görünen Kart (`visibleCardsTablet`) | NUMBER | 3 | 📐 Sayfa Düzeni | Hayır | 1 ile 4 arasında. |
| 📱 Mobilde Görünen Kart (`visibleCardsMobile`) | NUMBER | 1 | 📐 Sayfa Düzeni / 📱 Mobil | Hayır | 1 ile 2 arasında. |
| 🖼️ Ürün Görseli Yüksekliği (px) (`imageHeight`) | NUMBER | 250 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 120 ile 520 piksel arasında. |
| 🖼️ Ürün Görseli Yerleşimi (`imageFit`) | TEXT | contain | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | contain, cover, fill veya scale-down değerlerinden biri. |
| 🔍 Ürün Görseli Ölçeği (`imageScale`) | NUMBER | 1 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 0.2 ile 2 arasında. |
| ↕️ Ürün Görseli Dikey Konumu (px) (`imageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | -120 ile 120 piksel arasında. |
| 🔢 Ürün Adı En Fazla Satır (`titleMaxLines`) | NUMBER | 1 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 1 ile 4 arasında. |
| 🔠 Carousel Başlık Boyutu (px) (`titleFontSize`) | NUMBER | 26 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 12 ile 72 piksel arasında. |
| 🔠 Ürün Adı Boyutu (px) (`cardTitleFontSize`) | NUMBER | 13 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 10 ile 24 piksel arasında. |
| 🔠 Ürün Fiyatı Boyutu (px) (`priceFontSize`) | NUMBER | 13 | 🎨 Görünüm ve Renkler / 🖼️ Kart Görünümü | Hayır | 10 ile 24 piksel arasında. |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Ürün Kartı Arka Plan Rengi (`cardBackgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Ok Düğmesi Arka Planı (`arrowBackgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🎨 Ok Simgesi Rengi (`arrowColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 📝 Ürün Yok Durum Mesajı (`setupMessage`) | TEXT | Buraya gösterilecek kategori veya ürün listesini seçin; eşleşen ürünler burada listelenir. | 📝 Carousel İçeriği | Hayır | — |
| 🌐 İngilizce Ürün Yok Mesajı (`setupMessageEn`) | TEXT | Select the category or product list to display; matching products will appear here. | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| ♿ Önceki Ürünler Düğmesi Etiketi (`previousProductsLabel`) | TEXT | Önceki ürünler | 📝 Carousel İçeriği / ♿ Erişilebilirlik Metinleri | Hayır | — |
| 🌐 İngilizce Önceki Ürünler Etiketi (`previousProductsLabelEn`) | TEXT | Previous products | 📝 Carousel İçeriği / 🌐 İngilizce Erişilebilirlik Metinleri | Hayır | — |
| ♿ Sonraki Ürünler Düğmesi Etiketi (`nextProductsLabel`) | TEXT | Sonraki ürünler | 📝 Carousel İçeriği / ♿ Erişilebilirlik Metinleri | Hayır | — |
| 🌐 İngilizce Sonraki Ürünler Etiketi (`nextProductsLabelEn`) | TEXT | Next products | 📝 Carousel İçeriği / 🌐 İngilizce Erişilebilirlik Metinleri | Hayır | — |
| ♿ Ürün Listesi Erişilebilirlik Etiketi (`categoryProductsAriaLabel`) | TEXT | Kategori ürünleri | 📝 Carousel İçeriği / ♿ Erişilebilirlik Metinleri | Hayır | — |
| 🌐 İngilizce Ürün Listesi Etiketi (`categoryProductsAriaLabelEn`) | TEXT | Category products | 📝 Carousel İçeriği / 🌐 İngilizce Erişilebilirlik Metinleri | Hayır | — |
| ⏳ Ürünler Yüklenirken Gösterilen Metin (`loadingProductsText`) | TEXT | Ürünler yükleniyor... | 📝 Carousel İçeriği | Hayır | — |
| 🌐 İngilizce Yükleniyor Metni (`loadingProductsTextEn`) | TEXT | Loading products... | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 🔗 Ürün Kartı Link Metni (`relatedProductLinkText`) | TEXT | İncele | 📝 Carousel İçeriği | Hayır | — |
| 🌐 İngilizce Ürün Kartı Link Metni (`relatedProductLinkTextEn`) | TEXT | View | 📝 Carousel İçeriği / 🌐 İngilizce Carousel İçerikleri | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler / 🎨 Renkler | Hayır | — |
| 🖼️ Son Kart Görseli (`relatedCardImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Kaynağı / 🖼️ Son İlgili Kart | Hayır | İsteğe bağlı elle seçilen görsel; otomatik kategori ürün görselinin yerine kullanılır. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
