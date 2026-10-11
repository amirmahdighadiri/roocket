import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import {
    Bold, Italic, Link2, Quote, Code, Image as ImageIcon,
    ListOrdered, List, Heading, Minus, Undo2, Redo2,
} from "lucide-react";

function ToolbarButton({ onClick, active, disabled, title, children }) {
    return (
        <button
            type="button"
            title={title}
            disabled={disabled}
            onClick={onClick}
            className={`rounded p-1.5 transition hover:text-blue-700 disabled:opacity-30 ${
                active ? "text-blue-700" : "text-gray-980"
            }`}
        >
            {children}
        </button>
    );
}

function CommentEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ link: { openOnClick: false } }),
            Image,
            Placeholder.configure({
                placeholder: "متن مورد نظر خود را وارد کنید ...",
            }),
        ],
        content: "",
        editorProps: {
            attributes: {
                dir: "rtl",
                class: "min-h-[240px] bg-dark-900 p-4 text-gray-900 outline-none",
            },
        },
    });

    const state = useEditorState({
        editor,
        selector: ({ editor }) => ({
            bold: editor?.isActive("bold"),
            italic: editor?.isActive("italic"),
            code: editor?.isActive("code"),
            quote: editor?.isActive("blockquote"),
            ol: editor?.isActive("orderedList"),
            ul: editor?.isActive("bulletList"),
            h: editor?.isActive("heading"),
            canUndo: editor?.can().undo(),
            canRedo: editor?.can().redo(),
        }),
    });

    if (!editor) return null;

    const setLink = () => {
        const url = window.prompt("آدرس لینک:");
        if (url) editor.chain().focus().setLink({ href: url }).run();
    };

    const addImage = () => {
        const url = window.prompt("آدرس تصویر:");
        if (url) editor.chain().focus().setImage({ src: url }).run();
    };

    const submit = () => {
        const html = editor.getHTML();
        console.log(html); // اینجا بعداً می‌فرستی به بک‌اند
    };

    return (
        <div className="w-full" dir="rtl">
            <div className="flex items-center gap-1 rounded-lg bg-dark-body-300 px-3 py-2" dir="ltr">
                <ToolbarButton title="ضخیم" active={state?.bold} onClick={() => editor.chain().focus().toggleBold().run()}>
                    <Bold size={18} />
                </ToolbarButton>
                <ToolbarButton title="کج" active={state?.italic} onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <Italic size={18} />
                </ToolbarButton>
                <ToolbarButton title="لینک" onClick={setLink}>
                    <Link2 size={18} />
                </ToolbarButton>
                <ToolbarButton title="نقل‌قول" active={state?.quote} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <Quote size={18} />
                </ToolbarButton>
                <ToolbarButton title="کد" active={state?.code} onClick={() => editor.chain().focus().toggleCode().run()}>
                    <Code size={18} />
                </ToolbarButton>
                <ToolbarButton title="تصویر" onClick={addImage}>
                    <ImageIcon size={18} />
                </ToolbarButton>
                <ToolbarButton title="لیست شماره‌دار" active={state?.ol} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <ListOrdered size={18} />
                </ToolbarButton>
                <ToolbarButton title="لیست" active={state?.ul} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <List size={18} />
                </ToolbarButton>
                <ToolbarButton title="عنوان" active={state?.h} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    <Heading size={18} />
                </ToolbarButton>
                <ToolbarButton title="خط جداکننده" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <Minus size={18} />
                </ToolbarButton>
                <ToolbarButton title="بازگشت" disabled={!state?.canUndo} onClick={() => editor.chain().focus().undo().run()}>
                    <Undo2 size={18} />
                </ToolbarButton>
                <ToolbarButton title="تکرار" disabled={!state?.canRedo} onClick={() => editor.chain().focus().redo().run()}>
                    <Redo2 size={18} />
                </ToolbarButton>
            </div>

            <div className="mt-4">
                <EditorContent editor={editor} />
            </div>

            <div className="mt-6 flex gap-3">
                <button type="button" onClick={submit} className="rounded-md bg-blue-700 px-6 py-3 text-sm text-white">
                    ثبت دیدگاه
                </button>
                <button
                    type="button"
                    onClick={() => editor.commands.clearContent()}
                    className="rounded-md border border-gray-450 px-6 py-3 text-sm text-gray-300"
                >
                    انصراف
                </button>
            </div>
        </div>
    );
}

export default CommentEditor;