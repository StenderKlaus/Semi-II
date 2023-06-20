import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import "../../Css/AddStory.css";
import Select from "react-select";

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const imageEl = useRef(null);
  const editorEl = useRef(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
 
  const clearInputs = () => {
    setTitle("");
    setCategories([]);
    setContent("");
    setImage("");
    editorEl.current.editor.setData("");
    imageEl.current.value = "";
  };

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
    { value: "useful-links", label: "Useful Links" },
    { value: "live-coding", label: "Live coding" },
    { value: "exercises", label: "Exercises" },
  ];

  console.log(title);
  console.log(content);
  console.log(content);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(categories.map((category) => category.value));
    // const formdata = {
    //     "title": title,
    //     "content": content,
    //     "image": image,
    //     "categorie": categories.map((category) => ` ${category.value}`)
    // }
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append(
      "categorie",
      categories.map((category) => category.value).join(",")
    );
    formdata.append("image", image);
    formdata.append("content", content);

    try {
      const response = await axios.post("/story/addstory", formdata, {
        ...config,
        headers: {
          ...config.headers,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      setSuccess("Add story successfully ");
      clearInputs();
      setCategories([]);
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 4000);
    } catch (error) {
      if (!categories) {
        setError("Please select at least one post category");
        return;
      }
      setTimeout(() => {
        setError("");
      }, 7000);
      setError(error.message);
    }
  };
  return (
    <div className="Inclusive-addStory-page ">
      <Link to={"/"}>
        <i className="fa-solid fa-angle-left"></i>
      </Link>
      <form onSubmit={handleSubmit} className="addStory-form">
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>! You will be redirected in 4 seconds
          </div>
        )}

        <input
          type="text"
          required
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="select_div">
          <h6 className="cat_select_p">Please select the relevant categories for this Post</h6>
          <label >
            <span>Post Category:</span>
              <Select className="cat_select_color"
                isSearchable={true}
                options={categoriesZwei}
                onChange={(option) => setCategories(option)}
                isMulti
                />
          </label>
        </div>
        

        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          ref={editorEl}
        />
        <div className="StoryImageField">
          <AiOutlineUpload />
          <div className="txt">
            {image
              ? image.name
              : <p className="image_txt"> " Include a high-quality image in your story to make it more inviting to readers."</p>}
          </div>
          <input
          className="image_input"
            name="image"
            type="file"
            ref={imageEl}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button
          type="submit"
          className="addStory-btn" 
        >
          Publish{" "}
        </button>
      </form>
    </div>
  );
};

export default AddStory;
