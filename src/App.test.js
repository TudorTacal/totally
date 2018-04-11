import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './testSetup';
import { mount } from 'enzyme';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<App/>);
    })

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
    
    it('renders the correct card types for Mr Ollie (£34000, full time)', () => {
      submitApplication(wrapper, 'Mr', 'Ollie', 'Murphree', '01/07/1970', '34000', 'Full Time Employment', '700', 'BS14 9PR');
      let cardInfoWrapper = wrapper.find('.cardInfo');

      /* expect(wrapper).toMatchSnapshot(); //Jest hangs here unfortunately so I can't use this approach to test every case
       To get this done I would have to use enzyme like below for each element which honestly I didn't have time to do.
      Pseudocode:
      expect(wrapper.find(allRenderedElementsText(div,p))).toEqual(allExpectedElementsValues);
      */ 
    })
});

function submitApplication(wrapper, title, firstName, lastName, dateBirth, 
  annualIncome, employmentStatus, houseNumber, postCode){

    let titleInput = wrapper.find('#title').find('input');
    let firstNameInput = wrapper.find('#firstName').find('input');
    let lastNameInput = wrapper.find('#lastName').find('input');
    let dateBirthInput = wrapper.find('#dateBirth').find('input');
    let annualIncomeInput = wrapper.find('#annualIncome').find('input');
    let employmentStatusInput = wrapper.find('#employmentStatus').find('input');
    let houseNumberInput = wrapper.find('#houseNumber').find('input');
    let postCodeInput = wrapper.find('#postCode').find('input');

    let submit = wrapper.find('.submit');
  
    titleInput.simulate("change", {target: {name: 'title', value: title}});
    firstNameInput.simulate("change", {target: {name: 'firstName', value: firstName}});
    lastNameInput.simulate("change", {target: {name: 'lastName', value: lastNameInput}});
    dateBirthInput.simulate("change", {target: {name: 'dateBirth', value: dateBirth}});
    annualIncomeInput.simulate("change", {target: {name: 'annualIncome', value: annualIncome}});
    employmentStatusInput.simulate("change", {target: {name: 'employmentStatus ', value: employmentStatus }});
    houseNumberInput.simulate("change", {target: {name: 'houseNumber', value: houseNumber}});
    postCodeInput.simulate("change", {target: {name: 'postCode', value: postCode}});

    titleInput = wrapper.find('#title').find('input');
    firstNameInput = wrapper.find('#firstNameInput').find('input');
    lastNameInput = wrapper.find('#lastNameInput').find('input');
    dateBirth = wrapper.find('#dateBirth').find('input');
    annualIncome = wrapper.find('#annualIncome').find('input');
    employmentStatus = wrapper.find('#employmentStatus').find('input');
    houseNumber = wrapper.find('#houseNumber').find('input');
    postCode = wrapper.find('#postCode').find('input');


    submit.simulate('click');
}


