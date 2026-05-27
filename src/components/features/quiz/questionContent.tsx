import { Question } from "@/types/IQuestion";
import { CardList } from "./cardList";

export const QuestionContent = ({ item }: { item: Question }) => {
  return (
    <>
      <h1 className="font-sans text-2xl text-accent mb-10 lg:text-center">
        {item.question}
      </h1>
      <CardList items={item} id={item.id} />
    </>
  );
};
