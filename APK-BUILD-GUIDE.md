# APK Build Setup Guide for Reverse Escape

## Prerequisites

আপনার ফোনে APK ইনস্টল করার জন্য নিচের ধাপগুলি অনুসরণ করুন:

### Step 1: Required Software Installation (প্রয়োজনীয় সফটওয়্যার ইনস্টল করুন)

এগুলি আপনার কম্পিউটারে ইনস্টল করতে হবে:

1. **Node.js এবং npm**: https://nodejs.org/
   ```bash
   node --version
   npm --version
   ```

2. **Java Development Kit (JDK)**: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
   ```bash
   java -version
   javac -version
   ```

3. **Android SDK**: Android Studio থেকে ডাউনলোড করুন
   - https://developer.android.com/studio

### Step 2: Cordova Install করুন

```bash
npm install -g cordova
```

### Step 3: Project Setup

প্রজেক্ট ডিরেক্টরিতে যান এবং এই কমান্ড চালান:

```bash
cd /path/to/Reverse-Escape
cordova platform add android
```

### Step 4: APK তৈরি করুন

**ডিবাগ APK (তাৎক্ষণিক পরীক্ষার জন্য):**
```bash
cordova build android
```

**Release APK (ফাইনাল ভার্সন):**
```bash
cordova build android --release
```

### Step 5: APK খুঁজুন

APK ফাইল এই জায়গায় পাবেন:
- ডিবাগ: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
- রিলিজ: `platforms/android/app/build/outputs/apk/release/app-release.apk`

### Step 6: ফোনে ইনস্টল করুন

1. APK ফাইলটি আপনার Android ফোনে কপি করুন
2. ফোনে "Unknown sources" অপশন চালু করুন (Settings > Security)
3. APK ফাইলে ট্যাপ করুন এবং ইনস্টল করুন

---

## Automatic Build (স্বয়ংক্রিয় বিল্ড)

এই প্রজেক্টে ইতিমধ্যে সেটআপ ফাইলগুলি আছে:
- `config.xml` - Cordova configuration
- `manifest.json` - PWA configuration
- `package.json` - Node dependencies

## Quick Commands (দ্রুত কমান্ড)

```bash
# সেটআপ করুন
npm run setup

# ডিবাগ বিল্ড
npm run build-debug

# রিলিজ বিল্ড
npm run build

# পরিষ্কার করুন
npm run clean
```

---

## Troubleshooting

### Problem: Java not found
```bash
# Java path সেট করুন
export JAVA_HOME=/path/to/java
```

### Problem: Android SDK not found
- Android Studio খুলুন > SDK Manager
- Android SDK চেক করুন যে installed আছে

### Problem: Gradle build failed
```bash
cordova clean android
cordova build android --release
```

---

## Contact & Support

যদি কোনো সমস্যা হয় তো এই ফাইলের নির্দেশ অনুসরণ করুন এবং সবকিছু ঠিক থাকবে!

Happy Gaming! 🎮
