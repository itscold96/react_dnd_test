import { useFormData } from '../../../store/formData/formDataStore';
import { isEqual } from 'lodash';
import Section, { ISection } from './Section';

export interface IForm {
  id: string;
  sections: ISection[];
}

function Form() {
  const form: IForm = useFormData(
    (state) => state.form,
    (prevState, nextState) => isEqual(prevState, nextState)
  );
  console.log('form 확인: ', form);
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'blanchedalmond',
        border: '1px solid black'
      }}
    >
      {form.id}
      <div>
        {form.sections.map((section, index) => (
          <Section
            key={section.id}
            parentId={form.id}
            id={section.id}
            rows={section.rows}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Form;
