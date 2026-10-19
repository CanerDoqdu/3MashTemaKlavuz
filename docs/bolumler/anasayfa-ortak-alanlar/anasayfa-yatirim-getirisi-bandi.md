---
title: "Anasayfa Yatırım Getirisi Bandı"
description: "3Mash temasında Anasayfa Yatırım Getirisi Bandı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Yatırım Getirisi Bandı

## Bu bölümde

- Yapılandırmada kayıtlı 26 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Yatırım Getirisi Bandı** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | yatirim | 🔗 Bölüm ve CTA Bağlantıları | Hayır | — |
| 📝 Üst Etiket Metni (`eyebrowText`) | RICH_TEXT | YATIRIMIN GERİ DÖNÜŞÜ | 📝 ROI Bandı İçeriği | Hayır | — |
| 📊 Geri Dönüş Değeri (`valueText`) | RICH_TEXT | &lt; 6 ay | 📝 ROI Bandı İçeriği | Hayır | — |
| 📝 Açıklama Metni (`descriptionHtml`) | RICH_TEXT | 3mash ekosistemine geçen bir klinik, yatırımını 6 aydan kısa sürede geri kazanma potansiyeline sahip. Sonrasında bu verimlilik her yıl sürer: yılda $72–162K'ya varan tasarruf potansiyeli. | 📝 ROI Bandı İçeriği | Hayır | — |
| 📝 Hesaplama Butonu Metni (`ctaText`) | RICH_TEXT | Kliniğiniz için hesaplayalım → | 📝 ROI Bandı İçeriği | Hayır | — |
| 🔗 Hesaplama Butonu Bağlantısı (`ctaHref`) | TEXT | #hesap | 🔗 Bölüm ve CTA Bağlantıları | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Açıklama Metni Rengi (`subTextColor`) | COLOR | #2C3A09 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Üst Etiket Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Arka Plan Rengi (`buttonBackgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Metin Rengi (`buttonTextColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Köşe Yuvarlaklığı (`buttonRadius`) | NUMBER | 10 | 🎨 Görünüm ve Renkler | Hayır | — |
| ✨ Eşleşen Kelimeyi Biçimlendir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Kelime Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Kelime Vurgusu | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Kelime Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Kelime Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Kelime Vurgusu | Hayır | — |
| 👁️ Arka Plan Işımasını Göster (`showBackgroundGlow`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Üst Etiket Metni (`eyebrowTextEn`) | RICH_TEXT | RETURN ON INVESTMENT | 📝 ROI Bandı İçeriği | Hayır | — |
| 🌐 İngilizce Geri Dönüş Değeri (`valueTextEn`) | RICH_TEXT | &lt; 6 months | 📝 ROI Bandı İçeriği | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`descriptionHtmlEn`) | RICH_TEXT | A clinic switching to the 3mash ecosystem has the potential to recoup its investment in under 6 months. After that, the efficiency continues every year: savings potential of $72–162K per year. | 📝 ROI Bandı İçeriği | Hayır | — |
| 🌐 İngilizce Hesaplama Butonu Metni (`ctaTextEn`) | RICH_TEXT | Calculate for your clinic → | 📝 ROI Bandı İçeriği | Hayır | — |
| 👁️ Geri Dönüş Metrik Grubunu Göster (`showReturnMetric`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Açıklama Metnini Göster (`showDescription`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Hesaplama Butonunu Göster (`showCta`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
