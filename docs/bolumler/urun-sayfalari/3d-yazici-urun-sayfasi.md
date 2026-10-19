---
title: "3D Yazıcı Ürün Sayfası"
description: "3Mash temasında 3D Yazıcı Ürün Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# 3D Yazıcı Ürün Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 7 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **3D Yazıcı Ürün Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Üst Etiket (`eyebrowText`) | TEXT | Boş metin | İçerik | Hayır | — |
| Başlık (`titleText`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | İçerik | Hayır | — |
| Açıklama (`descriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | İçerik | Hayır | — |
| Buton Metni (`primaryButtonText`) | TEXT | Boş metin | Bağlantılar | Hayır | — |
| Buton Bağlantısı (`primaryButtonHref`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | Bağlantılar | Hayır | — |
| Arka Plan (`backgroundColor`) | COLOR | #FAFAF7 | Görünüm | Hayır | — |
| Yazı Rengi (`textColor`) | COLOR | #0d0d0b | Görünüm | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
