import { createClient } from '@/utils/supabase/server'
import { signout } from '@/app/auth/actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">SaaS Launchpad</h1>
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground">Logged in as {user.email}</p>
          <form action={signout}>
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="https://github.com">GitHub</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
