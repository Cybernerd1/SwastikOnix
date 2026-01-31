import { supabase } from './src/lib/supabase.js';

/**
 * Test script to verify Supabase connection and table setup
 * Run with: node test-supabase.js
 */

async function testSupabaseConnection() {
  console.log('🔍 Testing Supabase Connection...\n');

  // Test 1: Check if supabase client is initialized
  console.log('Test 1: Supabase Client Initialization');
  if (!supabase) {
    console.error('❌ FAILED: Supabase client is not initialized');
    console.log('   → Check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY\n');
    return;
  }
  console.log('✅ PASSED: Supabase client initialized\n');

  // Test 2: Check table exists and can be queried
  console.log('Test 2: Table Access');
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ FAILED: Cannot access submissions table');
      console.error('   Error:', error.message);
      console.log('   → Make sure you created the table using supabase_schema.sql\n');
      return;
    }
    console.log('✅ PASSED: Can access submissions table\n');
  } catch (err) {
    console.error('❌ FAILED: Error querying table');
    console.error('   Error:', err.message);
    return;
  }

  // Test 3: Test insert permission
  console.log('Test 3: Insert Permission');
  try {
    const testData = {
      full_name: 'Test User',
      email: 'test@example.com',
      project_type: 'Web',
      requirements: 'This is a test submission - will be deleted'
    };

    const { data, error } = await supabase
      .from('submissions')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ FAILED: Cannot insert into submissions table');
      console.error('   Error:', error.message);
      console.log('   → Check RLS policies. You need "Allow anonymous inserts" policy\n');
      return;
    }

    console.log('✅ PASSED: Can insert into submissions table');
    console.log('   Inserted record:', data[0]);

    // Clean up test data
    if (data && data[0]) {
      const { error: deleteError } = await supabase
        .from('submissions')
        .delete()
        .eq('id', data[0].id);

      if (!deleteError) {
        console.log('   Test record cleaned up\n');
      }
    }
  } catch (err) {
    console.error('❌ FAILED: Error inserting data');
    console.error('   Error:', err.message);
    return;
  }

  // Test 4: Check environment variables
  console.log('Test 4: Environment Variables');
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error('❌ FAILED: Environment variables not set');
    console.log('   → Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env file\n');
    return;
  }

  console.log('✅ PASSED: Environment variables are set');
  console.log('   URL:', url);
  console.log('   Key length:', key.length, 'characters');
  
  if (key.length < 100) {
    console.warn('⚠️  WARNING: Anon key seems too short!');
    console.log('   → Supabase anon keys are typically 200+ characters (JWT tokens)');
    console.log('   → Your current key might be invalid\n');
  } else {
    console.log('   ✓ Key length looks correct\n');
  }

  console.log('🎉 All tests passed! Your Supabase setup is working correctly.\n');
}

// Run tests
testSupabaseConnection().catch(console.error);
