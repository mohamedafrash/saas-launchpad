'use client'

import { useActionState, useState } from 'react'
import { login, signup } from '@/app/auth/actions'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loginState, loginAction, isLoginPending] = useActionState(login, null)
  const [signupState, signupAction, isSignupPending] = useActionState(signup, null)

  const toggleMode = () => setIsLogin(!isLogin)

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isLogin ? 'Welcome Back' : 'Create an Account'}</CardTitle>
          <CardDescription>
            {isLogin
              ? 'Enter your email to sign in to your account'
              : 'Enter your email to create a new account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <form action={loginAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              {loginState?.error && (
                <div className="text-sm text-destructive">{loginState.error}</div>
              )}
              <Button type="submit" className="w-full" disabled={isLoginPending}>
                {isLoginPending ? <Spinner className="mr-2" /> : null}
                Sign In
              </Button>
            </form>
          ) : (
            <form action={signupAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              {signupState?.error && (
                <div className="text-sm text-destructive">{signupState.error}</div>
              )}
              <Button type="submit" className="w-full" disabled={isSignupPending}>
                {isSignupPending ? <Spinner className="mr-2" /> : null}
                Sign Up
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={toggleMode}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
