---
title: "İletişim Sayfası"
description: "3Mash temasında İletişim Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# İletişim Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 74 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **İletişim Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Sayfa Başlığı (`titleText`) | TEXT | Bize Ulaşın | 📝 İletişim Sayfası İçeriği | Hayır | — |
| 📝 Açıklama Metni (`descriptionText`) | RICH_TEXT | Sizden herhangi bir soru ya da geri dönüş gelince çok mutlu oluyoruz. Aşağıdaki formu kullanarak bize her türlü soruyu sorabilirsiniz. Size en geç 24 saat içinde yanıt vereceğiz. Sitemizi ziyaret ettiğiniz için teşekkür ederiz. | 📝 İletişim Sayfası İçeriği | Hayır | — |
| 🏷️ Ad Alanı Etiketi (`firstNameLabel`) | TEXT | Ad | 📨 İletişim Formu | Hayır | — |
| 🏷️ Soyad Alanı Etiketi (`lastNameLabel`) | TEXT | Soyad | 📨 İletişim Formu | Hayır | — |
| 📧 E-posta Alanı Etiketi (`emailLabel`) | TEXT | Email | 📨 İletişim Formu | Hayır | — |
| 📞 Telefon Alanı Etiketi (`phoneLabel`) | TEXT | Telefon | 📨 İletişim Formu | Hayır | — |
| ✉️ Mesaj Alanı Etiketi (`messageLabel`) | TEXT | Mesaj | 📨 İletişim Formu | Hayır | — |
| 📝 KVKK Onay Metni (`kvkkTextBefore`) | TEXT | Kişisel verilerin korunması kanunu | 📨 İletişim Formu | Hayır | — |
| 🔗 KVKK Bağlantı Metni (`kvkkLinkText`) | TEXT | okudum, onaylıyorum | 📨 İletişim Formu | Hayır | — |
| 🔗 KVKK Sayfa Adresi (`kvkkHref`) | TEXT | /pages/kvkk | 📨 İletişim Formu | Hayır | KVKK sayfası için yayın routeu: /pages/kvkk. |
| 🔘 Gönder Butonu Yazısı (`buttonText`) | TEXT | Gönder | 📨 İletişim Formu | Hayır | — |
| 📧 Alıcı E-posta Adresi (`recipientEmail`) | TEXT | info@[3Mash alan adı çıkarıldı] | 🔗 İletişim Bağlantıları | Hayır | — |
| ✅ Gönderim Durum Metni (`successText`) | TEXT | Mail uygulamanız açılıyor. | 📨 İletişim Formu | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #000000 | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #6b7280 | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #d9d9d9 | 🎨 Renkler | Hayır | — |
| 🎨 Buton Arka Plan Rengi (`buttonBackgroundColor`) | COLOR | #000000 | 🎨 Renkler | Hayır | — |
| 🎨 Buton Yazı Rengi (`buttonTextColor`) | COLOR | #ffffff | 🎨 Renkler | Hayır | — |
| 📝 Üst Etiket (`heroKickerText`) | TEXT | İLETİŞİM | 📝 İletişim Sayfası İçeriği | Hayır | — |
| 🌐 İngilizce Üst Etiket (`heroKickerTextEn`) | TEXT | CONTACT | 📝 İletişim Sayfası İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`titleTextEn`) | TEXT | Contact Us | 📝 İletişim Sayfası İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`descriptionTextEn`) | RICH_TEXT | We're always happy to hear any question or feedback from you. You can ask us anything using the form below. We will respond to you within 24 hours at the latest. Thank you for visiting our site. | 📝 İletişim Sayfası İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 📧 E-posta Konu Başlığı (`emailSubjectPrefix`) | TEXT | 3mash İletişim Formu | 🔗 İletişim Bağlantıları | Hayır | — |
| 🌐 İngilizce E-posta Konu Başlığı (`emailSubjectPrefixEn`) | TEXT | 3mash Contact Form | 🔗 İletişim Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 📍 Konum Bağlantı Metni (`locationText`) | TEXT | Antalya Teknokent, Konyaaltı | 🔗 İletişim Bağlantıları | Hayır | — |
| 🌐 İngilizce Konum Metni (`locationTextEn`) | TEXT | Antalya Teknokent, Konyaaltı | 🔗 İletişim Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🔗 Konum Bağlantı Adresi (`locationHref`) | TEXT | [bağlantı çıkarıldı] | 🔗 İletişim Bağlantıları | Hayır | — |
| 📝 Destek Açıklaması (`supportText`) | TEXT | Teknik destek ve ürün danışmanlığı | 🔗 İletişim Bağlantıları | Hayır | — |
| 🌐 İngilizce Destek Açıklaması (`supportTextEn`) | TEXT | Technical support & product consulting | 🔗 İletişim Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🔢 Bilgi Paneli Numarası (`infoPanelCode`) | TEXT | 01 | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 📝 Bilgi Paneli Başlığı (`infoPanelTitle`) | TEXT | Doğru kişiye hızlı ulaşın. | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Bilgi Paneli Başlığı (`infoPanelTitleEn`) | TEXT | Reach the right person fast. | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Bilgi Paneli Açıklaması (`infoPanelDescription`) | RICH_TEXT | Ürün seçimi, parametre kalibrasyonu, satış sonrası destek veya Academy iş birlikleri için mesajınızı doğrudan ekibe iletin. | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Bilgi Paneli Açıklaması (`infoPanelDescriptionEn`) | RICH_TEXT | Send your message directly to the team for product selection, parameter calibration, post-sale support or Academy partnerships. | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 🏷️ Yanıt Süresi Başlığı (`responseTimeLabel`) | TEXT | Yanıt süresi | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Yanıt Süresi Başlığı (`responseTimeLabelEn`) | TEXT | Response time | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Yanıt Süresi Bilgisi (`responseTimeValue`) | TEXT | En geç 24 saat içinde dönüş | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Yanıt Süresi Bilgisi (`responseTimeValueEn`) | TEXT | Reply within 24 hours at latest | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 🏷️ Destek Kapsamı Başlığı (`supportScopeLabel`) | TEXT | Destek kapsamı | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Destek Kapsamı Başlığı (`supportScopeLabelEn`) | TEXT | Support scope | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Destek Kapsamı Bilgisi (`supportScopeValue`) | TEXT | Cihaz, reçine, kürleme ve sarf malzemeleri | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Destek Kapsamı Bilgisi (`supportScopeValueEn`) | TEXT | Printers, resins, curing and consumables | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 🏷️ Konum Bilgisi Başlığı (`locationLabel`) | TEXT | Lokasyon | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Konum Bilgisi Başlığı (`locationLabelEn`) | TEXT | Location | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| ➕ Ek Bilgi 1 Başlığı (`extraInfo1Label`) | TEXT | Ek Bilgi | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Ek Bilgi 1 Başlığı (`extraInfo1LabelEn`) | TEXT | Additional information | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| ➕ Ek Bilgi 1 Metni (`extraInfo1Value`) | TEXT | İletişim detayınızı buraya ekleyin. | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Ek Bilgi 1 Metni (`extraInfo1ValueEn`) | TEXT | Add your contact details here. | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| ➕ Ek Bilgi 2 Başlığı (`extraInfo2Label`) | TEXT | Ek Bilgi | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Ek Bilgi 2 Başlığı (`extraInfo2LabelEn`) | TEXT | Additional information | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| ➕ Ek Bilgi 2 Metni (`extraInfo2Value`) | TEXT | İletişim detayınızı buraya ekleyin. | 📋 Hızlı İletişim Bilgileri | Hayır | — |
| 🌐 İngilizce Ek Bilgi 2 Metni (`extraInfo2ValueEn`) | TEXT | Add your contact details here. | 📋 Hızlı İletişim Bilgileri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Soyad Alanı Etiketi (`lastNameLabelEn`) | TEXT | Last Name | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce E-posta Alanı Etiketi (`emailLabelEn`) | TEXT | E-mail | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Telefon Alanı Etiketi (`phoneLabelEn`) | TEXT | Phone | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Mesaj Alanı Etiketi (`messageLabelEn`) | TEXT | Message | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce KVKK Onay Metni (`kvkkTextBeforeEn`) | TEXT | Personal data protection law | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce KVKK Bağlantı Metni (`kvkkLinkTextEn`) | TEXT | I have read and agree | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Gönder Butonu Yazısı (`buttonTextEn`) | TEXT | Send | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Gönderim Durum Metni (`successTextEn`) | TEXT | Opening mail app... | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| ♿ Telefon Ülke Kodu Erişilebilir Adı (`phoneCountryAriaLabel`) | TEXT | Telefon ülke kodu | 📨 İletişim Formu | Hayır | — |
| 🌐 İngilizce Telefon Ülke Kodu Erişilebilir Adı (`phoneCountryAriaLabelEn`) | TEXT | Phone country code | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 👁️ Üst Alanı Göster (`showHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Doğrudan İletişim Bilgilerini Göster (`showDirectContact`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Hızlı Bilgi Panelini Göster (`showInfoPanel`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Bilgi Satırlarını Göster (`showInfoList`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İletişim Formunu Göster (`showContactForm`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Telefon Alanını Göster (`showPhoneField`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ Ek Bilgi 1 Satırını Göster (`showExtraInfo1`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ Ek Bilgi 2 Satırını Göster (`showExtraInfo2`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 📧 Doğrudan E-posta Konu Metni (`directEmailSubjectText`) | TEXT | 3mash İletişim | 🔗 İletişim Bağlantıları | Hayır | — |
| 🌐 İngilizce Doğrudan E-posta Konu Metni (`directEmailSubjectTextEn`) | TEXT | 3mash Contact | 🔗 İletişim Bağlantıları / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ad Alanı Etiketi (`firstNameLabelEn`) | TEXT | First Name | 📨 İletişim Formu / 🌐 İngilizce Form Metinleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
