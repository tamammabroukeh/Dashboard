import React from "react";
import { updateData } from "../../Data/Data";
import "./Updates.css";
export default function Updates() {
  return (
    <div className="Updates">
      {updateData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="img" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
