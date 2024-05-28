
export const Button = ({ onClick, children }: {
    onClick: () => void;
    children: React.ReactNode
}) => {
    return <button onClick={onClick} className="py-4 px-8 text-3xl bg-green-500 hover:bg-green-600 text-white font-bold rounded">
    {children}
</button>
}