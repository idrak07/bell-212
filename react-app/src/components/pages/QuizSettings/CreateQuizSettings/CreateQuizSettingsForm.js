import { Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import Controls from "../../../../ui/FormComponents/controls/Controls";
import { Form, useForm } from "../../../../ui/FormComponents/useForm";

export const userInitialFormValues = {
  title: "",
  startTime: "",
  endTime: "",
};

const CreateQuizSettingsForm = ({ isEdit = false, editQuiz }) => {
  console.log('edit quiz', editQuiz)
  const [editQuizTitle, setEditQuizTitle] = useLocalStorage('editQuizTitle')
  const params = useParams();
  const navigate = useNavigate();
  const validate = (fieldValues = values) => {
    console.log(fieldValues);
    let temp = { ...errors };
    // check validation for all input fileds
    Object.keys(fieldValues).forEach((key) => {
      if (fieldValues[key]) {
        temp[key] = "";
      } else {
        temp[key] = "This field is required";
      }
    });

    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const [{ response, error, isLoading }, createQuiz] = useFetch(
    `${SERVER_URL}/quiz`
  );

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(isEdit ? {title: editQuiz.title, startTime: editQuiz.startTime, endTime: editQuiz.endTime} : userInitialFormValues, true, validate);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (!validate()) {
      return;
    }

    console.log(values);
    if (!isEdit) {
      createAQuiz();
    } else {
      editAQuz();
    }
  };
  useEffect(() => {
      setEditQuizTitle(editQuiz?.title)
  }, [isEdit])

  const createAQuiz = async () => {
    try {
      const res = await createQuiz({
        method: "post",
        data: {
          ...values,
          points: 0,
          topic: params?.topic.toUpperCase()?.replace(" ", "_") || "",
          questions: [],
          assigneeList: [],
          status: "ACTIVE",
        },
      });
      console.log(res);
      toast.success("Successfully quiz created");
      navigate(-1);
    } catch (e) {
      console.log(e);
      toast.error("Couldn't create quiz");
    }
  };

  const editAQuz = async () => {
    try {
      const res = await createQuiz({
        method: "PUT",
        data: {
          ...editQuiz,
          ...values,
        },
      });
      console.log(res);
      toast.success("Successfully quiz edited");
      navigate(-1);
    } catch (e) {
      console.log(e);
      toast.error("Couldn't edit quiz");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Paper style={{ padding: "25px 15px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "15px",
            }}
          >
            <Controls.Input
              id="title"
              type="text"
              placeholder={"Enter Quiz Name"}
              name="title"
              label="Quiz Name"
              value={values.title}
              onChange={handleInputChange}
              error={errors.title}
            />
            <Controls.Input
              id="startTime"
              type="datetime-local"
              placeholder={"Enter Start time"}
              label="Start Time"
              name="startTime"
              value={values.startTime}
              onChange={handleInputChange}
              error={errors.startTime}
            />
            <Controls.Input
              id="endTime"
              type="datetime-local"
              placeholder={"Enter End Time"}
              name="endTime"
              label="End Time"
              value={values.endTime}
              onChange={handleInputChange}
              error={errors.endTime}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <Controls.Button
              type={"Submit"}
              text={`${isEdit ? "Update" : "Create"}`}
            />
          </div>
        </Paper>
      </Form>
    </div>
  );
};

export default CreateQuizSettingsForm;
