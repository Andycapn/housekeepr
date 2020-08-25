import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  answers: Yup.array().of(
    Yup.object()
      .shape({
        answer: Yup.string().required("Required"),
      })
      .required("Please Answer All Questions")
  ),
});

export { validationSchema };
