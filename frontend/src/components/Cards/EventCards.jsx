import React from "react";
import { MdCreate, MdDelete } from "react-icons/md";

const EventCards = ({ title, date, content, location, onEdit, onDelete }) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>

        {/* <MdOutlinePushPin className='' onclick={onPinNote} /> */}
      </div>

      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex justify-between items-end mt-auto">
        <div className="text-xs text-slate-500">{location}</div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCards;
