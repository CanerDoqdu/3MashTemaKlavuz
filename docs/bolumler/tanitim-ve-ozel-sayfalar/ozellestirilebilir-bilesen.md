---
title: "Özelleştirilebilir Bileşen"
description: "3Mash temasında Özelleştirilebilir Bileşen adıyla kayıtlı bölümün yapılandırma alanları."
---

# Özelleştirilebilir Bileşen

## Bu bölümde

- Yapılandırmada kayıtlı 69 alanın türü, başlangıç değeri ve grubu bulunur.
- Alan değerleri tema yapılandırmasından alınmıştır; mağazandaki güncel değerler farklı olabilir.

## Ne işe yarar?

Bu kayıt Studio yapılandırmasında **Özelleştirilebilir Bileşen** adıyla **section** olarak tanımlıdır. Adı tek başına bölümün canlı mağazadaki işlevini veya sayfa yerleşimini kanıtlamaz. Bu davranış **DOĞRULANACAK**.

## Nerede görünür?

Bu bölümün hangi sayfada bulunduğu ve mağazada kullanılıp kullanılmadığı verilen Studio ekranında doğrulanmadı. **DOĞRULANACAK.**

## Studio'da ekleme ve düzenleme

Bu bölümü eklemek, taşımak, gizlemek veya kaldırmak için kullanılacak Studio kontrolleri bu kayıt için doğrulanmadı. **DOĞRULANACAK:** ilgili sayfayı Studio'da açıp ekleme/düzenleme adımlarını ve kaydetme sonucunu kontrol et.

## Alanlar

Aşağıdaki tablo kod yapılandırmasını gösterir. “Başlangıç değeri”, config'te tanımlı değerdir; mağazanın güncel içeriği değildir.

