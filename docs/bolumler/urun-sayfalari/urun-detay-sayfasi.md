---
title: "Ürün Detay Sayfası"
description: "3Mash temasında Ürün Detay Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Detay Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 40 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Detay Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Template Preset (`templatePreset`) | TEXT | printer | Content | Hayır | Hazır ürün sayfası teması. Değerler: printer, p16l, p1d, resin, curing, scanner, blocks, oven, custom. |
| Üst Etiket Metni (`eyebrowText`) | RICH_TEXT | 3MASH ÜRÜN | Content | Hayır | — |
| Başlık Metni (`titleText`) | RICH_TEXT | MASH P16L | Content | Hayır | — |
| Başlık Vurgusu (`titleEmphasis`) | RICH_TEXT | Dijital üretime güçlü başlangıç. | Content | Hayır | — |
| Açıklama HTML (`descriptionHtml`) | RICH_TEXT | Dijitale yeni geçen klinik ve lablar için 3mash revizyonlu LCD yazıcı. Aynı parametre desteği, aynı teknik ekip. | Metin Özelleştirme | Hayır | — |
| Ürün Görsel (`productImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | Media | Hayır | — |
| Ürün Görsel Alternatif Metni (`productImageAlt`) | TEXT | MASH P16L | Media | Hayır | — |
| Görsel Preset (`imagePreset`) | TEXT | p16l | Media | Hayır | — |
| Yerleşim - Genişlik (`productImageWidth`) | NUMBER | 82 | Media | Hayır | — |
| Yerleşim - Yükseklik (`productImageHeight`) | NUMBER | 82 | Media | Hayır | — |
| Yerleşim - X Kaydırma (`productImageXOffset`) | NUMBER | 0 | Media | Hayır | — |
| Yerleşim - Y Kaydırma (`productImageYOffset`) | NUMBER | 0 | Media | Hayır | — |
| Efekt - Opaklık (`productImageOpacity`) | NUMBER | 100 | Media | Hayır | — |
| Efekt - Parlaklık (`productImageBrightness`) | NUMBER | 100 | Media | Hayır | — |
| Efekt - Kontrast (`productImageContrast`) | NUMBER | 100 | Media | Hayır | — |
| Efekt - Doygunluk (`productImageSaturation`) | NUMBER | 100 | Media | Hayır | — |
| Teknik Değer 1 Etiket (`spec1Label`) | RICH_TEXT | Teknoloji | Specs | Hayır | — |
| Teknik Değer 1 Value (`spec1Value`) | RICH_TEXT | LCD · revize | Specs | Hayır | — |
| Teknik Değer 2 Etiket (`spec2Label`) | RICH_TEXT | Dalga boyu | Specs | Hayır | — |
| Teknik Değer 2 Value (`spec2Value`) | RICH_TEXT | 385 nm | Specs | Hayır | — |
| Teknik Değer 3 Etiket (`spec3Label`) | RICH_TEXT | Rol | Specs | Hayır | — |
| Teknik Değer 3 Value (`spec3Value`) | RICH_TEXT | Ekosisteme giriş | Specs | Hayır | — |
| Teknik Değer 4 Etiket (`spec4Label`) | RICH_TEXT | Destek | Specs | Hayır | — |
| Teknik Değer 4 Value (`spec4Value`) | RICH_TEXT | Kurulum + eğitim | Specs | Hayır | — |
| Birincil Buton Metni (`primaryButtonText`) | RICH_TEXT | Danışmanlık al | Buttons | Hayır | — |
| Birincil Buton Bağlantı (`primaryButtonHref`) | TEXT | / | Buttons | Hayır | — |
| İkincil Buton Metni (`secondaryButtonText`) | RICH_TEXT | Ana sayfaya dön | Buttons | Hayır | — |
| İkincil Buton Bağlantı (`secondaryButtonHref`) | TEXT | / | Buttons | Hayır | — |
| Arka Plan Rengi (`backgroundColor`) | COLOR | #f7f7f2 | Appearance | Hayır | — |
| Yazı Rengi (`textColor`) | COLOR | #050505 | Appearance | Hayır | — |
| Alternatif Metin Yazı Rengi (`subTextColor`) | COLOR | #4d4d45 | Appearance | Hayır | — |
| İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #8f8d84 | Appearance | Hayır | — |
| Panel Rengi (`panelColor`) | COLOR | #ffffff | Appearance | Hayır | — |
| Vurgu Rengi (`accentColor`) | COLOR | #c7ff1a | Appearance | Hayır | — |
| Çizgi Rengi (`lineColor`) | COLOR | #deded5 | Appearance | Hayır | — |
| Enable Kelime Style (`wordStyleEnabled`) | BOOLEAN | false | 07. Vurgulu Kelime Stilleri | Hayır | — |
| Stilli Kelime Or Phrase (`styledPhrase`) | TEXT | Boş metin | 07. Vurgulu Kelime Stilleri | Hayır | — |
| Stilli Kelime Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 07. Vurgulu Kelime Stilleri | Hayır | — |
| Make Stilli Kelime Bold (`styledPhraseBold`) | BOOLEAN | false | 07. Vurgulu Kelime Stilleri | Hayır | — |
| Make Stilli Kelime Italic (`styledPhraseItalic`) | BOOLEAN | false | 07. Vurgulu Kelime Stilleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
