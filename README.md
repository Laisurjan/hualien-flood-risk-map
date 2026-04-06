# 花蓮縣災害風險地圖

從「記帳」到「記災」——以花蓮縣光復鄉為範圍的互動式淹水潛勢與災害風險評估教學平台。

## Demo

**GitHub Pages:** https://laisurjan.github.io/hualien-flood-risk-map/

## 專案特色

- **互動式村里地圖** — 以 Leaflet.js 呈現花蓮縣村里邊界，點選即可查看各村里風險狀態
- **四種降雨情境切換** — 支援 24 小時累積降雨 200mm / 350mm / 500mm / 650mm 的淹水潛勢圖層
- **學生資料輸入** — 課堂中由學生針對各村里輸入脆弱度、暴露度等評分，資料即時反映於地圖配色
- **統計圖表** — 側邊欄以 Chart.js 呈現風險分布與評分統計，方便課堂討論
- **資料匯入 / 匯出** — 支援 JSON 格式，方便跨班級、跨課堂保存與分享練習資料
- **密碼保護** — 編輯功能需輸入密碼解鎖，避免資料被誤改
- **純前端架構** — 無需後端伺服器，GitHub Pages 直接部署

## 技術棧

| 類別 | 技術 |
|------|------|
| 地圖 | [Leaflet.js](https://leafletjs.com/) + OpenStreetMap |
| 圖表 | [Chart.js](https://www.chartjs.org/) |
| 村里邊界 | [Taiwan Atlas](https://github.com/topojson/world-atlas) TopoJSON |
| 淹水潛勢資料 | 經濟部水利署開放資料 |
| 資料儲存 | 瀏覽器 localStorage |

## 專案結構

```
hualien-flood-risk-map/
├── index.html          # 單頁應用程式（HTML + CSS + JavaScript）
├── flood_data.js       # 淹水潛勢 GeoJSON 資料（~3.2MB）
├── CLAUDE.md           # 開發用專案說明
├── create_doc.py       # 產生教學用 Word 文件
├── create_final_doc.py # 產生含圖片的完整教學文件
└── screenshot.py       # 使用 Playwright 截取地圖截圖
```

## 快速開始

這是純靜態網站，本機開啟 `index.html` 即可使用。

若遇到跨來源（CORS）問題，可用本地伺服器：

```bash
# Python
python -m http.server 8000

# 或 VS Code 安裝 Live Server 擴充套件，右鍵 → Open with Live Server
```

## 使用情境

- 防災教育課程中，讓學生實際操作村里風險評估
- 地理 / 公民課堂的資料視覺化與議題討論
- 災害風險專題研究的初步展示工具

## 資料來源與聲明

本專案使用政府開放資料，僅供**教學展示**用途。

實際防災決策請以政府即時公告與專業單位資訊為準。

## Author

GitHub: [@Laisurjan](https://github.com/Laisurjan)
