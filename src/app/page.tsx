import Home from "@/containers/Home";
import fs from "fs";
import { ConfigType } from "@/types/config";
import path from "path";
export default function Page() {
  const config: ConfigType = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "./config.json"), "utf-8"));
  return <Home config={config}  />;
}
