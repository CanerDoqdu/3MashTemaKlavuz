---
title: "Ürün Karşılaştırma Tablosu"
description: "3Mash temasında Ürün Karşılaştırma Tablosu adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Karşılaştırma Tablosu

## Bu bölümde

- Yapılandırmada kayıtlı 86 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Karşılaştırma Tablosu** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔢 Bölüm Sıra Numarası (`sectionIndex`) | TEXT | 05 | 📝 Karşılaştırma Başlığı | Hayır | — |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | KARŞILAŞTIRMA | 📝 Karşılaştırma Başlığı | Hayır | — |
| 📝 Bölüm Başlığı (`titleHtml`) | RICH_TEXT | Karşılaştırma tablosu başlığı buraya gelecek. | 📝 Karşılaştırma Başlığı | Hayır | — |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Karşılaştırma bölümü için sağ tarafta yer alan detaylı açıklama metni buraya gelecek. | 📝 Karşılaştırma Başlığı | Hayır | — |
| 📝 İlk Seçenek Başlığı (`column1Title`) | TEXT | Geleneksel / Alternatif | ⚖️ İlk Karşılaştırma Seçeneği | Hayır | — |
| 📝 İlk Seçenek Açıklaması (`column1Subtitle`) | TEXT | 1. Seçenek kısa alt açıklama metni | ⚖️ İlk Karşılaştırma Seçeneği | Hayır | — |
| 🏷️ İlk Seçenek Etiketi (`column1Badge`) | TEXT | KLASİK | ⚖️ İlk Karşılaştırma Seçeneği | Hayır | — |
| 📝 Öne Çıkan Seçenek Başlığı (`column2Title`) | TEXT | 3MASH Ekosistemi | ⭐ Öne Çıkan Karşılaştırma Seçeneği | Hayır | — |
| 📝 Öne Çıkan Seçenek Açıklaması (`column2Subtitle`) | TEXT | 2. Seçenek kısa alt açıklama metni | ⭐ Öne Çıkan Karşılaştırma Seçeneği | Hayır | — |
| 🏷️ Öne Çıkan Seçenek Etiketi (`column2Badge`) | TEXT | ÖNERİLEN | ⭐ Öne Çıkan Karşılaştırma Seçeneği | Hayır | — |
| 📝 Kriter 1 Adı (`row1Feature`) | TEXT | 1. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 1 | Hayır | — |
| 📝 Kriter 1 İlk Seçenek Değeri (`row1Col1Value`) | TEXT | 1. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 1 | Hayır | — |
| 📝 Kriter 1 Öne Çıkan Seçenek Değeri (`row1Col2Value`) | TEXT | 1. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 1 | Hayır | — |
| ✅ Kriter 1 İlk Seçenek Değerini Olumlu İşaretle (`row1Col1Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 1 | Hayır | — |
| ✅ Kriter 1 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row1Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 1 | Hayır | — |
| 📝 Kriter 2 Adı (`row2Feature`) | TEXT | 2. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 2 | Hayır | — |
| 📝 Kriter 2 İlk Seçenek Değeri (`row2Col1Value`) | TEXT | 2. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 2 | Hayır | — |
| 📝 Kriter 2 Öne Çıkan Seçenek Değeri (`row2Col2Value`) | TEXT | 2. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 2 | Hayır | — |
| ✅ Kriter 2 İlk Seçenek Değerini Olumlu İşaretle (`row2Col1Positive`) | BOOLEAN | false | 📋 Karşılaştırma Kriteri 2 | Hayır | — |
| ✅ Kriter 2 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row2Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 2 | Hayır | — |
| 📝 Kriter 3 Adı (`row3Feature`) | TEXT | 3. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 3 | Hayır | — |
| 📝 Kriter 3 İlk Seçenek Değeri (`row3Col1Value`) | TEXT | 3. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 3 | Hayır | — |
| 📝 Kriter 3 Öne Çıkan Seçenek Değeri (`row3Col2Value`) | TEXT | 3. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 3 | Hayır | — |
| ✅ Kriter 3 İlk Seçenek Değerini Olumlu İşaretle (`row3Col1Positive`) | BOOLEAN | false | 📋 Karşılaştırma Kriteri 3 | Hayır | — |
| ✅ Kriter 3 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row3Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 3 | Hayır | — |
| 📝 Kriter 4 Adı (`row4Feature`) | TEXT | 4. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 4 | Hayır | — |
| 📝 Kriter 4 İlk Seçenek Değeri (`row4Col1Value`) | TEXT | 4. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 4 | Hayır | — |
| 📝 Kriter 4 Öne Çıkan Seçenek Değeri (`row4Col2Value`) | TEXT | 4. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 4 | Hayır | — |
| ✅ Kriter 4 İlk Seçenek Değerini Olumlu İşaretle (`row4Col1Positive`) | BOOLEAN | false | 📋 Karşılaştırma Kriteri 4 | Hayır | — |
| ✅ Kriter 4 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row4Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 4 | Hayır | — |
| 📝 Kriter 5 Adı (`row5Feature`) | TEXT | 5. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 5 | Hayır | — |
| 📝 Kriter 5 İlk Seçenek Değeri (`row5Col1Value`) | TEXT | 5. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 5 | Hayır | — |
| 📝 Kriter 5 Öne Çıkan Seçenek Değeri (`row5Col2Value`) | TEXT | 5. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 5 | Hayır | — |
| ✅ Kriter 5 İlk Seçenek Değerini Olumlu İşaretle (`row5Col1Positive`) | BOOLEAN | false | 📋 Karşılaştırma Kriteri 5 | Hayır | — |
| ✅ Kriter 5 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row5Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 5 | Hayır | — |
| 📝 Kriter 6 Adı (`row6Feature`) | TEXT | 6. Karşılaştırma Kriteri | 📋 Karşılaştırma Kriteri 6 | Hayır | — |
| 📝 Kriter 6 İlk Seçenek Değeri (`row6Col1Value`) | TEXT | 6. Kriter 1. Seçenek Değeri | 📋 Karşılaştırma Kriteri 6 | Hayır | — |
| 📝 Kriter 6 Öne Çıkan Seçenek Değeri (`row6Col2Value`) | TEXT | 6. Kriter 2. Seçenek Değeri | 📋 Karşılaştırma Kriteri 6 | Hayır | — |
| ✅ Kriter 6 İlk Seçenek Değerini Olumlu İşaretle (`row6Col1Positive`) | BOOLEAN | false | 📋 Karşılaştırma Kriteri 6 | Hayır | — |
| ✅ Kriter 6 Öne Çıkan Seçenek Değerini Olumlu İşaretle (`row6Col2Positive`) | BOOLEAN | true | 📋 Karşılaştırma Kriteri 6 | Hayır | — |
| 📝 Tablo Altı Bilgilendirme Notu (`bottomNote`) | TEXT | * Tablo altı açıklama veya bilgilendirme notu buraya gelecek. | 🔗 Tablo Altı Notu ve Bağlantı | Hayır | — |
| 🔗 Aksiyon Butonu Metni (`ctaText`) | TEXT | Kliniğinize Özel Analiz Alın → | 🔗 Tablo Altı Notu ve Bağlantı | Hayır | — |
| 🔗 Aksiyon Butonu Bağlantısı (`ctaHref`) | TEXT | /3d-yazicilar | 🔗 Tablo Altı Notu ve Bağlantı | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | COMPARISON | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`titleHtmlEn`) | RICH_TEXT | Comparison table title goes here. | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Detailed description text for the comparison section goes here. | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Kriter Sütunu Başlığı (`comparisonCriteriaLabel`) | TEXT | KARŞILAŞTIRMA KRİTERİ | 📝 Karşılaştırma Başlığı | Hayır | — |
| 🌐 İngilizce Kriter Sütunu Başlığı (`comparisonCriteriaLabelEn`) | TEXT | COMPARISON CRITERIA | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Olumlu Durum Erişilebilir Metni (`positiveStatusLabel`) | TEXT | Olumlu | 📝 Karşılaştırma Başlığı | Hayır | — |
| 🌐 İngilizce Olumlu Durum Erişilebilir Metni (`positiveStatusLabelEn`) | TEXT | Positive | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Olumsuz Durum Erişilebilir Metni (`negativeStatusLabel`) | TEXT | Olumsuz | 📝 Karşılaştırma Başlığı | Hayır | — |
| 🌐 İngilizce Olumsuz Durum Erişilebilir Metni (`negativeStatusLabelEn`) | TEXT | Negative | 📝 Karşılaştırma Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İlk Seçenek Başlığı (`column1TitleEn`) | TEXT | Traditional / Alternative | ⚖️ İlk Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İlk Seçenek Açıklaması (`column1SubtitleEn`) | TEXT | Short description for option 1 | ⚖️ İlk Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İlk Seçenek Etiketi (`column1BadgeEn`) | TEXT | CLASSIC | ⚖️ İlk Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Öne Çıkan Seçenek Başlığı (`column2TitleEn`) | TEXT | 3MASH Ecosystem | ⭐ Öne Çıkan Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Öne Çıkan Seçenek Açıklaması (`column2SubtitleEn`) | TEXT | Short description for option 2 | ⭐ Öne Çıkan Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Öne Çıkan Seçenek Etiketi (`column2BadgeEn`) | TEXT | RECOMMENDED | ⭐ Öne Çıkan Karşılaştırma Seçeneği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 1 Adı (`row1FeatureEn`) | TEXT | Comparison Criterion 1 | 📋 Karşılaştırma Kriteri 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 1 İlk Seçenek Değeri (`row1Col1ValueEn`) | TEXT | Criteria 1 Option 1 Value | 📋 Karşılaştırma Kriteri 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 1 Öne Çıkan Seçenek Değeri (`row1Col2ValueEn`) | TEXT | Criteria 1 Option 2 Value | 📋 Karşılaştırma Kriteri 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 1 Göster (`showRow1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kriter 2 Adı (`row2FeatureEn`) | TEXT | Comparison Criterion 2 | 📋 Karşılaştırma Kriteri 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 2 İlk Seçenek Değeri (`row2Col1ValueEn`) | TEXT | Criteria 2 Option 1 Value | 📋 Karşılaştırma Kriteri 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 2 Öne Çıkan Seçenek Değeri (`row2Col2ValueEn`) | TEXT | Criteria 2 Option 2 Value | 📋 Karşılaştırma Kriteri 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 2 Göster (`showRow2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kriter 3 Adı (`row3FeatureEn`) | TEXT | Comparison Criterion 3 | 📋 Karşılaştırma Kriteri 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 3 İlk Seçenek Değeri (`row3Col1ValueEn`) | TEXT | Criteria 3 Option 1 Value | 📋 Karşılaştırma Kriteri 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 3 Öne Çıkan Seçenek Değeri (`row3Col2ValueEn`) | TEXT | Criteria 3 Option 2 Value | 📋 Karşılaştırma Kriteri 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 3 Göster (`showRow3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kriter 4 Adı (`row4FeatureEn`) | TEXT | Comparison Criterion 4 | 📋 Karşılaştırma Kriteri 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 4 İlk Seçenek Değeri (`row4Col1ValueEn`) | TEXT | Criteria 4 Option 1 Value | 📋 Karşılaştırma Kriteri 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 4 Öne Çıkan Seçenek Değeri (`row4Col2ValueEn`) | TEXT | Criteria 4 Option 2 Value | 📋 Karşılaştırma Kriteri 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 4 Göster (`showRow4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kriter 5 Adı (`row5FeatureEn`) | TEXT | Comparison Criterion 5 | 📋 Karşılaştırma Kriteri 5 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 5 İlk Seçenek Değeri (`row5Col1ValueEn`) | TEXT | Criteria 5 Option 1 Value | 📋 Karşılaştırma Kriteri 5 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 5 Öne Çıkan Seçenek Değeri (`row5Col2ValueEn`) | TEXT | Criteria 5 Option 2 Value | 📋 Karşılaştırma Kriteri 5 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 5 Göster (`showRow5`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kriter 6 Adı (`row6FeatureEn`) | TEXT | Comparison Criterion 6 | 📋 Karşılaştırma Kriteri 6 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 6 İlk Seçenek Değeri (`row6Col1ValueEn`) | TEXT | Criteria 6 Option 1 Value | 📋 Karşılaştırma Kriteri 6 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kriter 6 Öne Çıkan Seçenek Değeri (`row6Col2ValueEn`) | TEXT | Criteria 6 Option 2 Value | 📋 Karşılaştırma Kriteri 6 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Karşılaştırma Kriteri 6 Göster (`showRow6`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Tablo Altı Bilgilendirme Notu (`bottomNoteEn`) | TEXT | * Table bottom explanation or informative note goes here. | 🔗 Tablo Altı Notu ve Bağlantı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aksiyon Butonu Metni (`ctaTextEn`) | TEXT | Get a Clinic-Specific Analysis → | 🔗 Tablo Altı Notu ve Bağlantı / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Tablo Altı Notunu Göster (`showBottomNote`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Aksiyon Butonunu Göster (`showCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
