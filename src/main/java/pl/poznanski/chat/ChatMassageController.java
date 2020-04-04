package pl.poznanski.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

//tutaj wrzucam rzeczy do koleji - interfejs - naszego Message Brokera !
@Controller
public class ChatMassageController {
   @MessageMapping("/chat")
   //tutaj zamiast message mozna zrobic topic/{user} - i user mozna przeslac jako parametr
   /*
   pobieramy obiekt typu chat message i wrzucamy - wysylamy go na end ponit topic/message
    */
   @SendTo("/topic/messages")
   public ChatMessage get(ChatMessage chatMessage){
       return chatMessage;
   }
}
