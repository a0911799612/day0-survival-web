# DAY 0 — Survival Scroll Website Prototype

這是一個「先把互動做順，再換正式素材」的首屏原型。

## 目前已做

- 以滑鼠滾輪控制整支影片時間軸（scroll-scrub）
- requestAnimationFrame + easing，避免 wheel 事件直接瘋狂更新畫面
- 首次操作後，滾輪提示自動淡出
- 固定式 HUD、進度條、場景標籤
- 輕微滑鼠視差，增加 2.5D 縱深
- `prefers-reduced-motion` 無障礙處理
- MP4 已重新編碼成較適合捲動 seek 的版本：1600px、H.264、每 15 frame 一個 keyframe、faststart
- 不依賴 GSAP / Three.js，先把穩定性與順暢度做好

## 使用方法

1. 用 VS Code 打開整個資料夾。
2. 安裝 `Live Server` extension。
3. 對 `index.html` 右鍵 → `Open with Live Server`。
4. 用滑鼠滾輪操作。

> 不建議直接雙擊 `index.html` 使用 `file://` 開啟，部分瀏覽器對影片 seek / preload 的行為會不同。

## 媒體素材

網站程式會讀取：

- `assets/poster.jpg`
- `assets/survival-scroll.mp4`

目前 ChatGPT 的 GitHub 連線可直接寫入程式文字檔，但不支援把本機二進位影片直接交給 GitHub，因此這兩個素材請從原型壓縮包的 `assets/` 資料夾放入同一路徑。程式碼已經完整上傳。

## 為什麼第一版不用即時 Three.js？

你的 1014.mp4 本身已經包含「森林 → 火源 → 海岸燈塔 → 水下 → 城市」的 3D 空間運鏡和亮光引導。用影片時間軸綁 scroll 可以先得到最接近你參考動態、且最穩定的體驗。

下一階段若需要「真正可自由轉動的 3D 空間」，再把每個環境拆成 Three.js 場景，保留現在這套 scroll controller 即可。

## 下一階段素材建議

若改成即時 3D / 2.5D，請把每個場景分成：

- BG：天空 / 遠景
- MID：建築 / 樹木 / 山體
- FG：草、樹枝、碎石等遮擋前景
- LIGHT：光源 / 光暈 / 粒子
- UI：文字與 HUD（獨立，不要烤進圖片）

PNG / WebP 盡量使用透明背景，方便建立 Z-depth。
