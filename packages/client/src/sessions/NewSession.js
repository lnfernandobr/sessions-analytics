import React, { useState } from "react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { DragDropFile } from "../components/DragDropFile";

export const NewSession = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);

  const onAddNewSession = () => {
    console.log(file);
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new sessions
      </Button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add new session"
        description="Please send input file in JSON format correctly"
      >
        <div className=" mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <DragDropFile
            setFiles={(files) => {
              setFile(files.length > 0 ? files[0] : null);
            }}
          >
            <div className="flex items-center justify-center flex-col w-full">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 hover:text-purple-500"
                  >
                    <span>Uploaded file</span>

                    {file ? (
                      file.name
                    ) : (
                      <label
                        htmlFor="file-upload"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Drag or drop file here
                      </label>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </DragDropFile>
        </div>

        <div className="flex justify-end mt-8">
          <Button onClick={onAddNewSession}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};
