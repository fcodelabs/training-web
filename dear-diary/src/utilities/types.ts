export type userStateType = {
    userId: number;
    userName: string;
    isLogged: boolean;
}

export type Card = {
    id: string
    title: string;
    body: string;
};

export type SubmitCard = {
    userName: string;
    title: string;
    body: string;
};


export type DiaryCardStateType = {
    isLoading: boolean;
    cards: Card[];

};