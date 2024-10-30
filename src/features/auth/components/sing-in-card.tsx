import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function SignInCard() {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <div className="px-7"></div>
    </Card>
  )
}
