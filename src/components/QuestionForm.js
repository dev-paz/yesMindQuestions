import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input } from 'reactstrap';
import "./Styles.css"

const QuestionForm = (props) => {

    return (
      <div className='form-position'>
      <FormGroup tag="fieldset" >
        <h2 className="question-title">Is YesMind the best business ever?</h2>
        <FormGroup check>
          <Label className="question-title" check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label className="question-title" check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label className="question-title" check>
            <Input type="radio" name="radio1" />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      </div>
    );
  }

export default QuestionForm;
