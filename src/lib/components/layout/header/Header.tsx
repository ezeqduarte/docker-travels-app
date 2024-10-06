import { LoginIcon } from "@/lib/icons"

export const Header = async () => {
    return (
        <header className="w-full h-14 flex justify-between items-center px-5 bg-primaryWhite rounded">
                <h1 className="font-bold">Travels app.</h1>
                <LoginIcon/>
        </header>
    )
}