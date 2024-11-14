import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';

const config = {
  initialMessages: [createChatBotMessage(`Olá, Bem Vindo! A serviços do instagram`,{
    widget: "startBtn"
  })],
  botName: "Insta-serv",
  customComponents: {
    botAvatar: (props) => <Avatar {... props}/>
  },
  widgets: [
    {
      widgetName: "StartBtn",
      widgetFunc: (props) => <StartBtn {...props}/>,
    },
  ]


};


export default config;