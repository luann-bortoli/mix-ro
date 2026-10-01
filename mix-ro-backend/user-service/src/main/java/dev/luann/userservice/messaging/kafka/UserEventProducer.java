package dev.luann.userservice.messaging.kafka;

import dev.luann.userservice.user.event.UserCreatedEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class UserEventProducer
{
    private static final String USER_CREATED_TOPIC = "users.created";

    private final KafkaTemplate<String, UserCreatedEvent> kafkaTemplate;

    public void sendUserCreated(UserCreatedEvent event)
    {
        kafkaTemplate.send(
                USER_CREATED_TOPIC,
                event.userId().toString(),
                event
        );
    }

}
