---
title: "Blog Kategori Sayfası"
description: "3Mash temasında Blog Kategori Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Blog Kategori Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 40 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Blog Kategori Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 Blog Yazıları (`blogList`) | BLOG_LIST | \{"blogListType":"ALL","initialLimit":12,"blogIds":null,"categoryId":null,"usePageFilter":true\} | 🧮 Blog Verisi | Evet | Tüm yazıları ya da belirli kategori/yazıları seçin; yeni yayınlanan yazılar canlı görünür. |
| 🗂️ Blog Kategorileri (`blogCategoryList`) | BLOG_CATEGORY_LIST | \{"blogCategoryListType":"ALL","initialLimit":50,"blogCategoryIds":null\} | 🧮 Blog Verisi | Hayır | İsteğe bağlı olarak blog kategori bağlantılarını gösterir. |
| 📝 Üst Etiket Metni (`eyebrowText`) | TEXT | MASH ACADEMY | 📝 İçerik | Hayır | — |
| 📝 Sayfa Başlığı (`titleText`) | TEXT | Blog Kategorisi | 📝 İçerik | Hayır | — |
| 📝 Sayfa Açıklaması (`descriptionText`) | TEXT | Bu kategoriye bağlı blog yazıları canlı olarak listelenir. | 📝 İçerik | Hayır | — |
| 📝 Yazıyı Açma Metni (`readMoreText`) | TEXT | Oku | 📝 İçerik | Hayır | — |
| 📭 Boş Durum Başlığı (`emptyTitle`) | TEXT | Blog yazısı bulunamadı | 📝 İçerik / 📭 Durum Mesajları | Hayır | — |
| 📭 Boş Durum Açıklaması (`emptyMessage`) | TEXT | Bu listeye bağlı yayında olan blog yazısı yok. | 📝 İçerik / 📭 Durum Mesajları | Hayır | — |
| ⚙️ Blog Bağlantı Mesajı (`setupMessage`) | TEXT | Bu sayfanın blog kategori yazılarını göstermesi için Blog List alanını sayfa filtresiyle bağlayın. | 📝 İçerik / 📭 Durum Mesajları | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #f6f7f3 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #10120f | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #64695f | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Kart Arka Planı (`cardColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #dfe3da | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #c7f136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🌐 İngilizce Üst Etiket (`eyebrowTextEn`) | TEXT | MASH ACADEMY | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`titleTextEn`) | TEXT | Blog Category | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sayfa Açıklaması (`descriptionTextEn`) | TEXT | Posts in this category are listed live. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıyı Açma Metni (`readMoreTextEn`) | TEXT | Read | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Boş Durum Başlığı (`emptyTitleEn`) | TEXT | No blog posts found | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Boş Durum Açıklaması (`emptyMessageEn`) | TEXT | No published blog posts are connected to this list. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Blog Bağlantı Mesajı (`setupMessageEn`) | TEXT | To display posts for this blog category, connect the Blog List field with the page filter enabled. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yazı Sayısı Birimi (`postCountLabel`) | TEXT | yazı | 📝 İçerik | Hayır | — |
| 🌐 İngilizce Yazı Sayısı Birimi (`postCountLabelEn`) | TEXT | posts | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Kategori Gezinme Etiketi (`categoryNavLabel`) | TEXT | Blog kategorileri | 📝 İçerik | Hayır | — |
| 🌐 İngilizce Kategori Gezinme Etiketi (`categoryNavLabelEn`) | TEXT | Blog categories | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önceki Sayfa Metni (`previousPageText`) | TEXT | Önceki | 📝 İçerik / 📄 Sayfalama Metinleri | Hayır | — |
| 🌐 İngilizce Önceki Sayfa Metni (`previousPageTextEn`) | TEXT | Previous | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Sonraki Sayfa Metni (`nextPageText`) | TEXT | Sonraki | 📝 İçerik / 📄 Sayfalama Metinleri | Hayır | — |
| 🌐 İngilizce Sonraki Sayfa Metni (`nextPageTextEn`) | TEXT | Next | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Sayfa Girişini Göster (`showPageIntro`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yazı Sayısını Göster (`showPostCount`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Gezinmesini Göster (`showCategoryNav`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kart Kategorisini Göster (`showCardCategory`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kart Tarihini Göster (`showCardDate`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kart Özetini Göster (`showCardExcerpt`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yazıyı Açma Metnini Göster (`showReadMore`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sayfalamayı Göster (`showPagination`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Blog Bağlantı Mesajını Göster (`showSetupMessage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Boş Durumu Göster (`showEmptyState`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
