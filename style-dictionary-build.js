// Import StyleDictionary using ES module syntax
import StyleDictionaryModule from 'style-dictionary';
// Attempt to import everything under a namespace from '@tokens-studio/sd-transforms'
import * as sdTransforms from '@tokens-studio/sd-transforms';

const StyleDictionary = sdTransforms.default
  ? sdTransforms.default(StyleDictionaryModule)
  : StyleDictionaryModule;

// Helper function to generate brand color variable name
const getBrandColorVariableReference = (value, allTokens, currentTokenName) => {
  if (currentTokenName.includes('brand-colors')) {
    return value; // Keep the original hex value for brand color tokens
  }

  const brandToken = allTokens.find(token =>
    token.value === value && token.name.includes('brand-colors')
  );
  if (brandToken) {
    const brandTokenName = brandToken.name.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`).replace('global-', '');
    return `var(--${brandTokenName})`;
  }
  return value;
};

// Additional custom tokens not generated from the source files
const additionalBrandTokens = {
  "--font-family-roboto": "'Roboto', sans-serif",
  "--font-family-sans": "'Euclid Circular B', 'Roboto', sans-serif",
};

// Define a custom format
StyleDictionary.registerFormat({
  name: 'custom/cssVariables',
  formatter({ dictionary }) {
    const baseTokens = [];
    const lightThemeTokens = [];
    const darkThemeTokens = [];
    const allTokens = dictionary.allProperties;

    // Manually adding additional brand tokens
    Object.entries(additionalBrandTokens).forEach(([name, value]) => {
      baseTokens.push(`  ${name}: ${value};`);
    });

    dictionary.allProperties.forEach(token => {
      let tokenName = token.name.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
      tokenName = tokenName.replace('light-colors', 'color').replace('dark-colors', 'color').replace('global-', '').replace('font-families', 'font-family');

      // Adjust font family tokens specifically
      if (tokenName.startsWith('--font-family')) {
        token.value = `'${token.value}', sans-serif`;
      }

      // Replace direct color values with brand color variable references for other tokens
      let tokenValue = getBrandColorVariableReference(token.value, allTokens, token.name);
      const cssVariable = `  --${tokenName}: ${tokenValue};`;

      if (token.name.includes('light')) {
        lightThemeTokens.push(cssVariable.replace('--light-', '--'));
      } else if (token.name.includes('dark')) {
        darkThemeTokens.push(cssVariable.replace('--dark-', '--'));
      } else {
        baseTokens.push(cssVariable);
      }
    });

    return `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */
:root {
${baseTokens.join('\n')}
}

:root {
${lightThemeTokens.join('\n')}
}

[data-theme='dark'] {
${darkThemeTokens.join('\n')}
}`;
  },
});

// Style Dictionary configuration
const config = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'test-build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'custom/cssVariables',
        },
      ],
    },
  },
};

// Extend and build Style Dictionary
const MyStyleDictionary = StyleDictionary.extend(config);
MyStyleDictionary.buildAllPlatforms();