import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Single Beer page',
  description: '...',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        {children}
      </div>
  )
}