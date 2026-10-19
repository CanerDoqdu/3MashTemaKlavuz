---
title: "Dinamik Ürün Bilgileri"
description: "3Mash temasında Dinamik Ürün Bilgileri adıyla kayıtlı bölümün yapılandırma alanları."
---

# Dinamik Ürün Bilgileri

## Bu bölümde

- Yapılandırmada kayıtlı 54 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Dinamik Ürün Bilgileri** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 01. Ürün Veri Kaynağı | Hayır | Geçerli ikas ürün verisi bağlantısı |
| Duyuru Vurgulu Metin (`announcementStrongText`) | TEXT | Fırsatı kaçırmayın. | 02. Üst Duyuru Bandı | Hayır | Üst bant sol kalın vurgulu metin (Örn: Fırsatı kaçırmayın.) |
| Duyuru Açıklaması (`announcementText`) | TEXT | CE Class IIa CRS Composite'i cihazınızın parametreleriyle birlikte kalibre ederek, ücretsiz kurulum desteğiyle teslim ediyoruz. | 02. Üst Duyuru Bandı | Hayır | Üst bant kampanya ve kalibrasyon açıklama metni |
| Duyuru Buton Metni (`announcementButtonText`) | TEXT | Ücretsiz parametre uyumlaması → | 02. Üst Duyuru Bandı | Hayır | Üst bant sağ buton metni (Örn: Ücretsiz parametre uyumlaması →) |
| Duyuru Buton Linki (`announcementButtonHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 02. Üst Duyuru Bandı | Hayır | Duyuru butonu hedef bağlantısı |
| Kategori Adı Metni (`breadcrumbCategoryText`) | TEXT | Dental Reçineler | 03. Gezinme (Breadcrumb) | Hayır | Breadcrumb kategori adı (Örn: Dental Reçineler) |
| Kategori Sayfası Linki (`breadcrumbCategoryHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 03. Gezinme (Breadcrumb) | Hayır | Breadcrumb kategori bağlantısı |
| Üst Etiket / Kicker (`heroKicker`) | TEXT | CRS Composite · Biyouyumlu Kron-Köprü Reçinesi | 04. Başlık ve Açıklama | Hayır | Başlığın hemen üstündeki kategori ve ürün üst etiketi |
| Ana Başlık (HTML Destekli) (`heroTitleHtml`) | RICH_TEXT | Daimi kron artık baskıdan çıkıyor. | 04. Başlık ve Açıklama | Hayır | Ürün ana başlığı (vurgu için &lt;em&gt; veya &lt;b&gt; kullanabilirsiniz) |
| Detaylı Açıklama (HTML Destekli) (`heroDescriptionHtml`) | RICH_TEXT | Geçici ve daimi kuron-köprülerin katmanlı üretimi için biyouyumlu reçine. Sektörde önde gelen rakiplerine kıyasla daha yüksek bükülme mukavemeti ve hassas marjinal uyum sağlar; yarı saydamlık-opaklık arasında dengeli translüsentliğe sahiptir. Ağız koşullarına dayanıklıdır, tat ve koku yapmaz. | 04. Başlık ve Açıklama | Hayır | Başlığın altındaki zengin ürün tanıtım açıklaması |
| 1. Rozet Değeri (Örn: 144 MPa) (`heroPill1Value`) | TEXT | 144 MPa | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 1. teknik özellik rozetinin kalın değeri |
| 1. Rozet Etiketi (Örn: eğilme mukavemeti) (`heroPill1Label`) | TEXT | eğilme mukavemeti | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 1. teknik özellik rozetinin açıklama etiketi |
| 2. Rozet Değeri (Örn: 5000 MPa) (`heroPill2Value`) | TEXT | 5000 MPa | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 2. teknik özellik rozetinin kalın değeri |
| 2. Rozet Etiketi (Örn: eğilme modülü) (`heroPill2Label`) | TEXT | eğilme modülü | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 2. teknik özellik rozetinin açıklama etiketi |
| 3. Rozet Değeri (Örn: CE) (`heroPill3Value`) | TEXT | CE | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 3. teknik özellik rozetinin kalın değeri |
| 3. Rozet Etiketi (Örn: Class IIa) (`heroPill3Label`) | TEXT | Class IIa | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 3. teknik özellik rozetinin açıklama etiketi |
| 4. Rozet Değeri (`heroPill4Value`) | TEXT | Sararma yapmaz | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 4. teknik özellik rozetinin kalın değeri |
| 4. Rozet Etiketi (Örn: Sararma yapmaz) (`heroPill4Label`) | TEXT | Sararma yapmaz | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | 4. teknik özellik rozetinin açıklama etiketi |
| Görsel Rozeti (Örn: CE CLASS IIa) (`galleryBadge`) | TEXT | CE CLASS IIa | 05. Öne Çıkan Özellik Rozetleri (Haplar) | Hayır | Ürün görselinin üzerinde yer alan sertifika rozeti |
| Seçim Başlığı (Örn: Seçiminiz:) (`selectedPrefix`) | TEXT | Seçiminiz: | 06. Seçim ve Özet Metinleri | Hayır | Varyant seçim özetinin sol başlığı |
| Seçim Alt Notu (`summarySuffix`) | TEXT | — parametre uyarlaması ve teknik destek dahil. | 06. Seçim ve Özet Metinleri | Hayır | Varyant seçim özetinin sağındaki teknik destek notu |
| Sepete Ekle Buton Metni (`addToCartText`) | TEXT | SEPETE EKLE | 07. Butonlar ve İletişim (CTA) | Hayır | — |
| Sepete Eklenirken Metin (`addingToCartText`) | TEXT | Ekleniyor... | 07. Butonlar ve İletişim (CTA) | Hayır | — |
| Stok Yok Buton Metni (`outOfStockText`) | TEXT | Stok Yok | 07. Butonlar ve İletişim (CTA) | Hayır | — |
| WhatsApp Danışma Buton Metni (`whatsappButtonText`) | TEXT | WhatsApp'tan sor | 07. Butonlar ve İletişim (CTA) | Hayır | — |
| WhatsApp Linki / Özel URL (`whatsappButtonHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 07. Butonlar ve İletişim (CTA) | Hayır | Boş bırakılırsa ürün adına özel otomatik WhatsApp mesajı oluşturulur |
| Güven Rozeti 1 (`trustBadge1`) | TEXT | Ücretsiz kargo | 08. Güven Rozetleri ve Avantajlar | Hayır | — |
| Güven Rozeti 2 (`trustBadge2`) | TEXT | Koşulsuz iade | 08. Güven Rozetleri ve Avantajlar | Hayır | — |
| Güven Rozeti 3 (`trustBadge3`) | TEXT | Güvenli ödeme | 08. Güven Rozetleri ve Avantajlar | Hayır | — |
| Stokta Metni (`inStockText`) | TEXT | Stokta | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| Adet Metni (`quantityText`) | TEXT | Adet | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| SKU Etiketi (`skuText`) | TEXT | SKU | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| Marka Etiketi (`brandText`) | TEXT | Marka | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| Kategori Etiketi (`categoryText`) | TEXT | Kategori | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| Açıklama Başlığı (`descriptionTitle`) | TEXT | Ürün Açıklaması | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| Boş Ürün Mesajı (`setupMessage`) | TEXT | Bu bölüm Ürün Sayfası için tasarlandı. Ürün alanını ikas ürün verisine bağlayın. | 10. Uyarı ve Bildirim Mesajları | Hayır | — |
| Seçenek Zorunlu Uyarı Mesajı (`optionRequiredMessage`) | TEXT | Lütfen gerekli ürün seçeneklerini tamamlayın. | 10. Uyarı ve Bildirim Mesajları | Hayır | — |
| Sepete Ekleme Hata Mesajı (`addToCartErrorMessage`) | TEXT | Ürün sepete eklenemedi. | 10. Uyarı ve Bildirim Mesajları | Hayır | — |
| Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 11. Görünüm ve Renkler | Hayır | — |
| Yazı Rengi (`textColor`) | COLOR | #0E0E0C | 11. Görünüm ve Renkler | Hayır | — |
| İkincil / Soluk Yazı Rengi (`mutedTextColor`) | COLOR | #55554e | 11. Görünüm ve Renkler | Hayır | — |
| Panel Rengi (`panelColor`) | COLOR | #F1F1EC | 11. Görünüm ve Renkler | Hayır | — |
| Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 11. Görünüm ve Renkler | Hayır | — |
| Vurgu Rengi (Lime) (`accentColor`) | COLOR | #C7F136 | 11. Görünüm ve Renkler | Hayır | — |
| Studio Önizleme Göster (`showTemplatePreview`) | BOOLEAN | true | 12. Gelişmiş Şablon ve JSON | Hayır | — |
| Gelişmiş Ürün Datası JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 12. Gelişmiş Şablon ve JSON | Hayır | CRS Composite kaynak yapısındaki reusable template datası. Boş bırakılırsa ürünün varsayılan şablon datası kullanılır. |
| 👁️ Fotoğraf Şeridini Göster (`showPhotos`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kullanım Kartı 1 Göster (`showUseCard1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kullanım Kartı 2 Göster (`showUseCard2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Cihaz Uyumluluğunu Göster (`showDevices`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Tarama Ekosistemini Göster (`showEcosystem`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Stokta Metni (`inStockTextEn`) | TEXT | In stock | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| 🌐 İngilizce SKU Etiketi (`skuTextEn`) | TEXT | SKU | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |
| 🌐 İngilizce Marka Etiketi (`brandTextEn`) | TEXT | Brand | 09. E-Ticaret ve Stok Etiketleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
