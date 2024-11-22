import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState(null);

//   Add Note
const addNewNote = async () => {}

// Edit Note
const editNote = async () => {}

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter content");
      return;
    }
    if (!date) {
      setError("Please enter date");
      return;
    }
    if (!location) {
      setError("Please enter location");
      return;
    }

    setError("");

    if(type === 'edit'){
        editNote()
    }else{
        addNewNote()
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      {/* Title Section */}
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Edit event title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Description</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Add event description"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      {/* Date Section */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Date</label>
        <input
          type="date"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
      </div>

      {/* Location Section */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Location</label>
        <input
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Add event location"
          value={location}
          onChange={({ target }) => setLocation(target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
