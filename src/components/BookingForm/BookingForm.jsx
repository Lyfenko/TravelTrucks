import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { useSelector, useDispatch } from "react-redux";
import { selectBooking } from "../../redux/campers/selectors";
import { changeBooking } from "../../redux/campers/slice";
import { format } from "date-fns";

import css from "./BookingForm.module.css";

const BookingForm = ({ camperId }) => {
  const dispatch = useDispatch();
  const booking = useSelector(selectBooking);

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is mandatory."),
    date: Yup.date().required("Select a booking date."),
  });

  const handleSubmit = (camperId) => async (values, actions) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      actions.resetForm();

      const bookingDate = format(values.date, "dd/MM/yyyy");

      if (camperId in booking) {
        if (bookingDate in booking[camperId]) {
          if (booking[camperId][bookingDate] === values.email) {
            iziToast.warning({
              title: "Already Reserved",
              message: `This campervan is already booked for you on ${bookingDate}.`,
              position: "topRight",
            });
          } else {
            iziToast.error({
              title: "Unavailable",
              message: `This campervan is booked on ${bookingDate}.`,
              position: "topRight",
            });
          }
          return;
        }
      }

      dispatch(
        changeBooking({ id: camperId, date: bookingDate, email: values.email })
      );
      iziToast.success({
        title: "Booking Confirmed",
        message: "Your booking was successful.",
        position: "topRight",
      });
    } catch (error) {
      const errors = error.inner.map(err => err.message);
      iziToast.error({
        title: "Validation Errors",
        message: errors.join(" "),
        position: "topRight",
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: null,
        comment: "",
      }}
      onSubmit={(values, actions) => handleSubmit(camperId)(values, actions)}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.formContainer} noValidate>
          <div className={css.formInfo}>
            <h3>Reserve Your Campervan</h3>
            <p>Stay connected! We are here to assist you.</p>
          </div>
          <div className={css.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.field}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.field}
            />
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className={css.field}
              placeholderText="Booking date*"
            />
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={clsx(css.field, css.stretched)}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
