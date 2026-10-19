---
sidebar_position: 1
title: Proje yapısı ve komutlar
---

# Proje yapısı ve komutlar

## Bu bölümde

Bu isteğe bağlı sayfa, tema kodunu ve proje komutlarını bilen geliştiriciler içindir.

## Proje yapısı

| Konum | İçerik |
|---|---|
| `src/components/` | Studio yapılandırmasında kayıtlı bölüm kaynakları. |
| `src/sub-components/` | Bölümler içinde kullanılan yardımcı bileşenler. |
| `ikas.config.json` | Kayıtlı bölüm adları ve düzenlenebilir alan tanımları. |
| `src/global.css` | Tema genelindeki stiller. |
| `dist/` | `pnpm run build` ile oluşturulan yüklemeye hazır bileşen çıktısı. |

Bu yollar proje dosyalarından doğrulanmıştır. Studio sayfa yerleşimini değil, kaynak kod yapısını anlatırlar.

## Komutlar

| Komut | Proje manifestindeki amaç |
|---|---|
| `pnpm install` | Proje bağımlılıklarını yükle. |
| `pnpm run dev` | İkas bileşen geliştirme sunucusunu başlat. |
| `pnpm run build` | İkas bileşenlerini build et. |
| `pnpm run publish` | Manifestte yayınlama komutu olarak tanımlı; gerçek yayın akışı |

> **Geliştirici notu:** `pnpm-lock.yaml` ve `patches/@ikas__component-cli@2.6.1.patch` proje kurulumunun parçasıdır. README, Windows'ta `npm install` yerine `pnpm install` kullanılmasını özellikle ister.

## Sonraki adım

[Temanın Studio bölümlerine dön](../bolumler/index.md).
