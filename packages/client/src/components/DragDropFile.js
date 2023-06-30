import React from "react";
import { useDropzone } from "react-dropzone";

export const DragDropFile = ({ children, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "*/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {children}
      </div>
    </section>
  );
};
