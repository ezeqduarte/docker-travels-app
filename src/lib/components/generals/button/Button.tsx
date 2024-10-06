const Button = ({label}) => {
    return (
        <button className="font-bold hover:bg-primaryDetails transition-all hover:text-primaryBlack bg-blue py-3 px-7 rounded-xl text-white">
            { label }
        </button>
    )
}

export default Button