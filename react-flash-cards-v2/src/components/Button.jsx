export function Button({ children, onClick }) {
    return (
        <button
            className="hover:shadow-2xl transition-all bg-gray-200 py-2 px-10 rounded-lg hover:bg-gray-500 hover:text-white"
            onClick={onClick}
            type="button"
        >
            { children }
        </button>
    )
}
