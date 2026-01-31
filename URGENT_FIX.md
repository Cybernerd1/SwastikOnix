# 🚨 URGENT: You're Using the WRONG Supabase Key!

## The Problem

Your current error:
```
Forbidden use of secret API key in browser
```

**What this means:**
You're using a **SERVICE_ROLE SECRET KEY** in your frontend code, which is:
- 🔴 **DANGEROUS** - Anyone can steal it from your browser
- 🔴 **BLOCKED** - Supabase prevents it for security
- 🔴 **WRONG** - It's meant for backend/server code only

---

## Current Key (WRONG ❌)

```env
VITE_SUPABASE_ANON_KEY=sb_secret_70iNPGUi490sYP3Q4vFFSw_WejKVHnD
```

**Why it's wrong:**
- Starts with `sb_secret_` (this is a service_role key!)
- Too short (only ~40 characters)
- Contains "secret" in the name

---

## What You Need (CORRECT ✅)

You need the **ANON/PUBLIC** key, which looks like this:

```env
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuaGNqdm9jcXpzZ3plcmNncndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MzY0ODI3NjAsImV4cCI6MTk1MjA1ODc2MH0.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Characteristics:**
- ✅ Starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.`
- ✅ Very long (200+ characters)
- ✅ Safe to use in browser
- ✅ Contains `"role":"anon"` when decoded

---

## 📍 Where to Find the Correct Key

### Step 1: Go to Supabase Dashboard
Open: https://app.supabase.com

### Step 2: Select Your Project
Click on project: **cnhcjvocqzsgzercgrws**

### Step 3: Navigate to API Settings
1. Click **Settings** (⚙️ icon) in the left sidebar
2. Click **API** in the settings menu

### Step 4: Find the Keys Section
Look for "Project API keys" - you'll see TWO keys:

```
┌─────────────────────────────────────────────────────────┐
│ Project API keys                                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ anon public                                      [Copy] │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi... │ │ ← COPY THIS!
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ service_role secret                              [Copy] │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi... │ │ ← DO NOT USE!
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Step 5: Copy the ANON Key
Click the **Copy** button next to **"anon public"**

---

## 🔧 Fix Your .env File

1. Open your `.env` file
2. Replace the current key with the anon/public key you just copied:

```env
VITE_SUPABASE_URL=https://cnhcjvocqzsgzercgrws.supabase.co
VITE_SUPABASE_ANON_KEY=<paste_the_long_anon_key_here>
```

3. **Save the file**

---

## 🔄 Restart Your Server

After updating the .env file:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**Important:** You MUST restart the server for the new environment variables to take effect!

---

## ✅ How to Verify It's Fixed

After restarting, try submitting the form again. You should see:

### ✅ Success Indicators:
- No more "Forbidden use of secret API key" error
- Network request returns **201 Created** (not 401)
- Form shows success message
- Data appears in Supabase table

### ❌ If Still Getting Errors:
1. Make sure you copied the **anon** key, not the service_role key
2. Make sure there are no spaces or line breaks in the key
3. Make sure you saved the .env file
4. Make sure you restarted the dev server

---

## 🔐 Security Note

**NEVER commit the service_role key to Git!**

The service_role key should:
- ❌ NEVER be in frontend code
- ❌ NEVER be in .env files that get committed
- ✅ ONLY be used in backend/server code
- ✅ ONLY be stored in secure environment variables on your server

If you accidentally exposed it:
1. Go to Supabase Dashboard → Settings → API
2. Click "Reset" next to the service_role key
3. Update your backend code with the new key

---

## 📚 Quick Reference

| Key Type      | Use In        | Starts With                          | Length | Safe in Browser? |
|--------------|---------------|--------------------------------------|--------|------------------|
| **anon**     | Frontend      | `eyJhbGciOiJIUzI1NiIsInR5cCI6...`   | 200+   | ✅ YES           |
| **service**  | Backend only  | `eyJhbGciOiJIUzI1NiIsInR5cCI6...`   | 200+   | ❌ NO            |

**Note:** Both are JWT tokens and look similar, but the anon key contains `"role":"anon"` and the service key contains `"role":"service_role"` when decoded.

---

## 🎯 Next Steps

1. ✅ Get the correct anon/public key from Supabase dashboard
2. ✅ Update your .env file
3. ✅ Restart your dev server
4. ✅ Test the contact form
5. ✅ Verify data appears in Supabase

**See also:**
- `GET_CORRECT_KEY.md` - Detailed visual guide
- `supabase_key_guide.png` - Visual comparison of keys
