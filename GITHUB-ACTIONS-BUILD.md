# 🚀 Reverse Escape APK - ক্লাউড বিল্ড গাইড

## ✨ ক্লাউডে APK তৈরি হবে স্বয়ংক্রিয়!

আমি আপনার জন্য **GitHub Actions** সেটআপ করেছি যা আপনার কোড push করলেই স্বয়ংক্রিয়ভাবে APK বিল্ড করবে।

---

## 📋 কী করতে হবে:

### Step 1: GitHub এ কোড পুশ করুন

আপনার প্রজেক্ট GitHub এ রয়েছে। এখন সবকিছু যেমন আছে সেভ করুন:

```bash
cd /workspaces/Reverse-Escape

git add .
git commit -m "Setup APK build configuration"
git push origin main
```

### Step 2: GitHub Actions দেখুন

1. GitHub এ যান: https://github.com/mdhabib9900/Reverse-Escape
2. **Actions** ট্যাবে ক্লিক করুন
3. "Build APK" workflow চলছে দেখবেন ⏳
4. কয়েক মিনিটে সম্পন্ন হবে ✅

### Step 3: APK ডাউনলোড করুন

**দুটি জায়গা থেকে পাবেন:**

#### অপশন 1: Artifacts থেকে
1. Build job খুলুন
2. "Artifacts" সেকশনে যান
3. `Reverse-Escape-APK.zip` ডাউনলোড করুন
4. .zip আনজিপ করুন → `app-release.apk` পাবেন

#### অপশন 2: Releases থেকে
1. Repository > **Releases** ট্যাবে যান
2. প্রথম রিলিজ খুলুন
3. `app-release.apk` সরাসরি ডাউনলোড করুন

---

## 📱 ফোনে ইনস্টল করুন

### Android ফোনে:

1. **Unknown sources চালু করুন:**
   - Settings > Security > Unknown sources (Toggle ON)

2. **APK ডাউনলোড করুন এবং কপি করুন:**
   - ফাইল ম্যানেজার খুলুন
   - Downloads ফোল্ডারে APK খুঁজুন

3. **ইনস্টল করুন:**
   - APK এ ট্যাপ করুন
   - "Install" বাটনে ট্যাপ করুন
   - সম্পন্ন হওয়ার জন্য অপেক্ষা করুন

4. **খেলুন:**
   - App drawer এ "Reverse Escape" খুঁজুন
   - launch করুন এবং উপভোগ করুন! 🎮

---

## 🔄 পরবর্তী বিল্ড

কোন পরিবর্তন করে আবার push করলে:
```bash
git add .
git commit -m "Your message here"
git push origin main
```

💡 স্বয়ংক্রিয়ভাবে নতুন APK বিল্ড হবে!

---

## ✅ বিল্ড স্ট্যাটাস

আপনার GitHub repository এ "Actions" ট্যাবে দেখতে পাবেন:
- ✅ সবুজ চিহ্ন = সফল
- ❌ লাল চিহ্ন = অসফল
- ⏳ হলুদ = চলছে

---

## 📊 বিল্ড ফাইলগুলি

সেটআপ করা ফাইলগুলি:
- ✅ `.github/workflows/build-apk.yml` - GitHub Actions workflow
- ✅ `manifest.json` - PWA config
- ✅ `config.xml` - Cordova config
- ✅ `package.json` - Npm config
- ✅ `icons/` - লোগো এবং আইকন

---

## 🆘 সমস্যা?

### সমস্যা: Actions ট্যাব দেখা যাচ্ছে না
- Solution: Repository settings > Actions > Enable

### সমস্যা: Build ফেল হয়েছে
- Log দেখুন এবং ত্রুটি খুঁজুন
- সাধারণত Java/SDK সমস্যা হয়

### সমস্যা: APK ইনস্টল হচ্ছে না
- Unknown sources চালু আছে কিনা চেক করুন
- Android সংস্করণ কমপ্যাটিবল কিনা চেক করুন

---

## 🎯 সারাংশ

| পদক্ষেপ | কাজ |
|--------|-----|
| 1 | `git push origin main` চালান |
| 2 | GitHub > Actions দেখুন |
| 3 | Build succeeds হওয়ার জন্য অপেক্ষা করুন |
| 4 | APK ডাউনলোড করুন |
| 5 | ফোনে ইনস্টল করুন |
| 6 | খেলুন! 🎮 |

---

## 🚀 এখনই শুরু করুন!

```bash
git add .
git commit -m "Setup APK build with GitHub Actions"
git push origin main
```

তারপর GitHub Actions দেখুন এবং APK পান! ✨

---

**Happy Gaming! Reverse Escape আপনার হাতে!** 🎮🚀
