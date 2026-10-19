---
title: "Ürün Performans Göstergeleri"
description: "3Mash temasında Ürün Performans Göstergeleri adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Performans Göstergeleri

## Bu bölümde

- Yapılandırmada kayıtlı 94 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Performans Göstergeleri** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🛒 Ürün Kaynağı (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | — |
| 🔢 Bölüm Sıra Numarası (`sectionIndex`) | TEXT | 02 | 📝 Bölüm Başlığı | Hayır | Sarı kutudaki numara (Örn: 02) |
| 🏷️ Bölüm Etiketi (`sectionLabel`) | TEXT | TEKNİK ÖZELLİKLER | 📝 Bölüm Başlığı | Hayır | Numaranın yanındaki büyük harf etiket |
| 📝 Ana Başlık (`titleHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı | Hayır | Örn: Marjin sınırları ve tüberkül detayları belirgin. |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı | Hayır | Başlığın sağındaki açıklama paragrafı |
| 📝 Metrik 1 Adı (`card1Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 1 | Hayır | Örn: Eğilme Mukavemeti |
| 🔢 Metrik 1 Değeri (`card1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 1 | Hayır | Örn: ISO 10477 veya 144 MPa |
| 🏷️ Metrik 1 Rozeti (`card1Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 1 | Hayır | Örn: Model — küçük yeşil etiket |
| 📝 Metrik 1 Açıklaması (`card1Caption`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 1 | Hayır | Kartın altındaki küçük açıklama metni |
| 📝 Metrik 2 Adı (`card2Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 2 | Hayır | Örn: Esneklik Modülü |
| 🔢 Metrik 2 Değeri (`card2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 2 | Hayır | Örn: 3326 MPa |
| 🏷️ Metrik 2 Rozeti (`card2Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 2 | Hayır | Örn: Stabilite |
| 📝 Metrik 2 Açıklaması (`card2Caption`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 2 | Hayır | — |
| 📝 Metrik 3 Adı (`card3Title`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 3 | Hayır | Örn: Çekme Dayanımı |
| 🔢 Metrik 3 Değeri (`card3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 3 | Hayır | Örn: ASTM D638 |
| 🏷️ Metrik 3 Rozeti (`card3Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 3 | Hayır | Örn: Model |
| 📝 Metrik 3 Açıklaması (`card3Caption`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 3 | Hayır | — |
| 🏷️ Teknik Vurgu Etiketi (`specTag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📝 Vurgu İçeriği | Hayır | Örn: CRS MODEL · BOYUTSAL KARARLILIK · DLP / LCD |
| 📝 Teknik Vurgu Başlığı (`specTitleHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📝 Vurgu İçeriği | Hayır | Örn: Tedavinin referans noktası doğru modeldir. |
| 📝 Teknik Vurgu Açıklaması (`specDescriptionHtml`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📝 Vurgu İçeriği | Hayır | Sol paneldeki uzun açıklama paragrafı |
| 🔗 Buton Metni (`specCtaText`) | TEXT | Buraya buton metnini yazın → | 📦 Teknik Vurgu / 🔗 Buton ve Link | Hayır | Alt butonun metni |
| 🔗 Buton Bağlantısı (`specCtaHref`) | TEXT | #satinal | 📦 Teknik Vurgu / 🔗 Buton ve Link | Hayır | Alt butonun yönlendirme adresi |
| 🏷️ Tablo 1. Satır Etiketi (`specRow1Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Uygulama |
| 📝 Tablo 1. Satır Değeri (`specRow1Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Master protez modeli |
| 🏷️ Tablo 2. Satır Etiketi (`specRow2Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Uygulama |
| 📝 Tablo 2. Satır Değeri (`specRow2Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Ortodontik model |
| 🏷️ Tablo 3. Satır Etiketi (`specRow3Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Detay |
| 📝 Tablo 3. Satır Değeri (`specRow3Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Belirgin kole hatları |
| 🏷️ Tablo 4. Satır Etiketi (`specRow4Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: İş akışı |
| 📝 Tablo 4. Satır Değeri (`specRow4Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Dijital tarama gösterimleri |
| 🏷️ Tablo 5. Satır Etiketi (`specRow5Label`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Uyum |
| 📝 Tablo 5. Satır Değeri (`specRow5Value`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 📋 Teknik Tablo | Hayır | Örn: Tüm DLP / LCD 3D yazıcılar |
| 🌐 İngilizce Bölüm Etiketi (`sectionLabelEn`) | TEXT | TECHNICAL SPECIFICATIONS | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Ana Başlık (`titleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yan Açıklama (`sideHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 📏 Metrik 1 Birimi (`card1Unit`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 1 | Hayır | — |
| 🌐 İngilizce Metrik 1 Adı (`card1TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 1 Değeri (`card1ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 1 Birimi (`card1UnitEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 1 Rozeti (`card1TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 1 Açıklaması (`card1CaptionEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 📏 Metrik 2 Birimi (`card2Unit`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 2 | Hayır | — |
| 🌐 İngilizce Metrik 2 Adı (`card2TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 2 Değeri (`card2ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 2 Birimi (`card2UnitEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 2 Rozeti (`card2TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 2 Açıklaması (`card2CaptionEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 📏 Metrik 3 Birimi (`card3Unit`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 📌 Metrik 3 | Hayır | — |
| 🌐 İngilizce Metrik 3 Adı (`card3TitleEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 3 Değeri (`card3ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 3 Birimi (`card3UnitEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 3 Rozeti (`card3TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 3 Açıklaması (`card3CaptionEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Metrik 4 Adı (`card4Title`) | TEXT | Buraya 4. teknik özellik adını yazın. | 📊 Metrik Daireleri / ➕ Metrik 4 | Hayır | — |
| 🔢 Metrik 4 Değeri (`card4Value`) | TEXT | Teknik değeri girin | 📊 Metrik Daireleri / ➕ Metrik 4 | Hayır | — |
| 📏 Metrik 4 Birimi (`card4Unit`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / ➕ Metrik 4 | Hayır | — |
| 🏷️ Metrik 4 Rozeti (`card4Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / ➕ Metrik 4 | Hayır | — |
| 📝 Metrik 4 Açıklaması (`card4Caption`) | TEXT | Buraya bu teknik değere ait kısa açıklamayı yazın. | 📊 Metrik Daireleri / ➕ Metrik 4 | Hayır | — |
| 🌐 İngilizce Metrik 4 Adı (`card4TitleEn`) | TEXT | Add the fourth specification name here. | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 4 Değeri (`card4ValueEn`) | TEXT | Enter the specification value | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 4 Birimi (`card4UnitEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 4 Rozeti (`card4TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 4 Açıklaması (`card4CaptionEn`) | TEXT | Add a short explanation of this specification here. | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Metrik 5 Adı (`card5Title`) | TEXT | Buraya 5. teknik özellik adını yazın. | 📊 Metrik Daireleri / ➕ Metrik 5 | Hayır | — |
| 🔢 Metrik 5 Değeri (`card5Value`) | TEXT | Teknik değeri girin | 📊 Metrik Daireleri / ➕ Metrik 5 | Hayır | — |
| 📏 Metrik 5 Birimi (`card5Unit`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / ➕ Metrik 5 | Hayır | — |
| 🏷️ Metrik 5 Rozeti (`card5Tag`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / ➕ Metrik 5 | Hayır | — |
| 📝 Metrik 5 Açıklaması (`card5Caption`) | TEXT | Buraya bu teknik değere ait kısa açıklamayı yazın. | 📊 Metrik Daireleri / ➕ Metrik 5 | Hayır | — |
| 🌐 İngilizce Metrik 5 Adı (`card5TitleEn`) | TEXT | Add the fifth specification name here. | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 5 Değeri (`card5ValueEn`) | TEXT | Enter the specification value | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 5 Birimi (`card5UnitEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 5 Rozeti (`card5TagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 5 Açıklaması (`card5CaptionEn`) | TEXT | Add a short explanation of this specification here. | 📊 Metrik Daireleri / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Teknik Vurgu Etiketi (`specTagEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Teknik Vurgu Başlığı (`specTitleHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Teknik Vurgu Açıklaması (`specDescriptionHtmlEn`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Buton Metni (`specCtaTextEn`) | TEXT | Add button text here → | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 1. Satır Etiketi (`specRow1LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 1. Satır Değeri (`specRow1ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 2. Satır Etiketi (`specRow2LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 2. Satır Değeri (`specRow2ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 3. Satır Etiketi (`specRow3LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 3. Satır Değeri (`specRow3ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 4. Satır Etiketi (`specRow4LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 4. Satır Değeri (`specRow4ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 5. Satır Etiketi (`specRow5LabelEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tablo 5. Satır Değeri (`specRow5ValueEn`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📦 Teknik Vurgu / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Metrik 1 Kartını Göster (`showMetricCard1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrik 2 Kartını Göster (`showMetricCard2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Metrik 3 Kartını Göster (`showMetricCard3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| ➕ Metrik 4 Kartını Ekle / Göster (`showMetricCard4`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ Metrik 5 Kartını Ekle / Göster (`showMetricCard5`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 👁️ Teknik Vurgu Kartını Göster (`showSpecHighlight`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Teknik Tabloyu Göster (`showSpecTable`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
