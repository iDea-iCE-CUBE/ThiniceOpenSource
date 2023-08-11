# Welcome to the THINICE CSS framework
  The THINICE framework is a product developed by [iCE CUBE]（ https://iceweb.top ）Developed an open-source lightweight front-end page framework with an uncompressed file size of only 4kb, which can be used by simply introducing CSS files. The framework has the following features

## Form Elements
  Modified the style of almost all form elements to make them more aesthetically pleasing and concise

## Card Elements
  Generate a card for class="card"

## Glass element
  Generate a black glass with class="glass gl brick" (or without gl brick, white glass can be generated) (Solid color background effect is not obvious )
  Blur the background with Gaussian to make it look like ground glass

## Side menu

  Click to open the sidebar menu, which requires importing JS files. If you need to use the sidebar function, please import TIsideMenu.js
  You need to create two DIVs in the body tag with IDs of 'sideMenu' and 'maskingFilm'
  Then, on any element you create, name its id 'sideMenuButton', and click on this element to open the sidebar

## Hide Elements

  You only need to add 'peElement' to the element's class, and it will only be displayed on mobile devices. Adding the class' pcElement 'will only display on the desktop.
  Example:_ This element is only visible to PC__ This element is only visible to PE_

## Other changes
  In addition, there are also the following optimizations
  *Removed the outer margins of titles and list labels
  *Optimize a label style

# 欢迎使用THINICE CSS框架
  薄冰THINICE框架是一款由[iCE CUBE](https://iceweb.top)开发的开源的轻量前端页面框架，文件未压缩大小仅4kb，只需要引入CSS文件即可使用，该框架具有以下内容

## 表单元素
  修改了几乎所有表单元素的样式，使其更美观简洁
  
## 卡片元素
  使class="card"生成一张卡片
  
## 玻璃元素
  使class="glass gl-black"生成一块黑色玻璃\(也可以不加gl-black，将生成白色玻璃\)\(纯色背景效果不明显\)
  使用高斯模糊背景，使其看起来像毛玻璃
  
## 侧边菜单
  点击打开侧边栏菜单，该功能需要引入JS文件，如果需要使用侧边栏功能，请引入TIsideMenu.js
  你需要在在body标签里创建两个DIV，他们的id分别为'sideMenu'与'maskingFilm'.  
  然后再在你创造的任意一个元素上，将他的id命名为'sideMenuButton'，点击这个元素即可打开侧边栏'
  
## 隐藏元素
  你只需要为元素的类加上"peElement",他将只会在移动端设备上显示。加上类"pcElement"将只会在桌面端显示。  
  例：_该元素仅PC可见__该元素仅PE可见_
  
## 其他改动

  除此之外，还有以下优化

* 去除了标题、列表标签的外边距
* 优化a标签样式
