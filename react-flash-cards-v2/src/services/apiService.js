import { useId } from "../hooks/useId";
import { read, exclude, create, update } from "./httpService";

export async function apiGetAllFlashCards() {
    const allFlashCards = await read("/flashcards");
    return {
        cards: allFlashCards
    };
}

export async function apiDeleteFlashCard(id) {
    await exclude(`flashcards/${id}`);
}

export async function apiCreateFlashCard({ title, description }) {
    const { id } = useId();
    const { data } = await create("flashcards", { id, title, description });

    return {
        data: data
    };
}

export async function apiUpdateFlashCard(id, title, description) {
    const { data } = await update(`flashcards/${id}`, { title, description });

    return {
        data: data
    };
}