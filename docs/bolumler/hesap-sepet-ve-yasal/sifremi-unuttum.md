---
title: "Şifremi Unuttum"
description: "3Mash temasında Şifremi Unuttum adıyla kayıtlı bölümün yapılandırma alanları."
---

# Şifremi Unuttum

## Bu bölümde

- Yapılandırmada kayıtlı 22 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Şifremi Unuttum** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| ⚙️ Akış Modu (`mode`) | TEXT | forgot-password | 📝 Şifre Sıfırlama İçeriği | Evet | Bu kayıt şifre sıfırlama akışında kalmalıdır; değer forgot-password olmalıdır. |
| 🔗 Giriş Sayfası Bağlantısı (`loginHref`) | TEXT | /account/login | 🔗 Giriş Bağlantısı | Hayır | — |
| 🎨 Sayfa Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 📝 Hesap Rozeti (`forgotPasswordEyebrowText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 📝 Başlık Metni (`forgotPasswordTitleText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 📝 Açıklama Metni (`forgotPasswordDescriptionText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 📝 E-posta Alanı Etiketi (`forgotPasswordEmailLabel`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 📝 Gönder Düğmesi Metni (`forgotPasswordSubmitText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| ⏳ Gönderim Metni (`forgotPasswordSubmittingText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| ✅ Başarı Mesajı (`forgotPasswordSuccessText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| ⚠️ Hata Mesajı (`forgotPasswordErrorText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 🔗 Giriş Bağlantısı Metni (`forgotPasswordLoginLinkText`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği | Hayır | — |
| 🌐 İngilizce Hesap Rozeti (`forgotPasswordEyebrowTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Metni (`forgotPasswordTitleTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`forgotPasswordDescriptionTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce E-posta Alanı Etiketi (`forgotPasswordEmailLabelEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Gönder Düğmesi Metni (`forgotPasswordSubmitTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Gönderim Metni (`forgotPasswordSubmittingTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başarı Mesajı (`forgotPasswordSuccessTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hata Mesajı (`forgotPasswordErrorTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Giriş Bağlantısı Metni (`forgotPasswordLoginLinkTextEn`) | TEXT | [hassas olabilecek değer gösterilmez] | 📝 Şifre Sıfırlama İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Giriş Bağlantısını Göster (`showForgotPasswordLoginLink`) | BOOLEAN | [hassas olabilecek değer gösterilmez] | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
