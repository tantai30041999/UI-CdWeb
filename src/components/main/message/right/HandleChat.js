import React, { Component } from 'react';

class HandleChat extends Component {
    render() {
        return (
            <div className="border-t flex p-6 dark:border-gray-700">
            <textarea cols={1} rows={1} placeholder="Your Message.." className="border-0 flex-1 h-10 min-h-0 resize-none min-w-0 shadow-none dark:bg-transparent" defaultValue={""} />
            <div className="flex h-full space-x-2">
              <button type="submit" className="bg-blue-600 font-semibold px-6 py-2 rounded-md text-white">Send</button>
            </div>
          </div>
        );
    }
}

export default HandleChat;