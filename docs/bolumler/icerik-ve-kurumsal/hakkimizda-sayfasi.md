---
title: "Hakkımızda Sayfası"
description: "3Mash temasında Hakkımızda Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Hakkımızda Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 71 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Hakkımızda Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Giriş Başlığı (`introTitleHtml`) | RICH_TEXT | Biz Kimiz | 📝 İçerik / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Giriş Alıntısı (`introContentHtml`) | RICH_TEXT | "Çalışmak demek, boşuna yorulmak, terlemek değildir. Zamanın gereklerine göre bilim ve teknik ve her türlü uygar buluşlardan azami derecede istifade etmek zorunludur." M. Kemal Atatürk | 📝 İçerik / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Hikâye Metni (`block1Html`) | RICH_TEXT | 3mash, Her biri kendi alanında uzman bir grup tutkulu insanın, kişisel kariyerlerindeki hızlı yükselişin getirdiği konfor alanlarından çıkarak, ülkelerinin ilerlemesine ve insanlığın ortak mirasına azami katkıda bulunmak amacıyla başlattıkları bir oluşumdur. Bu oluşum, para kazanmanın bir amaç değil sonuç olduğu bilinciyle bir yola çıkmıştır ve tüm kararlarını bu doğrultuda vermektedir. Yolculuğun ancak beraber yüründüğünde anlamlı olduğunun farkındalığıyla, tüm paydaşların birlikte yükselerek kazandığı bir ekosistem yaratmayı amaçlamaktadır. Mevcut durumda, ağız ve diş sağlığı, kuyumculuk, odyoloji sektörleri iyileştirmeyi ve dönüştürmeyi arzuladığımız hizmet alanlarıdır. | 📝 İçerik / 📖 Hikâyemiz | Hayır | — |
| 🔗 Hikâye Görseli Adresi (Eski Alan) (`block1ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 📖 Hikâyemiz | Hayır | — |
| ♿ Hikâye Görseli Alternatif Metni (`block1ImageAlt`) | TEXT | müsteri-memnuniyeti | 📝 İçerik / 📖 Hikâyemiz | Hayır | — |
| 📝 Misyon ve Vizyon Metni (`block2Html`) | RICH_TEXT | Misyonumuz 🧭 Amacımız, kaliteli diş tedavilerini , insanların nerede yaşadığından bağımsız olarak herkes için erişilebilir hâle getirmektir. Vizyonumuz 🔭 Vizyonumuz; yalnızca 3D baskının değil, dijital üretimin sunduğu tüm imkânlardan yararlanarak yeniden üretimleri azaltmak, diş tedavilerinin kalitesini artırırken maliyetlerini düşürmek ve dünyanın en müşteri odaklı dental 3D baskı firması olmaktır. | 📝 İçerik / 🎯 Misyon ve Vizyon | Hayır | — |
| 🔗 Misyon ve Vizyon Görseli Adresi (Eski Alan) (`block2ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 🎯 Misyon ve Vizyon | Hayır | Eski yerleşimlerdeki görsel URL değerlerini korur; yeni görsel seçimi için Görsel alanını kullanın. |
| ♿ Misyon ve Vizyon Görseli Alternatif Metni (`block2ImageAlt`) | TEXT | vizyon-misyon | 📝 İçerik / 🎯 Misyon ve Vizyon | Hayır | — |
| 📝 Değerler Başlığı (`valuesTitle`) | TEXT | Değerlerimiz ⚖️ | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 1 Başlığı (`value1Title`) | TEXT | 1. Müşteri Odaklı Olmak | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 1 Açıklaması (`value1SubTitle`) | TEXT | Mash'in her bir ferdi tüm aksiyonlarını alırken önce müşteri memnuniyetini düşünür. | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🔗 Değer 1 Görsel Adresi (Eski Alan) (`value1ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 💠 Değerler | Hayır | Eski yerleşimlerdeki görsel URL değerlerini korur; yeni görsel seçimi için Görsel alanını kullanın. |
| ♿ Değer 1 Görseli Alternatif Metni (`value1ImageAlt`) | TEXT | müsteri-odaklılık-logo | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 2 Başlığı (`value2Title`) | TEXT | 2. Sürekli Öğrenmek | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 2 Açıklaması (`value2SubTitle`) | TEXT | Mash'in her bir ferdi bilgiye açtır, gücünün bilgisinden geldiğinin farkındadır. | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🔗 Değer 2 Görsel Adresi (Eski Alan) (`value2ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 💠 Değerler | Hayır | Eski yerleşimlerdeki görsel URL değerlerini korur; yeni görsel seçimi için Görsel alanını kullanın. |
| ♿ Değer 2 Görseli Alternatif Metni (`value2ImageAlt`) | TEXT | sürekli-ögrenmek-logo | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 3 Başlığı (`value3Title`) | TEXT | 3. Bilgiyi Paylaşmak | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 3 Açıklaması (`value3SubTitle`) | TEXT | Mash'in hiç bir ferdi bildiklerini paylaşmaktan korkmaz. Bilginin paylaştıkça çoğalacağını bilir. | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🔗 Değer 3 Görsel Adresi (Eski Alan) (`value3ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 💠 Değerler | Hayır | Eski yerleşimlerdeki görsel URL değerlerini korur; yeni görsel seçimi için Görsel alanını kullanın. |
| ♿ Değer 3 Görseli Alternatif Metni (`value3ImageAlt`) | TEXT | bilgiyi-paylasan-logo | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 4 Başlığı (`value4Title`) | TEXT | 4. İlham Verici Olmak | 📝 İçerik / 💠 Değerler | Hayır | — |
| 📝 Değer 4 Açıklaması (`value4SubTitle`) | TEXT | Mash bitmek bilmeyen iyileştirme isteği ve yenilikçi yaklaşımı ile etrafındaki kişi ve kuruluşlara ilham kaynağı olmayı amaçlar. | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🔗 Değer 4 Görsel Adresi (Eski Alan) (`value4ImageUrl`) | TEXT | [bağlantı çıkarıldı] | 📝 İçerik / 💠 Değerler | Hayır | Eski yerleşimlerdeki görsel URL değerlerini korur; yeni görsel seçimi için Görsel alanını kullanın. |
| ♿ Değer 4 Görseli Alternatif Metni (`value4ImageAlt`) | TEXT | ilham-verici-logo | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #2b2b2b | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #5f5f5f | 🎨 Görünüm ve Renkler | Hayır | — |
| 📐 İçerik Maksimum Genişliği (`maxWidth`) | NUMBER | 1320 | 📐 Sayfa Düzeni | Hayır | — |
| 📝 Üst Etiket (`brandKickerText`) | TEXT | 3MASH | 📝 İçerik / 🏷️ Sayfa Girişi | Hayır | — |
| 📝 Sayfa Açıklaması (`pageDescriptionText`) | TEXT | Mash, her biri kendi alanında uzman bir grup tutkulu insanın, kişisel kariyerlerindeki hızlı yükselişin getirdiği konfor alanlarından çıkarak, ülkelerinin ilerlemesine ve insanlığın ortak mirasına azami katkıda bulunmak amacıyla başlattıkları bir oluşumdur. Mevcut durumda, ağız ve diş sağlığı, kuyumculuk, odyoloji sektörleri iyileştirmeyi ve dönüştürmeyi arzuladığımız hizmet alanlarıdır. | 📝 İçerik / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Giriş Başlığı (`introTitleHtmlEn`) | RICH_TEXT | Who We Are | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Giriş Alıntısı (`introContentHtmlEn`) | RICH_TEXT | To | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hikâye Metni (`block1HtmlEn`) | RICH_TEXT | 3mash, Is a venture started by a group of people, each an expert in their own field, who stepped out of the comfort zones brought by their rapid rise in personal careers to make the greatest possible contribution to the progress of their countries and to humanity's shared heritage. This venture set out with the awareness that making money is not a goal but a result , and it makes all its decisions accordingly. Aware that the journey is only meaningful when walked together, it aims to create an ecosystem where all stakeholders rise together and win. Currently, oral and dental health, jewelry, and audiology are the service areas we aspire to improve and transform. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Misyon ve Vizyon Metni (`block2HtmlEn`) | RICH_TEXT | Our Mission 🧭 Our goal is to make quality dental treatments accessible to everyone , regardless of where people live. Our Vision 🔭 Our vision is to reduce remakes by making use of everything digital manufacturing has to offer—not just 3D printing—while raising the quality of dental treatments and lowering their costs, and to become the world's most customer-focused dental 3D printing company. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değerler Başlığı (`valuesTitleEn`) | TEXT | Our Values ⚖️ | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 1 Başlığı (`value1TitleEn`) | TEXT | 1. Customer Centricity | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 1 Açıklaması (`value1SubTitleEn`) | TEXT | Every member of Mash puts customer satisfaction first when taking action. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 2 Başlığı (`value2TitleEn`) | TEXT | 2. Continuous Learning | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Sayfa Başlığı (`pageTitleText`) | TEXT | Hakkımızda | 📝 İçerik / 🏷️ Sayfa Girişi | Hayır | — |
| 🌐 İngilizce Değer 2 Açıklaması (`value2SubTitleEn`) | TEXT | Every member of Mash is eager to learn, aware that strength comes from knowledge. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 3 Başlığı (`value3TitleEn`) | TEXT | 3. Sharing Knowledge | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 3 Açıklaması (`value3SubTitleEn`) | TEXT | No member of Mash hesitates to share knowledge, knowing it multiplies when shared. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 4 Başlığı (`value4TitleEn`) | TEXT | 4. Being Inspiring | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 4 Açıklaması (`value4SubTitleEn`) | TEXT | Mash aims to inspire individuals and organizations with continuous improvement and innovation. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hikâye Görseli Alternatif Metni (`block1ImageAltEn`) | TEXT | Customer satisfaction | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Misyon ve Vizyon Görseli Alternatif Metni (`block2ImageAltEn`) | TEXT | Mission and vision | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 1 Görseli Alternatif Metni (`value1ImageAltEn`) | TEXT | Customer centricity logo | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 2 Görseli Alternatif Metni (`value2ImageAltEn`) | TEXT | Continuous learning logo | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 3 Görseli Alternatif Metni (`value3ImageAltEn`) | TEXT | Knowledge sharing logo | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Değer 4 Görseli Alternatif Metni (`value4ImageAltEn`) | TEXT | Inspiration logo | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Üst Etiket (`brandKickerTextEn`) | TEXT | 3MASH | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`pageTitleTextEn`) | TEXT | About Us | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Sayfa Açıklaması (`pageDescriptionTextEn`) | TEXT | Mash was founded by a passionate team of domain experts leaving their comfort zones to contribute to national progress and the global community. We are currently dedicated to innovating oral healthcare, jewelry, and audiology. | 📝 İçerik / 🌐 İngilizce İçerikleri | Hayır | — |
| 🖼️ Hikâye Görseli (`block1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 📖 Hikâyemiz | Hayır | — |
| 🖼️ Misyon ve Vizyon Görseli (`block2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 🎯 Misyon ve Vizyon | Hayır | — |
| 🖼️ Değer 1 Görseli (`value1Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🖼️ Değer 2 Görseli (`value2Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🖼️ Değer 3 Görseli (`value3Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🖼️ Değer 4 Görseli (`value4Image`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 📝 İçerik / 💠 Değerler | Hayır | — |
| 🔢 Hikâye Bölüm Numarası (`storySectionCode`) | TEXT | 01 | 📝 İçerik / 📖 Hikâyemiz | Hayır | — |
| 🔢 Misyon ve Vizyon Bölüm Numarası (`missionSectionCode`) | TEXT | 02 | 📝 İçerik / 🎯 Misyon ve Vizyon | Hayır | — |
| 🔢 Değerler Bölüm Numarası (`valuesSectionCode`) | TEXT | 03 | 📝 İçerik / 💠 Değerler | Hayır | — |
| 👁️ Sayfa Girişini Göster (`showIntro`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Hikâye Bölümünü Göster (`showStoryBlock`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Misyon ve Vizyon Bölümünü Göster (`showMissionVision`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değerler Bölümünü Göster (`showValues`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değer 1 Kartını Göster (`showValue1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değer 2 Kartını Göster (`showValue2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değer 3 Kartını Göster (`showValue3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değer 4 Kartını Göster (`showValue4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
