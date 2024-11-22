import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EventCards from "../../components/Cards/EventCards";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setopenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <EventCards
            title="title"
            date="date"
            content="content"
            location="location"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setopenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-34 bg-white rounded mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
          onClose={() => {
            setopenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
