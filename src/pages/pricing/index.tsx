import type { ReactElement } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <>
      <h1> PRICING PAGE </h1>
        <div className={'center'}>
          <Image
            className={'logo'}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
  </>
  )
}

PricingPage.getLayout = function getLayout( page: ReactElement ) {
    return (
        <MainLayout>
            { page }
        </MainLayout>
    );
}
