  iCE Web框架索引   <style> /*非框架内容*/ .load1 { display: flex; flex-wrap: wrap; justify-content: space-between; } input, textarea, select { flex-grow: 1; margin: 5px; } /*欢迎使用THINICE薄冰CSS框架，该框架由iCE CUBE开发，GITHUB：https://github.com/iDea-iCE-CUBE/ThiniceOpenSource*/ body { background-color: #fafafa; color: #2c353e; } .card { /*卡片*/ border-radius: 10px; background-color: #FFF; min-width: 10px; min-height: 10px; padding: 1em; margin: 10px auto 10px auto; box-shadow: 0 0 25px rgba(36, 37, 38, 0.1); } .glass { /*玻璃*/ -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); border-radius: 10px; min-width: 10px; min-height: 10px; padding: 1em; margin: 10px auto 10px auto; } .gl-black { background-color: rgba(0, 0, 0, 0.3); color: white; } h1,h2,h3,h4,h5,h6,ul, ol { margin: 0; } *:disabled { /*禁止访问的表单样式*/ cursor: not-allowed !important; filter: brightness(90%); } input[type="text"], input[type="email"], input[type="password"] { /*文本框样式*/ border-radius: 8px; background-color: rgb(245, 245, 245); border: none; outline: none; transition: all 0.1s linear 0s; padding: 15px 6px 16px 18px; height: 12px; min-width: 100px; /*124px*/ } textarea { /*多行文本框样式*/ border-radius: 8px; background-color: rgb(245, 245, 245); border: none; outline: none; font-family: 微软雅黑; padding: 15px 18px 16px 18px; transition: box-shadow 0.1s linear 0s; min-width: 100px; } input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, textarea:focus, select:hover { /* 文本框获取焦点样式*/ box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.8); } input[type=submit], input[type=reset], input[type=button] { /*按钮样式*/ -webkit-appearance: none; /*解决iphone safari上的圆角问题*/ font-weight: bold; border: none; border-radius: 8px; outline: none; transition: all 0.1s linear 0s; line-height: inherit; padding: 0 12px 0 12px; height: 43px; min-width: 100px; } input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover { /*按钮鼠标停留样式*/ cursor: pointer; filter: brightness(90%); } select { /*选择框样式*/ border-radius: 8px; background-color: rgb(245, 245, 245); border: none; outline: none; height: 43px; padding: 0 18px 0 18px; transition: box-shadow 0.1s linear 0s; min-width: 100px; /*124px*/ } input[type=checkbox], input[type=radio] { /*单选框、复选框样式*/ accent-color: #0075ff; } input[type="range"] { /*取值条样式*/ accent-color: #0075ff; } a:link { color: dodgerblue; } a:visited { /* 访问后状态 */ color: #1e5eff; } a:hover { /* 鼠标悬浮状态 */ color: #1e96ff; } .bg-button-blue { /*蓝色按钮*/ color: white; background-color: #0075ff; } .bg-button-green { /*绿色按钮*/ color: white; background-color: #2ad200; } .bg-button-red { /*红色按钮*/ color: white; background-color: #ff3131; } @media screen and (min-width: 700px) { /*隐藏移动元素*/ .peElement{ display:none; } } @media screen and (max-width: 700px) { /*隐藏桌面元素*/ .pcElement{ display:none; } } </style> 

# 欢迎使用Thinice框架

  薄冰THINICE框架是一款由[iCE CUBE](https://iceweb.top)开发的开源的轻量前端页面框架，文件未压缩大小仅4kb，只需要引入CSS文件即可使用，该框架具有以下内容

# 表单

  

    

 下拉菜单 2 34

复选框 单选框 

# 这是一张卡片

  使class="card"生成一张卡片

# 这是一块黑色玻璃

  使class="glass gl-black"生成一块黑色玻璃\(也可以不加gl-black，将生成白色玻璃\)\(纯色背景效果不明显\)

# 侧边栏菜单

  点击打开侧边栏菜单，该功能需要引入JS文件，如果需要使用侧边栏功能，请引入TIsideMenu.js

  你需要在在body标签里创建两个DIV，他们的id分别为'sideMenu'与'maskingFilm'.  
  然后再在你创造的任意一个元素上，将他的id命名为'sideMenuButton'，点击这个元素即可打开侧边栏'

# 隐藏元素

  你只需要为元素的类加上"peElement",他将只会在移动端设备上显示。加上类"pcElement"将只会在桌面端显示。  
  例：_该元素仅PC可见__该元素仅PE可见_

# 其他

  除此之外，还有以下优化

* 去除了标题、列表标签的外边距
* 优化a标签样式
