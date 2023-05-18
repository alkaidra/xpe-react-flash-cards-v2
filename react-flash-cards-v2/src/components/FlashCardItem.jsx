import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

export function FlashCardItem({ children, onDelete = null, onEdit = null }) {
    const { id, title, description } = children;

    const handleEditCard = () => {
        if (onEdit) {
            onEdit(children);
        }
    }

    const handleDeleteCard = () => {
        if (onDelete) {
            onDelete(id);
        }
    }

    return (
        <div
            className="flex items-center rounded-3xl py-4 px-10 m-2 shadow-lg font-semibold text-xl gap-2"
        >
            <div
                className="flex flex-col gap-2"
            >
                <span><strong>Título: </strong>{ title }</span>
                <span><strong>Descrição: </strong>{ description }</span>
            </div>
            <div
                className="flex flex-col gap-4"
            >
                <AiOutlineEdit 
                    className="cursor-pointer text-blue-900" 
                    size={24} 
                    onClick={handleEditCard}
                />
                <AiOutlineDelete
                    className="cursor-pointer text-red-900"
                    size={24} 
                    onClick={handleDeleteCard}
                />
            </div>
        </div>
    )
}