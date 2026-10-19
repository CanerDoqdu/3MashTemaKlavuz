---
title: "Anasayfa Son Çağrı"
description: "3Mash temasında Anasayfa Son Çağrı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Son Çağrı

## Bu bölümde

- Yapılandırmada kayıtlı 30 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Son Çağrı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | iletisim-cta | 📝 Son Çağrı İçeriği | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Bu görünmez kaybı | 📝 Son Çağrı İçeriği | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | birlikte azaltalım. | 📝 Son Çağrı İçeriği | Hayır | — |
| 📝 Açıklama Metni (`descriptionHtml`) | RICH_TEXT | Mevcut iş akışınızı birlikte inceleyelim; kaybın nerede oluştuğunu birlikte görelim ve size uygun ekosistemi kuralım — elinizdeki cihazlarla bile. | 📝 Son Çağrı İçeriği | Hayır | — |
| 🎯 Birincil Buton Metni (`primaryButtonText`) | RICH_TEXT | Uzmana danış — ücretsiz | 🔗 Butonlar ve Yönlendirmeler / 🎯 Birincil Eylem | Hayır | — |
| 🔗 Birincil Buton Bağlantısı (`primaryButtonHref`) | TEXT | [bağlantı çıkarıldı] | 🔗 Butonlar ve Yönlendirmeler / 🎯 Birincil Eylem | Hayır | — |
| ⚡ İkincil Buton Metni (`secondaryButtonText`) | RICH_TEXT | Mash Academy'yi keşfet | 🔗 Butonlar ve Yönlendirmeler / ⚡ İkincil Eylem | Hayır | — |
| 🔗 İkincil Buton Bağlantısı (`secondaryButtonHref`) | TEXT | /pages/mash-academy | 🔗 Butonlar ve Yönlendirmeler / ⚡ İkincil Eylem | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Başlık Metni Rengi (`textColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Açıklama Metni Rengi (`subTextColor`) | COLOR | #A5A59A | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Başlık Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Birincil Buton Arka Plan Rengi (`primaryButtonBackgroundColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Birincil Buton Metin Rengi (`primaryButtonTextColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Buton Metin Rengi (`secondaryButtonTextColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🔲 Buton Köşe Yarıçapı (`buttonRadius`) | NUMBER | 10 | 🎨 Görünüm ve Renkler | Hayır | — |
| 👁️ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 💪 Vurgulanan Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Let's reduce this invisible loss | 📝 Son Çağrı İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Vurgulu Başlık Metni (`titleEmphasisEn`) | RICH_TEXT | together. | 📝 Son Çağrı İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Açıklama Metni (`descriptionHtmlEn`) | RICH_TEXT | Let's review your current workflow together; we'll identify where the loss occurs and set up the right ecosystem for you — even with your existing equipment. | 📝 Son Çağrı İçeriği / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Birincil Buton Metni (`primaryButtonTextEn`) | RICH_TEXT | Talk to an expert — free | 🔗 Butonlar ve Yönlendirmeler / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Birincil Buton Bağlantısı (`primaryButtonHrefEn`) | TEXT | [bağlantı çıkarıldı] | 🔗 Butonlar ve Yönlendirmeler / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce İkincil Buton Metni (`secondaryButtonTextEn`) | RICH_TEXT | Explore Mash Academy | 🔗 Butonlar ve Yönlendirmeler / 🌐 İngilizce İçerikler | Evet | — |
| 👁️ Açıklama Metnini Göster (`showDescription`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ Birincil Butonu Göster (`showPrimaryButton`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ İkincil Butonu Göster (`showSecondaryButton`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
