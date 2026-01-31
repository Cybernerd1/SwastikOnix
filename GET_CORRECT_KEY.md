# 🔑 How to Get the CORRECT Supabase Key

## ⚠️ CRITICAL: You're Using the WRONG Key!

### What You're Currently Using (WRONG ❌):

```
VITE_SUPABASE_ANON_KEY=sb_secret_70iNPGUi490sYP3Q4vFFSw_WejKVHnD
```

**This is a SERVICE_ROLE SECRET KEY!**

- Starts with `sb_secret_`
- Should NEVER be used in browser/frontend code
- Anyone can see it in your browser = SECURITY RISK
- Supabase blocks it for your protection

---

## ✅ What You SHOULD Use: ANON/PUBLIC Key

### Step-by-Step Guide:

1. **Go to Supabase Dashboard**

   - URL: https://app.supabase.com
   - Login to your account

2. **Select Your Project**

   - Click on your project: `cnhcjvocqzsgzercgrws`

3. **Navigate to Settings → API**

   - Click the ⚙️ Settings icon in the left sidebar
   - Click "API" in the settings menu

4. **Find "Project API keys" Section**

   - You'll see TWO keys listed:
     - ✅ **anon** / **public** key (THIS IS THE ONE YOU NEED!)
     - ❌ **service_role** key (DO NOT USE THIS!)

5. **Copy the ANON/PUBLIC Key**
   - Look for the key labeled "anon" or "public"
   - It will be a VERY LONG string (200+ characters)
   - It starts with: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.`
   - Click the copy icon to copy it

---

## 📋 Visual Reference

In the Supabase dashboard, you'll see something like this:

```
Project API keys
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

anon public                                                    [Copy]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJl
ZiI6ImNuaGNqdm9jcXpzZ3plcmNncndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2
MzY0ODI3NjAsImV4cCI6MTk1MjA1ODc2MH0.XXXXXXXXXXXXXXXXXXXXXXXX
                                                               ↑
                                                    COPY THIS ONE!

service_role secret                                            [Copy]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJl
ZiI6ImNuaGNqdm9jcXpzZ3plcmNncndzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIs
ImlhdCI6MTYzNjQ4Mjc2MCwiZXhwIjoxOTUyMDU4NzYwfQ.XXXXXXXXXXXXXXX
                                                               ↑
                                                    DO NOT USE THIS!
```

---

## 🔧 Update Your .env File

After copying the **anon/public** key, update your `.env` file:

```env
VITE_SUPABASE_URL=https://cnhcjvocqzsgzercgrws.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuaGNqdm9jcXpzZ3plcmNncndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MzY0ODI3NjAsImV4cCI6MTk1MjA1ODc2MH0.XXXXXXXXXXXXXXXXXXXXXXXX
```

**Important Notes:**

- The key should be ONE continuous line (no line breaks)
- It should be 200+ characters long
- It should start with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.`
- It should NOT start with `sb_secret_`

---

## 🔄 After Updating

1. **Save the .env file**
2. **Restart your dev server:**
   ```bash
   # Press Ctrl+C to stop the current server
   npm run dev
   ```
3. **Test the contact form again**

---

## ✅ How to Verify You Have the Right Key

### The ANON key should:

- ✅ Be 200+ characters long
- ✅ Start with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.`
- ✅ Contain the text `"role":"anon"` when decoded
- ✅ Work in browser/frontend code

### The SECRET key (DO NOT USE):

- ❌ Starts with `sb_secret_` or contains `"role":"service_role"`
- ❌ Should ONLY be used in backend/server code
- ❌ Will be blocked by Supabase in browser

---

## 🎯 Expected Result

After using the correct key, you should see:

- ✅ **201 Created** status (not 401)
- ✅ Form submission succeeds
- ✅ Data appears in Supabase table
- ✅ No "Forbidden use of secret API key" error

---

## 🆘 Still Can't Find It?

If you can't find the anon/public key in your dashboard:

1. Make sure you're logged into the correct Supabase account
2. Make sure you're viewing the correct project
3. Try refreshing the page
4. Check if you have the necessary permissions for the project

If the key is truly missing, you may need to regenerate it in the Supabase dashboard.
