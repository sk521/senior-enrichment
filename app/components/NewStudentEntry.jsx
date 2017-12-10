import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGpa } from '../reducers/NewStudentEntry';
import { addNewStudent } from '../reducers/AllStudent';


function NewStudentEntry (props) {
  const {}

  return (

  )
}

const mapStateToProps = function(state) {
  return {
    newStudentFirstName: state.newStudentEntry.newStudentFirstName,
    newStudentLastName: state.newStudentEntry.newStudentLastName
  }
}





// class BasicForm extends Component {

//     constructor( props ) {
//       super( props );
//       this.state = {};
//     }

//     render() {
//       return (
//         <div>
//           <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
//             { formApi => (
//               <form onSubmit={formApi.submitForm} id="form2">
//                 <label htmlFor="firstName">First name</label>
//                 <Text field="firstName" id="firstName" />
//                 <label htmlFor="lastName">Last name</label>
//                 <Text field="lastName" id="lastName" />
//                 <RadioGroup field="gender">
//                   { group => (
//                     <div>
//                       <label htmlFor="male" className="mr-2">Male</label>
//                       <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
//                       <label htmlFor="female" className="mr-2">Female</label>
//                       <Radio group={group} value="female" id="female" className="d-inline-block" />
//                     </div>
//                   )}
//                 </RadioGroup>
//                 <label htmlFor="bio">Bio</label>
//                 <TextArea field="bio" id="bio" />
//                 <label htmlFor="authorize" className="mr-2">Authorize</label>
//                 <Checkbox field="authorize" id="authorize" className="d-inline-block" />
//                 <label htmlFor="status" className="d-block">Relationship status</label>
//                 <Select field="status" id="status" options={statusOptions} />
//                 <button type="submit" className="mb-4 btn btn-primary">Submit</button>
//               </form>
//             )}
//           </Form>
//         </div>
//       );
//     }
//   }
