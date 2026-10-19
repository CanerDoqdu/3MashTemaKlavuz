---
title: "Referanslar Sayfası Klinik Vaka"
description: "3Mash temasında Referanslar Sayfası Klinik Vaka adıyla kayıtlı bölümün yapılandırma alanları."
---

# Referanslar Sayfası Klinik Vaka

## Bu bölümde

- Yapılandırmada kayıtlı 37 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Referanslar Sayfası Klinik Vaka** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | referanslar-vaka | 📝 İçerik | Hayır | — |
| 📝 Vaka Görseli Alternatif Metni (`caseImageAlt`) | TEXT | CRS Composite Resin ile dijital restorasyon çalışması | 📝 İçerik | Hayır | — |
| 📝 Vaka Açıklaması (`caseDescription`) | RICH_TEXT | CRS Composite Resin ile tamamen dijital olarak üretilen geçici restorasyon; hafif yapı, kontrollü üretim süreci ve klinik adaptasyon odağıyla 3MASH ekosisteminin sahadaki karşılığını gösterir. | 📝 İçerik | Hayır | — |
| 🖼️ Klinik Vaka Görseli (`caseImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 Vaka Başlığı (`caseTitle`) | TEXT | Dr. Barbaros Baran ile All-on-Six geçici restorasyon. | 📝 İçerik | Hayır | — |
| 📝 1. Vaka Maddesi (`storyPoint1Text`) | TEXT | Üst ve alt All-on-Six geçici restorasyon üretimi | 📝 İçerik | Hayır | — |
| 📝 Vaka Üst Etiketi (`caseKicker`) | TEXT | Klinik başarı hikayesi | 📝 İçerik | Hayır | — |
| 📝 Vaka Görseli Açıklaması (`caseCaptionText`) | TEXT | Dijital geçici restorasyon ve klinik takip süreci | 📝 İçerik | Hayır | — |
| 📝 Vaka Görseli Başlığı (`caseCaptionTitle`) | TEXT | CRS Composite Resin | 📝 İçerik | Hayır | — |
| 📝 3. Vaka Maddesi (`storyPoint3Text`) | TEXT | Düşük ağırlık, takip edilebilir dijital iş akışı ve klinik adaptasyon odağı | 📝 İçerik | Hayır | — |
| 📝 4. Yeni Vaka Maddesi (`storyPoint4Text`) | TEXT | Yeni vaka bilgisini buraya ekleyin. | 📝 İçerik | Hayır | — |
| 📝 5. Yeni Vaka Maddesi (`storyPoint5Text`) | TEXT | Yeni vaka bilgisini buraya ekleyin. | 📝 İçerik | Hayır | — |
| 📝 2. Vaka Maddesi (`storyPoint2Text`) | TEXT | Metal bar üzerinde 3D baskılı kompozit köprü yaklaşımı | 📝 İçerik | Hayır | — |
| 🌐 İngilizce 2. Vaka Maddesi (`storyPoint2TextEn`) | TEXT | 3D-printed composite bridge on metal bar framework | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3. Vaka Maddesi (`storyPoint3TextEn`) | TEXT | Low weight, traceable digital workflow, and clinical adaptation focus | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 4. Yeni Vaka Maddesi (`storyPoint4TextEn`) | TEXT | Add a new case detail here. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Görseli Açıklaması (`caseCaptionTextEn`) | TEXT | Digital provisional restoration and clinical follow-up | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 1. Vaka Maddesi (`storyPoint1TextEn`) | TEXT | Upper and lower All-on-Six provisional restoration fabrication | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Görseli Başlığı (`caseCaptionTitleEn`) | TEXT | CRS Composite Resin | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Görseli Alternatif Metni (`caseImageAltEn`) | TEXT | Digital restoration study with CRS Composite Resin | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Açıklaması (`caseDescriptionEn`) | RICH_TEXT | The provisional restoration produced entirely digitally with CRS Composite Resin demonstrates the field value of the 3MASH ecosystem through lightweight design, controlled manufacturing, and clinical precision. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Başlığı (`caseTitleEn`) | TEXT | All-on-Six temporary restoration with Dr. Barbaros Baran. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Vaka Üst Etiketi (`caseKickerEn`) | TEXT | Clinical Success Story | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 5. Yeni Vaka Maddesi (`storyPoint5TextEn`) | TEXT | Add a new case detail here. | 🌐 İngilizce İçerikler | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| ⬇️ Alt Boşluk (`paddingBottom`) | NUMBER | 96 | 🎨 Görünüm ve Renkler | Hayır | — |
| ⬆️ Üst Boşluk (`paddingTop`) | NUMBER | 72 | 🎨 Görünüm ve Renkler | Hayır | — |
| ↔️ Maksimum İçerik Genişliği (`maxWidth`) | NUMBER | 1240 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Görünüm ve Renkler | Hayır | — |
| ➕ 4. Vaka Maddesini Ekle / Göster (`showStoryPoint4`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 👁️ 2. Vaka Maddesini Göster (`showStoryPoint2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 1. Vaka Maddesini Göster (`showStoryPoint1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Klinik Vaka Alanını Göster (`showCaseStudy`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ 3. Vaka Maddesini Göster (`showStoryPoint3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ 5. Vaka Maddesini Ekle / Göster (`showStoryPoint5`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
