"use client";
import React, { useActionState, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import MDEditor from "@uiw/react-md-editor";
import { error } from "console";

interface Props {
  title?: string;
  image?: string;
}

const AskPost = ({ title, image }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 10;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [description, setDescription] = React.useState("");

  const handleFormSubmit = (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        image: formData.get("image") as File,
        description,
      };
    } catch (error) {}
  };
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <>
      {/* Modal toggle */}
      <div className="flex justify-center m-5">
        <button
          onClick={handleOpenModal}
          className="header_button"
          type="button"
        >
          <img
            src={`/${title}.png`}
            alt={title}
            className="w-8 h-8 max-sm:hidden max-lg:w-6 max-lg:h-6"
          />
          {title}
        </button>
      </div>

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto bg-gray-800 rounded-xl">
            {/* Modal content */}
            <div className="relative p-4 rounded-lg shadowbg-gray-800 sm:p-5">
              {/* Modal header */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-white">
                  {title === "Ask"
                    ? "What would you like to ask"
                    : "What would you like to share"}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form action={() => {}}>
                <div className=" gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-xl text-white font-bold"
                    >
                      Topic
                    </label>
                    <input
                      type="text"
                      name="Title"
                      id="name"
                      className=" border-gray-300 text-sm  focus:ring-primary-600 focus:border-primary-600 block p-2.5 text-white placeholder:text-b w-full h-full bg-slate-900 border-0 outline-none mb-5 rounded-2xl"
                      placeholder="e.g. Calculus, Thermodynamics,...."
                      required
                    />
                    {errors.topic && (
                      <p className="text-red-500 mt-1">{errors.topic}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-xl text-white font-bold"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      name="Title"
                      id="name"
                      className=" border-gray-300  rounded-2xl focus:ring-primary-600 focus:border-gray-600 block p-2.5 text-white placeholder:text-b w-full h-full bg-slate-900 border-0 outline-none mb-4 text-base"
                      placeholder="e.g. Mathematics, Electrical Engineering,...."
                    />
                    {errors.category && (
                      <p className="text-red-500 mt-1">{errors.category}</p>
                    )}
                  </div>
                  <p className="mt-2 text-xl font-bold">Upload an Image</p>

                  <div>
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        <div>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={onImageUpload}
                            {...dragProps}
                            accept="image/*"
                          />
                          <button
                            className={`w-full min-h-52 bg-slate-900 border-2 border-slate-700 rounded-3xl text-lg px-5 flex flex-row items-center max-md:max-w-[400px] hover:bg-slate-700 justify-center mb-2 ${isDragging ? "bg-gray-400" : ""}`}
                          >
                            <div className="gap-2 text-gray-500 flex items-center flex-col">
                              <img src="/upload.png" className="w-12 h-12" />
                              <p>
                                <span>Click to upload </span> or
                                <span> drag and drop</span>
                              </p>
                              SVG, PNG, JPG or JPEG
                            </div>
                          </button>

                          <button
                            onClick={onImageRemoveAll}
                            className="mt-2 px-2 py-4  bg-slate-700 rounded-2xl transition 
                             hover:bg-red-800 mb-3"
                          >
                            Remove image
                          </button>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img src={image.dataURL} alt="" width="100" />
                              <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>
                                  Update
                                </button>
                                <button onClick={() => onImageRemove(index)}>
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-xl font-bold text-white mt-3"
                    >
                      Description
                    </label>
                    {/* <textarea
                      id="description"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-white bg-gray-900 border border-slate-700 focus:ring-primary-500 focus:border-primary-500  placeholder-gray-400 rounded-xl min-h-44"
                      placeholder={`Write your ${
                        title ? "question" : "post"
                      } here`}
                      required
                    ></textarea> */}
                    <MDEditor
                      value={description}
                      onChange={(value) => setDescription(value as string)}
                      style={
                        {
                          "--tw-bg-opacity": 1,
                          backgroundColor:
                            "rgb(17 24 39 / var(--tw-bg-opacity))",
                          borderRadius: "0.75rem",
                          overflow: "hidden",
                          minheight: "13rem",
                        } as any
                      }
                      textareaProps={{
                        placeholder: `Write your ${title ? "question" : "post"} here`,
                      }}
                      previewOptions={{
                        disallowedElements: ["style"],
                      }}
                    />
                    {errors.description && (
                      <p className="text-red-500 mt-1">{errors.description}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-red-800 focus:ring-4 focus:outline-none transition 
                            hover:text-slate-500 focus:ring-primary-300 font-medium rounded-2xl text-sm px-6 py-2.5 text-center"
                  disabled={isPending}
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {isPending && title === "Ask"
                    ? "Asking..."
                    : isPending && title === "Post"
                      ? "Posting..."
                      : title}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskPost;
