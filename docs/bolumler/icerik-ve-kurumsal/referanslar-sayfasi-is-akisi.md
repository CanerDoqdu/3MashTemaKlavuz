---
title: "Referanslar Sayfası İş Akışı"
description: "3Mash temasında Referanslar Sayfası İş Akışı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Referanslar Sayfası İş Akışı

## Bu bölümde

- Yapılandırmada kayıtlı 39 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Referanslar Sayfası İş Akışı** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | referanslar-isleyis | 📝 İçerik | Hayır | — |
| 📝 4. İş Akışı Açıklaması (`workflow4DescriptionHtml`) | RICH_TEXT | Yeni üretim aşamasını açıklayın. | 📝 İçerik | Hayır | — |
| 📝 4. İş Akışı Başlığı (`workflow4TitleText`) | TEXT | Yeni İş Akışı Adımı | 📝 İçerik | Hayır | — |
| 🖼️ 3. İş Akışı Görseli (`workflow3ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 3. İş Akışı Açıklaması (`workflow3DescriptionHtml`) | RICH_TEXT | Kurulum, eğitim, reçine uyumlama ve satış sonrası teknik destek aynı ekip tarafından takip edilir. | 📝 İçerik | Hayır | — |
| 📝 3. İş Akışı Başlığı (`workflow3TitleText`) | TEXT | Destek | 📝 İçerik | Hayır | — |
| 🖼️ 2. İş Akışı Görseli (`workflow2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 2. İş Akışı Açıklaması (`workflow2DescriptionHtml`) | RICH_TEXT | CRS reçine hattı; model, kompozit, tray ve restoratif uygulamalarda doğru parametreyle çalışır. | 📝 İçerik | Hayır | — |
| 📝 2. İş Akışı Başlığı (`workflow2TitleText`) | TEXT | Malzeme | 📝 İçerik | Hayır | — |
| 🖼️ 4. İş Akışı Görseli (`workflow4ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 1. İş Akışı Açıklaması (`workflow1DescriptionHtml`) | RICH_TEXT | 3D yazıcı, yıkama-kürleme ve tarayıcı seçimi üretim hedefiyle birlikte planlanır. | 📝 İçerik | Hayır | — |
| 📝 1. İş Akışı Başlığı (`workflow1TitleText`) | TEXT | Cihaz | 📝 İçerik | Hayır | — |
| 📝 İş Akışı Açıklaması (`workflowDescription`) | RICH_TEXT | Başarılı sonuç yalnızca bir cihaz veya tek bir reçineyle oluşmaz. Laboratuvarda tekrarlanabilir kalite için donanım, malzeme, eğitim ve teknik destek birlikte ilerler. | 📝 İçerik | Hayır | — |
| 🖼️ 1. İş Akışı Görseli (`workflow1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 İş Akışı Başlığı (`workflowTitle`) | TEXT | Referansların ortak noktası ürün değil, çalışan sistem. | 📝 İçerik | Hayır | — |
| 📝 İş Akışı Üst Etiketi (`workflowKicker`) | TEXT | 3MASH ile üretim akışı | 📝 İçerik | Hayır | — |
| 🌐 İngilizce İş Akışı Açıklaması (`workflowDescriptionEn`) | RICH_TEXT | Successful results don't come from a single printer or resin alone. Hardware, materials, training, and support work together for repeatable quality in the lab. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 1. İş Akışı Başlığı (`workflow1TitleTextEn`) | TEXT | Hardware | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İş Akışı Üst Etiketi (`workflowKickerEn`) | TEXT | Production Workflow with 3MASH | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 1. İş Akışı Açıklaması (`workflow1DescriptionHtmlEn`) | RICH_TEXT | 3D printer, wash-cure, and scanner selections are planned alongside production goals. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 4. İş Akışı Açıklaması (`workflow4DescriptionHtmlEn`) | RICH_TEXT | Describe the new production step. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 2. İş Akışı Başlığı (`workflow2TitleTextEn`) | TEXT | Material | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 4. İş Akışı Başlığı (`workflow4TitleTextEn`) | TEXT | New Workflow Step | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 2. İş Akışı Açıklaması (`workflow2DescriptionHtmlEn`) | RICH_TEXT | The CRS resin line operates with validated parameters for model, composite, tray, and restorative applications. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3. İş Akışı Açıklaması (`workflow3DescriptionHtmlEn`) | RICH_TEXT | Installation, training, resin profiling, and after-sales support are handled by the same team. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İş Akışı Başlığı (`workflowTitleEn`) | TEXT | The common thread of references isn't just a product—it's a working system. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3. İş Akışı Başlığı (`workflow3TitleTextEn`) | TEXT | Support | 🌐 İngilizce İçerikler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| ⬇️ Alt Boşluk (`paddingBottom`) | NUMBER | 96 | 🎨 Görünüm ve Renkler | Hayır | — |
| ⬆️ Üst Boşluk (`paddingTop`) | NUMBER | 72 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| ↔️ Maksimum İçerik Genişliği (`maxWidth`) | NUMBER | 1240 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 👁️ 2. İş Akışı Kartını Göster (`showWorkflowCard2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Üretim Akışını Göster (`showWorkflow`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 1. İş Akışı Kartını Göster (`showWorkflowCard1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 3. İş Akışı Kartını Göster (`showWorkflowCard3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ 4. İş Akışı Kartını Ekle / Göster (`showWorkflowCard4`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
