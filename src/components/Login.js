import {
    Auth,
    // Import predefined theme
    ThemeSupa,
} from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    'https://eudwzzalgtgsdiidttva.supabase.co',
    '=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1ZHd6emFsZ3Rnc2RpaWR0dHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjM0MDgsImV4cCI6MTk5MDI5OTQwOH0.kvFXurJwaNB-4YlDjTAFPa8C2EfI7Tw8ndPjUPcdKUQ'
)

const Login = () => (
    <Auth
        supabaseClient={supabase}

        appearance={{ theme: ThemeSupa }}
    />
)

export default Login
