import type { ReactElement } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return (
        <>
            <h1> ABOUT PAGE </h1>
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
    );
}

AboutPage.getLayout = function getLayout( page: ReactElement ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
}