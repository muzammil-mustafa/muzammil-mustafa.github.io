@echo off
title Push Portfolio to GitHub
cd /d "C:\Users\Muzamil Mustafa\.gemini\antigravity\scratch\cohesion-portfolio"

echo ===================================================
echo   Pushing Muzammil's Portfolio to GitHub Pages
echo ===================================================
echo.
echo Target: https://github.com/muzammil-mustafa/muzammilmustafa.github.io.git
echo.

"C:\Program Files\Git\cmd\git.exe" push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ===================================================
    echo   SUCCESS! Your portfolio code has been pushed!
    echo ===================================================
) else (
    echo.
    echo If prompted, please authorize in your browser window.
)

echo.
pause
