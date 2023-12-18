import ChatBox, { DeleteMessages } from "./components/ChatBox";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#cdd6f4] text-[#4c4f69] dark:bg-[#11111b] dark:text-[#cdd6f4] pt-2 transition-colors duration-700">
      <ThemeSwitch />
      <h1 className="text-center text-[#6176dc] dark:text-[#f9e2af] font-bold text-4xl pt-2">
        ChatForAll
      </h1>
      <DeleteMessages />
      <ChatBox />
    </div>
  );
}
