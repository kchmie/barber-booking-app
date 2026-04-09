import language from "@/routes/language";
import { router, usePage } from "@inertiajs/react";

export default function LangSwitch(props : any){
    const { locale } = usePage().props;

    const changeLanguage = (lang: string) => {
        router.post(language.update(), { language: lang });
    };

    return <div className={'text-2xl ' + props.className}>
        {locale == "pl" && 
            <button className="cursor-pointer" onClick={() => changeLanguage("en")}>🇬🇧</button> || 
            <button className="cursor-pointer" onClick={() => changeLanguage("pl")}>🇵🇱</button>}
    </div>
}