| Studio alanı (teknik ad) | Tür | Yapılandırmadaki başlangıç değeri | Alan grubu | Zorunlu | Açıklama / seçenekler |
|---|---|---|---|---|---|
| 🧭 Bölüm Türü (`bolumTuru`) | ENUM | yalnizca-yazi | 🌐 Genel Bölüm Ayarları | Hayır | Seçenekler (BolumTuru): Görsel ve Yazı: gorsel-yazi; Yalnızca Yazı: yalnizca-yazi; Video ve Yazı: video-yazi; Yalnızca Video: yalnizca-video; Video ve Görsel: video-gorsel; Yalnızca Görsel: yalnizca-gorsel |
| 🎨 Arka Plan Rengi (`backgroundColor`) | COLOR | #ffffff | 🎨 Renkler ve Yazı Görünümü | Hayır | — |
| 🎨 Yazı Rengi (`textColor`) | COLOR | #1f2937 | 🎨 Renkler ve Yazı Görünümü | Hayır | — |
| 🎨 Düğme Arka Plan Rengi (`buttonBackgroundColor`) | COLOR | #111827 | 🎨 Renkler ve Yazı Görünümü | Hayır | — |
| 🎨 Düğme Yazı Rengi (`buttonTextColor`) | COLOR | #ffffff | 🎨 Renkler ve Yazı Görünümü | Hayır | — |
| ↔️ İçerik Genişliği (`icerikGenisligi`) | TEXT | 1280px | 🌐 Genel Bölüm Ayarları | Hayır | Piksel, rem, em, yüzde veya vw birimi kullanabilirsiniz. |
| ↕️ Bölüm En Az Yüksekliği (`bolumMinYuksekligi`) | TEXT | 100vh | 🌐 Genel Bölüm Ayarları | Hayır | Piksel, rem, vh, yüzde veya auto kullanabilirsiniz. |
| ↕️ Bilgisayar Üst Boşluğu (`masaustuUstBosluk`) | NUMBER | 64 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| ↕️ Bilgisayar Alt Boşluğu (`masaustuAltBosluk`) | NUMBER | 64 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| ↔️ Bilgisayar Yan Boşluğu (`masaustuYanBosluk`) | NUMBER | 24 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| 📱 Mobil Üst Boşluğu (`mobilUstBosluk`) | NUMBER | 40 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| 📱 Mobil Alt Boşluğu (`mobilAltBosluk`) | NUMBER | 40 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| 📱 Mobil Yan Boşluğu (`mobilYanBosluk`) | NUMBER | 16 | 🌐 Genel Bölüm Ayarları | Hayır | Piksel cinsinden boşluk. |
| 📝 Yazı Hizalaması (`yaziHizalamasi`) | ENUM | sola-hizali | 🎨 Renkler ve Yazı Görünümü | Hayır | Seçenekler (YaziHizalamasi): Sola hizalı: sola-hizali; Ortalanmış: ortalanmis; Sağa hizalı: saga-hizali |
| 🔠 Başlık Yazı Boyutu (`baslikYaziBoyutu`) | NUMBER | 42 | 🎨 Renkler ve Yazı Görünümü | Hayır | Piksel cinsinden yazı boyutu. |
| 🔡 Açıklama Yazı Boyutu (`aciklamaYaziBoyutu`) | NUMBER | 16 | 🎨 Renkler ve Yazı Görünümü | Hayır | Piksel cinsinden yazı boyutu. |
| 🖼️ Medya Köşe Yuvarlaklığı (`medyaKoseYumusakligi`) | NUMBER | 12 | 🎨 Renkler ve Yazı Görünümü | Hayır | Piksel cinsinden değer; en fazla 64 olabilir. |
| 👁️ Medyayı Göster (`medyaGoster`) | BOOLEAN | true | 👁️ Gösterim | Hayır | — |
| 👁️ Düğmeleri Göster (`butonlariGoster`) | BOOLEAN | true | 👁️ Gösterim | Hayır | — |
| ▶️ Video Denetimlerini Göster (`videoKontrolleriniGoster`) | BOOLEAN | true | ▶️ Video Ayarları | Hayır | — |
| 🔇 Videoyu Sessiz Oynat (`videoSessizOynat`) | BOOLEAN | false | ▶️ Video Ayarları | Hayır | — |
| 🔁 Videoyu Döngüde Oynat (`videoDonguluOynat`) | BOOLEAN | false | ▶️ Video Ayarları | Hayır | — |
| 🧭 Görsel ve Yazı Yerleşimi (`gorselYaziDuzeni`) | ENUM | gorsel-solda | 🖼️ Görsel ve Yazı | Hayır | Seçenekler (GorselYaziDuzeni): Görsel solda: gorsel-solda; Görsel sağda: gorsel-sagda; Görsel üstte: gorsel-ustte; Görsel altta: gorsel-altta |
| 🖼️ Görsel (`gorselYaziGorseli`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | — |
| 📝 Görsel Alternatif Metni (`gorselYaziGorselAciklamasi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | — |
| 📝 Başlık (`gorselYaziBaslik`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | — |
| 📝 Açıklama (`gorselYaziAciklama`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | — |
| 🔗 Düğme Metni (`gorselYaziDugmeMetni`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | — |
| 🔗 Düğme Bağlantısı (`gorselYaziDugmeBaglantisi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı | Hayır | Güvenli web adresi veya mağaza içi bağlantı girin. |
| 🌐 İngilizce Başlık (`gorselYaziBaslikIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Açıklama (`gorselYaziAciklamaIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Düğme Metni (`gorselYaziDugmeMetniIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Görsel Alternatif Metni (`gorselYaziGorselAciklamasiIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Görsel ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 📝 Başlık (`yaziHizaliBaslik`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı | Hayır | — |
| 📝 Açıklama (`yaziHizaliAciklama`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı | Hayır | — |
| 🔗 Düğme Metni (`yaziHizaliDugmeMetni`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı | Hayır | — |
| 🔗 Düğme Bağlantısı (`yaziHizaliDugmeBaglantisi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı | Hayır | Güvenli web adresi veya mağaza içi bağlantı girin. |
| 🌐 İngilizce Başlık (`yaziHizaliBaslikIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Açıklama (`yaziHizaliAciklamaIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Düğme Metni (`yaziHizaliDugmeMetniIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 📝 Yalnızca Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🧭 Video ve Yazı Yerleşimi (`videoYaziDuzeni`) | ENUM | video-solda | 🎥 Video ve Yazı | Hayır | Seçenekler (VideoYaziDuzeni): Video solda: video-solda; Video sağda: video-sagda; Video üstte: video-ustte; Video altta: video-altta |
| 🎥 Video (`videoYaziVideo`) | VIDEO | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | Doğrudan oynatılabilir video seçin. |
| 🖼️ Video Kapak Görseli (`videoYaziKapakGorseli`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | — |
| 📝 Video Alternatif Metni (`videoYaziVideoAciklamasi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | — |
| 📝 Başlık (`videoYaziBaslik`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | — |
| 📝 Açıklama (`videoYaziAciklama`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | — |
| 🔗 Düğme Metni (`videoYaziDugmeMetni`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | — |
| 🔗 Düğme Bağlantısı (`videoYaziDugmeBaglantisi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı | Hayır | Güvenli web adresi veya mağaza içi bağlantı girin. |
| 🌐 İngilizce Başlık (`videoYaziBaslikIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Açıklama (`videoYaziAciklamaIngilizce`) | RICH_TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Düğme Metni (`videoYaziDugmeMetniIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🌐 İngilizce Video Alternatif Metni (`videoYaziVideoAciklamasiIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎥 Video ve Yazı / 🌐 İngilizce İçerikler | Hayır | — |
| 🎥 Video (`yalnizcaVideo`) | VIDEO | Yapılandırmada varsayılan değer belirtilmemiş | ▶️ Yalnızca Video | Hayır | Doğrudan oynatılabilir video seçin. |
| 🖼️ Video Kapak Görseli (`yalnizcaVideoKapakGorseli`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | ▶️ Yalnızca Video | Hayır | — |
| 📝 Video Alternatif Metni (`yalnizcaVideoAciklamasi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ▶️ Yalnızca Video | Hayır | — |
| 🌐 İngilizce Video Alternatif Metni (`yalnizcaVideoAciklamasiIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | ▶️ Yalnızca Video / 🌐 İngilizce İçerikler | Hayır | — |
| 🧭 Video ve Görsel Yerleşimi (`videoGorselDuzeni`) | ENUM | yan-yana | 🎞️ Video ve Görsel | Hayır | Seçenekler (VideoGorselDuzeni): Yan yana: yan-yana; Alt alta: alt-alta |
| 🎥 Video (`videoGorselVideo`) | VIDEO | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel | Hayır | Doğrudan oynatılabilir video seçin. |
| 🖼️ Video Kapak Görseli (`videoGorselVideoKapak`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel | Hayır | — |
| 📝 Video Alternatif Metni (`videoGorselVideoAciklamasi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel | Hayır | — |
| 🌐 İngilizce Video Alternatif Metni (`videoGorselVideoAciklamasiIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel / 🌐 İngilizce İçerikler | Hayır | — |
| 🖼️ Görsel (`videoGorselGorseli`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel | Hayır | — |
| 📝 Görsel Alternatif Metni (`videoGorselAlternatifMetni`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel | Hayır | — |
| 🌐 İngilizce Görsel Alternatif Metni (`videoGorselAlternatifMetniIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🎞️ Video ve Görsel / 🌐 İngilizce İçerikler | Hayır | — |
| 🖼️ Görsel (`yalnizcaGorsel`) | IMAGE | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Yalnızca Görsel | Hayır | — |
| 📝 Görsel Alternatif Metni (`yalnizcaGorselAciklamasi`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Yalnızca Görsel | Hayır | — |
| 🌐 İngilizce Görsel Alternatif Metni (`yalnizcaGorselAciklamasiIngilizce`) | TEXT | Yapılandırmada varsayılan değer belirtilmemiş | 🖼️ Yalnızca Görsel / 🌐 İngilizce İçerikler | Hayır | — |
| 🖼️ Görsel Sığdırma (`yalnizcaGorselSigdirma`) | ENUM | cover | 🖼️ Yalnızca Görsel | Hayır | Seçenekler (GorselSigdirma): Alanı kapla: cover; Görselin tamamını göster: contain |
| ↔️ Tek Medya Genişliği (`tekMedyaGenisligi`) | ENUM | icerik-genisligi | 📐 Tek Medya Düzeni | Hayır | Seçenekler (MedyaGenisligi): İçerik genişliğinde: icerik-genisligi; Tam genişlikte: tam-genislik |

## Örnek değerler ve sık hatalar

- Örnek olarak yalnızca yukarıdaki tabloda yer alan yapılandırma başlangıç değerleri kullanılabilir; farklı değerler Studio'da doğrulanmadan önerilmez.
- Bu bölüm için doğrulanmış sık hata kaydı bulunmuyor. Hata örnekleri **DOĞRULANACAK**.

## Sonraki adım

[Bölüm Rehberi](../index.md) sayfasına dönüp başka bir bölümü seç.
