/**
 * All themes in vscode are copied over, with some transformations
 */

/**
 * Remove these themes bundled in vscode
 */
export const vscodeThemesToRemove = [
  // Included in dark_plus
  'dark_vs',
  // Included in light_plus
  'light_vs',
  'Red-color-theme',
  'dimmed-monokai-color-theme',
  'kimbie-dark-color-theme',
  'quietlight-color-theme',
  'abyss-color-theme',
  'hc_black',
  'tomorrow-night-blue-color-theme'
]

/**
 * Rename these themes bundled in vscode
 */
export const vscodeThemesToRename = {
  dark_plus: 'dark-plus',
  light_plus: 'light-plus',
  'monokai-color-theme': 'monokai',
  'solarized-dark-color-theme': 'solarized-dark',
  'solarized-light-color-theme': 'solarized-light'
}

/**
 * All theme sources on github.com.
 *
 * To add one:
 * - Add the URL to the end
 * - Run `yarn update:themes`, examine the changes
 *
 * The theme id is normalized from the `name` key of the theme json file.
 * When the theme provides an undesirable name (or no `name` key), for example `Slack Theme Dark Mode` at
 * https://github.com/slack-theme/visual-studio-code/blob/f4c3c57d35b89874de3c96df551d6809a30a82d7/themes/dark-mode.json#L2
 * provide an array like `['slack-dark', '<url>']` to name the theme `slack-dark`
 */
export const githubThemeSources: (string | [string, string])[] = [
  [
    'nord',
    'https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/themes/nord-color-theme.json'
  ],
  'https://github.com/misolori/min-theme/blob/master/themes/min-light.json',
  'https://github.com/misolori/min-theme/blob/master/themes/min-dark.json',
  [
    'slack-ochin',
    'https://github.com/slack-theme/visual-studio-code/blob/master/themes/ochin.json'
  ],
  [
    'slack-dark',
    'https://github.com/slack-theme/visual-studio-code/blob/master/themes/dark-mode.json'
  ]
]

/**
 * Themes from VS Code marketplace
 * Some themes have compilation step and do not include the built theme on GitHub,
 * so pull from VS Code marketplace instead.
 *
 * Key is publisher + extId
 * Value is a list. Each item represents a file to extract from the downloaded VSIX.
 * If given a single path `extension/foo/bar.json`, extract `bar.json` to `tmp/themes/bar.json`
 * If given ['baz.json', `extension/foo/bar.json`], extract `bar.json` to `tmp/themes/baz.json`
 */
export const marketplaceThemeSources: { [extPublisherAndId: string]: (string | string[])[] } = {
  'equinusocio.vsc-material-theme': [
    ['material-darker.json', 'extension/build/themes/Material-Theme-Darker.json'],
    ['material-default.json', 'extension/build/themes/Material-Theme-Default.json'],
    ['material-lighter.json', 'extension/build/themes/Material-Theme-Lighter.json'],
    ['material-ocean.json', 'extension/build/themes/Material-Theme-Ocean.json'],
    ['material-palenight.json', 'extension/build/themes/Material-Theme-Palenight.json']
  ],
  'GitHub.github-vscode-theme': [
    ['github-dark.json', 'extension/themes/dark.json'],
    ['github-light.json', 'extension/themes/light.json']
  ]
}
