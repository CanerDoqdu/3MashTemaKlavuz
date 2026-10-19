---
title: "Blog Yazı Sayfası"
description: "3Mash temasında Blog Yazı Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Blog Yazı Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 29 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Blog Yazı Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 Blog Yazısı (`blog`) | BLOG | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Blog Verisi | Evet | Güncel blog içeriği, başlık, kapak görseli ve kategorisi bu kayıttan alınır. |
| 🔗 Geri Bağlantı Metni (`backLinkText`) | TEXT | Blog'a dön | 🔗 Geri Bağlantı | Hayır | — |
| 🔗 Geri Bağlantı Adresi (`backLinkHref`) | TEXT | /blog | 🔗 Geri Bağlantı | Hayır | Güvenli yönlendirme için site içi yol kullanın. |
| ⚙️ Blog Bağlantı Mesajı (`setupMessage`) | TEXT | Bu sayfanın blog yazısını göstermesi için ikas editörde Blog Yazısı alanını bağlayın. | 📝 İçerik | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #f6f7f3 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #10120f | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #64695f | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #dfe3da | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #c7f136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🔠 Makale Yazı Boyutu (`bodyFontSize`) | TEXT | 19px | 📐 Makale Düzeni | Hayır | CSS ölçü birimi kullanın; ör. 19px. |
| 📏 Okuma Alanı Genişliği (`contentWidth`) | TEXT | 720px | 📐 Makale Düzeni | Hayır | CSS genişlik değeri kullanın; ör. 720px. |
| 🖼️ Kapak Görseli Genişliği (`heroImageWidth`) | TEXT | wide | 📐 Makale Düzeni | Hayır | column, wide veya full değerlerinden birini kullanın. |
| ↔️ Başlık Hizalaması (`titleAlign`) | TEXT | left | 📐 Makale Düzeni | Hayır | left veya center değerlerinden birini kullanın. |
| ↕️ Başlık Üst Boşluğu (`headerSpacing`) | TEXT | generous | 📐 Makale Düzeni | Hayır | compact, normal veya generous değerlerinden birini kullanın. |
| 👁️ Yayın Etiketini Göster (`showPublicationLabel`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategoriyi Göster (`showCategory`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Okuma Süresini Göster (`showReadingTime`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Tarih ve Okuma Bilgilerini Göster (`showAuthor`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Geri Bağlantı Metni (`backLinkTextEn`) | TEXT | Back to blog | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Blog Bağlantı Mesajı (`setupMessageEn`) | TEXT | Connect a Blog Post in the ikas editor to display its content on this page. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Yayın Etiketi (`publicationLabelText`) | TEXT | MASH ACADEMY | 📝 İçerik | Hayır | — |
| 🌐 İngilizce Yayın Etiketi (`publicationLabelTextEn`) | TEXT | MASH ACADEMY | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Okuma Süresi Birimi (`readingTimeSuffix`) | TEXT | dk okuma | 📝 İçerik | Hayır | — |
| 🌐 İngilizce Okuma Süresi Birimi (`readingTimeSuffixEn`) | TEXT | min read | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Geri Bağlantıyı Göster (`showBackLink`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yazı Özetini Göster (`showExcerpt`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapak Görselini Göster (`showHeroImage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Makale Gövdesini Göster (`showArticleBody`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kurulum Mesajını Göster (`showSetupMessage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
