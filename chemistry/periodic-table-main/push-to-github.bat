@echo off
chcp 65001 > nul
echo ===============================================
echo   118元素周期表项目 - GitHub 推送助手
echo ===============================================
echo.
echo 这个脚本会帮助你把代码推送到 GitHub。
echo.
echo === 第 1 步：准备 Personal Access Token ===
echo 请在浏览器打开这个链接，生成一个 token：
echo   https://github.com/settings/tokens/new
echo.
echo 设置如下：
echo   - Note: periodic-table-push
echo   - Expiration: 30 days
echo   - Scopes: 勾选 'repo' 即可
echo.
echo 生成后复制 token (格式: ghp_xxxxxxxxxxxxxxxxxxxx)
echo.
set /p TOKEN="请粘贴你的 GitHub Token 然后回车: "

if "%TOKEN%"=="" (
    echo.
    echo [错误] Token 不能为空！
    pause
    exit /b 1
)

echo.
echo === 第 2 步：配置远程仓库 URL ===
cd /d "E:\Desktop\periodic-table"
git remote set-url origin https://Jame666888:%TOKEN%@github.com/Jame666888/periodic-table.git
echo [完成] Remote URL 已更新

echo.
echo === 第 3 步：推送代码到 GitHub ===
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===============================================
    echo   [成功] 代码已推送到 GitHub！
    echo   仓库地址: https://github.com/Jame666888/periodic-table
    echo ===============================================
) else (
    echo.
    echo [错误] 推送失败，请检查 token 是否正确
)

echo.
pause
