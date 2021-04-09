import React, { Component } from 'react';

class InfoBasicForm extends Component {
    render() {
        return (
            <div className="bg-white rounded-md lg:shadow-lg shadow col-span-2">
                <div className="grid grid-cols-2 gap-3 lg:p-6 p-4">
                  <div>
                    <label htmlFor> First name</label>
                    <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
                  </div>
                  <div>
                    <label htmlFor> Last name</label>
                    <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor> Email</label>
                    <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="about">About me</label>  
                    <textarea id="about" name="about" rows={3} className="shadow-none bg-gray-100" defaultValue={""} />
                  </div> 
                  <div className="col-span-2">
                    <label htmlFor> Location</label>
                    <input type="text" placeholder className="shadow-none bg-gray-100" />
                  </div>
                  <div>
                    <label htmlFor> Working at</label>
                    <input type="text" placeholder className="shadow-none bg-gray-100" />
                  </div> 
                  <div>
                    <label htmlFor> Relationship </label>
                    <select id="relationship" name="relationship" className="shadow-none bg-gray-100">
                      <option value={0}>None</option>
                      <option value={1}>Single</option>
                      <option value={2}>In a relationship</option>
                      <option value={3}>Married</option>
                      <option value={4}>Engaged</option>
                    </select>
                  </div>
                </div> 
                <div className="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
                  <button className="p-2 px-4 rounded bg-gray-50 text-red-500"> Cancel </button>
                  <button type="button" className="button bg-blue-700"> Save </button>
                </div>
              </div>
        );
    }
}

export default InfoBasicForm;