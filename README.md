# DAY 0 — Survival Scroll Website Prototype

這是一個以滑鼠滾輪控制場景進度的求生互動首頁。

## V2 順暢度優化

這次針對「影片跟著滾輪跑很卡」做了兩層優化：

- 影片改成 1280×720 / H.264 / 30fps。
- 關鍵影格改為每 3 幀一次，讓隨機 seek 更快。
- JavaScript 最多只送出 30 次 seek / 秒。
- 前一次 seek 尚未完成時，不再連續塞入新的 seek 指令。
- HUD 繼續維持 requestAnimationFrame 更新，所以 UI 仍維持滑順。
- 移除較吃效能的 hue-rotate / contrast 濾鏡。

## 需要放入 assets 的檔案

- `assets/poster.jpg`
- `assets/survival-scroll.mp4`

請使用 V2 壓縮包中的新版 `survival-scroll.mp4`，檔名保持不變。

## 使用方法

1. 用 VS Code 打開整個資料夾。
2. 安裝 Live Server。
3. 對 `index.html` 右鍵 → Open with Live Server。
4. 第一次載入時讓影片先預載一下，再開始滾動會更穩。

> 不建議直接用 `file://` 雙擊 HTML 開啟。

## 後續

如果仍希望有更強烈的空間縱深，下一階段可以把這套 scroll controller 保留，改成 Three.js 真 3D 場景。