---
title: "Hesabım Sayfası"
description: "3Mash temasında Hesabım Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Hesabım Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 118 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Hesabım Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Üst Etiket (`eyebrowText`) | RICH_TEXT | Hesabım | 📝 Giriş Sayfası İçeriği | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Üye Girişi | 📝 Giriş Sayfası İçeriği | Hayır | — |
| 📝 Açıklama Metni (`subtitleText`) | RICH_TEXT | Siparişlerinizi takip etmek, adreslerinizi yönetmek ve 3mash hesabınıza hızlıca erişmek için giriş yapın. | 📝 Giriş Sayfası İçeriği | Hayır | — |
| 📝 Giriş Sekmesi Metni (`loginTabText`) | RICH_TEXT | Üye Girişi | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Kayıt Sekmesi Metni (`registerTabText`) | RICH_TEXT | Üye Ol | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🔗 Kayıt Sayfası Yolu (`registerTabHref`) | TEXT | /account/register | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 📝 E-posta Alanı Etiketi (`emailLabel`) | RICH_TEXT | Email | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Şifre Alanı Etiketi (`passwordLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Giriş Butonu Metni (`submitButtonText`) | RICH_TEXT | Üye Girişi | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Şifre Unutma Bağlantı Metni (`forgotPasswordText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🔗 Şifre Sıfırlama Sayfası (`forgotPasswordHref`) | TEXT | [hassas olabilecek değer gösterilmez] | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 📝 Kayıt Yönlendirme Metni (`registerPromptText`) | RICH_TEXT | Hesabınız yok mu? | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Kayıt Butonu Metni (`registerButtonText`) | RICH_TEXT | Kayıt Ol | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🎨 Sayfa Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Form Paneli Rengi (`panelColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #111111 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #6d6d68 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #e7e7df | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #dbfa37 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Metin Rengi (`buttonTextColor`) | COLOR | #111111 | 🎨 Görünüm ve Renkler | Hayır | — |
| 📝 Giriş Bekleme Metni (`loadingText`) | RICH_TEXT | Giriş yapılıyor... | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Giriş Başarı Mesajı (`successMessage`) | RICH_TEXT | Giriş başarılı. Hesabınıza yönlendiriliyorsunuz. | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 📝 Giriş Hata Mesajı (`errorMessage`) | RICH_TEXT | Email veya şifre hatalı. Lütfen bilgilerinizi kontrol edin. | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🖼️ Giriş Paneli Arka Plan Görseli (`backgroundImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Giriş Sayfası İçeriği | Hayır | Canlı 3mash login/register ekranındaki sağ görsel. |
| 📝 Şifre Kurtarma Bağlantı Metni (`recoverPasswordText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🔗 Şifre Kurtarma Sayfası (`recoverPasswordHref`) | TEXT | [hassas olabilecek değer gösterilmez] | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 📝 Marka Yazısı (`brandText`) | TEXT | 3MASH | 📝 Giriş Sayfası İçeriği | Hayır | — |
| 🌐 İngilizce Üst Etiket (`eyebrowTextEn`) | RICH_TEXT | MY ACCOUNT | 📝 Giriş Sayfası İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Member Login | 📝 Giriş Sayfası İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`subtitleTextEn`) | RICH_TEXT | Log in to quickly track your orders, manage your addresses, and access your 3mash account. | 📝 Giriş Sayfası İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Giriş Sekmesi Metni (`loginTabTextEn`) | RICH_TEXT | Member Login | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Kayıt Sekmesi Metni (`registerTabTextEn`) | RICH_TEXT | Sign Up | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce E-posta Alanı Etiketi (`emailLabelEn`) | RICH_TEXT | E-mail | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Şifre Alanı Etiketi (`passwordLabelEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Giriş Butonu Metni (`submitButtonTextEn`) | RICH_TEXT | Sign In | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Kayıt Gönderme Butonu Metni (`registerSubmitButtonText`) | RICH_TEXT | Hesap Oluştur | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🌐 İngilizce Kayıt Gönderme Butonu Metni (`registerSubmitButtonTextEn`) | RICH_TEXT | Create Account | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Giriş Bekleme Metni (`loadingTextEn`) | RICH_TEXT | Signing in... | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Kayıt Bekleme Metni (`registerLoadingText`) | RICH_TEXT | Kaydınız oluşturuluyor... | 🧾 Giriş ve Kayıt Formu | Hayır | — |
| 🌐 İngilizce Kayıt Bekleme Metni (`registerLoadingTextEn`) | RICH_TEXT | Creating account... | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Giriş Başarı Mesajı (`successMessageEn`) | RICH_TEXT | Login successful. Redirecting to your account. | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Giriş Hata Mesajı (`errorMessageEn`) | RICH_TEXT | Email or password is incorrect. Please check your details. | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Şifre Unutma Bağlantı Metni (`forgotPasswordTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Bağlantı Metni (`recoverPasswordTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Kayıt Yönlendirme Metni (`registerPromptTextEn`) | RICH_TEXT | Do not have an account yet? | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🌐 İngilizce Kayıt Butonu Metni (`registerButtonTextEn`) | RICH_TEXT | Create Account | 🧾 Giriş ve Kayıt Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Ad Alanı Etiketi (`firstNameLabel`) | RICH_TEXT | Ad | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Ad Alanı Etiketi (`firstNameLabelEn`) | RICH_TEXT | First Name | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Soyad Alanı Etiketi (`lastNameLabel`) | RICH_TEXT | Soyad | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Soyad Alanı Etiketi (`lastNameLabelEn`) | RICH_TEXT | Last Name | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Üyelik Sözleşmesi Bağlantı Metni (`termsMembershipText`) | TEXT | Üyelik Sözleşmesi | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Üyelik Sözleşmesi Bağlantı Metni (`termsMembershipTextEn`) | TEXT | Membership Agreement | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Sözleşmeler Arası Bağlaç (`termsAndText`) | TEXT | ve | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Sözleşmeler Arası Bağlaç (`termsAndTextEn`) | TEXT | and | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 KVKK Metni Bağlantı Yazısı (`termsKvkkText`) | TEXT | KVKK Aydınlatma Metni | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce KVKK Metni Bağlantı Yazısı (`termsKvkkTextEn`) | TEXT | KVKK Clarification Notice | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Sözleşme Onay Metni (`termsAcceptedText`) | TEXT | 'ni okudum, kabul ediyorum. | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Sözleşme Onay Metni (`termsAcceptedTextEn`) | TEXT | have been read and accepted. | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Kampanya İzni Açıklaması (`marketingIntroText`) | TEXT | Kampanya, indirim ve duyurulardan haberdar olmak için | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Kampanya İzni Açıklaması (`marketingIntroTextEn`) | TEXT | I have read and approve the | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Ticari İleti Onay Bağlantı Metni (`marketingConsentText`) | TEXT | Ticari Elektronik İleti Onayı | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Ticari İleti Onay Bağlantı Metni (`marketingConsentTextEn`) | TEXT | Commercial Electronic Message Consent | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 📝 Ticari İleti Onay Açıklaması (`marketingAcceptedText`) | TEXT | metnini okudum, onaylıyorum. Tarafıma ticari elektronik ileti gönderilmesini kabul ediyorum. | 🧾 Üyelik ve İzin Metinleri | Hayır | — |
| 🌐 İngilizce Ticari İleti Onay Açıklaması (`marketingAcceptedTextEn`) | TEXT | notice and consent to receive commercial electronic messages. | 🧾 Üyelik ve İzin Metinleri / 🌐 İngilizce Üyelik ve İzin Metinleri | Hayır | — |
| 🔗 Giriş Sayfası Yolu (`loginHref`) | TEXT | /account/login | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 🔗 Giriş Sonrası Hesap Sayfası Yolu (`accountHref`) | TEXT | /account | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 🔗 Üyelik Sözleşmesi Bağlantısı (`membershipAgreementHref`) | TEXT | /pages/uyelik-sozlesmesi | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 🔗 KVKK Aydınlatma Metni Bağlantısı (`kvkkNoticeHref`) | TEXT | /pages/gizlilik-politikasi-ve-kvkk | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 🔗 Ticari İleti Onay Bağlantısı (`commercialConsentHref`) | TEXT | /pages/ticari-elektronik-ileti-onayi | 🔗 Form ve Sözleşme Bağlantıları | Hayır | — |
| 📝 Şifre Sıfırlama Üst Etiketi (`forgotPasswordEyebrowText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Üst Etiketi (`forgotPasswordEyebrowTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Başlığı (`forgotPasswordTitleText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Başlığı (`forgotPasswordTitleTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Açıklaması (`forgotPasswordDescriptionText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Açıklaması (`forgotPasswordDescriptionTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama E-posta Etiketi (`forgotPasswordEmailLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama E-posta Etiketi (`forgotPasswordEmailLabelEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Buton Metni (`forgotPasswordSubmitText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Buton Metni (`forgotPasswordSubmitTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Bekleme Metni (`forgotPasswordSubmittingText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Bekleme Metni (`forgotPasswordSubmittingTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Başarı Mesajı (`forgotPasswordSuccessText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Başarı Mesajı (`forgotPasswordSuccessTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Sıfırlama Hata Mesajı (`forgotPasswordErrorText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Şifre Sıfırlama Hata Mesajı (`forgotPasswordErrorTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Giriş Bağlantısı Öncesi Metin (`forgotPasswordLoginPromptText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Giriş Bağlantısı Öncesi Metin (`forgotPasswordLoginPromptTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Giriş Bağlantı Metni (`forgotPasswordLoginLinkText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama | Hayır | — |
| 🌐 İngilizce Giriş Bağlantı Metni (`forgotPasswordLoginLinkTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔒 Şifre Sıfırlama / 🌐 İngilizce Şifre Sıfırlama | Hayır | — |
| 📝 Şifre Kurtarma Üst Etiketi (`recoverPasswordEyebrowText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Üst Etiketi (`recoverPasswordEyebrowTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Kurtarma Başlığı (`recoverPasswordTitleText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Başlığı (`recoverPasswordTitleTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Kurtarma Açıklaması (`recoverPasswordDescriptionText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Açıklaması (`recoverPasswordDescriptionTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Yeni Şifre Alanı Etiketi (`recoverPasswordLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Yeni Şifre Alanı Etiketi (`recoverPasswordLabelEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Tekrar Alanı Etiketi (`recoverPasswordConfirmLabel`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Tekrar Alanı Etiketi (`recoverPasswordConfirmLabelEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Güncelleme Buton Metni (`recoverPasswordSubmitText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Güncelleme Buton Metni (`recoverPasswordSubmitTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Güncelleme Bekleme Metni (`recoverPasswordSubmittingText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Güncelleme Bekleme Metni (`recoverPasswordSubmittingTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Kurtarma Başarı Mesajı (`recoverPasswordSuccessText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Başarı Mesajı (`recoverPasswordSuccessTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Kurtarma Hata Mesajı (`recoverPasswordErrorText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Kurtarma Hata Mesajı (`recoverPasswordErrorTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Şifre Eşleşmeme Mesajı (`recoverPasswordMismatchText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Şifre Eşleşmeme Mesajı (`recoverPasswordMismatchTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Giriş Bağlantısı Öncesi Metin (`recoverPasswordLoginPromptText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Giriş Bağlantısı Öncesi Metin (`recoverPasswordLoginPromptTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 📝 Giriş Bağlantı Metni (`recoverPasswordLoginLinkText`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma | Hayır | — |
| 🌐 İngilizce Giriş Bağlantı Metni (`recoverPasswordLoginLinkTextEn`) | RICH_TEXT | [hassas olabilecek değer gösterilmez] | 🔑 Şifre Kurtarma / 🌐 İngilizce Şifre Kurtarma | Hayır | — |
| 👁️ Şifre Unutma Bağlantısını Göster (`showForgotPasswordLink`) | BOOLEAN | [hassas olabilecek değer gösterilmez] | 👁️ Görünürlük | Hayır | — |
| 👁️ Şifre Kurtarma Bağlantısını Göster (`showRecoverPasswordLink`) | BOOLEAN | [hassas olabilecek değer gösterilmez] | 👁️ Görünürlük | Hayır | — |
| 👁️ Şifre Sıfırlamada Giriş Bağlantısını Göster (`showForgotPasswordLoginLink`) | BOOLEAN | [hassas olabilecek değer gösterilmez] | 👁️ Görünürlük | Hayır | — |
| 👁️ Kurtarma Sayfasında Giriş Bağlantısını Göster (`showRecoverPasswordLoginLink`) | BOOLEAN | [hassas olabilecek değer gösterilmez] | 👁️ Görünürlük | Hayır | — |
| 👁️ Kampanya İzni Kutusunu Göster (`showMarketingConsent`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
