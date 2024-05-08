import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to generate audio?</h2>
        <p className="text-gray-500 my-2">
          Checkout this resource if you are in need of a producer
        </p>
        <Button className="rounded-tl-xl rounded-bl-none bg-gradient-to-r from-slate-700 to-green-400">
          <a
            href="https://www.fiverr.com/flimango"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music Producer for hire
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Music_production_on_couch.jpg" />
      </div>
    </div>
  );
}
