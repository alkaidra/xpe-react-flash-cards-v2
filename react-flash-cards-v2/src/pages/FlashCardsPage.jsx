import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Estudo } from "../components/Estudo";
import { FlashCardItem } from "../components/FlashCardItem";

import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { apiCreateFlashCard, apiDeleteFlashCard, apiGetAllFlashCards, apiUpdateFlashCard } from "../services/apiService";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { useId } from "../hooks/useId";

export default function FlashCardsPage() {
    const [ allCards, setAllCards ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ createMode, setCreateMode ] = useState(true);
    const [ selectedTab, setSelectedTab ] = useState(0);
    const [ formEdit, setFormEdit ] = useState(null);

    const { idRandom } = useId();

    useEffect(() => {
        // apiGetAllFlashCards().then(({ cards }) => {
        //     setAllCards(cards);
        // })

        async function getAllCards() {
            try {
                const { cards } = await apiGetAllFlashCards();
                setTimeout(() => {
                    setAllCards(cards);
                    setLoading(false);
                }, 100);
            } catch (e) {
                setError(e.message);
            }
        }
        getAllCards()
    }, []);

    const onDeleteCard = async (id) => {
        try {
            await apiDeleteFlashCard(id);
            setAllCards(allCards.filter(card => card.id != id));
        } catch(e) {
            setError(e.message);
        }
    }
    
    const onEditCard = (children) => {
        setCreateMode(false);
        setSelectedTab(1);
        setFormEdit(children);
    }

    const handleTabSelect = (tabIndex) => {
        setSelectedTab(tabIndex);
    }

    const handleNewFlashCard = () => {
        setCreateMode(true);
        setFormEdit(null);
    }

    const handleCreateFlashCard = async ({ title, description }, message) => {
        if (message == "created") {
            try {
                const { data } = await apiCreateFlashCard({ title, description });
                
                setAllCards([...allCards, data]);
            } catch(e) {
                throw new Error(e);
            }
        } else {
            try {
                const { data } = await apiUpdateFlashCard(formEdit.id, title, description)

                setAllCards(allCards.map((card) => {
                    if (card.id === formEdit.id) {
                        return { ...card, title, description }
                    }
                    return card;
                }));
                handleNewFlashCard();
            } catch (e) {
                throw new Error(e);
            }
        }
    }

    let main = 
    <>
        <Tabs
            selectedIndex={selectedTab}
            onSelect={handleTabSelect}
        >
            <TabList>
                <Tab>Listagem</Tab>
                <Tab>Cadastro</Tab>
                <Tab>Estudo</Tab>
            </TabList>

            <TabPanel>
                { allCards.map((card, key) => {
                    return (
                        <FlashCardItem
                            key={ key }
                            onDelete={onDeleteCard}
                            onEdit={onEditCard}
                        >
                            { card }
                        </FlashCardItem>
                    )
                }) }
            </TabPanel>
            
            <TabPanel
                className="flex flex-col gap-4"
            >
                <Button
                    onClick={handleNewFlashCard}
                >
                    Novo FlashCard
                </Button>
                <Form
                    createMode={createMode}
                    card={formEdit}
                    onCreate={handleCreateFlashCard}
                />
            </TabPanel>

            <TabPanel>
                <Estudo 
                    allCards={ allCards } 
                    setAllCards={ setAllCards }
                />
            </TabPanel>
        </Tabs>
    </>;

    if (error) {
        main = <Error>{ error }</Error>;
    }

    if (loading) {
        main = <Loading />
    }

    return (
        <>
            <Header>react-flash-cards-v2</Header>
            <Main>
                { main }
            </Main>
        </>
    );
}
