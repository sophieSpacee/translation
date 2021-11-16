module.exports = {
    contextSeparator: "_",
    // Key separator used in your translation keys
    createOldCatalogs: false,
    // Save the \_old files
    defaultNamespace: "translation",
    // Default namespace used in your i18next config
    defaultValue: "",
    // Default value to give to empty keys
    indentation: 2,
    // Indentation of the catalog files
    keepRemoved: false,
    // Keep keys from the catalog that are no longer in code
    keySeparator: ".",
    // Key separator used in your translation keys
    lexers: {
      hbs: ["HandlebarsLexer"],
      handlebars: ["HandlebarsLexer"],
      htm: ["HTMLLexer"],
      html: ["HTMLLexer"],
      mjs: ["JavascriptLexer"],
      js: ["JavascriptLexer"], // if you're writing jsx inside .js   files, change this to JsxLexer
      ts: ["JavascriptLexer"],
      jsx: ["JsxLexer"],
      tsx: ["JsxLexer"],
      default: ["JavascriptLexer"],
    },
    lineEnding: "auto",
    // Control the line ending. 
    locales: ["en", "de", "fr"],
    // An array of the locales in your applications, do not forget to add a new language here, otherwise, i18next-parser will not create the appropriate JSON file for translation. 
    namespaceSeparator: ":",
    // Namespace separator used in your translation keys
    output: "src/locales/$LOCALE.json",
    // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()
    input: ["src/**/*.{js,jsx}"],
    // An array of globs that describe where to look for source files
    // relative to the location of the configuration file
    reactNamespace: false,
    // For react file, extract the defaultNamespace - https://react.i18next.com/latest/withtranslation-hoc
    // Ignored when parsing a `.jsx` file and namespace is extracted from that file.
    sort: false,
    // Whether or not to sort the catalog
    skipDefaultValues: false,
    // Whether to ignore default values.
    useKeysAsDefaultValue: false,
    // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
    // This option takes precedence over the `defaultValue` and `skipDefaultValues` options
    verbose: false,
    // Display info about the parsing including some stats
    customValueTemplate: null,
    // If you wish to customize the value output the value as an object, you can set your own format.
    // ${defaultValue} is the default value you set in your translation function.
    // Any other custom property will be automatically extracted.
    };