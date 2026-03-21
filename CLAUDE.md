# 花蓮縣災害風險地圖 (Hualien Flood Risk Map)

教育用互動式地圖平台，用於展示花蓮縣光復鄉淹水潛勢及災害風險評估教學。

## 專案架構

這是一個純靜態網站，部署於 GitHub Pages。

### 核心檔案
- `index.html` - 單頁應用程式，包含所有 HTML、CSS 和 JavaScript
- `flood_data.js` - 淹水潛勢 GeoJSON 資料 (~3.2MB)

### 工具腳本 (本機使用)
- `create_doc.py` - 產生教學用 Word 文件
- `create_final_doc.py` - 產生含圖片的完整教學文件
- `screenshot.py` - 使用 Playwright 截取地圖截圖

## 技術架構

- **地圖**: Leaflet.js + OpenStreetMap 底圖
- **圖表**: Chart.js
- **村里邊界**: TopoJSON (Taiwan Atlas)
- **淹水潛勢**: 經濟部水利署公開資料
- **資料儲存**: localStorage (學生練習資料)

## 部署

網站自動部署至 GitHub Pages：
https://laisurjan.github.io/hualien-flood-risk-map/

修改 `index.html` 或 `flood_data.js` 後 push 到 main 分支即可更新。

## 淹水情境

地圖支援四種 24 小時累積降雨情境：
- 輕度: 200mm (`24h200r`)
- 中度: 350mm (`24h350r`)
- 強度: 500mm (`24h500r`)
- 極端: 650mm (`24h650r`)

## Git 設定

本專案使用的 Git 身份：
- 使用者名稱: hlbhwalala
- Email: walala@hlbh.hlc.edu.tw
