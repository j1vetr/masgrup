#!/bin/bash

set -e

REPO_DIR="/var/www/masgrupcleaning"
DIST_DIR="$REPO_DIR/artifacts/mas-grup/dist/public"
PM2_NAME="masgrupcleaning"

echo ""
echo "=========================================="
echo "   MAS GRUP — Site Güncelleme Scripti"
echo "=========================================="
echo ""

cd "$REPO_DIR"

echo "[1/4] Kod çekiliyor (git pull)..."
git pull origin main
echo "      ✓ Tamamlandı"
echo ""

echo "[2/4] Bağımlılıklar güncelleniyor (pnpm install)..."
pnpm install --frozen-lockfile
echo "      ✓ Tamamlandı"
echo ""

echo "[3/4] Üretim build'i alınıyor..."
BASE_PATH=/ pnpm --filter @workspace/mas-grup run build
echo "      ✓ Build tamamlandı → $DIST_DIR"
echo ""

echo "[4/4] PM2 yeniden başlatılıyor..."
if pm2 describe "$PM2_NAME" > /dev/null 2>&1; then
  pm2 restart "$PM2_NAME"
else
  pm2 serve "$DIST_DIR" 5025 --name "$PM2_NAME" --spa
fi
pm2 save
echo "      ✓ $PM2_NAME yeniden başlatıldı"
echo ""

echo "=========================================="
echo "   Güncelleme başarıyla tamamlandı!"
echo "=========================================="
echo ""
