
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://idzvdeemgxhwlkyphnel.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkenZkZWVtZ3hod2xreXBobmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNjU1NDAsImV4cCI6MjA3NzY0MTU0MH0.q11DxU-2I9KKzdb-pEBXM73_yLnqYuRSElie831uB6w';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkClicks() {
    console.log('Querying Supabase for "general_inquiry" (Lead Magnet default)...');

    const { count, error } = await supabase
        .from('customers')
        .select('*', { count: 'exact', head: true })
        .eq('insurance_type', 'general_inquiry');

    if (error) {
        console.error('Error querying Supabase:', error);
        return;
    }

    console.log(`\nTotal "General Inquiry" leads found: ${count}`);
    console.log('Note: This includes Lead Magnet submissions and generic "Get Quote" clicks.');
}

checkClicks();
