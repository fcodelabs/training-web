import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


interface User {
    id: string | null;
    name: string;
  }


const userSlice = createSlice({
  name: 'users',
  initialState: [] as User[],
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return [...state, action.payload];
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },
  },
});

export const { addUser, setUsers } = userSlice.actions;

export const fetchUsers = () => async (dispatch: any) => {
  const firestore = getFirestore();
  const usersCollection = collection(firestore, 'Users'); 

  try {
    
    const querySnapshot = await getDocs(usersCollection);
    const users: User[] = [];

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const user: User = {
        id: doc.id,
        name: userData.name
      };
      users.push(user);
    });

    dispatch(setUsers(users));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export default userSlice.reducer;
