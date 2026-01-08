
import React, { useRef } from 'react';
import { BoldIcon, ItalicIcon, UnderlineIcon, ListBulletedIcon, ListNumberedIcon } from './Icons';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
    if (editorRef.current) {
        editorRef.current.focus();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.innerHTML);
  };

  const ToolbarButton: React.FC<{onClick: () => void, children: React.ReactNode}> = ({ onClick, children }) => (
    <button 
        type="button" 
        onClick={onClick}
        onMouseDown={e => e.preventDefault()} // Prevent editor from losing focus
        className="p-2 rounded hover:bg-slate-600 text-light-slate transition-colors"
    >
        {children}
    </button>
  );

  return (
    <div className="bg-slate-700 border border-slate-600 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-earthy-green focus-within:border-earthy-green">
      <div className="toolbar flex items-center p-1 border-b border-slate-600 space-x-1">
        <ToolbarButton onClick={() => handleFormat('bold')}> <BoldIcon className="w-5 h-5" /> </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('italic')}> <ItalicIcon className="w-5 h-5" /> </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('underline')}> <UnderlineIcon className="w-5 h-5" /> </ToolbarButton>
        <div className="w-px h-6 bg-slate-600 mx-1"></div>
        <ToolbarButton onClick={() => handleFormat('insertUnorderedList')}> <ListBulletedIcon className="w-5 h-5" /> </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('insertOrderedList')}> <ListNumberedIcon className="w-5 h-5" /> </ToolbarButton>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        className="prose prose-invert max-w-none p-3 min-h-[200px] text-light-slate focus:outline-none"
      />
    </div>
  );
};
