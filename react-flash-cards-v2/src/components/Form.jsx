import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export function Form({ createMode = true, card = null, onCreate = null }) {

    const [ title, setTitle ] = useState(card?.title || "");
    const [ description, setDescription ] = useState(card?.description || "");
    const [ message, setMessage ] = useState("");

    const style = createMode ? "bg-green-200" : "bg-yellow-200";

    const handleSave = (e) => {
        e.preventDefault();

        if (title.length == 0 || description.length == 0) {
            setMessage("Verifique se todos os campos foram preenchidos corretamente");
        } else {
            if (card == null) {
                onCreate({ title: title, description: description }, "created");
                setMessage("FlashCard criado com sucesso")
            } else {
                onCreate({ title: title, description: description }, "updated");
                setMessage("FlashCard atualizado com sucesso")
            }
        }
    }

    const handleClear = (e) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
    }

    return (
        <form
            className={ "flex flex-col gap-4 rounded-lg p-4 " + style }
        >
            { message && 
                <div
                    className="flex justify-center"
                >
                    <small
                        className="text-red-500 font-bold"
                    >
                        { message }
                    </small> 
                </div>
            }
            <Input
                id="title"
                label="Titulo"
                value={ title }
                onInputChange={setTitle}
            />
            <TextArea
                id="description"
                label="Descrição"
                value={ description }
                onTextAreaChange={setDescription}
            />
            <div
                className="flex gap-4"
            >
            <Button
                onClick={handleSave}
            >
                Salvar
            </Button>
            <Button
                onClick={handleClear}
            >
                Limpar
            </Button>
            </div>
        </form>
    )
}
