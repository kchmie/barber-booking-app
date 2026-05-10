import { Head, Link, router, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { useTrans } from '@/hooks/use-trans';
import { Button } from '@/components/ui/button';
import language from '@/routes/language';
import LangSwitch from '@/components/lang-switch';
import AppLogoIcon from '@/components/app-logo-icon';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth, locale } = usePage().props;
    const { __ } = useTrans();

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {/* {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )} */}

                        <LangSwitch />
                        
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    
                    <h1 className="mb-1 text-xl font-medium text-primary text-center">
                        <div className="mb-5">{__("Welcome to our barber booking app!")}</div>
                        <div className="flex items-center justify-center gap-5">
                            <Link><Button size="lg" className='cursor-pointer'>
                                {__("Make a reservation")}
                            </Button></Link>
                            <Link href={auth.user && dashboard() || login()}><Button variant="outline" size="lg" className='cursor-pointer'>
                                {__("Check your reservations")}
                            </Button></Link>
                        </div>
                    </h1>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
