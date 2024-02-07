import { Bug, Files, GitFork, Puzzle } from "lucide-react";
import { MenuButton } from "./MenuButton";
import { SocialLinksMenuButton } from "./SocialLinksMenuButton";

export function Menu() {
  return (
    <div className="flex lg:flex-col sm:flex-row justify-between overflow-hidden max-h-fit">
      <div className="flex lg:flex-col sm:flex-row">
        <MenuButton icon={Files} isActive />
        <MenuButton icon={GitFork} />
        <MenuButton icon={Bug} />
        <MenuButton icon={Puzzle} />
      </div>
      <div className="flex lg:flex-col sm:flex-row items-center">
        <SocialLinksMenuButton />
      </div>
    </div>
  );
}
