const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

// 输入的源代码
const code = `const createRecycleContext = require('miniprogram-recycle-view');`;

// 解析源代码为AST
const ast = parser.parse(code, {
  sourceType: "module",
  plugins: ["jsx"], // 如果代码中包含jsx，需要启用jsx插件
});

// 遍历AST，查找并修改require的参数
traverse(ast, {
  CallExpression: function (path) {
    if (path.node.callee.name === "require") {
      const args = path.node.arguments;
      // 获取require的参数
      console.log(args[0].value); // 输出 miniprogram-recycle-view
      // 修改参数
      args[0].value = "aaa"; // 把参数修改为aaa
    }
  },
});

// 生成新的代码
const output = generate(ast, {}, code);

console.log(output.code); // 输出 const createRecycleContext = require('aaa');
