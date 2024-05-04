import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-green-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md: grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-slate-700 to-green-400 rounded-lg text-white">
                DAWdle
              </span>
              Marketplace
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ChicoState/DAWdle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAWdle Application Source
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Slam210/DAWdle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAWdle Wesbite Source
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Githubs" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Slam210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steven Lam
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Tabris05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aidan Raymond
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/AdamUllmann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adam Ulmnann
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Drillgon200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evan Pottier
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="DAWdle Team"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
