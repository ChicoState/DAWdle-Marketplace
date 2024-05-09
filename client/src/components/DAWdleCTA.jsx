import { Button } from "flowbite-react";
import DAWdle1 from "../assets/DAWdle1.png";

export default function DAWdleCTA() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to make audio?</h2>
        <p className="text-gray-500 my-2">
          Checkout this resource if you are new to using DAWdle want to be able
          to run it.
        </p>
        <Button className="rounded-tl-xl rounded-bl-none bg-gradient-to-r from-slate-700 to-green-400">
          <a
            href="https://github.com/ChicoState/DAWdle"
            target="_blank"
            rel="noopener noreferrer"
          >
            DAWdle Source Code Installation
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={DAWdle1} alt="DAWdle" />
      </div>
    </div>
  );
}
