import "./button.css"

type ButtonProps ={
    name: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({name, className, onClick} : ButtonProps) {
    return (
        <button type="submit" onClick={onClick} className={className}>
            {name}
        </button>
    )
}

export default Button;