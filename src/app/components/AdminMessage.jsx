import Image from "next/image";
import ModalDialogue from "./ModalDialogue";

const AdminMessage = (props) => {
  return (
    <div className="bg-[#e6e9ef] dark:bg-[#1e1e2e] my-3 p-4 flex flex-col rounded-2xl w-full md:w-3/4 lg:w:2/3 xl:w-3/5 2xl:w-1/2">
      <div className="flex flex-row">
        <Image
          className="w-8 h-8 rounded-full mr-2.5"
          width={32}
          height={32}
          src="/chatforall.svg"
          alt="admin"
        />
        <div className="flex items-center break-words whitespace-pre-wrap">
          {props.children}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-2 -mb-2">
        <p className="flex items-center text-xs">Admin</p>
        <ModalDialogue
          svgIcon={
            <svg
              width="15"
              height="15"
              className="text-[#8839ef] dark:text-[#f9e2af]"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
            >
              <path d="M7.5 0C3.36 0 0 3.36 0 7.5S3.36 15 7.5 15 15 11.64 15 7.5 11.64 0 7.5 0zm0 .961c3.61 0 6.539 2.929 6.539 6.539S11.11 14.039 7.5 14.039.961 11.11.961 7.5 3.89.961 7.5.961zm.11 1.594a4.244 4.244 0 0 0-1.146.155 3.113 3.113 0 0 0-.966.466 3.166 3.166 0 0 0-.652.64 2.642 2.642 0 0 0-.535 1.468l1.636.202c.004 0 .008-.018.021-.07.146-.606.411-1.014.823-1.261.324-.195.736-.271 1.183-.223.206.022.391.072.553.15a1.394 1.394 0 0 1 .52.436 1.14 1.14 0 0 1 .204.789 1.106 1.106 0 0 1-.319.659c-.152.156-.388.362-.808.706-.27.221-.453.387-.609.551-.371.388-.539.68-.642 1.104-.068.279-.094.566-.087.989l.005.223v.032h1.62l.002-.18c.002-.245.016-.403.042-.556.043-.245.107-.375.295-.586.12-.135.278-.282.52-.485.358-.299.608-.524.844-.759.368-.368.559-.619.696-.914.107-.232.167-.462.184-.715a3.289 3.289 0 0 0 0-.298c-.034-.528-.232-.994-.611-1.427a3.068 3.068 0 0 0-1.596-.961 4.39 4.39 0 0 0-1.001-.131 3.508 3.508 0 0 0-.178-.002zm-.818 7.77v1.65h1.65v-1.65h-1.65z" />
            </svg>
          }
          title="Keyboard shortcuts"
          items={[
            { key: "Focus chat input", values: ["Shift", "Esc"] },
            { key: "Copy last message", values: ["Ctrl", "Shift", "C"] },
            { key: "Show shortcuts", values: ["Ctrl", "/"] },
          ]}
        />
      </div>
    </div>
  );
};

export default AdminMessage;
