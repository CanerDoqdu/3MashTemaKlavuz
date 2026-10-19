---
title: "KategoriUrunleriListeGenel"
description: "3Mash temasında KategoriUrunleriListeGenel adıyla kayıtlı bölümün yapılandırma alanları."
---

# KategoriUrunleriListeGenel

## Bu bölümde

- Yapılandırmada kayıtlı 316 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **KategoriUrunleriListeGenel** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📦 Canlı Ürün Listesi (`productList`) | PRODUCT_LIST | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Ürün Verisi | Hayır | Canlı ürün listesi |
| 📝 Duyuru Vurgu Metni (`eyebrowText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı | Hayır | Duyuru bandı sol vurgulu metin |
| 📝 Duyuru Açıklama Metni (`announcementText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı | Hayır | Duyuru bandı açıklama |
| 📝 Duyuru Buton Metni (`announcementCtaText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı | Hayır | Duyuru bandı buton metni |
| 🔗 Duyuru Linki (`announcementHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📢 Duyuru Bandı | Hayır | Duyuru buton linki |
| 📝 Kategori Başlık (İlk Kısım) (`heroTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ana başlık ilk kısım |
| 📝 Kategori Başlık (Vurgulu Kısım) (`heroTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero vurgulu eğik kelime |
| 📝 Kategori Başlık (Son Kısım) (`heroTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ana başlık son kısım |
| 📝 Kategori Açıklama Metni (`heroDescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero zengin metin açıklaması |
| 📝 Birincil Buton Metni (`primaryButtonText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ana buton metni |
| 🔗 Birincil Buton Linki (`primaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ana buton linki |
| 📝 İkincil Buton Metni (`secondaryButtonText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ikinci buton metni |
| 🔗 İkincil Buton Linki (`secondaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Kategori Girişi | Hayır | Hero ikinci buton linki |
| 📝 Metrik 1 - Değer (`metric1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 1. metrik başlığı (Örn: CE) |
| 📝 Metrik 1 - Vurgulu Kısım (`metric1Emphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 1. metrik vurgulu kelime (Örn: Class IIa) |
| 📝 Metrik 1 - Açıklama (`metric1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 1. metrik alt açıklaması |
| 📝 Metrik 2 - Değer (`metric2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 2. metrik başlığı (Örn: 16) |
| 📝 Metrik 2 - Vurgulu Kısım (`metric2Emphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 2. metrik vurgulu kelime (Örn: reçine) |
| 📝 Metrik 2 - Açıklama (`metric2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 2. metrik alt açıklaması |
| 📝 Metrik 3 - Değer (`metric3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 3. metrik başlığı (Örn: Marka) |
| 📝 Metrik 3 - Vurgulu Kısım (`metric3Emphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 3. metrik vurgulu kelime (Örn: bağımsız) |
| 📝 Metrik 3 - Açıklama (`metric3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 3. metrik alt açıklaması |
| 📝 Metrik 4 - Değer (`metric4Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 4. metrik başlığı (Örn: Birlikte) |
| 📝 Metrik 4 - Vurgulu Kısım (`metric4Emphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 4. metrik vurgulu kelime (Örn: kalibre) |
| 📝 Metrik 4 - Açıklama (`metric4Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrikler | Hayır | 4. metrik alt açıklaması |
| 📝 Seçici Bölüm Numarası (`selectorNumber`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Bölüm numarası (01) |
| 📝 Seçici Bölüm Etiketi (`selectorLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Bölüm etiketi (REÇİNE SEÇİCİ) |
| 📝 Seçici Başlık (İlk Kısım) (`selectorTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Seçici başlık ilk kısım |
| 📝 Seçici Başlık (Vurgulu Kısım) (`selectorTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Seçici başlık vurgulu kısım |
| 📝 Seçici Başlık (Son Kısım) (`selectorTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Seçici başlık son kısım |
| 📝 Seçici Sağ Yan Açıklama (`selectorSideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Seçici sağ yan zengin metin |
| 📝 Ürün Kartı Buton Metni (`selectorCardCtaText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | Kart link metni (İncele) |
| 📝 Özellik Bölüm Numarası (`featureNumber`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Bölüm numarası (02) |
| 📝 Özellik Bölüm Etiketi (`featureLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Bölüm etiketi |
| 📝 Özellik Kartı Üst Etiket (`featureEyebrow`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan blok rozet metni |
| 📝 Özellik Başlık (İlk Kısım) (`featureTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart başlık ilk kısım |
| 📝 Özellik Başlık (Vurgulu Kısım) (`featureTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart vurgulu başlık |
| 📝 Özellik Başlık (Son Kısım) (`featureTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart başlık son kısım |
| 📝 Özellik Açıklama Metni (`featureDescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart açıklama |
| 🔗 Özellik Detay Linki (`featureHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart buton linki |
| 📝 Özellik Buton Metni (`featureCtaText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün | Hayır | Öne çıkan kart buton metni |
| 📝 Özellik 1 - Etiket (`featureSpec1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 1. teknik özellik adı (Örn: Bükülme Mukavemeti) |
| 📝 Özellik 1 - Değer (`featureSpec1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 1. teknik özellik değeri (Örn: 144 MPa) |
| 📝 Özellik 2 - Etiket (`featureSpec2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 2. teknik özellik adı |
| 📝 Özellik 2 - Değer (`featureSpec2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 2. teknik özellik değeri |
| 📝 Özellik 3 - Etiket (`featureSpec3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 3. teknik özellik adı |
| 📝 Özellik 3 - Değer (`featureSpec3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 3. teknik özellik değeri |
| 📝 Özellik 4 - Etiket (`featureSpec4Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 4. teknik özellik adı |
| 📝 Özellik 4 - Değer (`featureSpec4Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ⭐ Öne Çıkan Ürün / 🔧 Teknik Özellikler | Hayır | 4. teknik özellik değeri |
| 📝 Detay Bölüm Numarası (`detailNumber`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Bölüm numarası (03) |
| 📝 Detay Bölüm Etiketi (`detailLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Bölüm etiketi |
| 📝 Detay Başlık (İlk Kısım) (`detailTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Detay başlık ilk kısım |
| 📝 Detay Başlık (Vurgulu Kısım) (`detailTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Detay vurgulu başlık |
| 📝 Detay Başlık (Son Kısım) (`detailTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Detay başlık son kısım |
| 📝 Detay Sağ Yan Açıklama (`detailSideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar | Hayır | Detay sağ yan açıklama metni |
| 📝 Kart 1 - Başlık (`detailCard1Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 1. segment / neden kartı başlığı |
| 📝 Kart 1 - Açıklama (`detailCard1DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 1. kart açıklama metni |
| 📝 Kart 2 - Başlık (`detailCard2Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 2. segment / neden kartı başlığı |
| 📝 Kart 2 - Açıklama (`detailCard2DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 2. kart açıklama metni |
| 📝 Kart 3 - Başlık (`detailCard3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 3. segment / neden kartı başlığı |
| 📝 Kart 3 - Açıklama (`detailCard3DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 3. kart açıklama metni |
| 📝 Kart 4 - Başlık (`detailCard4Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 4. segment / neden kartı başlığı |
| 📝 Kart 4 - Açıklama (`detailCard4DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📄 İçerik Kartları | Hayır | 4. kart açıklama metni |
| 📝 Çağrı Kutusu Başlık (İlk Kısım) (`detailCalloutTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | Alt çağrı kutusu başlık |
| 📝 Çağrı Kutusu Başlık (Vurgulu Kısım) (`detailCalloutTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | Alt çağrı kutusu vurgulu başlık |
| 📝 Çağrı Kutusu Başlık (Son Kısım) (`detailCalloutTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | Alt çağrı kutusu son başlık |
| 📝 Çağrı Kutusu Açıklaması (`detailCalloutDescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | Alt çağrı kutusu açıklama metni |
| 📝 Çağrı Kutusu Buton 1 Metni (`detailCalloutButton1Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | 1. buton metni |
| 🔗 Çağrı Kutusu Buton 1 Linki (`detailCalloutButton1Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | 1. buton linki |
| 📝 Çağrı Kutusu Buton 2 Metni (`detailCalloutButton2Text`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | 2. buton metni |
| 🔗 Çağrı Kutusu Buton 2 Linki (`detailCalloutButton2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 📣 Alt Çağrı | Hayır | 2. buton linki |
| 📝 SSS Bölüm Numarası (`faqNumber`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / 📝 SSS Başlığı | Hayır | Bölüm sıra numarası (04) |
| 📝 SSS Bölüm Etiketi (`faqLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / 📝 SSS Başlığı | Hayır | Bölüm başlık etiketi |
| 📝 SSS Ana Başlık (`faqTitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / 📝 SSS Başlığı | Hayır | SSS bölümü ana başlığı |
| 📝 SSS Sağ Yan Açıklama (`faqSideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / 📝 SSS Başlığı | Hayır | SSS başlığının yanındaki açıklama |
| 📝 Soru 1 (`faq1Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 1. sıkça sorulan soru başlığı |
| 📝 Cevap 1 (`faq1AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 1. soru için zengin metin cevabı |
| 📝 Soru 2 (`faq2Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 2. sıkça sorulan soru başlığı |
| 📝 Cevap 2 (`faq2AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 2. soru için zengin metin cevabı |
| 📝 Soru 3 (`faq3Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 3. sıkça sorulan soru başlığı |
| 📝 Cevap 3 (`faq3AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 3. soru için zengin metin cevabı |
| 📝 Soru 4 (`faq4Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 4. sıkça sorulan soru başlığı |
| 📝 Cevap 4 (`faq4AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 4. soru için zengin metin cevabı |
| 📝 Soru 5 (`faq5Question`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 5. sıkça sorulan soru başlığı |
| 📝 Cevap 5 (`faq5AnswerHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ❓ Sık Sorulan Sorular / ❓ SSS Maddeleri | Hayır | 5. soru için zengin metin cevabı |
| 📝 Kapanış Başlık (İlk Kısım) (`finalTitlePrefix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış başlığı ilk kısım |
| 📝 Kapanış Başlık (Vurgulu Kısım) (`finalTitleEmphasis`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış başlığı vurgulu kısım |
| 📝 Kapanış Başlık (Son Kısım) (`finalTitleSuffix`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış başlığı son kısım |
| 📝 Kapanış Açıklama Metni (`finalDescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış açıklama metni |
| 📝 Kapanış Birincil Buton Metni (`finalPrimaryButtonText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış ana buton metni |
| 🔗 Kapanış Birincil Buton Linki (`finalPrimaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış ana buton linki |
| 📝 Kapanış İkincil Buton Metni (`finalSecondaryButtonText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış ikincil buton metni |
| 🔗 Kapanış İkincil Buton Linki (`finalSecondaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Kapanış Çağrısı | Hayır | Kapanış ikincil buton linki |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | Sayfa arka plan rengi |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | Sayfa metin rengi |
| 🎨 İkincil / Soluk Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | İkincil metin ve etiket rengi |
| 🎨 Panel ve Kart Arka Planı (`panelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | Kart arka plan rengi |
| 🎨 Vurgu / Aksiyon Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | Buton ve rozet vurgu rengi (Lime) |
| 🎨 Çizgi / Kenarlık Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | Bölüm ve kart kenarlık rengi |
| 👁️ Duyuru Bandını Göster (`showAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kategori Girişini Göster (`showHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrikleri Göster (`showMetrics`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Seçiciyi Göster (`showSelector`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Öne Çıkan Ürünü Göster (`showFeature`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Seri ve Detayları Göster (`showDetail`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sık Sorulan Soruları Göster (`showFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kapanış Çağrısını Göster (`showFinalCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ MASH P16L Görseli (`printerP16lImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 🖼️ Mash CURIE M1 Görseli (`printerCurieImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 🖼️ Creality Halot-Sky 6K Görseli (`printerHalotImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici | Hayır | — |
| 📝 MASH P16L Görsel Alt Metni (`printerP16lImageAlt`) | TEXT | MASH P16L dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 MASH P16L İngilizce Görsel Alt Metni (`printerP16lImageAltEn`) | TEXT | MASH P16L dental 3D printer | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Mash CURIE M1 Görsel Alt Metni (`printerCurieImageAlt`) | TEXT | Mash CURIE M1 dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 Mash CURIE M1 İngilizce Görsel Alt Metni (`printerCurieImageAltEn`) | TEXT | Mash CURIE M1 dental 3D printer | 🛍️ Ürün Seçici | Hayır | — |
| 📝 Creality Halot-Sky 6K Görsel Alt Metni (`printerHalotImageAlt`) | TEXT | Creality Halot-Sky 6K dental 3D yazıcı | 🛍️ Ürün Seçici | Hayır | — |
| 🌐 Creality Halot-Sky 6K İngilizce Görsel Alt Metni (`printerHalotImageAltEn`) | TEXT | Creality Halot-Sky 6K dental 3D printer | 🛍️ Ürün Seçici | Hayır | — |
| 👁️ Karşılaştırma Tablosunu Göster (`washCureSelectorCompareVisible`) | BOOLEAN | false | 🧼 Yıkama ve Kürleme Cihazları / 👁️ Kart Görünürlüğü | Hayır | — |
| 🔄 Kartları Canlı Ürünlerden Doldur (`washCureSelectorUseLiveProducts`) | BOOLEAN | true | 🧼 Yıkama ve Kürleme Cihazları / ⚙️ Kart Verisi Kaynağı | Hayır | Açıksa Canlı Ürün Listesindeki ilk 3 ürün kartlara bağlanır. Kapalıysa aşağıdaki elle düzenlenen kart içerikleri kullanılır. |
| 📝 1. Ürün Açıklaması (`selectorProduct1DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün Açıklaması (`selectorProduct1DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🏷️ 1. Ürün Rozeti (`selectorProduct1Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🏷️ 1. Ürün Rozeti (`selectorProduct1TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 1. Teknik Özellik Etiketi (`selectorProduct1Spec1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 1. Teknik Özellik Etiketi (`selectorProduct1Spec1LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 1. Teknik Özellik Değeri (`selectorProduct1Spec1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 1. Teknik Özellik Değeri (`selectorProduct1Spec1ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 2. Teknik Özellik Etiketi (`selectorProduct1Spec2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 2. Teknik Özellik Etiketi (`selectorProduct1Spec2LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 2. Teknik Özellik Değeri (`selectorProduct1Spec2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 2. Teknik Özellik Değeri (`selectorProduct1Spec2ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 3. Teknik Özellik Etiketi (`selectorProduct1Spec3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 3. Teknik Özellik Etiketi (`selectorProduct1Spec3LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Ürün 3. Teknik Özellik Değeri (`selectorProduct1Spec3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün 3. Teknik Özellik Değeri (`selectorProduct1Spec3ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün Açıklaması (`selectorProduct2DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün Açıklaması (`selectorProduct2DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🏷️ 2. Ürün Rozeti (`selectorProduct2Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🏷️ 2. Ürün Rozeti (`selectorProduct2TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 1. Teknik Özellik Etiketi (`selectorProduct2Spec1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 1. Teknik Özellik Etiketi (`selectorProduct2Spec1LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 1. Teknik Özellik Değeri (`selectorProduct2Spec1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 1. Teknik Özellik Değeri (`selectorProduct2Spec1ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 2. Teknik Özellik Etiketi (`selectorProduct2Spec2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 2. Teknik Özellik Etiketi (`selectorProduct2Spec2LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 2. Teknik Özellik Değeri (`selectorProduct2Spec2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 2. Teknik Özellik Değeri (`selectorProduct2Spec2ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 3. Teknik Özellik Etiketi (`selectorProduct2Spec3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 3. Teknik Özellik Etiketi (`selectorProduct2Spec3LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün 3. Teknik Özellik Değeri (`selectorProduct2Spec3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün 3. Teknik Özellik Değeri (`selectorProduct2Spec3ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün Açıklaması (`selectorProduct3DescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün Açıklaması (`selectorProduct3DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🏷️ 3. Ürün Rozeti (`selectorProduct3Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🏷️ 3. Ürün Rozeti (`selectorProduct3TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 1. Teknik Özellik Etiketi (`selectorProduct3Spec1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 1. Teknik Özellik Etiketi (`selectorProduct3Spec1LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 1. Teknik Özellik Değeri (`selectorProduct3Spec1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 1. Teknik Özellik Değeri (`selectorProduct3Spec1ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 2. Teknik Özellik Etiketi (`selectorProduct3Spec2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 2. Teknik Özellik Etiketi (`selectorProduct3Spec2LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 2. Teknik Özellik Değeri (`selectorProduct3Spec2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 2. Teknik Özellik Değeri (`selectorProduct3Spec2ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 3. Teknik Özellik Etiketi (`selectorProduct3Spec3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 3. Teknik Özellik Etiketi (`selectorProduct3Spec3LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün 3. Teknik Özellik Değeri (`selectorProduct3Spec3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün 3. Teknik Özellik Değeri (`selectorProduct3Spec3ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 1. Karşılaştırma Sütun Başlığı (`selectorCompareColumn1Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Karşılaştırma Sütun Başlığı (`selectorCompareColumn1TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Karşılaştırma Sütun Başlığı (`selectorCompareColumn2Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Karşılaştırma Sütun Başlığı (`selectorCompareColumn2TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Karşılaştırma Sütun Başlığı (`selectorCompareColumn3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Karşılaştırma Sütun Başlığı (`selectorCompareColumn3TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 4. Karşılaştırma Sütun Başlığı (`selectorCompareColumn4Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Karşılaştırma Sütun Başlığı (`selectorCompareColumn4TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 1. Karşılaştırma Satırı Etiketi (`selectorCompareRow1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Karşılaştırma Satırı Etiketi (`selectorCompareRow1LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 1. Satır 1. Ürün Değeri (`selectorCompareRow1Value1`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Satır 1. Ürün Değeri (`selectorCompareRow1Value1En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 1. Satır 2. Ürün Değeri (`selectorCompareRow1Value2`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Satır 2. Ürün Değeri (`selectorCompareRow1Value2En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 1. Satır 3. Ürün Değeri (`selectorCompareRow1Value3`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Satır 3. Ürün Değeri (`selectorCompareRow1Value3En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Karşılaştırma Satırı Etiketi (`selectorCompareRow2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Karşılaştırma Satırı Etiketi (`selectorCompareRow2LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Satır 1. Ürün Değeri (`selectorCompareRow2Value1`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Satır 1. Ürün Değeri (`selectorCompareRow2Value1En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Satır 2. Ürün Değeri (`selectorCompareRow2Value2`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Satır 2. Ürün Değeri (`selectorCompareRow2Value2En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Satır 3. Ürün Değeri (`selectorCompareRow2Value3`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Satır 3. Ürün Değeri (`selectorCompareRow2Value3En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Karşılaştırma Satırı Etiketi (`selectorCompareRow3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Karşılaştırma Satırı Etiketi (`selectorCompareRow3LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Satır 1. Ürün Değeri (`selectorCompareRow3Value1`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Satır 1. Ürün Değeri (`selectorCompareRow3Value1En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Satır 2. Ürün Değeri (`selectorCompareRow3Value2`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Satır 2. Ürün Değeri (`selectorCompareRow3Value2En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Satır 3. Ürün Değeri (`selectorCompareRow3Value3`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Satır 3. Ürün Değeri (`selectorCompareRow3Value3En`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 Karşılaştırma Notu (`selectorCompareNoteHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 Karşılaştırma Notu (`selectorCompareNoteHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 👁️ 1. Ürün Kartını Göster (`selectorProduct1Visible`) | BOOLEAN | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 👁️ 2. Ürün Kartını Göster (`selectorProduct2Visible`) | BOOLEAN | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 👁️ 3. Ürün Kartını Göster (`selectorProduct3Visible`) | BOOLEAN | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 📝 Ana Sayfa Bağlantı Metni (`breadcrumbHomeLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu | Hayır | — |
| 🌐 Ana Sayfa Bağlantı Metni (`breadcrumbHomeLabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu / 🌐 İngilizce Gezinti Yolu | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`breadcrumbHomeHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu | Hayır | — |
| 📝 Ürünler Bağlantı Metni (`breadcrumbParentLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu | Hayır | — |
| 🌐 Ürünler Bağlantı Metni (`breadcrumbParentLabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu / 🌐 İngilizce Gezinti Yolu | Hayır | — |
| 🔗 Ürünler Bağlantısı (`breadcrumbParentHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu | Hayır | — |
| 📝 Geçerli Kategori Adı (`breadcrumbCurrentLabel`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu | Hayır | — |
| 🌐 Geçerli Kategori Adı (`breadcrumbCurrentLabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧭 Sayfa Gezinti Yolu / 🌐 İngilizce Gezinti Yolu | Hayır | — |
| 📝 1. Ürün Adı (`selectorProduct1Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün Adı (`selectorProduct1TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🔗 1. Ürün Linki (`selectorProduct1Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🖼️ 1. Ürün Görseli (`selectorProduct1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 📝 1. Ürün Görsel Alt Metni (`selectorProduct1ImageAlt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 1. Ürün Görsel Alt Metni (`selectorProduct1ImageAltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 2. Ürün Adı (`selectorProduct2Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün Adı (`selectorProduct2TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🔗 2. Ürün Linki (`selectorProduct2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🖼️ 2. Ürün Görseli (`selectorProduct2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 📝 2. Ürün Görsel Alt Metni (`selectorProduct2ImageAlt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 2. Ürün Görsel Alt Metni (`selectorProduct2ImageAltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 3. Ürün Adı (`selectorProduct3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün Adı (`selectorProduct3TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 🔗 3. Ürün Linki (`selectorProduct3Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🖼️ 3. Ürün Görseli (`selectorProduct3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 📝 3. Ürün Görsel Alt Metni (`selectorProduct3ImageAlt`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🃏 Ürün Kartları | Hayır | — |
| 🌐 3. Ürün Görsel Alt Metni (`selectorProduct3ImageAltEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |
| 📝 4. Karşılaştırma Satırı Etiketi (`selectorCompareRow4Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Karşılaştırma Satırı Etiketi (`selectorCompareRow4LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 4. Satır 1. Ürün Değeri (`selectorCompareRow4Value1`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Satır 1. Ürün Değeri (`selectorCompareRow4Value1En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 4. Satır 2. Ürün Değeri (`selectorCompareRow4Value2`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Satır 2. Ürün Değeri (`selectorCompareRow4Value2En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 4. Satır 3. Ürün Değeri (`selectorCompareRow4Value3`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Satır 3. Ürün Değeri (`selectorCompareRow4Value3En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 5. Karşılaştırma Satırı Etiketi (`selectorCompareRow5Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 5. Karşılaştırma Satırı Etiketi (`selectorCompareRow5LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 5. Satır 1. Ürün Değeri (`selectorCompareRow5Value1`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 5. Satır 1. Ürün Değeri (`selectorCompareRow5Value1En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 5. Satır 2. Ürün Değeri (`selectorCompareRow5Value2`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 5. Satır 2. Ürün Değeri (`selectorCompareRow5Value2En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 5. Satır 3. Ürün Değeri (`selectorCompareRow5Value3`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 5. Satır 3. Ürün Değeri (`selectorCompareRow5Value3En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 6. Karşılaştırma Satırı Etiketi (`selectorCompareRow6Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 6. Karşılaştırma Satırı Etiketi (`selectorCompareRow6LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 6. Satır 1. Ürün Değeri (`selectorCompareRow6Value1`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 6. Satır 1. Ürün Değeri (`selectorCompareRow6Value1En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 6. Satır 2. Ürün Değeri (`selectorCompareRow6Value2`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 6. Satır 2. Ürün Değeri (`selectorCompareRow6Value2En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 6. Satır 3. Ürün Değeri (`selectorCompareRow6Value3`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 6. Satır 3. Ürün Değeri (`selectorCompareRow6Value3En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 7. Karşılaştırma Satırı Etiketi (`selectorCompareRow7Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 7. Karşılaştırma Satırı Etiketi (`selectorCompareRow7LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 7. Satır 1. Ürün Değeri (`selectorCompareRow7Value1`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 7. Satır 1. Ürün Değeri (`selectorCompareRow7Value1En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 7. Satır 2. Ürün Değeri (`selectorCompareRow7Value2`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 7. Satır 2. Ürün Değeri (`selectorCompareRow7Value2En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 7. Satır 3. Ürün Değeri (`selectorCompareRow7Value3`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 7. Satır 3. Ürün Değeri (`selectorCompareRow7Value3En`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 1. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn1Subtitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 1. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn1SubtitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 2. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn2Subtitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 2. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn2SubtitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 3. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn3Subtitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 3. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn3SubtitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| 📝 4. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn4Subtitle`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 4. Karşılaştırma Sütun Alt Başlığı (`selectorCompareColumn4SubtitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Tablo İçerikleri | Hayır | — |
| ➕ Karşılaştırma Tablosu Ekle (`addSelectorCompareTable`) | BOOLEAN | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 📝 1. Filtre Adı (`resinFilter1Label`) | TEXT | Tümü | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 1. Filtre Adı (`resinFilter1LabelEn`) | TEXT | All | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 2. Filtre Adı (`resinFilter2Label`) | TEXT | Model | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 2. Filtre Adı (`resinFilter2LabelEn`) | TEXT | Model | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 3. Filtre Adı (`resinFilter3Label`) | TEXT | Kron & Köprü | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 3. Filtre Adı (`resinFilter3LabelEn`) | TEXT | Crown & Bridge | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 4. Filtre Adı (`resinFilter4Label`) | TEXT | Protez & Diş Eti | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 4. Filtre Adı (`resinFilter4LabelEn`) | TEXT | Denture & Gingiva | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 5. Filtre Adı (`resinFilter5Label`) | TEXT | Splint / Gece Plağı | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 5. Filtre Adı (`resinFilter5LabelEn`) | TEXT | Splint / Night Guard | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 6. Filtre Adı (`resinFilter6Label`) | TEXT | Ortodonti | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 6. Filtre Adı (`resinFilter6LabelEn`) | TEXT | Orthodontics | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 📝 7. Filtre Adı (`resinFilter7Label`) | TEXT | Cerrahi / Döküm / Ölçü | 🛍️ Ürün Seçici / 🧪 Reçine Filtreleri | Hayır | — |
| 🌐 7. Filtre Adı (`resinFilter7LabelEn`) | TEXT | Surgical / Cast / Impression | 🛍️ Ürün Seçici / 🌐 İngilizce Reçine Filtreleri | Hayır | — |
| 👁️ 1. Reçine Hattını Göster (`resinLine1Visible`) | BOOLEAN | true | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🏷️ 1. Hat İşareti (`resinLine1Marker`) | TEXT | CRS | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 📝 1. Hat 1. Maddesi (`resinLine1Item1`) | TEXT | Kron-köprü, protez, diş eti, aligner, splint, guide | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 1. Hat 1. Maddesi (`resinLine1Item1En`) | TEXT | Crown-bridge, denture, gingiva, aligner, splint, guide | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 📝 1. Hat 2. Maddesi (`resinLine1Item2`) | TEXT | CE Class IIa · klinik güvenlik standartları | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 1. Hat 2. Maddesi (`resinLine1Item2En`) | TEXT | CE Class IIa · clinical safety standards | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 📝 1. Hat 3. Maddesi (`resinLine1Item3`) | TEXT | Cihaz parametrelerinizle birlikte kalibre | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 1. Hat 3. Maddesi (`resinLine1Item3En`) | TEXT | Calibrated together with your device parameters | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 👁️ 2. Reçine Hattını Göster (`resinLine2Visible`) | BOOLEAN | true | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🏷️ 2. Hat İşareti (`resinLine2Marker`) | TEXT | M | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 📝 2. Hat 1. Maddesi (`resinLine2Item1`) | TEXT | Study model, Trial (white/pink), Clear guide | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 2. Hat 1. Maddesi (`resinLine2Item1En`) | TEXT | Study model, Trial (white/pink), Clear guide | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 📝 2. Hat 2. Maddesi (`resinLine2Item2`) | TEXT | Yüksek hacimde maliyet avantajı | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 2. Hat 2. Maddesi (`resinLine2Item2En`) | TEXT | Cost advantage at high volume | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 📝 2. Hat 3. Maddesi (`resinLine2Item3`) | TEXT | Aynı teknik destek, aynı marka bağımsızlık | 🧩 Seri ve Detaylar / 🧬 Reçine Serileri | Hayır | — |
| 🌐 2. Hat 3. Maddesi (`resinLine2Item3En`) | TEXT | The same technical support, the same brand independence | 🧩 Seri ve Detaylar / 🌐 İngilizce Reçine Serileri | Hayır | — |
| 🌐 1. İçerik Kartı İngilizce Başlığı (`detailCard1TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 1. İçerik Kartı İngilizce Açıklaması (`detailCard1DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 2. İçerik Kartı İngilizce Başlığı (`detailCard2TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 2. İçerik Kartı İngilizce Açıklaması (`detailCard2DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 3. İçerik Kartı İngilizce Başlığı (`detailCard3TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 3. İçerik Kartı İngilizce Açıklaması (`detailCard3DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 4. İçerik Kartı İngilizce Başlığı (`detailCard4TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🌐 4. İçerik Kartı İngilizce Açıklaması (`detailCard4DescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧩 Seri ve Detaylar / 🌐 İngilizce İçerik Kartları | Hayır | — |
| 🏷️ 1. Yazıcı Durum Metni (`printerProduct1Status`) | TEXT | Satışta | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 🌐 1. Yazıcı İngilizce Durum Metni (`printerProduct1StatusEn`) | TEXT | For sale | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 🏷️ 2. Yazıcı Durum Metni (`printerProduct2Status`) | TEXT | Talep üzerine | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 🌐 2. Yazıcı İngilizce Durum Metni (`printerProduct2StatusEn`) | TEXT | On request | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 🏷️ 3. Yazıcı Durum Metni (`printerProduct3Status`) | TEXT | Talep üzerine | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 🌐 3. Yazıcı İngilizce Durum Metni (`printerProduct3StatusEn`) | TEXT | On request | 🛍️ Ürün Seçici / 🖨️ Yazıcı Kartları | Hayır | — |
| 👁️ Karşılaştırma Tablosunu Göster (`selectorCompareVisible`) | BOOLEAN | true | 🛍️ Ürün Seçici / 📊 Karşılaştırma Tablosu | Hayır | — |
| 🌐 İngilizce Seçici Açıklaması (`selectorSideHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🛍️ Ürün Seçici / 🌐 İngilizce Kart İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
