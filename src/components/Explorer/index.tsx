import {
  FileJson,
  MoreHorizontal,
  Terminal,
  Info,
  Languages,
  Scroll,
} from "lucide-react";
import { OpenFilesSubMenu } from "../OpenFilesTabs/OpenFilesSubMenu";
import { File } from "./File";
import { Folder } from "./Folder";
import { SubMenu } from "./SubMenu";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/information/presentation": {
    icon: <FileJson size={16} />,
    title: "Welcome!",
  },
  "/information/personalInformation": {
    icon: <Info size={16} />,
    title: "Personal Information",
  },
  "/skills/techSkills": {
    icon: <FileJson size={16} />,
    title: "Tech Skills",
  },
  "/skills/languageSkills": {
    icon: <Languages size={16} />,
    title: "Language Skills",
  },
  "/experience/work": {
    icon: <Terminal size={16} />,
    title: "Work experience",
  },
  "/education/graduation": {
    icon: <Scroll size={16} />,
    title: "Graduation",
  },
  "/education/extracurricular": {
    icon: <Terminal size={16} />,
    title: "extracurricular",
  },
};

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8] overflow-y-auto">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="RAFAEL BRITO">
          <Folder defaultOpen title="Information">
            <File href="/information/presentation">
              <FileJson size={16} />
              Presentation
            </File>
            <File href="/information/personalInformation">
              <Info size={16} />
              Personal Info
            </File>
          </Folder>

          <Folder title="Skills">
            <File href="/skills/techSkills">
              <FileJson size={16} />
              Tech Skills
            </File>
            <File href="/skills/languageSkills">
              <Languages size={16} />
              Languages
            </File>
          </Folder>

          <Folder title="Experience">
            <File href="/experience/work">
              <Terminal size={16} />
              Work Experience
            </File>
          </Folder>

          <Folder title="Education">
            <File href="/education/graduation">
              <Scroll size={16} />
              Graduation
            </File>
            <File href="/education/extracurricular">
              <Terminal size={16} />
              Extracurricular
            </File>
          </Folder>
        </SubMenu>
      </nav>
    </div>
  );
}
