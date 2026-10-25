import { useEditor, EditorContent, useEditorState } from "@tiptap/react"
import {Link} from 'react-router-dom'
import StarterKit from "@tiptap/starter-kit"
import {useContext} from "react"
import {useDispatch} from "react-redux"
import Placeholder from "@tiptap/extension-placeholder"
import Image from "@tiptap/extension-image"
import {
    Bold, Italic, Link2, Quote, Code, Image as ImageIcon,
    ListOrdered, List, Heading, Minus, Undo2, Redo2,
} from "lucide-react";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import defaultProfile from "../../assets/images/profile/default.png";
import {AppContext} from "../../Context/AppContext.jsx";
import {addCommentToServer} from "../../Redux/Store/Comments.jsx";

function ToolbarButton({ onClick, active, disabled, title, children }) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`relative flex justify-center rounded p-1.5 transition  hover:text-blue-700 disabled:opacity-30 cursor-pointer group ${
                active ? "text-blue-700" : "text-biscay-700 dark:text-white"
            }`}
        >
            {children}
            <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-3 hidden -translate-x-1/2  whitespace-nowrap rounded bg-gray-350/20 px-2 py-0.5 text-sm text-biscay-700 group-hover:block dark:text-white">{title}</span>
        </button>
    );
}

function CommentEditor({toggleShowEditor , parentId , courseCommentLen,courseId}) {
    const {userInfo ,setIsShowNotification} = useContext(AppContext)
    const dispatch = useDispatch()
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
                class: "min-h-60 leading-loose w-full p-4 text-base font-Mult-Font-Medium dark:placeholder-gray-920 dark:text-white placeholder-gray-400 border dark:border-dark-900 border-gray-200 focus:border-blue-700 rounded-md dark:bg-dark-900 outline-none",
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
        if (url && /^https?:\/\//i.test(url)) editor.chain().focus().setLink({ href: url }).run();
    };

    const addImage = () => {
        const url = window.prompt("آدرس تصویر:");
        if (url && /^https?:\/\//i.test(url)) editor.chain().focus().setImage({ src: url }).run();
    };

    const submit = async () => {
        const text = editor.getText().trim();


        if (!text) return

        const newComment = {
            id: courseCommentLen +1,
            courseId: courseId,
            userId: userInfo.id,
            parentId: parentId ? parentId : null,
            text: editor.getHTML(),
            createdAt: new Date().toISOString()
        }

        try{
            await dispatch(addCommentToServer(newComment)).unwrap()

            editor.commands.clearContent();
            toggleShowEditor(false)
        }catch(e){
            setIsShowNotification(true);
        }
    };

    return (
        <div className="border border-gray-210 dark:border-gray-210/10 bg-gray-210/20 dark:bg-dark-950/50 rounded-lg px-7 p-9 pb-8 mb-8">
            <div className="">
                <ul className="border border-blue-700 bg-blue-700/5 rounded-md p-4 mb-6 font-YekanBakh-Bold text-sm/7 text-blue-700">
                    <li className="">۱.دیدگاه شما بعد از تایید در قسمت نظرات نمایش داده خواهد شد.</li>
                    <li className="">۲.قبل از ارسال حتما از دکمه "پیش نمایش" استفاده کنید تا از درست بودن استایل مطمئن شوید.</li>
                    <li className="">۳.برای ارسال بهتر دیدگاه بر روی آیکون راهنما در ویرایشگر بالا کلیک کنید.</li>
                </ul>
                <div className="flex items-center gap-x-2 border-b border-gray-210 dark:border-gray-210/10 pb-4">
                    {/*<!-- ! -------------------- Profile Image -------------------- ! -->*/}
                    <div className="size-14 rounded-full border-4 border-primary-gray-185 bg-gray-300 overflow-hidden">
                        <img src={defaultProfile} alt="default profile" className="w-full h-full object-cover"/>
                    </div>
                    {/*<!-- ! -------------------- Profile Name -------------------- ! -->*/}
                    <div className="flex flex-col items-start gap-y-1">
                        <Link to="/" className="text-biscay-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-450 transition-all font-Mult-Font-Bold text-lg">{userInfo.fullName}</Link>
                        <span className="font-Mult-Font-Bold text-gray-360 dark:text-gray-200 text-xs">amir._.mahdi@</span>
                    </div>
                </div>
            </div>
            <div className="w-full" dir="rtl">
                {/*<!-- ! -------------------- Editor Actions Buttons -------------------- ! -->*/}
                <div className="flex items-center justify-between mt-5">
                    <div className="">
                        <button className="flex items-center gap-x-2 bg-gray-500/5 hover:bg-blue-500 dark:bg-dark-900 dark:hover:bg-blue-700 text-biscay-700 dark:text-white hover:text-white transition-all p-2 cursor-pointer rounded-md">
                            <DynamicIcon name="document" className="size-4 text-inherit"/>
                            <span className="text-sm font-YekanBakh-Bold">راهنما</span>
                        </button>
                    </div>
                    <div className="inline-flex items-center gap-1 rounded-lg bg-gray-500/5 dark:bg-dark-900 px-3 py-2" dir="ltr">
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
                </div>
                {/*<!-- ! -------------------- Editor Wrapper -------------------- ! -->*/}
                <div className="mt-4">
                    <EditorContent editor={editor} />
                </div>
                {/*<!-- ! -------------------- Send Comments Buttons -------------------- ! -->*/}
                <div className="mt-6 flex justify-end gap-3">
                    <button type="button" onClick={submit} className="rounded-md border border-blue-700 bg-blue-700 hover:bg-transparent px-6 py-3 text-sm text-white hover:text-blue-700 cursor-pointer font-YekanBakh-Bold transition-all">
                        ثبت دیدگاه
                    </button>
                    <button type="button" onClick={toggleShowEditor} className="rounded-md font-YekanBakh-Bold border border-gray-300 hover:bg-gray-300 px-6 py-3 text-sm text-gray-300 hover:text-white transition-all cursor-pointer">
                        انصراف
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CommentEditor;