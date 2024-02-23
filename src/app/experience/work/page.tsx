import { CodePreview } from "@/components/CodePreview";
import { getCodeBlockFromNotion } from "@/lib/notion-client";
import { getNotionPagesId } from "@/lib/vercel-edge-config";
import shiki from "shiki";

export const metadata = {
  title: "Experience",
};

export default async function General() {
  return (
    <div className="text-[#8F8CA8] ml-5">
      <div className="mb-5">
        <h2 className="text-xl font-bold">Vilt Group</h2>
        <p className="text-xs">07/2021 - 05/2023</p>
        <p className="text-sm mt-2">Consultancy for new customers </p>
        <ul className="list-disc ml-5 mb-2">
          <li>React js</li>
          <li>Adobe Experience Manager</li>
          <li>Jest</li>
          <li>UX</li>
        </ul>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-bold">Avenue Code</h2>
        <p className="text-xs">07/2021 - 05/2023</p>
        <p className="text-sm mt-2">E-commerce for car brands </p>
        <ul className="list-disc ml-5 mb-2">
          <li>Vue js</li>
          <li>Adobe Experience Manager</li>
          <li>Docker</li>
          <li>Vuex</li>
          <li>Scrum</li>
          <li>Jest</li>
        </ul>
        <p className="text-sm">Avenue Code HR product</p>
        <ul className="list-disc ml-5">
          <li>React</li>
          <li>Redux</li>
          <li>Jest</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold">It Beta2</h2>
        <p className="text-xs">03/2021 - 06/2021</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Angular</li>
          <li>Flutter</li>
        </ul>
      </div>
    </div>
  );
}
