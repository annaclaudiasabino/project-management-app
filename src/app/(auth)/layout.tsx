import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Image src="/logo.svg" alt="logo" width={200} height={50} />
      <div>{children}</div>
    </>
  )
}
