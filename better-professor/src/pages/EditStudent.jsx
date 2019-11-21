import React from "react";

import EditStudentForm from "../components/EditStudentForm";

const EditStudent = (props) => {
    return (
        <div>
            <EditStudentForm
            {...props}
            />
        </div>
    )
}

export default EditStudent;