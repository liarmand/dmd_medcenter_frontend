import {
  Form, Input, Select, Checkbox, Button, AutoComplete, Radio, InputNumber
} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import React from "react";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    isMale: true
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      isMale: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
          values.username,
          values.password,
          this.state.isMale? 'male':'female',
          values.age,
          values.nid,
          values.address,
          values.salary,

        );
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div className='regForm'>
        <div style={{textAlign: "center", margin: '3%'}}>
          Sign Up
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            label="Username"
            stile={{font: "normal 40px/1 \"gentium-book-basic\", Helvetica, sans-serif"}}
          >
            {getFieldDecorator('username', {
              rules: [{
                required: true, message: 'Please input your Username!',
              }],
            })(
              <Input/>
            )}
          </Form.Item>
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password"/>
            )}
          </Form.Item>
          <Form.Item
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur}/>
            )}
          </Form.Item>
          <Form.Item>
            <Radio.Group onChange={this.onChange} value={this.state.isMale}>
              <Radio value={true}>Male</Radio>
              <Radio value={false}>Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Age"
            stile={{font: "normal 40px/1 \"gentium-book-basic\", Helvetica, sans-serif"}}
          >
            {getFieldDecorator('age', {
              rules: [{
                required: true, message: 'Please input your age!',
              }],
            })(
              <InputNumber/>
            )}
          </Form.Item>


          <Form.Item
            label="NID"
            stile={{font: "normal 40px/1 \"gentium-book-basic\", Helvetica, sans-serif"}}
          >
            {getFieldDecorator('nid', {
              rules: [{
                required: true, message: 'Please input your NID!',
              }],
            })(
              <Input/>
            )}
          </Form.Item>

          <Form.Item
            label="Address"
            stile={{font: "normal 40px/1 \"gentium-book-basic\", Helvetica, sans-serif"}}
          >
            {getFieldDecorator('address', {
              rules: [{
                required: true, message: 'Please input your address!',
              }],
            })(
              <Input/>
            )}
          </Form.Item>


          <Form.Item
            label="Salary"
            stile={{font: "normal 40px/1 \"gentium-book-basic\", Helvetica, sans-serif"}}
          >
            {getFieldDecorator('salary', {
              rules: [{
                required: true, message: 'Please input your Salary!',
              }],
            })(
              <InputNumber/>
            )}
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const SignUp = Form.create({name: 'register'})(RegistrationForm);
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username,password,sex,age,nid,address,salary) => dispatch(actions.authSignup(username,password,sex,age,nid,address,salary))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);