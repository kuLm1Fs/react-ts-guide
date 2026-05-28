/**
 * 将 TypeScript 代码转译为 JavaScript（用于浏览器端执行）
 */
export function transpileTS(code: string): string {
  let result = code;

  // 1. 移除 interface 声明（整行）
  result = result.replace(/^interface\s+\w+[^{]*\{[^}]*\}/gm, '');

  // 2. 移除 type 别名声明（整行）
  result = result.replace(/^type\s+\w+\s*=[^;]+;/gm, '');

  // 3. 处理对象属性类型注解（只处理 TS 已知类型）
  // { name: string; price: 6999 } -> { name; price: 6999 }
  result = result.replace(/(\w+)\s*:\s*(string|number|boolean|void|any)\s*([,;}\s])/g, '$1$3');

  // 4. 处理函数返回类型
  // function foo(): number { } -> function foo() { }
  result = result.replace(/\)\s*:\s*[a-zA-Z]\w*/g, ')');

  // 5. 处理变量/参数类型注解（只移除标识符类型的类型名）
  // const x: SomeType = value -> const x = value
  // 注意：不移除数字值（price: 6999 不会被影响，因为 "6999" 不是字母开头的标识符）
  result = result.replace(/:\s*([a-zA-Z]\w*)(\[\])?(?=\s*[=,);])/g, '');

  // 6. 移除 as 断言
  result = result.replace(/\s+as\s+\w+/g, '');

  // 7. 清理空行
  result = result.replace(/^\s*$/gm, '');

  return result.trim();
}

/**
 * 执行代码（TS 转译后）
 */
export function executeCode(code: string): { output: string; error?: string } {
  try {
    const transpiled = transpileTS(code);
    const logs: string[] = [];

    const customConsole = {
      log: (...args: unknown[]) => logs.push(args.map(String).join(' ')),
      error: (...args: unknown[]) => logs.push('Error: ' + args.map(String).join(' ')),
      warn: (...args: unknown[]) => logs.push('Warn: ' + args.map(String).join(' ')),
    };

    // 使用 new Function 执行
    const fn = new Function('console', transpiled);
    fn(customConsole);

    return { output: logs.length > 0 ? logs.join('\n') : '(无输出)' };
  } catch (e) {
    return { output: '', error: (e as Error).message };
  }
}