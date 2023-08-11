import { FormStyled, Label, Input, Error, Button } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    ),
  number: Yup.string()
    .length(9)
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d/,
      'Invalid number'
    ),
});

const initialValues = {
    name: '',
    number: ''
};

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (values, { resetForm }) => {
        
        const newName = contacts.some(contact =>
                contact.name.toLowerCase() === values.name.toLowerCase());
                if (newName) {
                return alert(`${values.name} is already in contacts`);
                }

        dispatch(addContact(values.name, values.number));
        resetForm();
    };

        return (
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={schema}>
                <FormStyled autoComplete="off" >
                    <Label htmlFor='name'>Name</Label>
                    <Input type="text" name="name" placeholder="Jacob Mercer" />
                    <ErrorMessage component={Error} name="name" />

                    <Label htmlFor='number'>Number</Label>
                    <Input type="tel" name="number" placeholder="787-78-78" maxlength="9" />
                    <ErrorMessage component={Error} name="number"/>
                    <Button type="submit">Add contact</Button>
                </FormStyled>
            </Formik>
        );
};

