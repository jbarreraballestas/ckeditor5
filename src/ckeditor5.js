import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Font from '@ckeditor/ckeditor5-font/src/font';


import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

export default class ClassicEditor extends ClassicEditorBase { }
ClassicEditor.builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Font,
    BlockQuote,
    Table, TableToolbar, TableCaption, TableProperties, TableCellProperties, TableColumnResize,
    Link,
    List,
    Paragraph,
    Alignment,
    RemoveFormat,
    TodoList,
    Indent,
    IndentBlock,
    Subscript,
    Superscript,
    HorizontalLine
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'removeFormat',
            '|',
            'alignment',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'link',
            '|',
            'fontSize',
            'fontFamily',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'outdent', 'indent',
            'blockQuote',
            'undo',
            'redo',
            'insertTable',
            'subscript', 'superscript',
            '|',
            'horizontalLine'
        ]
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption']
    },
    fontSize: {
        options: [
            '8','10','12','14','default','18','20','22','24','26','28','30',
        ],
        supportAllValues: true
    },
    // fontFamily: {
    //     options: [
    //         // ...
    //     ],
    //     supportAllValues: true
    // },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};

window.ClassicEditor = ClassicEditor;