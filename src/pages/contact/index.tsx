import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout';
import type { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
    return (
        <>
            <h1> CONTACT PAGE </h1>
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

ContactPage.getLayout = function getLayout( page: ReactElement ) {
    return (
        <MainLayout>
            { page }
        </MainLayout>
    );
}