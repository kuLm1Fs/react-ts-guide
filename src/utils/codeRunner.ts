/**
 * 将 TypeScript 代码转译为 JavaScript（用于浏览器端执行）
 * 注意：这是简化版转译，只处理练习中可能用到的语法
 */
export function transpileTS(code: string): string {
  let result = code;

  // 移除 interface 声明
  result = result.replace(/^interface\s+\w+\s*\{[^}]*\}/gm, '');
  result = result.replace(/^interface\s+\w+\s+extends\s+[^{]+\{/gm, (match) => {
    // 处理 extends 的情况，提取 extend 后的类型名
    const extendMatch = match.match(/extends\s+(\w+)/);
    return '';
  });

  // 移除 type 别名声明（简单类型）
  result = result.replace(/^type\s+\w+\s*=\s*[^;]+;/gm, '');

  // 移除 : type 注解（变量声明、函数参数、返回值）
  result = result.replace(/:\s*(string|number|boolean|void|any|\w+(\[\])?)\s*([=,);\n\r])/g, '$3');

  // 移除函数参数和返回值的类型注解
  result = result.replace(/(\w+)\s*:\s*(string|number|boolean|void|any|\w+(\[\])?)/g, '$1');

  // 移除 as 断言
  result = result.replace(/\s+as\s+\w+/g, '');

  // 移除 <> 泛型（简单处理）
  result = result.replace(/<\w+(\[\])?>/g, '');

  // 清理空行
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