# Reverse Escape - APK তৈরির সহজ উপায়

## দুটি অপশন আপনার কাছে আছে:

---

## ✨ অপশন 1: PWABuilder (সবচেয়ে সহজ - সুপারিশ করা হয়)

এই অনলাইন টুল ব্যবহার করে আপনি মাত্র কয়েক মিনিটে APK তৈরি করতে পারবেন। কোন সফটওয়্যার ইনস্টল করতে হবে না!

### ধাপ 1: PWABuilder এ যান
👉 https://www.pwabuilder.com/

### ধাপ 2: আপনার ওয়েবসাইট URL দিন
- আপনার প্রজেক্টের URL লিখুন (যেখানে index.html আছে)
- উদাহরণ: `https://yourdomain.com` বা আপনার GitHub Pages URL

### ধাপ 3: Android APK তৈরি করুন
- "Start here" এ ক্লিক করুন
- "Build" মেনু থেকে "Android" বাছুন
- "Generate" বাটনে ক্লিক করুন
- APK ডাউনলোড করুন

### ধাপ 4: ফোনে ইনস্টল করুন
- APK ফাইলটি আপনার Android ফোনে কপি করুন
- ফোনে ফাইল ম্যানেজার খুলুন
- APK এ ট্যাপ করুন এবং ইনস্টল করুন

---

## 🛠️ অপশন 2: Cordova (আরও নিয়ন্ত্রণের জন্য)

এই পদ্ধতি আরও বেশি কাস্টমাইজেশন দেয়। আপনার কম্পিউটারে সফটওয়্যার ইনস্টল করতে হবে।

### প্রয়োজনীয় সফটওয়্যার:

1. **Node.js + npm**
   - ডাউনলোড: https://nodejs.org/
   - Windows/Mac/Linux সবার জন্য উপলব্ধ

2. **Java Development Kit (JDK)**
   - ডাউনলোড: https://www.oracle.com/java/technologies/javase-downloads.html
   - সংস্করণ 11 বা তার উপরে

3. **Android Studio** (SDK এর জন্য)
   - ডাউনলোড: https://developer.android.com/studio

### ইনস্টলেশন ধাপ:

#### Windows এর জন্য:
```batch
REM প্রজেক্ট ফোল্ডারে যান
cd C:\path\to\Reverse-Escape

REM build-apk.bat ফাইল চালান (ডাবল ক্লিক করুন)
build-apk.bat
```

#### Mac/Linux এর জন্য:
```bash
# প্রজেক্ট ফোল্ডারে যান
cd /path/to/Reverse-Escape

# স্ক্রিপ্ট এক্সিকিউটেবল করুন
chmod +x build-apk.sh

# স্ক্রিপ্ট চালান
./build-apk.sh
```

### ম্যানুয়াল বিল্ড:

```bash
# Cordova গ্লোবালি ইনস্টল করুন
npm install -g cordova

# Android প্ল্যাটফর্ম যোগ করুন
cordova platform add android

# APK বিল্ড করুন
cordova build android --release
```

### APK খুঁজুন:
```
platforms/android/app/build/outputs/apk/release/app-release.apk
```

---

## 📱 ফোনে ইনস্টল করার নিয়ম

### Android সেটিংস:
1. **Unknown Sources অনুমতি দিন:**
   - Settings > Security > Unknown Sources (চালু করুন)

2. **APK ইনস্টল করুন:**
   - APK ফাইলে ট্যাপ করুন
   - "Install" বাটনে ট্যাপ করুন
   - সম্পন্ন হওয়ার অপেক্ষা করুন

3. **খেলুন:**
   - অ্যাপ ড্রয়ারে "Reverse Escape" খুঁজুন
   - লঞ্চ করুন এবং উপভোগ করুন!

---

## ✅ চেকলিস্ট

- [ ] manifest.json তৈরি হয়েছে ✓
- [ ] config.xml তৈরি হয়েছে ✓
- [ ] Icons প্রস্তুত আছে ✓
- [ ] প্রয়োজনীয় সফটওয়্যার ইনস্টল করা হয়েছে
- [ ] APK বিল্ড সম্পন্ন হয়েছে
- [ ] ফোনে ইনস্টলেশন সম্পন্ন হয়েছে

---

## 🆘 সমস্যা সমাধান

### সমস্যা: APK কাজ করছে না
- সমাধান: ফোনে Airplane mode চালু করুন (বিজ্ঞাপন লোড করতে পারবে না অফলাইনে)

### সমস্যা: ইনস্টল হচ্ছে না
- সমাধান: Unknown sources অপশন চালু আছে কিনা চেক করুন

### সমস্যা: Java/Node not found
- সমাধান: সফটওয়্যার ইনস্টল করার পর কম্পিউটার রিস্টার্ট করুন

---

## 📧 প্রশ্ন?

কোন সমস্যা হলে উপরের গাইড অনুসরণ করুন। সবকিছু ঠিক থাকবে! 🎮

---

**Happy Gaming! Reverse Escape আপনার ফোনে এখন প্রস্তুত! 🚀**
