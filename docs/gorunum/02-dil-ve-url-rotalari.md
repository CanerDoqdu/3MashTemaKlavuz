---
sidebar_position: 2
title: Dil, çeviri ve URL rotaları
---

# Dil, çeviri ve URL rotaları

## Bu bölümde

Bu bölüm, Türkçe ve İngilizce içerik alanlarını, sayfa rotalarını ve slug değerlerini açıklar.

## Dil seçimi ve çevrilen metinler

Üst Menü V2 yapılandırmasında duyuru bandı için Türkçe ve İngilizce metin, bayrak görseli ve dil seçiciyi açıp kapatan alanlar kayıtlıdır. Yapılandırmadaki varsayılan değerler mağazanın güncel değerleriyle aynı olmak zorunda değildir. Alanların tam listesi için [Üst Menü V2 alanlarına](../bolumler/anasayfa-ortak-alanlar/ust-menu-v2.md) bakın.

## İngilizce sayfa yapısı ve bölüm prop'ları

İngilizce dil desteği için her bölümde ayrı prop alanları bulunur. İngilizce içerik eklemek veya düzenlemek istediğinizde ilgili bölümün sağ panelindeki İngilizce metin, başlık ve açıklama prop'larını kullanmanız gerekir. Bu prop'lar bölümden bölüme farklılık gösterir; her bölümün kendi İngilizce içerik alanları vardır.

Detaylı alan listesi için [Bölüm Rehberi](../bolumler/index.md) altındaki ilgili bölüm sayfalarına bakın.

## Rota ve slug farkı

- **Rota**, tema içindeki bir bağlantının hedef yoludur. Örnek: `/cart`.
- **Slug**, bir sayfa veya ürün adresinin ayırt edici URL parçasıdır. Örnek: `3d-yazicilar`.
- `/cart` gibi bir rota alanı, mağazadaki sayfanın slug'ını değiştirmez.
- İngilizce slug değeri kodda veya mağaza ayarlarında tanımlı olan rotalarla eşleşmelidir.

Anasayfa Üst Menü ayarlarında `Sepet Sayfası Rotası` alanı `/cart` değerini göstermektedir.

## Kodda tanımlı rota örnekleri

| Türkçe yol / slug | Kodda tanımlı İngilizce yol | Açıklama |
|---|---|---|
| `/3d-yazicilar` | `/en/3d-printers` | Tema kodunda tanımlı rota eşlemesi. |
| `mash-p16l-385nm-16k-dental-3d-yazici` | `/en/mash-p16l-385nm-16k-dental-3d-printer` | Tema kodunda tanımlı ürün eşlemesi. |

Bu örnekler bütün sayfa ve ürünlerin İngilizce karşılığı olduğu anlamına gelmez. Tema kodu yalnızca açık eşlemesi bulunan bazı yolları tanır; eşleme yoksa adresi çevirerek yeni slug oluşturulmamalıdır.

> **Geliştirici notu:** Tema kodu metinleri mevcut dile göre seçer ve tanımlı rotaları İngilizce yola eşler. Bazı ürün listeleri İngilizce dilde yalnızca açık karşılığı bulunan ürünleri gösterir. Çoklu dil ayarlarının mağaza genelinde tutarlı şekilde yapılandırılması önerilir.

## Güvenli kontrol sırası

1. Studio'da düzenlenen alanın adını ve hangi bağlantıyı kontrol ettiğini belirleyin (örneğin metin alanı veya `/cart` gibi bir iç rota).
2. İngilizce karşılığı gereken bağlantıyı kodda tanımlı eşlemelerle karşılaştırın.
3. Önizleme ekranında her iki dil seçeneğinde de yönlendirmelerin ve metinlerin doğru çalıştığını kontrol edin.

## Sonraki adım

[Tema yayınlama ve önizleme adımlarını açın](../yayinlama/01-tema-yayinlama.md).
