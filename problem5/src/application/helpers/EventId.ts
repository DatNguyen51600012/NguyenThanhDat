export class EventId
{
    public Id: number
    public Name:string

    constructor(id:number, name:string)
    {
        this.Id = id;
        this.Name = name;
    }

    // Returns a string representation of the object.
    
    public ToString():string
    {
        return `{{ Id=${this.Id}, Name=${this.Name} }}`;
    }

    // Factory method to create an EventId with a specified Id and Name.

    public static Create(name:string):EventId
    {
        //Id random generated

        const id = Math.floor(Math.random() * 1000);

        return new EventId(id, name);
    }
}