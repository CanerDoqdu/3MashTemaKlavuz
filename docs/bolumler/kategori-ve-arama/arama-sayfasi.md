---
title: "Arama Sayfası"
description: "3Mash temasında Arama Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Arama Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 96 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Arama Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🛍️ Ürün Listesi (`productList`) | PRODUCT_LIST | \{"id":"2tplvqpo-products-page-productList","productListType":"ALL","initialSort":"DEFAULT","initialLimit":24,"productCount":null,"productIds":null,"usePageFilter":false,"category":null,"brand":null,"relatedProductsType":null\} | 🛍️ Ürün Kaynağı | Hayır | — |
| 🧭 Başlık Görünümü Modu (`eyebrowText`) | TEXT | ÜRÜN ARAMA | 📝 Başlık ve Açıklama | Hayır | Kategori başlığı için değeri ÜRÜN KATEGORİSİ yapın. |
| 📝 Kategori Başlığı (`titleText`) | TEXT | Tüm Ürünler | 📝 Başlık ve Açıklama | Hayır | — |
| 📝 Açıklama Metni (`descriptionText`) | TEXT | Profesyonel 3D baskı ve dental çözümlerini keşfedin. | 📝 Başlık ve Açıklama | Hayır | — |
| 📝 Arama Alanı Yer Tutucusu (`searchPlaceholder`) | TEXT | Ürün adı, kategori, marka | 🔍 Arama ve Sıralama | Hayır | — |
| ♿ Arama Alanı Erişilebilir Adı (`searchLabel`) | TEXT | Arama | 🔍 Arama ve Sıralama | Hayır | — |
| 🔗 Arama URL Parametresi (`searchQueryParam`) | TEXT | q | 🔍 Arama ve Sıralama | Hayır | Arama sorgusunun URL içinde saklandığı parametre adı. |
| 📝 Sıralama Etiketi (`sortLabel`) | TEXT | Önerilen | 🔍 Arama ve Sıralama | Hayır | — |
| 📝 Boş Durum Başlığı (`emptyTitle`) | TEXT | Ürün bulunamadı | 📭 Boş Durum | Hayır | — |
| 📝 Boş Durum Açıklaması (`emptyMessage`) | TEXT | Bu listeye bağlı aktif ürün yok veya filtreler sonucu ürün kalmadı. | 📭 Boş Durum | Hayır | — |
| 📝 Ürün Listesi Kurulum Mesajı (`setupMessage`) | TEXT | Arama sayfasının çalışması için Ürün Listesi alanını Tüm Ürünler olarak bağlayın. | 📭 Boş Durum | Hayır | — |
| 📝 Ürün İnceleme Metni (`viewProductText`) | TEXT | Ürünü İncele | 🛒 Ürün Kartları | Hayır | — |
| 📝 İndirim Rozeti Metni (`discountText`) | TEXT | İndirim | 🛒 Ürün Kartları | Hayır | — |
| 📝 Marka Yoksa Yedek Metin (`fallbackCategoryText`) | TEXT | 3MASH | 🛒 Ürün Kartları | Hayır | — |
| 📝 Fiyat Teklif Metni (`priceRequestText`) | TEXT | Teklif Alın | 🛒 Ürün Kartları | Hayır | — |
| 📝 Önceki Sayfa Metni (`prevPageText`) | TEXT | Önceki | 📄 Sayfalama | Hayır | — |
| 📝 Sonraki Sayfa Metni (`nextPageText`) | TEXT | Sonraki | 📄 Sayfalama | Hayır | — |
| 👁️ Arama Alanını Göster (`showSearch`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sıralamayı Göster (`showSort`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Navigasyonunu Göster (`showNavigation`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #f6f7f3 | 🎨 Renkler | Hayır | — |
| 🎨 Yazı Rengi (`textColor`) | COLOR | #11130f | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #62675d | 🎨 Renkler | Hayır | — |
| 🎨 Kart Rengi (`cardColor`) | COLOR | #ffffff | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #dfe3da | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #c7f136 | 🎨 Renkler | Hayır | — |
| 📝 Tüm Ürünler Başlığı (`allProductsTitle`) | TEXT | Tüm Ürünler | 📝 Başlık ve Açıklama | Hayır | — |
| 🌐 İngilizce Tüm Ürünler Başlığı (`allProductsTitleEn`) | TEXT | All Products | 📝 Başlık ve Açıklama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Kategori Başlığı (`titleTextEn`) | TEXT | All Products | 📝 Başlık ve Açıklama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`descriptionTextEn`) | TEXT | Explore professional 3D printing and dental solutions. | 📝 Başlık ve Açıklama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Arama Yer Tutucusu (`searchPlaceholderEn`) | TEXT | Product name, category, brand | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Arama Erişilebilir Adı (`searchLabelEn`) | TEXT | Search | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sıralama Etiketi (`sortLabelEn`) | TEXT | Recommended | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Arama Düğmesi Erişilebilir Adı (`searchButtonAriaLabel`) | TEXT | Ara | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Arama Düğmesi Erişilebilir Adı (`searchButtonAriaLabelEn`) | TEXT | Search | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Etkin Arama Etiketi (`activeSearchLabel`) | TEXT | Arama: | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Etkin Arama Etiketi (`activeSearchLabelEn`) | TEXT | Search: | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Aramayı Temizleme Erişilebilir Adı (`clearSearchAriaLabel`) | TEXT | Aramayı temizle | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Aramayı Temizleme Erişilebilir Adı (`clearSearchAriaLabelEn`) | TEXT | Clear search | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Izgara Görünümü Erişilebilir Adı (`layoutSwitcherAriaLabel`) | TEXT | Izgara görünümü | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Izgara Görünümü Erişilebilir Adı (`layoutSwitcherAriaLabelEn`) | TEXT | Grid layout | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Dört Sütun Görünümü Erişilebilir Adı (`grid4AriaLabel`) | TEXT | 4'lü Görünüm | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Dört Sütun Görünümü Erişilebilir Adı (`grid4AriaLabelEn`) | TEXT | 4 Columns View | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Üç Sütun Görünümü Erişilebilir Adı (`grid3AriaLabel`) | TEXT | 3'lü Görünüm | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Üç Sütun Görünümü Erişilebilir Adı (`grid3AriaLabelEn`) | TEXT | 3 Columns View | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Ürün Yükleme Erişilebilir Adı (`loadingProductsAriaLabel`) | TEXT | Ürünler yükleniyor | 🔍 Arama ve Sıralama | Hayır | — |
| 🌐 İngilizce Ürün Yükleme Erişilebilir Adı (`loadingProductsAriaLabelEn`) | TEXT | Loading products | 🔍 Arama ve Sıralama / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Ana Sayfa Bağlantı Metni (`homeLinkText`) | TEXT | Ana Sayfa | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Ana Sayfa Bağlantı Metni (`homeLinkTextEn`) | TEXT | Home | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`homeHref`) | TEXT | / | 🧭 Kategori Navigasyonu | Hayır | Yalnızca güvenli aynı site rotaları kabul edilir. |
| ♿ Sayfa Yolu Erişilebilir Adı (`breadcrumbLabel`) | TEXT | Sayfa yolu | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Sayfa Yolu Erişilebilir Adı (`breadcrumbLabelEn`) | TEXT | Breadcrumb | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kategori Başlığı (`categoryHeading`) | TEXT | Kategoriler | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Kategori Başlığı (`categoryHeadingEn`) | TEXT | Categories | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Önceki Kategoriler Erişilebilir Adı (`categoryPreviousAriaLabel`) | TEXT | Önceki kategoriler | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Önceki Kategoriler Erişilebilir Adı (`categoryPreviousAriaLabelEn`) | TEXT | Previous categories | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Sonraki Kategoriler Erişilebilir Adı (`categoryNextAriaLabel`) | TEXT | Sonraki kategoriler | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Sonraki Kategoriler Erişilebilir Adı (`categoryNextAriaLabelEn`) | TEXT | Next categories | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Genel Kategori Yedek Etiketi (`categoryFallbackLabel`) | TEXT | Kategori | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Genel Kategori Yedek Etiketi (`categoryFallbackLabelEn`) | TEXT | Category | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün İnceleme Metni (`viewProductTextEn`) | TEXT | View Product | 🛒 Ürün Kartları / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce İndirim Rozeti Metni (`discountTextEn`) | TEXT | Discount | 🛒 Ürün Kartları / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Fiyat Teklif Metni (`priceRequestTextEn`) | TEXT | Get a Quote | 🛒 Ürün Kartları / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Favoriye Ekle Erişilebilir Adı (`favoriteAddAriaLabel`) | TEXT | Favorilere ekle | 🛒 Ürün Kartları | Hayır | — |
| 🌐 İngilizce Favoriye Ekle Erişilebilir Adı (`favoriteAddAriaLabelEn`) | TEXT | Add to favorites | 🛒 Ürün Kartları / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Favoriden Çıkar Erişilebilir Adı (`favoriteRemoveAriaLabel`) | TEXT | Favorilerden çıkar | 🛒 Ürün Kartları | Hayır | — |
| 🌐 İngilizce Favoriden Çıkar Erişilebilir Adı (`favoriteRemoveAriaLabelEn`) | TEXT | Remove from favorites | 🛒 Ürün Kartları / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Boş Durum Başlığı (`emptyTitleEn`) | TEXT | Product not found | 📭 Boş Durum / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Boş Durum Açıklaması (`emptyMessageEn`) | TEXT | There are no active products connected to this list, or no products match the filters. | 📭 Boş Durum / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Arama Sonucu Bulunamadı Mesajı (`emptySearchMessage`) | TEXT | Aramanızla eşleşen aktif ürün bulunamadı. Lütfen farklı kelimelerle tekrar deneyin. | 📭 Boş Durum | Hayır | — |
| 🌐 İngilizce Arama Sonucu Bulunamadı Mesajı (`emptySearchMessageEn`) | TEXT | No active products matching your search were found. Please try different keywords. | 📭 Boş Durum / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kategori Sonucu Bulunamadı Mesajı (`emptyCategoryMessage`) | TEXT | Bu kategoride listelenecek ürün bulunamadı. | 📭 Boş Durum | Hayır | — |
| 🌐 İngilizce Kategori Sonucu Bulunamadı Mesajı (`emptyCategoryMessageEn`) | TEXT | No products were found in this category. | 📭 Boş Durum / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Listesi Kurulum Mesajı (`setupMessageEn`) | TEXT | For the search page to work, connect the Product List field to All Products. | 📭 Boş Durum / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Önceki Sayfa Metni (`prevPageTextEn`) | TEXT | Previous | 📄 Sayfalama / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sonraki Sayfa Metni (`nextPageTextEn`) | TEXT | Next | 📄 Sayfalama / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Sayfa Başlığı ve Açıklamasını Göster (`showPageIntro`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Izgara Düzeni Seçicisini Göster (`showGridLayout`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Favori Düğmesini Göster (`showFavorites`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sayfalama Düğmelerini Göster (`showPagination`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Yedek Kategori: 3D Yazıcılar (`fallbackCategoryPrintersText`) | TEXT | 3D Yazıcılar | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: 3D Yazıcılar (`fallbackCategoryPrintersTextEn`) | TEXT | 3D Printers | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Yazıcı Yedek Parçaları (`fallbackCategorySparePartsText`) | TEXT | 3D Yazıcı Yedek Parçaları | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Yazıcı Yedek Parçaları (`fallbackCategorySparePartsTextEn`) | TEXT | 3D Printer Spare Parts | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Reçineler (`fallbackCategoryResinsText`) | TEXT | Reçineler | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Reçineler (`fallbackCategoryResinsTextEn`) | TEXT | Resins | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Kürleme Cihazları (`fallbackCategoryCuringText`) | TEXT | Kürleme Cihazları | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Kürleme Cihazları (`fallbackCategoryCuringTextEn`) | TEXT | Curing Devices | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Tarayıcılar (`fallbackCategoryScannersText`) | TEXT | Tarayıcılar | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Tarayıcılar (`fallbackCategoryScannersTextEn`) | TEXT | Scanners | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Masaüstü Tarayıcılar (`fallbackCategoryDesktopScannersText`) | TEXT | Masaüstü Tarayıcılar | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Masaüstü Tarayıcılar (`fallbackCategoryDesktopScannersTextEn`) | TEXT | Desktop Scanners | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Sistemler (`fallbackCategorySystemsText`) | TEXT | Sistemler | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Sistemler (`fallbackCategorySystemsTextEn`) | TEXT | Systems | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yedek Kategori: Yazılımlar (`fallbackCategorySoftwareText`) | TEXT | Yazılımlar | 🧭 Kategori Navigasyonu | Hayır | — |
| 🌐 İngilizce Yedek Kategori: Yazılımlar (`fallbackCategorySoftwareTextEn`) | TEXT | Software | 🧭 Kategori Navigasyonu / 🌐 İngilizce İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
