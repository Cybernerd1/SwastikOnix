# Quick Setup Guide - Supabase Table

## Option 1: Using SQL Editor (Recommended)

1. Go to Supabase Dashboard → SQL Editor
2. Click "New Query"
3. Copy and paste the contents of `supabase_schema.sql`
4. Click "Run"

## Option 2: Using Table Editor (Manual)

If you prefer to create the table manually:

### Step 1: Create Table

1. Go to **Table Editor** → **New Table**
2. Table name: `submissions`
3. Enable RLS (Row Level Security): **Yes**

### Step 2: Add Columns

| Column Name    | Type                      | Default Value                    | Nullable | Primary |
|---------------|---------------------------|----------------------------------|----------|---------|
| id            | uuid                      | gen_random_uuid()                | No       | Yes     |
| full_name     | text                      | -                                | No       | No      |
| email         | text                      | -                                | No       | No      |
| project_type  | text                      | -                                | No       | No      |
| requirements  | text                      | -                                | No       | No      |
| created_at    | timestamp with time zone  | now()                            | No       | No      |
| updated_at    | timestamp with time zone  | now()                            | No       | No      |

### Step 3: Add RLS Policies

After creating the table, go to **Authentication** → **Policies** → **submissions**

#### Policy 1: Allow Anonymous Inserts
- Policy name: `Allow anonymous inserts`
- Allowed operation: `INSERT`
- Target roles: `anon`
- USING expression: (leave empty)
- WITH CHECK expression: `true`

#### Policy 2: Allow Authenticated Reads
- Policy name: `Allow authenticated reads`
- Allowed operation: `SELECT`
- Target roles: `authenticated`
- USING expression: `true`
- WITH CHECK expression: (leave empty)

### Step 4: Add Indexes (Optional but Recommended)

Go to **Database** → **Indexes** → **Create Index**

1. Index on created_at:
   - Table: `submissions`
   - Column: `created_at`
   - Order: `DESC`

2. Index on email:
   - Table: `submissions`
   - Column: `email`

## Verify Setup

Test your setup by running this query in SQL Editor:

```sql
-- This should return an empty result (no errors)
SELECT * FROM submissions;

-- Test insert (should work)
INSERT INTO submissions (full_name, email, project_type, requirements)
VALUES ('Test User', 'test@example.com', 'Web', 'This is a test submission');

-- Verify the insert
SELECT * FROM submissions;

-- Clean up test data
DELETE FROM submissions WHERE email = 'test@example.com';
```

If all queries run without errors, your setup is complete!
