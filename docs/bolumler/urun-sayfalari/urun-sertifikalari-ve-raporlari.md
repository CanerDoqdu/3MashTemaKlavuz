---
title: "Ürün Sertifikaları ve Raporları"
description: "3Mash temasında Ürün Sertifikaları ve Raporları adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Sertifikaları ve Raporları

## Bu bölümde

- Yapılandırmada kayıtlı 79 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Sertifikaları ve Raporları** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔢 Bölüm Sıra Numarası (`sectionIndex`) | TEXT | 08 | 📝 Sertifika Bölüm Başlığı | Hayır | — |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | SERTİFİKALAR & RAPORLAR | 📝 Sertifika Bölüm Başlığı | Hayır | — |
| 📝 Bölüm Başlığı (`titleHtml`) | RICH_TEXT | Sertifikalar ve raporlar başlığı buraya gelecek. | 📝 Sertifika Bölüm Başlığı | Hayır | — |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Sertifikalar ve test raporları bölümü için sağ taraftaki detaylı açıklama metni buraya gelecek. | 📝 Sertifika Bölüm Başlığı | Hayır | — |
| 👁️ Tüm Sertifika Görsellerini Göster (`showImages`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kart 1 Görselini Göster (`cert1ShowImage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ Sertifika Kartı 1 Görseli (`cert1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏅 Sertifika Kartı 1 | Hayır | — |
| 🏷️ Kart 1 Rozeti (`cert1Badge`) | TEXT | CE CLASS IIa | 🏅 Sertifika Kartı 1 | Hayır | — |
| 📝 Kart 1 Başlığı (`cert1Title`) | TEXT | 1. Sertifika / Rapor Başlığı | 🏅 Sertifika Kartı 1 | Hayır | — |
| 📝 Kart 1 Açıklaması (`cert1Subtitle`) | TEXT | 1. Sertifika veya test raporuna ait standart ve açıklama metni buraya gelecek. | 🏅 Sertifika Kartı 1 | Hayır | — |
| 🔢 Kart 1 Rapor Numarası (`cert1ReportNo`) | TEXT | RAPOR-NO-01 | 🏅 Sertifika Kartı 1 | Hayır | — |
| 🏢 Kart 1 Belgeyi Veren Kurum (`cert1Issuer`) | TEXT | Akredite Test Kurumu 1 | 🏅 Sertifika Kartı 1 | Hayır | — |
| 🔗 Kart 1 Bağlantı Metni (`cert1ActionText`) | TEXT | Sertifikayı İncele (PDF) → | 🏅 Sertifika Kartı 1 | Hayır | — |
| 🔗 Kart 1 Belge Bağlantısı (`cert1ActionHref`) | TEXT | # | 🏅 Sertifika Kartı 1 | Hayır | — |
| 👁️ Kart 2 Görselini Göster (`cert2ShowImage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ Sertifika Kartı 2 Görseli (`cert2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏅 Sertifika Kartı 2 | Hayır | — |
| 🏷️ Kart 2 Rozeti (`cert2Badge`) | TEXT | ISO 13485:2016 | 🏅 Sertifika Kartı 2 | Hayır | — |
| 📝 Kart 2 Başlığı (`cert2Title`) | TEXT | 2. Sertifika / Rapor Başlığı | 🏅 Sertifika Kartı 2 | Hayır | — |
| 📝 Kart 2 Açıklaması (`cert2Subtitle`) | TEXT | 2. Sertifika veya test raporuna ait standart ve açıklama metni buraya gelecek. | 🏅 Sertifika Kartı 2 | Hayır | — |
| 🔢 Kart 2 Rapor Numarası (`cert2ReportNo`) | TEXT | RAPOR-NO-02 | 🏅 Sertifika Kartı 2 | Hayır | — |
| 🏢 Kart 2 Belgeyi Veren Kurum (`cert2Issuer`) | TEXT | Akredite Test Kurumu 2 | 🏅 Sertifika Kartı 2 | Hayır | — |
| 🔗 Kart 2 Bağlantı Metni (`cert2ActionText`) | TEXT | Standardı Görüntüle → | 🏅 Sertifika Kartı 2 | Hayır | — |
| 🔗 Kart 2 Belge Bağlantısı (`cert2ActionHref`) | TEXT | # | 🏅 Sertifika Kartı 2 | Hayır | — |
| 👁️ Kart 3 Görselini Göster (`cert3ShowImage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ Sertifika Kartı 3 Görseli (`cert3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏅 Sertifika Kartı 3 | Hayır | — |
| 🏷️ Kart 3 Rozeti (`cert3Badge`) | TEXT | ISO 10993 | 🏅 Sertifika Kartı 3 | Hayır | — |
| 📝 Kart 3 Başlığı (`cert3Title`) | TEXT | 3. Sertifika / Rapor Başlığı | 🏅 Sertifika Kartı 3 | Hayır | — |
| 📝 Kart 3 Açıklaması (`cert3Subtitle`) | TEXT | 3. Sertifika veya test raporuna ait standart ve açıklama metni buraya gelecek. | 🏅 Sertifika Kartı 3 | Hayır | — |
| 🔢 Kart 3 Rapor Numarası (`cert3ReportNo`) | TEXT | RAPOR-NO-03 | 🏅 Sertifika Kartı 3 | Hayır | — |
| 🏢 Kart 3 Belgeyi Veren Kurum (`cert3Issuer`) | TEXT | Akredite Test Kurumu 3 | 🏅 Sertifika Kartı 3 | Hayır | — |
| 🔗 Kart 3 Bağlantı Metni (`cert3ActionText`) | TEXT | Test Raporu Detayı → | 🏅 Sertifika Kartı 3 | Hayır | — |
| 🔗 Kart 3 Belge Bağlantısı (`cert3ActionHref`) | TEXT | # | 🏅 Sertifika Kartı 3 | Hayır | — |
| 👁️ Kart 4 Görselini Göster (`cert4ShowImage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🖼️ Sertifika Kartı 4 Görseli (`cert4Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🏅 Sertifika Kartı 4 | Hayır | — |
| 🏷️ Kart 4 Rozeti (`cert4Badge`) | TEXT | KLİNİK TEST | 🏅 Sertifika Kartı 4 | Hayır | — |
| 📝 Kart 4 Başlığı (`cert4Title`) | TEXT | 4. Sertifika / Rapor Başlığı | 🏅 Sertifika Kartı 4 | Hayır | — |
| 📝 Kart 4 Açıklaması (`cert4Subtitle`) | TEXT | 4. Sertifika veya test raporuna ait standart ve açıklama metni buraya gelecek. | 🏅 Sertifika Kartı 4 | Hayır | — |
| 🔢 Kart 4 Rapor Numarası (`cert4ReportNo`) | TEXT | RAPOR-NO-04 | 🏅 Sertifika Kartı 4 | Hayır | — |
| 🏢 Kart 4 Belgeyi Veren Kurum (`cert4Issuer`) | TEXT | Akredite Test Kurumu 4 | 🏅 Sertifika Kartı 4 | Hayır | — |
| 🔗 Kart 4 Bağlantı Metni (`cert4ActionText`) | TEXT | Klinik Raporu İncele → | 🏅 Sertifika Kartı 4 | Hayır | — |
| 🔗 Kart 4 Belge Bağlantısı (`cert4ActionHref`) | TEXT | # | 🏅 Sertifika Kartı 4 | Hayır | — |
| 📝 Yasal Bilgilendirme Metni (`complianceNotice`) | TEXT | Sertifikalar ve test raporları hakkında genel yasal bilgilendirme notu buraya gelecek. | ⚖️ Yasal Bilgilendirme | Hayır | — |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | CERTIFICATES & REPORTS | 📝 Sertifika Bölüm Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Bölüm Başlığı (`titleHtmlEn`) | RICH_TEXT | Certificates and reports title goes here. | 📝 Sertifika Bölüm Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Detailed description text for the certificates and test reports section goes here. | 📝 Sertifika Bölüm Başlığı / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Sertifika Kartı 1 Göster (`showCert1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kart 1 Rozeti (`cert1BadgeEn`) | TEXT | CE CLASS IIa | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 1 Başlığı (`cert1TitleEn`) | TEXT | 1. Certificate / Report Title | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 1 Açıklaması (`cert1SubtitleEn`) | TEXT | 1. The standard and description text for the certificate or test report will go here. | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 1 Belgeyi Veren Kurum (`cert1IssuerEn`) | TEXT | Accredited Testing Body 1 | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 1 Bağlantı Metni (`cert1ActionTextEn`) | TEXT | View Certificate (PDF) → | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Sertifika Kartı 2 Göster (`showCert2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kart 2 Rozeti (`cert2BadgeEn`) | TEXT | ISO 13485:2016 | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 2 Başlığı (`cert2TitleEn`) | TEXT | 2. Certificate / Report Title | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 2 Açıklaması (`cert2SubtitleEn`) | TEXT | 2. The standard and description text for the certificate or test report will go here. | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 2 Belgeyi Veren Kurum (`cert2IssuerEn`) | TEXT | Accredited Testing Body 2 | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 2 Bağlantı Metni (`cert2ActionTextEn`) | TEXT | View Standard → | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Sertifika Kartı 3 Göster (`showCert3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kart 3 Rozeti (`cert3BadgeEn`) | TEXT | ISO 10993 | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 3 Başlığı (`cert3TitleEn`) | TEXT | 3. Certificate / Report Title | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 3 Açıklaması (`cert3SubtitleEn`) | TEXT | 3. The standard and description text for the certificate or test report will go here. | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 3 Belgeyi Veren Kurum (`cert3IssuerEn`) | TEXT | Accredited Testing Body 3 | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 3 Bağlantı Metni (`cert3ActionTextEn`) | TEXT | Test Report Details → | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Sertifika Kartı 4 Göster (`showCert4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🌐 İngilizce Kart 4 Rozeti (`cert4BadgeEn`) | TEXT | CLINICAL TEST | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 4 Başlığı (`cert4TitleEn`) | TEXT | 4. Certificate / Report Title | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 4 Açıklaması (`cert4SubtitleEn`) | TEXT | 4. The standard and description text for the certificate or test report will go here. | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 4 Belgeyi Veren Kurum (`cert4IssuerEn`) | TEXT | Accredited Testing Body 4 | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 4 Bağlantı Metni (`cert4ActionTextEn`) | TEXT | Review Clinical Report → | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |
| 🔢 Rapor Numarası Etiketi (`reportNoLabel`) | TEXT | Rapor No: | 🔢 Belge Bilgi Etiketleri | Hayır | — |
| 🌐 İngilizce Rapor Numarası Etiketi (`reportNoLabelEn`) | TEXT | Report No: | 🔢 Belge Bilgi Etiketleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🏢 Kurum Etiketi (`issuerLabel`) | TEXT | Kurum: | 🔢 Belge Bilgi Etiketleri | Hayır | — |
| 🌐 İngilizce Kurum Etiketi (`issuerLabelEn`) | TEXT | Issuer: | 🔢 Belge Bilgi Etiketleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yasal Bilgilendirme Metni (`complianceNoticeEn`) | TEXT | General legal disclaimer note regarding certificates and test reports goes here. | ⚖️ Yasal Bilgilendirme / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Yasal Bilgilendirme Alanını Göster (`showComplianceNotice`) | BOOLEAN | true | ⚖️ Yasal Bilgilendirme | Hayır | — |
| 🌐 İngilizce Kart 1 Rapor Numarası (`cert1ReportNoEn`) | TEXT | REPORT-NO-01 | 🏅 Sertifika Kartı 1 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 2 Rapor Numarası (`cert2ReportNoEn`) | TEXT | REPORT-NO-02 | 🏅 Sertifika Kartı 2 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 3 Rapor Numarası (`cert3ReportNoEn`) | TEXT | REPORT-NO-03 | 🏅 Sertifika Kartı 3 / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Kart 4 Rapor Numarası (`cert4ReportNoEn`) | TEXT | REPORT-NO-04 | 🏅 Sertifika Kartı 4 / 🌐 İngilizce İçerikler | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
