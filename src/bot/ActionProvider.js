class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const message = this.createChatbotMessage("Hello! How can I help you?");
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  search() {
    const message = this.createChatbotMessage("What would you like to search for?");
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  handleSearchResult(result) {
    const message = this.createChatbotMessage(result);
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  // --- Add this method ---
  async searchDatabase(message) {
    try {
      const response = await fetch('https://philosopher-bot-backend.onrender.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const results = await response.json();
      if (results.length > 0) {
        results.forEach(entry => {
          const msg = this.createChatbotMessage(entry.sentence);
          this.setState(prev => ({
            ...prev,
            messages: [...prev.messages, msg]
          }));
        });
      } else {
        const msg = this.createChatbotMessage("No results found.");
        this.setState(prev => ({
          ...prev,
          messages: [...prev.messages, msg]
        }));
      }
    } catch (error) {
      const msg = this.createChatbotMessage("Error connecting to the server.");
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, msg]
      }));
    }
  }
}

export default ActionProvider;


// commit 3 - successfully runs locally and returns results - 01-06-25
//
// class ActionProvider {
//   constructor(createChatbotMessage, setStateFunc, createClientMessage) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   greet() {
//     const message = this.createChatbotMessage("Hello! How can I help you?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   search() {
//     const message = this.createChatbotMessage("What would you like to search for?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   handleSearchResult(result) {
//     const message = this.createChatbotMessage(result);
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   // --- Add this method ---
//   async searchDatabase(message) {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/search', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message })
//       });
//       const results = await response.json();
//       if (results.length > 0) {
//         results.forEach(entry => {
//           const msg = this.createChatbotMessage(entry.sentence);
//           this.setState(prev => ({
//             ...prev,
//             messages: [...prev.messages, msg]
//           }));
//         });
//       } else {
//         const msg = this.createChatbotMessage("No results found.");
//         this.setState(prev => ({
//           ...prev,
//           messages: [...prev.messages, msg]
//         }));
//       }
//     } catch (error) {
//       const msg = this.createChatbotMessage("Error connecting to the server.");
//       this.setState(prev => ({
//         ...prev,
//         messages: [...prev.messages, msg]
//       }));
//     }
//   }
// }

// export default ActionProvider;

// commit 2 - searches but returns no results - 01-06-25
//
// class ActionProvider {
//   constructor(createChatbotMessage, setStateFunc, createClientMessage) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   greet() {
//     const message = this.createChatbotMessage("Hello! How can I help you?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   search() {
//     const message = this.createChatbotMessage("What would you like to search for?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   handleSearchResult(result) {
//     const message = this.createChatbotMessage(result);
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }

//   // --- Add this method ---
//   async searchDatabase(message) {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/search', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message })
//       });
//       const results = await response.json();
//       if (results.length > 0) {
//         results.forEach(entry => {
//           this.handleSearchResult(entry.info);
//         });
//       } else {
//         this.handleSearchResult("No results found.");
//       }
//     } catch (error) {
//       this.handleSearchResult("Error connecting to the server.");
//     }
//   }
// }

// export default ActionProvider;

// class ActionProvider {
//     // The action provider receives createChatBotMessage which you can use to define the bots response, and 
//   // the setState function that allows for manipulating the bots internal state.
//   constructor(createChatbotMessage, setStateFunc, createClientMessage) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   // Example action
//   greet() {
//     const message = this.createChatbotMessage("Hello! How can I help you?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }
//   search() {
//     const message = this.createChatbotMessage("What would you like to search for?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }
//   handleSearchResult(result) {
//   const message = this.createChatbotMessage(result);
//   this.setState(prev => ({
//     ...prev,
//     messages: [...prev.messages, message]
//   }));
// }
// }

// export default ActionProvider;




// commit 1 - 01-06-25
//
// class ActionProvider {
//     // The action provider receives createChatBotMessage which you can use to define the bots response, and 
//   // the setState function that allows for manipulating the bots internal state.
//   constructor(createChatbotMessage, setStateFunc, createClientMessage) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   // Example action
//   greet() {
//     const message = this.createChatbotMessage("Hello! How can I help you?");
//     this.setState(prev => ({
//       ...prev,
//       messages: [...prev.messages, message]
//     }));
//   }
// }

// export default ActionProvider;



// import { useState } from 'react';

// const ActionProvider = {
//     createChatbotMessage,
//     setState: (state) => setState(state),
//     createClientMessage: (text) => createChatBotMessage(text, { widget: 'default'}),
// };

// export default ActionProvider;