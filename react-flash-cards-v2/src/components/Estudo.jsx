import { useState } from "react";

import { FlashCard } from "../components/FlashCard"
import { FlashCards } from "../components/FlashCards"
import { Button } from "../components/Button";
import { RadioButton } from "../components/RadioButton";
import { helperShuffleArray } from "../helpers/arrayHelpers";

export function Estudo({ allCards, setAllCards }) {
    const [ showTitle, setShowTitle ] = useState(true);

    const handleButtonClick = () => {
        setAllCards(helperShuffleArray(allCards));
    }

    const handleTitleClick = () => {
        setShowTitle(true);
    }
    
    const handleDescriptionClick = () => {
        setShowTitle(false);
    }

    return (
        <div
            className="flex flex-col gap-4"
        >
            <Button
                onClick={handleButtonClick}
            >
                Embaralhar cards
            </Button>

            <div
                className="flex gap-4 justify-center"
            >
                <RadioButton 
                    name="info" 
                    checked={showTitle}
                    onClick={handleTitleClick}
                >
                    Mostrar título
                </RadioButton>
                <RadioButton 
                    name="info"
                    checked={!showTitle}
                    onClick={handleDescriptionClick}
                >
                    Mostrar descrição
                </RadioButton>
            </div>

            <FlashCards>
            { allCards.map(({ title, description }, key) => {
                return <FlashCard 
                            key={key} 
                            title={title}
                            description={description}
                            showTitleOrDescription={showTitle}
                        />
            }) }
            </FlashCards>
        </div>
    )
}
