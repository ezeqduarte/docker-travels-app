import { HomeIcon } from "@/lib/icons";

const navbarLinks = [1, 2, 3, 4, 5];

const ButtonNavbar = ({ index }: { index: number }) => {
    return (
        <button className={`${index === 2 ? 'bg-white rounded-full border-gray-300 border' : ''} p-4`}>
            <HomeIcon />
        </button>
    );
}

export const Navbar = () => {
    return (
        <nav className="h-16 fixed bottom-0 w-full left-0 bg-slate-400 rounded-t-[20px] p-3 flex justify-center items-center">
            <div className="grid grid-cols-5 pb-4 gap-7 justify-items-center">
                {navbarLinks.map((button, index) => (
                    <ButtonNavbar key={index} index={index} /> 
                ))}
            </div>
        </nav>
    );
}
