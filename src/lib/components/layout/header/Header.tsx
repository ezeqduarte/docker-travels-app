import { LoginIcon } from "@/lib/icons"

export const Header = async () => {
    return (
        <header className="h-14 flex justify-between items-center px-5 bg-slate-400 rounded-b-[10px] fixed z-10 top-0 w-full left-0">
                <h1 className="font-bold">Travels app.</h1>
                <LoginIcon/>
        </header>
    )
}