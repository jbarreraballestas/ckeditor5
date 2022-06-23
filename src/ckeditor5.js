import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
export default class ClassicEditor extends ClassicEditorBase {}
ClassicEditor.builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    // EasyImage,
    // Heading,
    // Image,
    // ImageCaption,
    // ImageStyle,
    // ImageToolbar,
    // ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            // 'heading',
            '|',
            'alignment',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            // 'uploadImage',
            'blockQuote',
            'undo',
            'redo'
        ]
    },
    // image: {
    //     toolbar: [
    //         'imageStyle:inline',
    //         'imageStyle:block',
    //         'imageStyle:side',
    //         '|',
    //         'toggleImageCaption',
    //         'imageTextAlternative'
    //     ]
    // },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};

window.ClassicEditor = ClassicEditor;