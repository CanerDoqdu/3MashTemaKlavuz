---
title: "SSS Sayfası"
description: "3Mash temasında SSS Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# SSS Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 83 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **SSS Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 👁️ Başlık Alanını Göster (`showPageTitle`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| 📝 Sayfa Başlığı (`titleText`) | TEXT | Sık Sorulan Sorular | 📝 Sık Sorulan Sorular / 📝 Sayfa Başlığı ve Tanıtım | Hayır | — |
| 📝 Reçine Bölüm Başlığı (`resinSectionTitle`) | TEXT | 3D Yazıcı Reçineleri | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 1 (`resinQuestion1`) | TEXT | 1 kg Custom Composite (Kompozit) reçinesinden kaç üye iş alabiliriz ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 1 (`resinAnswer1`) | RICH_TEXT | 1000-1200 üye arasında iş alabilirsiniz. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 2 (`resinQuestion2`) | TEXT | Kompozit reçinesinin kırılma direnci nedir ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 2 (`resinAnswer2`) | RICH_TEXT | Kompozit reçinesinin kırılma direnci, baskılar 3D Printer’dan çıkartılıp alkol ile yıkandıktan sonra 135-145 Mpa arasındadır. Baskı sonrası yapılan post kürleme işleminden sonra ise bu değer 150-155 Mpa ‘a kadar çıkmaktadır. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 3 (`resinQuestion3`) | TEXT | Kompozit reçinesi hasta ağzında tat veya koku bırakır mı ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 3 (`resinAnswer3`) | RICH_TEXT | Kompozit reçinesi hasta ağız da tat ve koku bırakmaz. Ayrıca Custom Composite Resin biyouyumludur. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 4 (`resinQuestion4`) | TEXT | Kompozit reçinesinin dirençli olması için tavsiye edilen tasarım parametreleri nelerdir ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 4 (`resinAnswer4`) | RICH_TEXT | Kompozit reçinesinin dirençli olması için tavsiye ettiğimiz en önemli parametre duvar kalınlığıdır. Tasarlanan işin duvar kalınlığının minimum 0,08 mm olması gerekmektedir. Hasta ağzına yapılacak geçici işler eğer 5 üyenin üzerinde ise 2 parça halinde gönderilmesi hasta ağzında oluşabilecek basıncı azaltacak ve dayanımı arttıracaktır. Full işlerde hasta ağzına uygulanacak geçicinin 3-4 üyelik parçalara bölünmesini tavsiye ederiz. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 5 (`resinQuestion5`) | TEXT | Kompozit reçinesi klinik uygulamalar için şırınga kompozitler ile uyumlu mudur ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 5 (`resinAnswer5`) | RICH_TEXT | Kompozit reçinesi klinik uygulamalarında kullanılan şırınga kompozitler ile birebir uyumludur. Yapılan geçici işlerin üzerine şırınga kompozitler ile istenilen ekleme yapılabilir. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 6 (`resinQuestion6`) | TEXT | Kompozit reçinesi vakaya özgü olarak daimi amaç ile kullanılabilir mi? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 6 (`resinAnswer6`) | RICH_TEXT | Kompozit reçinemiz; tek üyelerde, laminelerde, inley, onley ve overlay işlemlerinde daimi olarak kullanılabilir. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 7 (`resinQuestion7`) | TEXT | 1 kg Custom Model reçinesinden kaç model baskısı alabiliriz ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 7 (`resinAnswer7`) | RICH_TEXT | 40-50 model arasında baskı alabilirsiniz. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 8 (`resinQuestion8`) | TEXT | Model reçinesi ile implant kütüphanelerini uyumlayabilir miyiz ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 8 (`resinAnswer8`) | RICH_TEXT | İmplant kütüphaneleri tasarım programlarının içindedir. Üreteceğiniz güdüklü veya analoglu modellerde, kullandığınız 3D yazıcıya özgü parametreler ile model reçinesini uyumlayabilirsiniz. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 9 (`resinQuestion9`) | TEXT | Güdüklü model üretimi için tavsiye ettiğiniz parametreleriniz bulunuyor mu ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 9 (`resinAnswer9`) | RICH_TEXT | Güdüklü model üretimi için parametrelerimiz hazırdır. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| ❓ Reçine Sorusu 10 (`resinQuestion10`) | TEXT | 1 kg Custom Cast (Döküm) reçinesinden kaç üye iş alabiliriz ? | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Reçine Yanıtı 10 (`resinAnswer10`) | RICH_TEXT | 2000 – 2500 üye arasında iş alabilirsiniz. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 📝 Yazıcı Bölüm Başlığı (`printerSectionTitle`) | TEXT | 3D Yazıcılar | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| ❓ Yazıcı Sorusu 1 (`printerQuestion1`) | TEXT | 3D yazıcı teknolojileri nelerdir ? | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 📝 Yazıcı Yanıtı 1 (`printerAnswer1`) | RICH_TEXT | SLA (Stereolitografi) teknolojisi reçineyi ışıkla sertleştirerek çalışan bir 3D Printer teknolojisidir. Reçineyi kürleyecek ışık kaynağı lazerdir. DLP (Digital Light Processing) Stereolitografi’ye benzer bir sürecin olduğu, fotopolimer reçinenin kullanıldığı katmanlı imalat teknolojisidir.En büyük fark ışık kaynağının (projeksiyon) olmasıdır. LCD (Liquid Crystal Display) 3D yazıcı teknolojisi DLP 3D yazıcı teknolojisi ie aynı şekilde çalışır. Tek farkı ışık kaynağı olarak LCD ve LED kullanır. Maliyet olarak uygundur ve yüksek kalitede baskılar verebilirler. | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| ❓ Yazıcı Sorusu 2 (`printerQuestion2`) | TEXT | Model ya da üye sayısı ile baskı süresi nasıl değişir ? | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 📝 Yazıcı Yanıtı 2 (`printerAnswer2`) | RICH_TEXT | Kullandığınız 3D yazıcı teknolojisi ile doğru orantılı olarak değişkenlik gösterir. Eğer SLA (Lazer Teknolojisi) bir 3D yazıcısı kullanıyorsanız üye sayısı ile doğru orantılı olarak baskı süreniz de artacaktır. Fakat DLP (Projektör veya LCD Teknolojisi) bir 3D yazıcı kullanıyorsanız üye sayısının hiçbir önemi yoktur. Model yüksekliği en fazla olan .stl datası baskı sürenizi belirleyecektir. Örneğin; 3 adet yazıcıda 51 üye bir iş başlatacağınızı varsayalım. Baskınız 50 üye kron (1-2 cm uzunluğunda) ve 1 üye de implant üstü (3-4 cm uzunluğunda) olsun. Cihazınız yüksekliği en fazla olan implant üstü işinizin baskı süresini hesaplayacaktır. | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| ❓ Yazıcı Sorusu 3 (`printerQuestion3`) | TEXT | Tasarım programları ile ilgili eğitim veriyor musunuz ? | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 📝 Yazıcı Yanıtı 3 (`printerAnswer3`) | RICH_TEXT | Tasarım programları ile ilgili ücretli eğitim vermiyoruz. Fakat düzenli olarak yaptığımız Webinar’lar ile bizi takip eden bütün teknisyen arkadaşlarımıza tasarım programları ile ilgili bilgilerimizi aktarıyoruz. | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #101010 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #6f6f6f | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Soru Arka Planı (`panelColor`) | COLOR | #ebebeb | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Çizgi Rengi (`lineColor`) | COLOR | #e5e5e5 | 🎨 Görünüm ve Renkler | Hayır | — |
| ↔️ Maksimum İçerik Genişliği (`maxWidth`) | NUMBER | 1280 | 📐 Sayfa Düzeni | Hayır | — |
| 🌐 İngilizce Sayfa Başlığı (`titleTextEn`) | TEXT | Frequently Asked Questions | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🏷️ Üst Etiket (`kickerText`) | TEXT | SSS | 📝 Sık Sorulan Sorular / 📝 Sayfa Başlığı ve Tanıtım | Hayır | — |
| 🌐 İngilizce Üst Etiket (`kickerTextEn`) | TEXT | FAQ | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 📝 Tanıtım Metni (`introText`) | TEXT | Dental üretim akışı, reçine kullanımı ve 3D yazıcı süreçlerinde en sık gelen soruları tek yerde topladık. | 📝 Sık Sorulan Sorular / 📝 Sayfa Başlığı ve Tanıtım | Hayır | — |
| 🌐 İngilizce Tanıtım Metni (`introTextEn`) | TEXT | We gathered the most frequent questions on dental manufacturing workflows, resin usage, and 3D printing. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Bölüm Başlığı (`resinSectionTitleEn`) | TEXT | 3D Printer Resins | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Bölüm Başlığı (`printerSectionTitleEn`) | TEXT | 3D Printers | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Reçine Sorularını Göster (`showResinFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Yazıcı Sorularını Göster (`showPrinterFaq`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 🎨 Vurgu Rengi (`accentColor`) | COLOR | #C7F136 | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Koyu Alan Rengi (`darkColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 1 (`resinQuestion1En`) | TEXT | How many units of work can we get from 1 kg of Custom Composite resin? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 1 (`resinAnswer1En`) | RICH_TEXT | You can take on jobs of between 1000-1200 units. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 2 (`resinQuestion2En`) | TEXT | What is the fracture resistance of the composite resin? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 2 (`resinAnswer2En`) | RICH_TEXT | The fracture resistance of composite resin is between 135-145 MPa after prints are removed from the 3D printer and washed with alcohol. After post-curing following printing, this value rises to as much as 150-155 MPa. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 3 (`resinQuestion3En`) | TEXT | Does the composite resin leave a taste or odor in the patient's mouth? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 3 (`resinAnswer3En`) | RICH_TEXT | Composite resin leaves no taste or odor in the patient's mouth. Custom Composite Resin is also biocompatible. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 4 (`resinQuestion4En`) | TEXT | What are the recommended design parameters for the composite resin to be resistant? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 4 (`resinAnswer4En`) | RICH_TEXT | The most important parameter we recommend for composite resin durability is wall thickness. The wall thickness of the designed piece should be at least 0.08 mm. If the temporary work to be placed in the patient's mouth has more than 5 units, sending it in 2 pieces will reduce the pressure that could build up in the patient's mouth and increase durability. For full-arch cases, we recommend splitting the temporary into pieces of 3-4 units. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 5 (`resinQuestion5En`) | TEXT | Is the composite resin compatible with syringe composites for clinical applications? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 5 (`resinAnswer5En`) | RICH_TEXT | Composite resin is fully compatible with the syringe composites used in clinical applications. The desired additions can be made on top of temporary work using syringe composites. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 6 (`resinQuestion6En`) | TEXT | Can the composite resin be used for permanent purposes on a case-specific basis? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 6 (`resinAnswer6En`) | RICH_TEXT | Our composite resin can be used permanently in single units, veneers, inlays, onlays, and overlay procedures. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 7 (`resinQuestion7En`) | TEXT | How many model prints can we get from 1 kg of Custom Model resin? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 7 (`resinAnswer7En`) | RICH_TEXT | You can print between 40-50 models. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 8 (`resinQuestion8En`) | TEXT | Can we match implant libraries with the model resin? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 8 (`resinAnswer8En`) | RICH_TEXT | Implant libraries are included in the design software. For abutment or analog models you produce, you can match the model resin with parameters specific to the 3D printer you use. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 9 (`resinQuestion9En`) | TEXT | Do you have recommended parameters for stump model production? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 9 (`resinAnswer9En`) | RICH_TEXT | Our parameters are ready for abutment model production. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Sorusu 10 (`resinQuestion10En`) | TEXT | How many units of work can we get from 1 kg of Custom Cast resin? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Reçine Yanıtı 10 (`resinAnswer10En`) | RICH_TEXT | You can take on jobs of between 2000–2500 units. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Sorusu 1 (`printerQuestion1En`) | TEXT | What are 3D printer technologies? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Yanıtı 1 (`printerAnswer1En`) | RICH_TEXT | SLA (Stereolithography) is a 3D printer technology that works by hardening resin with light. The light source that cures the resin is a laser. DLP (Digital Light Processing) is a layered manufacturing technology with a process similar to Stereolithography, using photopolymer resin. The biggest difference is that the light source is a projection. LCD (Liquid Crystal Display) 3D printer technology works the same way as DLP 3D printer technology. The only difference is that it uses LCD and LED as the light source. It's affordable in terms of cost and can produce high-quality prints. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Sorusu 2 (`printerQuestion2En`) | TEXT | How does print time change with the number of models or units? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Yanıtı 2 (`printerAnswer2En`) | RICH_TEXT | This varies in direct proportion to the 3D printer technology you use. If you use an SLA (laser technology) 3D printer, your print time will increase in direct proportion to the number of units. But if you use a DLP (projector or LCD technology) 3D printer, the number of units doesn't matter at all. The .stl file with the greatest model height will determine your print time. For example, suppose you're going to start a 51-unit job on 3 printers. Let's say your print consists of 50 crown units (1-2 cm long) and 1 implant-abutment unit (3-4 cm long). Your device will calculate the print time based on your implant-abutment job, which has the greatest height. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Sorusu 3 (`printerQuestion3En`) | TEXT | Do you provide training on design software? | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Yazıcı Yanıtı 3 (`printerAnswer3En`) | RICH_TEXT | We do not offer paid training on design software. However, through the webinars we hold regularly, we share our knowledge of design software with all the technicians who follow us. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Ek Reçine Sorusu Ekle / Göster (`showExtraResinFaq`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ Ek Reçine Sorusu (`resinQuestion11`) | TEXT | Yeni reçine sorusu | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 🌐 İngilizce Ek Reçine Sorusu (`resinQuestion11En`) | TEXT | New resin question | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Ek Reçine Yanıtı (`resinAnswer11`) | RICH_TEXT | Yanıtınızı buraya yazın. | 📝 Sık Sorulan Sorular / 🧪 Reçine Soruları | Hayır | — |
| 🌐 İngilizce Ek Reçine Yanıtı (`resinAnswer11En`) | RICH_TEXT | Enter the answer here. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Ek Yazıcı Sorusu Ekle / Göster (`showExtraPrinterFaq`) | BOOLEAN | false | 👁️ Görünürlük | Hayır | — |
| ➕ Ek Yazıcı Sorusu (`printerQuestion4`) | TEXT | Yeni yazıcı sorusu | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 🌐 İngilizce Ek Yazıcı Sorusu (`printerQuestion4En`) | TEXT | New printer question | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |
| ➕ Ek Yazıcı Yanıtı (`printerAnswer4`) | RICH_TEXT | Yanıtınızı buraya yazın. | 📝 Sık Sorulan Sorular / 🖨️ 3D Yazıcı Soruları | Hayır | — |
| 🌐 İngilizce Ek Yazıcı Yanıtı (`printerAnswer4En`) | RICH_TEXT | Enter the answer here. | 📝 Sık Sorulan Sorular / 🌐 İngilizce İçerikleri | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
