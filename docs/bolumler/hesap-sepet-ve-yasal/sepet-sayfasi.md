---
title: "Sepet Sayfası"
description: "3Mash temasında Sepet Sayfası adıyla kayıtlı bölümün yapılandırma alanları."
---

# Sepet Sayfası

## Bu bölümde

- Yapılandırmada kayıtlı 74 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Sepet Sayfası** adıyla **section** olarak tanımlıdır. Bu bölüm, mağaza sayfalarınızda ilgili alanları özelleştirmek için kullanılır.

## Nerede görünür?

İlgili sayfa şablonunda Studio sol menüsü üzerinden seçilerek düzenlenebilir.

## Studio'da ekleme ve düzenleme

Studio editöründe sol paneldeki bölüm listesinden bu bölümü ekleyebilir, sırasını değiştirebilir veya görünürlüğünü yönetebilirsiniz.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 📝 Sepet Başlığı (`titleText`) | TEXT | Sepetim | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 📝 Ödeme Düğmesi Metni (`checkoutButtonText`) | TEXT | ALIŞVERİŞİ TAMAMLA | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 📝 Alışverişe Devam Metni (`continueShoppingText`) | TEXT | Alışverişe devam et | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🔗 Alışverişe Devam Bağlantısı (`continueShoppingHref`) | TEXT | /dental-3d-yazici-recineleri | 🔗 Sepet Bağlantıları | Hayır | — |
| 📝 Ara Toplam Metni (`subtotalText`) | TEXT | Ara Toplam | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 📝 Ürünü Kaldır Metni (`removeText`) | TEXT | Kaldır | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 📝 Yüklenme Metni (`loadingText`) | TEXT | Sepetiniz yükleniyor... | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🎨 Sepet Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Renkler | Hayır | — |
| 🎨 Ana Yazı Rengi (`textColor`) | COLOR | #000000 | 🎨 Renkler | Hayır | — |
| 🎨 İkincil Yazı Rengi (`mutedTextColor`) | COLOR | #777777 | 🎨 Renkler | Hayır | — |
| 🎨 Ayırıcı Çizgi Rengi (`lineColor`) | COLOR | #e8e8e8 | 🎨 Renkler | Hayır | — |
| 🎨 Düğme Arka Plan Rengi (`buttonBackgroundColor`) | COLOR | #000000 | 🎨 Renkler | Hayır | — |
| 🎨 Düğme Yazı Rengi (`buttonTextColor`) | COLOR | #ffffff | 🎨 Renkler | Hayır | — |
| 🌐 İngilizce Sepet Başlığı (`titleTextEn`) | TEXT | My Cart | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Yüklenme Metni (`loadingTextEn`) | TEXT | Loading your cart... | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ara Toplam Metni (`subtotalTextEn`) | TEXT | Subtotal | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ödeme Düğmesi Metni (`checkoutButtonTextEn`) | TEXT | PROCEED TO CHECKOUT | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Alışverişe Devam Metni (`continueShoppingTextEn`) | TEXT | Continue shopping | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Ürünü Kaldır Metni (`removeTextEn`) | TEXT | Remove | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Sepet Açıklama Metni (`cartDescriptionText`) | TEXT | \{count\} ürün sepetinizde. Siparişi tamamlamadan önce ürünleri ve adetleri kontrol edin. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | Sepet adedini göstermek için \{count\} yer tutucusunu koruyun. |
| 🌐 İngilizce Sepet Açıklama Metni (`cartDescriptionTextEn`) | TEXT | \{count\} items in your cart. Check your items and quantities before checking out. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | Cart item count is inserted at \{count\}; keep this placeholder. |
| 📝 Ürün Adı Yedek Metni (`productFallbackText`) | TEXT | Ürün | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Ürün Adı Yedek Metni (`productFallbackTextEn`) | TEXT | Product | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Ürünü Kaldır Erişilebilirlik Metni (`removeItemAriaLabel`) | TEXT | \{product\} sepetten kaldır | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | Ürün adının otomatik eklenmesi için \{product\} yer tutucusunu koruyun. |
| 🌐 İngilizce Ürünü Kaldır Erişilebilirlik Metni (`removeItemAriaLabelEn`) | TEXT | Remove \{product\} from cart | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | The product name is inserted at \{product\}; keep this placeholder. |
| 📝 Adet Metni (`quantityLabelText`) | TEXT | Adet | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Adet Metni (`quantityLabelTextEn`) | TEXT | Quantity | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Adedi Azalt Erişilebilirlik Metni (`decreaseQuantityAriaLabel`) | TEXT | Adedi azalt | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Adedi Azalt Erişilebilirlik Metni (`decreaseQuantityAriaLabelEn`) | TEXT | Decrease quantity | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Adedi Artır Erişilebilirlik Metni (`increaseQuantityAriaLabel`) | TEXT | Adedi artır | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Adedi Artır Erişilebilirlik Metni (`increaseQuantityAriaLabelEn`) | TEXT | Increase quantity | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Adet Güncelleme Hata Metni (`updateItemErrorText`) | TEXT | Sepet güncellenemedi. Lütfen tekrar deneyin. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Adet Güncelleme Hata Metni (`updateItemErrorTextEn`) | TEXT | The cart could not be updated. Please try again. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Ürün Kaldırma Hata Metni (`removeItemErrorText`) | TEXT | Ürün sepetten kaldırılamadı. Lütfen tekrar deneyin. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Ürün Kaldırma Hata Metni (`removeItemErrorTextEn`) | TEXT | The item could not be removed. Please try again. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Sepet Yüklenemedi Metni (`cartLoadErrorText`) | TEXT | Sepet yüklenemedi. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Sepet Yüklenemedi Metni (`cartLoadErrorTextEn`) | TEXT | The cart could not be loaded. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Yeniden Dene Düğme Metni (`retryButtonText`) | TEXT | Tekrar dene | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Yeniden Dene Düğme Metni (`retryButtonTextEn`) | TEXT | Try again | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Boş Sepet Metni (`cartEmptyText`) | TEXT | Sepetiniz boş. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Boş Sepet Metni (`cartEmptyTextEn`) | TEXT | Your cart is empty. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Sipariş Özeti Başlığı (`summaryTitleText`) | TEXT | Sipariş Özeti | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Sipariş Özeti Başlığı (`summaryTitleTextEn`) | TEXT | Order Summary | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Düzeltme Satırı Metni (`adjustmentLabelText`) | TEXT | Düzeltme | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Düzeltme Satırı Metni (`adjustmentLabelTextEn`) | TEXT | Adjustment | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Vergi Satırı Metni (`taxLabelText`) | TEXT | Vergi | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Vergi Satırı Metni (`taxLabelTextEn`) | TEXT | Tax | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Toplam Satırı Metni (`totalLabelText`) | TEXT | Toplam | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Toplam Satırı Metni (`totalLabelTextEn`) | TEXT | Total | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Uygulanan Kupon Metni (`couponAppliedText`) | TEXT | uygulandı | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Uygulanan Kupon Metni (`couponAppliedTextEn`) | TEXT | applied | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ♿ Kuponu Kaldır Erişilebilirlik Metni (`couponRemoveAriaLabel`) | TEXT | Promosyon kodunu kaldır | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kuponu Kaldır Erişilebilirlik Metni (`couponRemoveAriaLabelEn`) | TEXT | Remove promo code | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Kupon Alanı Yer Tutucusu (`couponPlaceholderText`) | TEXT | Promosyon kodu giriniz | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Alanı Yer Tutucusu (`couponPlaceholderTextEn`) | TEXT | Enter promo code | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Kupon Uygulama Düğme Metni (`couponApplyText`) | TEXT | KULLAN | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Uygulama Düğme Metni (`couponApplyTextEn`) | TEXT | APPLY | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⏳ Kupon Yüklenme Metni (`couponLoadingText`) | TEXT | ... | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Yüklenme Metni (`couponLoadingTextEn`) | TEXT | ... | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Kupon Ekleme Düğme Metni (`couponStartText`) | TEXT | Promosyon kodu ekle | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Ekleme Düğme Metni (`couponStartTextEn`) | TEXT | Add promo code | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ✅ Kupon Başarılı Metni (`couponSuccessText`) | TEXT | İndirim kodu uygulandı. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Başarılı Metni (`couponSuccessTextEn`) | TEXT | Discount code applied. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Geçersiz Kupon Metni (`couponInvalidText`) | TEXT | Geçersiz indirim kodu. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Geçersiz Kupon Metni (`couponInvalidTextEn`) | TEXT | Invalid discount code. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Kupon Kaldırma Hata Metni (`couponRemoveErrorText`) | TEXT | Promosyon kodu kaldırılamadı. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Kupon Kaldırma Hata Metni (`couponRemoveErrorTextEn`) | TEXT | Promo code could not be removed. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| ⚠️ Ödeme Yönlendirme Hata Metni (`checkoutErrorText`) | TEXT | Ödeme sayfasına yönlendirilemedi, lütfen tekrar deneyin. | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Ödeme Yönlendirme Hata Metni (`checkoutErrorTextEn`) | TEXT | Could not open the checkout page. Please try again. | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |
| 👁️ Sepet Başlığını Göster (`showCartTitle`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Kupon Alanını Göster (`showCouponCode`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 👁️ Alışverişe Devam Bağlantısını Göster (`showContinueShoppingLink`) | BOOLEAN | true | 👁️ Görünürlük | Hayır | — |
| 📝 Boş Sepet Ödeme Düğmesi Metni (`emptyCheckoutButtonText`) | TEXT | ALIŞVERİŞİ TAMAMLA | 📝 Sepet Metinleri / 🇹🇷 Türkçe İçerikler | Hayır | — |
| 🌐 İngilizce Boş Sepet Ödeme Düğmesi Metni (`emptyCheckoutButtonTextEn`) | TEXT | CHECKOUT | 📝 Sepet Metinleri / 🌐 İngilizce İçerikler | Hayır | — |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Düzenleme yaparken alan etiketlerini ve içerik gereksinimlerini dikkate almanız önerilir.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
