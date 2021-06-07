import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
    const [username, setUsername] = useState('')



    var createDirectChat = (creds) => getOrCreateChat(creds, { is_direct_chat: true, usernames: [username] }, () => setUsername(''));

    function renderChatForm(creds) {
        return (
            <div>
                <div className="border-b px-4 py-4 dark:border-gray-600">
                    <div className="bg-gray-100 input-with-icon rounded-md dark:bg-gray-700">
                        <input id="autocomplete-input" type="text" placeholder="Search" className="bg-transparent max-h-10 shadow-none"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <i className="icon-material-outline-search" />
                    </div>
                </div>
                <button onClick={() => createDirectChat(creds)}>
                    Create
				</button>
            </div>
        )
    }

    return (
        <ChatEngine
            height='100vh'
            projectID='53f4a1bf-30a3-4aa8-849c-7e87f2491fee'
            userName='admin@example.com'
            userSecret='0e8717691cc36c56ed2e2cd5e3dba11e61de135c900d92e8d7e8d28ab46dd8b9'
            renderNewChatForm={(creds) => renderChatForm(creds)}
        />
    )
}

export default DirectChatPage;