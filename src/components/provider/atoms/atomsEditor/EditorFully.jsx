import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';

import './Global.css'; // Make sure to import your styles
import MenuBar from './MenuBar';

const EditorFully = ({ editor }) => {
  useEffect(() => {
    if (!editor) return;

    // Listen for content changes
    const handleUpdate = () => {
      console.log(editor.getText()); // You can use editor.getJSON() if you prefer JSON format
    };

    editor.on('update', handleUpdate);

    // Cleanup event listener on component unmount
    return () => {
      editor.off('update', handleUpdate);
    };
  }, [editor]);

  return (
    <div className='w-full'>
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorFully;
