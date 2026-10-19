---
title: "HakkimizdaSayfasiV2"
description: "3Mash temasında HakkimizdaSayfasiV2 adıyla kayıtlı bölümün yapılandırma alanları."
---

# HakkimizdaSayfasiV2

## Bu bölümde

- Yapılandırmada kayıtlı 64 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **HakkimizdaSayfasiV2** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🏷️ Marka Etiketi (`brandLabel`) | TEXT | 3MASH | 📝 Hakkımızda İçeriği / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Marka Etiketi (`brandLabelEn`) | TEXT | 3MASH | 🌐 İngilizce İçerikler / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Sayfa Başlığı (`pageTitle`) | TEXT | Hakkımızda | 📝 Hakkımızda İçeriği / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`pageTitleEn`) | TEXT | About Us | 🌐 İngilizce İçerikler / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Sayfa Açıklaması (`pageDescription`) | TEXT | Mash, her biri kendi alanında uzman bir grup tutkulu insanın, kişisel kariyerlerindeki hızlı yükselişin getirdiği konfor alanlarından çıkarak, ülkelerinin ilerlemesine ve insanlığın ortak mirasına azami katkıda bulunmak amacıyla başlattıkları bir oluşumdur. Mevcut durumda, ağız ve diş sağlığı, kuyumculuk, odyoloji sektörleri iyileştirmeyi ve dönüştürmeyi arzuladığımız hizmet alanlarıdır. | 📝 Hakkımızda İçeriği / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Sayfa Açıklaması (`pageDescriptionEn`) | TEXT | Mash was founded by a passionate team of domain experts leaving their comfort zones to contribute to national progress and the global community. We are currently dedicated to innovating oral healthcare, jewelry, and audiology. | 🌐 İngilizce İçerikler / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Alıntı Başlığı (`quoteHeadingHtml`) | RICH_TEXT | Biz Kimiz | 📝 Hakkımızda İçeriği / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Alıntı Başlığı (`quoteHeadingHtmlEn`) | RICH_TEXT | Who We Are | 🌐 İngilizce İçerikler / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Atatürk Alıntısı (`quoteHtml`) | RICH_TEXT | "Çalışmak demek, boşuna yorulmak, terlemek değildir. Zamanın gereklerine göre bilim ve teknik ve her türlü uygar buluşlardan azami derecede istifade etmek zorunludur." M. Kemal Atatürk | 📝 Hakkımızda İçeriği / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Alıntı Metni (`quoteHtmlEn`) | RICH_TEXT | To | 🌐 İngilizce İçerikler / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Hikâye Metni (`storyHtml`) | RICH_TEXT | 3mash, Her biri kendi alanında uzman bir grup tutkulu insanın, kişisel kariyerlerindeki hızlı yükselişin getirdiği konfor alanlarından çıkarak, ülkelerinin ilerlemesine ve insanlığın ortak mirasına azami katkıda bulunmak amacıyla başlattıkları bir oluşumdur. Bu oluşum, para kazanmanın bir amaç değil sonuç olduğu bilinciyle bir yola çıkmıştır ve tüm kararlarını bu doğrultuda vermektedir. Yolculuğun ancak beraber yüründüğünde anlamlı olduğunun farkındalığıyla, tüm paydaşların birlikte yükselerek kazandığı bir ekosistem yaratmayı amaçlamaktadır. Mevcut durumda, ağız ve diş sağlığı, kuyumculuk, odyoloji sektörleri iyileştirmeyi ve dönüştürmeyi arzuladığımız hizmet alanlarıdır. | 📝 Hakkımızda İçeriği / 📖 Hikâyemiz | Hayır | — |
| 🌐 İngilizce Hikâye Metni (`storyHtmlEn`) | RICH_TEXT | 3mash, Is a venture started by a group of people, each an expert in their own field, who stepped out of the comfort zones brought by their rapid rise in personal careers to make the greatest possible contribution to the progress of their countries and to humanity's shared heritage. This venture set out with the awareness that making money is not a goal but a result , and it makes all its decisions accordingly. Aware that the journey is only meaningful when walked together, it aims to create an ecosystem where all stakeholders rise together and win. Currently, oral and dental health, jewelry, and audiology are the service areas we aspire to improve and transform. | 🌐 İngilizce İçerikler / 📖 Hikâyemiz | Hayır | — |
| 📝 Misyon ve Vizyon Metni (`missionVisionHtml`) | RICH_TEXT | Misyonumuz 🧭 Amacımız, kaliteli diş tedavilerini , insanların nerede yaşadığından bağımsız olarak herkes için erişilebilir hâle getirmektir. Vizyonumuz 🔭 Vizyonumuz; yalnızca 3D baskının değil, dijital üretimin sunduğu tüm imkânlardan yararlanarak yeniden üretimleri azaltmak, diş tedavilerinin kalitesini artırırken maliyetlerini düşürmek ve dünyanın en müşteri odaklı dental 3D baskı firması olmaktır. | 📝 Hakkımızda İçeriği / 🎯 Misyon ve Vizyon | Hayır | — |
| 🌐 İngilizce Misyon ve Vizyon Metni (`missionVisionHtmlEn`) | RICH_TEXT | Our Mission 🧭 Our goal is to make quality dental treatments accessible to everyone , regardless of where people live. Our Vision 🔭 Our vision is to reduce remakes by making use of everything digital manufacturing has to offer—not just 3D printing—while raising the quality of dental treatments and lowering their costs, and to become the world's most customer-focused dental 3D printing company. | 🌐 İngilizce İçerikler / 🎯 Misyon ve Vizyon | Hayır | — |
| 📝 Değerler Başlığı (`valuesHeading`) | TEXT | Değerlerimiz ⚖️ | 📝 Hakkımızda İçeriği / 💎 Değerler Başlığı | Hayır | — |
| 🌐 İngilizce Değerler Başlığı (`valuesHeadingEn`) | TEXT | Our Values ⚖️ | 🌐 İngilizce İçerikler / 💎 Değerler Başlığı | Hayır | — |
| ♿ Hikâye Görseli Alternatif Metni (`storyImageAlt`) | TEXT | müsteri-memnuniyeti | 📝 Hakkımızda İçeriği / 📖 Hikâyemiz | Hayır | — |
| 🌐 İngilizce Hikâye Görseli Alt Metni (`storyImageAltEn`) | TEXT | Customer satisfaction | 🌐 İngilizce İçerikler / 📖 Hikâyemiz | Hayır | — |
| ♿ Misyon ve Vizyon Görseli Alternatif Metni (`missionVisionImageAlt`) | TEXT | vizyon-misyon | 📝 Hakkımızda İçeriği / 🎯 Misyon ve Vizyon | Hayır | — |
| 🌐 İngilizce Misyon ve Vizyon Görseli Alt Metni (`missionVisionImageAltEn`) | TEXT | Mission and vision | 🌐 İngilizce İçerikler / 🎯 Misyon ve Vizyon | Hayır | — |
| 📝 İlke 1 Başlığı (`principle1Title`) | TEXT | 1. Müşteri Odaklı Olmak | 📝 Hakkımızda İçeriği / 💎 İlke 1 | Hayır | — |
| 🌐 İngilizce İlke 1 Başlığı (`principle1TitleEn`) | TEXT | 1. Customer Centricity | 🌐 İngilizce İçerikler / 💎 İlke 1 | Hayır | — |
| 📝 İlke 1 Açıklaması (`principle1Description`) | TEXT | Mash'in her bir ferdi tüm aksiyonlarını alırken önce müşteri memnuniyetini düşünür. | 📝 Hakkımızda İçeriği / 💎 İlke 1 | Hayır | — |
| 🌐 İngilizce İlke 1 Açıklaması (`principle1DescriptionEn`) | TEXT | Every member of Mash puts customer satisfaction first when taking action. | 🌐 İngilizce İçerikler / 💎 İlke 1 | Hayır | — |
| ♿ İlke 1 Görseli Alternatif Metni (`principle1ImageAlt`) | TEXT | müsteri-odaklılık-logo | 📝 Hakkımızda İçeriği / 💎 İlke 1 | Hayır | — |
| 🌐 İngilizce İlke 1 Görseli Alt Metni (`principle1ImageAltEn`) | TEXT | Customer centricity logo | 🌐 İngilizce İçerikler / 💎 İlke 1 | Hayır | — |
| 📝 İlke 2 Başlığı (`principle2Title`) | TEXT | 2. Sürekli Öğrenmek | 📝 Hakkımızda İçeriği / 💎 İlke 2 | Hayır | — |
| 🌐 İngilizce İlke 2 Başlığı (`principle2TitleEn`) | TEXT | 2. Continuous Learning | 🌐 İngilizce İçerikler / 💎 İlke 2 | Hayır | — |
| 📝 İlke 2 Açıklaması (`principle2Description`) | TEXT | Mash'in her bir ferdi bilgiye açtır, gücünün bilgisinden geldiğinin farkındadır. | 📝 Hakkımızda İçeriği / 💎 İlke 2 | Hayır | — |
| 🌐 İngilizce İlke 2 Açıklaması (`principle2DescriptionEn`) | TEXT | Every member of Mash is eager to learn, aware that strength comes from knowledge. | 🌐 İngilizce İçerikler / 💎 İlke 2 | Hayır | — |
| ♿ İlke 2 Görseli Alternatif Metni (`principle2ImageAlt`) | TEXT | sürekli-ögrenmek-logo | 📝 Hakkımızda İçeriği / 💎 İlke 2 | Hayır | — |
| 🌐 İngilizce İlke 2 Görseli Alt Metni (`principle2ImageAltEn`) | TEXT | Continuous learning logo | 🌐 İngilizce İçerikler / 💎 İlke 2 | Hayır | — |
| 📝 İlke 3 Başlığı (`principle3Title`) | TEXT | 3. Bilgiyi Paylaşmak | 📝 Hakkımızda İçeriği / 💎 İlke 3 | Hayır | — |
| 🌐 İngilizce İlke 3 Başlığı (`principle3TitleEn`) | TEXT | 3. Sharing Knowledge | 🌐 İngilizce İçerikler / 💎 İlke 3 | Hayır | — |
| 📝 İlke 3 Açıklaması (`principle3Description`) | TEXT | Mash'in hiç bir ferdi bildiklerini paylaşmaktan korkmaz. Bilginin paylaştıkça çoğalacağını bilir. | 📝 Hakkımızda İçeriği / 💎 İlke 3 | Hayır | — |
| 🌐 İngilizce İlke 3 Açıklaması (`principle3DescriptionEn`) | TEXT | No member of Mash hesitates to share knowledge, knowing it multiplies when shared. | 🌐 İngilizce İçerikler / 💎 İlke 3 | Hayır | — |
| ♿ İlke 3 Görseli Alternatif Metni (`principle3ImageAlt`) | TEXT | bilgiyi-paylasan-logo | 📝 Hakkımızda İçeriği / 💎 İlke 3 | Hayır | — |
| 🌐 İngilizce İlke 3 Görseli Alt Metni (`principle3ImageAltEn`) | TEXT | Knowledge sharing logo | 🌐 İngilizce İçerikler / 💎 İlke 3 | Hayır | — |
| 📝 İlke 4 Başlığı (`principle4Title`) | TEXT | 4. İlham Verici Olmak | 📝 Hakkımızda İçeriği / 💎 İlke 4 | Hayır | — |
| 🌐 İngilizce İlke 4 Başlığı (`principle4TitleEn`) | TEXT | 4. Being Inspiring | 🌐 İngilizce İçerikler / 💎 İlke 4 | Hayır | — |
| 📝 İlke 4 Açıklaması (`principle4Description`) | TEXT | Mash bitmek bilmeyen iyileştirme isteği ve yenilikçi yaklaşımı ile etrafındaki kişi ve kuruluşlara ilham kaynağı olmayı amaçlar. | 📝 Hakkımızda İçeriği / 💎 İlke 4 | Hayır | — |
| 🌐 İngilizce İlke 4 Açıklaması (`principle4DescriptionEn`) | TEXT | Mash aims to inspire individuals and organizations with continuous improvement and innovation. | 🌐 İngilizce İçerikler / 💎 İlke 4 | Hayır | — |
| ♿ İlke 4 Görseli Alternatif Metni (`principle4ImageAlt`) | TEXT | ilham-verici-logo | 📝 Hakkımızda İçeriği / 💎 İlke 4 | Hayır | — |
| 🌐 İngilizce İlke 4 Görseli Alt Metni (`principle4ImageAltEn`) | TEXT | Inspiration logo | 🌐 İngilizce İçerikler / 💎 İlke 4 | Hayır | — |
| 🖼️ Hikâye Görseli (`storyImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 📖 Hikâyemiz | Hayır | — |
| 🖼️ Misyon ve Vizyon Görseli (`missionVisionImage`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 🎯 Misyon ve Vizyon | Hayır | — |
| 🖼️ İlke 1 Görseli (`principle1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 💎 İlke 1 | Hayır | — |
| 🖼️ İlke 2 Görseli (`principle2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 💎 İlke 2 | Hayır | — |
| 🖼️ İlke 3 Görseli (`principle3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 💎 İlke 3 | Hayır | — |
| 🖼️ İlke 4 Görseli (`principle4Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Hakkımızda İçeriği / 💎 İlke 4 | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | — |
| 🎨 Başlık Rengi (`headingColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Renkler | Hayır | — |
| 📐 Maksimum İçerik Genişliği (`contentWidth`) | NUMBER | 1180 | 📐 Sayfa Düzeni | Hayır | Piksel cinsinden; 720–1800 arası. |
| 👁️ Giriş Bölümünü Göster (`showIntroduction`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Hikâyeyi Göster (`showStory`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İlke 1’i Göster (`showPrinciple1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İlke 2’yi Göster (`showPrinciple2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İlke 3’i Göster (`showPrinciple3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ İlke 4’i Göster (`showPrinciple4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🎨 Gövde Metni Rengi (`bodyColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`secondaryTextColor`) | COLOR | #55554E | 🎨 Renkler | Hayır | — |
| 👁️ Misyon ve Vizyonu Göster (`showMissionAndVision`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değerleri Göster (`showPrinciples`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
