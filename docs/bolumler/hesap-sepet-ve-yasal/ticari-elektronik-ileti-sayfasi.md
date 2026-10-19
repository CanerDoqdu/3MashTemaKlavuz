---
title: "Ticari Elektronik İleti Sayfası"
description: "3Mash temasında Ticari Elektronik İleti Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ticari Elektronik İleti Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 12 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ticari Elektronik İleti Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📄 Sayfa Türü (`mode`) | TEXT | ticari | 📄 Yasal Sayfa İçeriği | Evet | — |
| 📝 Sayfa Başlığı (`titleText`) | TEXT | TİCARİ ELEKTRONİK İLETİ ONAYI | 📄 Yasal Sayfa İçeriği | Hayır | — |
| 📝 Yasal Metin İçeriği (`contentHtml`) | RICH_TEXT | 3 MASH TEKNOLOJİ A.Ş. tarafından [3Mash alan adı çıkarıldı] websitesi aracılığıyla yeni ürünler ve kampanyaların tanıtımı başta olmak üzere, tarafıma ticari elektronik ileti gönderilmesi amacıyla 3 MASH TEKNOLOJİ A.Ş. ile paylaşmış olduğum veya ilerleyen dönemlerde paylaşacağım telefon ve eposta ve mobil uygulamalar aracılığıyla adresimin kullanılmasına ve işbu iletişim araçları ile şahsımla iletişime geçilmesine, telefon ile arama yapılmasına bu kapsamda paylaşmış olduğum bilgilerin 3 MASH TEKNOLOJİ A.Ş. tarafından saklanmasına, kullanılmasına ve ticari elektronik iletinin içeriğinin ve gönderiye ilişkin diğer kayıtların gerektiğinde Gümrük ve Ticaret Bakanlığı’na sunulmak üzere kayıt altına alınarak saklanmasına onay veriyorum. | 📄 Yasal Sayfa İçeriği | Hayır | Ticari elektronik ileti onayı gövde metni. üst menü ve alt bilgi dahil değildir. |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #000000 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #6d6d6d | 🎨 Görünüm ve Renkler | Hayır | — |
| ↔️ Maksimum İçerik Genişliği (`maxWidth`) | NUMBER | 1280 | 📐 Sayfa Düzeni | Hayır | — |
| ⬆️ Üst Boşluk (`paddingTop`) | NUMBER | 88 | 📐 Sayfa Düzeni | Hayır | — |
| ⬇️ Alt Boşluk (`paddingBottom`) | NUMBER | 80 | 📐 Sayfa Düzeni | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`titleTextEn`) | TEXT | COMMERCIAL ELECTRONIC MESSAGE CONSENT | 📄 Yasal Sayfa İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yasal Metin (`contentHtmlEn`) | RICH_TEXT | I consent to 3 MASH TEKNOLOJİ A.Ş. using the phone number, email, and mobile app address I have shared or will share with them, in order to send me commercial electronic messages, primarily to promote new products and campaigns via the [3Mash alan adı çıkarıldı] website, and to contact me through these communication channels, including by phone call; I also consent to 3 MASH TEKNOLOJİ A.Ş. storing and using the information I have shared for this purpose, and to the content of the commercial electronic message and other records related to the transmission being recorded and stored for submission to the Ministry of Customs and Trade if required. | 📄 Yasal Sayfa İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Ayrı Başlığı Göster (`showPageTitle`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Yalnızca rich text içinde gömülü başlık algılanmadığında oluşturulan ayrı başlığı gösterir. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
