const path = require("path");
module.exports = {
  // 微信小程序 -> 支付宝小程序
  fromDir: "./", // 小程序代码根目录
  targetDir: "./dist/aprogram",  // 生成代码根目录
  templateDir: "./convert/template", // 模板文件目录，将被同步到`targetDir`下
  // rsync: {  // 将文件直接同步到多个目标文件
  //   // "convert/template_sync/$my.js": ["convert/template/$my.js"],
  //   // "convert/template_sync/enhance.js": ["convert/template/enhance.js"]
  // },
  filterDir: (p, fromDir) => {
    // 文件过滤器，过滤需要被解析的文件。针对路径p,返回Boolean值，true:需要处理;false:无需处理
    p = p.substr(fromDir.length + 1);
    // whitelist - 必须处理
    if ([
      ".gitignore",
    ].find((fnameStart) => p.indexOf(fnameStart) === 0)) return true;
    // blacklist - 无需处理
    if (
      [
        "node_modules",
        ".gitmodules",
        ".git",
        "build",
        "dist",
        "packagePlugin",
        "convert/",
        "typings/",
        "convert.config.js",
        "plugin/node_modules",
        ".vscode/",
        "plugin/.git"
      ].find((fnameStart) => p.indexOf(fnameStart) === 0)
    ) {
      return false;
    }
    // other - 处理
    return true;
  },
  renamePath: (p, fromDir, targetDir) => {
    // 全局更新目标文件名称或路径
    p = p.replace(fromDir, targetDir);
    const parsed = path.parse(p);
    if (~parsed.dir.indexOf("custom-tab-bar")) { // 换目录
      p = p.replace("custom-tab-bar", "customize-tab-bar");
    }
    if (parsed.ext === ".wxml") {
      return p.replace(/\.wxml$/, ".axml");
    }
    if (parsed.ext === ".wxss") {
      return p.replace(/\.wxss$/, ".acss");
    }
    if (parsed.ext === ".ts") {
      return p.replace(/ts$/, "js");
    }
    if (parsed.name == "project.config" && parsed.ext == ".json") {
      return p.replace("project.config", "mini.project");
    }
    if (parsed.ext === ".wxs") {
      return p.replace(/\.wxs$/, ".sjs");
    }
    return p;
  },
  customFilters: require("./convert"), // 面向所有文件的ast过滤器，主要用于端到端的代码更新适配
};
