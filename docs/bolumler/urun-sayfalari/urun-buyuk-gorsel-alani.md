---
title: "Ürün Büyük Görsel Alanı"
description: "3Mash temasında Ürün Büyük Görsel Alanı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Büyük Görsel Alanı

## Bu bölümde

- Yapılandırmada kayıtlı 4 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Büyük Görsel Alanı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 00. Ürün Veri Kaynağı | Hayır | Ürün sayfasındaki mevcut ürünü bağla. Component sadece ArgenZ zirkon blok ürünlerinde render eder. |
| Görsel (`image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 01. Görsel Ayarları | Belirtilmemiş | Sadece zirkon blok ürün sayfalarında gösterilecek büyük görsel. |
| Ürün Template JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 02. Gelişmiş Şablon JSON | Hayır | CRS kaynaklı reusable ürün template datası. Doluysa source'da karşılığı olmayan bu section ürün template'inde render edilmez. |
| Arka Plan Rengi (`backgroundColor`) | COLOR | Yapılandırmada varsayılan değer belirtilmemiş | Grupsuz | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
