import { EventId } from "@helpers/EventId";

// Create an interface to implement the ILogger in C# using TS with the log debug, log trace, log information, log warning, log error, and log critical methods.
export interface ILogger<T> {
    // Log debug methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logDebug(message?: string,exception?:Error, ...args:object[]): void;

    // Log trace methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logTrace(message?: string,exception?:Error, ...args:object[]): void;
    
    // Log information methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logInformation(message?: string,exception?:Error, ...args:object[]): void;
    
    // Log warning methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logWarning(message?: string, exception?:Error, ...args:object[]): void;

    // Log error methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logError(message?: string,exception?:Error, ...args:object[]): void;
    
    // Log critical methods with different overloads to accept an EventId, an exception, a message, and an object array.
    logCritical<T>(message?: string,exception?:Error, ...args:object[]): void;
}