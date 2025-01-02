
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgzlpgsqewfbmaxcpxgc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnemxwZ3NxZXdmYm1heGNweGdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MzA1MjcsImV4cCI6MjA1MTQwNjUyN30.9wOWfSOHggXKV_3OBO32RcVr7cP5wvbYKDvJLJwLXEI'
const supabase = createClient(supabaseUrl, supabaseKey)