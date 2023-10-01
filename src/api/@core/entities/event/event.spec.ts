import { describe, expect, test } from "vitest";
import Event, { eventType } from "./event";
import User from "../user";

describe('Event tests', () => {
    test('create an event', () => {
        const event = Event.create({
            date: new Date('10/10/2023 10:00:00'),
            description: 'Evento de teste',
            event_class: 'event-class',
            duration: new Date('10/10/2023 11:00:00'),
            responsible: User.create({name: 'User', email: 'XXXXXXXXXXXXXX', role: 'user'}),
            type: eventType.VIRTUAL,
        });

        expect(event).toBeInstanceOf(Event)
    });
});