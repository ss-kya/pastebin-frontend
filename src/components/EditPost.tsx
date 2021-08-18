import React from "react";
import { useState, useEffect } from "react";
import { IProp } from "../utils/types";

function EditPost({post}:IProp): JSX.Element {
  return (
    <>
      {/* Trigger the modal with a button*/}
      <button
        type="button"
        className="btn btn-info btn-md btn-warning"
        data-toggle="modal"
        data-target="#myModal"
      >
        Edit
      </button>

      {/* Modal */}
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          
          {/* Modal header */}
          <div className="modal-content">
            <div className="modal-header modal-dialog modal-sm">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              ></button>
              <h4 className="modal-title">Edit Paste</h4>
            </div>

            {/* Modal content */}
            <div className="modal-body">
              <input type="text" className="form-control" />
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
            <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
