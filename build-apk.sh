#!/bin/bash

# APK Build Script for Reverse Escape Game
# এই স্ক্রিপ্ট স্বয়ংক্রিয়ভাবে APK তৈরি করবে

set -e

echo "================================"
echo "Reverse Escape - APK Builder"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed. Please install JDK first."
    echo "Download from: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html"
    exit 1
fi

echo "✅ Java found: $(java -version 2>&1 | head -n 1)"

# Install Cordova globally
echo ""
echo "📦 Installing Cordova..."
npm install -g cordova

echo ""
echo "🔧 Adding Android platform..."
cordova platform add android

echo ""
echo "🏗️ Building debug APK..."
cordova build android

echo ""
echo "✨ APK Build Complete!"
echo ""
echo "📍 APK Location:"
echo "   Debug APK: platforms/android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "📱 To build release APK, run:"
echo "   cordova build android --release"
echo ""
echo "Happy Gaming! 🎮"
