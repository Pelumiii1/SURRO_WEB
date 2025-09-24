import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  text: string;
  name: string;
}

const TestimonalCard = (props: Props) => {
  return (
    <div className="bg-[#FBF8FC] border-2 border-white rounded-[30px] p-5 space-y-5">
      <p className="text-[#737373] text-[16px] lg:text-{24px]">{props.text}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-[#737373] text-[13px] lg:text-[18px]">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default TestimonalCard;
