export type BeyondLetterType = {
  _id: string;
  userId: string;
  userImage: string;
  typeOfLetter: "text" | "video" | "audio";
  sourceLink: string;
  letterText: string;
  dateOfEmailSubmit: Date;
  createdAt: string;
  emails: string[];
  userName: string;
};
