---
title: "Maliyet Detay Sayfası"
description: "3Mash temasında Maliyet Detay Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Maliyet Detay Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 105 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Maliyet Detay Sayfası** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Başlık İçeriği (`heroTitle`) | RICH_TEXT | Bir tekrarın gerçek maliyeti neden ~500 dolar? | 📝 Sayfa İçeriği | Hayır | — |
| 📝 Giriş Açıklaması (`heroAnswer`) | RICH_TEXT | Çünkü bir remake'in maliyeti lab ücretinden ibaret değildir. Asıl yükü koltuk süresi oluşturur — yeniden prep, yeniden ölçü/tarama ve yeniden yapıştırma randevusu. Ulusal ölçekli klinik veriler tekrar oranını ortalama %3,8 , ama hekimden hekime %0–42 aralığında gösteriyor. Aşağıda kendi kalemlerinizle gerçek rakamınızı çıkarabilirsiniz. | 📝 Sayfa İçeriği | Hayır | — |
| 📝 Ana Sayfa Kırıntı Metni (`breadcrumbHomeText`) | TEXT | Ana sayfa | 📝 Sayfa İçeriği | Hayır | — |
| 📝 Hesaplayıcı Kırıntı Metni (`breadcrumbParentText`) | TEXT | Tasarruf hesaplayıcı | 📝 Sayfa İçeriği | Hayır | — |
| 📝 Geçerli Sayfa Kırıntı Metni (`breadcrumbCurrentText`) | TEXT | Bir tekrarın maliyeti | 📝 Sayfa İçeriği | Hayır | — |
| 🔢 Klinik Saatlik Koltuk Maliyeti ($/saat) (`defaultChairRate`) | NUMBER | 375 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Klinik Tekrar Süresi (dakika) (`defaultChairMin`) | NUMBER | 55 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Klinik Vaka Ünite Sayısı (`defaultUnits`) | NUMBER | 1 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Klinik Tekrar Laboratuvar Ücreti ($/ünite) (`defaultLabFee`) | NUMBER | 110 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Klinik Kargo ve Lojistik ($) (`defaultShip`) | NUMBER | 25 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Klinik İskonto, Jest ve İsraf ($) (`defaultMisc`) | NUMBER | 20 | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🔢 Lab Malzeme Maliyeti ($/ünite) (`defaultMatUnit`) | NUMBER | 35 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔢 Lab Vaka Ünite Sayısı (`defaultUnitsL`) | NUMBER | 3 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔢 Lab Saatlik İş Gücü ($/saat) (`defaultLabRate`) | NUMBER | 60 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔢 Lab Üretim Süresi (dakika) (`defaultLabMin`) | NUMBER | 70 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔢 Lab İki Yön Kargo ($) (`defaultShipL`) | NUMBER | 35 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔢 Lab İskonto ve Müşteri Jesti ($) (`defaultGoodwill`) | NUMBER | 40 | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🔗 Ana Sayfa Buton Metni (`useButtonText`) | TEXT | Bu değeri ana sayfada kullan → | 🔗 Bağlantılar ve Buton | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`useButtonHref`) | TEXT | 3MASH-Anasayfa-Konsept-v2.html | 🔗 Bağlantılar ve Buton | Hayır | — |
| 🎨 Sayfa Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🌐 İngilizce Başlık İçeriği (`heroTitleEn`) | RICH_TEXT | Why does a remake really cost ~$500? | 📝 Sayfa İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Giriş Açıklaması (`heroAnswerEn`) | RICH_TEXT | Short answer: because the cost of a remake is not just the lab fee. The primary burden is chair time — appointments for re-prep, re-impression/scan, and re-cementation. National clinical data shows an average remake rate of 3.8% , ranging from 0%–42% across practitioners. Calculate your own figure below item by item. | 📝 Sayfa İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ana Sayfa Kırıntı Metni (`breadcrumbHomeTextEn`) | TEXT | Home | 📝 Sayfa İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Hesaplayıcı Kırıntı Metni (`breadcrumbParentTextEn`) | TEXT | Savings calculator | 📝 Sayfa İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Geçerli Sayfa Kırıntı Metni (`breadcrumbCurrentTextEn`) | TEXT | Cost of a remake | 📝 Sayfa İçeriği / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ana Sayfa Buton Metni (`useButtonTextEn`) | TEXT | Use this value on homepage → | 🔗 Bağlantılar ve Buton / 🌐 İngilizce Buton Metinleri | Hayır | — |
| 📝 Klinik Saatlik Koltuk Maliyeti Etiketi (`chairRateLabel`) | RICH_TEXT | Hekim + koltuk maliyeti · işletme gideri, $/saat | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik Saatlik Koltuk Maliyeti Etiketi (`chairRateLabelEn`) | RICH_TEXT | Doctor + chair cost · operating cost, $/hr | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Klinik Tekrar Süresi Etiketi (`chairMinLabel`) | RICH_TEXT | Bir tekrara harcanan süre · prep + ölçü + yapıştırma, dk | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik Tekrar Süresi Etiketi (`chairMinLabelEn`) | RICH_TEXT | Time spent per remake · prep + scan + cementation, min | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Klinik Ünite Sayısı Etiketi (`unitsLabel`) | RICH_TEXT | İşteki ünite sayısı · birim | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik Ünite Sayısı Etiketi (`unitsLabelEn`) | RICH_TEXT | Units per case · units | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Klinik Laboratuvar Ücreti Etiketi (`labFeeLabel`) | RICH_TEXT | Yeniden lab ücreti · ünite başına, $ | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik Laboratuvar Ücreti Etiketi (`labFeeLabelEn`) | RICH_TEXT | Remake lab fee · per unit, $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Klinik Kargo Etiketi (`shipLabel`) | RICH_TEXT | Kargo / lojistik · gidiş-dönüş, $ | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik Kargo Etiketi (`shipLabelEn`) | RICH_TEXT | Shipping / logistics · round-trip, $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Klinik İskonto ve İsraf Etiketi (`miscLabel`) | RICH_TEXT | İskonto / jest / israf · $ | 🧮 Maliyet Hesaplayıcısı / 🏥 Klinik Hesaplaması | Hayır | — |
| 🌐 İngilizce Klinik İskonto ve İsraf Etiketi (`miscLabelEn`) | RICH_TEXT | Discount / goodwill / waste · $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Klinik Girdileri | Hayır | — |
| 📝 Lab Malzeme Maliyeti Etiketi (`matUnitLabel`) | RICH_TEXT | Yeniden üretim malzemesi · reçine/disk, $/birim | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🌐 İngilizce Lab Malzeme Maliyeti Etiketi (`matUnitLabelEn`) | RICH_TEXT | Remake material · resin/disc, per unit $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 📝 Lab Ünite Sayısı Etiketi (`unitsLLabel`) | RICH_TEXT | İşteki ünite sayısı · birim | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🌐 İngilizce Lab Ünite Sayısı Etiketi (`unitsLLabelEn`) | RICH_TEXT | Units per case · units | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 🌐 İngilizce Lab İş Gücü Etiketi (`labRateLabelEn`) | RICH_TEXT | Production labor · print+curing+QC, $/hr | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 📝 Lab Üretim Süresi Etiketi (`labMinLabel`) | RICH_TEXT | Yeniden üretim süresi · dk | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🌐 İngilizce Lab Üretim Süresi Etiketi (`labMinLabelEn`) | RICH_TEXT | Remake production time · min | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 📝 Lab Kargo Etiketi (`shipLLabel`) | RICH_TEXT | Kargo (iki yön) · $ | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🌐 İngilizce Lab Kargo Etiketi (`shipLLabelEn`) | RICH_TEXT | Shipping (two-way) · $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 📝 Lab Müşteri Jesti Etiketi (`goodwillLabel`) | RICH_TEXT | İskonto / müşteri jesti · $ | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |
| 🌐 İngilizce Lab Müşteri Jesti Etiketi (`goodwillLabelEn`) | RICH_TEXT | Discount / customer goodwill · $ | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Laboratuvar Girdileri | Hayır | — |
| 📝 Hesaplayıcı Üst Etiketi (`calculatorKicker`) | TEXT | TEKRAR MALİYETİ · KALEM KALEM | 🧮 Maliyet Hesaplayıcısı / 🧭 Hesaplayıcı Başlıkları | Hayır | — |
| 🌐 İngilizce Hesaplayıcı Üst Etiketi (`calculatorKickerEn`) | TEXT | REMAKE COST · ITEM BY ITEM | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Klinik Modu Başlık Etiketi (`clinicModeSummary`) | TEXT | KLİNİK | 🧮 Maliyet Hesaplayıcısı / 🧭 Hesaplayıcı Başlıkları | Hayır | — |
| 🌐 İngilizce Klinik Modu Başlık Etiketi (`clinicModeSummaryEn`) | TEXT | CLINIC | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Laboratuvar Modu Başlık Etiketi (`labModeSummary`) | TEXT | LAB | 🧮 Maliyet Hesaplayıcısı / 🧭 Hesaplayıcı Başlıkları | Hayır | — |
| 🌐 İngilizce Laboratuvar Modu Başlık Etiketi (`labModeSummaryEn`) | TEXT | LAB | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Klinik Modu Buton Metni (`clinicModeButton`) | TEXT | Klinik | 🧮 Maliyet Hesaplayıcısı / 🧭 Hesaplayıcı Başlıkları | Hayır | — |
| 🌐 İngilizce Klinik Modu Buton Metni (`clinicModeButtonEn`) | TEXT | Clinic | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Laboratuvar Modu Buton Metni (`labModeButton`) | TEXT | Laboratuvar | 🧮 Maliyet Hesaplayıcısı / 🧭 Hesaplayıcı Başlıkları | Hayır | — |
| 🌐 İngilizce Laboratuvar Modu Buton Metni (`labModeButtonEn`) | TEXT | Lab | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Klinik Koltuk Süresi Sonuç Etiketi (`clinicChairTimePartLabel`) | TEXT | Koltuk süresi | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Klinik Koltuk Süresi Sonuç Etiketi (`clinicChairTimePartLabelEn`) | TEXT | Chair time | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Klinik Yeniden Üretim Sonuç Etiketi (`clinicProductionPartLabel`) | TEXT | Yeniden üretim | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Klinik Yeniden Üretim Sonuç Etiketi (`clinicProductionPartLabelEn`) | TEXT | Remake production | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Klinik Lojistik Sonuç Etiketi (`clinicLogisticsPartLabel`) | TEXT | Lojistik + diğer | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Klinik Lojistik Sonuç Etiketi (`clinicLogisticsPartLabelEn`) | TEXT | Logistics + other | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Laboratuvar Üretim Sonuç Etiketi (`labProductionPartLabel`) | TEXT | Üretim (malzeme+işçilik) | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Laboratuvar Üretim Sonuç Etiketi (`labProductionPartLabelEn`) | TEXT | Production (material+labor) | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Laboratuvar Kargo Sonuç Etiketi (`labShippingPartLabel`) | TEXT | Kargo + jest | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Laboratuvar Kargo Sonuç Etiketi (`labShippingPartLabelEn`) | TEXT | Shipping + goodwill | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Hesaplayıcı Etiketleri | Hayır | — |
| 📝 Toplam Maliyet Etiketi (`totalCostLabel`) | TEXT | BİR TEKRARIN TOPLAM MALİYETİ | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Toplam Maliyet Etiketi (`totalCostLabelEn`) | TEXT | TOTAL COST PER REMAKE | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Sonuç ve Birimler | Hayır | — |
| 📝 Saatlik Değer Birimi (`rateUnitSuffix`) | TEXT | /sa | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Saatlik Değer Birimi (`rateUnitSuffixEn`) | TEXT | /hr | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Sonuç ve Birimler | Hayır | — |
| 📝 Süre Değer Birimi (`timeUnitSuffix`) | TEXT | dk | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Süre Değer Birimi (`timeUnitSuffixEn`) | TEXT | min | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Sonuç ve Birimler | Hayır | — |
| 📝 Ünite Sayısı Değer Birimi (`countUnitSuffix`) | TEXT | -ünite | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Ünite Sayısı Değer Birimi (`countUnitSuffixEn`) | TEXT | unit | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Sonuç ve Birimler | Hayır | — |
| 📝 Değer Aktarım Onay Metni (`savedMessage`) | TEXT | ✓ Değer kaydedildi — ana sayfadaki hesaplayıcıya taşındı. | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | — |
| 🌐 İngilizce Değer Aktarım Onay Metni (`savedMessageEn`) | TEXT | ✓ Value saved — transferred to homepage calculator. | 🧮 Maliyet Hesaplayıcısı / 🌐 İngilizce Sonuç ve Birimler | Hayır | — |
| 📝 Maliyet Açıklaması Başlığı (`explanationTitle`) | TEXT | Maliyet nereden geliyor? | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Maliyet Açıklaması Başlığı (`explanationTitleEn`) | TEXT | Where does the cost come from? | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 📝 Maliyet Açıklaması Metni (`explanationBody`) | RICH_TEXT | Sektördeki yaygın yanılgı, bir tekrarın maliyetini yalnızca yeniden lab ücreti olarak görmektir. Oysa bir kron reddedildiğinde asıl kaybı yaratan üç kalem vardır ve en büyüğü ilk sırada: 1. Koltuk süresi (en büyük kalem). Hastayı geri çağırmak, yeniden prep/ölçü almak ve yeni işi yapıştırmak ortalama 45–75 dakika alır. Bir kliniğin ortalama işletme gideri saatte ~$375 olarak modellenir; bu tek başına $280–470 demektir. 2. Yeniden üretim + lojistik. Yeni birimin lab ücreti, iki yönlü kargo ve varsa acele (rush) farkı. 3. Görünmeyenler. İskonto/jest, boşa giden randevu slotu, malzeme israfı ve hasta güveninde aşınma. | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Maliyet Açıklaması Metni (`explanationBodyEn`) | RICH_TEXT | A common misconception in the industry is that the cost of a remake is measured only by the re-lab fee . Yet when a crown is rejected, there are three real cost items behind the loss — and the biggest one comes first: 1. Chair time (the largest line item). Recalling the patient, re-prepping/taking a new impression, and cementing the new work takes 45–75 minutes on average. A clinic's average operating cost per hour is modeled at ~$375 ; this alone means $280–470. 2. Remanufacturing + logistics. The new unit's lab fee, two-way shipping, and any rush surcharge, if applicable. 3. The invisibles. Discounts/favors, wasted appointment slots, material waste, and patient trust erosion. | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 🔬 Klinik Tekrar Verisi İçeriği (`studyOneContent`) | RICH_TEXT | HAKEMLİ KLİNİK VERİ Tekrar oranı gerçekte ne kadar? Ulusal PBRN, 3.750 kron üzerinde ölçtü. McCracken M.S. ve ark. (National Dental PBRN Collaborative Group) · Journal of Prosthodontics , 2019;28(2):122–130 205 diş hekimi , gerçek klinik pratiğinde 3.750 tek-ünite kron değerlendirdi. Ortalama tekrar (remake) oranı %3,8 — fakat hekimden hekime %0 ile %42 arasında değişiyor. Hekimlerin %58'i hiç kron reddetmezken, tüm reddetmeler %42'lik gruptan geldi — yani sorun tekil, çözülebilir bir uygulama farkı. En sık ret sebepleri: proksimal uyumsuzluk, marjinal hatalar ve estetik başarısızlık — üçü de doğrudan ölçüsel hassasiyet problemi. DOI: 10.1111/jopr.12995 · Kaynağı aç → | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Klinik Tekrar Verisi İçeriği (`studyOneContentEn`) | RICH_TEXT | PEER-REVIEWED CLINICAL DATA What is the remake rate really? The National PBRN measured it across 3,750 crowns. McCracken M.S. et al. (National Dental PBRN Collaborative Group) · Journal of Prosthodontics , 2019;28(2):122–130 205 dentists evaluated 3,750 single-unit crowns in real clinical practice. Average remake rate is 3.8% — but varies from 0% to 42% across practitioners. While 58% of clinicians never reject a crown, all rejections came from the remaining 42% — meaning the problem is single and solvable . Most common rejection causes: proximal misfit, marginal errors, and aesthetic failure — all direct dimensional accuracy problems. DOI: 10.1111/jopr.12995 · Open source → | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 🔬 Ölçüsel Doğruluk Araştırması İçeriği (`studyTwoContent`) | RICH_TEXT | HAKEMLİ · ÖLÇÜSEL DOĞRULUK Peki sapma neden oluşuyor? Doğruluk, kullanılan sisteme göre uçtan uca değişiyor. Etemad-Shahidi Y. ve ark. · J Clin Med 2020 (sistematik derleme) · Németh A. ve ark. · J Dentistry 2023 (ağ meta-analizi) Sistematik derlemede full-arch model doğruluğu en iyi sistemde 3,3 µm 'ye inerken, bazı cihazlarda 130–190 µm 'ye çıkıyor — yani doğru sonucu cihaz ve parametre belirliyor. Ağ meta-analizi SLA, DLP ve PolyJet 'i en doğru teknolojiler olarak gösteriyor (SLA ~ 86,7 µm , DLP ~ 97,9 µm ortalama trueness). Yani sapma tesadüf değil, yönetilebilir bir değişken. 3mash bu değişkenleri birlikte kalibre ederek ±20 µm'yi her baskıda sabitler; tekrar oranı ve maliyet de bu sayede düşer. DOI: 10.3390/jcm9103357 → DOI: 10.1016/j.jdent.2023.104532 → | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Ölçüsel Doğruluk Araştırması İçeriği (`studyTwoContentEn`) | RICH_TEXT | PEER-REVIEWED · DIMENSIONAL ACCURACY So why does deviation occur? Accuracy varies end-to-end depending on the system used. Etemad-Shahidi Y. et al. · J Clin Med 2020 (systematic review) · Németh A. et al. · J Dentistry 2023 (network meta-analysis) In the systematic review, full-arch model accuracy with the best system goes down to 3.3 µm , while on some devices it goes up to 130–190 µm — meaning the device and parameters determine the correct result. The network meta-analysis ranks SLA, DLP, and PolyJet as the most accurate technologies (SLA ~ 86.7 µm , DLP ~ 97.9 µm average trueness). Deviation is not chance; it is a manageable variable. 3mash calibrates these variables together to deliver ±20 µm on every print , lowering remake rate and cost. DOI: 10.3390/jcm9103357 → DOI: 10.1016/j.jdent.2023.104532 → | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 📝 Sonuç Vurgusu İçeriği (`calloutContent`) | RICH_TEXT | 3mash bağlantısı: çalışmanın işaret ettiği üç sebep de (proksimal uyum, marjin, estetik) ±20 µm tekrar edilebilir hassasiyetle doğrudan azalır. Tekrar oranınızı %42'lerden ya da %10'lardan ≤%3'e çektiğinizde, yukarıdaki kalem-kalem maliyet aynı oranda düşer. | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Sonuç Vurgusu İçeriği (`calloutContentEn`) | RICH_TEXT | 3mash connection: the three reasons highlighted by the study (proximal fit, margin, aesthetics) are directly reduced with ±20 µm repeatable precision . When you lower your remake rate from around 42% or 10% to ≤3% , the itemized cost above drops by the same rate. | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 📝 Kaynakça ve Tahmin Notu (`sourceNotes`) | RICH_TEXT | Kaynaklar: Tekrar oranı ve ret sebepleri — McCracken ve ark., J Prosthodont 2019 (10.1111/jopr.12995) . Ölçüsel doğruluk — Etemad-Shahidi ve ark., J Clin Med 2020 (10.3390/jcm9103357) ve Németh ve ark., J Dentistry 2023 (10.1016/j.jdent.2023.104532) . Maliyet modeli (koltuk süresi/işletme gideri) — Spear Education, “The Cost of Laboratory Remakes.” Rakamlar tahminî olup iş akışınıza göre değişir. | 📚 Açıklama ve Kaynaklar | Hayır | — |
| 🌐 İngilizce Kaynakça ve Tahmin Notu (`sourceNotesEn`) | RICH_TEXT | Sources: Remake rate and rejection causes — McCracken et al., J Prosthodont 2019 (10.1111/jopr.12995) . Dimensional accuracy — Etemad-Shahidi et al., J Clin Med 2020 (10.3390/jcm9103357) and Németh et al., J Dentistry 2023 (10.1016/j.jdent.2023.104532) . Cost model (chair time/operating expense) — Spear Education, “The Cost of Laboratory Remakes.” Figures are estimates and vary by your workflow. | 📚 Açıklama ve Kaynaklar / 🌐 İngilizce Açıklama ve Kaynaklar | Hayır | — |
| 👁️ Üst Başlık Alanını Göster (`showHero`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Maliyet Hesaplayıcısını Göster (`showCalculator`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Maliyet Açıklamasını Göster (`showExplanation`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Klinik Tekrar Verisini Göster (`showFirstStudy`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ölçüsel Doğruluk Araştırmasını Göster (`showSecondStudy`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Sonuç Vurgusunu Göster (`showCallout`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kaynakça Notunu Göster (`showSourceNotes`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Değer Aktarım Bildirimini Göster (`showSavedMessage`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🔢 Tutar Para Birimi Simgesi (`currencySymbol`) | TEXT | $ | 🧮 Maliyet Hesaplayıcısı / 📊 Hesaplama Sonuçları | Hayır | Yalnızca tutar simgesini değiştirir; kur dönüşümü yapmaz. |
| 📝 Üretim İş Gücü Etiketi (`labRateLabel`) | TEXT | Üretim iş gücü &lt;span class=hint&gt;· baskı+kürleme+QC, $/saat&lt;/span&gt; | 🧮 Maliyet Hesaplayıcısı / 🧪 Laboratuvar Hesaplaması | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
