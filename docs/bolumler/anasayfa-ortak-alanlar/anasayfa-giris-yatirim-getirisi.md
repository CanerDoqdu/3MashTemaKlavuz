---
title: "Anasayfa Giriş + Yatırım Getirisi"
description: "3Mash temasında Anasayfa Giriş + Yatırım Getirisi adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa Giriş + Yatırım Getirisi

## Bu bölümde

- Yapılandırmada kayıtlı 171 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa Giriş + Yatırım Getirisi** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bölümün açık Studio düzenleyicisindeki listede yer aldığı doğrulandı; işlevi ve çalışması ayrıca doğrulanmalıdır.

## Nerede görünür?

Verilen Studio bağlantısında açık olan düzenleyicinin Bölümler (13) listesinde görüldü. Bu gözlem bölümün mağazada yayımlanmış veya ziyaretçiye görünür olduğunu kanıtlamaz.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Üst Etiket Metni (`eyebrowText`) | RICH_TEXT | DENTAL ÜRETİMİN GÖRÜNMEZ FATURASI | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Tutar Öncesi Başlık (`titleBeforeAmount`) | RICH_TEXT | Kliniğiniz her yıl | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Tutar Sonrası Başlık (`titleAfterAmount`) | RICH_TEXT | sessizce kaybediyor olabilir. | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | Farkında bile olmadan. | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Alt Başlık Giriş Metni (`subtitleStart`) | RICH_TEXT | Bu para reklama gitmiyor, yeni cihaza da gitmiyor. Hastanın ağzına | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Alt Başlık İlk Vurgusu (`subtitleStrongOne`) | RICH_TEXT | ilk seferde oturmayan işler | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Alt Başlık Orta Metni (`subtitleMiddle`) | RICH_TEXT | yüzünden, sessizce üretim maliyetine dönüşüyor. Yandaki değerleri | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Alt Başlık İkinci Vurgusu (`subtitleStrongTwo`) | RICH_TEXT | kendinize göre ayarlayın | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Alt Başlık Bitiş Metni (`subtitleEnd`) | RICH_TEXT | — yukarıdaki rakam anında sizin kliniğinize göre güncellenir. | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Birincil Buton Metni (`primaryButtonText`) | RICH_TEXT | Sebebini görün ↓ | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Birincil Buton Linki (`primaryButtonHref`) | TEXT | #sorun | 🔗 Butonlar ve Linkler | Hayır | — |
| 📝 İkincil Buton Metni (`secondaryButtonText`) | RICH_TEXT | Ücretsiz danışmanlık | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 İkincil Buton Linki (`secondaryButtonHref`) | TEXT | [bağlantı çıkarıldı] | 🔗 Butonlar ve Linkler | Hayır | — |
| 📝 Buton Altı İpucu (`hintText`) | RICH_TEXT | Bağlayıcılık yok · 20 dk | 🔗 Butonlar ve Linkler | Hayır | — |
| 🔗 Hesaplayıcı Bölüm Bağlantı Kimliği (`calculatorAnchorId`) | TEXT | hesap | 🧮 Tasarruf Hesaplayıcısı / ⚙️ Hesaplayıcı Genel | Hayır | Hesaplayıcı bölümünün benzersiz HTML kimliği; sayfa içi bağlantılar bu kimliğe yönlenebilir. |
| 📝 Hesaplayıcı Üst Etiketi (`calculatorEyebrow`) | RICH_TEXT | TASARRUF HESAPLAYICI | 🧮 Tasarruf Hesaplayıcısı / ⚙️ Hesaplayıcı Genel | Hayır | — |
| 📝 Hesaplayıcı Rozet Metni (`calculatorBadgeText`) | RICH_TEXT | TAHMİNİ | 🧮 Tasarruf Hesaplayıcısı / ⚙️ Hesaplayıcı Genel | Hayır | — |
| 🏥 Klinik Sekme Metni (`clinicModeText`) | RICH_TEXT | Klinik | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | — |
| 🧪 Laboratuvar Sekme Metni (`labModeText`) | RICH_TEXT | Laboratuvar | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | — |
| 📝 Klinik Vaka Etiketi (`clinicWorkLabel`) | RICH_TEXT | Aylık restoratif vaka | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | — |
| 📝 Laboratuvar Üretim Etiketi (`labWorkLabel`) | RICH_TEXT | Aylık üretim adedi | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | — |
| 📝 Mevcut Kayıp Etiketi (`currentLossLabel`) | RICH_TEXT | Tahmini yıllık kayıp | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Mevcut Kayıp Notu (`currentLossNote`) | RICH_TEXT | · mevcut oranla | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Hedef Kayıp Etiketi (`targetLossLabel`) | RICH_TEXT | Hedef oranla | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Hedef Kayıp Notu (`targetLossNote`) | RICH_TEXT | · ≤%3, 3mash desteğiyle | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Tasarruf Üst Etiketi (`savingsEyebrow`) | RICH_TEXT | YILLIK TASARRUF POTANSİYELİNİZ | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Hedefte Mesajı (`alreadyTargetText`) | RICH_TEXT | Zaten hedef banttasınız 👏 | 📊 Tasarruf Metrikleri / 📉 Kayıp ve Tasarruf Sonuçları | Hayır | — |
| 📝 Açıklama Öncesi Metin (`fineTextBeforeLink`) | RICH_TEXT | Basitleştirilmiş bir tahmindir; sonuçlar iş akışınıza göre değişir. Kesin analiz için | 📊 Tasarruf Metrikleri / 📝 Sonuç Açıklaması | Hayır | — |
| 📝 Açıklama Link Metni (`fineLinkText`) | RICH_TEXT | ücretsiz danışmanlık | 📊 Tasarruf Metrikleri / 📝 Sonuç Açıklaması | Hayır | — |
| 🔗 Açıklama Linki (`fineLinkHref`) | TEXT | /pages/iletisim | 📊 Tasarruf Metrikleri / 📝 Sonuç Açıklaması | Hayır | — |
| 📝 Açıklama Sonrası Metin (`fineTextAfterLink`) | RICH_TEXT | alın. | 📊 Tasarruf Metrikleri / 📝 Sonuç Açıklaması | Hayır | — |
| 🔢 Para Birimi Ön Eki (`currencyPrefix`) | TEXT | $ | 📊 Tasarruf Metrikleri / 🔢 Sayı ve Para Biçimi | Hayır | — |
| 🔢 Yüzde Ön Eki (`percentPrefix`) | TEXT | % | 📊 Tasarruf Metrikleri / 🔢 Sayı ve Para Biçimi | Hayır | — |
| 🔢 Eksi Değer Ön Eki (`negativePrefix`) | TEXT | − | 📊 Tasarruf Metrikleri / 🔢 Sayı ve Para Biçimi | Hayır | — |
| 🔢 Artı Değer Ön Eki (`positivePrefix`) | TEXT | + | 📊 Tasarruf Metrikleri / 🔢 Sayı ve Para Biçimi | Hayır | — |
| 🌐 Sayı Yereli (`locale`) | TEXT | tr-TR | 📊 Tasarruf Metrikleri / 🔢 Sayı ve Para Biçimi | Hayır | — |
| 🔢 Klinik Vaka Minimumu (`clinicWorkMin`) | NUMBER | 0 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Klinik Vaka Aralığı | Hayır | Klinik vaka slider alt sınırı; 0 veya üzeri ve üst sınırdan küçük olmalıdır. |
| 🔢 Klinik Vaka Maksimumu (`clinicWorkMax`) | NUMBER | 500 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Klinik Vaka Aralığı | Hayır | Klinik vaka slider üst sınırı; alt sınırdan büyük olmalıdır. |
| 🔢 Klinik Vaka Adımı (`clinicWorkStep`) | NUMBER | 10 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Klinik Vaka Aralığı | Hayır | Klinik vaka slider artış miktarı sıfırdan büyük olmalıdır. |
| 🔢 Klinik Varsayılan Vaka (`clinicWorkDefault`) | NUMBER | 120 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Klinik Vaka Aralığı | Hayır | Klinik vaka başlangıç değeri; alt ve üst sınırlar arasında olmalıdır. |
| 🔢 Klinik Varsayılan Tekrar İş Oranı (`clinicRptDefault`) | NUMBER | 10 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Klinik Tekrar Oranı | Hayır | Klinik başlangıç tekrar oranı yüzdesi; slider sınırları arasında olmalıdır. |
| 🔢 Klinik Maliyet Minimumu (`clinicCostMin`) | NUMBER | 100 | 🧮 Tasarruf Hesaplayıcısı / 💰 Klinik Tekrar Maliyeti | Hayır | Klinik tekrar maliyeti slider alt sınırı; 0 veya üzeri ve üst sınırdan küçük olmalıdır. |
| 🔢 Klinik Maliyet Maksimumu (`clinicCostMax`) | NUMBER | 1500 | 🧮 Tasarruf Hesaplayıcısı / 💰 Klinik Tekrar Maliyeti | Hayır | Klinik tekrar maliyeti slider üst sınırı; alt sınırdan büyük olmalıdır. |
| 🔢 Klinik Maliyet Adımı (`clinicCostStep`) | NUMBER | 25 | 🧮 Tasarruf Hesaplayıcısı / 💰 Klinik Tekrar Maliyeti | Hayır | Klinik maliyet slider artış miktarı sıfırdan büyük olmalıdır. |
| 🔢 Klinik Varsayılan Maliyet (`clinicCostDefault`) | NUMBER | 500 | 🧮 Tasarruf Hesaplayıcısı / 💰 Klinik Tekrar Maliyeti | Hayır | Klinik tekrar maliyeti başlangıç değeri; alt ve üst sınırlar arasında olmalıdır. |
| 🔢 Laboratuvar Üretim Minimumu (`labWorkMin`) | NUMBER | 0 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Laboratuvar Üretim Aralığı | Hayır | Laboratuvar üretim slider alt sınırı; 0 veya üzeri ve üst sınırdan küçük olmalıdır. |
| 🔢 Laboratuvar Üretim Maksimumu (`labWorkMax`) | NUMBER | 2000 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Laboratuvar Üretim Aralığı | Hayır | Laboratuvar üretim slider üst sınırı; alt sınırdan büyük olmalıdır. |
| 🔢 Laboratuvar Üretim Adımı (`labWorkStep`) | NUMBER | 25 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Laboratuvar Üretim Aralığı | Hayır | Laboratuvar üretim slider artış miktarı sıfırdan büyük olmalıdır. |
| 🔢 Laboratuvar Varsayılan Üretim (`labWorkDefault`) | NUMBER | 300 | 🧮 Tasarruf Hesaplayıcısı / 🔢 Laboratuvar Üretim Aralığı | Hayır | Laboratuvar üretim başlangıç değeri; alt ve üst sınırlar arasında olmalıdır. |
| 🔢 Laboratuvar Varsayılan Tekrar İş Oranı (`labRptDefault`) | NUMBER | 8 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Laboratuvar Tekrar Oranı | Hayır | Laboratuvar başlangıç tekrar oranı yüzdesi; slider sınırları arasında olmalıdır. |
| 🔢 Laboratuvar Maliyet Minimumu (`labCostMin`) | NUMBER | 50 | 🧮 Tasarruf Hesaplayıcısı / 💰 Laboratuvar Tekrar Maliyeti | Hayır | Laboratuvar tekrar maliyeti slider alt sınırı; 0 veya üzeri ve üst sınırdan küçük olmalıdır. |
| 🔢 Laboratuvar Maliyet Maksimumu (`labCostMax`) | NUMBER | 600 | 🧮 Tasarruf Hesaplayıcısı / 💰 Laboratuvar Tekrar Maliyeti | Hayır | Laboratuvar tekrar maliyeti slider üst sınırı; alt sınırdan büyük olmalıdır. |
| 🔢 Laboratuvar Maliyet Adımı (`labCostStep`) | NUMBER | 25 | 🧮 Tasarruf Hesaplayıcısı / 💰 Laboratuvar Tekrar Maliyeti | Hayır | Laboratuvar maliyet slider artış miktarı sıfırdan büyük olmalıdır. |
| 🔢 Laboratuvar Varsayılan Maliyeti (`labCostDefault`) | NUMBER | 200 | 🧮 Tasarruf Hesaplayıcısı / 💰 Laboratuvar Tekrar Maliyeti | Hayır | Laboratuvar tekrar maliyeti başlangıç değeri; alt ve üst sınırlar arasında olmalıdır. |
| 📊 Metrik 1 Değeri (`stat1Value`) | RICH_TEXT | ±20 | 📊 Tasarruf Metrikleri / 📊 1. Metrik Kartı | Hayır | — |
| 📊 Metrik 1 Ek Metni (`stat1Suffix`) | RICH_TEXT | µm | 📊 Tasarruf Metrikleri / 📊 1. Metrik Kartı | Hayır | — |
| 📊 Metrik 1 Açıklaması (`stat1Label`) | RICH_TEXT | her baskıda boyutsal hassasiyet — insan saç telinin yarısı | 📊 Tasarruf Metrikleri / 📊 1. Metrik Kartı | Hayır | — |
| 📊 Metrik 2 Değeri (`stat2Value`) | RICH_TEXT | ≤%3 | 📊 Tasarruf Metrikleri / 📊 2. Metrik Kartı | Hayır | — |
| 📊 Metrik 2 Ek Metni (`stat2Suffix`) | RICH_TEXT | Boş metin | 📊 Tasarruf Metrikleri / 📊 2. Metrik Kartı | Hayır | — |
| 📊 Metrik 2 Açıklaması (`stat2Label`) | RICH_TEXT | 3mash müşterilerinde tekrarlanan iş oranı (%7–12'den) | 📊 Tasarruf Metrikleri / 📊 2. Metrik Kartı | Hayır | — |
| 📊 Metrik 3 Değeri (`stat3Value`) | RICH_TEXT | &lt;6 | 📊 Tasarruf Metrikleri / 📊 3. Metrik Kartı | Hayır | — |
| 📊 Metrik 3 Ek Metni (`stat3Suffix`) | RICH_TEXT | ay | 📊 Tasarruf Metrikleri / 📊 3. Metrik Kartı | Hayır | — |
| 📊 Metrik 3 Açıklaması (`stat3Label`) | RICH_TEXT | yatırımın kendini geri ödeme potansiyeli | 📊 Tasarruf Metrikleri / 📊 3. Metrik Kartı | Hayır | — |
| 📊 Metrik 4 Değeri (`stat4Value`) | RICH_TEXT | 580 | 📊 Tasarruf Metrikleri / 📊 4. Metrik Kartı | Hayır | — |
| 📊 Metrik 4 Ek Metni (`stat4Suffix`) | RICH_TEXT | + | 📊 Tasarruf Metrikleri / 📊 4. Metrik Kartı | Hayır | — |
| 📊 Metrik 4 Açıklaması (`stat4Label`) | RICH_TEXT | dental lab & klinik bu sistemle üretiyor | 📊 Tasarruf Metrikleri / 📊 4. Metrik Kartı | Hayır | — |
| 👁️ Masaüstü Başlık Çizgisini Göster (`showTitleUnderline`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Başlık Çizgisi Görünürlüğü | Hayır | Desktop-only underline visibility. |
| 🖼️ Başlık Çizgisi Görseli (`titleUnderlineImageUrl`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | Görseli buradan yükleyin; boyut, konum ve efektler görsel kontrol grubundan yönetilir. |
| 📝 Başlık Çizgisi Alternatif Metni (`titleUnderlineImageAlt`) | TEXT | Boş metin | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🔢 Başlık Çizgisi Genişliği (`titleUnderlineImageWidth`) | NUMBER | 72 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🔢 Başlık Çizgisi Yüksekliği (`titleUnderlineImageHeight`) | NUMBER | 22 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🔢 Başlık Çizgisi Yatay Konumu (`titleUnderlineImageXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🔢 Başlık Çizgisi Dikey Konumu (`titleUnderlineImageYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🖼️ Başlık Çizgisi Sığdırma (`titleUnderlineImageFit`) | ENUM | fill | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | Seçenekler (LogoImageFit): Contain: contain; Cover: cover; Fill: fill; Scale down: scale-down |
| 🎨 Başlık Çizgisi Opaklığı (`titleUnderlineImageOpacity`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🎨 Başlık Çizgisi Parlaklığı (`titleUnderlineImageBrightness`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🎨 Başlık Çizgisi Kontrastı (`titleUnderlineImageContrast`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🎨 Başlık Çizgisi Doygunluğu (`titleUnderlineImageSaturation`) | NUMBER | 100 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🎨 Başlık Çizgisi Tonu (`titleUnderlineImageHue`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 🎨 Başlık Çizgisi Ters Çevirme (`titleUnderlineImageInvert`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 🖼️ Başlık Çizgisi Görseli | Hayır | — |
| 📝 Klinik Tekrar İş Oranı Etiketi (`clinicRptLabel`) | RICH_TEXT | Mevcut tekrar oranınız (RPT) | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | — |
| 🔢 Klinik Tekrar İş Oranı En Düşük Değer (`clinicRptMin`) | NUMBER | 1 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Klinik Tekrar Oranı | Hayır | Klinik tekrar oranı alt sınırı yüzde olarak girilir; üst sınırdan küçük olmalıdır. |
| 🔢 Klinik Tekrar İş Oranı En Yüksek Değer (`clinicRptMax`) | NUMBER | 20 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Klinik Tekrar Oranı | Hayır | Klinik tekrar oranı üst sınırı yüzde olarak girilir; alt sınırdan büyük olmalıdır. |
| 🔢 Klinik Tekrar İş Oranı Artış Miktarı (`clinicRptStep`) | NUMBER | 1 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Klinik Tekrar Oranı | Hayır | Klinik tekrar oranı slider artış miktarı sıfırdan büyük olmalıdır. |
| 📝 Klinik Maliyet Etiketi (`clinicCostLabel`) | RICH_TEXT | Bir tekrarın size maliyeti | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | — |
| 📝 Klinik Maliyet Detay Metni (`clinicCostDetailText`) | RICH_TEXT | Bu maliyet nelerden oluşuyor? Kalem kalem hesaplayın → | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | — |
| 🔗 Klinik Maliyet Detay Linki (`clinicCostDetailHref`) | TEXT | /pages/hesaplama | 🧮 Tasarruf Hesaplayıcısı / 🏥 Klinik Hesaplayıcı | Hayır | Hesaplama sayfasının site içi adresi; klinik modu uygulama tarafından URL sonuna eklenir. |
| 📝 Laboratuvar Tekrar İş Oranı Etiketi (`labRptLabel`) | RICH_TEXT | Mevcut tekrar oranınız (RPT) | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | — |
| 🔢 Laboratuvar Tekrar İş Oranı En Düşük Değer (`labRptMin`) | NUMBER | 1 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Laboratuvar Tekrar Oranı | Hayır | Laboratuvar tekrar oranı alt sınırı yüzde olarak girilir; üst sınırdan küçük olmalıdır. |
| 🔢 Laboratuvar Tekrar İş Oranı En Yüksek Değer (`labRptMax`) | NUMBER | 20 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Laboratuvar Tekrar Oranı | Hayır | Laboratuvar tekrar oranı üst sınırı yüzde olarak girilir; alt sınırdan büyük olmalıdır. |
| 🔢 Laboratuvar Tekrar İş Oranı Artış Miktarı (`labRptStep`) | NUMBER | 1 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Laboratuvar Tekrar Oranı | Hayır | Laboratuvar tekrar oranı slider artış miktarı sıfırdan büyük olmalıdır. |
| 📝 Laboratuvar Maliyet Etiketi (`labCostLabel`) | RICH_TEXT | Bir tekrarın size maliyeti | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | — |
| 📝 Laboratuvar Maliyet Detay Metni (`labCostDetailText`) | RICH_TEXT | Bu maliyet nelerden oluşuyor? Kalem kalem hesaplayın → | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | — |
| 🔗 Laboratuvar Maliyet Detay Linki (`labCostDetailHref`) | TEXT | /pages/hesaplama | 🧮 Tasarruf Hesaplayıcısı / 🧪 Laboratuvar Hesaplayıcı | Hayır | Hesaplama sayfasının site içi adresi; laboratuvar modu uygulama tarafından URL sonuna eklenir. |
| 🔢 Klinik Hedef Tekrar Oranı (`clinicTargetRepeatRate`) | NUMBER | 3 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Klinik Tekrar Oranı | Hayır | Tasarruf hesabında kullanılan hedef klinik tekrar yüzdesi; slider aralığında ve 0-100 arasında olmalıdır. |
| 🔢 Laboratuvar Hedef Tekrar Oranı (`labTargetRepeatRate`) | NUMBER | 3 | 🧮 Tasarruf Hesaplayıcısı / 🔁 Laboratuvar Tekrar Oranı | Hayır | Tasarruf hesabında kullanılan hedef laboratuvar tekrar yüzdesi; slider aralığında ve 0-100 arasında olmalıdır. |
| 🔢 Tablet Çizgi Genişliği (`titleUnderlineTabletWidth`) | NUMBER | 66 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Tablet Çizgi Yatay Konumu (`titleUnderlineTabletXOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Tablet Çizgi Yüksekliği (`titleUnderlineTabletHeight`) | NUMBER | 18 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Tablet Çizgi Dikey Konumu (`titleUnderlineTabletYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Mobil Çizgi Yatay Konumu (`titleUnderlineMobileXOffset`) | NUMBER | -6 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Mobil Çizgi Genişliği (`titleUnderlineMobileWidth`) | NUMBER | 58 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Mobil Çizgi Yüksekliği (`titleUnderlineMobileHeight`) | NUMBER | 14 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 🔢 Mobil Çizgi Dikey Konumu (`titleUnderlineMobileYOffset`) | NUMBER | 0 | 🎨 Görünüm ve Renkler / 📐 Tablet ve Mobil Çizgi | Hayır | — |
| 👁️ Tablet Başlık Çizgisini Göster (`showTitleUnderlineTablet`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Başlık Çizgisi Görünürlüğü | Hayır | — |
| 👁️ Mobil Başlık Çizgisini Göster (`showTitleUnderlineMobile`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Başlık Çizgisi Görünürlüğü | Hayır | — |
| 👁️ Kelime Stilini Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Başlık İçi Vurgu | Hayır | — |
| 📝 Stillenecek Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Başlık İçi Vurgu | Hayır | — |
| 👁️ Kalın Yazı (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Başlık İçi Vurgu | Hayır | — |
| 👁️ İtalik Yazı (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Başlık İçi Vurgu | Hayır | — |
| 📝 Laboratuvar Tutar Öncesi Başlık (`labTitleBeforeAmount`) | RICH_TEXT | Laboratuvarınız her yıl | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Kayıp Bağlantı Metni (`titleLossConnectorText`) | RICH_TEXT | sessizce | 📝 Anasayfa Başlığı | Hayır | — |
| 📝 Kayıp Dönem Metni (`titleLossPeriodText`) | RICH_TEXT | her yıl. | 📝 Anasayfa Başlığı | Hayır | — |
| 👁️ Hesaplayıcıyı Göster (`showCalculator`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Alt Alan Görünürlüğü | Hayır | — |
| 👁️ Metrikleri Göster (`showStats`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Alt Alan Görünürlüğü | Hayır | — |
| 👁️ Çağrı Alanını Göster (`showCta`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Alt Alan Görünürlüğü | Hayır | — |
| 👁️ 1. Metrik Kartını Göster (`showStat1`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | — |
| 👁️ 2. Metrik Kartını Göster (`showStat2`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | — |
| 👁️ 3. Metrik Kartını Göster (`showStat3`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | — |
| 👁️ 4. Metrik Kartını Göster (`showStat4`) | BOOLEAN | true | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | — |
| ➕ 5. Metrik Kartını Ekle / Göster (`showStat5`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | Gösterilmesi için 5. metrik alanlarından en az biri doldurulmalıdır; tümü boşsa kart render edilmez. |
| ➕ 6. Metrik Kartını Ekle / Göster (`showStat6`) | BOOLEAN | false | 👁️ Görünürlük ve Slotlar / 👁️ Metrik Kartı Görünürlüğü | Hayır | Gösterilmesi için 6. metrik alanlarından en az biri doldurulmalıdır; tümü boşsa kart render edilmez. |
| 📊 5. Metrik Değeri (`stat5Value`) | RICH_TEXT | Değer girin | 📊 Tasarruf Metrikleri / ➕ 5. Ek Metrik | Hayır | — |
| 📊 5. Metrik Ek Metni (`stat5Suffix`) | RICH_TEXT | Birim girin | 📊 Tasarruf Metrikleri / ➕ 5. Ek Metrik | Hayır | — |
| 📊 5. Metrik Açıklaması (`stat5Label`) | RICH_TEXT | Yeni metrik 5 | 📊 Tasarruf Metrikleri / ➕ 5. Ek Metrik | Hayır | — |
| 📊 6. Metrik Ek Metni (`stat6Suffix`) | RICH_TEXT | Birim girin | 📊 Tasarruf Metrikleri / ➕ 6. Ek Metrik | Hayır | — |
| 📊 6. Metrik Açıklaması (`stat6Label`) | RICH_TEXT | Yeni metrik 6 | 📊 Tasarruf Metrikleri / ➕ 6. Ek Metrik | Hayır | — |
| 📊 6. Metrik Değeri (`stat6Value`) | RICH_TEXT | Değer girin | 📊 Tasarruf Metrikleri / ➕ 6. Ek Metrik | Hayır | — |
| 🌐 İngilizce Üst Etiket Metni (`eyebrowTextEn`) | RICH_TEXT | THE INVISIBLE COST OF DENTAL PRODUCTION | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tutar Öncesi Başlık (`titleBeforeAmountEn`) | RICH_TEXT | Your clinic may be losing | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tutar Sonrası Başlık (`titleAfterAmountEn`) | RICH_TEXT | silently every year. | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Vurgulu Başlık Metni (`titleEmphasisEn`) | RICH_TEXT | Without even realizing it. | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Alt Başlık Giriş Metni (`subtitleStartEn`) | RICH_TEXT | This money is not going to advertising or new equipment. It turns into production cost because | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Alt Başlık İlk Vurgusu (`subtitleStrongOneEn`) | RICH_TEXT | work that does not fit the first time | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Alt Başlık Orta Metni (`subtitleMiddleEn`) | RICH_TEXT | causes silent waste. Adjust the values on the right | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Alt Başlık İkinci Vurgusu (`subtitleStrongTwoEn`) | RICH_TEXT | to match your clinic | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Alt Başlık Bitiş Metni (`subtitleEndEn`) | RICH_TEXT | - the figure above updates instantly for your clinic. | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Birincil Buton Metni (`primaryButtonTextEn`) | RICH_TEXT | See the reason ↓ | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce İkincil Buton Metni (`secondaryButtonTextEn`) | RICH_TEXT | Free consultation | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Buton Altı İpucu (`hintTextEn`) | RICH_TEXT | No obligation · 20 min | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hesaplayıcı Üst Etiketi (`calculatorEyebrowEn`) | RICH_TEXT | SAVINGS CALCULATOR | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hesaplayıcı Rozet Metni (`calculatorBadgeTextEn`) | RICH_TEXT | ESTIMATE | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Klinik Sekme Metni (`clinicModeTextEn`) | RICH_TEXT | Clinic | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Sekme Metni (`labModeTextEn`) | RICH_TEXT | Laboratory | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Klinik Vaka Etiketi (`clinicWorkLabelEn`) | RICH_TEXT | Monthly restorative cases | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Üretim Etiketi (`labWorkLabelEn`) | RICH_TEXT | Monthly production volume | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Mevcut Kayıp Etiketi (`currentLossLabelEn`) | RICH_TEXT | Estimated annual loss | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Mevcut Kayıp Notu (`currentLossNoteEn`) | RICH_TEXT | · at current rate | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hedef Kayıp Etiketi (`targetLossLabelEn`) | RICH_TEXT | At target rate | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hedef Kayıp Notu (`targetLossNoteEn`) | RICH_TEXT | · ≤3%, with 3mash support | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Tasarruf Üst Etiketi (`savingsEyebrowEn`) | RICH_TEXT | YOUR ANNUAL SAVINGS POTENTIAL | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Hedefte Mesajı (`alreadyTargetTextEn`) | RICH_TEXT | You are already in the target range 👏 | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Öncesi Metin (`fineTextBeforeLinkEn`) | RICH_TEXT | This is a simplified estimate; results vary by workflow. For a precise analysis, get | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Link Metni (`fineLinkTextEn`) | RICH_TEXT | free consultation | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Sonrası Metin (`fineTextAfterLinkEn`) | RICH_TEXT | . | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 1 Açıklaması (`stat1LabelEn`) | RICH_TEXT | dimensional accuracy on every print - half the thickness of a human hair | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 2 Açıklaması (`stat2LabelEn`) | RICH_TEXT | remake rate among 3mash customers (from 7-12%) | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 3 Açıklaması (`stat3LabelEn`) | RICH_TEXT | potential for the investment to pay for itself | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Tekrar İş Oranı Etiketi (`labRptLabelEn`) | RICH_TEXT | Your current remake rate (RPT) | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 6. Metrik Açıklaması (`stat6LabelEn`) | RICH_TEXT | Custom metric | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Başlık Çizgisi Alternatif Metni (`titleUnderlineImageAltEn`) | TEXT | Decorative title underline | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Kayıp Bağlantı Metni (`titleLossConnectorTextEn`) | RICH_TEXT | silently | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Klinik Tekrar İş Oranı Etiketi (`clinicRptLabelEn`) | RICH_TEXT | Your current remake rate (RPT) | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Klinik Maliyet Detay Metni (`clinicCostDetailTextEn`) | RICH_TEXT | What makes up this cost? Calculate it item by item → | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Metrik 4 Açıklaması (`stat4LabelEn`) | RICH_TEXT | dental labs and clinics producing with this system | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Maliyet Etiketi (`labCostLabelEn`) | RICH_TEXT | Your cost per remake | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Klinik Maliyet Etiketi (`clinicCostLabelEn`) | RICH_TEXT | Your cost per remake | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Tutar Öncesi Başlık (`labTitleBeforeAmountEn`) | RICH_TEXT | Your laboratory may be losing | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce 5. Metrik Açıklaması (`stat5LabelEn`) | RICH_TEXT | Additional metric | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Kayıp Dönem Metni (`titleLossPeriodTextEn`) | RICH_TEXT | every year. | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Laboratuvar Maliyet Detay Metni (`labCostDetailTextEn`) | RICH_TEXT | What makes up this cost? Calculate it item by item → | 📝 Anasayfa Başlığı / 🌐 İngilizce İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
