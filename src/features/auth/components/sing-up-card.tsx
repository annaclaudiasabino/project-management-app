import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { DottedSeparator } from '@/components/dotted-separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SignUpCard() {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none flex flex-col">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Bem vindo de volta</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={''}
            onChange={() => {}}
            placeholder="Digite seu e-mail"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={''}
            onChange={() => {}}
            placeholder="Digite sua senha"
            disabled={false}
            min={8}
            max={120}
          />
          <Button disabled={false} size="lg" className="w-full">
            Entrar
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          variant={'secondary'}
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr2 size-5" />
          Entrar com o Google
        </Button>
        <Button
          disabled={false}
          variant={'secondary'}
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr2 size-5" />
          Entrar com o GitHub
        </Button>
      </CardContent>
    </Card>
  )
}
