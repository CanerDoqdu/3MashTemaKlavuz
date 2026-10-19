---
title: "Hesap Adreslerim"
description: "3Mash temasında Hesap Adreslerim adıyla kayıtlı bölümün yapılandırma alanları."
---

# Hesap Adreslerim

## Bu bölümde

- Yapılandırmada kayıtlı 87 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Hesap Adreslerim** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| ⚙️ Görüntülenecek Hesap Bölümü (`mode`) | TEXT | addresses | 📝 Dashboard İçeriği | Evet | — |
| 📝 Sayfa Başlığı (`titleText`) | TEXT | Adreslerim | 📝 Dashboard İçeriği | Hayır | — |
| 🔗 Giriş Sayfası Bağlantısı (`loginHref`) | TEXT | /account/login | 🔗 Dashboard Bağlantıları | Hayır | — |
| 🔗 Siparişler Sayfası Bağlantısı (`ordersHref`) | TEXT | /account/orders | 🔗 Dashboard Bağlantıları | Hayır | — |
| 🔗 Favoriler Sayfası Bağlantısı (`favoritesHref`) | TEXT | /account/favorite-products | 🔗 Dashboard Bağlantıları | Hayır | — |
| 🔗 Adresler Sayfası Bağlantısı (`addressesHref`) | TEXT | /account/addresses | 🔗 Dashboard Bağlantıları | Hayır | — |
| 🔗 Hesabım Sayfası Bağlantısı (`accountHref`) | TEXT | /account | 🔗 Dashboard Bağlantıları | Hayır | — |
| 📝 Boş Durum Metni (`emptyText`) | TEXT | Kayıtlı adresiniz bulunmuyor. | 📝 Dashboard İçeriği | Hayır | — |
| 🎨 Sayfa Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 📝 Hesap Üst Etiketi (`accountLabel`) | TEXT | HESABIM | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Hesap Üst Etiketi (`accountLabelEn`) | TEXT | MY ACCOUNT | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Hesap Menüsü Başlığı (`accountGroupTitle`) | TEXT | Hesap Yönetimi | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Hesap Menüsü Başlığı (`accountGroupTitleEn`) | TEXT | Account Management | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Sipariş Grubu Başlığı (`orderGroupTitle`) | TEXT | Sipariş Bilgilerim | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Sipariş Grubu Başlığı (`orderGroupTitleEn`) | TEXT | Order Information | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Kişisel Bilgiler Başlığı (`profileTitle`) | TEXT | Kişisel Bilgilerim | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Kişisel Bilgiler Başlığı (`profileTitleEn`) | TEXT | My Personal Information | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Adresler Başlığı (`addressesTitle`) | TEXT | Adreslerim | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Adresler Başlığı (`addressesTitleEn`) | TEXT | My Addresses | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Favoriler Başlığı (`favoritesTitle`) | TEXT | Beğendiğim Ürünler | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Favoriler Başlığı (`favoritesTitleEn`) | TEXT | My Favorites | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Siparişler Başlığı (`ordersTitle`) | TEXT | Siparişlerim | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Siparişler Başlığı (`ordersTitleEn`) | TEXT | My Orders | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Çıkış Butonu Metni (`logoutText`) | TEXT | Çıkış yap | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Çıkış Butonu Metni (`logoutTextEn`) | TEXT | Sign out | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Özel Bağlantı 1 Metni (`accountLinkSlot1Text`) | TEXT | Özel Hesap Bağlantısı 1 | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Özel Bağlantı 1 Metni (`accountLinkSlot1TextEn`) | TEXT | Custom Account Link 1 | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Özel Bağlantı 2 Metni (`accountLinkSlot2Text`) | TEXT | Özel Hesap Bağlantısı 2 | 📝 Dashboard İçeriği / 📌 Menü Metinleri | Hayır | — |
| 🌐 İngilizce Özel Bağlantı 2 Metni (`accountLinkSlot2TextEn`) | TEXT | Custom Account Link 2 | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Profil Açıklaması (`profileDescription`) | TEXT | Hesap bilgileriniz, sipariş ve destek süreçlerinde kullanılan müşteri kaydınızla eşleşir. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Profil Açıklaması (`profileDescriptionEn`) | TEXT | Your account information matches your customer record used in order and support processes. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Adresler Açıklaması (`addressesDescription`) | TEXT | Teslimat ve fatura adreslerinizi hesabınıza bağlı olarak görüntüleyin. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Adresler Açıklaması (`addressesDescriptionEn`) | TEXT | View your shipping and billing addresses associated with your account. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Favoriler Açıklaması (`favoritesDescription`) | TEXT | Beğendiğiniz ürünleri hızlıca takip edin ve ürün sayfalarına geri dönün. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Favoriler Açıklaması (`favoritesDescriptionEn`) | TEXT | Quickly track the products you like and navigate back to their pages. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Siparişler Açıklaması (`ordersDescription`) | TEXT | Sipariş geçmişinizi, tarih ve toplam bilgileriyle birlikte kontrol edin. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Siparişler Açıklaması (`ordersDescriptionEn`) | TEXT | Check your order history, including date and total details. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Varsayılan Adres Başlığı (`defaultAddressLabel`) | TEXT | Varsayılan Adres | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Varsayılan Adres Başlığı (`defaultAddressLabelEn`) | TEXT | Default Address | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| ♿ Ülke Kodu Alanı Etiketi (`phoneCountryLabel`) | TEXT | Telefon ülke kodu | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Ülke Kodu Alanı Etiketi (`phoneCountryLabelEn`) | TEXT | Phone country code | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Adresler Boş Durum Metni (`addressesEmptyText`) | TEXT | Kayıtlı adresiniz bulunmuyor. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Adresler Boş Durum Metni (`addressesEmptyTextEn`) | TEXT | No registered addresses found. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Siparişler Boş Durum Metni (`ordersEmptyText`) | TEXT | Henüz siparişiniz bulunmuyor. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Siparişler Boş Durum Metni (`ordersEmptyTextEn`) | TEXT | You haven't placed any orders yet. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Favoriler Boş Durum Metni (`favoritesEmptyText`) | TEXT | Beğendiğiniz ürün bulunmuyor. | 📝 Dashboard İçeriği | Hayır | — |
| 🌐 İngilizce Favoriler Boş Durum Metni (`favoritesEmptyTextEn`) | TEXT | You have no favorite products. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Ad Alanı Etiketi (`firstNameLabel`) | TEXT | Ad | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Ad Alanı Etiketi (`firstNameLabelEn`) | TEXT | First Name | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Soyad Alanı Etiketi (`lastNameLabel`) | TEXT | Soyad | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Soyad Alanı Etiketi (`lastNameLabelEn`) | TEXT | Last Name | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Telefon Alanı Etiketi (`phoneLabel`) | TEXT | Telefon | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Telefon Alanı Etiketi (`phoneLabelEn`) | TEXT | Phone | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 E-posta Alanı Etiketi (`emailLabel`) | TEXT | Email | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce E-posta Alanı Etiketi (`emailLabelEn`) | TEXT | Email | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Kaydet Butonu Metni (`saveButtonText`) | TEXT | Kaydet | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Kaydet Butonu Metni (`saveButtonTextEn`) | TEXT | Save | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Kaydetme Durumu Metni (`savingText`) | TEXT | Kaydediliyor... | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Kaydetme Durumu Metni (`savingTextEn`) | TEXT | Saving... | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Başarı Mesajı (`successMessage`) | TEXT | Bilgileriniz güncellendi. | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Başarı Mesajı (`successMessageEn`) | TEXT | Your information has been updated. | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 📝 Hata Mesajı (`errorMessage`) | TEXT | Bilgiler kaydedilemedi. Lütfen tekrar deneyin. | 🧮 Profil Formu | Hayır | — |
| 🌐 İngilizce Hata Mesajı (`errorMessageEn`) | TEXT | Failed to save information. Please try again. | 🧮 Profil Formu / 🌐 İngilizce Form Metinleri | Hayır | — |
| 🔗 Özel Bağlantı 1 Adresi (`accountLinkSlot1Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Dashboard Bağlantıları | Hayır | Güvenli HTTPS veya mağaza içi bağlantı kullanın. |
| 🔗 Özel Bağlantı 2 Adresi (`accountLinkSlot2Href`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Dashboard Bağlantıları | Hayır | Güvenli HTTPS veya mağaza içi bağlantı kullanın. |
| 👁️ Çıkış Butonunu Göster (`showLogoutButton`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 👁️ Kişisel Bilgiler Bağlantısını Göster (`showProfileLink`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 👁️ Adresler Bağlantısını Göster (`showAddressesLink`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 👁️ Favoriler Bağlantısını Göster (`showFavoritesLink`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 👁️ Siparişler Bağlantısını Göster (`showOrdersLink`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar | Hayır | — |
| ➕ Özel Hesap Bağlantısı 1 Gösterilsin (`showAccountLinkSlot1`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar | Hayır | — |
| ➕ Özel Hesap Bağlantısı 2 Gösterilsin (`showAccountLinkSlot2`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`titleTextEn`) | TEXT | My Addresses | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açılış Sayfası Boş Durum Metni (`emptyTextEn`) | TEXT | No registered addresses found. | 📝 Dashboard İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🔢 Kişisel Bilgiler Bölüm Numarası (`profileStepText`) | TEXT | 01 | 📝 Dashboard İçeriği | Hayır | — |
| 🔢 Adresler Bölüm Numarası (`addressesStepText`) | TEXT | 01 | 📝 Dashboard İçeriği | Hayır | — |
| 🔢 Siparişler Bölüm Numarası (`ordersStepText`) | TEXT | 02 | 📝 Dashboard İçeriği | Hayır | — |
| 🔢 Favoriler Bölüm Numarası (`favoritesStepText`) | TEXT | 03 | 📝 Dashboard İçeriği | Hayır | — |
| 🎨 Kenar Çubuğu Rengi (`sidebarColor`) | COLOR | #f7f7f5 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #050505 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #9698a3 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #e6e6e1 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #dbfa37 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Metin Rengi (`buttonTextColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 📐 İçerik Maksimum Genişliği (`maxWidth`) | NUMBER | 1180 | 📐 Sayfa Düzeni / 💻 Bilgisayar | Hayır | — |
| 📐 Üst Bölüm Boşluğu (`sectionPaddingTop`) | NUMBER | 52 | 📐 Sayfa Düzeni / 💻 Bilgisayar | Hayır | — |
| 📐 Alt Bölüm Boşluğu (`sectionPaddingBottom`) | NUMBER | 86 | 📐 Sayfa Düzeni / 💻 Bilgisayar | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
