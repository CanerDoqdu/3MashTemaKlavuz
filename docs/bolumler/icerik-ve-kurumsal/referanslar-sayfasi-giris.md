---
title: "Referanslar Sayfası Giriş"
description: "3Mash temasında Referanslar Sayfası Giriş adıyla kayıtlı bölümün yapılandırma alanları."
---

# Referanslar Sayfası Giriş

## Bu bölümde

- Yapılandırmada kayıtlı 59 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Referanslar Sayfası Giriş** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | referanslar-giris | 📝 İçerik | Hayır | — |
| 📝 1. Güven Kategorisi (`proofCategory1`) | TEXT | Klinik vaka | 📝 İçerik | Hayır | — |
| 📝 2. Güven Kategorisi (`proofCategory2`) | TEXT | Kullanıcı yorumu | 📝 İçerik | Hayır | — |
| 🖼️ Güven Logosu 4 (`trustLogo4ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 3. Güven Kategorisi (`proofCategory3`) | TEXT | İş ortaklığı | 📝 İçerik | Hayır | — |
| 📝 4. Güven Kategorisi (`proofCategory4`) | TEXT | Laboratuvar paylaşımı | 📝 İçerik | Hayır | — |
| 📊 1. Metrik Değeri (`proofMetric1Value`) | TEXT | 580+ | 📝 İçerik | Hayır | — |
| 📝 1. Metrik Etiketi (`proofMetric1Label`) | TEXT | laboratuvar ve klinik | 📝 İçerik | Hayır | — |
| 📊 2. Metrik Değeri (`proofMetric2Value`) | TEXT | 9 | 📝 İçerik | Hayır | — |
| 📝 2. Metrik Etiketi (`proofMetric2Label`) | TEXT | referans kaydı | 📝 İçerik | Hayır | — |
| 📊 3. Metrik Değeri (`proofMetric3Value`) | TEXT | A-Z | 📝 İçerik | Hayır | — |
| 📝 3. Metrik Etiketi (`proofMetric3Label`) | TEXT | kurulumdan desteğe | 📝 İçerik | Hayır | — |
| 📝 Buton Alanı Erişilebilirlik Etiketi (`actionsAriaLabel`) | TEXT | Referanslar aksiyonları | 📝 İçerik | Hayır | — |
| 📝 Özet Alanı Erişilebilirlik Etiketi (`proofAriaLabel`) | TEXT | 3MASH referans özeti | 📝 İçerik | Hayır | — |
| 📝 Logo Alanı Erişilebilirlik Etiketi (`logosAriaLabel`) | TEXT | 3MASH güven logoları | 📝 İçerik | Hayır | — |
| 🖼️ Güven Logosu 1 (`trustLogo1ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 🖼️ Güven Logosu 2 (`trustLogo2ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 🖼️ Güven Logosu 3 (`trustLogo3ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 Özet Açıklaması (`proofDescription`) | TEXT | Yorumlar, klinik vakalar, iş ortakları ve üretim paylaşımları aynı sayfada tek bir güven mimarisi olarak sunulur. | 📝 İçerik | Hayır | — |
| 📝 Özet Başlığı (`proofTitle`) | TEXT | Kliniklerden laboratuvarlara uzanan saha kaydı. | 📝 İçerik | Hayır | — |
| 🖼️ Güven Logosu 5 (`trustLogo5ImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik | Hayır | — |
| 📝 Üst Etiket Metni (`eyebrowText`) | RICH_TEXT | Referanslar ve başarı hikayeleri | 📝 İçerik | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Dijital üretimde güveni gerçek işlerle kuruyoruz. | 📝 İçerik | Hayır | — |
| 📝 Açıklama İçeriği (`descriptionHtml`) | RICH_TEXT | 3MASH ekosistemi; kliniklerin, laboratuvarların ve çözüm ortaklarının günlük üretiminde aynı hedefe çalışır: doğru cihaz, doğru malzeme, doğru parametre ve kesintisiz teknik destek. | 📝 İçerik | Hayır | — |
| 📝 Özet Üst Etiketi (`proofEyebrow`) | TEXT | Referans havuzu | 📝 İçerik | Hayır | — |
| 🔗 Birincil Buton Metni (`primaryButtonText`) | TEXT | Başarı hikayesini gör | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Birincil Buton Linki (`primaryButtonHref`) | TEXT | #referanslar-vaka | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 İkincil Buton Metni (`secondaryButtonText`) | TEXT | Ekosistemi incele | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 İkincil Buton Linki (`secondaryButtonHref`) | TEXT | #referanslar-isleyis | 🔗 Butonlar ve Linkler | Hayır | — |
| 🌐 İngilizce Özet Üst Etiketi (`proofEyebrowEn`) | TEXT | Reference Pool | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Logo Alanı Erişilebilirlik Etiketi (`logosAriaLabelEn`) | TEXT | 3MASH trust logos | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Özet Alanı Erişilebilirlik Etiketi (`proofAriaLabelEn`) | TEXT | 3MASH reference summary | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Buton Alanı Erişilebilirlik Etiketi (`actionsAriaLabelEn`) | TEXT | References actions | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3. Metrik Etiketi (`proofMetric3LabelEn`) | TEXT | from installation to support | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 1. Metrik Etiketi (`proofMetric1LabelEn`) | TEXT | laboratories and clinics | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 2. Metrik Etiketi (`proofMetric2LabelEn`) | TEXT | reference records | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Açıklama İçeriği (`descriptionHtmlEn`) | RICH_TEXT | The 3MASH ecosystem works toward the same goal in daily production for clinics, laboratories, and solution partners: the right device, the right material, the right parameters, and continuous technical support. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`secondaryButtonTextEn`) | TEXT | Explore ecosystem | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Özet Başlığı (`proofTitleEn`) | TEXT | Field records spanning clinics to laboratories. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`primaryButtonTextEn`) | TEXT | View success story | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Özet Açıklaması (`proofDescriptionEn`) | TEXT | Reviews, clinical cases, partnerships, and production shares presented as a single architecture of trust. | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 1. Güven Kategorisi (`proofCategory1En`) | TEXT | Clinical Case | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | We build trust in digital production with real results . | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Üst Etiket Metni (`eyebrowTextEn`) | RICH_TEXT | References and success stories | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 2. Güven Kategorisi (`proofCategory2En`) | TEXT | User Review | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 3. Güven Kategorisi (`proofCategory3En`) | TEXT | Partnership | 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce 4. Güven Kategorisi (`proofCategory4En`) | TEXT | Lab Showcase | 🌐 İngilizce İçerikler | Hayır | — |
| ⬆️ Üst Boşluk (`paddingTop`) | NUMBER | 72 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554e | 🎨 Görünüm ve Renkler | Hayır | — |
| ⬇️ Alt Boşluk (`paddingBottom`) | NUMBER | 96 | 🎨 Görünüm ve Renkler | Hayır | — |
| ↔️ Maksimum İçerik Genişliği (`maxWidth`) | NUMBER | 1240 | 🎨 Görünüm ve Renkler | Hayır | — |
| 👁️ Aksiyonları Göster (`showActions`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Güven Özetini Göster (`showProofSummary`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Güven Logolarını Göster (`showTrustLogos`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Birincil Butonu Göster (`showPrimaryButton`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İkincil Butonu Göster (`showSecondaryButton`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
