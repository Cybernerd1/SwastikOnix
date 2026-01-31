import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const sampleData = [
  {
    full_name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    project_type: 'Web',
    requirements: 'I need a portfolio website for my photography business. Modern and minimalistic design.'
  },
  {
    full_name: 'Bob Smith',
    email: 'bob.smith@techcorp.com',
    project_type: 'App',
    requirements: 'Looking for a cross-platform mobile app for our internal inventory management system.'
  },
  {
    full_name: 'Charlie Davis',
    email: 'charlie.d@crypto-startup.io',
    project_type: 'Web3',
    requirements: 'We need a smart contract audit and a DApp frontend for our new DeFi protocol.'
  },
  {
    full_name: 'Diana Prince',
    email: 'diana@data-insights.net',
    project_type: 'AI/ML',
    requirements: 'Need a predictive model for customer churn analysis based on our historical data.'
  }
];

async function seed() {
  console.log('Seeding submissions table...');
  
  const { data, error } = await supabase
    .from('submissions')
    .insert(sampleData)
    .select();

  if (error) {
    console.error('Error seeding data:', JSON.stringify(error, null, 2));
    fs.writeFileSync('seed_error.json', JSON.stringify(error, null, 2));
  } else {
    console.log('Successfully seeded data:', JSON.stringify(data, null, 2));
  }
}

seed();
