var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  fqpabi8 \n 個人倉儲: https://github.com/mdecp2024/hw-41323226 \n 個人網站: https://mdecp2024.github.io/hw-41323226 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1-1', 'text': 'scite應用 \n help_print.py應用 \n #單行註解\n#help(print)\n\'\'\'這個三引好所界定的區域\n被 Python 視為多行註解\n\'\'\'\na = "一個字串"\na = 24\na = 24.5\nprint(a)\nb = print(a, a, a, sep=\'*\', end=\'*\')\nprint(b) \n \n \n help_range.py應用 \n for i in range(1, 8):\n    print(\' \' * (7-i) + \'*\' * (2*i-1))\n    \na = 15\nb = a*2+1\nfor i in range(1, b, 2):\n    move = round((b-i)/2)-1\n    print(f\' \'*move, end=\'\')\n    print(\'*\'*i)\n    \n    n = 21\n\nfor i in range(n):\n    print(\' \' * (n - i - 1) + \'* \' * (i + 1)) \n \n \n triangle_star_2.py結論 \n a = 15\nb = a*2+1\nfor i in range(1, b, 2):\n    move = round((b-i)/2)-1\n    print(f\' \'*move, end=\'\')\n    print(\'*\'*i) \n \n \n square.py其他練習 \n n = 5 \nfor i in range(n):\n    print(\'* \' * n \n \n \n 將上述分開存檔導入進cmd\xa0 (以 triangle_star_2.py為例 ) \n \n \n 若不熟可以使用 chatgpt 作為輔助參考 \n \n \n heip_print.txt \n help_range.txt \n triangle_star_2.txt \n square.txt \n \n', 'tags': '', 'url': 'HW 1-1.html'}, {'title': 'HW 1-2', 'text': '\n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載並解壓縮 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 "個人隨身碟/pyy/python_2025_lite/data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 )" \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 利用命令列輸入指令<ipconfig/all>可找到電腦IP,使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n \n \n \n \n \n \n \n \n \n \n from coppeliasim_zmqremoteapi_client import RemoteAPIClient\nimport time\nimport keyboard\n\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'[120.113.99.33]\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\n# 啟動模擬\nsim.startSimulation()\n\n# 設定立方體的尺寸和初始位置\ncube_size = 0.2  # 20 cm\nspacing = 0.5  # 50 cm 之間的距離（可根據需求調整）\n\n# 擺放立方體的行數和每行的數量\nrows = 5  # 從第 1 行到第 5 行\ncubes_in_row = [1, 3, 5, 7, 9]  # 每行立方體的數量\n\n# 在正的 Y 方向擺放立方體\nfor row in range(rows):\n    # 計算每行的起始 x 位置，讓其對稱\n    start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n    \n    for col in range(cubes_in_row[row]):\n        # 計算每個立方體的位置\n        x_position = start_row_x + col * spacing\n        y_position = row * spacing  # 垂直方向上每行間距\n        \n        # 建立立方體\n        cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n        sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])  # z 方向上升到立方體的中心\n\n# 在負的 Y 方向擺放立方體\nfor row in range(rows):\n    # 計算每行的起始 x 位置，讓其對稱\n    start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n    \n    for col in range(cubes_in_row[row]):\n        # 計算每個立方體的位置\n        x_position = start_row_x + col * spacing\n        y_position = -row * spacing  # 負的 Y 方向\n        \n        # 建立立方體\n        cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n        sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])  # z 方向上升到立方體的中心\n\n# 完成立方體的擺放\nprint("立方體已成功擺放!")\n\n# 設定主迴圈\nwhile True:\n    # 在這裡可以進行其他模擬操作\n    time.sleep(0.1)  # 確保循環不會過快\n\n    if keyboard.is_pressed(\'q\'):\n        # 可以按下 q 鍵跳出重複執行迴圈\n        break\n\n# 終止模擬\nsim.stopSimulation()\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW 1-2.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 \n \n \n \n 題目二 \n \n \n \n \xa0 1.如果字符串或註釋沒有正確關閉（即缺少結尾的引號或註釋標記），會導致語法錯誤。(上方影片最為範例) \n \xa0 2.如果使用了不支持的語法結構或不正確的語法，會引發語法錯誤。 \n \xa0 3.多餘的符號或錯誤的符號（如在語句末尾多了一個  ,  或  . ）會引發語法錯誤。 \n \xa0 4.在定義函數時，如果忘了提供必要的引數，可能會導致語法錯誤。 \n \xa0 5.如果不小心拼錯運算符，或者混淆了相似的符號，會導致語法錯誤。 \n \xa0 6.Python 中的關鍵字（如  if 、 else 、 try 、 class  等）不能作為變數名稱。如果誤用關鍵字會出現語法錯誤。 \n \xa0 7.在 Python 中，像是  if 、 for 、 while 、 def 、 class  等語句後面必須有冒號來指示程式區塊的開始。如果忘記\xa0 \xa0 \xa0 \xa0 \xa0加上冒號，會引發語法錯誤。 \n \xa0 8.Python 依賴縮排來區分程式碼區塊。如果縮排不正確，會報  SyntaxError 。 \n \xa0 9.如果在程式中使用了錯誤的運算符或關鍵字，會產生語法錯誤。 \n 題目三 \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '以下影片說明如何利用近端可攜系統維護個人作業網站: \n \n 1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n 1-1 \n \n 第一題連結: **圓形 \n \n import math\n\n# 設定圓心 (h, k) 和半徑 r\nh, k = 5, 5  # 圓心\nr = 4        # 半徑\n\n# 10x10 字元區域\nfor y in range(10):\n    for x in range(10):\n        # 計算 (x, y) 到圓心 (h, k) 的距離\n        distance = math.sqrt((x - h) ** 2 + (y - k) ** 2)\n        \n        # 若距離接近半徑 r，則輸出 \'*\'\n        if abs(distance - r) < 1:\n            print(\'*\', end=\'\')\n        else:\n            print(\' \', end=\'\')\n    \n    # 換行\n    print() \n 1-2 \n \n 第二題連結: 方框圓形 \n \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs * tc = canvas width and height\n\nctx = canvas.getContext("2d")\n\n# 繪製矩形的函數\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 繪製網格\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 塗色\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\n# 計算圓形內部區域\ndef draw_filled_circle_grid(h, k, r, grid_size):\n    for x in range(10):  # 網格範圍為 10x10\n        for y in range(10):\n            # 計算每個方格的中心點 (x, y) 到圓心 (h, k) 的距離\n            distance = math.sqrt((x - h) ** 2 + (y - k) ** 2)\n            # 當距離小於或等於半徑 r 時，這個方格在圓形內部\n            if distance <= r:  # 圓形內部\n                fill(x, y, "black")\n\n# 繪製 10x10 網格\ngrid(10, 10, gs)\n\n# 繪製填滿的圓形，圓心 (5, 5) 半徑 3\ndraw_filled_circle_grid(5, 5, 3, gs) \n \n \n \n 雖小被點名 \n 連結: 紅色格子 \n 中央紅色小格 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs*tc = canvas width and height\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x - 1, y - 1, gs, gs)\n\n# 繪製 10x10 方格\ngrid(10, 10, gs)\n\n# 填充中央的紅色方塊\ncenter_x = 5  # 10x10 的中央位置是第 5 列 (索引從 0 開始)\ncenter_y = 5  # 10x10 的中央位置是第 5 行 (索引從 0 開始)\nfill(center_x * gs, center_y * gs, "red")  # 填充紅色方塊\n \n 11/27\xa0 程式 \n \n 11/27 方格程式 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': "第一題 \n input() \n print() \n 第二題 \n first name \n favorites food \n 第三題 \n wanted book \n 第四題 \n shop \n 第五題 \n order \n 第六題 \n traveling \n 第七題 \n sence \n planets \n A house \n 第八題 \n friend's favorite dishes \n 第九題 \n zoo \n 第十題 \n gloves \n", 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n 方格塗色 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14', 'text': '\n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '從1累加到100 \n addto()', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};