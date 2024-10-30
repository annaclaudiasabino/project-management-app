import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="gap-4 flex">
      <Button size={'xs'}>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'destructive'}>Destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'muted'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'teritary'}>teritary</Button>
      <Input />
    </div>
  )
}
