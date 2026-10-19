---
sidebar_position: 2
title: Dil, çeviri ve URL rotaları
---

# Dil, çeviri ve URL rotaları

## Bu bölümde

Bu bölüm, Türkçe ve İngilizce içerik alanlarını, sayfa rotalarını ve slug değerlerini açıklar.

## Dil seçimi ve çevrilen metinler

Studio üst çubuğunda `TR Türkçe` göstergesi görülmüştür. Bu, ekrandaki dil göstergesini belgeler; seçimin tüm alanlara nasıl uygulandığını veya mağazadaki her alanın İngilizce çevirisinin hazır olduğunu kanıtlamaz.

Üst Menü V2 yapılandırmasında duyuru bandı için Türkçe ve İngilizce metin, bayrak görseli ve dil seçiciyi açıp kapatan alanlar kayıtlıdır. Yapılandırmadaki varsayılan değerler mağazanın güncel değerleriyle aynı olmak zorunda değildir. Alanların tam listesi için [Üst Menü V2 alanlarına](../bolumler/anasayfa-ortak-alanlar/ust-menu-v2.md) bakın.

## Rota ve slug farkı

- **Rota**, tema içindeki bir bağlantının hedef yoludur. Örnek: `/cart`.
- **Slug**, bir sayfa veya ürün adresinin ayırt edici URL parçasıdır. Örnek: `3d-yazicilar`.
- `/cart` gibi bir rota alanı, mağazadaki sayfanın slug'ını değiştirmez.
- İngilizce slug'ı Türkçe addan türetilmemelidir; kodda veya mağaza ayarında açıkça tanımlanmamışsa **DOĞRULANACAK** olarak bırakılmalıdır.

Anasayfa Üst Menü ayarlarında `Sepet Sayfası Rotası` alanı `/cart` değerini göstermektedir. Bu ekran görüntüsü alanın değerini belgeler; rotanın canlı mağazada açıldığını doğrulamaz.

## Kodda tanımlı rota örnekleri

| Türkçe yol / slug | Kodda tanımlı İngilizce yol | Kanıt durumu |
|---|---|---|
| `/3d-yazicilar` | `/en/3d-printers` | Tema kodundaki açık rota eşlemesi; canlı mağazada ayrıca doğrulanmadı. |
| `mash-p16l-385nm-16k-dental-3d-yazici` | `/en/mash-p16l-385nm-16k-dental-3d-printer` | Tema kodundaki ürün eşlemesi; canlı mağazada ayrıca doğrulanmadı. |

Bu örnekler bütün sayfa ve ürünlerin İngilizce karşılığı olduğu anlamına gelmez. Tema kodu yalnızca açık eşlemesi bulunan bazı yolları tanır; eşleme yoksa adresi çevirerek yeni slug oluşturulmamalıdır.

> ℹ️ **Geliştirici notu:** Tema kodu metinleri mevcut dile göre seçer ve tanımlı rotaları İngilizce yola eşler. Bazı ürün listeleri İngilizce dilde yalnızca açık karşılığı bulunan ürünleri gösterir. Bu davranış, Studio'daki her içeriğin çevrildiğini veya rotaların yayında çalıştığını kanıtlamaz.

## Güvenli kontrol sırası

1. Studio'da düzenlenen alanın adını ve hangi bağlantıyı kontrol ettiğini belirleyin (örneğin metin alanı veya `/cart` gibi bir iç rota).
2. İngilizce karşılığı gereken bağlantıyı kodda tanımlı eşlemelerle karşılaştırın.
3. Önizleme ekranında her iki dil seçeneğinde de yönlendirmelerin ve metinlerin doğru çalıştığını kontrol edin.

## Sonraki adım

[Yayın öncesi kontrol listesini açın](../yayinlama/01-kontrol-listesi.md).