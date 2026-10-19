---
title: "Şifremi Kurtar"
description: "3Mash temasında Şifremi Kurtar adıyla kayıtlı bölümün yapılandırma alanları."
---

# Şifremi Kurtar

## Bu bölümde

- Yapılandırmada kayıtlı 23 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Şifremi Kurtar** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| ⚙️ Akış Modu (`mode`) | TEXT | recover-password | 📝 Yeni Şifre İçeriği | Evet | Bu kayıt parola yenileme akışında kalmalıdır; değer recover-password olmalıdır. |
| 🔗 Giriş Sayfası Bağlantısı (`loginHref`) | TEXT | /account/login | 🔗 Giriş Sayfası Bağlantısı | Hayır | Parola yenilendikten sonra kullanılacak giriş sayfası bağlantısı. |
| 🎨 Sayfa Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 📝 Hesap Rozeti (`recoverPasswordEyebrowText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 📝 Başlık Metni (`recoverPasswordTitleText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 📝 Açıklama Metni (`recoverPasswordDescriptionText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 📝 Yeni Şifre Alanı Etiketi (`recoverPasswordLabel`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 📝 Şifre Tekrar Alanı Etiketi (`recoverPasswordConfirmLabel`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 📝 Güncelle Düğmesi Metni (`recoverPasswordSubmitText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| ⏳ Güncelleme Metni (`recoverPasswordSubmittingText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| ✅ Başarı Mesajı (`recoverPasswordSuccessText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| ⚠️ Hata Mesajı (`recoverPasswordErrorText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| ⚠️ Şifre Uyuşmazlığı Mesajı (`recoverPasswordMismatchText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği | Hayır | — |
| 🌐 İngilizce Hesap Rozeti (`recoverPasswordEyebrowTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Metni (`recoverPasswordTitleTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`recoverPasswordDescriptionTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yeni Şifre Alanı Etiketi (`recoverPasswordLabelEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Şifre Tekrar Alanı Etiketi (`recoverPasswordConfirmLabelEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Güncelle Düğmesi Metni (`recoverPasswordSubmitTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Güncelleme Metni (`recoverPasswordSubmittingTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başarı Mesajı (`recoverPasswordSuccessTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hata Mesajı (`recoverPasswordErrorTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Şifre Uyuşmazlığı Mesajı (`recoverPasswordMismatchTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Yeni Şifre İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
