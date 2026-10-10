import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function CommentEditor() {
    const [comment, setComment] = useState("");

    return (
        <div className="w-full" dir="rtl">
            <div data-color-mode="dark" dir="ltr">
                <MDEditor
                    value={comment}
                    onChange={(value) => setComment(value || "")}
                    height={300}
                    preview="edit"
                    textareaProps={{
                        placeholder: "متن مورد نظر خود را وارد کنید...",
                        dir: "rtl",
                    }}
                />
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="rounded-md border border-slate-400 px-6 py-3 text-white"
                    >
                        انصراف
                    </button>

                    <button
                        type="button"
                        onClick={() => console.log(comment)}
                        className="rounded-md bg-blue-600 px-6 py-3 text-white"
                    >
                        ثبت دیدگاه
                    </button>
                </div>

                <button
                    type="button"
                    className="text-sm text-white"
                >
                    پیش‌نمایش متن
                </button>
            </div>
        </div>
    );
}

export default CommentEditor;