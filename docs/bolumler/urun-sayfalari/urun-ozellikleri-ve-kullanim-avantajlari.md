---
title: "Ürün Özellikleri ve Kullanım Avantajları"
description: "3Mash temasında Ürün Özellikleri ve Kullanım Avantajları adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Özellikleri ve Kullanım Avantajları

## Bu bölümde

- Yapılandırmada kayıtlı 38 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Özellikleri ve Kullanım Avantajları** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | — |
| 🔢 Bölüm Numarası (`sectionIndex`) | TEXT | 01 | 📝 Bölüm İçeriği | Hayır | Sarı kutudaki numara (Örn: 01) |
| 📝 Bölüm Etiketi (`sectionLabel`) | TEXT | ÜRÜN ÖZELLİKLERİ | 📝 Bölüm İçeriği | Hayır | Numaranın yanındaki büyük harf etiket |
| 📝 Ana Başlık (`titleHtml`) | RICH_TEXT | Buraya ürünün öne çıkan özelliğini yazın. | 📝 Bölüm İçeriği | Hayır | Bölümün sol tarafındaki büyük h2 başlığı |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Buraya ürünün hangi ihtiyacı karşıladığını ve kullanıcıya sağladığı faydayı yazın. | 📝 Bölüm İçeriği | Hayır | Başlığın sağındaki açıklama paragrafı |
| 📝 Kontrol Listesi Başlığı (`panelTitleHtml`) | RICH_TEXT | Buraya ürünün kullanım avantajlarını yazın. | 📝 Bölüm İçeriği | Hayır | Siyah panelin içindeki büyük h3 başlığı |
| 📝 Kontrol Listesi Notu (`panelNote`) | TEXT | Her maddeye ürünün doğrulanmış bir özelliğini veya faydasını ekleyin. | 📝 Bölüm İçeriği | Hayır | Başlığın hemen altındaki küçük gri not metni |
| 📝 1. Madde Açıklaması (`item1DescriptionHtml`) | RICH_TEXT | Buraya ürünün 1. öne çıkan özelliğini veya faydasını yazın. | 📋 Satın Alma Kontrol Listesi | Hayır | Örn: &lt;b&gt;%94&lt;/b&gt; kullanıcı kole hattını net görüyor. |
| 📊 1. Madde Yüzdesi (0-100) (`item1Percent`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Satın Alma Kontrol Listesi / 📊 Yüzde Değerleri | Hayır | 0-100 arası değer; boş bırakıldığında ürün verisindeki oran korunur. Yalnızca yüzde çubuğu gösterilen ürünlerde kullanılır. |
| 📝 2. Madde Açıklaması (`item2DescriptionHtml`) | RICH_TEXT | Buraya ürünün 2. öne çıkan özelliğini veya faydasını yazın. | 📋 Satın Alma Kontrol Listesi | Hayır | — |
| 📊 2. Madde Yüzdesi (0-100) (`item2Percent`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Satın Alma Kontrol Listesi / 📊 Yüzde Değerleri | Hayır | 0-100 arası değer; boş bırakıldığında ürün verisindeki oran korunur. Yalnızca yüzde çubuğu gösterilen ürünlerde kullanılır. |
| 📝 3. Madde Açıklaması (`item3DescriptionHtml`) | RICH_TEXT | Buraya ürünün 3. öne çıkan özelliğini veya faydasını yazın. | 📋 Satın Alma Kontrol Listesi | Hayır | — |
| 📊 3. Madde Yüzdesi (0-100) (`item3Percent`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Satın Alma Kontrol Listesi / 📊 Yüzde Değerleri | Hayır | 0-100 arası değer; boş bırakıldığında ürün verisindeki oran korunur. Yalnızca yüzde çubuğu gösterilen ürünlerde kullanılır. |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🧪 Ürün Şablonu JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | CRS Composite kaynak yapısındaki reusable template datası. Boş bırakılırsa ürünün varsayılan şablon datası kullanılır. |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | PRODUCT FEATURES | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ana Başlık (`titleHtmlEn`) | RICH_TEXT | Add the product's key feature here. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Describe the need this product addresses and the benefit it provides here. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Kontrol Listesi Başlığı (`panelTitleHtmlEn`) | RICH_TEXT | Add the product's usage benefits here. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Kontrol Listesi Notu (`panelNoteEn`) | TEXT | Add a verified product feature or benefit to each item. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 1. Madde (`item1DescriptionHtmlEn`) | RICH_TEXT | Add the product's first key feature or benefit here. | 📋 Satın Alma Kontrol Listesi / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 2. Madde (`item2DescriptionHtmlEn`) | RICH_TEXT | Add the product's second key feature or benefit here. | 📋 Satın Alma Kontrol Listesi / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 3. Madde (`item3DescriptionHtmlEn`) | RICH_TEXT | Add the product's third key feature or benefit here. | 📋 Satın Alma Kontrol Listesi / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ 4. Madde Açıklaması (`item4DescriptionHtml`) | RICH_TEXT | Buraya ürünün 4. öne çıkan özelliğini veya faydasını yazın. | 📋 Satın Alma Kontrol Listesi | Hayır | — |
| 🌐 İngilizce 4. Madde (`item4DescriptionHtmlEn`) | RICH_TEXT | Add the product's fourth key feature or benefit here. | 📋 Satın Alma Kontrol Listesi / 🌐 İngilizce İçerikleri | Hayır | — |
| 📊 4. Madde Yüzdesi (0-100) (`item4Percent`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Satın Alma Kontrol Listesi / 📊 Yüzde Değerleri | Hayır | 0-100 arası değer; boş bırakıldığında ürün verisindeki oran korunur. Yalnızca yüzde çubuğu gösterilen ürünlerde kullanılır. |
| ➕ 5. Madde Açıklaması (`item5DescriptionHtml`) | RICH_TEXT | Buraya ürünün 5. öne çıkan özelliğini veya faydasını yazın. | 📋 Satın Alma Kontrol Listesi | Hayır | — |
| 🌐 İngilizce 5. Madde (`item5DescriptionHtmlEn`) | RICH_TEXT | Add the product's fifth key feature or benefit here. | 📋 Satın Alma Kontrol Listesi / 🌐 İngilizce İçerikleri | Hayır | — |
| 📊 5. Madde Yüzdesi (0-100) (`item5Percent`) | NUMBER | Yapılandırmada varsayılan değer belirtilmemiş | 📋 Satın Alma Kontrol Listesi / 📊 Yüzde Değerleri | Hayır | 0-100 arası değer; boş bırakıldığında ürün verisindeki oran korunur. Yalnızca yüzde çubuğu gösterilen ürünlerde kullanılır. |
| 👁️ Bölüm Başlığını Göster (`showSectionHeading`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kontrol Listesini Göster (`showChecklist`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 1. Maddeyi Göster (`showItem1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 2. Maddeyi Göster (`showItem2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 3. Maddeyi Göster (`showItem3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ 4. Maddeyi Ekle / Göster (`showItem4`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ 5. Maddeyi Ekle / Göster (`showItem5`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
