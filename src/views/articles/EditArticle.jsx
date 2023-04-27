import { useState } from "react";
import { ArticleForm } from "./ArticleForm";
import { useParams } from "react-router-dom";

export function EditArticle({}) {
    const params = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    console.log(params.id);

    function onSubmit(e) {
        e.preventDefault();

        // TODO
    }

    return(
        <div id="page-content">
            <h1 class="text-center mt-4">Edit Article</h1>
            <ArticleForm
                categories={[]}   // TODO
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                onSubmit={onSubmit}
            />
        </div>
    )
}
