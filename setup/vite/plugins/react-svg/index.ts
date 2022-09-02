import { Config, transform } from '@svgr/core';
import { PathOrFileDescriptor, readFileSync } from 'fs';
import { Plugin, TransformResult } from 'vite';

type PluginOptions = Config & {
  defaultExport: 'url' | 'component';
};

function compileSvg(source: string, id: string, options: Config): Promise<string> {
  return transform(
    source,
    {
      ...options,
      jsx: {
        babelConfig: {
          plugins: [
            [
              '@babel/plugin-transform-react-jsx',
              {
                useBuiltIns: true,
              },
            ],
          ],
        },
      },
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      runtimeConfig: false,
    },
    {
      filePath: id,
    },
  );
}

export default (options: PluginOptions): Plugin => {
  const {
    defaultExport = 'url',
    svgoConfig,
    expandProps,
    svgo,
    ref,
    memo,
    replaceAttrValues,
    svgProps,
    titleProp,
  } = options;

  const cache = new Map<string, PathOrFileDescriptor>();
  const svgRegex = /\.svg(?:\?(component|url))?$/;

  return {
    name: 'react-svg',
    async transform(source: string, id: string, isBuild): Promise<TransformResult> {
      const svgRegexResult = id.match(svgRegex);

      if (svgRegexResult) {
        const type = svgRegexResult[1];

        if ((defaultExport === 'url' && typeof type === 'undefined') || type === 'url') {
          return source as unknown as TransformResult;
        }

        if (
          (defaultExport === 'component' && typeof type === 'undefined') ||
          type === 'component'
        ) {
          const idWithoutQuery = id.replace('.svg?component', '.svg');
          let result = cache.get(idWithoutQuery);

          if (!result) {
            const code = readFileSync(idWithoutQuery).toString();

            result = await compileSvg(code, idWithoutQuery, {
              expandProps,
              memo,
              ref,
              replaceAttrValues,
              svgProps,
              svgo,
              svgoConfig,
              titleProp,
            });

            if (isBuild) {
              cache.set(idWithoutQuery, result);
            }
          }

          return result as unknown as TransformResult;
        }
      }
    },
  };
};
