---
title: "Anasayfa SSS"
description: "3Mash temasında Anasayfa SSS adıyla kayıtlı bölümün yapılandırma alanları."
---

# Anasayfa SSS

## Bu bölümde

- Yapılandırmada kayıtlı 62 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Anasayfa SSS** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

Bu bölüm, ikas Studio editöründe ilgili sayfa seçildiğinde sol menüdeki bölüm listesinde yer alır ve sırası değiştirilebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🔗 Bölüm Çapa Kimliği (`sectionAnchorId`) | TEXT | sss | 📝 Bölüm Başlığı | Hayır | — |
| 🔢 Bölüm Sıra Numarası (`indexNumber`) | RICH_TEXT | 07 | 📝 Bölüm Başlığı | Hayır | — |
| 📝 Bölüm Üst Etiketi (`indexText`) | RICH_TEXT | Sık Sorulanlar | 📝 Bölüm Başlığı | Hayır | — |
| 📝 Başlık Metni (`titleText`) | RICH_TEXT | Kısa, net cevaplar. | 📝 Bölüm Başlığı | Hayır | — |
| ✨ Vurgulu Başlık Metni (`titleEmphasis`) | RICH_TEXT | Sık Sorulanlar | 📝 Bölüm Başlığı | Hayır | — |
| 📝 Yan Açıklama Metni (`sideHtml`) | RICH_TEXT | En kritik kararları hızlı vermeniz için, klinik ve laboratuvarlardan gelen soruları net cevaplarla topladık. | 📝 Bölüm Başlığı | Hayır | — |
| ❓ 1. Soru (`faq1Question`) | RICH_TEXT | Dental 3D baskıda ölçüsel hassasiyet neden bu kadar önemli? | ❓ Sık Sorulan Sorular / 📌 Soru 1 | Hayır | — |
| 💬 1. Cevap Metni (`faq1AnswerHtml`) | RICH_TEXT | Çünkü bir restorasyonun ilk seferde oturması doğrudan ölçüsel hassasiyete bağlıdır. Ulusal ölçekli klinik verilerde kron tekrarlarının en sık sebepleri proksimal uyumsuzluk, marjinal hatalar ve estetik başarısızlıktır — üçü de birer hassasiyet problemidir. 3mash ekosistemi ±20 µm boyutsal hassasiyeti, tek seferlik değil her baskıda tekrar edilebilir şekilde sağlar; bu da tekrar oranını ve gizli maliyeti düşürür. | ❓ Sık Sorulan Sorular / 📌 Soru 1 | Hayır | — |
| ❓ 2. Soru (`faq2Question`) | RICH_TEXT | Bir kron tekrarının (remake) maliyeti gerçekte ne kadar? | ❓ Sık Sorulan Sorular / 📌 Soru 2 | Hayır | — |
| 💬 2. Cevap Metni (`faq2AnswerHtml`) | RICH_TEXT | Tahminî olarak ~500 dolar — ve bu tutarın büyük kısmı lab ücreti değil, koltuk süresidir (yeniden prep, ölçü ve yapıştırma randevusu). Klinik işletme gideri saatte ~$375 modellenir; tek bir tekrar bunun çoğunu tüketir. Kendi kalemlerinizle hesaplamak için maliyet detay sayfamıza bakabilirsiniz. | ❓ Sık Sorulan Sorular / 📌 Soru 2 | Hayır | — |
| ❓ 3. Soru (`faq3Question`) | RICH_TEXT | 3D baskıda kürleme (post-curing) neden kritik? | ❓ Sık Sorulan Sorular / 📌 Soru 3 | Hayır | — |
| 💬 3. Cevap Metni (`faq3AnswerHtml`) | RICH_TEXT | Çünkü baskı, cihazdan çıktığında henüz bitmemiştir. Yetersiz kürleme (undercure) kırılganlık , fazla kürleme (overcure) ise deformasyon yaratır — yazıcıda kazandığınız hassasiyeti kürlemede kaybedebilirsiniz. 3mash'in akıllı kürleme cihazı parametreleri otomatik yönetir ve bu riski kullanıcı hatasından arındırır. | ❓ Sık Sorulan Sorular / 📌 Soru 3 | Hayır | — |
| ❓ 4. Soru (`faq4Question`) | RICH_TEXT | 3mash yalnızca cihaz mı satıyor? | ❓ Sık Sorulan Sorular / 📌 Soru 4 | Hayır | — |
| 💬 4. Cevap Metni (`faq4AnswerHtml`) | RICH_TEXT | Hayır. 3mash entegre bir üretim ekosistemi sunar: yazıcı, reçine ve kürlemeyi birlikte kalibre eder; danışmanlık, Mash Academy eğitimleri ve diş teknisyeni + mühendislerden oluşan satış sonrası teknik destekle tüm süreçte yanınızda olur. | ❓ Sık Sorulan Sorular / 📌 Soru 4 | Hayır | — |
| ❓ 5. Soru (`faq5Question`) | RICH_TEXT | Elimdeki başka marka yazıcıyla çalışır mısınız? | ❓ Sık Sorulan Sorular / 📌 Soru 5 | Hayır | — |
| 💬 5. Cevap Metni (`faq5AnswerHtml`) | RICH_TEXT | Evet. Hem reçine hem yazıcı tarafında güçlü bir teknik birikime sahip olduğumuz için çözümlerimiz marka bağımsızdır ; mevcut cihazınızın parametrelerini optimize ederek onu da aynı sonuca getirebiliriz. | ❓ Sık Sorulan Sorular / 📌 Soru 5 | Hayır | — |
| ⚙️ İlk Soruyu Açık Başlat (`openFirstFaq`) | BOOLEAN | false | ⚙️ SSS Davranışı | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Soru Metni Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Cevap Metni Rengi (`subTextColor`) | COLOR | #55554E | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Metin Rengi (`mutedTextColor`) | COLOR | #8F8F86 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Simge Rengi (`accentTextColor`) | COLOR | #3D4D0E | 🎨 Görünüm ve Renkler | Hayır | — |
| 👁️ Metin Vurgusunu Etkinleştir (`wordStyleEnabled`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 📝 Vurgulanacak Kelime veya İfade (`styledPhrase`) | TEXT | Vurgulanacak ifade | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🎨 Vurgulanan Metin Rengi (`styledPhraseColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 💪 Vurgulanan Metni Kalın Yap (`styledPhraseBold`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| ✨ Vurgulanan Metni İtalik Yap (`styledPhraseItalic`) | BOOLEAN | false | 🎨 Görünüm ve Renkler / ✨ Metin Vurgusu | Hayır | — |
| 🌐 İngilizce Bölüm Üst Etiketi (`indexTextEn`) | RICH_TEXT | Frequently Asked Questions | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | RICH_TEXT | Short, clear answers. | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 İngilizce Yan Açıklama Metni (`sideHtmlEn`) | RICH_TEXT | To help you make critical decisions quickly, we've compiled the most common questions from clinics and labs with clear answers. | 📝 Bölüm Başlığı / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Sorunun İngilizcesi (`faq1QuestionEn`) | RICH_TEXT | Why is dimensional accuracy so critical in dental 3D printing? | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 1. Cevabın İngilizcesi (`faq1AnswerHtmlEn`) | RICH_TEXT | Because whether a restoration seats on the first try directly depends on dimensional accuracy. In national clinical data, the most common reasons for crown remakes are proximal misfit, marginal errors, and esthetic failure — all accuracy problems. The 3mash ecosystem provides ±20 µm dimensional accuracy repeatable on every print , which lowers remake rates and hidden costs. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Sorunun İngilizcesi (`faq2QuestionEn`) | RICH_TEXT | How much does a crown remake actually cost? | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 2. Cevabın İngilizcesi (`faq2AnswerHtmlEn`) | RICH_TEXT | Estimated at ~$500 — and the majority is not lab fees, but chairside time (re-prep, impression, and seating appointment). Clinical overhead is modeled at ~$375/hr; a single remake consumes most of it. To calculate with your own numbers, visit our cost calculation page . | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Sorunun İngilizcesi (`faq3QuestionEn`) | RICH_TEXT | Why is post-curing so critical in 3D printing? | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 3. Cevabın İngilizcesi (`faq3AnswerHtmlEn`) | RICH_TEXT | Because a print is not finished when it comes out of the machine. Undercure causes brittleness , while overcure causes deformation — you can lose the accuracy gained in the printer during curing. 3mash smart curing units manage parameters automatically to eliminate this risk. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 4. Sorunun İngilizcesi (`faq4QuestionEn`) | RICH_TEXT | Does 3mash only sell equipment? | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 4. Cevabın İngilizcesi (`faq4AnswerHtmlEn`) | RICH_TEXT | No. 3mash offers an integrated production ecosystem : calibrating printer, resin, and curing together, accompanied by consulting, Mash Academy training, and after-sales technical support from dental technicians + engineers . | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 5. Sorunun İngilizcesi (`faq5QuestionEn`) | RICH_TEXT | Can you work with my existing third-party printer? | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 🌐 5. Cevabın İngilizcesi (`faq5AnswerHtmlEn`) | RICH_TEXT | Yes. With our deep technical expertise across resins and printers, our solutions are brand-independent ; we can optimize parameters for your existing equipment to achieve the same result. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 👁️ 1. Soruyu Göster (`showFaq1`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 2. Soruyu Göster (`showFaq2`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 3. Soruyu Göster (`showFaq3`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 4. Soruyu Göster (`showFaq4`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| 👁️ 5. Soruyu Göster (`showFaq5`) | BOOLEAN | true | 👁️ Görünürlük | Evet | — |
| ➕ 6. Soruyu Ekle / Göster (`showFaq6`) | BOOLEAN | false | 👁️ Görünürlük | Evet | — |
| ❓ 6. Soru (`faq6Question`) | RICH_TEXT | Yeni bir sık sorulan soru ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 6 | Evet | — |
| 🌐 6. Sorunun İngilizcesi (`faq6QuestionEn`) | RICH_TEXT | Add a new frequently asked question. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 💬 6. Cevap Metni (`faq6AnswerHtml`) | RICH_TEXT | Bu sorunun yanıtını buraya ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 6 | Evet | — |
| 🌐 6. Cevabın İngilizcesi (`faq6AnswerHtmlEn`) | RICH_TEXT | Add the answer to this question here. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| ➕ 7. Soruyu Ekle / Göster (`showFaq7`) | BOOLEAN | false | 👁️ Görünürlük | Evet | — |
| ❓ 7. Soru (`faq7Question`) | RICH_TEXT | Başka bir sık sorulan soru ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 7 | Evet | — |
| 🌐 7. Sorunun İngilizcesi (`faq7QuestionEn`) | RICH_TEXT | Add another frequently asked question. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 💬 7. Cevap Metni (`faq7AnswerHtml`) | RICH_TEXT | Bu sorunun yanıtını buraya ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 7 | Evet | — |
| 🌐 7. Cevabın İngilizcesi (`faq7AnswerHtmlEn`) | RICH_TEXT | Add the answer to this question here. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| ➕ 8. Soruyu Ekle / Göster (`showFaq8`) | BOOLEAN | false | 👁️ Görünürlük | Evet | — |
| ❓ 8. Soru (`faq8Question`) | RICH_TEXT | Bir diğer sık sorulan soru ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 8 | Evet | — |
| 🌐 8. Sorunun İngilizcesi (`faq8QuestionEn`) | RICH_TEXT | Add one more frequently asked question. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |
| 💬 8. Cevap Metni (`faq8AnswerHtml`) | RICH_TEXT | Bu sorunun yanıtını buraya ekleyin. | ❓ Sık Sorulan Sorular / ➕ Soru 8 | Evet | — |
| 🌐 8. Cevabın İngilizcesi (`faq8AnswerHtmlEn`) | RICH_TEXT | Add the answer to this question here. | ❓ Sık Sorulan Sorular / 🌐 İngilizce İçerikler | Evet | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
