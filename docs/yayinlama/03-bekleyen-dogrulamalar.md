---
sidebar_position: 3
title: Bekleyen doğrulamalar ve ekran görüntüleri
---

# Bekleyen doğrulamalar ve ekran görüntüleri

## Bu bölümde

Bu sürümde kod ve ekran üzerinden doğrulananlarla, ek bilgi veya erişim gerektiren işleri ayırt edeceksin.

## Ön koşullar

- Tema proje klasörüne ve geçerli bir ikas Studio bağlantısına erişim gerekir.
- Geliştirme önizlemesi için tema sunucusunun kullanıcı tarafından sağlanan bağlantısı gerekir.

## DOĞRULANACAK

| Konu | Şu ana kadar bilinen | Tamamlamak için gereken |
|---|---|---|
| Temiz kurulum ve araç sürümleri | Proje belgelerinde Node.js ve pnpm için gereken sürümler belirtilmiyor. Bu kılavuz çalışmasında temiz bir bilgisayarda sıfırdan kurulum yapılmadı. | Projenin desteklediği sürümleri doğrula ve `pnpm install` adımını temiz bir ortamda dene. |
| Geliştirme sunucusu ve Studio bağlantısı | Proje belgeleri `pnpm run dev` komutunu gösteriyor. Tema geliştirme sunucusu bu çalışma sırasında başlatılmadı. | Kullanıcıdan geçerli önizleme bağlantısını al; sunucuyu başlatıp Studio'daki bağlantıyı gerçekten dene. |
| Studio'daki Dev Components ve yayın adımları | Önceki erişimde sayfa seçicisi, Anasayfa bölüm listesi, Üst Menü V2 alan grupları ve `/cart` rota alanı görüntülendi. Bu son Playwright denemesinde aynı Studio bağlantısı HTTP 404 döndürdü. Dev Components bağlantısı, kaydetme ve yayınlama adımları doğrulanmadı. | Çalışan Studio bağlantısını aldıktan sonra Dev Components, kaydetme ve yayınlama adımlarını ekranda doğrula. |
| Bölümlerin Studio'daki kullanımı | 71 kayıtlı bölümün alan adları ve yapılandırma bilgileri proje ayarlarından listelendi. Sayfa seçicisinde Anasayfa, Ürün Sayfası, Kategori Sayfası ve Arama Sayfası görüldü; diğer sayfaların bölüm yerleşimi doğrulanmadı. | Ürün ve kategori sayfalarını açıp bölüm yerleşimini ve alanların gerçek davranışını Studio'da doğrula. |
| İngilizce içerik ve slug eşlemeleri | Kodda bazı Türkçe/İngilizce rota eşlemeleri var; önceki Studio görüntüsünde TR Türkçe göstergesi yer alıyor. Bu son denemede Studio bağlantısı HTTP 404 döndürdü ve tema önizleme bağlantısı sağlanmadı; canlı İngilizce sayfalar ve tüm slug'lar test edilmedi. | Çalışan Studio ve tema önizleme bağlantılarıyla İngilizce alanları, sayfaları ve karşılık gelen slug'ları doğrula; eşlemesi olmayanları tahmin etme. |
| PDF görüntüleme ve gezinme | PDF dosyası üretildi; yapısal taramada yer imi başlıkları, bağlantı anotasyonları ve gömülü görsel bulundu. Test tarayıcısı PDF'i görsel olarak açamadı. | PDF'i masaüstü PDF okuyucusunda aç; kapak, tarih, sayfa numaraları, bölüm ayraçları, içindekiler bağlantıları ve yer imlerini tıkla. |

## EKRAN GÖRÜNTÜSÜ GEREKLİ

| Görüntü | Mevcut durum | Gerekli görüntü |
|---|---|---|
| Anasayfa Üst Menü alan grupları | Kırpılmış Studio görüntüsü eklendi. | Ek görüntü gerekmiyor. |
| İlk kurulum ve geliştirme sunucusu | Bu oturumda uçtan uca denenmedi. | Bağımlılık kurulumunun ve sunucu bağlantı bilgisinin doğrulanmış ekranı. |
| Studio'da geliştirme bağlantısı | Panel adımı doğrulanmadı. | Dev Components bağlantı alanının yakın plan görüntüsü. |
| Sayfa ve bölüm düzenleme | Sayfa seçicisi, Anasayfa bölüm listesi ve Üst Menü V2 alan grupları için kırpılmış görüntüler eklendi. | Ürün ve kategori sayfalarının bölüm listesi ile temsilî alan ayarları için kırpılmış görüntüler. |
| İngilizce görünüm ve rotalar | Önceki Studio görüntüsünde TR Türkçe göstergesi ve `/cart` rota alanı görüntülendi; tema kodundaki bazı eşlemeler belgelendi. Son Studio erişimi HTTP 404 verdi. | Çalışan Studio bağlantısında İngilizce alan grubu; tema önizleme bağlantısında İngilizce mağaza sayfası ve slug örneği. |
| Kaydetme ve yayınlama | Akış ekranda doğrulanmadı. | Doğru buton ve durum bilgisini gösteren görüntüler. |

Bu görüntüler alınırken yalnızca kullanıcının sağladığı geçerli bağlantıyı kullan; mağaza kimliği, parola veya token içeren kısımları kaydetme.

## Sonraki adım

Önizleme ve Studio erişimi sağlandığında bu listedeki maddeleri doğrula; doğrulanmayan adımları kılavuzun diğer bölümlerinde kesin talimat gibi sunma.
