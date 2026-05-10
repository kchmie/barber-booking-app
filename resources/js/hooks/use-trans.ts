import { usePage } from '@inertiajs/react';

export function useTrans() {
    const { translations } = usePage().props;

    const __ = (key : string) => {
        let translation = translations[key] || key;

        return translation;
    };

    return { __ };
}