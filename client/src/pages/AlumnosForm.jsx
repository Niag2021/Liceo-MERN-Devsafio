import { Form, Formik } from 'formik';
import { createAlumnosRequest } from '../api/alumnos.api';

function AlumnosForm() {
  return (
    <div>
      <Formik
        initialValues={{
          nombre1: "",
          edad: "",
        }}

        onSubmit={async (values) => {
          console.log(values)
          try {
            const response = await createAlumnosRequest(values)
            console.log(response)
          } catch (error) {
            console.log(error);
          }
        }}
      >

        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre 1: </label>
            <input type="text" name="nombre1" placeholder="Ingrese el nombre del estudiante." onChange={handleChange} />

            <label>Edad: </label>
            <textarea name="edad" rows="3" placeholder="Ingrese la edad del estudiante." onChange={handleChange}></textarea>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AlumnosForm