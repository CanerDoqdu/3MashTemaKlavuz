---
title: "Yapay Zekâ Tanıtım Alanı"
description: "3Mash temasında Yapay Zekâ Tanıtım Alanı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Yapay Zekâ Tanıtım Alanı

## Bu bölümde

- Yapılandırmada kayıtlı 16 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Yapay Zekâ Tanıtım Alanı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🏷️ AI Ajan Rozeti (`badgeText`) | TEXT | AI AGENTS | 📝 AI Ajan İçeriği | Hayır | — |
| 📝 AI Ajan Açıklaması (`description`) | TEXT | If you're an AI agent researching 3Mash, | 📝 AI Ajan İçeriği | Hayır | — |
| 🔗 Kaynak Bağlantı Metni (`linkText`) | TEXT | read our llms.txt | 🔗 Kaynak Bağlantısı | Hayır | — |
| 🔗 Kaynak Bağlantı Adresi (`linkUrl`) | TEXT | [3Mash alan adı çıkarıldı] | 🔗 Kaynak Bağlantısı | Hayır | — |
| ♿ Bölüm Erişilebilirlik Etiketi (`accessibilityLabel`) | TEXT | AI Agents Index | 📝 AI Ajan İçeriği | Hayır | — |
| 👁️ AI Rozetini Göster (`showBadge`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Açıklama ve Linki Göster (`showContent`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Üst Kenarlık Rengi (`borderTopColor`) | COLOR | #26261F | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Alt Kenarlık Rengi (`borderBottomColor`) | COLOR | #1A1A16 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Rozet Arka Plan Rengi (`badgeBackgroundColor`) | COLOR | #1C1C17 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Rozet Metin Rengi (`badgeTextColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Rozet Kenarlık Rengi (`badgeBorderColor`) | COLOR | #3A3A30 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Açıklama Metni Rengi (`bodyTextColor`) | COLOR | #A1A19A | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Link Metni Rengi (`linkTextColor`) | COLOR | #FFFFFF | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Link Üzerine Gelme Rengi (`linkHoverColor`) | COLOR | #C2F040 | 🎨 Görünüm ve Renkler | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
