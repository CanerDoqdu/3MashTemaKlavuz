---
title: "404 Sayfası"
description: "3Mash temasında 404 Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# 404 Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 14 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **404 Sayfası** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Başlık Metni (`titleText`) | TEXT | Aradığınız Sayfa Bulunamadı. | 📝 404 Hata İçeriği | Hayır | — |
| 📝 Ana Sayfa Buton Metni (`buttonText`) | TEXT | DEVAM | 🔗 Ana Sayfa Bağlantısı | Hayır | — |
| 🔗 Ana Sayfa Bağlantısı (`buttonHref`) | TEXT | / | 🔗 Ana Sayfa Bağlantısı | Hayır | — |
| 📐 Minimum Yükseklik (vh) (`minHeight`) | NUMBER | 100 | 🎨 Görünüm ve Renkler | Hayır | 40–140 vh aralığında uygulanır. |
| 🎨 Buton Metin Rengi (`buttonTextColor`) | COLOR | #ffffff | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Buton Arka Plan Rengi (`buttonBackgroundColor`) | COLOR | transparent | 🎨 Görünüm ve Renkler | Hayır | — |
| 🎨 Bölüm Arka Plan Rengi (`backgroundColor`) | COLOR | #0E0E0C | 🎨 Görünüm ve Renkler | Hayır | — |
| 🔢 Hata Kodu (`errorCodeText`) | TEXT | 404 | 📝 404 Hata İçeriği | Hayır | — |
| 📝 Açıklama Metni (`descriptionText`) | TEXT | Bu bağlantı taşınmış, kaldırılmış veya adres hatalı yazılmış olabilir. Ana sayfaya dönerek 3mash ürün ve içeriklerine yeniden ulaşabilirsiniz. | 📝 404 Hata İçeriği | Hayır | — |
| 🌐 İngilizce Başlık Metni (`titleTextEn`) | TEXT | Page Not Found. | 📝 404 Hata İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Açıklama Metni (`descriptionTextEn`) | TEXT | This link may have been moved, removed, or mistyped. You can return to the homepage to explore 3mash products and content. | 📝 404 Hata İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 🌐 İngilizce Buton Metni (`buttonTextEn`) | TEXT | Back to home | 📝 404 Hata İçeriği / 🌐 İngilizce İçerikleri | Hayır | — |
| 👁️ Açıklamayı Göster (`showDescription`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Ana Sayfa Butonunu Göster (`showHomeButton`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
