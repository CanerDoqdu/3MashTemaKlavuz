---
title: "Ürün Tanıtım Videosu"
description: "3Mash temasında Ürün Tanıtım Videosu adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Tanıtım Videosu

## Bu bölümde

- Yapılandırmada kayıtlı 8 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Tanıtım Videosu** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🎬 Video İçin Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🎬 Video Kaynağı | Hayır | — |
| 🔢 Bölüm Sıra Numarası (`sectionIndex`) | TEXT | 04 | 📝 Bölüm İçeriği | Hayır | Bölüm başlığının yanındaki sıra numarası. |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | VİDEO | 📝 Bölüm İçeriği | Hayır | Sıra numarasının yanında gösterilen kısa etiket. |
| 📝 Video Bölüm Başlığı (`titleHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm İçeriği | Hayır | Video alanının üstünde gösterilen başlık; biçimlendirme desteklenir. |
| 📝 Video Yan Açıklaması (`sideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm İçeriği | Hayır | Başlığın yanında gösterilen açıklama; biçimlendirme desteklenir. |
| 🔗 Video Adresi (`videoHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎬 Video Kaynağı | Hayır | HTTPS YouTube, Vimeo veya doğrudan video dosyası bağlantısı. |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
