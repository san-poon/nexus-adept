import { EditorThemeClasses } from "lexical";
import './editorTheme.css';

const theme: EditorThemeClasses = {
  ltr: ' text-left',
  rtl: ' text-right',
  blockquote: 'border-l-4 border-gray-300 pl-4 italic',
  quote: 'bg-wash-90 dark:bg-wash-750 pl-4 pr-2 py-2 rounded-3xl border-l-4 border-wash-500 italic',
  code: ' code block rounded-xl shadow-xl dark:bg-neutral-900 overflow-x-auto text-sm',
  codeHighlight: {
    atrule: 'text-purple-600 dark:text-purple-400', // Purple for @rules
    attr: 'text-green-700 dark:text-green-400', // Green for attributes
    boolean: 'text-blue-600 dark:text-blue-400', // Blue for booleans
    builtin: 'text-blue-600 dark:text-blue-400', // Blue for built-ins
    cdata: 'text-gray-500 dark:text-gray-400', // Gray for CDATA
    char: 'text-yellow-700 dark:text-yellow-400', // Yellow for character data
    class: 'text-yellow-600 dark:text-yellow-400', // Yellow for class
    'class-name': 'text-blue-700 dark:text-blue-400', // Blue for class names
    comment: 'text-gray-500 dark:text-gray-400 italic', // Gray for comments, italicized
    constant: 'text-blue-600 dark:text-blue-400', // Blue for constants
    deleted: 'text-red-600 dark:text-red-300 line-through', // Red for deleted text, line-through
    doctype: 'text-gray-500 dark:text-gray-400', // Gray for doctype
    entity: 'text-purple-600 dark:text-purple-400', // Purple for entities
    function: 'text-yellow-600 dark:text-yellow-300', // Yellow for functions
    important: 'text-red-600 dark:text-red-500 font-medium', // Red for important, bold
    inserted: 'text-green-700 dark:text-green-400', // Green for inserted text
    keyword: 'text-red-600 dark:text-red-400 font-medium', // Purple for keywords, bold
    namespace: 'text-gray-500 dark:text-gray-400', // Gray for namespace
    number: 'text-blue-600 dark:text-blue-400', // Blue for numbers
    operator: 'text-gray-900 dark:text-gray-100', // Dark gray for operators
    prolog: 'text-gray-500 dark:text-gray-400', // Gray for prolog
    property: 'text-blue-600 dark:text-blue-400', // Blue for properties
    punctuation: 'text-gray-900 dark:text-gray-100', // Dark gray for punctuation
    regex: 'text-blue-600 dark:text-blue-300', // Blue for regex
    selector: 'text-purple-600 dark:text-purple-300', // Purple for selectors
    string: 'text-green-700 dark:text-green-300', // Green for strings
    symbol: 'text-blue-600 dark:text-blue-300', // Blue for symbols
    tag: 'text-blue-700 dark:text-blue-300', // Blue for tags
    url: 'text-blue-600 dark:text-blue-300', // Blue for URLs
    variable: 'text-orange-600 dark:text-orange-400', // Orange for variables
  }
  ,
  heading: {
    h1: 'text-4xl mb-6 font-medium tracking-tight',
    h2: 'text-3xl mt-8 mb-4 font-medium',
    h3: 'text-2xl mt-6 mb-3 font-medium',
    h4: 'text-xl mt-4 mb-2 font-medium'
  },
  hr: 'hr',
  link: "no-underline hover:underline underline-offset-4 text-cyan-600 dark:text-cyan-100 transition-colors cursor-pointer",
  list: {
    checklist: '',
    listitem: 'ps-1 lg:ps-6',
    listitemChecked: '',
    listitemUnchecked: '',
    nested: {
      listitem: '',
    },
    ol: 'list-decimal leading-8 list-inside marker:text-neutral-700 dark:marker:text-neutral-300',
    ul: 'list-disc leading-8 list-inside marker:text-neutral-500',
  },
  paragraph: 'leading-8 my-4',
  table: 'border-collapse overflow-x-scroll overflow-y-scroll table-fixed w-max my-6 mr-6',
  tableCell: "border border-gray-400 w-[75px] min-w-[75px] align-top text-start p-2 relative outline-none",
  tableCellActionButton: 'bg-gray-200 block border-0 rounded-full w-5 h-5 text-gray-900 cursor-pointer',
  tableCellActionButtonContainer: 'block right-1 top-1.5 absolute z-4 w-5 h-5',
  tableCellEditing: 'shadow-lg rounded-sm',
  tableCellHeader: 'bg-wash-70 dark:bg-wash-750 text-start',
  tableCellPrimarySelected: 'border border-blue-500 block h-[calc(100%-2px)] absolute w-[calc(100%-2px)] left-[-1px] top-[-1px] z-2',
  tableCellResizer: 'absolute right-[-4px] h-full w-2 cursor-ew-resize z-10 top-0',
  tableCellSelected: 'bg-blue-100',
  tableCellSortedIndicator: 'block opacity-50 absolute bottom-0 left-0 w-full h-1 bg-gray-600',
  tableResizeRuler: '',
  tableSelected: 'outline-[2px] outline-blue-500',
  tableRow: '',
  tableAddRows: 'absolute w-[calc(100%-25px)] bg-gray-200 animate-[table-controls_0.2s_ease] border-0 cursor-pointer',
  tableAddColumns: 'absolute bg-gray-200 h-full animate-[table-controls_0.2s_ease] border-0 cursor-pointer',
  tableCellResizeRuler: 'absolute w-1 bg-blue-500 h-full top-0',
  text: {
    bold: 'font-bold dark:opacity-90',
    italic: 'italic',
    underline: 'underline underline-offset-4',
    strikethrough: 'line-through',
    underlineStrikethrough: 'underline line-through',
    code: 'codeText bg-wash-80 dark:bg-wash-720 px-1 rounded text-sm',
    subscript: 'text-[0.8em] align-sub !important',
    superscript: 'text-[0.8em] align-super',
  },

};

export default theme;