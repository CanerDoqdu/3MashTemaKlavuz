---
title: "Ürün Paket İçeriği"
description: "3Mash temasında Ürün Paket İçeriği adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Paket İçeriği

## Bu bölümde

- Yapılandırmada kayıtlı 39 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Paket İçeriği** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 00. Ürün Veri Kaynağı | Hayır | — |
| Bölüm Sıra No (`sectionIndex`) | TEXT | 06 | 01. Bölüm Başlığı | Hayır | — |
| Bölüm Etiketi (`sectionLabel`) | TEXT | PAKET İÇERİĞİ | 01. Bölüm Başlığı | Hayır | — |
| Ana Başlık (HTML) (`titleHtml`) | RICH_TEXT | Paket ve kutu içeriği başlığı buraya gelecek. | 01. Bölüm Başlığı | Hayır | — |
| Sağ Yan Açıklama (HTML) (`sideHtml`) | RICH_TEXT | Kutu ve paket içeriği bölümünün sağ üst genel açıklama metni buraya gelecek. | 01. Bölüm Başlığı | Hayır | — |
| Paket / Kutu Görseli (`packageImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 02. Sol Öne Çıkan Paket Kartı | Hayır | — |
| Paket Rozeti (`packageBadge`) | TEXT | HER ŞEY DAHİL SET | 02. Sol Öne Çıkan Paket Kartı | Hayır | — |
| Paket Kartı Başlığı (`packageTitle`) | TEXT | Eksiksiz Üretim Kiti | 02. Sol Öne Çıkan Paket Kartı | Hayır | — |
| Paket Kartı Açıklaması (`packageSubtitle`) | TEXT | Paket veya setin genel kapsamı ve avantajlarını anlatan kısa açıklama metni. | 02. Sol Öne Çıkan Paket Kartı | Hayır | — |
| 1. Madde No (`item1Number`) | TEXT | 01 | 03. 1. Paket Maddesi | Hayır | — |
| 1. Madde Başlığı (`item1Title`) | TEXT | 1. Paket Maddesi Başlığı | 03. 1. Paket Maddesi | Hayır | — |
| 1. Madde Açıklaması (`item1Description`) | TEXT | Paket içeriğine dahil olan 1. ana ürün veya donanım açıklaması buraya gelecek. | 03. 1. Paket Maddesi | Hayır | — |
| 1. Madde Etiketi (`item1Tag`) | TEXT | ANA DONANIM | 03. 1. Paket Maddesi | Hayır | — |
| 2. Madde No (`item2Number`) | TEXT | 02 | 04. 2. Paket Maddesi | Hayır | — |
| 2. Madde Başlığı (`item2Title`) | TEXT | 2. Paket Maddesi Başlığı | 04. 2. Paket Maddesi | Hayır | — |
| 2. Madde Açıklaması (`item2Description`) | TEXT | Paket içeriğine dahil olan 2. sarf veya aksesuar açıklaması buraya gelecek. | 04. 2. Paket Maddesi | Hayır | — |
| 2. Madde Etiketi (`item2Tag`) | TEXT | SARF / REÇİNE | 04. 2. Paket Maddesi | Hayır | — |
| 3. Madde No (`item3Number`) | TEXT | 03 | 05. 3. Paket Maddesi | Hayır | — |
| 3. Madde Başlığı (`item3Title`) | TEXT | 3. Paket Maddesi Başlığı | 05. 3. Paket Maddesi | Hayır | — |
| 3. Madde Açıklaması (`item3Description`) | TEXT | Paket içeriğine dahil olan 3. alet veya kalibrasyon seti açıklaması buraya gelecek. | 05. 3. Paket Maddesi | Hayır | — |
| 3. Madde Etiketi (`item3Tag`) | TEXT | KALİBRASYON | 05. 3. Paket Maddesi | Hayır | — |
| 4. Madde No (`item4Number`) | TEXT | 04 | 06. 4. Paket Maddesi | Hayır | — |
| 4. Madde Başlığı (`item4Title`) | TEXT | 4. Paket Maddesi Başlığı | 06. 4. Paket Maddesi | Hayır | — |
| 4. Madde Açıklaması (`item4Description`) | TEXT | Paket içeriğine dahil olan 4. yedek parça veya aksesuar açıklaması buraya gelecek. | 06. 4. Paket Maddesi | Hayır | — |
| 4. Madde Etiketi (`item4Tag`) | TEXT | YEDEK PARÇA | 06. 4. Paket Maddesi | Hayır | — |
| 5. Madde No (`item5Number`) | TEXT | 05 | 07. 5. Paket Maddesi | Hayır | — |
| 5. Madde Başlığı (`item5Title`) | TEXT | 5. Paket Maddesi Başlığı | 07. 5. Paket Maddesi | Hayır | — |
| 5. Madde Açıklaması (`item5Description`) | TEXT | Paket içeriğine dahil olan 5. eğitim veya danışmanlık hizmeti açıklaması buraya gelecek. | 07. 5. Paket Maddesi | Hayır | — |
| 5. Madde Etiketi (`item5Tag`) | TEXT | MASH ACADEMY | 07. 5. Paket Maddesi | Hayır | — |
| 6. Madde No (`item6Number`) | TEXT | 06 | 08. 6. Paket Maddesi | Hayır | — |
| 6. Madde Başlığı (`item6Title`) | TEXT | 6. Paket Maddesi Başlığı | 08. 6. Paket Maddesi | Hayır | — |
| 6. Madde Açıklaması (`item6Description`) | TEXT | Paket içeriğine dahil olan 6. teknik destek veya garanti kapsamı açıklaması buraya gelecek. | 08. 6. Paket Maddesi | Hayır | — |
| 6. Madde Etiketi (`item6Tag`) | TEXT | TEKNİK DESTEK | 08. 6. Paket Maddesi | Hayır | — |
| Alt Bant Başlığı (`bottomBannerTitle`) | TEXT | Kurulum & Entegrasyon Garantisi | 09. Alt Garanti Bandı | Hayır | — |
| Alt Bant Rozeti (`bottomBannerBadge`) | TEXT | ÜCRETSİZ DESTEK | 09. Alt Garanti Bandı | Hayır | — |
| Alt Bant Açıklaması (`bottomBannerText`) | TEXT | Kutu içeriği veya teslimat garantisi ile ilgili alt bilgilendirme metni buraya gelecek. | 09. Alt Garanti Bandı | Hayır | — |
| Alt Buton Metni (`ctaText`) | TEXT | Uzmana Danışın → | 09. Alt Garanti Bandı | Hayır | — |
| Alt Buton Linki (`ctaHref`) | TEXT | /search | 09. Alt Garanti Bandı | Hayır | — |
| Arka Plan Rengi (`backgroundColor`) | COLOR | Yapılandırmada varsayılan değer belirtilmemiş | Grupsuz | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
