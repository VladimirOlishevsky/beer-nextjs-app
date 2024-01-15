import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Beers page',
  description: '...',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        {children}
      </div>
  )
}