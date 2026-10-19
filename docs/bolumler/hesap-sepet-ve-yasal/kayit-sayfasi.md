---
title: "Kayıt Sayfası"
description: "3Mash temasında Kayıt Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Kayıt Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 61 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Kayıt Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Üst Etiket (`eyebrowText`) | RICH_TEXT | Hesabım | Üst Alan | Hayır | — |
| Başlık (`titleText`) | RICH_TEXT | Üye Ol | Üst Alan | Hayır | — |
| Açıklama (`subtitleText`) | RICH_TEXT | 3mash hesabınızı oluşturun; sipariş, destek ve ürün akışlarınızı tek yerden takip edin. | Üst Alan | Hayır | — |
| Giriş Sekmesi (`loginTabText`) | RICH_TEXT | Üye Girişi | Form | Hayır | — |
| Giriş Sekmesi Linki (`loginTabHref`) | TEXT | /account/login | Form | Hayır | — |
| Kayıt Sekmesi (`registerTabText`) | RICH_TEXT | Üye Ol | Form | Hayır | — |
| Ad Etiketi (`nameLabel`) | RICH_TEXT | Ad | Form | Hayır | — |
| Ad Placeholder (`namePlaceholder`) | TEXT | Adınız | Form | Hayır | — |
| Soyad Etiketi (`surnameLabel`) | RICH_TEXT | Soyad | Form | Hayır | — |
| Soyad Placeholder (`surnamePlaceholder`) | TEXT | Soyadınız | Form | Hayır | — |
| Email Etiketi (`emailLabel`) | RICH_TEXT | Email | Form | Hayır | — |
| Email Placeholder (`emailPlaceholder`) | TEXT | Email adresiniz | Form | Hayır | — |
| Telefon Etiketi (`phoneLabel`) | RICH_TEXT | Telefon | Form | Hayır | — |
| Telefon Placeholder (`phonePlaceholder`) | TEXT | Telefon numaranız | Form | Hayır | — |
| Şifre Etiketi (`passwordLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | Form | Hayır | — |
| Şifre Placeholder (`passwordPlaceholder`) | TEXT | [hassas olabilecek değer gösterilmez] | Form | Hayır | — |
| Şifre Tekrar Etiketi (`passwordConfirmLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | Form | Hayır | — |
| Şifre Tekrar Placeholder (`passwordConfirmPlaceholder`) | TEXT | [hassas olabilecek değer gösterilmez] | Form | Hayır | — |
| Sözleşme Metni (`termsText`) | RICH_TEXT | Üyelik Sözleşmesi ve KVKK metinlerini okudum, kabul ediyorum. | Form | Hayır | — |
| Sözleşme Linki (`termsHref`) | TEXT | /pages/uyelik-sozlesmesi | Form | Hayır | Üyelik sözleşmesi için yayın routeu: /pages/uyelik-sozlesmesi. |
| Pazarlama İzni Metni (`marketingText`) | RICH_TEXT | Kampanya ve ürün bilgilendirmeleri için iletişim izni veriyorum. | Form | Hayır | — |
| Buton Yazısı (`submitButtonText`) | RICH_TEXT | Kayıt Ol | Form | Hayır | — |
| Giriş Yönlendirme Metni (`loginPromptText`) | RICH_TEXT | Zaten hesabınız var mı? | Form | Hayır | — |
| Giriş Bağlantı Yazısı (`loginButtonText`) | RICH_TEXT | Giriş Yap | Form | Hayır | — |
| Giriş Linki (`loginButtonHref`) | TEXT | /account/login | Form | Hayır | — |
| Hesap Linkleri Başlığı (`accountLinksTitle`) | RICH_TEXT | Hesabım | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 1 Yazısı (`accountLink1Text`) | RICH_TEXT | Giriş Yap | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 1 Adresi (`accountLink1Href`) | TEXT | /account/login | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 2 Yazısı (`accountLink2Text`) | RICH_TEXT | Siparişlerim | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 2 Adresi (`accountLink2Href`) | TEXT | /account/orders | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 3 Yazısı (`accountLink3Text`) | RICH_TEXT | Kayıt Ol | Hesap Linkleri | Hayır | — |
| Hesap Bağlantısı 3 Adresi (`accountLink3Href`) | TEXT | /account/register | Hesap Linkleri | Hayır | — |
| Destek Başlığı (`supportTitle`) | RICH_TEXT | 3mash hesabınız hazır olsun | Destek | Hayır | — |
| Destek Açıklaması (`supportDescription`) | RICH_TEXT | Kayıt sonrasında siparişlerinizi, adreslerinizi ve destek taleplerinizi hesabınızdan yönetebilirsiniz. | Destek | Hayır | — |
| Destek Email Yazısı (`supportEmailText`) | RICH_TEXT | info@[3Mash alan adı çıkarıldı] | Destek | Hayır | — |
| Destek Email Linki (`supportEmailHref`) | TEXT | mailto:info@[3Mash alan adı çıkarıldı] | Destek | Hayır | — |
| Adres Yazısı (`supportAddressText`) | RICH_TEXT | Pınarbaşı Mah. Hürriyet Cad. Akdeniz Üniversitesi Uluğbey Ar-Ge 2 No: 3 A İç Kapı No: B94 Konyaaltı, Antalya | Destek | Hayır | — |
| Destek Panelini Göster (`showSupportPanel`) | BOOLEAN | true | Destek | Hayır | — |
| Arka Plan (`backgroundColor`) | COLOR | #ffffff | Görünüm | Hayır | — |
| Panel Arka Planı (`panelColor`) | COLOR | #ffffff | Görünüm | Hayır | — |
| Ana Yazı Rengi (`textColor`) | COLOR | #111111 | Görünüm | Hayır | — |
| Açıklama Yazı Rengi (`mutedTextColor`) | COLOR | #6d6d68 | Görünüm | Hayır | — |
| Çizgi Rengi (`lineColor`) | COLOR | #e7e7df | Görünüm | Hayır | — |
| Vurgu Rengi (`accentColor`) | COLOR | #dbfa37 | Görünüm | Hayır | — |
| Buton Yazı Rengi (`buttonTextColor`) | COLOR | #111111 | Görünüm | Hayır | — |
| Maksimum Genişlik (`maxWidth`) | NUMBER | 1180 | Yerleşim | Hayır | — |
| Üst Boşluk (`sectionPaddingTop`) | NUMBER | 72 | Yerleşim | Hayır | — |
| Alt Boşluk (`sectionPaddingBottom`) | NUMBER | 80 | Yerleşim | Hayır | — |
| Kompakt Form (`compactForm`) | BOOLEAN | false | Yerleşim | Hayır | — |
| Kelime Stili Aktif (`wordStyleEnabled`) | BOOLEAN | false | Metin Ayarları / Kelime Stili | Hayır | — |
| Stil Verilecek Kelime (`styledPhrase`) | TEXT | Vurgulanacak ifade | Metin Ayarları / Kelime Stili | Hayır | — |
| Kelime Rengi (`styledPhraseColor`) | COLOR | #dbfa37 | Metin Ayarları / Kelime Stili | Hayır | — |
| Kelime Kalın Olsun (`styledPhraseBold`) | BOOLEAN | false | Metin Ayarları / Kelime Stili | Hayır | — |
| Kelime İtalik Olsun (`styledPhraseItalic`) | BOOLEAN | false | Metin Ayarları / Kelime Stili | Hayır | — |
| Yükleniyor Yazısı (`loadingText`) | RICH_TEXT | Kaydınız oluşturuluyor... | Form | Hayır | — |
| Başarılı Mesajı (`successMessage`) | RICH_TEXT | Kaydınız oluşturuldu. Hesabınıza yönlendiriliyorsunuz. | Form | Hayır | — |
| Hata Mesajı (`errorMessage`) | RICH_TEXT | Kayıt tamamlanamadı. Lütfen bilgilerinizi kontrol edin. | Form | Hayır | — |
| Şifre Uyuşmazlık Mesajı (`passwordMismatchMessage`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | Form | Hayır | — |
| Sağ Görsel (`backgroundImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | Görsel | Hayır | Canlı 3mash login/register ekranındaki sağ görsel. |
| Ticari Elektronik İleti Linki (`marketingHref`) | TEXT | /pages/ticari-elektronik-ileti | Form | Hayır | Ticari elektronik ileti onayı için yayın routeu: /pages/ticari-elektronik-ileti. |
| KVKK Linki (`kvkkHref`) | TEXT | /pages/kvkk | Form | Hayır | KVKK sayfası için yayın routeu: /pages/kvkk. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
