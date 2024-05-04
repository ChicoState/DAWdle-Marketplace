import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title required"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="standard">Standard Graph</option>
            <option value="unique">Unique Graph</option>
            <option value="partial">Partial Graph</option>
            <option value="issue">Issue Graph</option>
            <option value="question">Question</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-green-400 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            className="bg-gradient-to-r from-slate-700 to-green-400 rounded-lg text-white"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write Something.."
          className="h-72 mb-12"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-t from-slate-600 to-green-400 text-white"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
