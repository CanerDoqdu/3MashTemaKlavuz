---
title: "Ürün Büyük Görsel Alanı"
description: "3Mash temasında Ürün Büyük Görsel Alanı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Büyük Görsel Alanı

## Bu bölümde

- Yapılandırmada kayıtlı 4 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Büyük Görsel Alanı** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

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
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
