import React, { useRef, useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';
import '../../Css/AddStory.css';
import Select from 'react-select';

const AddStory = () => {

    const { config } = useContext(AuthContext)
    const imageEl = useRef(null)
    const editorEl = useRef(null)
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [categories, setCategories] = useState([])
    const clearInputs = () => {
        setTitle('')
        setCategories([])
        setContent('')
        setImage('')
        editorEl.current.editor.setData('')
        imageEl.current.value = ""
    }

    const categoriesZwei = [
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "bootstrap", label: "Bootstrap" },
        { value: "tailwind", label: "Tailwind" },
        { value: "sass", label: "Sass" },
        { value: "javascript", label: "Javascript" },
        { value: "react", label: "React" },
        { value: "nodejs", label: "NodeJS" },
        { value: "git/github", label: "Git/Github" },
        { value: "express", label: "Express" },
        { value: "mongodb", label: "MongoDB" },        
        { value: "mysql", label: "MySQL" },
        { value: "ubuntu", label: "Ubuntu" },
        { value: "empty", label: "" },
        { value: "usefullinks", label: "Useful Links" },
        { value: "livecoding", label: "Live coding" },
        { value: "exercises", label: "Exercises" },
      ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(categories.map((category) => category.value));
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("categorie", categories.map((category) => ` ${category.value}`))
        formdata.append("image", image)
        formdata.append("content", content)

        try {
            const { data } = await axios.post("/story/addstory", formdata, config)
            setSuccess('Add story successfully ')
            clearInputs()
            setCategories([])
            setTimeout(() => {
                setSuccess('')
            }, 7000)

        }
        catch (error) {
            if (!categories) {
                setError("Please select at least one post category");
            return;
              }
            setTimeout(() => {
                setError('')

            }, 15000)
            setError(error.response.data.error)

        }

    }
    return (

        <div className="Inclusive-addStory-page ">
            <Link to={'/'} >
                <FiArrowLeft />
            </Link>
            <form onSubmit={handleSubmit} className="addStory-form">

                {error && <div className="error_msg">{error}</div>}
                {success && <div className="success_msg">
                    <span>
                        {success}
                    </span>
                    <Link to="/">Go home</Link>
                </div>}

                <input
                    type="text"
                    required
                    id="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <label>
                    <span>Project Category:</span>
                    <Select isSearchable={true} 
                        options={categoriesZwei}
                        onChange={(option) => setCategories(option)}
                        isMulti
                    />
                </label>

                <CKEditor
                    editor={ClassicEditor}
                    onChange={(e, editor) => {
                        const data = editor.getData();
                        setContent(data)
                    }}
                    ref={editorEl}
                />
                <div class="StoryImageField">
                    <AiOutlineUpload />
                    <div class="txt">
                        {image ? image.name :
                            " Include a high-quality image in your story to make it more inviting to readers."
                        }
                    </div>
                    <input
                        name="image"
                        type="file"
                        ref={imageEl}
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                    />
                </div>
                <button type='submit' disabled={image ? false : true} className={image ? 'addStory-btn' : 'dis-btn'}
                >Publish </button>
            </form>

        </div>

    )
}

export default AddStory


