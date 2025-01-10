import { ILogger } from "@interfaces/common/ILogger";
import { EventId } from "./EventId";
import { Color, bold, italic } from "colors";

export class Logger<T> implements ILogger<T> {

    private readonly className: string;

    constructor() {
        this.className = this.getClassName(Object.create(this.constructor.prototype));
    }
    logDebug( message?: string, exception?: Error, ...args: object[]): void {
        this.log("DEBUG", EventId.Create("Debug"), message, exception, args);
    }
    logTrace( message?: string, exception?: Error, ...args: object[]): void {
        this.log("TRACE", EventId.Create("Stack Trace"), message, exception, args);
    }
    logInformation(message?: string, exception?: Error, ...args: object[]): void {

        this.log("INFO", EventId.Create("Information"), message, exception, args);
    }
    logWarning( message?: string, exception?: Error, ...args: object[]): void {
        this.log("WARN", EventId.Create("Warning"), message, exception, args);
    }
    logError( message?: string, exception?: Error, ...args: object[]): void {
        this.log("ERROR", EventId.Create("Error"), message, exception, args);
    }
    logCritical<T>( message?: string, exception?: Error, ...args: object[]): void {
        this.log("CRITICAL", EventId.Create("Critical Error"), message, exception, args);
    }

    
    getClassName(instance: T): string {
        return instance.constructor?.name || "Unknown";
    }

    private log(level:string, eventId: EventId,message?: string,exception?:Error, ...args: object[]): void {
        const colorize = this.colorize(level);       
        console.log(""); // Añade una línea en blanco entre la información del encabezado y el mensaje

        console.log(colorize(`${bold.dim(`${level}: ${this.className}[${eventId.Id ?? 0}]`)}`));

        if (message || exception) {
            console.log(""); // Añade una línea en blanco entre la información del encabezado y el mensaje
            console.log(`   ${message ?? (exception?.message ?? "")}`);
        }
    
        if (args && args.length > 0 && args !== undefined) {
            console.log(`   ${bold.dim("Args:").blue} ${JSON.stringify(args)}`);
        }
    
        if (exception && exception !== undefined) {
            console.log(`   ${bold.dim("Exception:").red} ${exception.stack}`);
        }
    }

    private colorize(level:string) {

        const colors: { [key: string]: Color } = {
            DEBUG: italic.blue,
            TRACE: italic.green,
            INFO: italic.white,
            WARN: italic.yellow,
            ERROR: italic.red,
            CRITICAL: italic.red
        }
        return colors[level] || ((text: string) => text);
    }

}