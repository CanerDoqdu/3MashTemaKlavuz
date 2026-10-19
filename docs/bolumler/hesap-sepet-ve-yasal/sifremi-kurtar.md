---
title: "Şifremi Kurtar"
description: "3Mash temasında Şifremi Kurtar adıyla kayıtlı bölümün yapılandırma alanları."
---

# Şifremi Kurtar

## Bu bölümde

- Yapılandırmada kayıtlı 23 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Şifremi Kurtar** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

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
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
