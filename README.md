# Angularjs Training 2

### 環境建置

1. 安裝需要的檔案
```
npm i -g json-server
npm i
```

2. 建立fake api 資料
```
cd training.angularjs.2  // 請移動到專案目錄下

npm run start-api // 建立fake api 資料
```

3. 確認Fake API 是否正常執行(http://localhost:3000/)
```
// 網頁開啟以下位置
http://localhost:3000/
```

4. 執行環境 (預設建立 http://localhost:8080/ )
```
gulp
```


### 任務

#### API 查詢
- 呼叫API，請使用 $q.all 同時呼叫2隻api，並使用table呈現資料
- Method  get `http://localhost:3000/Fields` : 取得要顯示的欄位
- Method  get `http://localhost:3000/Data` : 取得列表資料

#### API 新增
- 呼叫API新增資料，並於Table呈現資料
- Method post `http://localhost:3000/Data`

#### API 編輯
- Table後方顯示編輯按鈕，點擊後原Table文字顯示input修改， 儲存後於Table顯示更新結果
- 編輯情境table按鈕顯示 “儲存”＆"取消"
- 檢視情境table按鈕顯示 “刪除”＆"編輯"
- Method put `http://localhost:3000/Data/{id}` : 編輯table資料

#### API 刪除
- Table後方顯示刪除按鈕，刪除後更新Table資料
- Method delete `http://localhost:3000/Data/{id}` : 刪除table資料

