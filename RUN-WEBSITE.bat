@echo off
setlocal
title MaheshDev Portfolio - Auto Run
cd /d "%~dp0"

echo.
echo ==========================================
echo       MAHESHDEV PORTFOLIO - AUTO RUN
echo ==========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not added to PATH.
    echo Install Node.js 20 LTS from https://nodejs.org/
    echo Then close and reopen this file.
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo ERROR: npm was not found. Please reinstall Node.js.
    pause
    exit /b 1
)

if not exist "package.json" (
    echo ERROR: package.json was not found.
    echo Please run this file from the extracted project folder.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing project dependencies for the first time...
    call npm install
    if errorlevel 1 (
        echo.
        echo Dependency installation failed. Check your internet connection
        echo and Node.js installation, then try again.
        pause
        exit /b 1
    )
)

echo Starting the development server...
start "MaheshDev - Next.js Server" cmd /k "cd /d ""%~dp0"" && npm run dev"

echo Waiting for the local website to start...
timeout /t 5 /nobreak >nul
start "" "http://localhost:3000"

echo.
echo Your portfolio should open at http://localhost:3000
echo Keep the server window open while using the website.
echo To stop the server, press Ctrl+C in the server window.
echo.
endlocal
