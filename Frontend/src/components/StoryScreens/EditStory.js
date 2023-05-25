import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Loader from '../GeneralScreens/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai'
import '../../Css/EditStory.css'

import Select from 'react-select';

const EditStory = () => {
    const { config } = useContext(AuthContext)
    const slug = useParams().slug
    const imageEl = useRef(null)
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState({})
    const [image, setImage] = useState(null)
    const [previousImage, setPreviousImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    const [categories, setCategories] = useState([])

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

    useEffect(() => {

        const getStoryInfo = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`/story/editStory/${slug}`, config)
                setStory(data.data)
                setTitle(data.data.title)
                setContent(data.data.content)
                // setCategories(data.data.categorie)
                setImage(data.data.image)
                setPreviousImage(data.data.image)
                setLoading(false)
            }
            catch (error) {
                navigate("/")
            }
        }
        getStoryInfo()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formdata = new FormData()
        formdata.append("title", title)
         formdata.append("categorie", categories.map((category) => category.value).join(','));
        formdata.append("content", content)
        formdata.append("image", image)
        formdata.append("previousImage", previousImage)
        
        console.log(previousImage)

        try {
            const response = await axios.put(`/story/${slug}/edit`, formdata, {
                ...config,
                headers: {
                    ...config.headers,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(response.data)
            
            setSuccess('Edit Story successfully ')
            
            setTimeout(() => {
                navigate('/')
            }, 15000)
            
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
        <>
            {
                loading ? <Loader /> : (
                    <div className="Inclusive-editStory-page ">
                        <form onSubmit={handleSubmit} className="editStory-form">

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
                            <h6>Please reselect the relevant categories for this Post</h6>
                <label>
                    <span>Post Category:</span>
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
                                data={content}

                            />

                            <div className="currentlyImage">
                                <div className="absolute">
                                    Currently Image
                                </div>
                                <img src={`${previousImage}`} alt="storyImage" />
                            </div>
                            <div className="StoryImageField">
                                <AiOutlineUpload />
                                <div className="txt">

                                    {image === previousImage ? "    Change the image in your story " :
                                        image.name}

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

                            <button type='submit' className='editStory-btn'
                            >Edit Story </button>
                        </form>

                    </div>
                )
            }
        </>
    )
}

export default EditStory;
