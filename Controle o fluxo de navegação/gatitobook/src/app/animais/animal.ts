export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowCommnents: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Animais = Animal[];
