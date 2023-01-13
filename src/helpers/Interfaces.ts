export interface msgState {
  message: { messages: msgData[]; isFetching: boolean; error: boolean };
}

export interface msgData {
  Id: string;
  name: string;
  title: string;
  description: string;
  colour: string;
  time: Date;
}

export interface userState {
  user: { currentUser: any; isFetching: any; error: any };
}
