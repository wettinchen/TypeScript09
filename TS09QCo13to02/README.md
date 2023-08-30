## TypeScript 09
## Chapter 09: Utility Types
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Starter code and set up
        在 terminal 輸入 tsc -w
        在 google chrome 瀏覽器 Ctrl + shift + i 開啟 Console

###  4. What are Utility Types?
        
###  5. Partial
        (1)設定介面名稱為 Assignment，
        宣告 updateAssignment，類別為 Assignment介面
        參數 assign的類別為 Assignment介面，propsToUpdate的類別為 部分的 Assignment 介面，
        使用 spread operator 回傳參數結果
        (2)宣告 assign1 物件，類別為 Assignment介面
        在控制台顯示更新過後的學生期末專題成績
        使用 updateAssignment 宣告 assignGraded ，類別為 Assignment介面
        
###  6. Required and Readonly
        宣告 recordAssignment，類別為 Assignment介面
        參數 assign的類別為需要的Assignment介面，
        回傳參數結果
        使用 spread operator宣告 assignVerified物件，類別為唯讀 Assignment介面
        成績為唯讀，無法修改，會顯示錯誤
        沒有 studentId, title, grade 屬性，會顯示錯誤

###  7. Record
        (1)宣告 hexColorMap物件，
        使用 Record 設定紅、綠和藍色的類型為 string，hex代碼的類型為 string
        (2)使用 type關鍵字 設定 Students 和 LetterGrades 類別，
        宣告 finalGrades物件，
        使用 Record 設定 key 和 value 的類別
        (3)使用 type關鍵字設定 Students 為 key 的 類別，
        使用 interface關鍵字設定 Grades 為 value 的 類別，
        宣告 gradeData物件，
        使用 Record 設定 key 和 value 的類別；

###  8. Pick and Omit
        (1)設定 AssignResult 類別，
        使用 Pick關鍵字從 Assignment類別，選取 studentId 和 grade，
        宣告 score物件，類別為 AssignResult
        (2)設定 AssignPreview 類別，
        使用 Omit關鍵字從 Assignment類別，忽略 grade 和 verified，
        宣告 preview物件，類別為 AssignPreview

###  9. Exclude and Extract
        設定 adjustedGrade 類別，
        使用 Exclude關鍵字從 LetterGrades類別，
        排除 U，即提取 A, B, C 和 D；
        設定 highGrades 類別，
        使用 Extract關鍵字從 LetterGrades類別，
        提取 A 和 B，即排除 C, D 和 U

### 10. Nonnullable
        使用 NonNullable關鍵字從 AllPossibleGrades類別，
        選取 null 和 undefined 以外的其他類別

### 11. ReturnType
        宣告 createNewAssign，參數 title 類別為 string，points 類別為 number；
        設定 NewAssign 類別，
        使用 ReturnType關鍵字從 createNewAssign類別設定參數類別；
        宣告 tsAssign，類別為 NewAssign，
        使用 createNewAssign 設定 value作為參數；
        在控制台顯示類別的結果

### 12. Parameters
        設定 AssignParams 類型，
        使用 Parameters關鍵字選取createNewAssign 參數的類型；
        宣告 assignArgs，類型為 AssignParams；
        宣告 tsAssign2，類型為 NewAssign，
        使用 createNewAssign，參數使用 spread operator；
        使用控制台回傳結果

### 13. Awaited
        (1)設定 User 介面，
        宣告 fetchUsers，使用 asynchronous 和 await，類別為 Promise<User[]>；
        宣告 data，
        從網站 fetch 資料，
        使用 thenable 將 response 回傳，
        使用 catch 回傳錯誤
        回傳 data
        (2)設定 FetchUsersReturnType 類型，
        使用 ReturnType關鍵字設定 fetchUsers函數的類別 Promise<User陣列> 為參數類別
        (3)使用 Awaited關鍵字修改類型為 User陣列
        使用 fetchUsers 和 thenable 在控制台回傳結果
