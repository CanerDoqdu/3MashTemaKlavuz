---
title: "Ürün Dijital Üretim İş Akışı"
description: "3Mash temasında Ürün Dijital Üretim İş Akışı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Dijital Üretim İş Akışı

## Bu bölümde

- Yapılandırmada kayıtlı 47 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Dijital Üretim İş Akışı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔢 Bölüm Sıra Numarası (`sectionIndex`) | TEXT | 07 | 📝 İş Akışı Başlığı | Hayır | — |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | DİJİTAL İŞ AKIŞI | 📝 İş Akışı Başlığı | Hayır | — |
| 📝 İş Akışı Başlığı (`titleHtml`) | RICH_TEXT | Adım adım iş akışı başlığı buraya gelecek. | 📝 İş Akışı Başlığı | Hayır | — |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | İş akışı ve üretim süreçlerinin aşamalarını anlatan genel açıklama metni buraya gelecek. | 📝 İş Akışı Başlığı | Hayır | — |
| 🔢 Aşama 1 Numarası (`step1Number`) | TEXT | 01 | 🔄 Üretim Aşaması 1 | Hayır | — |
| 📝 Aşama 1 Başlığı (`step1Title`) | TEXT | 1. Aşama Başlığı | 🔄 Üretim Aşaması 1 | Hayır | — |
| 📝 Aşama 1 Açıklaması (`step1Description`) | TEXT | İş akışının 1. adımında yapılan işlemlerin detaylı açıklaması buraya gelecek. | 🔄 Üretim Aşaması 1 | Hayır | — |
| 🏷️ Aşama 1 Etiketi (`step1Tag`) | TEXT | TASARIM | 🔄 Üretim Aşaması 1 | Hayır | — |
| 🔢 Aşama 2 Numarası (`step2Number`) | TEXT | 02 | 🔄 Üretim Aşaması 2 | Hayır | — |
| 📝 Aşama 2 Başlığı (`step2Title`) | TEXT | 2. Aşama Başlığı | 🔄 Üretim Aşaması 2 | Hayır | — |
| 📝 Aşama 2 Açıklaması (`step2Description`) | TEXT | İş akışının 2. adımında yapılan işlemlerin detaylı açıklaması buraya gelecek. | 🔄 Üretim Aşaması 2 | Hayır | — |
| 🏷️ Aşama 2 Etiketi (`step2Tag`) | TEXT | BASKI | 🔄 Üretim Aşaması 2 | Hayır | — |
| 🔢 Aşama 3 Numarası (`step3Number`) | TEXT | 03 | 🔄 Üretim Aşaması 3 | Hayır | — |
| 📝 Aşama 3 Başlığı (`step3Title`) | TEXT | 3. Aşama Başlığı | 🔄 Üretim Aşaması 3 | Hayır | — |
| 📝 Aşama 3 Açıklaması (`step3Description`) | TEXT | İş akışının 3. adımında yapılan işlemlerin detaylı açıklaması buraya gelecek. | 🔄 Üretim Aşaması 3 | Hayır | — |
| 🏷️ Aşama 3 Etiketi (`step3Tag`) | TEXT | POST-CURE | 🔄 Üretim Aşaması 3 | Hayır | — |
| 🔢 Aşama 4 Numarası (`step4Number`) | TEXT | 04 | 🔄 Üretim Aşaması 4 | Hayır | — |
| 📝 Aşama 4 Başlığı (`step4Title`) | TEXT | 4. Aşama Başlığı | 🔄 Üretim Aşaması 4 | Hayır | — |
| 📝 Aşama 4 Açıklaması (`step4Description`) | TEXT | İş akışının 4. adımında yapılan işlemlerin detaylı açıklaması buraya gelecek. | 🔄 Üretim Aşaması 4 | Hayır | — |
| 🏷️ Aşama 4 Etiketi (`step4Tag`) | TEXT | TESLİMAT | 🔄 Üretim Aşaması 4 | Hayır | — |
| 📝 Danışmanlık Kartı Başlığı (`ctaTitle`) | TEXT | İş Akışınızı Birlikte Optimize Edelim | 📩 Danışmanlık ve Teklif Alanı | Hayır | — |
| 📝 Danışmanlık Kartı Açıklaması (`ctaDescription`) | TEXT | İş akışı ile ilgili danışmanlık veya teklif almak isteyenler için alt açıklama metni. | 📩 Danışmanlık ve Teklif Alanı | Hayır | — |
| 🔗 Danışmanlık Butonu Metni (`ctaButtonText`) | TEXT | Ücretsiz Danışmanlık Alın → | 📩 Danışmanlık ve Teklif Alanı | Hayır | — |
| 🔗 Danışmanlık Butonu Bağlantısı (`ctaButtonHref`) | TEXT | # | 📩 Danışmanlık ve Teklif Alanı | Hayır | — |
| 👁️ Aşama 1 Kartını Göster (`showStep1`) | BOOLEAN | true | 🔄 Üretim Aşaması 1 | Hayır | — |
| 👁️ Aşama 2 Kartını Göster (`showStep2`) | BOOLEAN | true | 🔄 Üretim Aşaması 2 | Hayır | — |
| 👁️ Aşama 3 Kartını Göster (`showStep3`) | BOOLEAN | true | 🔄 Üretim Aşaması 3 | Hayır | — |
| 👁️ Aşama 4 Kartını Göster (`showStep4`) | BOOLEAN | true | 🔄 Üretim Aşaması 4 | Hayır | — |
| 👁️ Danışmanlık Alanını Göster (`showWorkflowCta`) | BOOLEAN | true | 📩 Danışmanlık ve Teklif Alanı | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | DIGITAL WORKFLOW | 📝 İş Akışı Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İş Akışı Başlığı (`titleHtmlEn`) | RICH_TEXT | Step-by-step workflow title goes here. | 📝 İş Akışı Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | General description explaining the workflow and production stages goes here. | 📝 İş Akışı Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 1 Başlığı (`step1TitleEn`) | TEXT | Stage 1 Title | 🔄 Üretim Aşaması 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 1 Açıklaması (`step1DescriptionEn`) | TEXT | Detailed description for stage 1 goes here. | 🔄 Üretim Aşaması 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 1 Etiketi (`step1TagEn`) | TEXT | DESIGN | 🔄 Üretim Aşaması 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 2 Başlığı (`step2TitleEn`) | TEXT | Stage 2 Title | 🔄 Üretim Aşaması 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 2 Açıklaması (`step2DescriptionEn`) | TEXT | Detailed description for stage 2 goes here. | 🔄 Üretim Aşaması 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 2 Etiketi (`step2TagEn`) | TEXT | PRINTING | 🔄 Üretim Aşaması 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 3 Başlığı (`step3TitleEn`) | TEXT | Stage 3 Title | 🔄 Üretim Aşaması 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 3 Açıklaması (`step3DescriptionEn`) | TEXT | Detailed description for stage 3 goes here. | 🔄 Üretim Aşaması 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 3 Etiketi (`step3TagEn`) | TEXT | POST-CURE | 🔄 Üretim Aşaması 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 4 Başlığı (`step4TitleEn`) | TEXT | Stage 4 Title | 🔄 Üretim Aşaması 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 4 Açıklaması (`step4DescriptionEn`) | TEXT | Detailed description for stage 4 goes here. | 🔄 Üretim Aşaması 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Aşama 4 Etiketi (`step4TagEn`) | TEXT | DELIVERY | 🔄 Üretim Aşaması 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Danışmanlık Kartı Başlığı (`ctaTitleEn`) | TEXT | Let's Optimize Your Workflow Together | 📩 Danışmanlık ve Teklif Alanı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Danışmanlık Kartı Açıklaması (`ctaDescriptionEn`) | TEXT | Description for those seeking workflow consulting or a quote. | 📩 Danışmanlık ve Teklif Alanı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Danışmanlık Butonu Metni (`ctaButtonTextEn`) | TEXT | Get Free Consultation → | 📩 Danışmanlık ve Teklif Alanı / 🌐 İngilizce İçerikler | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
