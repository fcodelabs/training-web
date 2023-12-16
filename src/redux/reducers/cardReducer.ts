
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

interface Card {
  id: string;
  title: string;
  description: string;
}



const cardSlice = createSlice({
  name: 'cards',
  initialState: [] as Card[],
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      return [...state, action.payload];
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      return action.payload;
    },
  },
});

export const { addCard, setCards } = cardSlice.actions;

export const fetchCards = () => async (dispatch: any) => {
  const firestore = getFirestore();
  const cardsCollection = collection(firestore, 'Cards'); 

  try {
    
    const querySnapshot = await getDocs(cardsCollection);
    const cards: Card[] = [];

    querySnapshot.forEach((doc) => {
      const cardData = doc.data();
      const card: Card = {
        id: doc.id,
        title: cardData.title,
        description: cardData.description,
      };
      cards.push(card);
    });

    dispatch(setCards(cards));
  } catch (error) {
    console.error('Error fetching cards:', error);
  }
};

export default cardSlice.reducer;
