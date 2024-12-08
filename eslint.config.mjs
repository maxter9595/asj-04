import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "babel.config.js", "**/test/**/*.js"], // Файлы для обработки
    languageOptions: {
      globals: {
        ...globals.browser, // Для браузерных глобальных переменных
        ...globals.node,    // Для Node.js (например, `module`)
        ...globals.jest,    // Для Jest (например, `test`, `expect`)
      },
    },
    plugins: {
      jest: pluginJest, // плагин для тестирования
    },
    rules: {
      ...pluginJest.configs.recommended.rules, // правила для тестирования
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
