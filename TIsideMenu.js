window.onload = function () {
    //初始化
    let oSideMenu = document.getElementById("sideMenu");
    let oMaskingFilm = document.getElementById("maskingFilm");
    oSideMenu.style.cssText = "position: fixed;\n" +
        "            z-index: 2;\n" +
        "            background-color: white;\n" +
        "            transition: all 0.4s cubic-bezier(1, 0, 0, 1) 0s;\n" +
        "            height: 100%;\n" +
        "            top: 0;\n" +
        "            left: -250px;\n" +
        "            width: 250px;";
    oMaskingFilm.style.cssText = "position: fixed;\n" +
        "            z-index: 1;\n" +
        "            background-color: rgba(0, 0, 0, 0.3);\n" +
        "            opacity: 0;\n" +
        "            transition: all 0.4s linear 0s;\n" +
        "            pointer-events: none;\n" +
        "            height: 100%;\n" +
        "            top: 0;\n" +
        "            left: 0;\n" +
        "            width: 100%;";
    document.getElementById("sideMenuButton").onclick = startMenu;
    oMaskingFilm.onclick = hideMenu;

    function startMenu() {
        //打开
        oMaskingFilm.style.pointerEvents = "auto";
        oMaskingFilm.style.opacity = "1";
        oSideMenu.style.left = "0";
    }

    function hideMenu() {
        //关闭
        oMaskingFilm.style.pointerEvents = "none";
        oMaskingFilm.style.opacity = "0";
        oSideMenu.style.left = "-250px";
    }
}