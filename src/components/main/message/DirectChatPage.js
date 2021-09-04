import React, {useCallback, useEffect, useState} from 'react'

import {ChatEngine} from 'react-chat-engine'

const DirectChatPage = () => {
    const [chatCred, setChatCred] = useState({id: 0, username: '', secret: ''});

    useEffect(() => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        fetch("https://istg-clone.herokuapp.com/api/user/rcc", {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            })
        }).then((response) => response.json()
        ).then((data) => {
            setChatCred(data);
            console.log("chat id:", data.id);
        }).catch((e) => {
            console.log(e);
        });
    }, [])
    // const createDirectChat = (creds) => getOrCreateChat(creds, {
    //     is_direct_chat: true,
    //     usernames: [chatCred.username]
    // }, () => setChatCred({
    //     username: '',
    //     secret: ''
    // }));
    //
    // function renderChatForm(creds) {
    //     return (
    //         <div>
    //             <div className="border-b px-4 py-4 dark:border-gray-600">
    //                 <div className="bg-gray-100 input-with-icon rounded-md dark:bg-gray-700">
    //                     <input id="autocomplete-input" type="text" placeholder="Search"
    //                            className="bg-transparent max-h-10 shadow-none"
    //                            placeholder='Username'
    //                            value={chatCred.username}
    //                            onChange={(e) => setChatCred({username: e.target.value, secret: ''})}
    //                     />
    //                     <i className="icon-material-outline-search"/>
    //                 </div>
    //             </div>
    //             <button onClick={() => createDirectChat(creds)}>
    //                 Create
    //             </button>
    //         </div>
    //     )
    // }

    return (
        <ChatEngine
            height='100vh'
            projectID='53f4a1bf-30a3-4aa8-849c-7e87f2491fee'
            userName={chatCred.username}
            userSecret={chatCred.secret}
            // renderNewChatForm={(creds) => renderChatForm(creds)
            // }
        />
    )
}

export default DirectChatPage;