---
title: "Ürün Detay ve Satın Alma Alanı"
description: "3Mash temasında Ürün Detay ve Satın Alma Alanı adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Detay ve Satın Alma Alanı

## Bu bölümde

- Yapılandırmada kayıtlı 133 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Detay ve Satın Alma Alanı** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🛍️ Ürün Bağlantısı (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi / 🛍️ Ürün Kaynağı | Hayır | Geçerli ikas ürün verisi bağlantısı |
| 📝 Vurgulu Metin (`announcementStrongText`) | TEXT | Fırsatı kaçırmayın. | 📝 Ürün İçeriği / 📢 Duyuru | Hayır | Üst bant sol kalın vurgulu metin (Örn: Fırsatı kaçırmayın.) |
| 📝 Duyuru Açıklaması (`announcementText`) | TEXT | CE Class IIa CRS Composite'i cihazınızın parametreleriyle birlikte kalibre ederek, ücretsiz kurulum desteğiyle teslim ediyoruz. | 📝 Ürün İçeriği / 📢 Duyuru | Hayır | Üst bant kampanya ve kalibrasyon açıklama metni |
| 📝 Duyuru Buton Metni (`announcementButtonText`) | TEXT | Ücretsiz parametre uyumlaması → | 🔗 Butonlar ve Linkler / 📢 Duyuru Bağlantısı | Hayır | Üst bant sağ buton metni (Örn: Ücretsiz parametre uyumlaması →) |
| 🔗 Duyuru Buton Linki (`announcementButtonHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler / 📢 Duyuru Bağlantısı | Hayır | Duyuru butonu hedef bağlantısı |
| 📝 Kategori Adı (`breadcrumbCategoryText`) | TEXT | Dental Reçineler | 📝 Ürün İçeriği / 🧭 Ürün Yolu | Hayır | Breadcrumb kategori adı (Örn: Dental Reçineler) |
| 🔗 Kategori Sayfası Linki (`breadcrumbCategoryHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🧭 Ürün Yolu | Hayır | Breadcrumb kategori bağlantısı |
| 📝 Ürün Üst Etiketi (`heroKicker`) | TEXT | CRS Composite · Biyouyumlu Kron-Köprü Reçinesi | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | Başlığın hemen üstündeki kategori ve ürün üst etiketi |
| 📝 Ürün Başlığı (`heroTitleHtml`) | RICH_TEXT | Daimi kron artık baskıdan çıkıyor. | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | Ürün ana başlığı (vurgu için &lt;em&gt; veya &lt;b&gt; kullanabilirsiniz) |
| 📝 Ürün Açıklaması (`heroDescriptionHtml`) | RICH_TEXT | Geçici ve daimi kuron-köprülerin katmanlı üretimi için biyouyumlu reçine. Sektörde önde gelen rakiplerine kıyasla daha yüksek bükülme mukavemeti ve hassas marjinal uyum sağlar; yarı saydamlık-opaklık arasında dengeli translüsentliğe sahiptir. Ağız koşullarına dayanıklıdır, tat ve koku yapmaz. | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | Başlığın altındaki zengin ürün tanıtım açıklaması |
| 📝 Özellik 1 Değeri (`heroPill1Value`) | TEXT | 144 MPa | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 1. teknik özellik rozetinin kalın değeri |
| 📝 Özellik 1 Etiketi (`heroPill1Label`) | TEXT | eğilme mukavemeti | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 1. teknik özellik rozetinin açıklama etiketi |
| 📝 Özellik 2 Değeri (`heroPill2Value`) | TEXT | 5000 MPa | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 2. teknik özellik rozetinin kalın değeri |
| 📝 Özellik 2 Etiketi (`heroPill2Label`) | TEXT | eğilme modülü | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 2. teknik özellik rozetinin açıklama etiketi |
| 📝 Özellik 3 Değeri (`heroPill3Value`) | TEXT | CE | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 3. teknik özellik rozetinin kalın değeri |
| 📝 Özellik 3 Etiketi (`heroPill3Label`) | TEXT | Class IIa | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 3. teknik özellik rozetinin açıklama etiketi |
| 📝 Özellik 4 Değeri (`heroPill4Value`) | TEXT | Boş metin | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 4. teknik özellik rozetinin kalın değeri |
| 📝 Özellik 4 Etiketi (`heroPill4Label`) | TEXT | Sararma yapmaz | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | 4. teknik özellik rozetinin açıklama etiketi |
| 📝 Sertifika Rozeti (`galleryBadge`) | TEXT | CE CLASS IIa | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | Ürün görselinin üzerinde yer alan sertifika rozeti |
| 📝 Seçim Başlığı (`selectedPrefix`) | TEXT | Seçiminiz: | 📝 Ürün İçeriği / 🎛️ Varyant Özeti | Hayır | Varyant seçim özetinin sol başlığı |
| 📝 Seçim Alt Notu (`summarySuffix`) | TEXT | — parametre uyarlaması ve teknik destek dahil. | 📝 Ürün İçeriği / 🎛️ Varyant Özeti | Hayır | Varyant seçim özetinin sağındaki teknik destek notu |
| 📝 Sepete Ekle Metni (`addToCartText`) | TEXT | SEPETE EKLE | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 📝 Eklenirken Gösterilen Metin (`addingToCartText`) | TEXT | Ekleniyor... | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 📝 Stok Yok Metni (`outOfStockText`) | TEXT | Stok Yok | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 📝 WhatsApp Buton Metni (`whatsappButtonText`) | TEXT | WhatsApp'tan sor | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 🔗 WhatsApp Buton Linki (`whatsappButtonHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | Boş bırakılırsa ürün adına özel otomatik WhatsApp mesajı oluşturulur |
| 📝 Güven Rozeti 1 (`trustBadge1`) | TEXT | Ücretsiz kargo | 📝 Ürün İçeriği / 🏅 Güven Rozetleri | Hayır | — |
| 📝 Güven Rozeti 2 (`trustBadge2`) | TEXT | Koşulsuz iade | 📝 Ürün İçeriği / 🏅 Güven Rozetleri | Hayır | — |
| 📝 Güven Rozeti 3 (`trustBadge3`) | TEXT | Güvenli ödeme | 📝 Ürün İçeriği / 🏅 Güven Rozetleri | Hayır | — |
| 📝 Kategori Adı Yedek Alanı (`categoryText`) | TEXT | Kategori | 📝 Ürün İçeriği / 🧭 Ürün Yolu | Hayır | — |
| 📝 Ürün Bağlantısı Boş Mesajı (`setupMessage`) | TEXT | Bu bölüm Ürün Sayfası için tasarlandı. Ürün alanını ikas ürün verisine bağlayın. | 🧮 Ürün Verisi / 🧪 Önizleme ve Şablon | Hayır | — |
| 📝 Seçenek Zorunlu Mesajı (`optionRequiredMessage`) | TEXT | Lütfen gerekli ürün seçeneklerini tamamlayın. | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 📝 Sepete Ekleme Hata Mesajı (`addToCartErrorMessage`) | TEXT | Ürün sepete eklenemedi. | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Renkler | Hayır | — |
| 🎨 Panel Rengi (`panelColor`) | COLOR | #F1F1EC | 🎨 Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 👁️ Studio Önizlemesini Göster (`showTemplatePreview`) | BOOLEAN | true | 🧮 Ürün Verisi / 🧪 Önizleme ve Şablon | Hayır | — |
| 🧪 Gelişmiş Ürün Şablonu JSON (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi / 🧪 Önizleme ve Şablon | Hayır | CRS Composite kaynak yapısındaki reusable template datası. Boş bırakılırsa ürünün varsayılan şablon datası kullanılır. |
| 🌐 İngilizce Duyuru Vurgusu (`announcementStrongTextEn`) | TEXT | Don't miss the opportunity. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Duyuru Açıklaması (`announcementTextEn`) | TEXT | We deliver the CE Class IIa CRS Composite calibrated with your device parameters and provide free setup support. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Duyuru Buton Metni (`announcementButtonTextEn`) | TEXT | Free parameter matching → | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Ana Sayfa Bağlantı Metni (`breadcrumbHomeText`) | TEXT | Ana sayfa | 📝 Ürün İçeriği / 🧭 Ürün Yolu | Hayır | — |
| 🌐 İngilizce Ana Sayfa Metni (`breadcrumbHomeTextEn`) | TEXT | Home | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`breadcrumbHomeHref`) | LINK | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🧭 Ürün Yolu | Hayır | — |
| 🌐 İngilizce Kategori Adı (`breadcrumbCategoryTextEn`) | TEXT | Dental Resins | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yedek Kategori Adı (`categoryTextEn`) | TEXT | Category | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Üst Etiketi (`heroKickerEn`) | TEXT | CRS Composite · Biocompatible Crown-and-Bridge Resin | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Başlığı (`heroTitleHtmlEn`) | RICH_TEXT | The permanent crown now comes out of a print. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Açıklaması (`heroDescriptionHtmlEn`) | RICH_TEXT | A biocompatible resin for layered production of temporary and permanent crowns and bridges. It provides higher flexural strength and precise marginal fit compared to leading competitors; it has balanced translucency between semi-transparency and opacity. It is resistant to oral conditions and produces no taste or odor. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 1 Değeri (`heroPill1ValueEn`) | TEXT | 144 MPa | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 1 Etiketi (`heroPill1LabelEn`) | TEXT | flexural strength | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 2 Değeri (`heroPill2ValueEn`) | TEXT | 5000 MPa | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 2 Etiketi (`heroPill2LabelEn`) | TEXT | flexural modulus | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 3 Değeri (`heroPill3ValueEn`) | TEXT | CE | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 3 Etiketi (`heroPill3LabelEn`) | TEXT | Class IIa | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 4 Değeri (`heroPill4ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Özellik 4 Etiketi (`heroPill4LabelEn`) | TEXT | Does not turn yellow | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sertifika Rozeti (`galleryBadgeEn`) | TEXT | CE CLASS IIa | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Seçim Başlığı (`selectedPrefixEn`) | TEXT | Your selection: | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Seçim Alt Notu (`summarySuffixEn`) | TEXT | — parameter matching and technical support included. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sepete Ekle Metni (`addToCartTextEn`) | TEXT | ADD TO CART | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Eklenirken Gösterilen Metin (`addingToCartTextEn`) | TEXT | ADDING... | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Stok Yok Metni (`outOfStockTextEn`) | TEXT | OUT OF STOCK | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce WhatsApp Buton Metni (`whatsappButtonTextEn`) | TEXT | Ask via WhatsApp | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Güven Rozeti 1 (`trustBadge1En`) | TEXT | Free shipping | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Güven Rozeti 2 (`trustBadge2En`) | TEXT | Hassle-free returns | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Güven Rozeti 3 (`trustBadge3En`) | TEXT | Secure payment | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ürün Bağlantısı Boş Mesajı (`setupMessageEn`) | TEXT | This section is designed for product pages. Connect the product field to ikas product data. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Seçenek Zorunlu Mesajı (`optionRequiredMessageEn`) | TEXT | Please complete the required product options. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sepete Ekleme Hata Mesajı (`addToCartErrorMessageEn`) | TEXT | The product could not be added to the cart. | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Yeni Özellik 5 Değeri (`heroPill5Value`) | TEXT | Tat ve koku | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | — |
| ➕ Yeni Özellik 5 Etiketi (`heroPill5Label`) | TEXT | yapmaz | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | — |
| 🌐 İngilizce Yeni Özellik 5 Değeri (`heroPill5ValueEn`) | TEXT | Taste and odor | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yeni Özellik 5 Etiketi (`heroPill5LabelEn`) | TEXT | free | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Yeni Özellik 6 Değeri (`heroPill6Value`) | TEXT | Ağız koşullarına | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | — |
| ➕ Yeni Özellik 6 Etiketi (`heroPill6Label`) | TEXT | dayanıklıdır | 📝 Ürün İçeriği / 🏷️ Özellik Rozetleri | Hayır | — |
| 🌐 İngilizce Yeni Özellik 6 Değeri (`heroPill6ValueEn`) | TEXT | Resistant to | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yeni Özellik 6 Etiketi (`heroPill6LabelEn`) | TEXT | oral conditions | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🖼️ Ana Galeri Görseli (`galleryImage1`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🖼️ Galeri Görseli 2 (`galleryImage2`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🖼️ Galeri Görseli 3 (`galleryImage3`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🖼️ Galeri Görseli 4 (`galleryImage4`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🖼️ Galeri Görseli 5 (`galleryImage5`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 📝 Ana Galeri Görseli Alternatif Metni (`galleryImage1Alt`) | TEXT | CRS Composite CE Class IIa sertifikalı geçici ve daimi reçinesi | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Ana Galeri Görseli Alternatif Metni (`galleryImage1AltEn`) | TEXT | CRS Composite CE Class IIa certified temporary and permanent resin | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Galeri Görseli 2 Alternatif Metni (`galleryImage2Alt`) | TEXT | CRS Composite kron uygulaması | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Galeri Görseli 2 Alternatif Metni (`galleryImage2AltEn`) | TEXT | CRS Composite crown application | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Galeri Görseli 3 Alternatif Metni (`galleryImage3Alt`) | TEXT | CRS Composite köprü uygulaması | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Galeri Görseli 3 Alternatif Metni (`galleryImage3AltEn`) | TEXT | CRS Composite bridge application | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Galeri Görseli 4 Alternatif Metni (`galleryImage4Alt`) | TEXT | CRS Composite restorasyon | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Galeri Görseli 4 Alternatif Metni (`galleryImage4AltEn`) | TEXT | CRS Composite restoration | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Galeri Görseli 5 Alternatif Metni (`galleryImage5Alt`) | TEXT | CRS Composite model üzerinde geçici | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Galeri Görseli 5 Alternatif Metni (`galleryImage5AltEn`) | TEXT | Temporary on the CRS Composite model | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Küçük Galeri Görseli Erişilebilirlik Metni (`galleryThumbAriaLabel`) | TEXT | Ürün görseli | 📝 Ürün İçeriği / 🖼️ Ürün Galerisi | Hayır | — |
| 🌐 İngilizce Küçük Galeri Görseli Erişilebilirlik Metni (`galleryThumbAriaLabelEn`) | TEXT | Product image | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📞 WhatsApp Telefon Numarası (`whatsappPhoneNumber`) | TEXT | 905314326577 | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | Ülke koduyla, yalnızca rakamlardan oluşan numara. |
| 📝 WhatsApp Mesaj Şablonu (`whatsappMessageTemplate`) | TEXT | Merhaba, \{productName\} ile ilgileniyorum. Detaylı bilgi alabilir miyim? \{productUrl\} | 🔗 Butonlar ve Linkler / 🛒 Satın Alma ve İletişim | Hayır | \{productName\} ve \{productUrl\} alanları ürün adı ve sayfa adresiyle değiştirilir. |
| 🌐 İngilizce WhatsApp Mesaj Şablonu (`whatsappMessageTemplateEn`) | TEXT | Hello, I am interested in \{productName\}. Could I get more information? \{productUrl\} | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Renk Seçeneği Adı (`previewColorLabel`) | TEXT | Renk | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Renk Seçeneği Adı (`previewColorLabelEn`) | TEXT | Colour | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Boyut Seçeneği Adı (`previewSizeLabel`) | TEXT | Boyut | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Boyut Seçeneği Adı (`previewSizeLabelEn`) | TEXT | Dimension | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Renk Seçeneği 1 (`previewColor1`) | TEXT | A1 | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Renk Seçeneği 1 (`previewColor1En`) | TEXT | A1 | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Renk Seçeneği 2 (`previewColor2`) | TEXT | A2 | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Renk Seçeneği 2 (`previewColor2En`) | TEXT | A2 | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Renk Seçeneği 3 (`previewColor3`) | TEXT | A3 | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Renk Seçeneği 3 (`previewColor3En`) | TEXT | A3 | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Boyut Seçeneği 1 (`previewSize1`) | TEXT | 500 gr | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Boyut Seçeneği 1 (`previewSize1En`) | TEXT | 500 g | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Önizleme Boyut Seçeneği 2 (`previewSize2`) | TEXT | 1000 gr | 📝 Ürün İçeriği / 🛍️ Ürün Tanıtımı | Hayır | — |
| 🌐 İngilizce Önizleme Boyut Seçeneği 2 (`previewSize2En`) | TEXT | 1000 g | 📝 Ürün İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🖼️ Güven Rozeti İşareti Görseli (`trustBadgeIconImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Ürün İçeriği / 🏅 Güven Rozetleri | Hayır | — |
| 🎨 Önizleme Renk 1 Rengi (`previewColorHex1`) | COLOR | #ede9d0 | 🎨 Renkler | Hayır | — |
| 🎨 Önizleme Renk 2 Rengi (`previewColorHex2`) | COLOR | #efead4 | 🎨 Renkler | Hayır | — |
| 🎨 Önizleme Renk 3 Rengi (`previewColorHex3`) | COLOR | #e1d6b5 | 🎨 Renkler | Hayır | — |
| 👁️ Duyuru Bandını Göster (`showAnnouncement`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Yolunu Göster (`showBreadcrumb`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Üst Etiketi Göster (`showHeroKicker`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Açıklamasını Göster (`showHeroDescription`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Özellik Rozetlerini Göster (`showHeroPills`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ürün Galerisini Göster (`showGallery`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sertifika Rozetini Göster (`showGalleryBadge`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Varyant Özetini Göster (`showSelectionSummary`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sepete Ekle Düğmesini Göster (`showAddToCartButton`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ WhatsApp Düğmesini Göster (`showWhatsAppButton`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Güven Rozetlerini Göster (`showTrustBadges`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ Yeni Özellik 5 Alanını Göster (`showHeroPill5`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ Yeni Özellik 6 Alanını Göster (`showHeroPill6`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ✨ MASH P16L Alternatif Sayfa Tasarımını Etkinleştir (`enableAlternateMASHPage`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
