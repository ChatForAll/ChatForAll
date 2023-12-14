import ChatBox, { DeleteMessages } from "./components/ChatBox";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#191724] text-[#e0def4] pt-2">
      <h1 className="text-center text-[#f9e2af] font-bold text-4xl pt-2">ChatForAll</h1>
      <DeleteMessages />
      <ChatBox />
    </div>
  );
}
