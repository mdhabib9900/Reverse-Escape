@echo off
REM APK Build Script for Reverse Escape Game (Windows)
REM এই স্ক্রিপ্ট Windows-এ স্বয়ংক্রিয়ভাবে APK তৈরি করবে

echo ================================
echo Reverse Escape - APK Builder
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found: 
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: npm is not installed.
    pause
    exit /b 1
)

echo npm found: 
npm --version

REM Check if Java is installed
java -version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Java is not installed.
    echo Download from: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
    pause
    exit /b 1
)

echo Java found: 
java -version

REM Install Cordova globally
echo.
echo Installing Cordova...
call npm install -g cordova

echo.
echo Adding Android platform...
call cordova platform add android

echo.
echo Building APK...
call cordova build android

echo.
echo APK Build Complete!
echo.
echo APK Location:
echo   platforms\android\app\build\outputs\apk\debug\app-debug.apk
echo.
echo To build release APK, run:
echo   cordova build android --release
echo.
pause
