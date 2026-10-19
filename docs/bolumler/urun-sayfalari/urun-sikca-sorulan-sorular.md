---
title: "Ürün Sıkça Sorulan Sorular"
description: "3Mash temasında Ürün Sıkça Sorulan Sorular adıyla kayıtlı bölümün yapılandırma alanları."
---

# Ürün Sıkça Sorulan Sorular

## Bu bölümde

- Yapılandırmada kayıtlı 53 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Ürün Sıkça Sorulan Sorular** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧮 SSS İçin Ürün (`product`) | PRODUCT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | Ürünün mevcut SSS verisini ve ürün bağlamını kullanır. |
| 📝 Bölüm Numarası (`sectionIndex`) | TEXT | 05 | 📝 Bölüm İçeriği | Hayır | SSS bölüm başlığının yanında gösterilen numara. |
| 📝 Bölüm Etiketi (`sectionLabel`) | TEXT | SIKÇA SORULAN SORULAR | 📝 Bölüm İçeriği | Hayır | SSS bölüm numarasının yanındaki etiket. |
| 📝 Başlık (`titleHtml`) | RICH_TEXT | Buraya ürünün sıkça sorulan sorular başlığını yazın. | 📝 Bölüm İçeriği | Hayır | Bölüm başlığını HTML biçimlendirmesiyle düzenler. |
| 📝 Yan Açıklama (`sideHtml`) | RICH_TEXT | Soru alanlarına müşterilerin ürünü almadan önce merak edebileceği konuları, yanıt alanlarına doğru bilgileri ekleyin. | 📝 Bölüm İçeriği | Hayır | Başlığın yanında gösterilen açıklama. |
| ⚡ İlk Soruyu Açık Başlat (`openFirst`) | BOOLEAN | true | ❓ Sorular ve Cevaplar | Hayır | Sayfa açıldığında ilk görünür SSS maddesini açık başlatır. |
| ❓ 1. Soru (`faq1Question`) | TEXT | Buraya ürünle ilgili sık sorulan 1. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 1. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 1. Yanıt (`faq1AnswerHtml`) | RICH_TEXT | Buraya 1. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 1. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| ❓ 2. Soru (`faq2Question`) | TEXT | Buraya ürünle ilgili sık sorulan 2. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 2. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 2. Yanıt (`faq2AnswerHtml`) | RICH_TEXT | Buraya 2. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 2. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| ❓ 3. Soru (`faq3Question`) | TEXT | Buraya ürünle ilgili sık sorulan 3. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 3. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 3. Yanıt (`faq3AnswerHtml`) | RICH_TEXT | Buraya 3. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 3. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| ❓ 4. Soru (`faq4Question`) | TEXT | Buraya ürünle ilgili sık sorulan 4. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 4. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 4. Yanıt (`faq4AnswerHtml`) | RICH_TEXT | Buraya 4. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 4. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| ❓ 5. Soru (`faq5Question`) | TEXT | Buraya ürünle ilgili sık sorulan 5. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 5. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 5. Yanıt (`faq5AnswerHtml`) | RICH_TEXT | Buraya 5. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 5. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| ❓ 6. Soru (`faq6Question`) | TEXT | Buraya ürünle ilgili sık sorulan 6. soruyu yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 6. mevcut SSS maddesinin Türkçe sorusu. |
| 💬 6. Yanıt (`faq6AnswerHtml`) | RICH_TEXT | Buraya 6. sorunun yanıtını yazın. | ❓ Sorular ve Cevaplar / 📋 Mevcut Sorular | Hayır | 6. mevcut SSS maddesinin Türkçe HTML destekli yanıtı. |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #FAFAF7 | 🎨 Renkler | Hayır | SSS bölümünün arka plan rengi. |
| 🎨 Metin Rengi (`textColor`) | COLOR | #0E0E0C | 🎨 Renkler | Hayır | Başlık, soru ve yanıt metinlerinin rengi. |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #E6E6E0 | 🎨 Renkler | Hayır | SSS maddelerini ayıran çizgilerin rengi. |
| 🧮 Gelişmiş SSS Verisi (JSON) (`productTemplateJson`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🧮 Ürün Verisi | Hayır | Ürün verisinden sonra uygulanacak isteğe bağlı FAQ şablon verisi. |
| 🌐 Bölüm Etiketi (İngilizce) (`sectionLabelEn`) | TEXT | FREQUENTLY ASKED QUESTIONS | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Hayır | sectionLabel alanının İngilizce karşılığı. |
| 🌐 Başlık (İngilizce) (`titleHtmlEn`) | RICH_TEXT | Add the frequently asked questions heading here. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Hayır | titleHtml alanının İngilizce karşılığı. |
| 🌐 Yan Açıklama (İngilizce) (`sideHtmlEn`) | RICH_TEXT | Add common pre-purchase questions and accurate answers in the question and answer fields. | 📝 Bölüm İçeriği / 🌐 İngilizce İçerikler | Hayır | sideHtml alanının İngilizce karşılığı. |
| 🌐 1. Soru (İngilizce) (`faq1QuestionEn`) | TEXT | Add the first frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq1Question. |
| 🌐 1. Yanıt (İngilizce) (`faq1AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 1 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq1AnswerHtml. |
| 🌐 2. Soru (İngilizce) (`faq2QuestionEn`) | TEXT | Add the second frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq2Question. |
| 🌐 2. Yanıt (İngilizce) (`faq2AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 2 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq2AnswerHtml. |
| 🌐 3. Soru (İngilizce) (`faq3QuestionEn`) | TEXT | Add the third frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq3Question. |
| 🌐 3. Yanıt (İngilizce) (`faq3AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 3 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq3AnswerHtml. |
| 🌐 4. Soru (İngilizce) (`faq4QuestionEn`) | TEXT | Add the fourth frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq4Question. |
| 🌐 4. Yanıt (İngilizce) (`faq4AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 4 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq4AnswerHtml. |
| 🌐 5. Soru (İngilizce) (`faq5QuestionEn`) | TEXT | Add the fifth frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq5Question. |
| 🌐 5. Yanıt (İngilizce) (`faq5AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 5 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq5AnswerHtml. |
| 🌐 6. Soru (İngilizce) (`faq6QuestionEn`) | TEXT | Add the sixth frequently asked question about this product here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq6Question. |
| 🌐 6. Yanıt (İngilizce) (`faq6AnswerHtmlEn`) | RICH_TEXT | Add the answer to question 6 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq6AnswerHtml. |
| ❓ 7. Yeni Soru (`faq7Question`) | TEXT | Yeni soru 7 metnini buraya girin. | ❓ Sorular ve Cevaplar / ➕ Eklenebilir Sorular | Hayır | Yeni 7. FAQ slotunun Türkçe sorusu. |
| 💬 7. Yeni Yanıt (`faq7AnswerHtml`) | RICH_TEXT | 7. yeni sorunun yanıtını buraya ekleyin. | ❓ Sorular ve Cevaplar / ➕ Eklenebilir Sorular | Hayır | Yeni 7. FAQ slotunun Türkçe HTML destekli yanıtı. |
| 🌐 7. Yeni Soru (İngilizce) (`faq7QuestionEn`) | TEXT | Enter the text for new question 7. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq7Question. |
| 🌐 7. Yeni Yanıt (İngilizce) (`faq7AnswerHtmlEn`) | RICH_TEXT | Add the answer for new question 7 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq7AnswerHtml. |
| ❓ 8. Yeni Soru (`faq8Question`) | TEXT | Yeni soru 8 metnini buraya girin. | ❓ Sorular ve Cevaplar / ➕ Eklenebilir Sorular | Hayır | Yeni 8. FAQ slotunun Türkçe sorusu. |
| 💬 8. Yeni Yanıt (`faq8AnswerHtml`) | RICH_TEXT | 8. yeni sorunun yanıtını buraya ekleyin. | ❓ Sorular ve Cevaplar / ➕ Eklenebilir Sorular | Hayır | Yeni 8. FAQ slotunun Türkçe HTML destekli yanıtı. |
| 🌐 8. Yeni Soru (İngilizce) (`faq8QuestionEn`) | TEXT | Enter the text for new question 8. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq8Question. |
| 🌐 8. Yeni Yanıt (İngilizce) (`faq8AnswerHtmlEn`) | RICH_TEXT | Add the answer for new question 8 here. | ❓ Sorular ve Cevaplar / 🌐 İngilizce SSS | Hayır | English version of faq8AnswerHtml. |
| 👁️ 1. Soruyu Göster (`showFaqItem1`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 1. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| 👁️ 2. Soruyu Göster (`showFaqItem2`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 2. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| 👁️ 3. Soruyu Göster (`showFaqItem3`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 3. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| 👁️ 4. Soruyu Göster (`showFaqItem4`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 4. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| 👁️ 5. Soruyu Göster (`showFaqItem5`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 5. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| 👁️ 6. Soruyu Göster (`showFaqItem6`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | Mevcut 6. soru ve yanıtı gösterir; varsayılan olarak açıktır. |
| ➕ 7. Yeni Soru Yuvasını Göster (`showFaqItem7`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | Yeni 7. FAQ slotunu açar; varsayılan olarak kapalıdır. |
| ➕ 8. Yeni Soru Yuvasını Göster (`showFaqItem8`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | Yeni 8. FAQ slotunu açar; varsayılan olarak kapalıdır. |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
