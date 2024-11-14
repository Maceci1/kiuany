// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage('Qual a sua dúvida?\n1- Como criar minha conta\n2- Como postar uma foto\n3- Conhecendo novas pessoas\n4- Outra opção');
    updateState(message)
  }
  
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;