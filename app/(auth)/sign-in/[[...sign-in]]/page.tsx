import { SignIn } from "@clerk/nextjs"
// import * as SignIn from '@clerk/elements/sign-in'

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full flex-center">
      <SignIn />
    </main>
  )
}
export default SignInPage